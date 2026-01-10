import React from 'react';
import { ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-scroll'; 

const Hero = () => {
  return (
    <section className="relative bg-slate-900 text-white pt-24 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#e67e23] via-slate-900 to-slate-900"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-green-900/30 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
            <ShieldCheck size={16} />
            Govt. of India (MSME) Initiative
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Unlock <span className="text-[#e67e23]">80% Subsidy</span> on ZED Certification
          </h1>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Elevate your manufacturing unit to global standards. We help MSMEs achieve 
            <strong> Bronze, Silver, and Gold</strong> certification with zero hassle.
            <br className="hidden md:block"/>
            <span className="text-white font-medium mt-2 block">
              Join 500+ companies transformed by Aarti Educare.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Primary Button - Smooth Scroll to Form */}
            <Link 
              to="enquiry-section" 
              smooth={true} 
              duration={800} 
              offset={-100} // Adjusts for the sticky header height
              className="cursor-pointer flex items-center justify-center gap-2 bg-[#e67e23] hover:bg-[#c75f12] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-900/40 transform hover:-translate-y-1"
            >
              Start Certification <TrendingUp size={20} />
            </Link>
            
            {/* Secondary Button - Smooth Scroll to Form (or Partner Section) */}
            <Link 
              to="enquiry-section" 
              smooth={true} 
              duration={800} 
              offset={-100}
              className="cursor-pointer flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              Join as Facilitator
            </Link>
          </div>
        </div>

        {/* Right: Visual Abstract - Certification Levels */}
        <div className="hidden lg:block relative">
           <div className="relative z-10 grid grid-cols-1 gap-6">
              {/* Bronze Card */}
              <div className="bg-slate-800/80 border-l-4 border-[#CD7F32] p-6 rounded-r-xl backdrop-blur-md translate-x-12 hover:translate-x-14 transition-transform duration-300">
                 <h3 className="text-[#CD7F32] font-bold text-xl">Bronze</h3>
                 <p className="text-sm text-slate-400">Entry Level • Basic Hygiene • 80% Subsidy</p>
              </div>
              {/* Silver Card */}
              <div className="bg-slate-800/80 border-l-4 border-[#C0C0C0] p-6 rounded-r-xl backdrop-blur-md translate-x-4 hover:translate-x-6 transition-transform duration-300">
                 <h3 className="text-[#C0C0C0] font-bold text-xl">Silver</h3>
                 <p className="text-sm text-slate-400">Mid Level • Safety & Process • Improved Credit Rating</p>
              </div>
              {/* Gold Card */}
              <div className="bg-slate-800/80 border-l-4 border-[#FFD700] p-6 rounded-r-xl backdrop-blur-md -translate-x-4 shadow-2xl shadow-orange-500/10 hover:-translate-x-2 transition-transform duration-300">
                 <h3 className="text-[#FFD700] font-bold text-xl">Gold</h3>
                 <p className="text-sm text-slate-400">Advanced • Environmental • Global Competitiveness</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;