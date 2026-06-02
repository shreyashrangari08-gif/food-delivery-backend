const Order = require('./modelsorder'); // Path fix kiya

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
