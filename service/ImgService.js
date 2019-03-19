const DB = require('../DB/mysql')
const createRange = require('../utils/numberRange')
const countRange = createRange(0, 10)
const pidRange = createRange(0)
const scoreRange = createRange(0, 9)
class ImgService {
  constructor () {
  }

  async findImg(count=10, uid) {
    count = countRange(count)
    const result = {}
    try {
      // 获取上次打分的id
      const [ userInfo ] = await DB.select().where({ id: uid }).from('user')
      const last_id = userInfo.last_id
      // 根据用户的count 获取接下来的图片， 最多10张
      result.data = await DB.select().where('id', '>', last_id).limit(count).from('img')
    }catch(e) {
      result.error = true
      result.errorMsg = e
    }
    return result
  }


  // 图片打分
  async gradeImg(pid, score=0, uid) {
    pid = pidRange(pid)
    score = scoreRange(score)
    const result = {}
    // 获取上次打分的id
    const [ userInfo ] = await DB.select().where({ id: uid }).from('user')
    const last_id = userInfo.last_id

    if( pid <= last_id ) {
      result.error = true
      result.errorMsg = '请勿重复打分'
      return result
    }

    const create_time = +new Date()
    try {
      result.data = await DB('score').insert({ pid, uid, score, create_time })
    }catch(e) {
      result.error = true
      result.errorMsg = e
    }
    // 评分成功， 更新用户的最后一次的打分图片id
    if( result.data.length ){
      const updateLastId = await DB('user').where({
        id: uid
      })
      .update({
        last_id: pid
      })
    }

    return result
  }
}

module.exports = ImgService