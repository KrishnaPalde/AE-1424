const express = require("express");
const router = express.Router();
const {
  getTrainingCenters,
  getTrainingCenterById,
  createTrainingCenter,
  updateTrainingCenter,
  deleteTrainingCenter,
} = require("../controllers/trainingCenterController");

// ✅ Fetch all training centers
router.get("/", getTrainingCenters);

// ✅ Fetch a single training center by ID
router.get("/:id", getTrainingCenterById);

// ✅ Create a new training center
router.post("/", createTrainingCenter);

// ✅ Update an existing training center
router.put("/:id", updateTrainingCenter);

// ✅ Delete a training center
router.delete("/:id", deleteTrainingCenter);

module.exports = router;
