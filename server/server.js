const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ✅ Initialize app FIRST
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const configRoutes = require("./routes/configRoutes");
app.use("/api/config", configRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);
const componentRoutes = require("./routes/componentRoutes");
app.use("/api/components", componentRoutes);
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
// Test route
app.get("/", (req, res) => {
  res.send("ModuLap API Running...");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
