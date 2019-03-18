const jwtKoa = require('koa-jwt')
const { tokenConfig: { secret, whiteList } } = require('../config')

module.exports = app => {
  app.use(jwtKoa({ secret }).unless({
    path: whiteList //数组中的路径不需要通过jwt验证
  }))
}