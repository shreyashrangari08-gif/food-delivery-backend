const express = require('express');
const router = express.Router();
const orderController = require('./controller'); // Path fix kiya

router.post('/create', orderController.createOrder);

module.exports = router;
