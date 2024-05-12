import React from 'react'

export default function Records() {
  return (
    <>
    <div className="bg-[#f9f9f9] ">
        <div className="container h-auto max-w-full">
          <div className="flex flex-col items-center justify-center p-10 px-12 space-y-7 lg:flex-row lg:px-44 lg:space-x-40">
            <div className="w-full lg:w-2/4">
              <h1 className="capitalize text-[#bf4408] text-3xl font-bold">
                our mission
              </h1>
              <p className="text-[#bf4408]">
                We promise to deliver state of the art training to each needy &
                deserving youth of our Nation to reduce the unemployment ratio.
              </p>

              <h1 className="capitalize text-[#bf4408] text-3xl mt-7 font-bold">
                our vision
              </h1>
              <p className="text-[#bf4408]">
                Make India a Nation of Super Skilled Power Source for the World.
                For this we're not only focussing employability skills but also
                Sparking & injecting the Entrepreneurship Skills.
              </p>
            </div>
            <div className="w-full lg:flex lg:flex-row lg:w-2/4">
              <div className="grid grid-cols-2 ">
                <div className="border border-[#ff4a06] flex flex-col items-center justify-center p-8 md:p-0">
                  <h1 className="text-3xl text-[#ff4a06] font-bold lg:text-4xl ">
                    60+
                  </h1>
                  <h2 className="text-xl font-medium capitalize text-[#ff4a06]">
                    training centres
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center p-8">
                  <h1 className="text-3xl text-[#ff4a06] font-bold lg:text-4xl">
                    3400+
                  </h1>
                  <h2 className="text-xl font-medium capitalize text-[#ff4a06] pl-2">
                    placements done
                  </h2>
                </div>
                <div className="border-l border-b border-[#ff4a06] flex flex-col items-center justify-center p-8">
                  <h1 className="text-3xl text-[#ff4a06] font-bold lg:text-4xl">
                    60+
                  </h1>
                  <h2 className="text-xl font-medium capitalize text-[#ff4a06]">
                    training centres
                  </h2>
                </div>
                <div className="border border-[#ff4a06] flex flex-col items-center justify-center p-8">
                  <h1 className="text-3xl text-[#ff4a06] font-bold lg:text-4xl">
                    5000+
                  </h1>
                  <h2 className="text-xl font-medium capitalize text-[#ff4a06]">
                    trained students
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
