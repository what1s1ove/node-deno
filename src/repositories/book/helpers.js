const getBookById = (books, id) => {
  return books.find((it) => it.id === id) ?? null;
};

const getNewBook = (bookPayload) => ({
  ...bookPayload,
  id: Date.now().toString(),
});

const updateBook = (books, updatedBooks) => {
  return books.map((it) => {
    return it.id === updatedBooks.id ? updatedBooks : it;
  });
};

const removeBook = (books, id) => {
  return books.filter((it) => it.id !== id);
};

module.exports = {
  getBookById,
  getNewBook,
  updateBook,
  removeBook,
};
