const mongoose = require('mongoose')
require('./routes/note')

// const db = require('./connectDB').database

mongoose.connect('mongodb://root:12345@localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(function () {
    console.log('Database connection successfull')
  })
  .catch(function (err) {
    console.log('Unable to connect to database')
  })

console.log('\nServer 3 started')