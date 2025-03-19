const Service = require("../models/Service");
require("dotenv").config();
// ✅ GET all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error("Error fetching services:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching services", error: error.message });
  }
};

exports.getServiceById = async (req, res) => {
  try {
    // const id = req.params.id;
    const service = await Service.findOne({ id: req.params.id });
    res.json(service);
  } catch (error) {
    console.error("Error fetching services:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching services", error: error.message });
  }
};

// ✅ CREATE a new service
exports.createService = async (req, res) => {
  try {
    let { title, category, description, longDescription, features, imageUrl } =
      req.body;

    if (!title || !category || !description) {
      return res
        .status(400)
        .json({ message: "Title, category, and description are required" });
    }

    const formattedTitle = title.toLowerCase().replace(/\s+/g, "-"); // Replace spaces with hyphens
    const formattedCategory = category.toLowerCase(); // Convert category to lowercase
    const id = `${formattedTitle}-${formattedCategory}`;

    // Ensure `features` is an array
    features = Array.isArray(features)
      ? features.map((f) => f.trim())
      : features?.split(",").map((f) => f.trim()) || [];

    // Create the service
    const service = new Service({
      id, // Auto-generated unique ID
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
      longDescription: longDescription?.trim() || "",
      image: imageUrl?.trim() || process.env.LOGOURL,
      features,
    });

    await service.save();
    res.status(201).json({ message: "Service created successfully", service });
  } catch (error) {
    console.error("Error creating service:", error.message);
    res
      .status(500)
      .json({ message: "Error creating service", error: error.message });
  }
};

// ✅ UPDATE a service by ID
exports.updateService = async (req, res) => {
  try {
    const { title, category, description, longDescription, features, image } =
      req.body;

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { title, category, description, longDescription, features, image },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service updated successfully", service });
  } catch (error) {
    console.error("Error updating service:", error.message);
    res
      .status(500)
      .json({ message: "Error updating service", error: error.message });
  }
};

// ✅ DELETE a service by ID
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error.message);
    res
      .status(500)
      .json({ message: "Error deleting service", error: error.message });
  }
};
