import { Books } from './book/books.repository.ts';

type Repositories = {
  books: Books;
};

const initRepositories = (): Repositories => {
  const books = new Books();

  return {
    books,
  };
};

export { initRepositories };
