const { resolve } = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { ENV } = require('./common/enums');
const { initRepositories } = require('./repositories/repositories');
const { initServices } = require('./services/services');
const { initApis } = require('./api/api');

const app = new Koa();

app.use(bodyParser());

const repositories = initRepositories();

const services = initServices({
  repositories,
});

const apiRouter = initApis({
  Router,
  services,
});

app.use(apiRouter.routes());

app.use(serve(resolve(__dirname, '../public')));

app.listen(ENV.APP.SERVER_PORT);

console.log(`Listening to connections on port — ${ENV.APP.SERVER_PORT}`);
