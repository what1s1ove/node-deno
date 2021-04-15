const api = require('./api');
const app = require('./app');

module.exports = {
  ...api,
  ...app,
};
