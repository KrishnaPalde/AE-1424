import React from "react";
import { Link } from "react-router-dom";

export default function TrainingPrograms() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-[#e67e23] uppercase lg:text-6xl">
            Our Training Center
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            At our training centers, we are committed to creating a transformative learning environment that empowers individuals to achieve their highest potential. With state-of-the-art infrastructure, modern equipment, and cutting-edge technology, we ensure students receive hands-on training that meets industry standards.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6 text-gray-700 text-justify">
            <p className="text-lg leading-relaxed">
              Our spacious classrooms, advanced labs, and interactive learning setups are designed to foster creativity, collaboration, and skill enhancement. Our team of highly qualified trainers brings a wealth of industry experience and expertise, blending practical knowledge with academic rigor.
            </p>
            <p className="text-lg leading-relaxed">
              We offer diverse programs in traditional sectors like agriculture, craftsmanship, and retail, as well as future-ready fields such as Artificial Intelligence, Data Analytics, Cloud Computing, and Digital Marketing. With a strong emphasis on healthcare and wellness, we also provide specialized courses in geriatric care and other health-related professions.
            </p>
          </div>

          {/* Highlight Section */}
          <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-[#e67e23]">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-600">
              <li>
                <strong>State-of-the-Art Infrastructure:</strong> Hands-on training in industry-standard labs.
              </li>
              <li>
                <strong>Expert Trainers:</strong> Industry professionals with real-world expertise.
              </li>
              <li>
                <strong>Diverse Programs:</strong> Covering traditional and future-ready fields.
              </li>
              <li>
                <strong>Entrepreneurship Focus:</strong> Empowering students to start their own ventures.
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/training-centers/courses-offered"
          >
            <button 
            className="bg-[#e67e23] text-white px-8 py-3 rounded-lg shadow-lg text-lg font-medium hover:bg-[#c75f12] transition-all duration-300">
              Explore Our Programs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
