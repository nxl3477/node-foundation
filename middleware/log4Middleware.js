const { logger, accessLogger } = require('../utils/log4');


module.exports = app => {
  // 访问级别的，记录用户的所有请求
  app.use(accessLogger());
  // 捕获全局状态下的error
  app.on('error', err => {
    logger.error(err);
  });
}

