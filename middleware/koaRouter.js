const router = require('../routers')

// 挂载 router 路由
module.exports = app => {
  app
  .use(router.routes())
  .use(router.allowedMethods());
}