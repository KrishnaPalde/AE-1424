import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
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

  const indianStates = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    Delhi: [
      "New Delhi",
      "North Delhi",
      "South Delhi",
      "East Delhi",
      "West Delhi",
    ],
    Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,

      ...(name === "state" && { city: "" }),
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
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for any queries about our training programs and
            services
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Our Location
                    </h3>
                    <p className="text-gray-600 mt-1">
                      123 Training Hub, Education Street
                      <br />
                      Mumbai, Maharashtra - 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600 mt-1">
                      contact@aartieducare.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600 mt-1">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Working Hours
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors
                      ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors
                      ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors
                      ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enquiry Type *
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="student"
                        checked={formData.type === "student"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Student
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="training_centre"
                        checked={formData.type === "training_centre"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Training Centre
                    </label>
                  </div>
                </div>

                {formData.type === "student" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors
                        ${errors.age ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.age && (
                      <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors
                      ${errors.state ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Select State</option>
                    {Object.keys(indianStates).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={!formData.state}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors
                      ${errors.city ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Select City</option>
                    {formData.state &&
                      indianStates[formData.state].map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors
                      ${errors.message ? "border-red-500" : "border-gray-300"}`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
