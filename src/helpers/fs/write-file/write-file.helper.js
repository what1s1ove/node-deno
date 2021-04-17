const fs = require('fs/promises');

const writeFile = (path, data) => {
  return fs.writeFile(path, data);
};

module.exports = {
  writeFile,
};
