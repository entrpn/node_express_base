class BaseResponse {
  constructor () {
    this.success = false
    this.data = null
    this.error = null
  }

  static errorResponse (code, message) {
    let response = new BaseResponse()
    response.error = {code: code, message: message}
    return JSON.stringify(response, 4)
  }

  static successResponse (data) {
    let response = new BaseResponse()
    response.success = true
    response.data = data
    return JSON.stringify(response, 4)
  }

  static internalServerError () {
    let response = new BaseResponse()
    response.error = {code: 500, message: 'Internal Server Error'}
    return JSON.stringify(response, 4)
  }

  static badRequest () {
    let response = new BaseResponse()
    response.error = {code: 400, message: 'Bad Request'}
    return JSON.stringify(response, 4)
  }

  static notAuthorized () {
    let response = new BaseResponse()
    response.error = {code: 401, message: 'Not Authorized'}
    return JSON.stringify(response, 4)
  }

  static notFound () {
    let response = new BaseResponse()
    response.error = {code: 404, message: 'Not Found'}
    return JSON.stringify(response, null, '    ')
  }
}

module.exports = BaseResponse
