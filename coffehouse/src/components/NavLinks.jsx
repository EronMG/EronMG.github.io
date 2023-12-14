import React from "react";
import nav from "../constants/index";
import text from "../styles";
const NavLinks = ({ className }) => {
  return (
    <div className={className}>
      {nav.map((item) => (
        <p
          key={item.id}
          className={`relative inline-block text-dark ${text.link} group`}
        >
          {item.name}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-black w-0 transition-all duration-500 group-hover:w-full"></span>
        </p>
      ))}
    </div>
  );
};

export default NavLinks;
