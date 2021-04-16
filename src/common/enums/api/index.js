const apiPath = require('./api-path.enum');
const bookApiPath = require('./book-api-path.enum');
const postApiPath = require('./post-api-path.enum');

module.exports = {
  ...apiPath,
  ...bookApiPath,
  ...postApiPath,
};
