import React from 'react';
import { Factory, Rocket, CheckCircle2 } from 'lucide-react';

const Eligibility = () => {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Who Should Apply?</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl backdrop-blur-sm hover:border-[#e67e23]/30 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <Factory size={32} className="text-[#e67e23]" />
              <h3 className="text-2xl font-semibold">MSME Manufacturers</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#e67e23] shrink-0 mt-1" />
                <span>Must have a valid Udyam Registration.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#e67e23] shrink-0 mt-1" />
                <span>Engaged in manufacturing activities.</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl backdrop-blur-sm hover:border-[#e67e23]/30 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <Rocket size={32} className="text-[#e67e23]" />
              <h3 className="text-2xl font-semibold">Startups & Exporters</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#e67e23] shrink-0 mt-1" />
                <span>Looking to establish quality credibility.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#e67e23] shrink-0 mt-1" />
                <span>Aiming to enter global markets with certified standards.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;