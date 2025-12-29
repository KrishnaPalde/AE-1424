import React from 'react';
import { Landmark, TrendingUp, IndianRupee, Globe, Award, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Landmark className="text-[#e67e23]" size={28} />,
    title: "Government Subsidies",
    desc: "Get up to 80% subsidy on certification costs and financial support for technology upgradation."
  },
  {
    icon: <IndianRupee className="text-green-600" size={28} />,
    title: "Financial Incentives",
    desc: "Access to lower interest rates and processing fee waivers from participating banks."
  },
  {
    icon: <Globe className="text-indigo-600" size={28} />,
    title: "Global Recognition",
    desc: "Enhance your brand image internationally and become part of the global supply chain."
  },
  {
    icon: <TrendingUp className="text-[#e67e23]" size={28} />,
    title: "Business Growth",
    desc: "Streamlined processes lead to higher efficiency, reduced waste, and increased profits."
  },
  {
    icon: <Award className="text-amber-600" size={28} />,
    title: "Tender Preference",
    desc: "Get advantages in government tenders and procurement processes."
  },
  {
    icon: <Zap className="text-[#c75f12]" size={28} />,
    title: "Process Improvement",
    desc: "Adopt best manufacturing practices and improve overall quality management systems."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Why Get Certified?</h2>
          <p className="text-slate-600 mt-3">Unlock tangible benefits for your business growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="mb-4 bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;