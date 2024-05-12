import React from "react";
import landing from "../assets/landing.jpg";

export default function LandingImage() {
  return (
    <>
      
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
      
    </>
  );
}
