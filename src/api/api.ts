import RouterType from 'koa-router';
import { initServices } from '../services/services';
import { ENV } from '../common/enums';
import { initBooksApi } from './books/books.api';
import { initPostsApi } from './posts/posts.api';

type Args = {
  Router: typeof RouterType;
  services: ReturnType<typeof initServices>;
};

const initApis = ({ Router, services }: Args): RouterType => {
  const apiRouter = new Router({
    prefix: ENV.API.V1_PATH,
  });

  const { books: booksService, posts: postsService } = services;

  const booksApi = initBooksApi({
    Router,
    booksService,
  });

  const postsApi = initPostsApi({
    Router,
    postsService,
  });

  const routes = [booksApi, postsApi];

  routes.forEach((router) => {
    apiRouter.use(router.routes()).use(router.allowedMethods());
  });

  return apiRouter;
};

export { initApis };
