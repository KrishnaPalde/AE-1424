// import React from "react";

// import partner_logo1 from "../assets/our_partners/Akshay Oxygen.webp";
// import partner_logo2 from "../assets/our_partners/Arcelor Technology.webp";
// import partner_logo3 from "../assets/our_partners/Ashtang Hospital.webp";
// import partner_logo4 from "../assets/our_partners/Aureole Pharma.webp";
// import partner_logo5 from "../assets/our_partners/BDC.webp";
// import partner_logo6 from "../assets/our_partners/CHOPDA MEDICARE AND RESEARCH CENTRE.webp";
// import partner_logo7 from "../assets/our_partners/Chai Tapri.webp";
// import partner_logo8 from "../assets/our_partners/Dang Sewa.webp";
// import partner_logo9 from "../assets/our_partners/Enermax.webp";
// import partner_logo10 from "../assets/our_partners/Gauri Samajik Kalyankari Sanstha.webp";
// import partner_logo11 from "../assets/our_partners/GlobeChemie_logo.webp";
// import partner_logo12 from "../assets/our_partners/Grand Gardan Resort.webp";
// import partner_logo13 from "../assets/our_partners/Grape Embassy.webp";
// import partner_logo14 from "../assets/our_partners/Gulve Polytechnic.webp";
// import partner_logo15 from "../assets/our_partners/Indo Pump.webp";
// import partner_logo16 from "../assets/our_partners/Indo Seals.webp";
// import partner_logo17 from "../assets/our_partners/Innovations.webp";
// import partner_logo18 from "../assets/our_partners/Lagn Sohla.webp";
// import partner_logo19 from "../assets/our_partners/Leslie.webp";
// import partner_logo20 from "../assets/our_partners/Mack Aura.webp";
// import partner_logo21 from "../assets/our_partners/Magnum.webp";
// import partner_logo22 from "../assets/our_partners/NP IT.webp";
// import partner_logo23 from "../assets/our_partners/New Grace Academy.webp";
// import partner_logo24 from "../assets/our_partners/Pioneer Hospital.webp";
// import partner_logo25 from "../assets/our_partners/Pravara Infotech.webp";
// import partner_logo26 from "../assets/our_partners/Raddiant Hospital.webp";
// import partner_logo27 from "../assets/our_partners/Roshan Computer.webp";
// import partner_logo28 from "../assets/our_partners/SA Structural Consultant.webp";
// import partner_logo29 from "../assets/our_partners/STICE.webp";
// import partner_logo30 from "../assets/our_partners/Samarth Hospital.webp";
// import partner_logo31 from "../assets/our_partners/Sapkal Knowledge Hub.webp";
// import partner_logo32 from "../assets/our_partners/SciTech-Logo-1.webp";
// import partner_logo33 from "../assets/our_partners/Seed India.webp";
// import partner_logo34 from "../assets/our_partners/Shatabdi.webp";
// import partner_logo35 from "../assets/our_partners/Shree Krushna Engineering Classes.webp";
// import partner_logo36 from "../assets/our_partners/Shree Sai Seva Hospital.webp";
// import partner_logo37 from "../assets/our_partners/Shri Balaji Trust.webp";
// import partner_logo38 from "../assets/our_partners/Sigma Toolings.webp";
// import partner_logo39 from "../assets/our_partners/Sopan Hospital.webp";
// import partner_logo40 from "../assets/our_partners/Speedwell.webp";
// import partner_logo41 from "../assets/our_partners/Streamfix website logo.webp";
// import partner_logo42 from "../assets/our_partners/Suyog Hospital.webp";
// import partner_logo43 from "../assets/our_partners/Tejal Samajik Sanstha.webp";
// import partner_logo44 from "../assets/our_partners/Vakratunda Hospital.webp";
// import partner_logo45 from "../assets/our_partners/Vrindavan Hospital.webp";
// import partner_logo46 from "../assets/our_partners/Wisdom Extra.webp";
// import partner_logo47 from "../assets/our_partners/laxmi_logo.webp";
// import partner_logo48 from "../assets/our_partners/marines-security-services-indira-nagar-nashik-nashik-security-services-dtf7ll9rnn-250.webp";
// import partner_logo49 from "../assets/our_partners/metasoft.webp";
// import LazyLoad from "react-lazyload";

// export default function OurPartners() {
//   const partnerLogos = [partner_logo9, partner_logo2, partner_logo3, partner_logo4, partner_logo5, partner_logo30, partner_logo7, partner_logo8, partner_logo1, partner_logo10, partner_logo11, partner_logo12, partner_logo13, partner_logo14, partner_logo15, partner_logo16, partner_logo17, partner_logo18, partner_logo19, partner_logo20, partner_logo21, partner_logo22, partner_logo23, partner_logo24, partner_logo25, partner_logo26, partner_logo27, partner_logo28, partner_logo29, partner_logo6, partner_logo44, partner_logo32, partner_logo33, partner_logo34, partner_logo35, partner_logo36, partner_logo37, partner_logo38, partner_logo39, partner_logo40, partner_logo41, partner_logo42, partner_logo43, partner_logo31, partner_logo45, partner_logo46, partner_logo47, partner_logo48, partner_logo49];

//   return (
//     <div className="container mx-auto px-6 py-12 space-y-16">
//     <section>
//     <h2 className="text-3xl font-bold text-center text-[#e67e23] mb-8">
//           Our Valued Partners
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {partnerLogos.map((logo, index) => (
//             <div
//               key={index}
//               className={`flex items-center justify-center p-6 bg-white shadow-md rounded-md transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${
//                 index % 5 === 0 ? "col-span-2" : ""
//               }`}
//             >
//               <LazyLoad key={index} height={200} offset={150} once>
//               <img
//                 src={logo}
//                 alt={`Partner ${index + 1}`}
//                 className="h-24 mx-auto object-contain"
//               />
//               </LazyLoad>
//             </div>
//           ))}
//         </div>
//     </section>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import config from "@/config"; // Adjust based on your config path

const API_URL = config.API_URL;

export default function OurPartners() {
  const [partnerLogos, setPartnerLogos] = useState([]);

  useEffect(() => {
    const fetchPartnerLogos = async () => {
      try {
        const response = await fetch(API_URL + "/logos/partners"); // Endpoint to fetch partner logos
        const data = await response.json(); // Assume [{ imageUrl: "..." }, ...]
        setPartnerLogos(data);
      } catch (error) {
        console.error("Error fetching partner logos:", error);
      }
    };

    fetchPartnerLogos();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      <section>
        <h2 className="text-3xl font-bold text-center text-[#e67e23] mb-8">
          Our Valued Partners
        </h2>
        {partnerLogos.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-6 bg-white shadow-md rounded-md transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${
                  index % 5 === 0 ? "col-span-2" : ""
                }`}
              >
                <LazyLoad height={200} offset={150} once>
                  <img
                    src={logo.imageUrl}
                    alt={`Partner ${index + 1}`}
                    className="h-24 mx-auto object-contain"
                  />
                </LazyLoad>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg">
            No partner logos available
          </p>
        )}
      </section>
    </div>
  );
}
