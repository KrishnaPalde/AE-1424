const mongoose = require("mongoose");

const trainingCenterSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  courses: { type: String, required: true }, // e.g. "20+ Courses"
  students: { type: String, required: true }, // e.g. "500+ Students"
  address: { type: String, required: true },
  city: { type: String, required: true },
  coords: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

module.exports = mongoose.model("TrainingCenter", trainingCenterSchema);
