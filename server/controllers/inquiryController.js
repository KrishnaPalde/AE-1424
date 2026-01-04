const Inquiry = require("../models/Inquiry");

// ✅ Get all inquiries
exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching inquiries", error });
  }
};

// ✅ Create a new inquiry
exports.createInquiry = async (req, res) => {
  try {
    const { name, email, phone, type, age, state, city, message } = req.body;

    console.log(req.body);
    if (!name || !email || !phone || !type || !state || !city || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (type === "student" && (!age || age < 1 || age > 100)) {
      return res
        .status(400)
        .json({ message: "Valid age is required for students" });
    }

    const inquiry = new Inquiry({
      name,
      email,
      phone,
      type,
      age: type === "student" ? age : null,
      state,
      city,
      message,
    });

    await inquiry.save();
    res
      .status(201)
      .json({ message: "Inquiry submitted successfully", inquiry });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error submitting inquiry", error });
  }
};

// ✅ Delete an inquiry by ID
exports.deleteInquiry = async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting inquiry", error });
  }
};

// PATCH /inquiries/:id/read
exports.markInquiryAsRead = async (req, res) => {
  try {
    const { remark } = req.body;

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      {
        status: "read",
        remark,
        readAt: new Date(),
      },
      { new: true }
    );

    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ message: "Failed to update inquiry", error });
  }
};

