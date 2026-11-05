const crypto = require('node:crypto');

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
};
