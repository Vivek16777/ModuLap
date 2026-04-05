const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controllers/orderController");

// Create order
router.post("/", createOrder);

// Get all orders
router.get("/", getOrders);

module.exports = router;
