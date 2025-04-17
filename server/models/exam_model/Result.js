// models/Result.js
const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  score: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Pass", "Fail", "-"],
    default: "-",
  },
  answers: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
      selectedOptionId: mongoose.Schema.Types.ObjectId,
    },
  ],
  completedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", resultSchema);
