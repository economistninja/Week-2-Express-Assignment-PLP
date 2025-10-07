// middleware/logger.js

// Logs each request method, URL, and timestamp
function logger(req, res, next) {
  const now = new Date();
  const timestamp = now.toISOString(); // e.g., 2025-10-07T11:42:00.000Z

  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);

  next(); // Continue to next middleware/route
}

module.exports = logger;
