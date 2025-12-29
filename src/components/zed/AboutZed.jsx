import React from 'react';
import { Target, Leaf } from 'lucide-react';

const AboutZed = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What is ZED?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The ZED (Zero Defect Zero Effect) Certification is a visionary initiative by the Ministry of MSME to enhance the competitiveness of Indian manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Zero Defect - Brand Color */}
          <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#e67e23] text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Zero Defect</h3>
            <p className="text-slate-600 leading-relaxed">
              Focuses on producing high-quality products with no non-conformance. It ensures your goods are reliable, consistent, and meet global standards.
            </p>
          </div>

          {/* Zero Effect - Green (Environment context) */}
          <div className="p-8 bg-green-50 rounded-2xl border border-green-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-200">
              <Leaf size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Zero Effect</h3>
            <p className="text-slate-600 leading-relaxed">
              Ensures that your manufacturing processes have zero negative impact on the environment. It promotes sustainability and eco-friendly practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutZed;