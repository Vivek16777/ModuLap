const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

// Add item
router.post("/add", addToCart);

// Get all items
router.get("/", getCart);

// Remove item
router.post("/remove", removeFromCart);

module.exports = router;
