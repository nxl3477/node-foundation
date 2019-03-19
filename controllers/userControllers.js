/**
 * @fileoverview 实现图片打分的controllers
 * @author nixiaolei
 */
const _ = require('lodash')
const createVerify = require('../utils/paramVerify');

class User {
  constructor({UserService}) {
    this.userService = new UserService()
    this.userRule = createVerify(['isAscii'])
  }

  // 用户登录
  actionLogin() {
    return async (ctx, next) => {
      const { username, password } = ctx.request.body;
      if( _.isUndefined(username) || _.isUndefined(password) ) {
        return ctx.body = { code: 403, data: '', msg: '信息填写不完整' }
      }

      if( !this.userRule([username, password]).status ) {
        ctx.status = 403
        return ctx.body = { code: 403, data: '', msg: '非法字符' }
      }
      
      const result = await this.userService.userLogin(username, password)
      // 查询失败
      // 错误返回 
      return result.error ? ctx.body = {
        status: 401,
        data: [],
        msg: result.errorMsg
        // 成功返回
      } : ctx.body = {
        status: 200,
        data: result.data,
        msg: '登录成功'
      }
    }
  }


  // 验证token
  actionVerify() {
    return async (ctx, next) => {
      const userInfo = ctx.state.user.data
      if( ctx.state.user) {
        const result = await this.userService.userVerify(userInfo)
        
        return ctx.body = {
          status: 200,
          data: result.data,
          msg: '验证成功'
        }
      }else {
        return ctx.body = {
          status: 401,
          data: '',
          msg: '登录超时'
        }
      }
    }
  }
}


module.exports = User