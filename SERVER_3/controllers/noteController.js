var uniqid = require('uniqid')
var Note = require('../models/note')
var rpc_client_1 = require('../middlewares/rpc_client_1')

module.exports = {

    // API KEY
    // CONTENT
    // GET THE USER ID
    create: async (req, res) => {
        if (!req.body.api_key || !req.body.content) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }

        // GET THE USER ID
        var userId
        var reply = await rpc_client_1.get_userId(req)
        if (reply != null)
            userId = reply
        else {
            var reply = { error: false, message: 'User not authorized' }
            return reply
        }

        var access = false
        if (req.body.access != undefined)
            access = req.body.access
        const note = await Note.create(
            {
                noteId: uniqid(uniqid(), uniqid()),
                userId: userId,
                content: req.body.content,
                access: access
            }
        )
        note['userId'] = undefined
        note['__v'] = undefined
        var reply = { error: false, message: 'Note created successfully', note: note }
        return reply
    },

    // API KEY
    // NOTE ID
    // GET THE USER ID
    read_one: async (req, res) => {
        if (!req.body.api_key || !req.body.noteId) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }

        // GET THE USER ID
        var userId
        var reply = await rpc_client_1.get_userId(req)
        if (reply != null)
            userId = reply
        else {
            var reply = { error: false, message: 'User not authorized' }
            return reply
        }

        const note = await Note.findOne(
            {
                noteId: req.body.noteId, userId: userId
            }
        )
        if (note != null) {
            note['userId'] = undefined
            note['__v'] = undefined
            var reply = { error: false, note: note }
            return reply
        }
        else {
            var reply = { error: true, message: 'Note not found', try: 'Invalid Note ID' }
            return reply
        }
    },

    // API KEY
    // GET THE USER ID
    read_all: async (req, res) => {
        if (!req.body.api_key) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }

        // GET THE USER ID
        var userId
        var reply = await rpc_client_1.get_userId(req)
        if (reply != null)
            userId = reply
        else {
            var reply = { error: false, message: 'User not authorized' }
            return reply
        }

        var notes = await Note.find(
            {
                userId: userId
            }
        )
        notes.forEach(notes => {
            notes['userId'] = undefined
            notes['__v'] = undefined
        })
        var reply = { error: false, notes: notes }
        return reply
    },

    // PUBLIC READ
    // NOTE ID
    public_read_one: async (req, res) => {
        if (!req.body.noteId) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }
        const note = await Note.findOne(
            {
                noteId: req.body.noteId,
                access: true
            }
        )
        if (note != null) {
            note['userId'] = undefined
            note['__v'] = undefined
            var reply = { error: false, note: note }
            return reply
        }
        else {
            var reply = { error: true, message: 'Note not available to public' }
            return reply
        }
    },

    // API KEY
    // NOTE ID
    // GET THE USER ID
    update: async (req, res) => {
        if (!req.body.api_key || !req.body.noteId) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }
        if (req.body.content == null && req.body.access == null) {
            var reply = { error: true, message: 'No change' }
            return reply
        }

        // GET THE USER ID
        var userId
        var reply = await rpc_client_1.get_userId(req)
        if (reply != null)
            userId = reply
        else {
            var reply = { error: false, message: 'User not authorized' }
            return reply
        }

        if (userId != null) {
            var note
            if (req.body.content != null && req.body.access != null)
                note = await Note.findOneAndUpdate(
                    {
                        noteId: req.body.noteId,
                        userId: userId
                    },
                    {
                        content: req.body.content,
                        access: req.body.access
                    }
                )
            else if (req.body.content != null)
                note = await Note.findOneAndUpdate(
                    {
                        noteId: req.body.noteId,
                        userId: userId
                    },
                    {
                        content: req.body.content
                    }
                )
            else if (req.body.access != null)
                note = await Note.findOneAndUpdate(
                    {
                        noteId: req.body.noteId,
                        userId: userId
                    },
                    {
                        access: req.body.access
                    }
                )

            if (note != null) {
                var newNote = await Note.findOne({ noteId: note.noteId })
                newNote['userId'] = undefined
                newNote['__v'] = undefined
                var reply = { error: false, message: 'Note updated', note: newNote }
                return reply
            }
            else {
                var reply = { error: true, message: 'Note note found' }
                return reply
            }
        }
        else {
            var reply = { error: true, message: 'User not authorised' }
            return reply
        }
    },

    // API KEY
    // NOTE ID
    // GET THE USER ID
    delete: async (req, res) => {
        if (!req.body.api_key || !req.body.noteId) {
            var reply = { query_error: true, message: 'Invalid keys' }
            return reply
        }

        // GET THE USER ID
        var userId
        var reply = await rpc_client_1.get_userId(req)
        if (reply != null)
            userId = reply
        else {
            var reply = { error: false, message: 'User not authorized' }
            return reply
        }

        if (userId != null) {
            var note = await Note.findOneAndDelete(
                {
                    noteId: req.body.noteId,
                    userId: userId
                }
            )
            if (note != null) {
                note['userId'] = undefined
                note['__v'] = undefined
                var reply = { error: false, message: 'Note deleted', note: note }
                return reply
            }
            else {
                var reply = { error: true, message: 'Note not found' }
                return reply
            }
        }
        else {
            var reply = { error: true, message: 'User not authorised' }
            return reply
        }
    }
}