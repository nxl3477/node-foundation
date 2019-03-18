const Router = require('koa-router');
const controllers = require('../controllers')
const Service = require('../service')
const { prefix } = require('../config').pathConfig
const routersQueue = [
  require('./testRouter.js') 
]

// 设置根地址
const router = new Router({
  prefix
})

const controllersDI = Object.keys(controllers).filter(k => k !='index').reduce((total, cur,curIndex, array) =>{
  const Contro = controllers[cur]
  total[cur] = new Contro(Service)
  return total
}, {})

routersQueue.forEach(r => r( router, controllersDI ))

// 设置路由基地址
module.exports = router