module.exports = {
  secret: "alltuucom",
  // 免token验证 白名单
  whiteList: [/^\/api\/login/],
  expiresIn: '365d'
}