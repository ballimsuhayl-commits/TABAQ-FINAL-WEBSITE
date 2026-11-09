'use strict';
// Hosting adapter only: forwards Vercel /api/* requests to the original REV239 backend/server.js.
const { handler } = require('../backend/server');
module.exports = async function tabaqRev239Api(req, res) {
  const parsed = new URL(String(req.url || '/'), 'https://houseoftabaq.com');
  let pathname = parsed.pathname || '/';
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
