var cuid = require('cuid')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const Profile = require('./profileController')
let saltRounds = 10


module.exports = {

    // EMAIL
    // PASSWORD
    // FIRST NAME
    // LAST NAME
    // ADDRESS
    create_user: async (req, res) => {
        if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname || !req.body.address) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }
        var userId = cuid.slug()
        var chkuid = await User.findOne({ userId: userId })
        var chkem = await User.findOne({ email: req.body.email })
        if (chkem != null) {
            var reply = { query_error: true, message: 'Email already exist' }
            return reply
        }
        else if ((chkuid == null) && (chkem == null)) {
            var api_key = cuid()
            await User.create({
                userId: userId,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, saltRounds),
                api_key: api_key
            })
            await Profile.create(req, userId)
            var reply = { query_error: false, message: 'Account created successfully. Use the API KEY to access your account', api_key: api_key }
            return reply
        }
        else {
            var reply = { query_error: true, message: 'Some internal error' }
            return reply
        }
    },

    // EMAIL
    // PASSWORD
    get_api_key: async (req, res) => {
        if (!req.body.email || !req.body.password) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }
        var user = await User.findOne({ email: req.body.email })
        if (bcrypt.compareSync(req.body.password, user.password)) {
            var reply = { query_error: false, api_key: user.api_key }
            return reply
        }
        else {
            var reply = { query_error: true, message: 'User not authorised' }
            return reply
        }
    },

    // API KEY
    get_userId: async (req, res) => {
        if (!req.body.api_key) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }
        var user = await User.findOne({ api_key: req.body.api_key })
        if (user != null) {
            return user.userId
        }
        else
            return null
    },

    // EMAIL
    // PASSWORD
    new_api_key: async (req, res) => {
        if (!req.body.email || !req.body.password) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }
        var user = await User.findOne({
            email: req.body.email
        })
        if (bcrypt.compareSync(req.body.password, user.password)) {
            var api_key = cuid()
            await User.updateOne(
                {
                    email: user.email,
                    password: user.password
                },
                {
                    api_key: api_key
                }
            )
            var reply = { query_error: false, message: 'New API KEY generated', api_key: api_key }
            return reply
        }
        else {
            var reply = { query_error: true, message: 'User not authorised' }
            return reply
        }
    },

    // EMAIL
    // PASSWORD
    // NEW PASSWORD
    // API KEY
    new_password: async (req, res) => {
        if (!req.body.email || !req.body.password || !req.body.newpassword || !req.body.api_key) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }

        if (req.body.password == req.body.newpassword) {
            var reply = { query_error: true, message: 'Use a different password' }
            return reply
        }
        var user = await User.findOne({
            email: req.body.email,
            api_key: req.body.api_key
        })
        if (bcrypt.compareSync(req.body.password, user.password)) {
            await User.updateOne(
                {
                    email: user.email,
                    api_key: user.api_key
                },
                {
                    password: bcrypt.hashSync(req.body.newpassword, saltRounds)
                }
            )
            var reply = { query_error: false, message: 'Password updated' }
            return reply
        }
        else {
            var reply = { query_error: true, message: 'User not authorised' }
            return reply
        }
    },

    // API KEY
    auth_key: async (req) => {
        if (!req.body.api_key) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }
        var user = await User.findOne({ api_key: req.body.api_key })
        if (user != null)
            return true
        else
            return false
    }
}