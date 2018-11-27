const Koa = require('koa');
const app = new Koa()
const koa = require('koa-router')()
  , json = require('koa-json')
  , logger = require('koa-logger')
  , auth = require('./server/routers/auth.js')
  , list = require('./server/routers/list.js');

app.use(require('koa-bodyparser')())
app.use(json());
app.use(logger());

// app.use(function* (next){
//   let start = new Date;
//   yield next;
//   let ms = new Date - start;
//   console.log('%s %s - %s', this.method, this.url, ms);
// });

app.on('error', function(err, ctx){
  console.log('server error', err);
});

koa.use('/auth', auth.routes()); // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
koa.use('/list', list.routes())

app.use(koa.routes()); // 将路由规则挂载到Koa上。

app.listen(8889,() => {
  console.log('Koa is listening in 8889');
});

module.exports = app;