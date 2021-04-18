import { ENV } from '../common/enums/index.ts';
import { initRepositories } from '../repositories/repositories.ts';
import { Books } from './books/books.service.ts';
import { Http } from './http/http.service.ts';
import { Posts } from './post/posts.service.ts';

type Args = {
  repositories: ReturnType<typeof initRepositories>;
};

type Services = {
  books: Books;
  http: Http;
  posts: Posts;
};

const initServices = ({ repositories }: Args): Services => {
  const { books: booksRepository } = repositories;

  const http = new Http();
  const books = new Books({
    booksRepository,
  });
  const posts = new Posts({
    baseUrl: ENV.API_URL.PLACEHOLDER_API,
    http,
  });

  return {
    books,
    http,
    posts,
  };
};

export { initServices };
