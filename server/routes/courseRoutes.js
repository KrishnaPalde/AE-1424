const express = require("express");
const {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const router = express.Router();

// ✅ GET all courses
router.get("/", getCourses);

// ✅ CREATE a new course
router.post("/", createCourse);

// ✅ UPDATE a course by ID
router.put("/:id", updateCourse);

// ✅ DELETE a course by ID
router.delete("/:id", deleteCourse);

module.exports = router;
