module.exports = function (stockRepository) {
  return {
    findAll: function (req, res, next) {
      stockRepository
        .findAll()
        .then(function (stocks) {
          res.json(stocks);
          return stocks;
        })
        .catch(function (err) {
          next(err);
        });
    },
    find: function (req, res, next) {
      stockRepository
        .findByIsbn(req.params.isbn)
        .then(function (stock) {
          res.json(stock);
          return stock;
        })
        .catch(function (err) {
          next(err);
        });
    },
    update: function (req, res, next) {
      var isbn = req.body.isbn;
      var count = req.body.count;

      var stock = {
        isbn: isbn,
        count: count
      };

      stockRepository
        .updateByIsbn(isbn, stock)
        .then(function () {
          res.json(stock);
          return stock;
        })
        .catch(function (err) {
          next(err);
        });
    }
  }
};