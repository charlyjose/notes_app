var qrpc = require('qrpc')
var server = qrpc.createServer()
var rpc_server_1 = require('../middlewares/rpc_server_1')
var PORT = require('../config/env.json').rpc_server_1

server.listen(PORT, function () {
    console.log('QRPC server listening at: ', PORT)
})

// SIGNUP
server.addHandler('signup', rpc_server_1.create_user)

// GET API KEY
server.addHandler('getkey', rpc_server_1.get_api_key)

// GET USER ID
server.addHandler('getuserid', rpc_server_1.get_userId)

// NEW API KEY
server.addHandler('newkey', rpc_server_1.new_api_key)

// NEW PASSWORD
server.addHandler('newpassword', rpc_server_1.new_password)

// AUTH KEY
server.addHandler('authkey', rpc_server_1.auth_key)