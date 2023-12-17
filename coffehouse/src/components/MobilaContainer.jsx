import React from "react";
import text from "../styles";
import { AppStoreButton, PlayMarketButton } from "./Buttons";
import MobileScreen from "../assets/mobile-screens.png";

const MobilaContainer = ({ paragraph }) => {
  return (
    <div className="flex flex-col gap-[40px] justify-center items-center sm:gap-[100px] md:flex-row">
      <div className="flex flex-col gap-[40px]">
        <h2 className={`${text.mobileHeading2} text-dark sm:text-[60px]`}>
          <span className={` text-accent italic`}>Download</span> our apps to
          start ordering
        </h2>
        <p className={`${text.medium} text-dark`}>{paragraph}</p>
        <div className="flex flex-col gap-[20px] w-[200px] sm:w-full sm:flex-row">
          <AppStoreButton />
          <PlayMarketButton />
        </div>
      </div>
      <img
        src={MobileScreen}
        alt="screen"
        className="sm:w-[630px] md:w-[500px]"
      />
    </div>
  );
};

export default MobilaContainer;
