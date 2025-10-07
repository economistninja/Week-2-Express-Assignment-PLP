// middleware/auth.js
const auth = (req, res, next) => {
    const apiKey = req.header('x-api-key');

    // Check if API key matches environment variable
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
    }

    next();
};

module.exports = auth;
