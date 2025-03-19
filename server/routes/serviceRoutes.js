const express = require("express");
const router = express.Router();
const {
  getServices,
  createService,
  updateService,
  deleteService,
  getServiceById,
} = require("../controllers/serviceController");

// ✅ GET all services
router.get("/", getServices);

router.get("/:id", getServiceById);

// ✅ CREATE a new service
router.post("/", createService);

// ✅ UPDATE a service by ID
router.put("/:id", updateService);

// ✅ DELETE a service by ID
router.delete("/:id", deleteService);

module.exports = router;
