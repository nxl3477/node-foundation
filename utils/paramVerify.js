const validator = require('validator');

// 建议一参数多种验证时使用

// 第一次调用传入规则， 第二次调用传入值

// status 表示是否全部通过
// result 存放每个参数的通过记录， 按传入的顺序排列
module.exports = (ruleArr = null) => {
  if (ruleArr === null) return true
  return (value) => {
    if( Array.isArray(value) ) {
      const result = value.map((v) => ruleArr.every((key) => validator[key](v)))
      const status = result.every(i => i)
      return {
        result,
        status
      }
    }else {
      const result = ruleArr.every((key) => validator[key](value))
      return {
        result,
        status: result
      }
    }
  }
}