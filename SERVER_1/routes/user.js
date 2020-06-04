var express = require('express')
var router = express.Router()
var rpc_client_1 = require('../middlewares/rpc_client_1')
// var { apiAuth } = require('../middlewares/apiAuth')

// SIGNUP [ EMAIL, PASSWORD ]
router.post('/signup', rpc_client_1.create_user)

// GET API KEY [ EMAIL, PASSWORD ]
router.post('/getkey', rpc_client_1.get_api_key)

// NEW PASSWORD [ EMAIL, PASSWORD, NEW PASSWORD, API KEY ]
router.post('/newpassword', rpc_client_1.new_password)

// NEW API KEY [ EMAIL, PASSWORD ]
router.post('/newkey', rpc_client_1.new_api_key)

module.exports = router