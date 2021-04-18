import { resolve } from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { ENV } from './common/enums';
import { initRepositories } from './repositories/repositories';
import { initServices } from './services/services';
import { initApis } from './api/api';

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
