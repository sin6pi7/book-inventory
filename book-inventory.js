var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');

function mongoStockRepository() {
  var url = 'mongodb://localhost:27017/bookInventory';
  var connection = MongoClient.connect(url);
  return require('./stock-repository')(connection);
}

module.exports = function (config) {
  var app = express();
  var stockRepository = (config && config.stockRepository) || mongoStockRepository();
  var stockRoutes = require('./routes/stock')(stockRepository);
  var errorRoutes = require('./routes/errors');

  // SPECIAL MIDDLEWARE
  app.use(bodyParser.json());

  // ROUTES
  app.get('/stock', stockRoutes.findAll);
  app.get('/stock/:isbn', stockRoutes.find);
  app.post('/stock', stockRoutes.update);

  // ERRORS
  app.use(errorRoutes.client, errorRoutes.server);

  return app;
};
