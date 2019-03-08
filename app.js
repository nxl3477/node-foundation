const Koa = require('koa');
const app = new Koa();
const middleware = require('./middleware')

// const { redis, client } = require('./DB/redis.js')


// 挂载中间件 及 路由
middleware(app)


app.listen(3000);