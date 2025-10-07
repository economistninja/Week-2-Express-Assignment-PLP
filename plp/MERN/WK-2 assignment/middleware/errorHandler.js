// middleware/errorHandler.js

function errorHandler(err, req, res, next) {
  console.error('💥 Error:', err.stack);

  // Default error response
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong on the server.';

  res.status(statusCode).json({
    success: false,
    error: message,
  });
}

module.exports = errorHandler;
