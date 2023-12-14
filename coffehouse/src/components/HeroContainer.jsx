import React from "react";
import text from "../styles";
import Menu from "./Buttons";
const HeroContainer = ({ className }) => {
  return (
    <div className={className}>
      <h1 className={`${text.mobileHeading1} text-light`}>
        <span className="text-accent">Enjoy</span> premium coffee at our
        charming cafe
      </h1>
      <p className={`${text.medium} text-light`}>
        With its inviting atmosphere and delicious coffee options, the Coffee
        House Resource is a popular destination for coffee lovers and those
        seeking a warm and inviting space to enjoy their favorite beverage.
      </p>
      <Menu />
    </div>
  );
};

export default HeroContainer;
