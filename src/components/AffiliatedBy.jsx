import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import affiliated_logo1 from "../assets/affiliated_by/Agriculture Skill Council of India (ASCI).webp";
import affiliated_logo2 from "../assets/affiliated_by/Apparel Made-Ups & Home Furnishing Sector Skill Council (AMHSSC).webp";
import affiliated_logo3 from "../assets/affiliated_by/Automotive Skills Development Council (ASDC).webp";
import affiliated_logo4 from "../assets/affiliated_by/BFSI Sector Skill Council.webp";
import affiliated_logo5 from "../assets/affiliated_by/Beauty & Wellness Sector Skill Council (B&WSSC).webp";
import affiliated_logo6 from "../assets/affiliated_by/Capital Goods & Strategic Skill Council (CGSSC).webp";
import affiliated_logo7 from "../assets/affiliated_by/Construction Skill Development Council of India (CSDCI).webp";
import affiliated_logo8 from "../assets/affiliated_by/Electronics Sector Skills Council of India (ESSCI).webp";
import affiliated_logo9 from "../assets/affiliated_by/Food Industry Capacity & Skill Initiative (FICSI).webp";
import affiliated_logo10 from "../assets/affiliated_by/Healthcare Sector Skill Council (HSSC).webp";
import affiliated_logo11 from "../assets/affiliated_by/Home Management And Care Givers Sector Skill Council(HMCGSSC).webp";
import affiliated_logo12 from "../assets/affiliated_by/IT-ITeS Sector Skills Council nasscom (SSC nasscom).webp";
import affiliated_logo13 from "../assets/affiliated_by/Management & Entrepreneurship and Professional Skills Council (MEPSC).webp";
// import affiliated_logo14 from "../assets/affiliated_by/Media & Entertainment Skills Council (MESC).webp";
import affiliated_logo14 from "../assets/affiliated_by/MESC.webp"; 
import affiliated_logo15 from "../assets/affiliated_by/Power Sector Skill Council (PSSC).webp";
import affiliated_logo16 from "../assets/affiliated_by/Rubber, Chemical & Petrochemical Skill Development Council (RCPSDC).webp";
// import affiliated_logo17 from "../assets/affiliated_by/Skill Council for Green Jobs (SCGJ).webp";
import affiliated_logo18 from "../assets/affiliated_by/Telecom Sector Skill Council (TSSC).webp";
import affiliated_logo19 from "../assets/affiliated_by/Tourism and Hospitality Skill Council (THSC).webp";
import affiliated_logo20 from "../assets/affiliated_by/Water Management & Plumbing Skill Council (WMPSC).webp";
import LazyLoad from "react-lazyload";

export default function AffiliatedBy() {
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
    rtl: true,
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

  const affiliatedLogos = [affiliated_logo1, affiliated_logo2, affiliated_logo3, affiliated_logo4, affiliated_logo5, affiliated_logo6, affiliated_logo7, affiliated_logo8, affiliated_logo9, affiliated_logo10, affiliated_logo11, affiliated_logo12, affiliated_logo13, affiliated_logo14, affiliated_logo15, affiliated_logo16, affiliated_logo18, affiliated_logo19, affiliated_logo20];

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
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
              <LazyLoad key={index} height={200} offset={150} once>
              <img
                src={logo}
                alt={`Affiliation ${index + 1}`}
                className="h-32 mx-auto object-contain"
              />
              </LazyLoad>
            </div>
          ))}
        </Slider>
    </section>
    </div>
  );
}
