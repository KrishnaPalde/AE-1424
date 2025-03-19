const axios = require("axios");
const TrainingCenter = require("../models/TrainingCenter");

// ✅ Get all training centers
exports.getTrainingCenters = async (req, res) => {
  try {
    const centers = await TrainingCenter.find();
    res.json(centers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching training centers", error });
  }
};

// ✅ Get a single training center by ID
exports.getTrainingCenterById = async (req, res) => {
  try {
    const center = await TrainingCenter.findById(req.params.id);
    if (!center)
      return res.status(404).json({ message: "Training center not found" });
    res.json(center);
  } catch (error) {
    res.status(500).json({ message: "Error fetching training center", error });
  }
};

// ✅ Create a new training center
exports.createTrainingCenter = async (req, res) => {
  try {
    const { title, description, courses, students, address, city, coords } =
      req.body;

    if (!title || !description || !address || !city) {
      return res.status(400).json({
        message: "Title, description, address, and city are required",
      });
    }

    // ✅ Generate a unique ID using title + random 4-digit number
    const slugify = (text) =>
      text
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with "-"
        .replace(/[^\w-]+/g, ""); // Remove non-word characters

    const uniqueId = `${slugify(title)}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    let latitude = parseFloat(coords?.latitude) || 0;
    let longitude = parseFloat(coords?.longitude) || 0;

    // ✅ If lat/lng are missing, try fetching coordinates from OpenStreetMap
    if (!latitude || !longitude) {
      try {
        const formattedAddress = encodeURIComponent(address.trim());
        console.log(`Fetching coordinates for address: ${formattedAddress}`);

        let geoResponse = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${formattedAddress}&format=json&limit=1`
        );

        if (geoResponse.data.length > 0) {
          latitude = parseFloat(geoResponse.data[0].lat);
          longitude = parseFloat(geoResponse.data[0].lon);
          console.log(
            `✅ Address-based coordinates found: Lat=${latitude}, Lng=${longitude}`
          );
        } else {
          console.warn(
            "⚠️ Address lookup failed, trying city-based coordinates..."
          );

          // ✅ If address lookup fails, fetch city coordinates
          const formattedCity = encodeURIComponent(city.trim());
          geoResponse = await axios.get(
            `https://nominatim.openstreetmap.org/search?q=${formattedCity}&format=json&limit=1`
          );

          if (geoResponse.data.length > 0) {
            latitude = parseFloat(geoResponse.data[0].lat);
            longitude = parseFloat(geoResponse.data[0].lon);
            console.log(
              `✅ City-based coordinates found: Lat=${latitude}, Lng=${longitude}`
            );
          } else {
            console.warn("⚠️ City lookup also failed. Using default (0,0).");
          }
        }
      } catch (geoError) {
        console.error("❌ Error fetching coordinates:", geoError.message);
      }
    }

    // ✅ Create a new Training Center
    const newCenter = new TrainingCenter({
      id: uniqueId,
      title,
      description,
      courses,
      students,
      address,
      city,
      coords: { latitude, longitude },
    });

    await newCenter.save();

    res.status(201).json({
      message: "✅ Training center created successfully",
      center: newCenter,
    });
  } catch (error) {
    console.error("❌ Error creating training center:", error);
    res.status(500).json({ message: "Error creating training center", error });
  }
};

// ✅ Update a training center by ID
exports.updateTrainingCenter = async (req, res) => {
  try {
    const updatedCenter = await TrainingCenter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCenter)
      return res.status(404).json({ message: "Training center not found" });

    res.json({
      message: "Training center updated successfully",
      center: updatedCenter,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating training center", error });
  }
};

// ✅ Delete a training center by ID
exports.deleteTrainingCenter = async (req, res) => {
  try {
    const deletedCenter = await TrainingCenter.findByIdAndDelete(req.params.id);
    if (!deletedCenter)
      return res.status(404).json({ message: "Training center not found" });

    res.json({ message: "Training center deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting training center", error });
  }
};
