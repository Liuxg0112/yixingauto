'use strict';

const Router = require('koa-router');
const router = new Router();

router.post('/api/getBrandLIst', function (ctx) {
  console.log(ctx.request.body)
  ctx.body = [{
    "id": 1,
    "name": "奥迪",
    "pid": 0
  }, {
    "id": 2,
    "name": "别克",
    "pid": 0
  }, {
    "id": 3,
    "name": "北京汽车",
    "pid": 0
  }]
});

module.exports = router;