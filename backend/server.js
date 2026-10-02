'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');
const { URL } = require('url');
function loadLocalEnv() {
  const file = path.join(__dirname, '.env');
  if (!fs.existsSync(file)) return;
  for (const rawLine of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq < 1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadLocalEnv();
const { PRODUCTS, publicCatalog, toMinorUnits, CURRENCY, KIT_PRICE_USD } = require('./catalog');

const ROOT = path.resolve(__dirname, '..');
const SEED_DATA_DIR = path.join(__dirname, 'data');
const DATA_DIR = process.env.VERCEL ? path.join('/tmp', 'tabaq-data') : SEED_DATA_DIR;
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const QUOTES_FILE = path.join(DATA_DIR, 'quotes.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const WAITLIST_FILE = path.join(DATA_DIR, 'waitlist.json');
const INVENTORY_FILE = path.join(DATA_DIR, 'inventory.json');
const FX_CACHE_FILE = path.join(DATA_DIR, 'fx-cache.json');

const PORT = Number(process.env.PORT || 8787);
const STRIPE_API_VERSION = process.env.STRIPE_API_VERSION || '2025-04-30.basil';
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';
const PUBLIC_SITE_URL = (process.env.PUBLIC_SITE_URL || '').replace(/\/$/, '');
const OPERATIONS_WEBHOOK_URL = process.env.OPERATIONS_WEBHOOK_URL || '';
const WISE_API_TOKEN = process.env.WISE_API_TOKEN || '';
const WISE_API_VERSION = process.env.WISE_API_VERSION || '2026Q4';
const WISE_RATE_TTL_MS = Math.max(1, Number(process.env.WISE_RATE_CACHE_MINUTES || 10)) * 60_000;
const WISE_MAX_STALE_MS = Math.max(1, Number(process.env.WISE_MAX_STALE_HOURS || 24)) * 60 * 60_000;
const WISE_PUBLIC_RATE_URL = 'https://wise.com/us/currency-converter/usd-to-zar-rate';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8', '.ico': 'image/x-icon'
};

const rateBuckets = new Map();
function rateLimited(req, key, max = 20, windowMs = 60_000) {
  const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0].trim();
  const bucketKey = `${key}:${ip}`;
  const now = Date.now();
  const bucket = rateBuckets.get(bucketKey) || { start: now, count: 0 };
  if (now - bucket.start > windowMs) { bucket.start = now; bucket.count = 0; }
  bucket.count += 1;
  rateBuckets.set(bucketKey, bucket);
  return bucket.count > max;
}

function ensureStore() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const seeds = [[ORDERS_FILE,'orders.json',[]],[QUOTES_FILE,'quotes.json',[]],[MESSAGES_FILE,'messages.json',[]],[WAITLIST_FILE,'waitlist.json',[]]];
  for (const [file, seedName, fallback] of seeds) {
    if (!fs.existsSync(file)) {
      const seed = path.join(SEED_DATA_DIR, seedName);
      fs.writeFileSync(file, fs.existsSync(seed) ? fs.readFileSync(seed) : JSON.stringify(fallback, null, 2) + '\n');
    }
  }
  if (!fs.existsSync(INVENTORY_FILE)) {
    const seed = path.join(SEED_DATA_DIR, 'inventory.json');
    const initial = fs.existsSync(seed) ? fs.readFileSync(seed) : JSON.stringify(Object.fromEntries(Object.values(PRODUCTS).map((p) => [p.id, Number(p.stock) || 0])), null, 2) + '\n';
    fs.writeFileSync(INVENTORY_FILE, initial);
  }
}

function readJsonFile(file, fallback) {
  ensureStore();
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (_) { return fallback; }
}
function writeJsonAtomic(file, value) {
  ensureStore();
  const temp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temp, JSON.stringify(value, null, 2) + '\n');
  fs.renameSync(temp, file);
}
function readList(file) { const value = readJsonFile(file, []); return Array.isArray(value) ? value : []; }
function saveRecord(file, record) {
  const list = readList(file);
  const index = list.findIndex((item) => item.id === record.id);
  const now = new Date().toISOString();
  if (index >= 0) list[index] = { ...list[index], ...record, updated_at: now };
  else list.push({ ...record, created_at: record.created_at || now, updated_at: now });
  writeJsonAtomic(file, list);
  return list.find((item) => item.id === record.id);
}
function readOrders() { return readList(ORDERS_FILE); }
function saveOrder(order) { return saveRecord(ORDERS_FILE, order); }
function readInventory() {
  const value = readJsonFile(INVENTORY_FILE, {});
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}
function writeInventory(value) { writeJsonAtomic(INVENTORY_FILE, value); }

