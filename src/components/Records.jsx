import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Records() {
  const metrics = [
    { title: "Training Centres", count: 60 },
    { title: "Trainers", count: 150 },
    { title: "Master Trainers", count: 40 },
    { title: "Trained Candidates", count: 15000 },
    { title: "Placed Candidates", count: 9000 },
    { title: "Projects Completed", count: 45 },
    { title: "Government Collaborations", count: 20 },
    { title: "Industry Partners", count: 180 },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => { 
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Mission and Vision Section */}
        <div className="flex flex-col items-center justify-between lg:flex-row lg:space-x-20">
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-[#e67e23] capitalize mb-4">Our Mission</h1>
            <p className="text-lg text-gray-700 mb-8">
              To empower the nation by unlocking the potential of youth and women through transformative education, skill development, 
              and comprehensive consultancy services. We are dedicated to fostering self-reliance, reducing unemployment, and 
              building a future-ready workforce that drives innovation, strengthens communities, and contributes to India's 
              sustainable growth and prosperity.
            </p>

            <h1 className="text-3xl font-bold text-[#e67e23] capitalize mb-4">Our Vision</h1>
            <p className="text-lg text-gray-700">
              To be a cornerstone in the empowerment of India by enabling youth and women to lead transformative change.
               We envision a nation where every individual has the opportunity to thrive, contributing to a skilled, inclusive,
                and self-reliant society that propels India to global leadership.
            </p>
          </div>

          {/* Metrics Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div ref={ref} className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center border border-[#e67e23] rounded-lg p-6 text-center transition-transform transform hover:scale-105 shadow-md"
                >
                  <h1 className="text-4xl lg:text-5xl font-bold text-[#e67e23]">
                    {hasAnimated ? (
                      <CountUp start={0} end={metric.count} duration={3} />
                    ) : (
                      "0"
                    )}
                    <span className="text-2xl">+</span>
                  </h1>

                  <p className="mt-2 text-lg font-medium text-gray-700 capitalize">
                    {metric.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
