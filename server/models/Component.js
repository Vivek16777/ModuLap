const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
  type: {
    type: String, // CPU, RAM, STORAGE
    required: true,
  },
  name: String,
  price: Number,
});

module.exports = mongoose.model("Component", componentSchema);
