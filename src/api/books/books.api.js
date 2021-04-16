const { ApiPath, BooksApiPath } = require('../../common/enums');

const initBooksApi = ({ Router, services }) => {
  const { book: bookService } = services;

  const router = new Router({
    prefix: ApiPath.BOOKS,
  });

  router.get(BooksApiPath.ROOT, async (ctx) => {
    ctx.body = await bookService.findAll();
  });

  router.get(BooksApiPath.$ID, async (ctx) => {
    const { params } = ctx;

    ctx.body = await bookService.findOne(params.id);
  });

  router.post(BooksApiPath.ROOT, async (ctx) => {
    ctx.body = await bookService.create();
  });

  router.put(BooksApiPath.$ID, async (ctx) => {
    const { params } = ctx;

    ctx.body = await bookService.update(params.id);
  });

  router.delete(BooksApiPath.$ID, async (ctx) => {
    const { params } = ctx;

    ctx.body = await bookService.delete(params.id);
  });

  return router;
};

module.exports = {
  initBooksApi,
};
