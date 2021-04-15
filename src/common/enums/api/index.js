const apiPath = require('./api-path.enum');
const bookApiPath = require('./book-api-path.enum');

module.exports = {
  ...apiPath,
  ...bookApiPath,
};
