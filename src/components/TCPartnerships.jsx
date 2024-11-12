import React from "react";

const TrainingCenterPartnerships = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Training Center Partnerships
        </h1>
        <p className="text-gray-600 text-lg text-center mb-12">
          Collaborating with training centers to provide quality education and support to students nationwide.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-3" style={{ color: "#e67e23" }}>Become a Partner</h3>
          <p className="text-gray-600 mb-4">
            Join our network of training centers to access resources, curriculum, and support for your institution.
          </p>
          <a href="/contact" className="text-blue-500 hover:underline">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default TrainingCenterPartnerships;
