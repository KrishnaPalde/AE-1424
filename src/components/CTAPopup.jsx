import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const CTAPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      {/* Main Popup */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-11/12 max-w-lg bg-white shadow-xl rounded-2xl  overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-white transition-all transform hover:scale-110"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-[#e67e23] to-[#f3904f] text-white px-8 py-6 text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-sm mt-1">We’re here to assist you. Reach out today!</p>
        </div>

        {/* Contact Details */}
        <div className="p-6 space-y-6">
          <ContactItem
            icon={<FaPhoneAlt className="w-6 h-6 text-white" />}
            title="Phone"
            content="+91 82377 76233"
            link="tel:+918237776233"
          />

          <ContactItem
            icon={<FaEnvelope className="w-6 h-6 text-white" />}
            title="Email"
            content="office@aartieducare.com"
            link="mailto:office@aartieducare.com"
          />

          <ContactItem
            icon={<FaMapMarkerAlt className="w-6 h-6 text-white" />}
            title="Address"
            content="Utkarsha Training Centre, Ambad - Uttam Nagar Rd, Nashik, Maharashtra 422010"
            link="https://maps.app.goo.gl/KJ1mDEJxuEyTfv8g8"
          />
        </div>

        {/* WhatsApp Button */}
        <div className="px-6 pb-6">
          <a
            href="https://wa.me/918237776233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#25D366] text-white text-lg py-3 rounded-full font-medium hover:bg-[#1DA851] transition-all transform hover:scale-105 shadow-md space-x-2"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

/* Reusable Contact Item Component */
const ContactItem = ({ icon, title, content, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-all"
  >
    <div className="flex items-center justify-center w-12 h-12 bg-[#e67e23] rounded-full">
      {icon}
    </div>
    <div>
      <p className="font-medium text-lg text-gray-800">{title}</p>
      <p className="text-sm text-[#e67e23] font-semibold">{content}</p>
    </div>
  </a>
);

export default CTAPopup;
