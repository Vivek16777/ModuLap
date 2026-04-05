const Component = require("../models/Component");

exports.getComponents = async (req, res) => {
  try {
    const components = await Component.find();
    res.json(components);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
