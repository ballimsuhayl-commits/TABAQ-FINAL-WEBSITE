'use strict';

const CURRENCY = (process.env.TABAQ_CURRENCY || 'zar').toLowerCase();
const KIT_PRICE_ZAR = 1750;
const KIT_PRICE_USD = 107;
const KIT_CONTENTS = Object.freeze([
  'Layering Veil 50ml',
  'Eau de Parfum 30ml',
  'Layering Essence 01 10ml',
  'Layering Essence 02 10ml',
  'Bonus Scent Balm 5ml'
]);

function buildProduct({ id, name, mood, short, image, description, profile, best_for, stock }) {
  return Object.freeze({
    id, name, mood, short,
    price: KIT_PRICE_ZAR,
    usd_price: KIT_PRICE_USD,
    currency: CURRENCY,
    image,
    active: true,
    layers: KIT_CONTENTS,
    description,
    profile,
    best_for,
    stock,
    batch_label: 'Current full-size kit',
    value_stack: KIT_CONTENTS.join(' + '),
    risk_note: 'Choose by mood. The four wearing steps are used in order; Scent Balm is the portable bonus finish.'
  });
}

const PRODUCTS = Object.freeze({
  'clean-skin': buildProduct({
    id: 'clean-skin', name: 'Clean Skin', mood: 'Fresh + clean', short: 'Fresh everyday kit', image: 'https://tabaq-final-website-fb2scyo5t-suhayls-projects-1e544881.vercel.app/assets/tabaq_asset_005.webp',
    description: 'Fresh, soft and clean with an easy everyday character.', profile: 'Mineral air / pear skin / quiet musk', best_for: 'Everyday wear, work, warm days and understated scent.', stock: 36
  }),
  'soft-bloom': buildProduct({
    id: 'soft-bloom', name: 'Soft Bloom', mood: 'Soft + floral', short: 'Soft floral kit', image: 'https://tabaq-final-website-fb2scyo5t-suhayls-projects-1e544881.vercel.app/assets/tabaq_asset_007.webp',
    description: 'Soft floral, smooth and polished without feeling heavy.', profile: 'Petal cream / blush fruit / satin powder', best_for: 'Gifting, daytime, brunch, dates and soft polished wear.', stock: 28
  }),
  'amber-haze': buildProduct({
    id: 'amber-haze', name: 'Amber Haze', mood: 'Warm + deep', short: 'Warm evening kit', image: 'https://tabaq-final-website-fb2scyo5t-suhayls-projects-1e544881.vercel.app/assets/tabaq_asset_009.webp',
    description: 'Warm, smooth and deeper with more presence for later in the day.', profile: 'Resin / spice dust / warm woods', best_for: 'Evenings, cooler weather and a richer scent trail.', stock: 18
  }),
  'juice-drift': buildProduct({
    id: 'juice-drift', name: 'Juice Drift', mood: 'Bright + social', short: 'Bright social kit', image: 'https://tabaq-final-website-fb2scyo5t-suhayls-projects-1e544881.vercel.app/assets/tabaq_asset_011.webp',
    description: 'Bright, juicy and energetic with a cleaner social finish.', profile: 'Citrus peel / guava / clean sweetness', best_for: 'Weekends, warm days, holidays and social wear.', stock: 22
  })
});

function toMinorUnits(amount) { return Math.round(Number(amount) * 100); }
function publicCatalog() {
  return Object.values(PRODUCTS).map((p) => ({
    id: p.id, name: p.name, mood: p.mood, short: p.short, price: p.price, usd_price: p.usd_price, currency: p.currency,
    price_minor: toMinorUnits(p.price), image: p.image, active: p.active, layers: p.layers, description: p.description,
    profile: p.profile, best_for: p.best_for, stock: p.stock, batch_label: p.batch_label, value_stack: p.value_stack, risk_note: p.risk_note
  }));
}

module.exports = { PRODUCTS, CURRENCY, publicCatalog, toMinorUnits, KIT_PRICE_ZAR, KIT_PRICE_USD, KIT_CONTENTS };