const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true }, // e.g. "March 2024"
  image: { type: String, required: true }, // Image URL or file path
  description: { type: String, required: true },
});

module.exports = mongoose.model("Gallery", gallerySchema);
