module.exports = function () {
  var stocks = [];

  return {
    findAll: function () {
      return Promise.resolve(stocks);
    },
    findByIsbn: function (isbn) {
      var stock = stocks.find(function (lookedUpStock) {
        return lookedUpStock.isbn === isbn;
      });

      return Promise.resolve(stock || {});
    },
    updateByIsbn: function (isbn, stock) {
      var idx = stocks.findIndex((lookedUpStock) => lookedUpStock.isbn === isbn);

      if (idx === -1) {
        // create if not here
        stocks.push(stock);
      } else {
        // update if present
        stocks[idx] = stock;
      }

      return Promise.resolve(stock);
    },
    clear: function () {
      stocks = [];
      return Promise.resolve(stocks);
    }
  };
};
