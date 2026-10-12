'use strict';
const { handler } = require('../backend/server');

module.exports = async function tabaqApiBridge(req, res) {
  const original = String(req.url || '/');
  const parsed = new URL(original, 'https://houseoftabaq.com');
  let pathname = parsed.pathname || '/';

  // Vercel's raw Node catch-all can pass the function-relative path
  // (for example /chat) instead of the public /api/chat path.
  if (!pathname.startsWith('/api/')) {
    const routeParam = req.query && req.query.path;
    const routed = Array.isArray(routeParam) ? routeParam.join('/') : String(routeParam || pathname).replace(/^\/+/, '');
    pathname = '/api/' + routed;
  }

  parsed.searchParams.delete('path');
  const query = parsed.searchParams.toString();
  req.url = pathname + (query ? '?' + query : '');
  return handler(req, res);
};
