// middleware/authMiddleware.js
require('dotenv').config();

function authenticateAPIKey(req, res, next) {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).json({ message: 'Missing API key' });
  }

  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Invalid API key' });
  }

  next();
}

module.exports = authenticateAPIKey;
