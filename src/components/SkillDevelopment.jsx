import React from "react";

const SkillDevelopment = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Skill Development Training Programs
        </h1>
        <p className="text-gray-600 text-lg text-center mb-12">
          We offer training programs that equip individuals with valuable skills for the modern job market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProgramCard title="Technical Skills Training" />
          <ProgramCard title="Soft Skills Development" />
          <ProgramCard title="Digital Literacy" />
          <ProgramCard title="Industry-Specific Training" />
        </div>
      </div>
    </div>
  );
};

const ProgramCard = ({ title }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
    <h3 className="text-2xl font-semibold mb-3" style={{ color: "#e67e23" }}>{title}</h3>
    <p className="text-gray-600">Our {title} program provides in-depth training to enhance your skills and career prospects.</p>
  </div>
);

export default SkillDevelopment;
