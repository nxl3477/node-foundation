module.exports = app => {
  app.use((ctx, next) => next().catch((err) => {
    if (err.status === 401) {
        ctx.status = 401;
        ctx.body = {
          // error: err.originalError ? err.originalError.message : err.message   //这里设置返回的 错误信息
          code: 401,
          data: '',
          msg: "非法用户"
        };
      } else {
        throw err;
      }
    })
  )
}