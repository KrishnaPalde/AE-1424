import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Building2, Briefcase, AlertCircle, Phone, Mail, ShieldCheck } from 'lucide-react';
import config from '@/config'; // Ensure this path matches your project structure

const EnquiryForm = () => {
  // --- State Management ---
  const [userType, setUserType] = useState('company'); // 'company' or 'facilitator'
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  
  // Form Data State
  const initialData = {
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    certificationGoal: 'bronze',
    udyamStatus: 'Yes, I have Udyam',
    experience: ''
  };
  const [formData, setFormData] = useState(initialData);
  
  // Validation Errors State
  const [errors, setErrors] = useState({});

  // Reset errors when user type toggles
  useEffect(() => {
    setErrors({});
  }, [userType]);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time error clearing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    // Clear server errors on input change
    if (errors.server) {
      setErrors(prev => ({ ...prev, server: '' }));
    }
  };

  const setGoal = (level) => {
    setFormData(prev => ({ ...prev, certificationGoal: level }));
  };

  // --- Validation Logic ---
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
      isValid = false;
    }

    // Phone (Indian Context: 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
      isValid = false;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    // Company Name
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
      isValid = false;
    }

    // Facilitator Specific Validation
    if (userType === 'facilitator') {
      if (!formData.experience.trim()) {
        newErrors.experience = 'Please describe your expertise';
        isValid = false;
      } else if (formData.experience.length < 20) {
        newErrors.experience = 'Please provide a bit more detail (min 20 chars)';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // --- Submission to Backend ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');
      
      try {
        const response = await fetch(`${config.API_URL}/zed`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            userType // Explicitly passing the toggle state
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setFormStatus('success');
          setFormData(initialData); // Reset form
        } else {
          // Handle API Errors (Array or String)
          const apiError = data.error 
            ? (Array.isArray(data.error) ? data.error[0] : data.error)
            : 'Something went wrong. Please try again.';
            
          setErrors(prev => ({ ...prev, server: apiError }));
          setFormStatus('idle');
        }
      } catch (error) {
        console.error("Submission Error:", error);
        setErrors(prev => ({ ...prev, server: 'Network error. Please check your connection.' }));
        setFormStatus('idle');
      }
    } else {
      console.log("Validation Failed");
      // Optional: scroll to first error
    }
  };

  // --- Success View ---
  if (formStatus === 'success') {
    return (
      <div id="enquiry-section" className="py-24 px-6 bg-slate-900 text-center text-white min-h-[600px] flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/40"
          >
            <CheckCircle2 size={48} className="text-white" />
          </motion.div>
          <h3 className="text-4xl font-bold mb-4">Request Received!</h3>
          <p className="text-slate-300 text-lg mb-8">
            Thank you for your interest. Our ZED expert will analyze your requirements and contact you within 24 hours.
          </p>
          <button 
            onClick={() => setFormStatus('idle')}
            className="text-[#e67e23] hover:text-white font-semibold transition-colors border-b border-[#e67e23] pb-1 hover:border-white"
          >
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="enquiry-section" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#e67e23] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform?</h2>
          <p className="text-slate-300">Tell us about your organization so we can tailor the best roadmap for you.</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-800 p-1 rounded-full inline-flex border border-slate-700 shadow-inner">
            <button
              type="button"
              onClick={() => setUserType('company')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                userType === 'company' ? 'bg-[#e67e23] text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              I want ZED Certification
            </button>
            <button
              type="button"
              onClick={() => setUserType('facilitator')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                userType === 'facilitator' ? 'bg-[#e67e23] text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              I am a Facilitator
            </button>
          </div>
        </div>

        <motion.form 
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl relative"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User className={`absolute left-4 top-3.5 transition-colors ${errors.fullName ? 'text-red-400' : 'text-slate-400'}`} size={18} />
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all ${
                    errors.fullName ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:ring-2 focus:ring-[#e67e23]'
                  }`} 
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <Phone className={`absolute left-4 top-3.5 transition-colors ${errors.phone ? 'text-red-400' : 'text-slate-400'}`} size={18} />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210" 
                  maxLength={10}
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all ${
                    errors.phone ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:ring-2 focus:ring-[#e67e23]'
                  }`} 
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.phone}</p>}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
              <div className="relative">
                <Mail className={`absolute left-4 top-3.5 transition-colors ${errors.email ? 'text-red-400' : 'text-slate-400'}`} size={18} />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com" 
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all ${
                    errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:ring-2 focus:ring-[#e67e23]'
                  }`} 
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Company Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className={`absolute left-4 top-3.5 transition-colors ${errors.companyName ? 'text-red-400' : 'text-slate-400'}`} size={18} />
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Tech Industries Pvt Ltd" 
                  className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all ${
                    errors.companyName ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:ring-2 focus:ring-[#e67e23]'
                  }`} 
                />
              </div>
              {errors.companyName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.companyName}</p>}
            </div>

            {/* Conditional: Company Fields */}
            {userType === 'company' && (
              <>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">Certification Goal</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['bronze', 'silver', 'gold'].map((level) => (
                      <div 
                        key={level}
                        onClick={() => setGoal(level)}
                        className={`cursor-pointer rounded-lg p-4 text-center border-2 transition-all ${
                          formData.certificationGoal === level 
                            ? 'border-[#e67e23] bg-orange-50 ring-1 ring-[#e67e23]' 
                            : 'border-slate-100 bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-full h-2 rounded-full mb-2 ${
                          level === 'bronze' ? 'bg-[#CD7F32]' : level === 'silver' ? 'bg-[#C0C0C0]' : 'bg-[#FFD700]'
                        }`}></div>
                        <span className="capitalize font-bold text-slate-700">{level}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">Do you have Udyam Registration?</label>
                  <select 
                    name="udyamStatus"
                    value={formData.udyamStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#e67e23] outline-none"
                  >
                    <option>Yes, I have Udyam</option>
                    <option>No, I need help registering</option>
                  </select>
                </div>
              </>
            )}

            {/* Conditional: Facilitator Fields */}
            {userType === 'facilitator' && (
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-700">Experience / Expertise <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Briefcase className={`absolute left-4 top-3.5 transition-colors ${errors.experience ? 'text-red-400' : 'text-slate-400'}`} size={18} />
                  <textarea 
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Briefly describe your consulting experience or industry focus..." 
                    rows="3" 
                    className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all ${
                      errors.experience ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:ring-2 focus:ring-[#e67e23]'
                    }`}
                  ></textarea>
                </div>
                {errors.experience && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/> {errors.experience}</p>}
              </div>
            )}
          </div>

          <button 
            type="submit"
            disabled={formStatus === 'submitting'}
            className={`w-full bg-[#e67e23] hover:bg-[#c75f12] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${
              formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'
            }`}
          >
            {formStatus === 'submitting' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <>
                Submit Request <Send size={20} />
              </>
            )}
          </button>

          {/* Server Error Message */}
          {errors.server && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm text-center flex items-center justify-center gap-2"
            >
              <AlertCircle size={16} />
              {errors.server}
            </motion.div>
          )}
          
          <p className="text-xs text-slate-400 text-center mt-6 flex items-center justify-center gap-1">
            <ShieldCheck size={12} /> Your data is secure. We do not share your information.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default EnquiryForm;