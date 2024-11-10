import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchButton() {
  return (
    <>
      <div className="relative px-4 pt-2 pb-4 mx-auto lg:mt-0 lg:w-2/5">
        <div className="flex flex-row items-center justify-between  border-b border-[#e67e23]">
          <input
            className="w-full h-10 px-4 text-sm bg-transparent border-none rounded focus:ring-0 placeholder:text-[#e67e23] md:text-md lg:text-xl"
            type="search"
            name="search"
            placeholder="Search by Training Centre Name, Skill, Location"
          />
          <button className="text-[#e67e23] px-3 flex items-center">
            <MagnifyingGlassIcon className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </>
  );
}
