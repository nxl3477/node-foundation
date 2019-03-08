const Router = require('koa-router');
const controllers = require('../controllers')
const { prefix } = require('../config').pathConfig
const routersQueue = [
  require('./testRouter.js') 
]

// 设置根地址
const router = new Router({
  prefix
})

routersQueue.forEach(r => r( router, controllers ))

// 设置路由基地址
module.exports = router