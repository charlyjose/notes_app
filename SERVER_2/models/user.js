const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  api_key: {
    type: String,
    unique: true,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)