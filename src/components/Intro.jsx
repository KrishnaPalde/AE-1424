import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Intro() {
  return (
    <>
     
     <div className="container bg-[#e87c24] max-w-full">
        <div className="flex flex-col-reverse p-8 text-justify lg:space-x-4 sm:p-16 lg:flex-row">
          <div className="mt-6 lg:w-3/5">
            <p className="text-[#f9f9f9]">
              At Aarti EduCare Pvt Ltd, we're more than just a company we're a
              family of passionate, dedicated, and innovative individuals. Our
              mission is simple: to realize India's potential as a global
              superpower, and we believe that it's the youth of our nation who
              will lead the way. That's why we've launched Aarti Educare,
              dedicated to empowering young people and fostering self-reliance
              through skill development. Through our various projects, we're
              committed to driving employment and entrepreneurship among the
              youth efficiently and effectively.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center sm:mt-10 lg:mt-0 lg:w-2/5 hover:text-[#f9f9f9]">
            <button className="text-[#ac2900] px-8 w-64 h-fit py-2 bg-[#f9f9f9] hover:bg-[#df4327]  flex justify-around ">
              Enroll Now
              <ArrowRightIcon className="flex items-center justify-center w-4 h-4 mt-1 ml-8  text-[#ac2900]" />
            </button>
            <button className="text-[#f9f9f9] px-8 w-64 h-fit py-2 bg-[#df6327] hover:bg-[#FF643E] flex justify-around mt-5 border border-[#f9f9f9]">
              Upcoming Events
              <ArrowRightIcon className="flex items-center justify-center w-4 h-4 mt-1 ml-8 text-[#f6f6f6]" />
            </button>
          </div>
        </div>
      </div>
      
    </>
  )
}
