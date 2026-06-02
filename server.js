const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./configdb'); // File ka naam wahi rakhein jo aapne banaya hai

const orderRoutes = require('./oderroutes'); // File ka naam check karein

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running...");
});

app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
