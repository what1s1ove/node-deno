const { ENV } = require('../common/enums');
const { initBooksApi } = require('./books/books.api');

const apis = [initBooksApi];

const initApis = ({ Router, services }) => {
  const apiRouter = new Router({
    prefix: ENV.API.V1_PATH,
  });

  const routes = apis.map((api) => {
    return api({
      Router,
      services,
    });
  });

  routes.forEach((router) => {
    apiRouter.use(router.routes()).use(router.allowedMethods());
  });

  return apiRouter;
};

module.exports = {
  initApis,
};
