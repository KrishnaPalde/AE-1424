import React from "react";
import logo from "../assets/logo.webp";
import LazyLoad from "react-lazyload";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-64 w-64 border-4 border-t-[#e67e23] border-r-transparent border-b-[#e67e23] border-l-transparent rounded-full animate-spin"></div>
        <LazyLoad height={200} offset={150} once>
        <img
          src={logo}
          alt="Logo"
          className="h-48 w-48 object-contain"
        />
        </LazyLoad>
      </div>
    </div>
  );
};

export default LoadingSpinner;
