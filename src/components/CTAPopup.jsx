import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const CTAPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Return nothing if the popup is not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="relative bg-white rounded-3xl shadow-lg w-11/12 max-w-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-800 transition transform hover:scale-110"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#e67e23] to-[#f3904f] text-white px-8 py-6 text-center">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-sm mt-1">We're here to assist you with any questions or inquiries.</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Contact Information */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#e67e23] text-white p-3 rounded-full">
              <FaPhoneAlt className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium text-lg text-gray-800">Contact Number</p>
              <a
                href="tel:+918237776233"
                className="text-[#e67e23] hover:underline text-sm"
              >
                +91 82377 76233
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[#e67e23] text-white p-3 rounded-full">
              <FaEnvelope className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium text-lg text-gray-800">Email</p>
              <a
                href="mailto:office@aartieducare.com"
                className="text-[#e67e23] hover:underline text-sm"
              >
                office@aartieducare.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#e67e23] text-white p-3 rounded-full">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium text-lg text-gray-800">Address</p>
              <a
                href="https://maps.app.goo.gl/KJ1mDEJxuEyTfv8g8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e67e23] hover:underline text-sm"
              >
                Utkarsha Training Centre, Plot No. 58, Ambad - Uttam Nagar Rd, behind Shivanjali Petrol
                Pump, DGP Nagar 2, Murari Nagar, Nashik, Maharashtra 422010
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="px-6 py-4">
          <a
            href="https://wa.me/918237776233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#25D366] text-white text-lg py-2 rounded-full font-medium hover:bg-[#1DA851] transition transform hover:scale-105 shadow-sm space-x-2"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTAPopup;
