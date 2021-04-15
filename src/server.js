const { join } = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const { ENV } = require('./common/enums');
const { initServices } = require('./services/services');
const { initApis } = require('./api/api');

const app = new Koa();

const services = initServices();

const apiRouter = initApis({
  Router,
  services,
});

app.use(apiRouter.routes());

app.use(serve(join(__dirname, '../public')));

app.listen(ENV.APP.SERVER_PORT);

console.log(`Listening to connections on port — ${ENV.APP.SERVER_PORT}`);
