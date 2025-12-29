import React from 'react';
import { ArrowRight, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-slate-900 text-white pt-24 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background Pattern - Uses Aarti Orange for the glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#e67e23] via-slate-900 to-slate-900"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Trust Badge - Kept Green for Government/Sustainability Context */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-white/10 border border-white/20 rounded-full text-green-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
          <ShieldCheck size={16} />
          Government of India Initiative
        </div>

        {/* Headline - Updated Content */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Achieve Manufacturing Excellence with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e67e23] to-amber-300">
            ZED Certification
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Elevate your MSME to global standards. Adopt the <strong>Zero Defect, Zero Effect</strong> model to unlock exclusive government subsidies, financial incentives, and market recognition.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Primary Action - Aarti Orange */}
          <a 
            href="https://zed.msme.gov.in/" 
            target="_blank" 
            rel="noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#e67e23] hover:bg-[#c75f12] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-900/20"
          >
            Visit Official Portal <ExternalLink size={18} />
          </a>
          
          {/* Secondary Action */}
          {/* <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-8 py-3.5 rounded-lg font-semibold transition-all shadow-sm">
            Download Brochure <Download size={18} />
          </button> */}

          {/* Navigation to Main Site - Orange Hover */}
          <Link 
            to="/home" 
            className="w-full md:w-auto flex items-center justify-center gap-2 text-slate-400 hover:text-[#e67e23] px-6 py-3 transition-colors mt-4 md:mt-0 text-sm md:text-base"
          >
            Go to Main Website <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;