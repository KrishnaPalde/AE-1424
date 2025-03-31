import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const WhatsAppButton = () => {

  return (
    <div className="fixed z-50 max-w-full bottom-12 right-4">
      <a
        href="https://wa.me/918087810364"
        target="_blank"
        rel="noopener noreferrer"
        className="z-50 flex items-center justify-center w-16 h-16 text-white transition duration-300 bg-green-500 rounded-full shadow-lg hover:bg-green-600"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} /> {/* Increased icon size */}
      </a>
    </div>
  );
};

export default WhatsAppButton;
