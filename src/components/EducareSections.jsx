import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { servicesData } from "../data/servicesData"; // Importing servicesData

const EducareSections = () => {
  const [activeTab, setActiveTab] = useState("Candidates");

  // Group services by category dynamically
  const groupedServices = servicesData.reduce((acc, service) => {
    acc[service.category] = acc[service.category] || [];
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <div className="w-full p-6 my-16 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#e67e23] mb-4">
            What We Provide
          </h2>
          <div className="flex space-x-6 border-b-2 border-gray-200">
            {/* Tabs */}
            {Object.keys(groupedServices).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`py-3 px-6 text-lg font-medium transition ${
                  activeTab === category
                    ? "text-[#e67e23] border-b-2 border-[#e67e23]"
                    : "text-gray-600 hover:text-[#e67e23]"
                }`}
              >
                For {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {groupedServices[activeTab]?.map((service) => (
            <Link
              to={`/what-we-do/${service.id}`} // Link to service details page
              key={service.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#e67e23]">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducareSections;

{/* News & Updates Section */}
        {/* <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#e67e23] mb-4">
            News & Updates
          </h2>
          <div
            className="relative bg-white rounded-lg shadow-md overflow-y-auto"
            style={{ maxHeight: "500px" }}
          >
            {news.map((item, index) => (
              <div
                key={index}
                className="p-6 border-b border-gray-200"
                style={{ height: "auto" }}
              >
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                  <span className="bg-[#e67e23] text-white text-xs px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div> */}