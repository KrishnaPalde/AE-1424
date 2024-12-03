import React from "react";

export default function CoursesWeOffer({ onCTAClick }) {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 max-w-5xl text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-[#e67e23] lg:text-5xl">
          Programs We Offer
        </h1>
        <p className="text-lg text-gray-600">
          Explore a range of diverse programs meticulously designed to meet the
          demands of an ever-evolving job market. Empower yourself with
          cutting-edge skills, practical knowledge, and insights that drive
          success.
        </p>
        <button
          onClick={onCTAClick}
          className="bg-[#e67e23] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#c75f12] transition-all duration-300 shadow-lg"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}
