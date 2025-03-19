const Scheme = require("../models/Scheme");

// ✅ Get all schemes
exports.getSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json(schemes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schemes", error });
  }
};

exports.getSchemeById = async (req, res) => {
  try {
    const schemes = await Scheme.findOne({ id: req.params.id });
    res.json(schemes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schemes", error });
  }
};

// ✅ Create a new scheme
exports.createScheme = async (req, res) => {
  try {
    const { title, description, longDescription, features } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    // Generate a unique id using title
    const slugify = (text) =>
      text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

    const uniqueId = `${slugify(title)}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    const newScheme = new Scheme({
      id: uniqueId,
      title,
      description,
      longDescription,
      features: Array.isArray(features)
        ? features
        : features.split(",").map((f) => f.trim()),
    });

    await newScheme.save();
    res
      .status(201)
      .json({ message: "Scheme created successfully", scheme: newScheme });
  } catch (error) {
    res.status(500).json({ message: "Error creating scheme", error });
  }
};

// ✅ Update a scheme by ID
exports.updateScheme = async (req, res) => {
  try {
    const updatedScheme = await Scheme.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedScheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }

    res.json({ message: "Scheme updated successfully", scheme: updatedScheme });
  } catch (error) {
    res.status(500).json({ message: "Error updating scheme", error });
  }
};

// ✅ Delete a scheme by ID
exports.deleteScheme = async (req, res) => {
  try {
    await Scheme.findByIdAndDelete(req.params.id);
    res.json({ message: "Scheme deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting scheme", error });
  }
};
