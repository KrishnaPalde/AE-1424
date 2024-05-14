import React from "react";
import tc1 from "../assets/tc1.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function RegisterButton() {
  return (
    <div className="relative flex items-center justify-center my-3 h-36">
      <img
        src={tc1}
        alt="success background"
        className="absolute object-cover w-full h-full opacity-[.20] mix-blend-overlay"
      />
      <button className="text-[#953601] w-auto h-fit px-3 py-2 rounded bg-[#Fdfdfd] hover:bg-[#FF643E] absolute flex justify-around hover:shadow-xl hover:text-[#f6f6f6]">
        Register Now
        <ArrowRightIcon className="flex items-center justify-center w-4 h-4 mt-1 ml-8 text-[#953601]" />
      </button>
    </div>
  );
}
