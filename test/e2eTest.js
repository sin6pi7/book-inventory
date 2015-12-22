var request = require('supertest');
var stockRepositoryMock = require('../stock-repository.inmemory')();
var app = require('../book-inventory')({
  stockRepository: stockRepositoryMock
});

describe('Book inventory', function () {
  beforeEach('clear db', function (done) {
    stockRepositoryMock.clear().then(function () {
      done();
    });
  });

  it('should update stock', function (done) {
    var stock = {
      "isbn": "12321323",
      "count": 10
    };

    request(app)
      .post('/stock')
      .send(stock)
      .expect(stock)
      .end(done);
  });

  it('should list all stocks', function (done) {
    var stock = {
      "isbn": "12321323",
      "count": 10
    };

    stockRepositoryMock
      .updateByIsbn(stock.isbn, stock)
      .then(function (stock) {
        request(app)
          .get('/stock')
          .expect([].concat(stock))
          .end(done);
      });
  });

  it('should return info about specific stock', function (done) {
    var stock = {
      "isbn": "12321323",
      "count": 10
    };

    stockRepositoryMock
      .updateByIsbn(stock.isbn, stock)
      .then(function (stock) {
        request(app)
          .get('/stock/' + stock.isbn)
          .expect(stock)
          .end(done);
      });
  });
});