function json(res, statusCode, payload, headers = {}) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers });
  res.end(body);
}
function notFound(res) { json(res, 404, { error: 'not_found', message: 'Route not found.' }); }

function readBody(req, limitBytes = 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = []; let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limitBytes) { const e = new Error('Request body too large.'); e.statusCode = 413; reject(e); req.destroy(); return; }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}
async function readJson(req) {
  const raw = await readBody(req);
  if (!raw.length) return {};
  try { return JSON.parse(raw.toString('utf8')); } catch (_) { const e = new Error('Invalid JSON body.'); e.statusCode = 400; throw e; }
}
function cleanText(value, max = 500) { return String(value == null ? '' : value).trim().slice(0, max); }
function validEmail(value) { return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(value || '').trim()); }
function totalQuantity(lines) { return lines.reduce((sum, line) => sum + line.quantity, 0); }

function validFxRate(value) { return Number.isFinite(Number(value)) && Number(value) > 1; }
function convertZarToUsd(amountZar, usdZarRate) {
  if (!validFxRate(usdZarRate)) { const e = new Error('A current Wise USD/ZAR rate is required for USD checkout.'); e.statusCode = 503; e.code = 'wise_rate_required'; throw e; }
  return Math.round((Number(amountZar) / Number(usdZarRate)) * 100) / 100;
}
function readFxCache() {
  const value = readJsonFile(FX_CACHE_FILE, null);
  return value && typeof value === 'object' && validFxRate(value.usd_zar) ? value : null;
}
function writeFxCache(value) { writeJsonAtomic(FX_CACHE_FILE, value); }
async function fetchWiseApiRate() {
  if (!WISE_API_TOKEN) return null;
  const endpoint = `https://api.wise.com/${encodeURIComponent(WISE_API_VERSION)}/rates?source=USD&target=ZAR`;
  const response = await fetch(endpoint, { headers: { 'Authorization': `Bearer ${WISE_API_TOKEN}`, 'Accept': 'application/json' } });
  if (!response.ok) throw new Error(`Wise API returned ${response.status}.`);
  const payload = await response.json();
  const row = Array.isArray(payload) ? payload.find((item) => item && item.source === 'USD' && item.target === 'ZAR') || payload[0] : null;
  if (!row || !validFxRate(row.rate)) throw new Error('Wise API did not return a valid USD/ZAR rate.');
  return { usd_zar: Number(row.rate), provider: 'Wise', method: 'official_api', provider_time: row.time || null };
}
async function fetchWisePublicRate() {
  const response = await fetch(WISE_PUBLIC_RATE_URL, { headers: { 'Accept': 'text/html', 'User-Agent': 'Mozilla/5.0 TABAQ-FX/1.0' } });
  if (!response.ok) throw new Error(`Wise public converter returned ${response.status}.`);
  const html = await response.text();
  const match = html.match(/(?:\$?1\s*USD\s*=\s*|1\s*USD[^0-9]{0,80})([0-9]{1,3}(?:\.[0-9]{2,6})?)\s*ZAR/i);
  if (!match || !validFxRate(match[1])) throw new Error('Wise public converter rate could not be read.');
  return { usd_zar: Number(match[1]), provider: 'Wise', method: 'public_converter', provider_time: null };
}
async function getWiseUsdZarRate({ force = false } = {}) {
  const now = Date.now();
  const cached = readFxCache();
  const cachedAge = cached?.fetched_at ? now - Date.parse(cached.fetched_at) : Infinity;
  if (!force && cached && cachedAge <= WISE_RATE_TTL_MS) return { ...cached, stale: false };
  let lastError = null;
  try {
    const live = await fetchWiseApiRate();
    if (live) {
      const record = { ...live, fetched_at: new Date().toISOString(), reference_url: WISE_PUBLIC_RATE_URL };
      writeFxCache(record); return { ...record, stale: false };
    }
  } catch (error) { lastError = error; }
  try {
    const live = await fetchWisePublicRate();
    if (live) {
      const record = { ...live, fetched_at: new Date().toISOString(), reference_url: WISE_PUBLIC_RATE_URL };
      writeFxCache(record); return { ...record, stale: false };
    }
  } catch (error) { lastError = error; }
  if (cached && cachedAge <= WISE_MAX_STALE_MS) return { ...cached, stale: true };
  const e = new Error('The live Wise USD/ZAR reference rate is temporarily unavailable. ZAR remains the store price of record.');
  e.statusCode = 503; e.code = 'wise_rate_unavailable'; e.cause = lastError;
  throw e;
}

