const api = require('./api');
const app = require('./app');
const http = require('./http');

module.exports = {
  ...api,
  ...app,
  ...http,
};
