const { withStatusCode } = require('../utils/response.util')

const ok = withStatusCode(200, JSON.stringify)

exports.handler = event => {
  const currentTime = new Date().toLocaleTimeString()
  const response = {
    message: `Hello, the current time is ${currentTime}.`,
    input: event
  }

  return ok(response)
}
