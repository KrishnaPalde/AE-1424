const Logo = require("../models/Logo");

// ✅ Get all logos by category
exports.getLogos = async (req, res) => {
  try {
    const { category } = req.params;
    const logos = await Logo.find({ category });
    res.status(200).json(logos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Add new logo
exports.createLogo = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const { category } = req.params;
    const logo = new Logo({ imageUrl, category });
    await logo.save();
    res.status(201).json({ message: "Logo created", logo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete logo by ID
exports.deleteLogo = async (req, res) => {
  try {
    const { id } = req.params;
    await Logo.findByIdAndDelete(id);
    res.status(200).json({ message: "Logo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
