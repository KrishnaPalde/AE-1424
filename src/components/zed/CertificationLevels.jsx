import React from 'react';
import { Check } from 'lucide-react';

const CertificationLevels = () => {
  const levels = [
    {
      name: "Bronze",
      color: "border-[#CD7F32]",
      text: "text-[#CD7F32]",
      bg: "bg-orange-50",
      desc: "The first step towards excellence. Focuses on workplace hygiene, safety, and basic quality.",
      features: ["Low cost entry", "Self-Assessment", "Basic Compliance"]
    },
    {
      name: "Silver",
      color: "border-[#C0C0C0]",
      text: "text-slate-500",
      bg: "bg-slate-50",
      desc: "For units with established processes. Focuses on safety, fluid management, and process control.",
      features: ["Desktop Assessment", "Process Optimization", "Better Credit Ratings"]
    },
    {
      name: "Gold",
      color: "border-[#FFD700]",
      text: "text-yellow-600",
      bg: "bg-yellow-50",
      desc: "The highest standard. Focuses on environmental impact, innovation, and global export readiness.",
      features: ["Site Assessment", "Supply Chain Mgmt", "Global Recognition"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Choose Your Level</h2>
          <p className="text-slate-600 mt-2">Not sure? Our consultants will guide you based on your current infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, idx) => (
            <div key={idx} className={`relative p-8 rounded-2xl border-t-4 ${level.color} bg-white shadow-xl hover:-translate-y-2 transition-transform duration-300`}>
              <h3 className={`text-2xl font-bold mb-4 ${level.text}`}>{level.name} Certification</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{level.desc}</p>
              
              <ul className="space-y-3">
                {level.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <div className={`w-6 h-6 rounded-full ${level.bg} flex items-center justify-center`}>
                      <Check size={14} className={level.text} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationLevels;