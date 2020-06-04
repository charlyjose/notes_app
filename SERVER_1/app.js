var createError = require('http-errors')
var express = require('express')
var logger = require('morgan')
var PORT = require('./config/env.json').web

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use(require('./routes/user'));
app.use(require('./routes/note'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
});

// const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log('\nWEB server listening at: ', PORT)
})