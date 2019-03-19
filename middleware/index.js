const middleWareQueue = [
  require('./log4Middleware'),  // 日志
  require('./corsMiddleware'),  // 解决跨域
  require('./tokenErrorMiddleware'),  // jwt 错误处理
  require('./jwtMiddleware'),   // 验证jwt
  require('./bodyParserMiddleware'),    // 处理请求参数
  require('./staticMiddleware'),   // 静态文件
  require('./templateMiddleware'), // 模板引擎
  require('./routerMiddleware')   // 路由
]

module.exports = app => {
  middleWareQueue.forEach(m => m(app))
}
