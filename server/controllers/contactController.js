const Contact = require("../models/Contact");

// ✅ GET Contact Information
exports.getContactInfo = async (req, res) => {
  try {
    const contactInfo = await Contact.findOne();
    if (!contactInfo) {
      return res.status(404).json({ message: "Contact details not found" });
    }
    res.json(contactInfo);
  } catch (error) {
    console.error("Error fetching contact details:", error);
    res.status(500).json({ message: "Error fetching contact details", error });
  }
};

// ✅ UPDATE Contact Information
exports.updateContactInfo = async (req, res) => {
  const { address, mobileNumber, email } = req.body;

  try {
    let contactInfo = await Contact.findOne();

    if (!contactInfo) {
      // If no contact info exists, create a new one
      contactInfo = new Contact({ address, mobileNumber, email });
    } else {
      // Update existing contact info
      contactInfo.address = address;
      contactInfo.mobileNumber = mobileNumber;
      contactInfo.email = email;
    }

    await contactInfo.save();
    res.json({ message: "Contact details updated successfully", contactInfo });
  } catch (error) {
    console.error("Error updating contact details:", error);
    res.status(500).json({ message: "Error updating contact details", error });
  }
};
