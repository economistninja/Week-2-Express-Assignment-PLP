const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api/students', require('./routes/studentRoutes'));

// Default route (Home Page)
app.get('/', (req, res) => {
    res.send('Student Management API: API Server for Express is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});