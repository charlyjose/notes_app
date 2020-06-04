const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notesSchema = new Schema({
  noteId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  access: {
    type: Boolean,
    required: true,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Note', notesSchema) 