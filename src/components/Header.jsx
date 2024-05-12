import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <div className="container max-w-full sm:flex sm:flex-row xl:px-16 shadow-2xl shadow-[#f6f6f6]">
        <div className="flex flex-row sm:basis-1/4 xl:basis-1/4">
            <img src={logo} alt="Aarti Educare Logo" className="h-20" />
        </div>
        <div className="flex flex-col mt-3 text-sm border-b sm:basis-3/4 xl:basis-3/4 sm:flex sm:flex-row sm:px-2 md:justify-center xl:justify-end xl:pr-10 sm:space-x-10">
          <div className="flex flex-col items-center justify-center sm:flex-nowrap border-solid border-[#DBDBDB] sm:flex-row">
            <div className="flex flex-row items-center justify-center">
            <PhoneIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-1 mr-3 lg:mr-8">
                +91-0123456789
                </span>
            </div>
            <div className="flex flex-row items-center justify-center">
            <EnvelopeIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-1 sm:mr-6">admin@aartieducare.com</span>
            </div>
          </div>
          <div className="flex items-center justify-center my-3 ">
            <button className="text-[#ffffff] w-auto h-fit px-3 py-2 rounded bg-[#FF743E] hover:bg-[#FF643E]">
              Register As Student
            </button>
          </div>
        </div>
      </div>

      <Nav />
    </>
  );
}
