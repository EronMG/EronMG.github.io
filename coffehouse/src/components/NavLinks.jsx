import React from "react";
import nav from "../constants/index";
import text from "../styles";
import { Link } from "react-router-dom";

const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLinks = ({ className }) => {
  const handleClick = (item) => {
    if (item && item.id !== undefined) {
      if (item.id === 3) {
        scrollToSection("contacts");
      } else if (item.id === 2) {
        scrollToSection("mobile");
      } else if (item.id === 1) {
        scrollToSection("about");
      } else if (item.id === 0) {
        scrollToSection("favourite");
      }
    }
  };

  return (
    <div className={className}>
      {nav.map((navItem) => (
        <Link
          to="/"
          key={navItem.id}
          className={`relative inline-block text-dark ${text.link} group w-fit`}
          onClick={() => handleClick(navItem)}
        >
          {navItem.name}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-black w-0 transition-all duration-500 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
