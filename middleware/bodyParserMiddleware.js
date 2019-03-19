const bodyParser = require('koa-bodyparser');

// 挂载 router 路由
module.exports = app => {
  app.use(bodyParser());
}