function validateItems(items) {
  if (!Array.isArray(items) || !items.length) { const e = new Error('Your cart is empty. Add a kit before continuing.'); e.statusCode = 400; throw e; }
  const inventory = readInventory();
  const combined = new Map();
  for (const item of items) {
    const id = cleanText(item && item.id, 80);
    const quantity = Math.max(1, Math.min(9, Number.parseInt(item && item.quantity, 10) || 1));
    combined.set(id, (combined.get(id) || 0) + quantity);
  }
  const lines = [];
  for (const [id, quantity] of combined.entries()) {
    const product = PRODUCTS[id];
    if (!product || !product.active) { const e = new Error(`Product not available: ${id || 'unknown'}`); e.statusCode = 400; throw e; }
    const available = Number(inventory[id] ?? product.stock ?? 0);
    if (quantity > available) { const e = new Error(`Only ${available} ${product.name} kits are currently available.`); e.statusCode = 409; e.code = 'stock_limit_exceeded'; throw e; }
    lines.push({ product, quantity, subtotal: product.price * quantity });
  }
  return { lines, total: lines.reduce((s, l) => s + l.subtotal, 0), currency: CURRENCY };
}

function requestOrigin(req) {
  if (PUBLIC_SITE_URL) return PUBLIC_SITE_URL;
  const host = req.headers.host || `localhost:${PORT}`;
  const proto = req.headers['x-forwarded-proto'] || 'http';
  return `${proto}://${host}`;
}

function stripeLineItemParams(summary, shippingAmount = 0, shippingLabel = '', checkoutCurrency = summary.currency, fxRate = null) {
  const params = new URLSearchParams();
  summary.lines.forEach((line, index) => {
    const prefix = `line_items[${index}]`;
    const unitPrice = checkoutCurrency === 'usd' ? Number(line.product.usd_price || KIT_PRICE_USD) : Number(line.product.price);
    params.append(`${prefix}[quantity]`, String(line.quantity));
    params.append(`${prefix}[price_data][currency]`, checkoutCurrency);
    params.append(`${prefix}[price_data][unit_amount]`, String(toMinorUnits(unitPrice)));
    params.append(`${prefix}[price_data][product_data][name]`, `${line.product.name} — TABAQ five-piece layering kit`);
    params.append(`${prefix}[price_data][product_data][description]`, 'Layering Veil 50ml + Eau de Parfum 30ml + Layering Essence 01 10ml + Layering Essence 02 10ml + bonus Scent Balm 5ml.');
    params.append(`${prefix}[price_data][product_data][metadata][product_id]`, line.product.id);
    params.append(`${prefix}[price_data][product_data][metadata][layers]`, line.product.layers.join(', '));
  });
  if (Number(shippingAmount) > 0) {
    const index = summary.lines.length;
    const prefix = `line_items[${index}]`;
    params.append(`${prefix}[quantity]`, '1');
    params.append(`${prefix}[price_data][currency]`, checkoutCurrency);
    params.append(`${prefix}[price_data][unit_amount]`, String(toMinorUnits(shippingAmount)));
    params.append(`${prefix}[price_data][product_data][name]`, shippingLabel || 'Delivery');
    params.append(`${prefix}[price_data][product_data][description]`, 'Delivery charge quoted for this destination before payment.');
  }
  return params;
}

