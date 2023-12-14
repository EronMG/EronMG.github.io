import React from "react";
const Hero = ({ children }) => {
  return (
    <div className="bg w-[348px] rounded-[40px] overflow-hidden">
      {children}
    </div>
  );
};

export default Hero;
