import React from 'react';

const steps = [
  { id: 1, title: 'Eligibility Check', desc: 'Verify your Udyam Registration number.' },
  { id: 2, title: 'Training', desc: 'Attend ZED awareness & industrial workshops.' },
  { id: 3, title: 'Documentation', desc: 'Upload required compliance documents online.' },
  { id: 4, title: 'Assessment', desc: 'Remote (Desktop) or On-site assessment by agencies.' },
  { id: 5, title: 'Certification', desc: 'Award of Bronze, Silver, or Gold certification.' },
];

const Process = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
          Your Certification Journey
        </h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <div className="flex-1 text-center md:text-right w-full">
                  <div className={`p-6 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md transition-shadow group ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#e67e23] transition-colors mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>

                {/* Step Circle - Updated to Orange */}
                <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-[#e67e23] text-white font-bold text-lg rounded-full shadow-lg border-4 border-white">
                  {step.id}
                </div>

                {/* Empty Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;