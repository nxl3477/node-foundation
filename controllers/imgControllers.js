/**
 * @fileoverview 实现图片打分的 controllers
 * @author nixiaolei
 */
const createVerify = require('../utils/paramVerify');


class Img {
  constructor({
    ImgService
  }) {
    this.imgService = new ImgService()
    this.selectRule = createVerify(['isAscii'])
    this.gradeRule = createVerify(['isAscii'])
  }

  // 图片查询
  actionSelect() {
    return async (ctx, next) => {
      const {
        count
      } = ctx.request.query
      // 参数校验
      if (!this.selectRule(count).status && !isNaN(count)) {
        ctx.status = 403
        return ctx.body = {
          code: 403,
          data: '',
          msg: '参数错误'
        }
      }
      // 获取用户id
      const uid = ctx.state.user.data.id
      // 查询数据库
      const result = await this.imgService.findImg(count, uid)
      // 查询失败
      // 错误返回 
      return result.error ? ctx.body = {
        status: 404,
        data: [],
        msg: result.errorMsg
        // 成功返回
      } : ctx.body = {
        status: 200,
        data: result.data,
        msg: '查询成功'
      }
    }
  }

  // 图片评分
  actionGrade() {
    return async (ctx, next) => {
      const {
        pid,
        score
      } = ctx.request.body

      if (!this.gradeRule([pid, score]).status && !isNaN(pid) && !isNaN(score)) {
        ctx.status = 401
        return ctx.body = {
          code: 401,
          data: '',
          msg: '非法字符'
        }
      }
      // 从token 获取用户id
      const uid = ctx.state.user.data.id
      const result = await this.imgService.gradeImg(pid, score, uid)
      
      return result.error ? ctx.body = {
        status: 500,
        data: [],
        msg: result.errorMsg
        // 成功返回
      } : ctx.body = {
        status: 200,
        data: result.data,
        msg: '查询成功'
      }
    }
  }
}


module.exports = Img