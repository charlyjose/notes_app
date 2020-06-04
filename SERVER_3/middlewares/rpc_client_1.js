var qrpc = require('qrpc')
var PORT = require('../config/env.json').rpc_client_1
var client_1 = qrpc.connect(PORT, 'localhost')


module.exports = {

    // EMAIL
    // PASSWORD
    get_userId: async (req, res) => {
        var request = {
            body: req.body
        }
        var reply = await new Promise((success, failure) => {
            client_1.call('getuserid', request, function (err, reply) {
                var error = { error: false }
                var response = { ...error, ...reply }
                if (err == null) {
                    success(reply)
                }
                else {
                    error.error = true
                    response = { ...error, ...reply }
                    failure(response)
                }
            })
        })
        return reply
    }
}