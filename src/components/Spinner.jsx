import React from "react";
import logo from "../assets/logo.webp"; // Replace with the actual path to your logo
import LazyLoad from "react-lazyload";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
    <div className="flex flex-col items-center space-y-4">
  <LazyLoad height={200} offset={150} once><img src="/logo.webp" alt="Logo" className="h-12 w-auto" /></LazyLoad>
  <p className="text-white text-lg">Loading...</p>
</div>
  </div>
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
//   <div className="relative flex flex-col items-center space-y-4">
//     <div className="relative h-24 w-24">
//       <img
//         src={logo}
//         alt="Loading Logo"
//         className="absolute inset-0 h-full w-full object-contain"
//       />
//       <div className="absolute inset-0 animate-spin-slow rounded-full border-4 border-t-[#e67e23] border-[#f3f3f3]"></div>
//     </div>
//     <p className="text-white text-lg font-medium">Loading...</p>
//   </div>
// </div>

  );
};

export default Spinner;
