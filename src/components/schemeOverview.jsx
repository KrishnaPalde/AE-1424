import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { schemesData } from "../data/schemeData";

import config from "@/config";

const API_URL = config.API_URL;

const SchemeOverview = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(API_URL + "/schemes");
        if (!response.ok) throw new Error("Failed to fetch services");

        const data = await response.json();
        setSchemes(data);
      } catch (err) {
        setError("Failed to load services.");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 max-w-7xl space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Government Skill Development Schemes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover impactful initiatives designed to enhance skills, empower communities, and create sustainable livelihoods.
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border-t-4 border-[#e67e23]"
            >
              {/* Content Section */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {scheme.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {scheme.description}
                </p>
              </div>

              {/* Footer Section */}
                <Link
                  to={`/schemes/${scheme.id}`}
                  className="text-white font-semibold uppercase  transition-colors duration-200"
                >
              <div className="bg-[#e67e23] px-6 py-4 rounded-b-xl">
                  Learn More
              </div>
                </Link>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-[#fef3e7] text-gray-900 py-12 rounded-xl shadow-lg">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#e67e23]">
              Ready to Empower Your Future?
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              Contact our team today to explore these schemes and understand how they can benefit you or your organization.
            </p>
            <div className="mt-4">
              <Link
                to="/contact-us"
                className="bg-[#e67e23] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#d75c18] transition-all duration-300"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeOverview;
