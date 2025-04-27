const Exam = require("../../models/exam_model/Exam");
const Student = require("../../models/exam_model/Student");
const Result = require("../../models/exam_model/Result");
const bcrypt = require("bcryptjs");

// Create a new exam
exports.createExam = async (req, res) => {
  try {
    const { title, description, startTime, endTime, duration, isActive } =
      req.body;
    const exam = new Exam({
      title,
      description,
      startTime,
      endTime,
      duration,
      isActive,
    });
    const savedExam = await exam.save();
    res.status(201).json(savedExam);
  } catch (error) {
    res.status(400).json({ message: "Failed to create exam", error });
  }
};

exports.updateExamById = async (req, res) => {
  try {
    const { title, description, startTime, endTime, duration, isActive } =
      req.body;
    const { id } = req.params;

    const savedExam = await Exam.findByIdAndUpdate(
      id,
      { title, description, startTime, endTime, duration, isActive },
      { new: true, runValidators: true }
    );

    if (!savedExam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    res.status(200).json(savedExam);
  } catch (error) {
    res.status(400).json({ message: "Failed to update exam", error });
  }
};

exports.addStudentToExam = async (req, res) => {
  const { examId } = req.params;
  const { email, firstName, lastName, age, contactNumber, aadharNumber } =
    req.body;

  try {
    if (!firstName || !lastName || !contactNumber) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    let student = await Student.findOne({ contactNumber });

    if (student) {
      // If student exists, add exam if not already assigned
      if (!student.assignedExams.includes(examId)) {
        student.assignedExams.push(examId);
        await student.save();
      }
      return res.status(200).json({
        message: "Existing student updated with new exam assignment",
        student,
      });
    }

    const passwordHash = await bcrypt.hash("Password@123", 10);

    student = new Student({
      email: email || null,
      passwordHash,
      firstName,
      lastName,
      age: age || null,
      contactNumber,
      aadharNumber: aadharNumber || null,
      assignedExams: [examId],
    });

    await student.save();

    res.status(201).json({
      message: "Student added and assigned to exam",
      student,
    });
  } catch (err) {
    console.error("Error adding student:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.addStudentsBulkToExam = async (req, res) => {
  const { examId } = req.params;
  const { students } = req.body;

  if (!Array.isArray(students) || students.length === 0) {
    return res.status(400).json({ message: "No student data provided" });
  }

  try {
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    const contactNumbers = students.map((s) => s.contactNumber);
    const existingStudents = await Student.find({
      contactNumber: { $in: contactNumbers },
    });

    const existingMap = new Map(
      existingStudents.map((s) => [s.contactNumber, s])
    );

    const newStudents = [];
    const updatedStudents = [];

    for (const s of students) {
      if (!s.firstName || !s.lastName || !s.contactNumber) continue;

      const existing = existingMap.get(s.contactNumber);

      if (existing) {
        // Assign exam if not already assigned
        if (!existing.assignedExams.includes(examId)) {
          existing.assignedExams.push(examId);
          await existing.save();
          updatedStudents.push(existing);
        }
      } else {
        const passwordHash = await bcrypt.hash("Password@123", 10);
        newStudents.push({
          email: s.email || null,
          passwordHash,
          firstName: s.firstName,
          lastName: s.lastName,
          age: s.age || null,
          contactNumber: s.contactNumber,
          aadharNumber: s.aadharNumber || null,
          assignedExams: [examId],
        });
      }
    }

    const insertedStudents = await Student.insertMany(newStudents);

    res.status(201).json({
      message: `${insertedStudents.length} new students added, ${updatedStudents.length} existing students updated`,
      addedStudents: insertedStudents,
      updatedStudents,
    });
  } catch (err) {
    console.error("Error adding students in bulk:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteStudentFromExam = async (req, res) => {
  const { examId, studentId } = req.params;

  try {
    // Step 1: Find the student by studentId
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Step 2: Remove the examId from the assignedExams array
    const assignedExamIndex = student.assignedExams.indexOf(examId);
    const completedExamIndex = student.completedExams.indexOf(examId);
    if (assignedExamIndex === -1 && completedExamIndex === -1) {
      return res
        .status(400)
        .json({ message: "Exam not assigned to this student" });
    }

    if (assignedExamIndex != -1) {
      student.assignedExams.splice(assignedExamIndex, 1); // Remove the examId from the array
    } else if (completedExamIndex != -1) {
      student.completedExams.splice(completedExamIndex, 1); // Remove the examId from the array
    }

    // Step 3: Save the updated student record
    await student.save();

    return res.status(200).json({
      message:
        "Exam removed from student, but student still assigned to other exams",
    });
  } catch (err) {
    console.error("Error deleting student from exam:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteQuestion = async (req, res) => {
  const { examId, questionId } = req.params;

  try {
    // Find the exam by examId
    const exam = await Exam.findById(examId);

    // If exam doesn't exist, return a 404 error
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    // Find the question index by questionId
    const questionIndex = exam.questions.findIndex(
      (q) => q._id.toString() === questionId
    );

    // If question not found, return a 404 error
    if (questionIndex === -1) {
      return res.status(404).json({ message: "Question not found" });
    }

    // Remove the question from the exam's questions array
    exam.questions.splice(questionIndex, 1);

    // Save the updated exam document
    await exam.save();

    // Respond with a success message
    return res.status(200).json({ message: "Question deleted successfully" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the question" });
  }
};

exports.addQuestionToExam = async (req, res) => {
  try {
    const { examId } = req.params;
    const { questionText, options, marks } = req.body;

    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    exam.questions.push({ questionText, options, marks });
    await exam.save();

    res.status(201).json({ message: "Question added", exam });
  } catch (error) {
    res.status(400).json({ message: "Failed to add question", error });
  }
};

exports.addBulkQuestions = async (req, res) => {
  try {
    const { examId } = req.params;
    const { questions } = req.body; // Array of {questionText, options, marks}

    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    exam.questions.push(...questions);
    await exam.save();

    res.status(201).json({ message: "Bulk questions added", exam: exam });
  } catch (error) {
    res.status(400).json({ message: "Failed to add bulk questions", error });
  }
};

exports.updateStudentProfile = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { firstName, lastName, age, contactNumber, aadharNumber } = req.body;

    const student = await Student.findByIdAndUpdate(
      studentId,
      { firstName, lastName, age, contactNumber, aadharNumber },
      { new: true }
    );

    res.status(200).json({ message: "Profile updated", student });
  } catch (error) {
    res.status(400).json({ message: "Failed to update profile", error });
  }
};

// Get all exams
exports.getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch exams", error });
  }
};

// Get single exam with questions
exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.status(200).json(exam);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch exam", error });
  }
};

exports.getExamStudents = async (req, res) => {
  try {
    const examId = req.params.examId;

    const students = await Student.find({
      $or: [{ assignedExams: examId }, { completedExams: examId }],
    });

    return res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students for exam:", error);
    return res.status(500).json({
      message: "Failed to fetch students.",
      error: error.message,
    });
  }
};
exports.getStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId;

    const student = await Student.findById(studentId)
      .populate("assignedExams completedExams")
      .lean();

    return res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching students for exam:", error);
    return res.status(500).json({
      message: "Failed to fetch students.",
      error: error.message,
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const student = await Student.find();
    return res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching students:", error);
    return res.status(500).json({
      message: "Failed to fetch students.",
      error: error.message,
    });
  }
};

// Submit result
exports.submitResult = async (req, res) => {
  try {
    const { studentId, examId, answers } = req.body;

    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    let score = 0;
    const totalMarks = exam.questions.reduce((acc, q) => acc + q.marks, 0);

    // Scoring logic
    answers.forEach((ans) => {
      const question = exam.questions.id(ans.questionId);
      if (question) {
        const selectedOption = question.options.id(ans.selectedOptionId);
        if (selectedOption && selectedOption.isCorrect) {
          score += question.marks;
        }
      }
    });

    const result = new Result({
      studentId,
      examId,
      answers,
      score,
      totalMarks,
    });

    await result.save();
    res.status(201).json({ message: "Result submitted", result });
  } catch (error) {
    res.status(400).json({ message: "Failed to submit result", error });
  }
};

// Get result by student & exam
exports.getResult = async (req, res) => {
  try {
    const { studentId, examId } = req.params;
    const result = await Result.findOne({ studentId, examId })
      .populate("studentId", "firstName lastName email")
      .populate("examId", "title");

    if (!result) return res.status(404).json({ message: "Result not found" });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch result", error });
  }
};

exports.getAllResult = async (req, res) => {
  try {
    const { examId } = req.params;
    const result = await Result.find({ examId });
    if (!result) return res.status(404).json({ message: "Result not found" });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch result", error });
  }
};

exports.deleteExamById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExam = await Exam.findByIdAndDelete(id);

    if (!deletedExam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    res.status(200).json({ message: "Exam deleted successfully", deletedExam });
  } catch (error) {
    console.error("Error deleting exam:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Controller function to start an exam for a student and update student details
exports.startExam = async (req, res) => {
  const { examId, studentId } = req.params;

  try {
    // Find the exam by examId
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    // Find the student by studentId
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if the exam has already been assigned to the student
    if (!student.assignedExams.includes(examId)) {
      return res
        .status(400)
        .json({ message: "Exam not assigned to the student" });
    }

    // Check if the exam has already been started by the student
    if (student.examStatus) {
      return res
        .status(400)
        .json({ message: "Exam already started for this student" });
    }

    // Update student model with exam start details
    student.examStatus = true; // Mark exam as started

    await student.save();

    // Send a success response
    res.status(200).json({
      message: "Exam started successfully",
      // student: student, // You can send back the updated student data
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
};

exports.submitExam = async (req, res) => {
  const { examId, studentId } = req.params;
  const { answers } = req.body;

  try {
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Invalid or missing answers" });
    }

    // Fetch exam
    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    let score = 0;
    let totalMarks = 0;

    // Create a map of questions for faster lookup
    const questionMap = new Map();
    exam.questions.forEach((q) => {
      questionMap.set(q._id.toString(), q);
      totalMarks += q.marks || 1; // Default 1 mark if not specified
    });

    // Evaluate answers
    answers.forEach((answer) => {
      const question = questionMap.get(answer.questionId);
      if (question) {
        const selectedOption = question.options.find(
          (opt) => opt._id.toString() === answer.selectedOptionId
        );
        if (selectedOption && selectedOption.isCorrect) {
          score += question.marks || 1;
        }
      }
    });

    const status = score >= totalMarks * 0.5 ? "Pass" : "Fail";
    // Create Result
    const result = new Result({
      studentId,
      examId,
      score,
      totalMarks,
      status,
      answers,
    });

    await result.save();

    await Student.findByIdAndUpdate(studentId, {
      $set: { examStatus: false },
      $addToSet: { completedExams: examId },
      $pull: { assignedExams: examId },
    });

    return res.status(200).json({
      message: "Exam submitted successfully",
      score,
      totalMarks,
      resultId: result._id,
    });
  } catch (error) {
    console.error("Submit exam error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.loginStudent = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the student by contact number (username)
    const student = await Student.findOne({ contactNumber: username });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, student.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Login successful - return student ID
    return res.status(200).json({
      message: "Login successful",
      studentId: student._id,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
