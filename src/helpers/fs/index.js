const readFile = require('./read-file/read-file.helper');
const writeFile = require('./write-file/write-file.helper');

module.exports = {
  ...readFile,
  ...writeFile,
};
