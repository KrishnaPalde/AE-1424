import React from 'react';
import { Handshake, Users, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const PartnerWithUs = () => {
  return (
    <section id="partner-section" className="py-20 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
          
          <div className="md:w-1/2">
            <span className="text-[#e67e23] font-bold tracking-wider uppercase text-sm mb-2 block">For Consultants & Experts</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Become a ZED Facilitator Partner</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Are you a quality consultant, auditor, or industry expert? Partner with Aarti Educare to guide MSMEs through their ZED journey. We provide the platform, the clients, and the operational support.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-700">
                <Users className="text-[#e67e23]" size={20} />
                <span>Access to our large network of 180+ corporate clients</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Handshake className="text-[#e67e23]" size={20} />
                <span>Transparent revenue sharing model</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <LineChart className="text-[#e67e23]" size={20} />
                <span>Backend documentation support team</span>
              </li>
            </ul>

            {/* Smooth Scroll Link */}
            <Link 
              to="enquiry-section" 
              smooth={true} 
              duration={800} 
              offset={-100}
              className="text-[#e67e23] font-bold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer"
            >
              Join Partner Network <ArrowRight size={20} />
            </Link>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="relative h-64 md:h-80 bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center">
               {/* Placeholder Visual */}
               <div className="text-center p-6 relative z-10">
                 <h3 className="text-white text-2xl font-bold mb-2">Grow With Us</h3>
                 <p className="text-slate-400">Expand your consultancy business</p>
               </div>
               
               {/* Abstract decorative circles */}
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#e67e23] rounded-full opacity-20"></div>
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-500 rounded-full opacity-20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;