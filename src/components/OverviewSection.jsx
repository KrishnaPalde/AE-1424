import React, { useEffect, useState } from "react";
// import { servicesData } from "../data/servicesData"; // Import the servicesData

import config from "@/config";

const API_URL = config.API_URL;

const OverviewSection = () => {
  const [activeTab, setActiveTab] = useState("candidates");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    window.scrollTo({
      top: 150,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
        const fetchServices = async () => {
          console.log(1)
          try {
            console.log(2)
            const response = await fetch(API_URL + "/services");
            console.log(3)
            if (!response.ok) throw new Error("Failed to fetch services");
            
            const data = await response.json();
            console.log(data)
            setServices(data);
          } catch (err) {
            setError("Failed to load services.");
            console.error("Error fetching services:", err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchServices();
      }, []);

  // Filter services based on active tab
  const candidatesServices = services.filter(
    (service) => service.category === "Candidates"
  );
  const organizationsServices = services.filter(
    (service) => service.category === "Organizations"
  );

  const currentServices =
    activeTab === "candidates" ? candidatesServices : organizationsServices;

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          Our Services Overview
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore our comprehensive range of services designed to empower and
          support individuals and organizations.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-6 mb-12">
          <button
            onClick={() => setActiveTab("candidates")}
            className={`px-8 py-3 text-lg font-medium rounded-lg ${
              activeTab === "candidates"
                ? "bg-[#e67e23] text-white shadow-lg"
                : "bg-white text-[#e67e23] border border-[#e67e23]"
            } transition-all duration-300`}
          >
            For Candidates
          </button>
          <button
            onClick={() => setActiveTab("organizations")}
            className={`px-8 py-3 text-lg font-medium rounded-lg ${
              activeTab === "organizations"
                ? "bg-[#e67e23] text-white shadow-lg"
                : "bg-white text-[#e67e23] border border-[#e67e23]"
            } transition-all duration-300`}
          >
            For Organizations
          </button>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 border border-gray-200 flex flex-col justify-between"
            >
              {/* Card Content */}
              <div className="p-8 pt-12 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Call to Action */}
                <a
                  href={`/what-we-do/${service.id}`} // Link to dynamic service details page
                  className="text-sm font-medium tracking-wide uppercase transition-colors duration-200"
                >
              <div className="bg-[#e67e23] text-white text-center py-4 rounded-b-xl">
                  Learn More
              </div>
                </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
