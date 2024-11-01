import React from "react";
import SearchButton from "./SearchButton";
import TrainingCard from "./TrainingCard";
import map from "../assets/map.png";
import Header from "./Header";
import Nav from "./Nav";

export default function TrainingPrograms() {
  return (
    <>
    <Nav/>
      <div className="container max-w-full">
        <div className="flex flex-col p-6 text-justify md:flex-row">
          <div className="flex items-center justify-center md:w-4/6">
            <img
              src={map}
              alt="map"
              className="md:h-[25rem] lg:h-[32rem] object-cover "
              loading="lazy"
              />
            
          </div>
          <div className="space-y-3 md:w-3/6 md:space-y-16 md:px-1">
            <div className="text-3xl capitalize  text-[#ff5e15] font-bold lg:text-6xl">
              <h1>our</h1>
              <h1>training</h1>
              <h1>center</h1>
            </div>
            <div className="text-[#561f06] font-medium xl:text-xl">
              <p>
                At our training center, we're dedicated to nurturing talent,
                fostering growth, and empowering individuals to reach their
                fullest potential. With state-of-the-art facilities and a team
                of experienced professionals, we provide a dynamic learning
                environment tailored to meet the diverse needs of our students.
                Whether you're embarking on a journey of skill development,
                seeking to enhance your expertise, or exploring new avenues of
                learning, our training center is your gateway to success. From
                hands-on workshops to immersive training programs, we offer a
                comprehensive range of courses designed to equip you with the
                knowledge and skills needed to thrive in today's competitive
                landscape. Join us at our training center and unlock endless
                possibilities for personal and professional development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SearchButton />
        <TrainingCard />
      </div>
    </>
  );
}
