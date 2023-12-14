import React from "react";
import NavLinks from "./NavLinks";
import logo from "../assets/logo.svg";
import burger from "../assets/button-icon-burger.svg";
import Menu from "./Menu";
const Nav = () => {
  return (
    <div className="px-[16px] flex h-[80px] items-center pt-[20px] justify-between">
      <img src={logo} alt="logo" />
      <div className="hidden md:flex">
        <NavLinks className={"flex gap-[40px] justify-center w-[1188px]"} />
        <Menu />
      </div>
      <div className="flex">
        <img src={burger} alt="burger" />
      </div>
    </div>
  );
};

export default Nav;
