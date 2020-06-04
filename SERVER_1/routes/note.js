var express = require('express')
var router = express.Router()
var rpc_client_2 = require('../middlewares/rpc_client_2')

// CREATE NOTES [ API KEY, CONTENT ]
router.post('/note/create', rpc_client_2.create)

// READ SINGLE NOTE [ API KEY, NOTE ID ]
router.post('/note/read', rpc_client_2.read_one)

// READ ALL NOTES [ API KEY ]
router.post('/note/read/all', rpc_client_2.read_all)

// READ SINGLE NOTE [ API KEY, NOTE ID ]
router.post('/note/public/read', rpc_client_2.public_read_one)

// UPDATE NOTES [ API KEY, NOTE ID, CONTENT ]
router.post('/note/update', rpc_client_2.update)

// DELETE NOTES [ API KEY, NOTE ID ]
router.post('/note/delete', rpc_client_2.delete)

module.exports = router