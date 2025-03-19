import React, { useEffect, useState } from "react";
import { CheckCircle, Award, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import aboutUsImage from "../assets/tc3.png";
import sagar_thoke from "../assets/Sagar_Thoke.jpg";
import sagar_ghule from "../assets/Sagar_Ghule.jpg";
import sagar_khumbhar from "../assets/Sagar_Kumbhar.jpg";
import GovernmentDepartments from "./GovernmentDepartments";

const AboutUs = () => {
  const boardOfDirectors = [
    {
      name: "Sagar Ghule",
      position: "Director & COO",
      image: sagar_ghule,
      // description: "Expert in operations and strategic growth.",
    },
    {
      name: "Sagar Thoke",
      position: "Founder and MD",
      image: sagar_thoke,
      // description: "Visionary leader with a commitment to skill development.",
    },
    {
      name: "Sagar Kumbhar",
      position: "Director",
      image: sagar_khumbhar,
      // description: "Focused on partnerships and innovative solutions.",
    },
  ];

  const managementTeam = [
    { name: "Swati Naikade" },
    { name: "Gauri Pagare" },
    { name: "Kanchan Thoke" },
    { name: "Shraddha Nirmal" },
    { name: "Vijay Sonawane" },
    { name: "Rahul Jadhav" },
    { name: "Sangeeta Thoke" },
    { name: "Aniket Patil" },
    { name: "Rahul Singh" },
    { name: "Sachin Patil" },
    { name: "Sachin Rahane" },
    { name: "Sunita Palade" },
    { name: "Jayashri Thoke" },
  ];

  const stats = [
    { label: "Students Trained", value: "15,000+" },
    { label: "Corporate Partners", value: "180+" },
    { label: "Government Collaborations", value: "20+" }
  ];
  const stats2 = [
    { label: "Students Trained", value: "15,000+" },
    { label: "Training Centres", value: "60+" },
    { label: "Completed Projects", value: "45+" }
  ];

  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if(location.pathname === "/who-we-are/about-us/vision-mission"){
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
    } else if( location.pathname === "/who-we-are/about-us/board-directors"){
      window.scrollTo({
        top: 1100,
        behavior: "smooth",
      });
    }
  })

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Our Story Section */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-[#e67e23] mb-6">Our Story</h2>
            <div id="story-content" className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Inspired by the visionary ideals of Swami Vivekananda and Dr. APJ Abdul Kalam, 
                who believed that youth hold the power to transform the nation, Aarti Educare 
                began its journey in 2016 as a proprietorship firm under the leadership of 
                Sagar Ravindra Thoke. With a vision to empower youth through skill development, 
                the organization quickly gained momentum and was incorporated as Aarti Educare 
                Pvt. Ltd. in 2018 to expand its impact and reach.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Starting with a single training center in Nashik and less than 1,500 sq. ft. 
                of infrastructure, we have grown exponentially to now operate over 60 training 
                centers and manage more than 500,000 sq. ft. of state-of-the-art facilities 
                across Maharashtra.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 180+ client organizations and new partnerships being added daily, 
                Aarti Educare has become a trusted name in the skill development sector.
              </p>

              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden space-y-6"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our team of 128+ members, with an average age of under 30, brings unmatched 
                      energy, talent, and innovation to the table, setting us apart as leaders in 
                      the industry.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Collaborating with government departments and organizations, we provide 
                      impactful training programs in traditional and future-ready courses, equipping 
                      the youth for dynamic and evolving workforce demands.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Together, we are not just building careers but transforming India into a 
                      stronger, self-reliant, and future-ready nation.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="mt-4 px-6 py-2 bg-[#e67e23] text-white rounded-lg shadow-md hover:bg-[#cf681f] transition-transform duration-200 hover:scale-105"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Image and Stats Section */}
          <div className="relative">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={aboutUsImage}
                alt="Our Story"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats2.map((stat, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center text-center bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#fef5f1] to-[#ffffff] opacity-90 rounded-xl -z-10"></div>
                  <div className="w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-tl from-[#e67e23] to-[#f39c12] shadow-lg">
                    <h3
                      className={`text-2xl lg:text-3xl font-bold text-white ${
                        stat.value.length > 5 ? "text-xl lg:text-xl" : ""
                      }`}
                    >
                      {stat.value}
                    </h3>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-800">{stat.label}</p>
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#e67e23] to-[#f39c12] rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Vision and Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="p-8 bg-white shadow-md rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#e67e23] mr-4" />
                <h2 className="text-3xl font-bold text-[#e67e23]">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
              To be a cornerstone in the empowerment of India by enabling youth and women to lead transformative change.
               We envision a nation where every individual has the opportunity to thrive, contributing to a skilled, inclusive,
                and self-reliant society that propels India to global leadership.
              </p>
            </div>

            <div className="p-8 bg-white shadow-md rounded-xl">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-[#e67e23] mr-4" />
                <h2 className="text-3xl font-bold text-[#e67e23]">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
              To empower the nation by unlocking the potential of youth and women through transformative education, skill development, 
              and comprehensive consultancy services. We are dedicated to fostering self-reliance, reducing unemployment, and 
              building a future-ready workforce that drives innovation, strengthens communities, and contributes to India's 
              sustainable growth and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#e67e23] mb-4">Our Leadership</h2>
          </div>
          <h3 className="text-2xl font-semibold text-[#e67e23] mb-8 text-center">
            Board of Directors
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {boardOfDirectors.map((director, index) => (
              <div
                key={index}
                className="p-8 text-center transition-transform bg-gray-50 rounded-xl shadow-md hover:scale-105"
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold text-[#e67e23]">{director.name}</h3>
                <p className="text-[#333333] font-medium">{director.position}</p>
                <p className="text-sm text-gray-600 mt-2">{director.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-[#e67e23] mt-16 mb-8 text-center">
            Management Team
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {managementTeam.map((member, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {/* <div className="absolute -top-4 left-4 flex items-center justify-center w-10 h-10 text-white bg-[#e67e23] rounded-full">
                  {index + 1}
                </div> */}
                <h3 className="text-lg font-bold text-[#333333] text-center">
                  {member.name}
                </h3>
                <div className="mt-4 flex justify-center">
                  <div className="w-16 h-1 bg-[#e67e23] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white"><GovernmentDepartments/></div>

      {/* Impact Section
      <section className="py-16 bg-[#e67e23] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold">{stat.value}</div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
