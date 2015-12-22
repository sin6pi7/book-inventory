var PORT = 3000;

var app = require('./book-inventory')();

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server is listening on http://%s:%s', host, port);
});