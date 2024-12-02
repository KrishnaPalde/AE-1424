import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { schemesData } from "../data/schemeData";
import CTAPopup from "./CTAPopup"; // Import the popup component

const SchemeDetails = () => {
  const { id } = useParams();
  const scheme = schemesData.find((s) => s.id === id);

  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state


  if (!scheme) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600">Scheme not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 max-w-7xl space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-900">{scheme.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {scheme.description}
          </p>
          <div className="mt-6">
            <button
              onClick={() => setIsPopupOpen(true)} // Open the popup
              className="bg-[#e67e23] text-white px-8 py-3 rounded-lg shadow-lg font-semibold hover:bg-[#c75f12] transition-all duration-300"
            >
              Get Started with {scheme.title}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* About the Scheme Section */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">About the Scheme</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {scheme.longDescription.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            {/* Call to Action Box */}
            <div className="bg-[#fef8f2] p-6 rounded-lg border-l-4 border-[#e67e23] shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Benefit from {scheme.title}?
              </h3>
              <p className="text-gray-700">
                Contact us today to learn more about how you can take advantage
                of this scheme and achieve your goals.
              </p>
              <div className="mt-4">
                <button
                  onClick={() => setIsPopupOpen(true)} // Open the popup
                  className="bg-[#e67e23] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c75f12] transition-all duration-300"
                >
                  Contact Us Now
                </button>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="lg:col-span-4 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              {scheme.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="h-3 w-3 bg-[#e67e23] rounded-full mt-1"></span>
                  <span className="text-lg font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-[#e67e23] text-white py-12 rounded-lg shadow-lg">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Interested in {scheme.title}?
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              Let us help you make the most of this scheme. Contact our team
              today for guidance and support.
            </p>
            <div className="mt-4">
              <button
                onClick={() => setIsPopupOpen(true)} // Open the popup
                className="bg-white text-[#e67e23] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link
            to="/schemes"
            className="text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
          >
            Back to Schemes
          </Link>
        </div>
      </div>

      {/* Popup Component */}
      <CTAPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default SchemeDetails;
