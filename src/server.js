const { join } = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const { ENV } = require('./common/enums');

const app = new Koa();

app.use(serve(join(__dirname, '../public')));

app.listen(ENV.APP.SERVER_PORT);

console.log(`Listening to connections on port — ${ENV.APP.SERVER_PORT}`);
