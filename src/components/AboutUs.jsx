// import React from "react";
// import { Award, Target, Users, CheckCircle } from "lucide-react";

// const AboutUs = () => {
//   const team = [
//     {
//       name: "Rajesh Kumar",
//       position: "Founder & CEO",
//       image: "https://picsum.photos/300/300",
//       description: "With 15+ years in education and skill development",
//     },
//     {
//       name: "Priya Sharma",
//       position: "Training Director",
//       image: "https://picsum.photos/300/300",
//       description: "Expert in curriculum development and training",
//     },
//     {
//       name: "Amit Patel",
//       position: "Operations Head",
//       image: "https://picsum.photos/300/300",
//       description: "Specializes in program implementation",
//     },
//     {
//       name: "Meera Singh",
//       position: "Placement Coordinator",
//       image: "https://picsum.photos/300/300",
//       description: "Corporate relations and student placement expert",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <section className="py-16 bg-white">
//         <div className="px-4 mx-auto max-w-7xl">
//           <div className="grid items-center gap-12 md:grid-cols-2">
//             <div>
//               <h2 className="mb-6 text-3xl font-bold text-gray-800">
//                 Our Story
//               </h2>
//               <p className="mb-6 leading-relaxed text-gray-600">
//                 Founded in 2015, Aarti Educare has been at the forefront of
//                 transforming lives through education and skill development. We
//                 bridge the gap between education and employment by providing
//                 industry-relevant training programs.
//               </p>
//               <p className="leading-relaxed text-gray-600">
//                 Working closely with government initiatives, we've successfully
//                 trained over 10,000 students and achieved an impressive
//                 placement rate of 85%. Our programs are designed to meet the
//                 evolving needs of various industries while ensuring
//                 accessibility to all.
//               </p>
//             </div>
//             <div className="relative">
//               <img
//                 src="/api/placeholder/600/400"
//                 alt="Training Session"
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

      
//       <section className="py-16 bg-gray-50">
//         <div className="px-4 mx-auto max-w-7xl">
//           <div className="grid gap-12 md:grid-cols-2">
            
//             <div className="p-8 bg-white shadow-lg rounded-xl">
//               <div className="flex items-center mb-6">
//                 <Target className="w-8 h-8 mr-4 text-blue-600" />
//                 <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
//               </div>
//               <p className="leading-relaxed text-gray-600">
//                 To become the leading catalyst in transforming lives through
//                 quality education and skill development, creating a workforce
//                 that drives India's economic growth and social progress.
//               </p>
//               <ul className="mt-6 space-y-3">
//                 <li className="flex items-start">
//                   <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-green-500" />
//                   <span className="text-gray-600">
//                     Empower 1 million youth by 2030
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-green-500" />
//                   <span className="text-gray-600">
//                     Establish centers in every major city
//                   </span>
//                 </li>
//               </ul>
//             </div>

           
//             <div className="p-8 bg-white shadow-lg rounded-xl">
//               <div className="flex items-center mb-6">
//                 <Award className="w-8 h-8 mr-4 text-blue-600" />
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Our Mission
//                 </h2>
//               </div>
//               <p className="leading-relaxed text-gray-600">
//                 To provide accessible, industry-relevant education and training
//                 programs that enhance employability and entrepreneurship skills
//                 among India's youth.
//               </p>
//               <ul className="mt-6 space-y-3">
//                 <li className="flex items-start">
//                   <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-green-500" />
//                   <span className="text-gray-600">
//                     Deliver high-quality, practical training
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-green-500" />
//                   <span className="text-gray-600">
//                     Foster industry partnerships
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

     
//       <section className="py-16 bg-white">
//         <div className="px-4 mx-auto max-w-7xl">
//           <div className="mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold text-gray-800">
//               Our Leadership Team
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-600">
//               Meet the dedicated professionals who drive our mission forward and
//               ensure excellence in everything we do.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {team.map((member, index) => (
//               <div
//                 key={index}
//                 className="p-8 text-center transition-transform bg-gray-50 rounded-xl hover:-translate-y-4"
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
//                 />
//                 <h3 className="mb-2 text-xl font-semibold text-gray-800">
//                   {member.name}
//                 </h3>
//                 <p className="mb-2 font-medium text-blue-600">
//                   {member.position}
//                 </p>
//                 <p className="text-sm text-gray-600">{member.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

     
//       <section className="py-16 text-white bg-blue-600">
//         <div className="px-4 mx-auto max-w-7xl">
//           <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
//             <div>
//               <div className="mb-2 text-4xl font-bold">10K+</div>
//               <div className="text-blue-100">Students Trained</div>
//             </div>
//             <div>
//               <div className="mb-2 text-4xl font-bold">85%</div>
//               <div className="text-blue-100">Placement Rate</div>
//             </div>
//             <div>
//               <div className="mb-2 text-4xl font-bold">50+</div>
//               <div className="text-blue-100">Corporate Partners</div>
//             </div>
//             <div>
//               <div className="mb-2 text-4xl font-bold">20+</div>
//               <div className="text-blue-100">Training Centers</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;


