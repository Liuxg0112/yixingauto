const Koa = require('koa')
const logger = require('koa-logger')
const serve = require('koa-static')
// const router = require('./routes/index')

const app = new Koa()

app.use(logger())
app.use(serve(`${__dirname}/uploads`))
app.use(serve(`${__dirname}/public`))

// app
  // .use(router.routes())
  // .use(router.allowedMethods())

// response
// app.use(ctx => {
//   ctx.body = 'Hello World'
// })

app.on('error', function (err, ctx) {
  console.error('server error', err, ctx)
})

app.listen(3000)