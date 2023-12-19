import React from "react";
import text from "../styles";
import cup from "../assets/coffee-cup.svg";
import { Link } from "react-router-dom";
const Menu = ({ className }) => {
  return (
    <div className={className}>
      <Link to={`/menu`} className="flex relative group w-[65px] gap-[8px]">
        <p className={`${text.link} text-dark`}>Menu</p>{" "}
        <img src={cup} alt="cup" className="h-[20px] object-cover" />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-black w-0 transition-all duration-500 group-hover:w-full"></span>
      </Link>
    </div>
  );
};

export default Menu;
