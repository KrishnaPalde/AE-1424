const express = require('express');
const router = express.Router();
const { 
  createEnquiry, 
  getAllEnquiries, 
  getEnquiryById, 
  updateEnquiryStatus, 
  deleteEnquiry,
  getEnquiryStats
} = require('../controllers/zedController');

// Middleware to protect admin routes (Replace with your actual auth middleware)
// const { protect, admin } = require('../middleware/authMiddleware');

// Public Route (For the Landing Page Form)
router.post('/', createEnquiry);

// Admin Routes (Add 'protect' middleware here in production)
// Example: router.get('/', protect, admin, getAllEnquiries);

router.get('/', getAllEnquiries);           // List with filters
router.get('/stats/dashboard', getEnquiryStats); // KPI Stats
router.get('/:id', getEnquiryById);         // Details
router.put('/:id', updateEnquiryStatus);    // CRM Update (Status/Notes)
router.delete('/:id', deleteEnquiry);       // Delete

module.exports = router;