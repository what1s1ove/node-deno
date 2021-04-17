import { Book } from './book/book.repository';

const initRepositories = (): { book: Book } => {
  const book = new Book();

  return {
    book,
  };
};

export { initRepositories };
