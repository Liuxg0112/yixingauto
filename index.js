const Koa = require('koa')
const logger = require('koa-logger')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser');
const router = require('./routes')

const app = new Koa()

app.use(logger())
  .use(serve(`${__dirname}/public`,{extensions:['html']}))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

// response
// app.use(ctx => {
//   ctx.body = 'Hello World'
// })

app.on('error', function (err, ctx) {
  console.error('server error', err, ctx)
})

app.listen(3000)