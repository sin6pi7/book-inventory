var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// SPECIAL MIDDLEWARE
app.use(bodyParser.json());

// ROUTES
app.post('/stock', function (req, res) {
  res.json({
    "isbn": req.body.isbn,
    "count": req.body.count
  });
});

// ERRORS
app.use(clientError, serverError);

module.exports = app;

function clientError(req, res, next) {
  var err = new Error('Resource not found');
  err.status = 404;
  next(err);
}

function serverError(err, req, res, next) {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({
      message: err.message,
      error: process.env.NODE_ENV === 'production' ? '' : err
    });
}


