const cors = require('koa2-cors');

// 挂载 router 路由
module.exports = app => {
  app.use(cors())
}