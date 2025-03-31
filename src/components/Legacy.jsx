import React from 'react'
import ss1 from "../assets/ss1.webp";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Stepper from "../components/Stepper";



export default function Legacy() {
  return (
    <>
    

    <div className="container max-w-full">
        <div className="flex flex-col lg:flex-row ">
          <div className="px-4 pt-4 bg-[#bf4408] p-8 lg:w-2/4">
            <h1 className=" pb-10 text-3xl font-semibold capitalize text-[#f6f6f6] lg:px-28 px-4">
              our legacy
            </h1>
            <Stepper />
          </div>

          <div className="px-10 pt-8 lg:w-2/4">
            <h1 className="px-4 pb-10 text-3xl font-semibold capitalize">
              our success stories
            </h1>
            <div className="h-48 bg-[#f6f6f6]"></div>
            <div className="h-48 bg-[#f6f6f6] mt-16"></div>
          </div>
        </div>
        {/* <div className="relative flex items-center justify-center my-3 h-36">
          <img src={ss1} alt="success background" className="absolute object-cover w-full h-full opacity-[.20] mix-blend-overlay"/>
          <button className="text-[#ffffff] w-auto h-fit px-3 py-2 rounded bg-[#FF743E] hover:bg-[#FF643E] absolute flex justify-around">
            Register As Student
            <ArrowRightIcon className="flex items-center justify-center w-4 h-4 mt-1 ml-8 text-[#f6f6f6]" />
          </button>
        </div> */}
      </div>
      
    </>
  )
}
