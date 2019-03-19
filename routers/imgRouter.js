// resultful API
module.exports = (router, { imgControllers } ) => {
  router.get('/img/list', imgControllers.actionSelect())
  router.post('/img/grade', imgControllers.actionGrade())
  // router.put(testControllers.actionIndex)
  // router.delete(testControllers.actionIndex)
}