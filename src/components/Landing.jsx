import React from "react";
import logo from "../assets/logo.png";
import landing from "../assets/landing.jpg";
import affiliation1 from "../assets/affiliation1.png";
import affiliation2 from "../assets/affiliation2.png";
import affiliation3 from "../assets/affiliation3.png";
import affiliation4 from "../assets/affiliation4.png";
import affiliation5 from "../assets/affiliation5.png";
import ss1 from "../assets/ss1.jpg";

import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Legacy from "./Stepper";

export default function Landing() {
  return (
    <>
      {/* Image starts */}
      <div>
        <div className="hidden h-[38rem] bg-gradient-to-tr from-[#211F1F] from-30% via-[#7B3A1B] via-100% to-[#FC6015] to-5% md:block relative">
          <img
            src={landing}
            alt="Introduction"
            className="absolute object-cover w-full h-full mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-start p-10">
            <div className="">
              <h1 className="text-6xl font-medium text-white">
                Join the <br /> Skill Revolution
              </h1>
              <h2 className="mt-2 text-3xl text-[#FF743E] uppercase font-semibold">
                Transforming India's Destiny
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Image ends */}

      {/* Intro starts */}
      <div className="container bg-[#DF6327] max-w-full">
        <div className="flex flex-col p-8 text-justify lg:space-x-4 sm:p-16 lg:flex-row ">
          <div className="lg:w-3/5">
            <p className="text-[#f9f9f9]">
              At Aarti EduCare Pvt Ltd, we're more than just a company – we're a
              family of passionate, dedicated, and innovative individuals. Our
              mission is simple: to realize India's potential as a global
              superpower, and we believe that it's the youth of our nation who
              will lead the way. That's why we've launched Aarti Educare,
              dedicated to empowering young people and fostering self-reliance
              through skill development. Through our various projects, we're
              committed to driving employment and entrepreneurship among the
              youth efficiently and effectively.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 lg:mt-0 lg:w-2/5">
            <button className="text-[#ac2900] px-8 w-64 h-fit py-2 bg-[#f9f9f9] hover:bg-[#df4327] hover:text-[#f9f9f9] flex justify-around ">
              Enroll Now
              <ArrowRightIcon className="flex items-center justify-center w-4 h-4 mt-1 ml-8 text-[#ac2900] hover:text-[#f9f9f9]" />
            </button>
            <button className="text-[#f9f9f9] px-8 w-64 h-fit py-2 bg-[#df6327] hover:bg-[#FF643E] flex justify-around mt-5 border border-[#f9f9f9]">
              Upcoming Events
              <ArrowRightIcon className="flex items-center justify-center w-4 h-4 mt-1 ml-8 text-[#f6f6f6]" />
            </button>
          </div>
        </div>
      </div>
      {/* Intro ends */}

      {/* flex starts */}
      <div className="bg-[#f9f9f9] ">
        <div className="container h-auto max-w-full">
          <div className="flex flex-col items-center justify-center p-10 px-12 space-y-7 lg:flex-row lg:px-44 lg:space-x-40">
            <div className="w-full lg:w-2/4">
              <h1 className="capitalize text-[#bf4408] text-3xl font-bold">
                our mission
              </h1>
              <p className="text-[#bf4408]">
                We promise to deliver state of the art training to each needy &
                deserving youth of our Nation to reduce the unemployment ratio.
              </p>

              <h1 className="capitalize text-[#bf4408] text-3xl mt-7 font-bold">
                our vision
              </h1>
              <p className="text-[#bf4408]">
                Make India a Nation of Super Skilled Power Source for the World.
                For this we're not only focussing employability skills but also
                Sparking & injecting the Entrepreneurship Skills.
              </p>
            </div>
            <div className="w-full lg:flex lg:flex-row lg:w-2/4">
              <div className="grid grid-cols-2 ">
                <div className="border border-[#ff4a06] flex flex-col items-center justify-center p-8 md:p-0">
                  <h1 className="text-3xl text-[#ff4a06] font-bold lg:text-4xl ">
                    60+
                  </h1>
                  <h2 className="text-xl font-medium capitalize text-[#ff4a06]">
                    training centres
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center p-8">
                  <h1 className="text-3xl text-[#ff4a06] font-bold lg:text-4xl">
                    3400+
                  </h1>
                  <h2 className="text-xl font-medium capitalize text-[#ff4a06] pl-2">
                    placements done
                  </h2>
                </div>
                <div className="border-l border-b border-[#ff4a06] flex flex-col items-center justify-center p-8">
                  <h1 className="text-3xl text-[#ff4a06] font-bold lg:text-4xl">
                    60+
                  </h1>
                  <h2 className="text-xl font-medium capitalize text-[#ff4a06]">
                    training centres
                  </h2>
                </div>
                <div className="border border-[#ff4a06] flex flex-col items-center justify-center p-8">
                  <h1 className="text-3xl text-[#ff4a06] font-bold lg:text-4xl">
                    5000+
                  </h1>
                  <h2 className="text-xl font-medium capitalize text-[#ff4a06]">
                    trained students
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* flex ends */}

      <Carousel />

      {/* Government affiliation starts*/}
      <div className="container h-auto max-w-full mt-10">
        <div className="flex flex-col items-center justify-center ">
          <div>
            <h1 className="text-xl font-semibold capitalize text-[#bf4408] md:font-bold">
              our affiliations with government
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-4 p-10 px-10 md:flex-row md:flex md:space-x-4 md:px-6 md:gap-0">
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation1} alt="aff1" className="md:h-24" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation2} alt="aff2" className="md:h-24" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation3} alt="aff3" className="md:h-24" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation4} alt="aff4" className="md:h-24" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation5} alt="aff5" className="md:h-16" />
            </div>
          </div>
        </div>
      </div>
      {/* Government affliation ends*/}
    </>
  );
}
