const Service = require("../models/Service");
const TrainingCenter = require("../models/TrainingCenter");
const Course = require("../models/Course");
const Inquiry = require("../models/Inquiry");

exports.getStats = async (req, res) => {
  try {
    const totalServices = await Service.countDocuments();
    const totalCenters = await TrainingCenter.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalInquiries = await Inquiry.countDocuments();
    console.log({ totalServices, totalCenters, totalCourses, totalInquiries });
    res.json({ totalServices, totalCenters, totalCourses, totalInquiries });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching dashboard stats", error });
  }
};
