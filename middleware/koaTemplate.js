const render = require('koa-swig');
const co = require('co');
const { viewDir } = require('../config').pathConfig

module.exports = app => {
  app.context.render = co.wrap(render({
    root: viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html'
  }));
}
