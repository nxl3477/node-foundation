const redis = require('redis')
const { port, host, pwd: auth_pass } = require('../config').redisConfig

client = redis.createClient(port, host, { auth_pass });

// 验证 auth_pass
client.auth(auth_pass, (err) => {
  if( !err ) {
    console.log('redis 通过认证');
  }
});

// 监听连接
client.on('connect',function(err){
  if( !err ) {
    console.log('redis 连接成功');
  }
});

// redis 成功
client.on('ready',function(err){
  if( !err ) {
    console.log('redis 准备就绪');
  }
});


module.exports = {
  client,
  redis
}