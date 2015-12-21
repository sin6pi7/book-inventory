var request = require('supertest');
var app = require('../book-inventory');

describe('Book inventory', function () {
  it('should return posted info', function (done) {
    var data = {
      "isbn": "12321323",
      "count": 10
    };

    request(app)
      .post('/stock')
      .send(data)
      .expect(data)
      .end(done);
  })
});



