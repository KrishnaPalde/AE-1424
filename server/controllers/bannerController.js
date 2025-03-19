const Banner = require("../models/Banner");

// ✅ Get all banners
exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching banners", error: error.message });
  }
};

// ✅ Create a new banner
exports.createBanner = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    const newBanner = new Banner({ imageUrl });
    await newBanner.save();

    res
      .status(201)
      .json({ message: "Banner created successfully", banner: newBanner });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating banner", error: error.message });
  }
};

// ✅ Update a banner by ID
exports.updateBanner = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }

    const updatedBanner = await Banner.findByIdAndUpdate(
      req.params.id,
      { imageUrl },
      { new: true }
    );

    if (!updatedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    res.json({ message: "Banner updated successfully", banner: updatedBanner });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating banner", error: error.message });
  }
};

// ✅ Delete a banner by ID
exports.deleteBanner = async (req, res) => {
  try {
    const deletedBanner = await Banner.findByIdAndDelete(req.params.id);

    if (!deletedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }

    res.json({ message: "Banner deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting banner", error: error.message });
  }
};
