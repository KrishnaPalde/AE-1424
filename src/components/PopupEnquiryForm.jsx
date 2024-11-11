import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, X } from "lucide-react";
import indianStates from "./indianState";

const PopupEnquiryForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "student",
    age: "",
    state: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "type" && value === "student" ? { age: "" } : {}),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.type === "student" && !formData.age) {
      newErrors.age = "Age is required";
    }
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      onClose(); // Close the popup on successful submission
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-full max-w-lg p-8 mx-4 bg-white rounded-xl shadow-2xl lg:max-w-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={24} />
        </button>

        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">Enquiry Form</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${errors.name ? "border-red-500" : "border-gray-300 focus:ring-orange-500"}`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${errors.email ? "border-red-500" : "border-gray-300 focus:ring-orange-500"}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${errors.phone ? "border-red-500" : "border-gray-300 focus:ring-orange-500"}`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">Enquiry Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 transition"
              >
                <option value="student">Student</option>
                <option value="training_center">Training Center</option>
                <option value="other">Other</option>
              </select>
            </div>

            {formData.type === "student" && (
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-600">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${errors.age ? "border-red-500" : "border-gray-300 focus:ring-orange-500"}`}
                />
                {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
              </div>
            )}

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">State *</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${errors.state ? "border-red-500" : "border-gray-300 focus:ring-orange-500"}`}
              >
                <option value="">Select State</option>
                {Object.keys(indianStates).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">City *</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${errors.city ? "border-red-500" : "border-gray-300 focus:ring-orange-500"}`}
              >
                <option value="">Select City</option>
                {(indianStates[formData.state] || []).map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              rows="4"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${errors.message ? "border-red-500" : "border-gray-300 focus:ring-orange-500"}`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-800 transition-all"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupEnquiryForm;