import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Award, Target, Users, CheckCircle } from "lucide-react";

import aboutUsImage from "../assets/tc3.png"

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if(location.pathname === "/who-we-are/about-us/vision-mission"){
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
    } else if( location.pathname === "/who-we-are/about-us/board-directors"){
      window.scrollTo({
        top: 900,
        behavior: "smooth",
      });
    }
  })
  

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "https://picsum.photos/300/300",
      description: "With 15+ years in education and skill development",
    },
    {
      name: "Priya Sharma",
      position: "Training Director",
      image: "https://picsum.photos/300/300",
      description: "Expert in curriculum development and training",
    },
    {
      name: "Amit Patel",
      position: "Operations Head",
      image: "https://picsum.photos/300/300",
      description: "Specializes in program implementation",
    },
    {
      name: "Meera Singh",
      position: "Placement Coordinator",
      image: "https://picsum.photos/300/300",
      description: "Corporate relations and student placement expert",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#e67e23]">
                Our Story
              </h2>
              <p className="mb-6 leading-relaxed text-[#333333]">
                Founded in 2015, Aarti Educare has been at the forefront of
                transforming lives through education and skill development. We
                bridge the gap between education and employment by providing
                industry-relevant training programs.
              </p>
              <p className="leading-relaxed text-[#333333]">
                Working closely with government initiatives, we've successfully
                trained over 10,000 students and achieved an impressive
                placement rate of 85%. Our programs are designed to meet the
                evolving needs of various industries while ensuring
                accessibility to all.
              </p>
            </div>
            <div className="relative">
              <img
                src={aboutUsImage}
                alt="Training Session"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5f5]">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 mr-4 text-[#e67e23]" />
                <h2 className="text-2xl font-bold text-[#e67e23]">Our Vision</h2>
              </div>
              <p className="leading-relaxed text-[#333333]">
                To become the leading catalyst in transforming lives through
                quality education and skill development, creating a workforce
                that drives India's economic growth and social progress.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-[#e67e23]" />
                  <span className="text-[#333333]">
                    Empower 1 million youth by 2030
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-[#e67e23]" />
                  <span className="text-[#333333]">
                    Establish centers in every major city
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 mr-4 text-[#e67e23]" />
                <h2 className="text-2xl font-bold text-[#e67e23]">
                  Our Mission
                </h2>
              </div>
              <p className="leading-relaxed text-[#333333]">
                To provide accessible, industry-relevant education and training
                programs that enhance employability and entrepreneurship skills
                among India's youth.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-[#e67e23]" />
                  <span className="text-[#333333]">
                    Deliver high-quality, practical training
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-[#e67e23]" />
                  <span className="text-[#333333]">
                    Foster industry partnerships
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#e67e23]">
              Our Board of Directors
            </h2>
            <p className="max-w-2xl mx-auto text-[#333333]">
              Meet the dedicated professionals who drive our mission forward and
              ensure excellence in everything we do.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-8 text-center transition-transform bg-[#f5f5f5] rounded-xl hover:-translate-y-4"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="mb-2 text-xl font-semibold text-[#e67e23]">
                  {member.name}
                </h3>
                <p className="mb-2 font-medium text-[#e67e23]">
                  {member.position}
                </p>
                <p className="text-sm text-[#333333]">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-white bg-[#e67e23]">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold">10K+</div>
              <div className="text-white">Students Trained</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">85%</div>
              <div className="text-white">Placement Rate</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">50+</div>
              <div className="text-white">Corporate Partners</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">20+</div>
              <div className="text-white">Training Centers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
