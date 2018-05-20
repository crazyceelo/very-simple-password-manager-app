'use strict';

let config;
try {
  config = require(`./env/${process.env.PORT}`);
} catch (e) {
  config = require('./env/default');
}

module.exports = config;