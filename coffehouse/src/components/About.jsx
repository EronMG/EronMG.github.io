import React from "react";

const About = ({ className, children }) => {
  return (
    <div className={className} id="about">
      {children}
    </div>
  );
};

export default About;
