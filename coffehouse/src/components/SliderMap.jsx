import React, { useState, useEffect } from "react";
import text from "../styles";
import { slider } from "../constants";
import { NextButton } from "./Buttons";

const SliderMap = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slider.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex overflow-hidden items-center justify-center gap-[44px]">
      <NextButton className="-rotate-180 rounded-full min-w-[60px] h-[60px]  justify-center items-center border-[1px] border-brdlight mb-[44px] hidden sm:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
            stroke="#403F3D"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NextButton>
      {slider.map((item, index) => (
        <div
          key={item.id}
          className={`min-w-[348px] sm:w-[480px] ${
            index === currentSlide ? "visible" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center">
            {" "}
            <img
              src={item.icon}
              alt={item.name}
              className="pb-[20px] sm:w-[480px]"
            />
            <h3 className={`${text.heading3} text-dark pb-[16px]`}>
              {item.name}
            </h3>
            <p className={`${text.medium} text-dark pb-[16px] text-center`}>
              {item.title}
            </p>
            <span className={`${text.heading3} text-dark`}>{item.cost}</span>
          </div>
          <div className="flex gap-[12px] justify-center pt-[39px]">
            <div
              className={`h-[4px] ${
                item.id === currentSlide ? "bg-accent" : "bg-brddark"
              } w-10`}
            />
            <div
              className={`h-[4px] ${
                item.id === currentSlide ? "bg-accent" : "bg-brddark"
              } w-10`}
            />
            <div
              className={`h-[4px] ${
                item.id === currentSlide ? "bg-accent" : "bg-brddark"
              } w-10`}
            />
          </div>
        </div>
      ))}
      <NextButton className="rounded-full min-w-[60px] h-[60px] justify-center items-center border-[1px] border-brdlight mb-[44px] hidden sm:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
            stroke="#403F3D"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NextButton>
    </div>
  );
};

export default SliderMap;
