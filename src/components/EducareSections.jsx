import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Award, Building2, ChevronRight, Calendar } from 'lucide-react';

const EducareSections = () => {
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  const services = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Curriculum Development",
      description: "Expert guidance in aligning educational programs with government standards",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teacher Training",
      description: "Professional development programs for educators",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Comprehensive assessment and improvement strategies",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Institution Support",
      description: "Administrative and operational guidance for schools",
      gradient: "from-orange-500 to-yellow-400"
    }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNewsIndex((current) => (current + 1) % news.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What We Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-lg bg-white/90 rounded-2xl shadow-xl p-8 h-full border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
            What We Do
            <div className="h-1 w-20 bg-blue-500 mt-2 rounded-full"></div>
          </h2>
          <div className="grid gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                <div className="relative flex items-start space-x-4 p-6 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-2 group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* News and Updates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-lg bg-white/90 rounded-2xl shadow-xl p-8 h-full border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
            News & Updates
            <div className="h-1 w-20 bg-blue-500 mt-2 rounded-full"></div>
          </h2>
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNewsIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {news[activeNewsIndex].date}
                    </div>
                    <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
                      {news[activeNewsIndex].tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {news[activeNewsIndex].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {news[activeNewsIndex].description}
                  </p>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium">Read full article</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {news.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveNewsIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeNewsIndex 
                      ? 'bg-blue-600 w-4' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducareSections;