import { Oak } from '../../dependencies.ts';
import { IDataService } from '../../common/interfaces/index.ts';
import { Book } from '../../common/types/index.ts';
import { ApiPath, BooksApiPath } from '../../common/enums/index.ts';

type Args = {
  prefix: string;
  Router: typeof Oak.Router;
  booksService: IDataService<Book>;
};

const initBooksApi = ({ prefix, Router, booksService }: Args): Oak.Router => {
  const router = new Router({
    prefix: `${prefix}${ApiPath.BOOKS}`,
  });

  router.get(BooksApiPath.ROOT, async (ctx: Oak.RouterContext) => {
    ctx.response.body = await booksService.findAll();
  });

  router.get(BooksApiPath.$ID, async (ctx: Oak.RouterContext) => {
    const { params } = ctx;

    ctx.response.body = await booksService.findOne(<string>params.id);
  });

  router.post(BooksApiPath.ROOT, async (ctx: Oak.RouterContext) => {
    try {
      const { request } = ctx;
      const body = await request.body();

      ctx.response.body = await booksService.create(await body.value);
    } catch (err) {
      console.log(err);
    }
  });

  router.put(BooksApiPath.$ID, async (ctx: Oak.RouterContext) => {
    const { request } = ctx;
    const body = await request.body();

    ctx.response.body = await booksService.update(await body.value);
  });

  router.delete(BooksApiPath.$ID, async (ctx: Oak.RouterContext) => {
    const { params } = ctx;

    ctx.response.body = await booksService.delete(<string>params.id);
  });

  return router;
};

export { initBooksApi };
