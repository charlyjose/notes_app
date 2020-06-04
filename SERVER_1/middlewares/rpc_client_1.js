var qrpc = require('qrpc')
var PORT = require('../config/env.json').rpc_client_1
var client_1 = qrpc.connect(PORT, 'localhost', function () {
    console.log('CONNECTED to SERVER 1 at: ', PORT)
})
module.exports = {

    // EMAIL
    // PASSWORD
    // FIRST NAME
    // LAST NAME
    // ADDRESS
    create_user: async (req, res) => {
        var request = {
            body: req.body
        }
        client_1.call('signup', request, function (err, reply) {
            // console.log("reply from server 1:", reply)
            var error = { error: false }
            var response = { ...error, ...reply }
            if (err == null)
                res.status(200).send(response)
            else {
                error.error = true
                response = { ...error, ...reply }
                res.status(400).send(response)
            }
        })
    },

    // EMAIL
    // PASSWORD
    get_api_key: async (req, res) => {
        var request = {
            body: req.body
        }
        client_1.call('getkey', request, function (err, reply) {
            // console.log("reply from server 1:", reply)
            var error = { error: false }
            var response = { ...error, ...reply }
            if (err == null)
                res.status(200).send(response)
            else {
                error.error = true
                response = { ...error, ...reply }
                res.status(400).send(response)
            }
        })
    },

    // EMAIL
    // PASSWORD
    get_userId: async (req, res) => {
        var request = {
            body: req.body
        }
        client_1.call('getuserid', request, function (err, reply) {
            // console.log("reply from server 1:", reply)
            var error = { error: false }
            var response = { ...error, ...reply }
            if (err == null) {
                // res.status(200).send(response)
                return reply
            }
            else {
                error.error = true
                response = { ...error, ...reply }
                res.status(400).send(response)

                /// NEED WORK TO RETURN USERID IN A FORMAT
                /// USED BY NOTES IN SERVER 3
            }
        })
    },

    // EMAIL
    // PASSWORD
    new_api_key: async (req, res) => {
        var request = {
            body: req.body
        }
        client_1.call('newkey', request, function (err, reply) {
            // console.log("reply from server 1:", reply)
            var error = { error: false }
            var response = { ...error, ...reply }
            if (err == null)
                res.status(200).send(response)
            else {
                error.error = true
                response = { ...error, ...reply }
                res.status(400).send(response)
            }
        })
    },

    // EMAIL
    // PASSWORD
    // NEW PASSWORD
    // API KEY
    new_password: async (req, res) => {
        var request = {
            body: req.body
        }
        client_1.call('newpassword', request, function (err, reply) {
            // console.log("reply from server 1:", reply)
            var error = { error: false }
            var response = { ...error, ...reply }
            if (err == null)
                res.status(200).send(response)
            else {
                error.error = true
                response = { ...error, ...reply }
                res.status(400).send(response)
            }
        })
    },

    // // API KEY
    // auth_key: async (req, res) => {
    //     var request = {
    //         body: req.body
    //     }
    //     console.log('\n\nHERE 3')
    //     client_1.call('authkey', request, function (err, reply) {
    //         // console.log("reply from server 1:", reply)
    //         var error = { error: false }
    //         var response = { ...error, ...reply }
    //         console.log('\n\n\nREPLY ', reply)
    //         if (err == null)
    //             return reply
    //         else {
    //             console.log('\n\nHERE 4')
    //             error.error = true
    //             response = { ...error, ...reply }
    //             res.status(400).send(response)
    //         }
    //     })
    // }



    // API KEY
    auth_key: async (req, res) => {
        var request = {
            body: req.body
        }

        var reply = await client_1.call('authkey', request, function (err, reply) {
            // console.log("reply from server 1:", reply)
            var error = { error: false }
            var response = { ...error, ...reply }
            console.log('\n\n\nREPLY 1 ', reply)
            if (err == null)
                return reply
            else {
                error.error = true
                response = { ...error, ...reply }
                res.status(400).send(response)
            }
        })
        console.log('\n\n\nREPLY 2 ', reply)
        return reply
    }
}