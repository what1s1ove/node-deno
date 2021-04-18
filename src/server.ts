import { Oak } from './dependencies.ts';
import { ENV } from './common/enums/index.ts';
import { initRepositories } from './repositories/repositories.ts';
import { initServices } from './services/services.ts';
import { initApis } from './api/api.ts';

const app = new Oak.Application();

const repositories = initRepositories();

const services = initServices({
  repositories,
});

initApis({
  Router: Oak.Router,
  services,
  app,
});

app.use(async (ctx) => {
  await Oak.send(ctx, ctx.request.url.pathname, {
    root: 'public',
    index: 'index.html',
  });
});

app.listen({
  port: ENV.APP.SERVER_PORT,
});

console.log(`Listening to connections on port — ${ENV.APP.SERVER_PORT}`);
