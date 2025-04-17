const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  trainingRating: {
    type: Number,
    required: true,
  },
  examRating: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
  },
  autoSubmitted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
