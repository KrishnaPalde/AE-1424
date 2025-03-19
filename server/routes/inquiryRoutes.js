const express = require("express");
const {
  getInquiries,
  createInquiry,
  deleteInquiry,
} = require("../controllers/inquiryController");

const router = express.Router();

// ✅ Get all inquiries
router.get("/", getInquiries);

// ✅ Create a new inquiry
router.post("/", createInquiry);

// ✅ Delete an inquiry by ID
router.delete("/:id", deleteInquiry);

module.exports = router;
