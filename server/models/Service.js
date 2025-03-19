const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Candidates", "Organizations"],
  },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  features: { type: [String], required: true }, // Array of features
  image: { type: String, required: true }, // URL or file path
});

module.exports = mongoose.model("Service", serviceSchema);
