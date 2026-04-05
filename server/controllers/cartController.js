let cart = [];

// Add to cart
exports.addToCart = (req, res) => {
  cart.push(req.body);
  res.json({ msg: "Added to cart", cart });
};

// Get cart
exports.getCart = (req, res) => {
  res.json(cart);
};

// Remove item
exports.removeFromCart = (req, res) => {
  const { id } = req.body;
  cart = cart.filter((item) => item.id !== id);
  res.json(cart);
};
