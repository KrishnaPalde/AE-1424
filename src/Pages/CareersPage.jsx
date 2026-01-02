import React, { useEffect } from 'react';
import { Mail, TrendingUp, Users, Heart, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  // Ensure page starts at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <TrendingUp size={28} className="text-[#e67e23]" />,
      title: "Growth & Learning",
      desc: "We believe in continuous upskilling. Access internal training and certification programs to advance your career."
    },
    {
      icon: <Users size={28} className="text-[#e67e23]" />,
      title: "Collaborative Culture",
      desc: "Work with a diverse team of educators, trainers, and industry experts in an open, supportive environment."
    },
    {
      icon: <Heart size={28} className="text-[#e67e23]" />,
      title: "Impactful Work",
      desc: "Every day, you contribute to skilling India's workforce and empowering the youth. Your work matters."
    },
    {
      icon: <Briefcase size={28} className="text-[#e67e23]" />,
      title: "Work-Life Balance",
      desc: "We value your time. We promote a healthy balance between professional excellence and personal well-being."
    }
  ];

  const departments = [
    "Corporate Trainers (Technical & Soft Skills)",
    "Project Management (Government Schemes)",
    "Sales & Business Development",
    "Counseling & Mobilization",
    "Center Operations & Admin",
    "IT & Digital Marketing"
  ];

  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-24 px-6 md:px-12 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e67e23] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-[#e67e23] text-sm font-semibold tracking-wider mb-6">
            WE ARE HIRING
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build the Future of <br />
            <span className="text-[#e67e23]">Skilling & Education</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join Aarti Educare and be part of a mission-driven team dedicated to empowering careers and transforming organizations.
          </p>
        </div>
      </section>

      {/* 2. CULTURE & VALUES GRID */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Join Us?</h2>
            <p className="text-slate-600 mt-2">More than just a job, it's a pathway to excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="mb-4 bg-orange-50 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-[#e67e23] group-hover:text-white transition-colors">
                  {/* Clone icon to handle hover color change via CSS if needed, or rely on group-hover text white */}
                  <div className="group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AREAS OF OPPORTUNITY (Static List) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left: Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Where do you fit in?
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We are constantly looking for passionate individuals to join our growing family. While we may not have specific job posts open today, we are always eager to connect with talent in the following areas:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {departments.map((dept, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#e67e23] shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800">{dept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="md:w-1/2 w-full">
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl relative overflow-hidden text-center md:text-left shadow-2xl">
              {/* Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e67e23] opacity-20 rounded-full blur-2xl -mr-10 -mt-10"></div>

              <h3 className="text-2xl font-bold mb-4 relative z-10">Don't see a role?</h3>
              <p className="text-slate-300 mb-8 relative z-10">
                We are always open to meeting talented people. Send us your resume and tell us how you can make a difference.
              </p>
              
              <a 
                href="mailto:aartieducare@gmail.com?subject=Job Application - [Your Name]"
                className="inline-flex items-center justify-center gap-2 bg-[#e67e23] hover:bg-[#c75f12] text-white px-8 py-3 rounded-lg font-semibold transition-all w-full md:w-auto z-20 relative"
              >
                <Mail size={18} />
                Send Your CV
              </a>
              
              <p className="mt-4 text-xs text-slate-500">
                or email us at aartieducare@gmail.com
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER BANNER */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Internships & Training</h2>
          <p className="text-slate-600 mb-8">
            Just starting your career? We offer internships and on-the-job training for freshers looking to enter the vocational training and education sector.
          </p>
          <Link 
            to="/contact-us" 
            className="inline-flex items-center text-[#e67e23] font-semibold hover:text-[#c75f12] transition-colors"
          >
            Contact us for Internship Opportunities <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Careers;