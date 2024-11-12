import React from "react";

const PlacementAssistance = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Placement Assistance
        </h1>
        <p className="text-gray-600 text-lg text-center mb-12">
          We offer dedicated placement services to help you find the right job and start your career journey.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-3" style={{ color: "#e67e23" }}>Our Services</h3>
          <ul className="text-gray-600 text-lg leading-relaxed list-disc list-inside">
            <li>Interview Preparation</li>
            <li>Resume Building</li>
            <li>Job Placement</li>
            <li>Career Counseling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlacementAssistance;
