import React, { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import indianStates from "./indianState";

// 🔹 Reusable InputField Component
const InputField = ({ label, name, type = "text", value, onChange, error }) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label.toLowerCase()}`}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
        error ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
      }`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

// 🔹 Reusable SelectField Component
const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-600">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
        error ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
      }`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

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
  const [responseMessage, setResponseMessage] = useState(null);

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
      const emailData = {
        name: formData.name || "N/A",
        email: formData.email || "N/A",
        phone: formData.phone || "N/A",
        message: formData.message || "N/A",
        type: formData.type || "N/A",
        age: formData.type === "student" ? formData.age || "N/A" : "N/A",
        state: formData.state || "N/A",
        city: formData.city || "N/A",
      };

      emailjs
        .send(
          "service_q498tfn",
          "template_soo2f4r",
          emailData,
          "k6St47ADFWmErY3X5"
        )
        .then(
          () => {
            setResponseMessage({
              type: "success",
              text: "Enquiry submitted successfully!",
            });
            resetFormAndClose();
          },
          () => {
            setResponseMessage({
              type: "error",
              text: "Failed to submit enquiry. Please try again later.",
            });
            resetFormAndClose();
          }
        );
    }
  };

  const resetFormAndClose = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      type: "student",
      age: "",
      state: "",
      city: "",
    });
    setTimeout(() => {
      setResponseMessage(null);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative w-11/12 max-w-lg p-8 mx-4 bg-white shadow-xl rounded-2xl border border-gray-200"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-all transform hover:scale-110"
          >
            <X size={24} />
          </button>

          {!responseMessage ? (
            <>
              <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
                Enquiry Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <InputField
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <InputField
                    label="Email *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  <InputField
                    label="Phone *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                  <SelectField
                    label="Enquiry Type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    options={[
                      { value: "student", label: "Student" },
                      { value: "training_center", label: "Training Center" },
                      { value: "other", label: "Other" },
                    ]}
                  />
                  {formData.type === "student" && (
                    <InputField
                      label="Age *"
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      error={errors.age}
                    />
                  )}
                </div>

                <InputField
                  label="Message *"
                  name="message"
                  type="text"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                <button
                  type="submit"
                  className="w-full py-3 text-white text-lg font-medium rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 transition-all"
                >
                  Submit Enquiry
                </button>
              </form>
            </>
          ) : (
            <SuccessMessage responseMessage={responseMessage} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupEnquiryForm;
