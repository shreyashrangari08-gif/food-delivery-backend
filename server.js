const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Models ko yahan import karne ki zaroorat nahi hai agar aap sirf routes use kar rahe hain
const orderRoutes = require('./routes/orderRoutes');

// Environment variables setup
dotenv.config();

// Database connection
connectDB();

const app = express();

// Middleware
app.use(cors()); // Cross-Origin Resource Sharing ke liye
app.use(express.json()); // JSON body parse karne ke liye

// Routes
app.get('/', (req, res) => {
    res.send("Food Delivery API is running...");
});

// Order Routes - /api/orders/place-order
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
