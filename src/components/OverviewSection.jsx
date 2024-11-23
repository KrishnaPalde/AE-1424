import React, { useState } from "react";

const OverviewSection = () => {
  const [activeTab, setActiveTab] = useState("candidates");

  const candidatesServices = [
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
        "Providing tailored training programs to develop entrepreneurial skills and mindsets, supported by mentorship, business planning, and access to incubation facilities to turn innovative ideas into successful ventures.",
    },
  ];

  const organizationsServices = [
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
        "Assisting organizations in implementing or initiating government schemes like skill development training, CSR fund utilization, and apprenticeship programs, ensuring compliance and maximizing impact.",
    },
    {
      title: "CSR Project Planning and Execution",
      description:
        "Designing and executing Corporate Social Responsibility (CSR) initiatives aligned with skill development and community empowerment goals.",
    },
    {
      title: "Customizable Training Modules",
      description:
        "Developing tailor-made training programs for organizations and industries to address specific skill gaps and operational needs.",
    },
  ];

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
  {currentServices.map((service, index) => (
    <div
      key={index}
      className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 border border-gray-200 flex flex-col justify-between"
    >
      {/* Card Content */}
      <div className="p-8 pt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-[#e67e23] text-white text-center py-4 rounded-b-xl">
        <a
          href="#"
          className="text-sm font-medium tracking-wide uppercase hover:underline transition-colors duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  ))}
</div>



      </div>
    </div>
  );
};

export default OverviewSection;
