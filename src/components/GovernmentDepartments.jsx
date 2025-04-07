// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import gov_logo1 from "../assets/goverment_departments/DAY-NULM.webp";
// import gov_logo2 from "../assets/goverment_departments/Digital-india-csc.webp";
// import gov_logo3 from "../assets/goverment_departments/Electronics System Design and Manufacturing (ESDM).webp";
// import gov_logo4 from "../assets/goverment_departments/Kaushalya Balam.webp";
// import gov_logo5 from "../assets/goverment_departments/MSDE.webp";
// import gov_logo6 from "../assets/goverment_departments/MSJE.webp";
// import gov_logo7 from "../assets/goverment_departments/MSSDS.webp";
// import gov_logo8 from "../assets/goverment_departments/Maharashtra Shashan.webp";
// import gov_logo9 from "../assets/goverment_departments/NBCFDC.webp";
// import gov_logo10 from "../assets/goverment_departments/NSFDC.webp";
// import gov_logo11 from "../assets/goverment_departments/NSKFDC.webp";
// import gov_logo12 from "../assets/goverment_departments/OBC Corporation.webp";
// import gov_logo13 from "../assets/goverment_departments/PM Daksh.webp";
// import gov_logo14 from "../assets/goverment_departments/PMKVY Logo.webp";
// import gov_logo15 from "../assets/goverment_departments/SARATHI.webp";
// import gov_logo16 from "../assets/goverment_departments/Shabari Corporation.webp";
// import gov_logo17 from "../assets/goverment_departments/Skill-India.webp";
// import gov_logo18 from "../assets/goverment_departments/TRTI.webp";
// import LazyLoad from "react-lazyload";

// export default function GovernmentDepartments() {
//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 1500, // Faster autoplay
//     speed: 600,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const governmentLogos = [gov_logo1, gov_logo2, gov_logo3, gov_logo4, gov_logo5, gov_logo6, gov_logo7, gov_logo8, gov_logo9, gov_logo10, gov_logo11, gov_logo12, gov_logo13, gov_logo14, gov_logo15, gov_logo16, gov_logo17, gov_logo18];

//   return (
//     <div className="container mx-auto px-6 py-12 space-y-16">
//       <section>
//       <h2 className="text-3xl font-bold text-center text-[#e67e23] mb-8">
//           Government Departments We Work With
//         </h2>
//         <Slider {...sliderSettings}>
//           {governmentLogos.map((logo, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
//             >
//               <LazyLoad key={index} height={200} offset={150} once>
//               <img
//                 src={logo}
//                 alt={`Government Department ${index + 1}`}
//                 className="h-32 mx-auto object-contain"
//               />
//               </LazyLoad>
//             </div>
//           ))}
//         </Slider>
//     </section>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "@/config";

const API_URL = config.API_URL;

export default function GovernmentDepartments() {
  const [govLogos, setGovLogos] = useState([]);

  useEffect(() => {
    const fetchGovernmentLogos = async () => {
      try {
        const response = await fetch(API_URL + "/logos/government");
        const data = await response.json(); // assume [{ imageUrl: "..." }, ...]
        setGovLogos(data);
      } catch (error) {
        console.error("Error fetching government logos:", error);
      }
    };

    fetchGovernmentLogos();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      <section>
        <h2 className="text-3xl font-bold text-center text-[#e67e23] mb-8">
          Government Departments We Work With
        </h2>
        {govLogos.length > 0 ? (
          <Slider {...sliderSettings}>
            {govLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <LazyLoad height={200} offset={150} once>
                  <img
                    src={logo.imageUrl}
                    alt={`Government Department ${index + 1}`}
                    className="h-32 mx-auto object-contain"
                  />
                </LazyLoad>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-400 text-lg">No government logos available</p>
        )}
      </section>
    </div>
  );
}
