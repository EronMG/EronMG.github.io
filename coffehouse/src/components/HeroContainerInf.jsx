import React from "react";
import text from "../styles";
import Menu from "./Buttons";
const HeroContainerInf = () => {
  return (
    <div className="relative px-[16px] py-[60px] flex flex-col gap-[39.5px] sm:px-[60px] sm:py-[100px] md:p-[100px] md:w-[730px]">
      <h1
        className={`${text.mobileHeading1} text-light sm:text-[72px] sm:leading-[105%]`}
      >
        <span className="text-accent italic">Enjoy</span> premium coffee at our
        charming cafe
      </h1>
      <p
        className={`${text.medium} text-light w-[316px] sm:w-full sm:mt-[2px]`}
      >
        With its inviting atmosphere and delicious coffee options, the Coffee
        House Resource is a popular destination for coffee lovers and those
        seeking a warm and inviting space to enjoy their favorite beverage.
      </p>
      <Menu />
    </div>
  );
};

export default HeroContainerInf;
