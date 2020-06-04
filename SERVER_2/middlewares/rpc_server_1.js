var User = require('../controllers/userController')

module.exports = {
    create_user: async (req, res, next) => {
        var err = null
        var reply = await User.create_user(req.m)
        next(err, reply)
    },

    get_api_key: async (req, res, next) => {
        var err = null
        var reply = await User.get_api_key(req.m)
        next(err, reply)
    },

    get_userId: async (req, res, next) => {
        var err = null
        var reply = await User.get_userId(req.m)
        next(err, reply)
    },

    new_api_key: async (req, res, next) => {
        var err = null
        var reply = await User.new_api_key(req.m)
        next(err, reply)
    },

    new_password: async (req, res, next) => {
        var err = null
        var reply = await User.new_password(req.m)
        next(err, reply)
    },

    auth_key: async (req, res, next) => {
        var err = null
        var reply = await User.auth_key(req.m)
        next(err, reply)
    }
}