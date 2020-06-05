var express = require('express')
var logger = require('morgan')
var PORT = require('./config/env.json').web

var jsonErrorHandler = async (err, req, res, next) => {
  var error = {
    body: err.body,
    message: 'Invalid JSON'
  }
  res.status(500).send({ error })
}

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(jsonErrorHandler)
app.use(express.urlencoded({ extended: false }))

// routes
app.use(require('./routes/user'));
app.use(require('./routes/note'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send({ error: true, message: 'Invalid URI' })
  next()
})

// const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log('\nWEB server listening at: ', PORT)
})