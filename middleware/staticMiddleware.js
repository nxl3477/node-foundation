const static = require('koa-static');
const { staticDir } = require('../config').pathConfig


module.exports = app => {
  app.use(static(staticDir))
}
