const mongoose = require('mongoose');

const zedEnquirySchema = new mongoose.Schema({
  userType: {
    type: String,
    required: true,
    enum: ['company', 'facilitator']
  },
  fullName: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  companyName: { type: String, required: true, trim: true },
  
  // Company Specific
  certificationGoal: {
    type: String,
    enum: ['bronze', 'silver', 'gold'],
    required: function() { return this.userType === 'company'; }
  },
  udyamStatus: { type: String },

  // Facilitator Specific
  experience: { type: String },

  // --- CRM FIELDS ---
  status: {
    type: String,
    enum: ['New', 'Contacted', 'In Progress', 'Converted', 'Closed'],
    default: 'New'
  },
  adminNotes: {
    type: String, 
    default: '' 
  },
  // Optional: If you have admin users, you can assign leads
  // assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 

}, { timestamps: true });

module.exports = mongoose.model('ZedEnquiry', zedEnquirySchema);