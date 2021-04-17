import { Book, CreateBookPayload } from '../../common/types';

const getBookById = (books: Book[], id: string): Book | null => {
  return books.find((it) => it.id === id) ?? null;
};

const getNewBook = (bookPayload: CreateBookPayload): Book => ({
  ...bookPayload,
  id: Date.now().toString(),
});

const updateBook = (books: Book[], updatedBooks: Book): Book[] => {
  return books.map((it) => {
    return it.id === updatedBooks.id ? updatedBooks : it;
  });
};

const removeBook = (books: Book[], id: string): Book[] => {
  return books.filter((it) => it.id !== id);
};

export { getBookById, getNewBook, updateBook, removeBook };
