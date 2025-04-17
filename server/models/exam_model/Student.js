const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  email: { type: String, default: null },
  passwordHash: { type: String, required: true },
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  age: { type: Number, default: null },
  contactNumber: { type: String, default: null, unique: true },
  aadharNumber: { type: String, default: null },
  assignedExams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exam" }],
  completedExams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exam" }],
  examStatus: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", studentSchema);
