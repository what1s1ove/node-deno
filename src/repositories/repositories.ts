import { IRepository } from '../common/interfaces';
import { Books } from './book/books.repository';

const initRepositories = (): Record<string, IRepository<unknown>> => {
  const books = new Books();

  return {
    books,
  };
};

export { initRepositories };
