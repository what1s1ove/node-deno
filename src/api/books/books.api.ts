import RouterInstance, { RouterContext } from 'koa-router';
import { IDataService } from '../../common/interfaces';
import { ApiPath, BooksApiPath } from '../../common/enums';

type Args = {
  Router: typeof RouterInstance;
  booksService: IDataService<unknown>;
};

const initBooksApi = ({ Router, booksService }: Args): RouterInstance => {
  const router = new Router({
    prefix: ApiPath.BOOKS,
  });

  router.get(BooksApiPath.ROOT, async (ctx: RouterContext) => {
    ctx.body = await booksService.findAll();
  });

  router.get(BooksApiPath.$ID, async (ctx: RouterContext) => {
    const { params } = ctx;

    ctx.body = await booksService.findOne(params.id);
  });

  router.post(BooksApiPath.ROOT, async (ctx: RouterContext) => {
    const { request } = ctx;

    ctx.body = await booksService.create(request.body);
  });

  router.put(BooksApiPath.$ID, async (ctx: RouterContext) => {
    const { request } = ctx;

    ctx.body = await booksService.update(request.body);
  });

  router.delete(BooksApiPath.$ID, async (ctx: RouterContext) => {
    const { params } = ctx;

    ctx.body = await booksService.delete(params.id);
  });

  return router;
};

export { initBooksApi };
