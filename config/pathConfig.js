const { join } = require('path')

// 路径类配置

module.exports = {
  staticDir: join(__dirname, '../assets'),
  viewDir: join(__dirname, '../views'),
  prefix: '/api'
}