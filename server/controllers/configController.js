const Component = require("../models/Component");
const Product = require("../models/Product");

exports.calculatePrice = async (req, res) => {
  try {
    const { productId, components } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    let totalPrice = product.basePrice;

    let selectedComponents = [];

    for (let compId of components) {
      const comp = await Component.findById(compId);

      if (comp) {
        totalPrice += comp.price;
        selectedComponents.push(comp.name);
      }
    }

    res.json({
      product: product.name,
      selectedComponents,
      basePrice: product.basePrice,
      totalPrice,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
