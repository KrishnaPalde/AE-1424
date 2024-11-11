import React from 'react';
import { BookOpen, Users, Award, Building2, Calendar } from 'lucide-react';

const EducareSections = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#e67e23]" />,
      title: "Skill Development Training Programs",
      description: "Tailored programs that enhance practical skills, improve employability, and align with national educational standards.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#e67e23]" />,
      title: "Training Center Partnerships",
      description: "Collaborations to support training centers with resources, training, and operational guidance for improved educational delivery.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#e67e23]" />,
      title: "Placement Assistance",
      description: "Helping trained students secure employment by connecting them with employers and providing job placement support.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#e67e23]" />,
      title: "Tenders and Work Orders",
      description: "Expert assistance in managing tenders and work orders, ensuring competitive bids and successful project execution.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#e67e23]" />,
      title: "Skill Development Training Programs",
      description: "Programs focused on equipping individuals with the necessary skills for success in various industries.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#e67e23]" />,
      title: "Training Center Partnerships",
      description: "Strategic partnerships that provide training centers with guidance and resources to enhance their training programs.",
    },
  ];

  const news = [
    {
      date: "Nov 10, 2024",
      title: "New Government Education Policy Workshop",
      description: "Join our comprehensive workshop on implementing the latest education policies.",
      tag: "Workshop"
    },
    {
      date: "Nov 8, 2024",
      title: "Success Story: Rural Education Initiative",
      description: "Our program has successfully trained 500+ teachers in rural areas.",
      tag: "Success Story"
    },
    {
      date: "Nov 5, 2024",
      title: "Upcoming Digital Learning Conference",
      description: "Register for our annual conference on educational technology integration.",
      tag: "Event"
    },
    {
      date: "Nov 3, 2024",
      title: "New Partnership with EdTech Leaders",
      description: "Exciting collaboration to bring innovative learning solutions to schools.",
      tag: "Partnership"
    },
    {
      date: "Nov 1, 2024",
      title: "Teacher Training Program Launch",
      description: "Introducing our comprehensive online training platform for educators.",
      tag: "Launch"
    }
  ];

  return (
    <div className="w-full p-6 my-16">
      <div className="mx-16 px-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What We Do Section */}
        <div className="space-y-8 mr-32">
          <h2 className="text-3xl font-bold text-[#e67e23]">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* News & Updates Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#e67e23]">News & Updates</h2>
          <div
            className="relative bg-white rounded-lg shadow-md overflow-y-auto"
            style={{ maxHeight: '500px' }}
          >
            <div>
              {news.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border-b border-gray-200"
                  style={{ height: "auto" }} // This will auto adjust based on content
                >
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                    <span className="bg-[#e67e23] text-white text-xs px-2 py-1 rounded-full">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducareSections;
