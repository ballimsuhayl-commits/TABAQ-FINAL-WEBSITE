'use strict';
const { handler } = require('../backend/server');
module.exports = async function tabaqHealth(req, res) {
  req.url = '/health';
  return handler(req, res);
};
