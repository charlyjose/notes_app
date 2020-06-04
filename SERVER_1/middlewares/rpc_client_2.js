var qrpc = require('qrpc')
var PORT = require('../config/env.json').rpc_client_2
var client_2 = qrpc.connect(PORT, 'localhost', function () {
    console.log('CONNECTED to SERVER 2 at: ', PORT)
})

module.exports = {

    // API KEY
    // CONTENT 
    create: async (req, res) => {
        var request = {
            body: req.body
        }
        client_2.call('create', request, function (err, reply) {
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

    // API KEY
    // NOTE ID
    read_one: async (req, res) => {
        var request = {
            body: req.body
        }
        client_2.call('read_one', request, function (err, reply) {
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

    // API KEY
    read_all: async (req, res) => {
        var request = {
            body: req.body
        }
        client_2.call('read_all', request, function (err, reply) {
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

    // PUBLIC READ
    // NOTE ID
    public_read_one: async (req, res) => {
        var request = {
            body: req.body
        }
        client_2.call('public_read_one', request, function (err, reply) {
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

    // API KEY
    // NOTE ID
    update: async (req, res) => {
        var request = {
            body: req.body
        }
        client_2.call('update', request, function (err, reply) {
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

    // API KEY
    // NOTE ID
    delete: async (req, res) => {
        var request = {
            body: req.body
        }
        client_2.call('delete', request, function (err, reply) {
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
    }
}