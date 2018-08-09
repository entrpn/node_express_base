import TestManager from '../managers/testManager'
import BaseResponse from '../models/baseResponse'

class TestController {
    
    constructor(app) {
        this.app = app
        this.testManager = new TestManager()
    }

    async test(req,res) {
        const name = req.body.name

        if (!name) {
            console.log('no body params')
        }

        const retval = await this.testManager.test('someVariable')

        if (retval) {
            res.status(200).send(BaseResponse.successResponse(retval))
        } else {
            res.status(500).end(BaseResponse.InternalServerError())
        }

    }
}

module.exports = TestController