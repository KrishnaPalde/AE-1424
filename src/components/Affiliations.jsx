import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import affiliated_logo1 from "../assets/affiliated_by/Agriculture Skill Council of India (ASCI).png";
import affiliated_logo2 from "../assets/affiliated_by/Apparel Made-Ups & Home Furnishing Sector Skill Council (AMHSSC).png";
import affiliated_logo3 from "../assets/affiliated_by/Automotive Skills Development Council (ASDC).jpg";
import affiliated_logo4 from "../assets/affiliated_by/BFSI Sector Skill Council.jpg";
import affiliated_logo5 from "../assets/affiliated_by/Beauty & Wellness Sector Skill Council (B&WSSC).gif";
import affiliated_logo6 from "../assets/affiliated_by/Capital Goods & Strategic Skill Council (CGSSC).jpg";
import affiliated_logo7 from "../assets/affiliated_by/Construction Skill Development Council of India (CSDCI).jpg";
import affiliated_logo8 from "../assets/affiliated_by/Electronics Sector Skills Council of India (ESSCI).jpg";
import affiliated_logo9 from "../assets/affiliated_by/Food Industry Capacity & Skill Initiative (FICSI).png";
import affiliated_logo10 from "../assets/affiliated_by/Healthcare Sector Skill Council (HSSC).png";
import affiliated_logo11 from "../assets/affiliated_by/Home Management And Care Givers Sector Skill Council(HMCGSSC).png";
import affiliated_logo12 from "../assets/affiliated_by/IT-ITeS Sector Skills Council nasscom (SSC nasscom).png";
import affiliated_logo13 from "../assets/affiliated_by/Management & Entrepreneurship and Professional Skills Council (MEPSC).png";
// import affiliated_logo14 from "../assets/affiliated_by/Media & Entertainment Skills Council (MESC).png";
import affiliated_logo14 from "../assets/affiliated_by/MESC.jpg";
import affiliated_logo15 from "../assets/affiliated_by/Power Sector Skill Council (PSSC).png";
import affiliated_logo16 from "../assets/affiliated_by/Rubber, Chemical & Petrochemical Skill Development Council (RCPSDC).png";
import affiliated_logo17 from "../assets/affiliated_by/Skill Council for Green Jobs (SCGJ).gif";
import affiliated_logo18 from "../assets/affiliated_by/Telecom Sector Skill Council (TSSC).png";
import affiliated_logo19 from "../assets/affiliated_by/Tourism and Hospitality Skill Council (THSC).png";
import affiliated_logo20 from "../assets/affiliated_by/Water Management & Plumbing Skill Council (WMPSC).png";


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

