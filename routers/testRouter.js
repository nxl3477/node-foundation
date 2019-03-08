// resultful API
module.exports = (router, { testControllers } ) => {
  router.get('/test', testControllers.actionIndex)
  // router.post(testControllers.actionIndex)
  // router.put(testControllers.actionIndex)
  // router.delete(testControllers.actionIndex)
}