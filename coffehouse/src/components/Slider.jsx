import React from "react";

const Slider = ({ className, children, slider }) => {
  return (
    <div className={className} id="favourite">
      {children}
    </div>
  );
};

export default Slider;
