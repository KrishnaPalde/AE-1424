const express = require("express");
const router = express.Router();
const examController = require("../../controllers/exam_controller/examController");
const Feedback = require("../../models/exam_model/Feedback");
// Exams
router.post("/", examController.createExam);
router.get("/", examController.getAllExams);
router.get("/:id", examController.getExamById);
router.delete("/:id", examController.deleteExamById);
router.post("/:examId/:studentId/start-exam", examController.startExam);
router.post("/:examId/:studentId/submit-exam", examController.submitExam);
router.post("/students/login", examController.loginStudent);

// Assign students
router.get("/students/:studentId", examController.getStudent);
router.post("/:examId/add-students-bulk", examController.addStudentsBulkToExam);
router.post("/:examId/add-student", examController.addStudentToExam);
router.get("/:examId/students", examController.getExamStudents);
// Student profile update
router.put(
  "/students/:studentId/update-profile",
  examController.updateStudentProfile
);
router.delete(
  "/:examId/students/:studentId/delete-student",
  examController.deleteStudentFromExam
);

// Add questions
router.post("/:examId/add-question", examController.addQuestionToExam);
router.post("/:examId/add-questions-bulk", examController.addBulkQuestions);
router.delete(
  "/:examId/questions/:questionId/delete-question",
  examController.deleteQuestion
);

// Results
router.post("/results", examController.submitResult);
router.get("/results/:studentId/:examId", examController.getResult);
router.get("/:examId/result", examController.getAllResult);

// Feedback
router.get("/:examId/feedbacks", async (req, res) => {
  try {
    const { examId } = req.params;

    const feedbacks = await Feedback.find({ examId: examId });

    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error Fetching feedback:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});
router.post("/feedback", async (req, res) => {
  try {
    const {
      examId,
      studentId,
      trainingRating,
      examRating,
      comments,
      autoSubmitted,
    } = req.body;

    // Validate required fields
    if (!examId || !studentId || !trainingRating || !examRating) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const feedback = new Feedback({
      examId,
      studentId,
      trainingRating,
      examRating,
      comments,
      autoSubmitted,
    });

    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully." });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
