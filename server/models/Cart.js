const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      productId: String,
      components: [String],
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
