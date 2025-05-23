/* eslint-disable react/jsx-key */
import React, {useEffect} from "react";
import tc1 from "../assets/tc1.webp";
import tc2 from "../assets/tc2.webp";
import tc3 from "../assets/tc3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookBookmark, FaLocationArrow, FaLocationDot, FaUserGraduate } from "react-icons/fa6";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import LazyLoad from "react-lazyload";

const cards = [
  {
    image: tc1,
    title: "Test Center - 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur rem repudiandae magni nulla. Illo, praesentium consequuntur?",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc1,
    title: "Test Center - 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quia natus veritatis tempora repellendus? Dicta!",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc1,
    title: "Test Center - 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quia natus veritatis tempora repellendus? Dicta!",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc1,
    title: "Test Center - 4",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur rem repudiandae magni nulla. Illo, praesentium consequuntur?",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc2,
    title: "Test Center - 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quia natus veritatis tempora repellendus? Dicta!",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc3,
    title: "Test Center - 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quia natus veritatis tempora repellendus? Dicta!",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  }
]

export default function TrainingCard() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <>
      <div className="container flex flex-wrap justify-center max-w-full min-h-screen xl:px-28">
          {cards.map((tc, index) => (
        
            <div className="grid grid-cols-1 p-4 md:w-1/4 lg:w-1/4 xl:w-1/4 md:pb-2">
              <div>
              <div className="relative w-full h-56" key={tc.title}>
                <LazyLoad key={index} height={200} offset={150} once>
                <img
                  src={tc.image}
                  alt={tc.title}
                  className="absolute object-cover w-full h-full"
                  data-aos="zoom-in"
                />
                </LazyLoad>
                <div className="bg-[#e67e23] absolute px-2 py-1 bottom-[-14px] left-0 p-1 ml-4 flex text-white text-xl font-semibold">
                  {tc.title}
                </div>
              </div>
              <div className="container bg-[#f6f6f6] space-y-8 px-4">
                <p className="pt-5 text-sm text-justify h-32">{tc.description}</p>
                <div className="grid grid-cols-2 pb-3 space-y-2">
                  <div className="flex flex-row items-center">
                    <FaBookBookmark />
                    <span className="ml-2">{tc.courses}</span>
                  </div>
                  <div className="flex flex-row items-center">
                    <FaUserGraduate />
                    <span className="ml-2">{tc.students}</span>
                  </div>
                  <div className="flex flex-row items-center">
                    <FaLocationDot />
                    <span className="ml-2">{tc.address}</span>
                  </div>
                  <div>
                    <button className="text-[#e67e23] px-2 py-1 w-full border border-[#e67e23] hover:bg-[#df5221] hover:text-[#f6f6f6]">
                      Register Now
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
