const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  features: { type: [String], required: true }, // Array of features
});

module.exports = mongoose.model("Scheme", schemeSchema);