async function stripeRequest(endpoint, options = {}) {
  if (!STRIPE_SECRET_KEY) { const e = new Error('Secure checkout is temporarily unavailable.'); e.statusCode = 503; e.code = 'stripe_not_configured'; throw e; }
  const response = await fetch(`https://api.stripe.com/v1/${endpoint}`, {
    ...options,
    headers: { 'Authorization': `Bearer ${STRIPE_SECRET_KEY}`, 'Stripe-Version': STRIPE_API_VERSION, ...(options.headers || {}) }
  });
  const payload = await response.json();
  if (!response.ok) { const e = new Error(payload?.error?.message || 'Secure checkout could not be created.'); e.statusCode = response.status; e.code = 'stripe_error'; throw e; }
  return payload;
}

async function createStripeCheckoutSession(req, summary, orderId, { countryCode = 'ZA', shippingAmount = 0, shippingLabel = 'Delivery', checkoutCurrency = summary.currency, customerEmail = '', fxRate = null } = {}) {
  const origin = requestOrigin(req);
  const params = stripeLineItemParams(summary, shippingAmount, shippingLabel, checkoutCurrency, fxRate);
  params.append('mode', 'payment');
  params.append('success_url', `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}&order_id=${encodeURIComponent(orderId)}`);
  params.append('cancel_url', `${origin}/cancel.html`);
  params.append('metadata[order_id]', orderId);
  params.append('metadata[source]', 'tabaq-rev239');
  params.append('allow_promotion_codes', 'true');
  params.append('billing_address_collection', 'auto');
  params.append('customer_creation', 'always');
  if (validEmail(customerEmail)) params.append('customer_email', customerEmail);
  if (/^[A-Z]{2}$/.test(countryCode)) params.append('shipping_address_collection[allowed_countries][0]', countryCode);
  return stripeRequest('checkout/sessions', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: params });
}

async function fetchStripeSession(sessionId) {
  if (!sessionId || !/^cs_[A-Za-z0-9_]+$/.test(sessionId)) return null;
  return stripeRequest(`checkout/sessions/${encodeURIComponent(sessionId)}`, { method: 'GET' });
}

function commitInventory(orderId) {
  const orders = readOrders();
  const index = orders.findIndex((item) => item.id === orderId);
  if (index < 0) return null;
  const order = orders[index];
  if (order.inventory_committed) return order;
  const inventory = readInventory();
  for (const item of order.items || []) {
    const current = Number(inventory[item.id] ?? PRODUCTS[item.id]?.stock ?? 0);
    inventory[item.id] = Math.max(0, current - Number(item.quantity || 0));
  }
  writeInventory(inventory);
  orders[index] = { ...order, inventory_committed: true, inventory_committed_at: new Date().toISOString(), updated_at: new Date().toISOString() };
  writeJsonAtomic(ORDERS_FILE, orders);
  return orders[index];
}

function requireAdmin(req, res) {
  if (!ADMIN_TOKEN) { json(res, 503, { error: 'admin_not_configured', message: 'Operations access has not been configured.' }); return false; }
  if ((req.headers.authorization || '') !== `Bearer ${ADMIN_TOKEN}`) { json(res, 401, { error: 'unauthorized', message: 'Missing or invalid operations token.' }); return false; }
  return true;
}

function verifyStripeWebhook(rawBody, signatureHeader) {
  if (!STRIPE_WEBHOOK_SECRET) return { verified: false, reason: 'webhook_secret_not_configured' };
  if (!signatureHeader) return { verified: false, reason: 'missing_signature' };
  const pairs = signatureHeader.split(',').map((p) => p.split('='));
  const timestamp = pairs.find(([k]) => k === 't')?.[1];
  const signatures = pairs.filter(([k]) => k === 'v1').map(([, v]) => v);
  if (!timestamp || !signatures.length) return { verified: false, reason: 'malformed_signature' };
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return { verified: false, reason: 'timestamp_outside_tolerance' };
  const digest = crypto.createHmac('sha256', STRIPE_WEBHOOK_SECRET).update(`${timestamp}.${rawBody.toString('utf8')}`).digest('hex');
  const verified = signatures.some((expected) => {
    try { const a = Buffer.from(digest, 'hex'), b = Buffer.from(expected, 'hex'); return a.length === b.length && crypto.timingSafeEqual(a, b); } catch (_) { return false; }
  });
  return verified ? { verified: true } : { verified: false, reason: 'signature_mismatch' };
}

async function notifyOperations(event, payload) {
  if (!OPERATIONS_WEBHOOK_URL) return;
  try {
    await fetch(OPERATIONS_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ event, payload }) });
  } catch (_) { /* Notification is optional; stored records remain authoritative. */ }
}

