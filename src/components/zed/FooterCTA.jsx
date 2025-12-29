import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Ready to get ZED Certified?</h2>
            <p className="text-slate-400">Contact Aarti Educare today for guidance.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 bg-slate-800 px-6 py-3 rounded-lg border border-slate-700 hover:border-[#e67e23] transition-colors group">
              <Phone size={20} className="text-[#e67e23]" />
              <span className="font-semibold group-hover:text-[#e67e23] transition-colors">+91 80878 10364</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800 px-6 py-3 rounded-lg border border-slate-700 hover:border-[#e67e23] transition-colors group">
              <Mail size={20} className="text-[#e67e23]" />
              <span className="font-semibold group-hover:text-[#e67e23] transition-colors">aartieducare@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Aarti Educare Pvt. Ltd. All rights reserved.
          </p>

          <Link to="/home" className="text-white hover:text-[#e67e23] transition-colors flex items-center gap-2">
            Proceed to Main Website <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-600 max-w-3xl mx-auto">
            Disclaimer: Aarti Educare Pvt. Ltd. is a facilitator/consultancy providing guidance for ZED Certification. We are not the government awarding body. All ZED trademarks belong to the Ministry of MSME, Govt of India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;