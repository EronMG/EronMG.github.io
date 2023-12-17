import React from "react";
const Hero = ({ children }) => {
  return (
    <div className=" mt-5 md:px-10 flex justify-center items-center ">
      {children}
    </div>
  );
};

export default Hero;
