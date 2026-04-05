let orders = [];

// Create order
exports.createOrder = (req, res) => {
  orders.push(req.body);
  res.json({ msg: "Order placed", orders });
};

// Get orders
exports.getOrders = (req, res) => {
  res.json(orders);
};
