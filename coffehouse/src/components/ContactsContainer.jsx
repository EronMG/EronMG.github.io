import React from "react";
import { links } from "../constants";
import text from "../styles";
import { LinkButton } from "./Buttons";
import { contact } from "../constants";

const ContactsContainer = () => {
  return (
    <div className="px-[16px] pt-[60px] pb-[64px] bg-container rounded-[40px] md:p-[100px]  md:items-center flex flex-col md:flex-row  gap-[40px] sm:px-[60px] sm:py-[100px] sm:gap-[100px]">
      <div className="flex flex-col gap-[40px] md:w-[530px]">
        <h2 className={`${text.mobileHeading2} text-light sm:text-[60px]`}>
          Sip, Savor, Smile.{" "}
          <span className={` text-accent italic`}>It’s coffee time!</span>
        </h2>
        <div className="flex gap-[12px]">
          {links.map((item) => (
            <LinkButton key={item.id}>
              <img src={item.icon} alt="link" />
            </LinkButton>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[40px] md:gap-[30px]">
        <h2 className={`${text.heading3} text-light `}>Contact us</h2>
        <div className="flex flex-col gap-[20px]">
          {contact.map((item) => (
            <div key={item.id} className="flex gap-[8px]">
              <img src={item.icon} alt="link" />
              <p className={`${text.link} text-light`}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsContainer;
