import React, { useState } from "react";
import NavLinks from "./NavLinks";
import logo from "../assets/logo.svg";
import burger from "../assets/button-icon-burger.svg";
import Menu from "./Menu";
import close from "../assets/close.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [brg, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger((prev) => !prev);
  };

  return (
    <div className="px-[16px] flex h-[80px] items-center pt-[20px] justify-between sm:px-[40px]">
      <Link to={`/`}>
        {" "}
        <img src={logo} alt="logo" />
      </Link>
      <NavLinks className={"md:flex gap-[40px] justify-center hidden"} />
      <Menu className={`md:flex gap-[8px] relative group hidden`} />
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={brg ? close : burger}
          alt="menu"
          className="object-contain"
          onClick={handleBurger}
        />
        <div
          className={`${
            brg ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } transition-opacity  duration-500 p-6 bg-body absolute top-20 right-0  my-2 min-w-[140px] rounded-xl sidebar z-50 flex flex-col gap-[100px] transform origin-top-right`}
        >
          <NavLinks className={`flex flex-col flex-1 gap-[10px]`} />
          <Menu className={`flex relative group w-[65px] `} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
