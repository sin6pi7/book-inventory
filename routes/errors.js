module.exports = {
  client: function (req, res, next) {
    var err = new Error('Resource not found');
    err.status = 404;
    next(err);
  },
  server: function (err, req, res, next) {
    console.error(err.stack);
    res
      .status(err.status || 500)
      .json({
        message: err.message,
        error: process.env.NODE_ENV === 'production' ? '' : err
      });
  }
};