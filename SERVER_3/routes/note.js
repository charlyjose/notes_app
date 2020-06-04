var qrpc = require('qrpc')
var server = qrpc.createServer()
var rpc_server_2 = require('../middlewares/rpc_server_2')
var PORT = require('../config/env.json').rpc_server_2

server.listen(PORT, function () {
    console.log('QRPC listening at: ', PORT)
})

// CREATE NOTES
server.addHandler('create', rpc_server_2.create)

// READ SINGLE NOTE
server.addHandler('read_one', rpc_server_2.read_one)

// READ ALL NOTES
server.addHandler('read_all', rpc_server_2.read_all)

// READ SINGLE NOTE
server.addHandler('public_read_one', rpc_server_2.public_read_one)

// UPDATE NOTES
server.addHandler('update', rpc_server_2.update)

// DELETE NOTES
server.addHandler('delete', rpc_server_2.delete)