import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import config from "@/config";


const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    mobileNumber: "",
    address: "",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Fetch Contact Info from API
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(config.API_URL + "/contact");
        if (!response.ok) throw new Error("Failed to fetch contact info");
        const data = await response.json();
        setContactInfo(data);
      } catch (err) {
        setError("Error fetching contact details.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const response = await fetch(config.API_URL + "/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactInfo),
      });

      if (!response.ok) throw new Error("Failed to update contact info");

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError("Error updating contact details.");
      console.error("Update error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
    >
      {loading ? (
        <p className="text-center text-gray-600">Loading contact details...</p>
      ) : (
        <>
          {message && <p className="text-green-600 text-center">{message}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}

          {/* Email */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg p-3">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg p-3">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="text"
                name="mobileNumber"
                value={contactInfo.mobileNumber}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <div className="flex items-start bg-gray-100 border border-gray-300 rounded-lg p-3">
              <FaMapMarkerAlt className="text-gray-500 mr-3 mt-1" />
              <textarea
                name="address"
                value={contactInfo.address}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#e67e23] text-white py-3 rounded-lg font-medium text-lg hover:bg-[#cf6d1f] transition-all shadow-md hover:shadow-lg"
          >
            Save Changes
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
