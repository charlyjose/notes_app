const mongoose = require('mongoose')
require('./routes/note')
var db = require('./connectDB').database

var option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

var connectWithRetry = function () {
  return mongoose.connect(db, option)
    .then(function () {
      console.log('Database connection successfull')
    })
    .catch(function (err) {
      console.log('Unable to connect to database')
      console.error('Failed to connect to mongo on startup - retrying in 2 sec', err);
      setTimeout(connectWithRetry, 2000)
    })
}

connectWithRetry()

console.log('\nServer 3 started')