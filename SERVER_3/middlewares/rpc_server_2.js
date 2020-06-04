var Note = require('../controllers/noteController')

module.exports = {
    create: async (req, res, next) => {
        var err = null
        var reply = await Note.create(req.m)
        next(err, reply)
    },

    read_one: async (req, res, next) => {
        var err = null
        var reply = await Note.read_one(req.m)
        next(err, reply)
    },

    read_all: async (req, res, next) => {
        var err = null
        var reply = await Note.read_all(req.m)
        next(err, reply)
    },

    public_read_one: async (req, res, next) => {
        var err = null
        var reply = await Note.public_read_one(req.m)
        next(err, reply)
    },

    update: async (req, res, next) => {
        var err = null
        var reply = await Note.update(req.m)
        next(err, reply)
    },

    delete: async (req, res, next) => {
        var err = null
        var reply = await Note.delete(req.m)
        next(err, reply)
    }
}