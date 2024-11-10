import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* <div className="container max-w-full sm:flex sm:flex-row xl:px-16 shadow-2xl shadow-[#f6f6f6]">
        <div className="flex flex-row sm:basis-1/4 xl:basis-1/4">
          <Link to={"/"}>
            <img src={logo} alt="Aarti Educare Logo" className="h-20" />
          </Link>
        </div>
        <div className="flex flex-col mt-3 text-sm border-b sm:basis-3/4 xl:basis-3/4 sm:flex sm:flex-row sm:px-2 md:justify-center xl:justify-end xl:pr-10 sm:space-x-10">
          <div className="flex flex-col items-center justify-center sm:flex-nowrap border-solid border-[#DBDBDB] sm:flex-row">
            <div className="flex flex-row items-center justify-center">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
              <span className="ml-1 mr-3 lg:mr-8">+91-0123456789</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <EnvelopeIcon className="w-5 h-5 text-gray-500" />
              <span className="ml-1 sm:mr-6">admin@aartieducare.com</span>
            </div>
          </div>
          <div className="justify-center hidden my-3 sm:flex itsmems-center ">
            <button className="text-[#ffffff] w-auto h-fit px-3 py-2 rounded bg-[#FF743E] hover:bg-[#FF643E]">
              Register As Student
            </button>
          </div>
        </div>
      </div>
      <Nav /> */}

      <div className="container flex flex-row justify-around max-w-full p-1 px-2 pb-2 xl:justify-between xl:px-14 sm:px-4 sm:pt-4">
        <div className="w-2/4 sm:w-1/6">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Aarti Educare Logo"
              className="object-cover h-14 lg:h-20"
            />
          </Link>
        </div>
       
        <div className="flex flex-col items-center justify-center border-b-2 sm:items-end sm:pb-2 sm:flex-row">
          <div className="flex items-center ml-2 sm:px-3 justify-stretch ">
            <PhoneIcon className="w-4 h-4 text-gray-500" />
            <span className="ml-2 text-xs lg:mr-8 lg:text-lg">
              +91-0123456789
            </span>
          </div>
          <div className="flex items-center justify-around px-3">
            <EnvelopeIcon className="w-4 h-4 text-gray-500 mr-2" />
            <span className="text-xs sm:mr-6 lg:text-lg">
              admin@aartieducare.com
            </span>
          </div>
          <Link to={'/login'} className="items-center justify-center hidden sm:flex ">
            <button className="text-[#ffffff] w-auto h-fit px-3 py-2  bg-[#e67e23] hover:bg-[#e67e23] lg:text-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
          <div>
        </div>
    </>
  );
}
