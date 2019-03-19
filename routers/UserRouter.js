// resultful API
module.exports = (router, { userControllers } ) => {
  router.get('/verify', userControllers.actionVerify())
  router.post('/login', userControllers.actionLogin())
  // router.post(testControllers.actionIndex)
  // router.put(testControllers.actionIndex)
  // router.delete(testControllers.actionIndex)
}