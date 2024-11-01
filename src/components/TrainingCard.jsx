import React, {useEffect} from "react";
import tc1 from "../assets/tc1.png";
import tc2 from "../assets/tc2.png";
import tc3 from "../assets/tc3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookBookmark, FaLocationArrow, FaLocationDot, FaUserGraduate } from "react-icons/fa6";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const cards = [
  {
    image: tc1,
    title: "Innovation Lab",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur rem repudiandae magni nulla. Illo, praesentium consequuntur?",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc2,
    title: "Aashadeep Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quia natus veritatis tempora repellendus? Dicta!",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc3,
    title: "Phoenix Computers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quia natus veritatis tempora repellendus? Dicta!",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc1,
    title: "Innovation Labs",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur rem repudiandae magni nulla. Illo, praesentium consequuntur?",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc2,
    title: "Akashadeep Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit quia natus veritatis tempora repellendus? Dicta!",
    courses: "XXX Courses",
    students: "XXX+ Students",
    address: "City, State",
  },
  {
    image: tc3,
    title: "Phoenixx Computers",
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
        
            <div className="grid grid-cols-1 p-4 md:w-1/2 lg:w-1/3 xl:w-2/6 md:pb-10">
              <div className="relative w-full h-56" key={tc.title}>
                <img
                  src={tc.image}
                  alt={tc.title}
                  className="absolute object-cover w-full h-full"
                  data-aos="zoom-in"
                />
                <div className="bg-[#ff5e15] absolute px-2 py-1 bottom-[-14px] left-0 p-1 ml-4 flex text-white text-xl font-semibold">
                  {tc.title}
                </div>
              </div>
              <div className="container bg-[#f6f6f6] space-y-8 px-4 ">
                <p className="pt-5 text-sm text-justify">{tc.description}</p>
                <div className="grid grid-cols-2 pb-3 space-y-1">
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
                    <button className="text-[#df6327] px-2 py-1 w-full border border-[#df6327] hover:bg-[#df5221] hover:text-[#f6f6f6]">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        
      </div>
    </>
  );
}
