module.exports = function (connection) {
  return {
    findAll: function () {
      return connection
        .then(function (db) {
          return db
            .collection('books')
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
            .collection('books')
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
            .collection('books')
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
