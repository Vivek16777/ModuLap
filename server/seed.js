const mongoose = require("mongoose");
const Product = require("./models/Product");
const Component = require("./models/Component");

mongoose.connect(
  "mongodb+srv://modulap:12345@cluster0.rx94cu6.mongodb.net/?appName=Cluster0",
);

async function seed() {
  await Product.deleteMany();
  await Component.deleteMany();

  const product = await Product.create({
    name: "ModuLap Pro X",
    basePrice: 50000,
    image: "laptop.png",
    description: "Customizable laptop",
  });

  const components = [
    { type: "CPU", name: "i5", price: 10000 },
    { type: "CPU", name: "i7", price: 20000 },
    { type: "RAM", name: "8GB", price: 4000 },
    { type: "RAM", name: "16GB", price: 8000 },
    { type: "STORAGE", name: "512GB SSD", price: 5000 },
    { type: "STORAGE", name: "1TB SSD", price: 9000 },
  ];

  await Component.insertMany(components);

  console.log("Database Seeded");
  process.exit();
}

seed();
