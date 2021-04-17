import fs from 'fs/promises';

const writeFile = (path: string, data: string | Uint8Array): Promise<void> => {
  return fs.writeFile(path, data);
};

export { writeFile };
