import React from "react";
import text from "../styles";
import SliderMap from "./SliderMap";

const SliderContainer = ({ className }) => {
  return (
    <div className={className}>
      <h2
        className={`${text.mobileHeading2} text-dark text-center sm:text-[60px]`}
      >
        Choose your <span className="text-accent italic">favorite</span> coffee
      </h2>
      <SliderMap />
    </div>
  );
};

export default SliderContainer;
