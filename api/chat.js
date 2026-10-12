'use strict';
const { handler } = require('../backend/server');
module.exports = async function tabaqChat(req, res) {
  const u = new URL(req.url || '/api/chat', 'https://houseoftabaq.com');
  req.url = '/api/chat' + (u.search || '');
  return handler(req, res);
};
