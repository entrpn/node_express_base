import TestController from '../controllers/testController'

const testController = new TestController()

module.exports = (app) => {
  app.get('/', async (req, res) => {
    return await testController.test(req,res)
  })
}
