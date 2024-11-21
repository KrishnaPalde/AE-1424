import React, { useState } from "react";
import { BookOpen, Users, Award, Building2, Calendar } from "lucide-react";

const EducareSections = () => {
  const [activeTab, setActiveTab] = useState("candidates");

  const services = {
    candidates: [
      {
        title: "Skill Development Training Programs",
        description:
          "NSQF-aligned courses as per various SSCs, tailored to enhance practical skills, improve employability, and align with national educational standards.",
      },
      {
        title: "Placement Assistance",
        description:
          "Helping trained students secure employment by connecting them with employers and providing job placement support, including NAPS opportunities.",
      },
      {
        title: "Recognition of Prior Learning (RPL) Programs",
        description:
          "Helping individuals validate and certify existing skills, with specialized training to enhance efficiency, acquire advanced knowledge, and achieve formal recognition.",
      },
      {
        title: "Short Term Training (STT)",
        description:
          "Focused, industry-aligned short-term training programs designed to meet immediate skill demands and enhance employability.",
      },
      {
        title: "Entrepreneurship Training and Promotion",
        description:
          "Providing tailored training programs to develop entrepreneurial skills and mindsets, supported by mentorship, business planning, and access to incubation facilities.",
      },
    ],
    organizations: [
      {
        title: "Training Center Partnerships",
        description:
          "Collaborations to support training centers with resources, training, and operational guidance for improved educational delivery. Includes affiliation with the Government of India.",
      },
      {
        title: "Tenders and Work Orders",
        description:
          "Expert assistance in managing tenders and work orders, ensuring competitive bids and successful project execution.",
      },
      {
        title: "End-to-End Consultancy Services",
        description:
          "Assisting organizations in implementing or initiating government schemes like skill development training, CSR fund utilization, and apprenticeship programs.",
      },
      {
        title: "CSR Project Planning and Execution",
        description:
          "Designing and executing Corporate Social Responsibility initiatives aligned with skill development and community empowerment goals.",
      },
      {
        title: "Customizable Training Modules",
        description:
          "Developing tailor-made training programs for organizations and industries to address specific skill gaps and operational needs.",
      },
      {
        title: "Apprenticeship Program Facilitation",
        description:
          "Supporting companies in establishing and managing apprenticeship programs, fostering hands-on learning and creating skilled professionals.",
      },
      {
        title: "Capacity Building for Institutions",
        description:
          "Providing training and resources to educational institutions and organizations to improve infrastructure, faculty, and training outcomes.",
      },
      {
        title: "Government Liaison and Compliance Support",
        description:
          "Offering guidance for seamless registration, implementation, and compliance with government schemes and projects.",
      },
      {
        title: "Operational and Strategic Planning",
        description:
          "Delivering strategic insights and operational solutions to optimize training delivery and ensure successful project implementation.",
      },
      {
        title: "Monitoring and Impact Assessment",
        description:
          "Conducting evaluations to measure the impact of training programs and government schemes, ensuring accountability and continuous improvement.",
      },
      {
        title: "Digital Transformation for Training Centres",
        description:
          "Assisting training centres in integrating technology and digital solutions to enhance the learning experience and operational efficiency.",
      },
    ],
  };

  return (
    <div className="w-full p-6 my-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#e67e23] mb-4">
            What We Provide
          </h2>
          <div className="flex space-x-6 border-b-2 border-gray-200">
            <button
              onClick={() => setActiveTab("candidates")}
              className={`py-3 px-6 text-lg font-medium transition ${
                activeTab === "candidates"
                  ? "text-[#e67e23] border-b-2 border-[#e67e23]"
                  : "text-gray-600 hover:text-[#e67e23]"
              }`}
            >
              For Candidates
            </button>
            <button
              onClick={() => setActiveTab("organizations")}
              className={`py-3 px-6 text-lg font-medium transition ${
                activeTab === "organizations"
                  ? "text-[#e67e23] border-b-2 border-[#e67e23]"
                  : "text-gray-600 hover:text-[#e67e23]"
              }`}
            >
              For Organizations
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services[activeTab].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#e67e23]">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
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