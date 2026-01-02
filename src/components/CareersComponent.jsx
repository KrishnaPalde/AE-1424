import React from "react";
import { 
  Mail, 
  TrendingUp, 
  Users, 
  Target, 
  CheckCircle, 
  Briefcase,
  FileText,
  UserCheck,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Careers = () => {
  
  const benefits = [
    {
      id: "01",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Growth Opportunities",
      desc: "We prioritize internal growth. Access training certifications and leadership programs to advance your career."
    },
    {
      id: "02",
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Collaborative Culture",
      desc: "Work with a youthful, energetic team of 128+ members driven by a shared mission to empower India."
    },
    {
      id: "03",
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Impactful Work",
      desc: "Your daily work directly contributes to skilling the youth and transforming the nation's workforce."
    }
  ];

  const processSteps = [
    { icon: <FileText className="w-6 h-6" />, title: "Apply", desc: "Send your CV via email." },
    { icon: <UserCheck className="w-6 h-6" />, title: "Shortlisting", desc: "HR reviews your profile." },
    { icon: <Briefcase className="w-6 h-6" />, title: "Interview", desc: "Technical & Culture fit." },
    { icon: <Award className="w-6 h-6" />, title: "Onboarding", desc: "Welcome to the team!" },
  ];

  const departments = [
    "Technical Trainers (IT / Vocational)",
    "Project Management (Govt. Schemes)",
    "Center Operations & Administration",
    "Business Development & Sales",
    "Counseling & Mobilization",
    "Digital Marketing & IT Support"
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      
      {/* 1. HERO SECTION WITH PATTERN */}
      <div className="relative pt-24 pb-20 bg-gradient-to-b from-orange-50/30 to-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#e67e23 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeInUp}
            className="text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-[#e67e23] text-sm font-bold tracking-wide mb-6 border border-orange-200">
              WE ARE HIRING
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Career <br />
              <span className="text-[#e67e23]">With Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              At Aarti Educare, we aren't just offering jobs; we are offering a pathway to change lives. 
              Join a fast-growing organization dedicated to empowering the youth and women of India.
            </p>
            
            <div className="w-24 h-1.5 bg-[#e67e23] mx-auto rounded-full opacity-80"></div>
          </motion.div>
        </div>
      </div>

      {/* 2. WHY JOIN US (Cards with Hover Lift) */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-6 text-6xl font-bold text-gray-100 group-hover:text-orange-50 transition-colors duration-300">
                  {item.id}
                </span>
                
                <div className="relative z-10 w-16 h-16 bg-[#e67e23] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="relative z-10 text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3. HIRING PROCESS (New Section) */}
      <div className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How to Join Us</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-transparent group-hover:border-[#e67e23] transition-colors duration-300 mb-4 text-gray-500 group-hover:text-[#e67e23]">
                  {step.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
                
                {/* Connector Line (Desktop Only) */}
                {index < 3 && (
                  <div className="hidden md:block absolute w-24 h-0.5 bg-gray-300 transform translate-x-32 -translate-y-20 opacity-50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. DEPARTMENTS & CALL TO ACTION */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Department Grid */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Where Do You Fit In?
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                We are always growing. While we may not have specific job posts listed today, 
                we are constantly hiring talent for the following departments:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#e67e23] hover:bg-orange-50 transition-colors duration-300 cursor-default group">
                    <CheckCircle className="w-5 h-5 text-gray-400 group-hover:text-[#e67e23] transition-colors" />
                    <span className="font-semibold text-gray-700 group-hover:text-gray-900">{dept}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Premium CTA Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#333333] p-10 md:p-12 rounded-3xl shadow-2xl overflow-hidden text-center md:text-left"
            >
              {/* Decorative Abstract Circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#e67e23] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
              
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
                Ready to make an impact?
              </h3>
              <p className="text-gray-300 mb-10 relative z-10 text-lg">
                We are always excited to meet talented people. Send us your CV and tell us how you can contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <a 
                  href="mailto:aartieducare@gmail.com?subject=Job Application - [Your Name]"
                  className="inline-flex items-center justify-center gap-2 bg-[#e67e23] hover:bg-[#cf681f] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  Apply via Email
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700 relative z-10">
                <p className="text-sm text-gray-400">
                  Questions? Reach us at <span className="text-white font-medium">aartieducare@gmail.com</span>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;