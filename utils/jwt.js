const jwt = require('jsonwebtoken')
const { tokenConfig: { secret, expiresIn } } = require('../config')

// 加密
exports.sign = (data={}) => jwt.sign(data, secret, {expiresIn}); 
// 解密
exports.verify = jwt.verify(token.split(' ')[1],  secret)  