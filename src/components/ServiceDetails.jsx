import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CTAPopup from "./CTAPopup";

import config from "@/config";
import LazyLoad from "react-lazyload";

const API_URL = config.API_URL;

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(API_URL+"/services/"+id);
        if (!response.ok) throw new Error("Failed to fetch services");
        const data = await response.json();
        setService(data);
      } catch (err) {
        setError("Failed to load services.");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">Service not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 max-w-7xl space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-gray-800">{service.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {service.description}
          </p>
          {/* CTA Button Below Header */}
          <div>
            <button
              onClick={() => setIsPopupOpen(true)} // Open the popup
              className="text-white bg-[#e67e23] hover:bg-[#c75f12] px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Image Section */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-white bg-opacity-30 rounded-xl"></div>
              <LazyLoad height={200} offset={150} once>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
              </LazyLoad>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">About the Service</h2>
            <p className="text-gray-700 leading-relaxed">
              {service.longDescription.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 border-b border-gray-200 pb-4 last:border-b-0"
              >
                <span className="h-6 w-6 flex-shrink-0 bg-[#e67e23] rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </span>
                <p className="text-gray-700">
                  <strong>{feature.split(",")}</strong>
                </p>
              </div>
            ))}
          </div>
          {/* CTA Below Features */}
          <div className="text-center mt-8">
            <button
              onClick={() => setIsPopupOpen(true)} // Open the popup
              className="text-white bg-[#e67e23] hover:bg-[#c75f12] px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-md"
            >
              Learn More About These Features
            </button>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-[#e67e23] text-white py-12 rounded-xl shadow-lg">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Interested in {service.title}?
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              Contact us today to learn more about how we can help you or your organization.
            </p>
            <div className="mt-4">
              <button
                onClick={() => setIsPopupOpen(true)} // Open the popup
                className="bg-white text-[#e67e23] font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/what-we-do/services-overview"
            className="text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
          >
            Back to Services
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

export default ServiceDetails;
