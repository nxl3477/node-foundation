/**
 * @fileoverview 实现Test的数据模型
 * @author nixiaolei@nxl3477@foxmail.com
 */

class test {
  constructor() {
    
  }
  /**
   *  test 首页
   * @param {Object} ctx 传入 KOA2 的上下文环境
   * @param {Object} next 向下执行的方法
   * @example
   * return HTML
   * viewBooks(ctx)
   * @memberof Books
   * 
   */
  async actionIndex(ctx, next) {
    ctx.body = await ctx.render('test/pages/index')
  }

  actionView() {
    
  }

  actionCreate() {
    
  }

  actionDelete() {
    
  }

  actionUpdate() {
    
  }
}


module.exports = new test()