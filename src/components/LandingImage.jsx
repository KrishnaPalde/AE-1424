import React from "react";
import landing from "../assets/landing.webp";
import Nav from "./Nav";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";

export default function LandingImage() {
  return (
    <>
      <div>
        <div className="h-[28rem] sm:h-[38rem]  scroll-smooth bg-gradient-to-tr from-[#211F1F] from-30% via-[#7B3A1B] via-100% to-[#FC6015] to-5% md:block relative">
          <LazyLoad height={200} offset={150} once>
          <img
            src={landing}
            alt="Introduction"
            className="absolute object-cover w-full h-full mix-blend-overlay"
            loading="lazy"
          />
          </LazyLoad>
          <div className="absolute inset-0 flex items-end justify-start p-5 sm:p-10 sm:items-center">
            <div
              className=""
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <h1 className="text-3xl font-medium text-white sm:text-6xl">
                Join the <br /> Skill Revolution
              </h1>
              <h2 className="mt-2 sm:text-3xl text-[#FF743E] text-2xl uppercase font-semibold">
                Transforming India's Destiny
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
