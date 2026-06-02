const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Environment variables setup
dotenv.config();

// Database connection
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
