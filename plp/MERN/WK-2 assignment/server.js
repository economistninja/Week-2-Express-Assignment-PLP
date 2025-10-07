// server.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authenticateAPIKey = require('./middleware/authMiddleware');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');  // <-- new
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use(logger);

// Protected routes
app.use('/api/products', authenticateAPIKey, productRoutes);

// Global error handler (must come LAST)
app.use(errorHandler);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection failed:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
