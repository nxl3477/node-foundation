const { mysqlConfig } = require('../config')

const DB = require('knex')({
  client: 'mysql',
  connection: {
    ...mysqlConfig   // 这里是你的数据库账号密码
  },
  debug: false, // 开debug 模式
  pool: { min: 0, max:  10}  // 连接数限制
});


module.exports = DB