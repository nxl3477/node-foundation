const middleWareQueue = [ 
  require('./koaStatic'),   // 静态文件
  require('./koaTemplate'), // 模板引擎
  require('./koaRouter')   // 路由
]

module.exports = app => {
  middleWareQueue.forEach(m => m(app))
}
