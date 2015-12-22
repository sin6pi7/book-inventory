module.exports = function (connection) {
  return {
    findAll: function () {
      return connection
        .then(function (db) {
          return db
            .collection('books-bolek-zyla')
            .find()
            .toArray()
            .then(function (books) {
              return books;
            });
        });
    },
    findByIsbn: function (isbn) {
      return connection
        .then(function (db) {
          return db
            .collection('books-bolek-zyla')
            .findOne({ "isbn": isbn })
            .then(function (book) {
              return book;
            });
        });

    },
    updateByIsbn: function (isbn, stock) {
      return connection
        .then(function (db) {
          return db
            .collection('books-bolek-zyla')
            .updateOne({
              isbn: isbn
            },
            stock,
            {
              upsert: true
            });
        });
    }
  };
};
