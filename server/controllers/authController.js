const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// Change Password (Logged-in Admin)
exports.changePassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    // Check if old password is correct
    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect old password" });

    // Hash new password
    // const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = newPassword;

    await admin.save();
    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Forgot Password (Request Reset)
// exports.forgotPassword = async (req, res) => {
//   const { email } = req.body;

//   try {
//     const admin = await Admin.findOne({ email });
//     if (!admin) return res.status(404).json({ message: "Admin not found" });

//     // Generate a random reset token
//     const resetToken = crypto.randomBytes(32).toString("hex");
//     const resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

//     admin.resetToken = resetToken;
//     admin.resetTokenExpiry = resetTokenExpiry;
//     await admin.save();

//     // Configure nodemailer for sending emails (replace with real SMTP credentials)
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: "your-email@gmail.com",
//         pass: "your-email-password",
//       },
//     });

//     // Send reset email
//     const mailOptions = {
//       to: admin.email,
//       from: "no-reply@yourapp.com",
//       subject: "Password Reset Request",
//       html: `<p>You requested a password reset.</p>
//              <p>Click <a href="http://yourfrontend.com/reset-password/${resetToken}">here</a> to reset your password.</p>
//              <p>This link will expire in 1 hour.</p>`,
//     };

//     await transporter.sendMail(mailOptions);
//     res.json({ message: "Password reset email sent successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// // Reset Password (After clicking reset link)
// exports.resetPassword = async (req, res) => {
//   const { token, newPassword } = req.body;

//   try {
//     const admin = await Admin.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });
//     if (!admin) return res.status(400).json({ message: "Invalid or expired token" });

//     // Hash new password
//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     admin.password = hashedPassword;

//     // Clear reset token
//     admin.resetToken = undefined;
//     admin.resetTokenExpiry = undefined;
//     await admin.save();

//     res.json({ message: "Password reset successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email);
    console.log(password);
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

exports.adminRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Create new admin
    const newAdmin = new Admin({
      email,
      password: password,
    });

    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
