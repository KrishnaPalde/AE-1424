import React from 'react';
import { Users, FileText, Award } from 'lucide-react';

const Role = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#e67e23] font-semibold tracking-wide uppercase text-sm">Our Role</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">How Aarti Educare Helps You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-[#e67e23]">
            <Users className="w-12 h-12 text-[#e67e23] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Handholding Support</h3>
            <p className="text-slate-600">We guide you through the entire registration and application process.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-[#e67e23]">
            <FileText className="w-12 h-12 text-[#e67e23] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Documentation</h3>
            <p className="text-slate-600">Expert assistance in preparing and organizing the required documents.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center border-t-4 border-[#e67e23]">
            <Award className="w-12 h-12 text-[#e67e23] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Audit Prep</h3>
            <p className="text-slate-600">Pre-assessment audits to ensure you are 100% ready for the final certification.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Role;