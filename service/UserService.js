const DB = require('../DB/mysql')
const { sign } = require('../utils/jwt')
const md5 = require("md5")
// console.log(md5(md5('12345')))
class UserService {
  constructor () {
    
  }

  async userLogin(username="", password="") {
    const result = {}
    try {
      const md5Pwd = md5(md5(password))
      result.data = await DB.select().where({
        username,
        password: md5Pwd
      }).from('user')
    }catch(e) {
      result.error = true
      result.errorMsg = e
    }
    // 验证是否有匹配数据
    if( result.data.length == 0 ) {
      result.error = true
      result.errorMsg = "用户名或密码错误"
    }else {
      const [ userInfo ] = result.data
      const token = sign( userInfo)
      delete userInfo.password
      delete userInfo.last_id
      result.data = {
        ...userInfo,
        token
      }
    }
    return result
  }


  async userVerify(userInfo) {
    delete userInfo.password
    delete userInfo.last_id
    const result = { data: userInfo }
    return result
  }
}

module.exports = UserService