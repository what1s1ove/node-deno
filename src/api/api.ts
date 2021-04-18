import { Oak } from '../dependencies.ts';
import { initServices } from '../services/services.ts';
import { ENV } from '../common/enums/index.ts';
import { initBooksApi } from './books/books.api.ts';
import { initPostsApi } from './posts/posts.api.ts';

type Args = {
  app: Oak.Application;
  Router: typeof Oak.Router;
  services: ReturnType<typeof initServices>;
};

const initApis = ({ app, Router, services }: Args): void => {
  const { books: booksService, posts: postsService } = services;

  const booksApi = initBooksApi({
    prefix: ENV.API.V1_PATH,
    Router,
    booksService,
  });

  const postsApi = initPostsApi({
    prefix: ENV.API.V1_PATH,
    Router,
    postsService,
  });

  const routes = [booksApi, postsApi];

  routes.forEach((router) => {
    app.use(router.routes()).use(router.allowedMethods());
  });
};

export { initApis };