async function handleApi(req, res, url) {
  const pathname = url.pathname;
  try {
    if (req.method === 'GET' && pathname === '/api/fx/usd-zar') {
      if (rateLimited(req, 'fx', 60, 60_000)) return json(res, 429, { error: 'too_many_requests', message: 'Please wait a moment and try again.' });
      const fx = await getWiseUsdZarRate();
      const kitZar = Number(Object.values(PRODUCTS)[0]?.price || 1750);
      return json(res, 200, { ok: true, provider: 'Wise', method: fx.method, usd_zar: fx.usd_zar, kit_zar: kitZar, kit_usd: KIT_PRICE_USD, as_of: fx.fetched_at, provider_time: fx.provider_time || null, stale: Boolean(fx.stale), refresh_minutes: Math.round(WISE_RATE_TTL_MS / 60_000), reference_url: fx.reference_url || WISE_PUBLIC_RATE_URL, purpose: 'shipping_reference_only' });
    }

    if (req.method === 'GET' && pathname === '/api/catalog') {
      const inventory = readInventory();
      return json(res, 200, { products: publicCatalog().map((p) => ({ ...p, stock: Number(inventory[p.id] ?? p.stock) })), currency: CURRENCY });
    }

    if (req.method === 'POST' && pathname === '/api/waitlist') {
      if (rateLimited(req, 'waitlist', 8)) return json(res, 429, { error: 'too_many_requests', message: 'Please wait a moment and try again.' });
      const body = await readJson(req); const email = cleanText(body.email, 240).toLowerCase();
      if (!validEmail(email)) return json(res, 400, { error: 'invalid_email', message: 'Enter a valid email address.' });
      const existing = readList(WAITLIST_FILE).find((item) => String(item.email || '').toLowerCase() === email);
      const record = {
        id: existing?.id || `wait_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`,
        email,
        drop_id: cleanText(body.drop_id || 'tabaq-drops', 120),
        source: cleanText(body.source || 'website', 80),
        consent: true,
        last_joined_at: new Date().toISOString()
      };
      saveRecord(WAITLIST_FILE, record); notifyOperations(existing ? 'waitlist.refreshed' : 'waitlist.created', record);
      return json(res, 200, { ok: true, waitlist_id: record.id, existing: Boolean(existing) });
    }

    if (req.method === 'POST' && pathname === '/api/contact') {
      if (rateLimited(req, 'contact', 8)) return json(res, 429, { error: 'too_many_requests', message: 'Please wait a moment and try again.' });
      const body = await readJson(req); const email = cleanText(body.email, 240).toLowerCase();
      if (!validEmail(email)) return json(res, 400, { error: 'invalid_email', message: 'Enter a valid email address.' });
      const message = cleanText(body.message, 4000); if (message.length < 5) return json(res, 400, { error: 'message_required', message: 'Tell us how we can help.' });
      const record = { id: `msg_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`, name: cleanText(body.name, 160), email, subject: cleanText(body.subject, 180), message };
      saveRecord(MESSAGES_FILE, record); notifyOperations('contact.created', record);
      return json(res, 200, { ok: true, reference: record.id });
    }

    if (req.method === 'POST' && pathname === '/api/cart/validate') {
      const summary = validateItems((await readJson(req)).items);
      return json(res, 200, { ok: true, total: summary.total, currency: summary.currency, quantity: totalQuantity(summary.lines), items: summary.lines.map((l) => ({ id: l.product.id, name: l.product.name, quantity: l.quantity, subtotal: l.subtotal })) });
    }

    if (req.method === 'POST' && pathname === '/api/shipping/quote-request') {
      if (rateLimited(req, 'quote', 8)) return json(res, 429, { error: 'too_many_requests', message: 'Please wait a moment and try again.' });
      const body = await readJson(req); const summary = validateItems(body.items);
      const email = cleanText(body.email, 240).toLowerCase(); if (!validEmail(email)) return json(res, 400, { error: 'invalid_email', message: 'Enter a valid email address for the delivery quote.' });
      const country = cleanText(body.country, 120); const countryCode = cleanText(body.country_code, 2).toUpperCase();
      const postalCode = cleanText(body.postal_code, 40); const city = cleanText(body.city, 120);
      if (!country || !city || !postalCode) return json(res, 400, { error: 'destination_required', message: 'Country, city and postal code are required for an exact delivery quote.' });
      const record = {
        id: `quote_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`, status: 'quote_requested',
        name: cleanText(body.name, 160), email, phone: cleanText(body.phone, 80), country, country_code: countryCode,
        city, postal_code: postalCode, address_note: cleanText(body.address_note, 500),
        product_total: summary.total, currency: summary.currency,
        items: summary.lines.map((l) => ({ id: l.product.id, name: l.product.name, quantity: l.quantity, unit_price: l.product.price, subtotal: l.subtotal })),
        reason: totalQuantity(summary.lines) >= 2 && countryCode === 'ZA' ? 'manual_quote_requested' : (countryCode === 'ZA' ? 'single_kit_sa_delivery' : 'international_delivery')
      };
      saveRecord(QUOTES_FILE, record); notifyOperations('shipping_quote.created', record);
      return json(res, 200, { ok: true, quote_id: record.id, product_total: summary.total, currency: summary.currency, message: 'Your delivery request has been received. The exact delivery charge will be confirmed before payment.' });
    }

    if (req.method === 'POST' && pathname === '/api/checkout/session') {
      const body = await readJson(req); const summary = validateItems(body.items);
      const quantity = totalQuantity(summary.lines);
      if (body.shipping_mode !== 'za_free' || quantity < 2) return json(res, 409, { error: 'quote_required', message: 'An exact delivery quote is required before payment for this order.' });
      const orderId = `tabaq_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
      saveOrder({ id: orderId, status: 'checkout_pending', shipping_mode: 'za_free', shipping_amount: 0, country_code: 'ZA', total: summary.total, currency: summary.currency, items: summary.lines.map((l) => ({ id: l.product.id, name: l.product.name, quantity: l.quantity, unit_price: l.product.price, subtotal: l.subtotal })) });
      let session;
      try { session = await createStripeCheckoutSession(req, summary, orderId, { countryCode: 'ZA', shippingAmount: 0, shippingLabel: 'Free South Africa delivery — 2+ kits', checkoutCurrency: 'zar' }); }
      catch (error) { saveOrder({ id: orderId, status: 'checkout_failed', error_code: error.code || 'checkout_error' }); throw error; }
      saveOrder({ id: orderId, status: 'checkout_created', stripe_session_id: session.id, stripe_checkout_url: session.url });
      return json(res, 200, { order_id: orderId, session_id: session.id, url: session.url });
    }

    if (req.method === 'GET' && pathname === '/api/order-status') {
      const orderId = cleanText(url.searchParams.get('order_id'), 120); const sessionId = cleanText(url.searchParams.get('session_id'), 240);
      const order = readOrders().find((o) => o.id === orderId && o.stripe_session_id === sessionId);
      if (!order) return json(res, 404, { error: 'order_not_found', message: 'We could not verify this order reference.' });
      let current = order;
      if (current.status !== 'paid' && STRIPE_SECRET_KEY && sessionId) {
        try {
          const session = await fetchStripeSession(sessionId);
          if (session && session.payment_status === 'paid') {
            current = saveOrder({ id: orderId, status: 'paid', stripe_session_id: sessionId, customer_email: session.customer_details?.email || current.customer_email });
            current = commitInventory(orderId) || current;
          }
        } catch (_) { /* Webhook can still update status. */ }
      }
      return json(res, 200, { order_id: current.id, status: current.status, paid: current.status === 'paid', total: current.total, shipping_amount: current.shipping_amount || 0, currency: current.currency, items: (current.items || []).map((i) => ({ name: i.name, quantity: i.quantity })) });
    }

    if (req.method === 'POST' && pathname === '/api/webhooks/stripe') {
      const raw = await readBody(req, 2 * 1024 * 1024); const verification = verifyStripeWebhook(raw, req.headers['stripe-signature']);
      if (!verification.verified) return json(res, 400, { error: 'webhook_not_verified', reason: verification.reason });
      const event = JSON.parse(raw.toString('utf8'));
      if (event.type === 'checkout.session.completed') {
        const session = event.data?.object; const orderId = session?.metadata?.order_id;
        if (orderId && session.payment_status === 'paid') { saveOrder({ id: orderId, status: 'paid', stripe_session_id: session.id, customer_email: session.customer_details?.email }); commitInventory(orderId); }
      }
      return json(res, 200, { received: true });
    }

    if (pathname.startsWith('/api/admin/')) {
      if (!requireAdmin(req, res)) return;
      if (req.method === 'GET' && pathname === '/api/admin/orders') return json(res, 200, { orders: readOrders() });
      if (req.method === 'GET' && pathname === '/api/admin/quotes') return json(res, 200, { quotes: readList(QUOTES_FILE) });
      if (req.method === 'GET' && pathname === '/api/admin/messages') return json(res, 200, { messages: readList(MESSAGES_FILE) });
      if (req.method === 'GET' && pathname === '/api/admin/waitlist') return json(res, 200, { waitlist: readList(WAITLIST_FILE) });
      if (req.method === 'GET' && pathname === '/api/admin/inventory') return json(res, 200, { inventory: readInventory() });

      const quoteMatch = pathname.match(/^\/api\/admin\/quotes\/([^/]+)\/checkout$/);
      if (req.method === 'POST' && quoteMatch) {
        const quoteId = decodeURIComponent(quoteMatch[1]); const quotes = readList(QUOTES_FILE); const quote = quotes.find((q) => q.id === quoteId);
        if (!quote) return json(res, 404, { error: 'quote_not_found' });
        const body = await readJson(req); const shippingAmountZar = Number(body.shipping_amount_zar ?? body.shipping_amount);
        if (!Number.isFinite(shippingAmountZar) || shippingAmountZar < 0) return json(res, 400, { error: 'invalid_shipping_amount', message: 'Enter the courier shipping quote in ZAR.' });
        const countryCode = cleanText(body.country_code || quote.country_code, 2).toUpperCase();
        if (!/^[A-Z]{2}$/.test(countryCode)) return json(res, 400, { error: 'country_code_required', message: 'A two-letter destination country code is required before creating checkout.' });
        const checkoutCurrency = cleanText(body.checkout_currency || (countryCode === 'ZA' ? 'zar' : 'usd'), 3).toLowerCase();
        if (!['zar','usd'].includes(checkoutCurrency)) return json(res, 400, { error: 'invalid_checkout_currency', message: 'Checkout currency must be ZAR or USD.' });
        const summary = validateItems(quote.items);
        const fx = checkoutCurrency === 'usd' ? await getWiseUsdZarRate({ force: true }) : null;
        const fxRate = fx?.usd_zar || null;
        const productUnitInCurrency = (product) => checkoutCurrency === 'usd' ? Number(product.usd_price || KIT_PRICE_USD) : Number(product.price);
        const productTotal = summary.lines.reduce((sum, line) => sum + productUnitInCurrency(line.product) * line.quantity, 0);
        const shippingAmount = checkoutCurrency === 'usd' ? convertZarToUsd(shippingAmountZar, fxRate) : shippingAmountZar;
        const orderId = `tabaq_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
        const shippingLabel = cleanText(body.shipping_label || `Delivery to ${quote.country}`, 120);
        saveOrder({ id: orderId, status: 'checkout_pending', quote_id: quoteId, shipping_mode: 'quoted', shipping_amount: shippingAmount, shipping_amount_zar: shippingAmountZar, country_code: countryCode, total: productTotal + shippingAmount, product_total: productTotal, currency: checkoutCurrency, fx_provider: fx ? 'Wise' : null, fx_rate_usd_zar: fxRate, fx_as_of: fx?.fetched_at || null, items: summary.lines.map((l) => ({ id: l.product.id, name: l.product.name, quantity: l.quantity, unit_price: productUnitInCurrency(l.product), unit_price_zar: l.product.price, unit_price_usd: l.product.usd_price || KIT_PRICE_USD, subtotal: productUnitInCurrency(l.product) * l.quantity })) });
        let session;
        try { session = await createStripeCheckoutSession(req, summary, orderId, { countryCode, shippingAmount, shippingLabel, checkoutCurrency, customerEmail: quote.email, fxRate }); }
        catch (error) { saveOrder({ id: orderId, status: 'checkout_failed', error_code: error.code || 'checkout_error' }); throw error; }
        saveOrder({ id: orderId, status: 'checkout_created', stripe_session_id: session.id, stripe_checkout_url: session.url });
        saveRecord(QUOTES_FILE, { id: quoteId, status: 'checkout_ready', shipping_amount: shippingAmount, shipping_amount_zar: shippingAmountZar, shipping_label: shippingLabel, checkout_currency: checkoutCurrency, country_code: countryCode, checkout_order_id: orderId, checkout_url: session.url, fx_provider: fx ? 'Wise' : null, fx_rate_usd_zar: fxRate, fx_as_of: fx?.fetched_at || null });
        notifyOperations('shipping_quote.checkout_ready', { quote_id: quoteId, order_id: orderId, checkout_url: session.url, shipping_amount: shippingAmount, shipping_amount_zar: shippingAmountZar, checkout_currency: checkoutCurrency, fx_rate_usd_zar: fxRate });
        return json(res, 200, { ok: true, quote_id: quoteId, order_id: orderId, shipping_amount: shippingAmount, shipping_amount_zar: shippingAmountZar, total: productTotal + shippingAmount, currency: checkoutCurrency, fx_rate_usd_zar: fxRate, fx_as_of: fx?.fetched_at || null, checkout_url: session.url });
      }
    }

    return notFound(res);
  } catch (error) {
    return json(res, error.statusCode || 500, { error: error.code || 'server_error', message: error.message || 'Server error.' });
  }
}

