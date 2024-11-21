import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="container flex flex-row justify-around max-w-full xl:justify-between ">
        <div className="w-2/4 sm:w-1/6 pl-8">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Aarti Educare Logo"
              className="object-cover h-24"
            />
          </Link>
        </div>
       
        <div className="flex flex-col items-center justify-center border-b-2 sm:items-end sm:pb-2 sm:flex-row">
          <div className="flex items-center ml-2 sm:px-3 justify-stretch ">
            <PhoneIcon className="w-4 h-4 text-gray-500" />
            <span className="ml-2 text-xs lg:mr-8 lg:text-lg">
              +91 82377 76233
            </span>
          </div>
          <a href="mailto:help.tantratech@gmail.com">
            <div className="flex items-center justify-around px-3">
              <EnvelopeIcon className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-xs sm:mr-6 lg:text-lg">
                admin@aartieducare.com
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