import partner_logo1 from "../assets/our_partners/Akshay Oxygen.jpg";
import partner_logo2 from "../assets/our_partners/Arcelor Technology.png";
import partner_logo3 from "../assets/our_partners/Ashtang Hospital.jpg";
import partner_logo4 from "../assets/our_partners/Aureole Pharma.png";
import partner_logo5 from "../assets/our_partners/BDC.jpg";
import partner_logo6 from "../assets/our_partners/CHOPDA MEDICARE AND RESEARCH CENTRE.jpg";
import partner_logo7 from "../assets/our_partners/Chai Tapri.jpg";
import partner_logo8 from "../assets/our_partners/Dang Sewa.png";
import partner_logo9 from "../assets/our_partners/Enermax.png";
import partner_logo10 from "../assets/our_partners/Gauri Samajik Kalyankari Sanstha.jpg";
import partner_logo11 from "../assets/our_partners/GlobeChemie_logo.jpg";
import partner_logo12 from "../assets/our_partners/Grand Gardan Resort.png";
import partner_logo13 from "../assets/our_partners/Grape Embassy.png";
import partner_logo14 from "../assets/our_partners/Gulve Polytechnic.jpg";
import partner_logo15 from "../assets/our_partners/Indo Pump.png";
import partner_logo16 from "../assets/our_partners/Indo Seals.png";
import partner_logo17 from "../assets/our_partners/Innovations.png";
import partner_logo18 from "../assets/our_partners/Lagn Sohla.jfif";
import partner_logo19 from "../assets/our_partners/Leslie.jpg";
import partner_logo20 from "../assets/our_partners/Mack Aura.jpg";
import partner_logo21 from "../assets/our_partners/Magnum.jpg";
import partner_logo22 from "../assets/our_partners/NP IT.png";
import partner_logo23 from "../assets/our_partners/New Grace Academy.png";
import partner_logo24 from "../assets/our_partners/Pioneer Hospital.jpg";
import partner_logo25 from "../assets/our_partners/Pravara Infotech.jpg";
import partner_logo26 from "../assets/our_partners/Raddiant Hospital.jpg";
import partner_logo27 from "../assets/our_partners/Roshan Computer.png";
import partner_logo28 from "../assets/our_partners/SA Structural Consultant.jpg";
import partner_logo29 from "../assets/our_partners/STICE.png";
import partner_logo30 from "../assets/our_partners/Samarth Hospital.jpg";
import partner_logo31 from "../assets/our_partners/Sapkal Knowledge Hub.png";
import partner_logo32 from "../assets/our_partners/SciTech-Logo-1.png";
import partner_logo33 from "../assets/our_partners/Seed India.jpg";
import partner_logo34 from "../assets/our_partners/Shatabdi.png";
import partner_logo35 from "../assets/our_partners/Shree Krushna Engineering Classes.png";
import partner_logo36 from "../assets/our_partners/Shree Sai Seva Hospital.jpg";
import partner_logo37 from "../assets/our_partners/Shri Balaji Trust.jpg";
import partner_logo38 from "../assets/our_partners/Sigma Toolings.jpg";
import partner_logo39 from "../assets/our_partners/Sopan Hospital.jpg";
import partner_logo40 from "../assets/our_partners/Speedwell.jfif";
import partner_logo41 from "../assets/our_partners/Streamfix website logo.png";
import partner_logo42 from "../assets/our_partners/Suyog Hospital.png";
import partner_logo43 from "../assets/our_partners/Tejal Samajik Sanstha.jpg";
import partner_logo44 from "../assets/our_partners/Vakratunda Hospital.png";
import partner_logo45 from "../assets/our_partners/Vrindavan Hospital.png";
import partner_logo46 from "../assets/our_partners/Wisdom Extra.jpg";
import partner_logo47 from "../assets/our_partners/laxmi_logo.webp";
import partner_logo48 from "../assets/our_partners/marines-security-services-indira-nagar-nashik-nashik-security-services-dtf7ll9rnn-250.webp";
import partner_logo49 from "../assets/our_partners/metasoft.png";


export default function Affiliations() {
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

  const affiliatedLogos = [
    affiliated_logo1, affiliated_logo2, affiliated_logo3, affiliated_logo4, affiliated_logo5,
    affiliated_logo6, affiliated_logo7, affiliated_logo8, affiliated_logo9, affiliated_logo10,
    affiliated_logo11, affiliated_logo12, affiliated_logo13, affiliated_logo14, affiliated_logo15,
    affiliated_logo16, affiliated_logo17, affiliated_logo18, affiliated_logo19, affiliated_logo20,
  ];

  const governmentLogos = [
    gov_logo1, gov_logo2, gov_logo3, gov_logo4, gov_logo5, gov_logo6, gov_logo7, gov_logo8, 
    gov_logo9, gov_logo10, gov_logo11, gov_logo12, gov_logo13, gov_logo14, gov_logo15, gov_logo16,
    gov_logo17, gov_logo18,
  ];

  const partnerLogos = [
    partner_logo1, partner_logo2, partner_logo3, partner_logo4, partner_logo5, partner_logo6, partner_logo7, 
    partner_logo8, partner_logo9, partner_logo10, partner_logo11, partner_logo12, partner_logo13, partner_logo14, 
    partner_logo15, partner_logo16, partner_logo17, partner_logo18, partner_logo19, partner_logo20, partner_logo21,
    partner_logo22, partner_logo23, partner_logo24, partner_logo25, partner_logo26, partner_logo27, partner_logo28, 
    partner_logo29, partner_logo30, partner_logo31, partner_logo32, partner_logo33, partner_logo34, partner_logo35, 
    partner_logo36, partner_logo37, partner_logo38, partner_logo39, partner_logo40, partner_logo41, partner_logo42, 
    partner_logo43, partner_logo44, partner_logo45, partner_logo46, partner_logo47, partner_logo48, partner_logo49,
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Affiliated Logos Carousel */}
      <section>
        <h2 className="text-3xl font-bold text-center text-[#e67e23] mb-8">
          Our Esteemed Affiliations
        </h2>
        <Slider {...sliderSettings}>
          {affiliatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Affiliation ${index + 1}`}
                className="h-32 mx-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Government Departments Carousel */}
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

      {/* Our Partners Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center text-[#e67e23] mb-8">
          Our Valued Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-6 bg-white shadow-md rounded-md transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${
                index % 5 === 0 ? "col-span-2" : ""
              }`}
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-24 mx-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
