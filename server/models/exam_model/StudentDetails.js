// models/StudentDetails.js
const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  firstName: String,
  lastName: String,
  age: Number,
  contactNumber: String,
  aadharNumber: String,
  startedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("StudentDetails", studentDetailsSchema);
