import React from 'react'
import affiliation1 from "../assets/affiliation1.png";
import affiliation2 from "../assets/affiliation2.png";
import affiliation3 from "../assets/affiliation3.png";
import affiliation4 from "../assets/affiliation4.png";
import affiliation5 from "../assets/affiliation5.png";



export default function Affiliations() {
  return (
    <>
    <div className="container h-auto max-w-full mt-10">
        <div className="flex flex-col items-center justify-center ">
          <div>
            <h1 className="text-xl font-semibold capitalize text-[#bf4408] md:font-bold">
              our affiliations with government
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-4 p-10 px-10 md:flex-row md:flex md:space-x-4 md:px-6 md:gap-0">
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation1} alt="aff1" className="md:h-24" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation2} alt="aff2" className="md:h-24" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation3} alt="aff3" className="md:h-24" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation4} alt="aff4" className="md:h-24" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={affiliation5} alt="aff5" className="md:h-16" />
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}
