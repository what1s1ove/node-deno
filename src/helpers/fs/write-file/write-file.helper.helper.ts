const writeFile = (path: string, data: Uint8Array): Promise<void> => {
  return Deno.writeFile(path, data);
};

export { writeFile };
