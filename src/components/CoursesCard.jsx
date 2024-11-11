import React, { useEffect } from "react";
import tc1 from "../assets/tc1.png";
import tc2 from "../assets/tc2.png";
import tc3 from "../assets/tc3.png";
import courses1 from "../assets/courses1.png";
import courses2 from "../assets/courses2.png";
import courses3 from "../assets/courses3.png";
import courses4 from "../assets/courses4.png";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaBookBookmark,
  FaLocationArrow,
  FaLocationDot,
  FaUserGraduate,
} from "react-icons/fa6";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const cards = [
  {
    title: "Apparel Made-Ups & Home Furnishing",
    image: tc1,
    logo: courses1,
  },
  {
    title: "Beauty & Wellness Sector Skill Council",
    image: tc2,
    logo: courses2,
  },
  {
    title: "Capital Goods Skill Council",
    image: tc3,
    logo: courses3,
  },
  {
    title: "BFSI Sector Skill Council Of India",
    image: tc1,
    logo: courses4,
  },
  {
    title: "BFSI Sector Skill Council Of India",
    image: tc1,
    logo: courses4,
  },
  {
    title: "BFSI Sector Skill Council Of India",
    image: tc1,
    logo: courses4,
  },
];

export default function CoursesCard() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <>
    <div className="container grid grid-cols-4 h-auto justify-center max-w-full xl:px-28 ">
      {cards.map((tc, index) => (
        <div
          key={tc.title}  // Move key prop here
          className="grid grid-cols-1 p-4  h-auto"
          data-aos="zoom-in"
        >
          <div>
          <div className="relative w-full h-56">
            <img
              src={tc.image}
              alt={tc.title}
              className="absolute object-cover w-full h-full lg:h-full"
            />
            <div className="bg-[#f6f6f6] absolute px-2 py-1 bottom-[-38px] left-0 p-1 ml-4 flex text-white text-xl font-semibold rounded-full">
              <img src={tc.logo} alt={tc.title} className="object-cover h-20" />
            </div>
          </div>
          <div className="container bg-[#e67e23] space-y-2 px-4 h-44">
            <div className="grid grid-cols-2 pb-3 space-y-14">
              <div className="pt-14">
                <h1 className="text-xl font-semibold text-[#f6f6f6]">{tc.title}</h1>
              </div>
              <div>
                <button className="px-2 py-1 w-full border-b text-[#f6f6f6] underline underline-offset-8">
                  Know More
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
