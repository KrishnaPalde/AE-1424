import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gov_logo1 from "../assets/goverment_departments/DAY-NULM.jpg";
import gov_logo2 from "../assets/goverment_departments/Digital-india-csc-logo-png-image-1024x539.png";
import gov_logo3 from "../assets/goverment_departments/Electronics System Design and Manufacturing (ESDM).png";
import gov_logo4 from "../assets/goverment_departments/Kaushalya Balam.jpg";
import gov_logo5 from "../assets/goverment_departments/MSDE.png";
import gov_logo6 from "../assets/goverment_departments/MSJE.png";
import gov_logo7 from "../assets/goverment_departments/MSSDS.jpg";
import gov_logo8 from "../assets/goverment_departments/Maharashtra Shashan.jpg";
import gov_logo9 from "../assets/goverment_departments/NBCFDC.png";
import gov_logo10 from "../assets/goverment_departments/NSFDC.png";
import gov_logo11 from "../assets/goverment_departments/NSKFDC.png";
import gov_logo12 from "../assets/goverment_departments/OBC Corporation.png";
import gov_logo13 from "../assets/goverment_departments/PM Daksh.jpg";
import gov_logo14 from "../assets/goverment_departments/PMKVY Logo.png";
import gov_logo15 from "../assets/goverment_departments/SARATHI.jpg";
import gov_logo16 from "../assets/goverment_departments/Shabari Corporation.jpg";
import gov_logo17 from "../assets/goverment_departments/Skill-India.png";
import gov_logo18 from "../assets/goverment_departments/TRTI.png";

export default function GovernmentDepartments() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500, // Faster autoplay
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const governmentLogos = [gov_logo1, gov_logo2, gov_logo3, gov_logo4, gov_logo5, gov_logo6, gov_logo7, gov_logo8, gov_logo9, gov_logo10, gov_logo11, gov_logo12, gov_logo13, gov_logo14, gov_logo15, gov_logo16, gov_logo17, gov_logo18];

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      <section>
      <h2 className="text-3xl font-bold text-center text-[#e67e23] mb-8">
          Government Departments We Work With
        </h2>
        <Slider {...sliderSettings}>
          {governmentLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Government Department ${index + 1}`}
                className="h-32 mx-auto object-contain"
              />
            </div>
          ))}
        </Slider>
    </section>
    </div>
  );
}
