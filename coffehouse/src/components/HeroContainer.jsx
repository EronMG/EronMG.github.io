import React from "react";
import HeroContainerInf from "./HeroContainerInf";
import Video from "../assets/VideoCoffe.mp4";
const HeroContainer = ({ className }) => {
  return (
    <div className={className}>
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <HeroContainerInf />
    </div>
  );
};

export default HeroContainer;
