import React from "react";
import SearchButton from "./SearchButton";
import TrainingCard from "./TrainingCard";
import map from "../assets/map.png";
import Header from "./Header";
import Nav from "./Nav";

export default function TrainingPrograms() {
  return (
    <>
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
            <div className="text-3xl capitalize  text-[#e67e23] font-bold lg:text-6xl">
              <h1>our</h1>
              <h1>training</h1>
              <h1>center</h1>
            </div>
            <div className="text-[#561f06] font-medium xl:text-xl">
              <p>
                At our training centers, we are committed to creating a transformative learning environment that empowers individuals to achieve their highest potential. With state-of-the-art infrastructure, modern equipment, and cutting-edge technology, we ensure students receive hands-on training that meets industry standards. Our spacious classrooms, advanced labs, and interactive learning setups are designed to foster creativity, collaboration, and skill enhancement. <br></br><br></br>
Our team of highly qualified trainers brings a wealth of industry experience and expertise, blending practical knowledge with academic rigor. They not only focus on technical skills but also mentor students to develop confidence, problem-solving abilities, and a growth mindset.<br></br><br></br>
We offer a diverse range of programs, covering traditional sectors like agriculture, craftsmanship, and retail, as well as future-ready fields such as Artificial Intelligence, Data Analytics, Cloud Computing, and Digital Marketing. With a strong emphasis on healthcare and wellness, we also provide specialized courses in geriatric care, nursing, and other health-related professions, addressing the growing demand in these critical sectors.<br></br><br></br>
Beyond employment, we focus on entrepreneurship by equipping students with the skills and resources to start their own ventures. Through mentorship, business planning, and incubation support, we empower aspiring entrepreneurs to transform their ideas into successful businesses.<br></br><br></br>
Our mission is not just to train individuals for jobs but to prepare them for lifelong success, whether they choose to thrive in the workforce or embark on entrepreneurial journeys. At Aarti Educare, we create opportunities, foster innovation, and shape the leaders of tomorrow.
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
