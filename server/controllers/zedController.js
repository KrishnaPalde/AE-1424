const ZedEnquiry = require('../models/ZedEnquiry');

// @desc    Submit a new ZED Enquiry
// @route   POST /api/zed-enquiry
// @access  Public
const createEnquiry = async (req, res) => {
  try {
    const {
      userType,
      fullName,
      phone,
      email,
      companyName,
      certificationGoal,
      udyamStatus,
      experience
    } = req.body;

    // Create new enquiry object based on userType
    const newEnquiry = new ZedEnquiry({
      userType,
      fullName,
      phone,
      email,
      companyName,
      // Spread conditional fields only if relevant
      ...(userType === 'company' && { certificationGoal, udyamStatus }),
      ...(userType === 'facilitator' && { experience })
    });

    const savedEnquiry = await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: savedEnquiry
    });

  } catch (error) {
    console.error('ZED Enquiry Error:', error);
    
    // Handle Mongoose Validation Errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }

    res.status(500).json({
      success: false,
      error: 'Server Error. Please try again later.'
    });
  }
};
// @desc    Get All Enquiries (with Filter & Pagination)
// @route   GET /api/zed-enquiry
// @access  Private/Admin
const getAllEnquiries = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, userType, search } = req.query;

    // Build Query
    const query = {};
    if (status) query.status = status;
    if (userType) query.userType = userType;
    
    // Search by Name, Company, or Email
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: 'i' } },
        { companyName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const count = await ZedEnquiry.countDocuments(query);
    const enquiries = await ZedEnquiry.find(query)
      .sort({ createdAt: -1 }) // Newest first
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.status(200).json({
      success: true,
      count,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
      data: enquiries
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Get Single Enquiry Details
// @route   GET /api/zed-enquiry/:id
// @access  Private/Admin
const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await ZedEnquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, error: 'Enquiry not found' });
    }
    res.status(200).json({ success: true, data: enquiry });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Update Status & Notes (CRM Action)
// @route   PUT /api/zed-enquiry/:id
// @access  Private/Admin
const updateEnquiryStatus = async (req, res) => {
  try {
    const { status, adminNotes } = req.body;

    const enquiry = await ZedEnquiry.findByIdAndUpdate(
      req.params.id,
      { 
        $set: { 
          ...(status && { status }),
          ...(adminNotes && { adminNotes })
        } 
      },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({ success: false, error: 'Enquiry not found' });
    }

    res.status(200).json({ success: true, message: 'Updated successfully', data: enquiry });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Delete Enquiry
// @route   DELETE /api/zed-enquiry/:id
// @access  Private/Admin
const deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await ZedEnquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, error: 'Enquiry not found' });
    }
    res.status(200).json({ success: true, message: 'Enquiry deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Get CRM Dashboard Stats
// @route   GET /api/zed-enquiry/stats/dashboard
// @access  Private/Admin
const getEnquiryStats = async (req, res) => {
  try {
    const stats = await ZedEnquiry.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          newLeads: { $sum: { $cond: [{ $eq: ["$status", "New"] }, 1, 0] } },
          companies: { $sum: { $cond: [{ $eq: ["$userType", "company"] }, 1, 0] } },
          facilitators: { $sum: { $cond: [{ $eq: ["$userType", "facilitator"] }, 1, 0] } },
          bronzeInterest: { $sum: { $cond: [{ $eq: ["$certificationGoal", "bronze"] }, 1, 0] } },
          goldInterest: { $sum: { $cond: [{ $eq: ["$certificationGoal", "gold"] }, 1, 0] } }
        }
      }
    ]);

    res.status(200).json({ 
      success: true, 
      data: stats[0] || { total: 0, newLeads: 0, companies: 0, facilitators: 0 } 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createEnquiry, // Existing
  getAllEnquiries,
  getEnquiryById,
  updateEnquiryStatus,
  deleteEnquiry,
  getEnquiryStats
};