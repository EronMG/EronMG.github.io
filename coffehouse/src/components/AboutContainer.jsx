import React from "react";
import { about } from "../constants";
import text from "../styles";
import about1 from "../assets/about-1.png";
import about2 from "../assets/about-2.png";
import about3 from "../assets/about-3.png";
import about4 from "../assets/about-4.png";

const About = () => {
  return (
    <div className="flex flex-col gap-[13px] md:hidden">
      {about.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-[20px] md:w-[660px]"
        >
          <img
            src={item.img}
            alt="img"
            className={`${
              item.id === 0 ? "block" : item.id === 3 ? "block" : "hidden"
            } h-[590px] w-[100%] object-cover scale-[120%] hover:scale-[110%] transition-all duration-500 sm:scale-[105%] sm:hover:scale-[95%] md:block md:w-[660px] md:scale-[100%]`}
          />
        </div>
      ))}
    </div>
  );
};

const AboutContainer = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <h2 className={`${text.mobileHeading2} text-dark sm:text-[60px]`}>
        Resource is{" "}
        <span className={` text-accent italic`}>
          the perfect and cozy place
        </span>{" "}
        where you can enjoy a variety of hot beverages, relax, catch up with
        friends, or get some work done.
      </h2>
      <About />
      <div className="gap-[40px] hidden md:flex">
        <div className="flex flex-col gap-[40px]">
          {" "}
          <div className="overflow-hidden rounded-[20px]">
            <img
              src={about1}
              alt=""
              className="w-[660px] object-cover rounded-[20px] h-[590px] scale-[110%] hover:scale-[100%]  transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              src={about2}
              alt=""
              className="w-[660px] h-[430px] object-cover rounded-[20px] scale-[110%] hover:scale-[100%]  transition-all duration-500"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[40px]">
          {" "}
          <div className="overflow-hidden rounded-[20px]">
            <img
              src={about3}
              alt=""
              className="w-[660px] h-[430px] object-cover rounded-[20px] scale-[110%] hover:scale-[100%]  transition-all duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              src={about4}
              alt=""
              className="w-[660px] object-cover rounded-[20px]  h-[590px] scale-[110%] hover:scale-[100%]  transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
