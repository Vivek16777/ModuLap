const express = require("express");
const router = express.Router();
const { calculatePrice } = require("../controllers/configController");

router.post("/calculate", calculatePrice);

module.exports = router;
