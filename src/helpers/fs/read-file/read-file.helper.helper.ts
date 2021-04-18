import fs from 'fs/promises';

const readFile = (path: string): Promise<Buffer> => {
  return fs.readFile(path);
};

export { readFile };
