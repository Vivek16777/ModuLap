const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: String,
    items: [
      {
        productId: String,
        components: [String],
        price: Number,
      },
    ],
    totalAmount: Number,
    paymentStatus: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", orderSchema);
