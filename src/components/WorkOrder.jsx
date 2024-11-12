import React from "react";

const WorkOrders = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tenders and Work Orders
        </h1>
        <p className="text-gray-600 text-lg text-center mb-12">
          Explore our services related to tenders and work orders for various projects.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-3" style={{ color: "#e67e23" }}>Our Expertise</h3>
          <p className="text-gray-600">
            We manage and execute tenders and work orders, ensuring compliance, quality, and timely delivery of services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkOrders;
