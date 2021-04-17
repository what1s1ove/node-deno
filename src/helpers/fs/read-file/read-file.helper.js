const fs = require('fs/promises');

const readFile = (path) => {
  return fs.readFile(path);
};

module.exports = {
  readFile,
};
