import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// const courses = [
//   {
//     title: "Apparel Made-Ups & Home Furnishing",
//     description: "Build expertise in the textile and fashion industry.",
//   },
//   {
//     title: "Beauty & Wellness Sector Skill Council",
//     description: "Learn advanced beauty and wellness techniques.",
//   },
//   {
//     title: "Capital Goods Skill Council",
//     description: "Master skills in engineering and capital goods sectors.",
//   },
//   {
//     title: "BFSI Sector Skill Council Of India",
//     description: "Advance your career in banking and finance.",
//   },
// ];

export default function CoursesCard({ onCTAClick, courses }) {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 py-16 px-6 max-w-7xl mx-auto">
      {courses.map((course, index) => (
      <div
      key={index}
      className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 group"
      data-aos="fade-up"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e67e23] via-[#f3904f] to-[#e67e23] opacity-10"></div>
    
      {/* ✅ Fix: Ensure content is above the hover border */}
      <div className="relative z-10 p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">{course.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{course.shortDescription}</p>
        <div className="pt-4">
          <button
            onClick={onCTAClick}
            className="w-full bg-[#e67e23] text-white py-3 rounded-lg font-medium 
                      hover:bg-[#c75f12] transition-all duration-300 cursor-pointer"
          >
            Enquire Now
          </button>
        </div>
      </div>
    
      {/* ✅ Fix: Move border behind everything */}
      <div className="absolute inset-0 rounded-xl transition-all duration-300 
                      after:absolute after:inset-0 after:border-4 after:border-transparent 
                      after:rounded-xl after:transition-all after:duration-300 
                      group-hover:after:border-[#e67e23] after:z-0">
      </div>
    </div>
    
     
      ))}
    </div>
  );
}