function safeStaticPath(pathname) {
  const cleanPath = decodeURIComponent(pathname.split('?')[0]);
  if (cleanPath === '/backend' || cleanPath.startsWith('/backend/') || cleanPath.includes('/.env') || cleanPath === '/package.json' || cleanPath.startsWith('/00_')) return null;
  const normalized = path.normalize(cleanPath).replace(/^([.][.][\/\\])+/, '');
  let filePath = path.join(ROOT, normalized === '/' ? 'index.html' : normalized);
  if (!filePath.startsWith(ROOT)) return null;
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
  return filePath;
}
function serveStatic(req, res, pathname) {
  const filePath = safeStaticPath(pathname);
  if (!filePath || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Not found'); return; }
  const ext = path.extname(filePath).toLowerCase();
  const compressible = new Set(['.html','.css','.js','.json','.svg','.txt','.xml']);
  const acceptsGzip = /\bgzip\b/.test(String(req.headers['accept-encoding'] || ''));
  const useGzip = acceptsGzip && compressible.has(ext) && fs.statSync(filePath).size > 1024;
  const cacheControl = ext === '.html' ? 'no-store' : (['.webp','.png','.jpg','.jpeg','.svg','.ico'].includes(ext) ? 'public, max-age=86400, stale-while-revalidate=604800' : 'public, max-age=3600');
  const headers = {
    'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
    'Cache-Control': cacheControl,
    'Vary': 'Accept-Encoding',
    'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://tabaq-final-website-fb2scyo5t-suhayls-projects-1e544881.vercel.app; connect-src 'self'; font-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
  };
  if (useGzip) headers['Content-Encoding'] = 'gzip';
  res.writeHead(200, headers);
  const stream = fs.createReadStream(filePath);
  if (useGzip) stream.pipe(zlib.createGzip({ level: 6 })).pipe(res); else stream.pipe(res);
}

async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || `localhost:${PORT}`}`);
  if (url.pathname === '/health') return json(res, 200, { ok: true, revision: 239, stripe_configured: Boolean(STRIPE_SECRET_KEY), admin_configured: Boolean(ADMIN_TOKEN), wise_api_configured: Boolean(WISE_API_TOKEN), commerce_layer: 'fixed-usd-107-plus-wise-shipping-reference' });
  if (url.pathname.startsWith('/api/')) return handleApi(req, res, url);
  return serveStatic(req, res, url.pathname);
}

ensureStore();
if (require.main === module) {
  http.createServer(handler).listen(PORT, () => {
    console.log(`TABAQ Rev239 commerce server running at http://localhost:${PORT}`);
    console.log(`Stripe configured: ${STRIPE_SECRET_KEY ? 'yes' : 'no'}`);
    console.log(`Operations token configured: ${ADMIN_TOKEN ? 'yes' : 'no'}`);
    console.log(`Wise API token configured: ${WISE_API_TOKEN ? 'yes' : 'no — public Wise converter fallback will be used'}`);
  });
}
module.exports = { handler, handleApi };