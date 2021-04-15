const { ApiPath, BooksApiPath } = require('../../common/enums');

const initBooksApi = ({ Router, services }) => {
  const { book: bookService } = services;

  const router = new Router({
    prefix: ApiPath.BOOKS,
  });

  router.get(BooksApiPath.ROOT, (ctx) => {
    ctx.body = bookService.findAll();
  });

  router.get(BooksApiPath.$ID, (ctx) => {
    ctx.body = bookService.findOne();
  });

  router.post(BooksApiPath.ROOT, (ctx) => {
    ctx.body = bookService.create();
  });

  router.put(BooksApiPath.$ID, (ctx) => {
    ctx.body = bookService.update();
  });

  router.delete(BooksApiPath.$ID, (ctx) => {
    ctx.body = bookService.delete();
  });

  return router;
};

module.exports = {
  initBooksApi,
};
