'use strict';
const { handler } = require('../backend/server');
module.exports = async (req, res) => handler(req, res);