import React from "react";

const OverviewSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          Our Services Overview
        </h1>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Explore our comprehensive range of services designed to empower and support individuals and organizations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard
            title="Skill Development Training Programs"
            description="Specialized programs that help individuals develop in-demand skills, enhancing their employability and career growth."
            href="/what-we-do/team"
          />
          <ServiceCard
            title="Training Center Partnerships"
            description="Strategic partnerships with training centers to provide high-quality education and resources to students."
            href="/what-we-do/tc-partnerships"
          />
          <ServiceCard
            title="Placement Assistance"
            description="A comprehensive program to help graduates find suitable jobs and internships, ensuring a smooth transition into the workforce."
            href="/what-we-do/placement"
          />
          <ServiceCard
            title="Tenders and Work Orders"
            description="Expert management of tenders and work orders, handling partnerships with organizations to ensure efficient execution."
            href="/what-we-do/work-orders"
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, href }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-500 mb-6">{description}</p>
    <a href={href} className="text-[#e67e23] font-semibold hover:text-[#d35f00] transition duration-200">
      Learn More
    </a>
  </div>
);

export default OverviewSection;
