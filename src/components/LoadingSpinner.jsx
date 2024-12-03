import React from "react";
import logo from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-32 w-32 border-4 border-t-[#e67e23] border-r-transparent border-b-[#e67e23] border-l-transparent rounded-full animate-spin"></div>
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-16 object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
