var app = require('./book-inventory')();

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server is listening on http://%s:%s', host, port);
});