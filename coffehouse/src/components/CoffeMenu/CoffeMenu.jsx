import React from "react";
import Nav from "../Nav";
import MenuCoffeContainer from "../MenuCoffeContainer";
import MenuCoffe from "../MenuCoffe";
import Contacts from "../Contacts";
import ContactsContainer from "../ContactsContainer";
const CoffeMenu = () => {
  return (
    <>
      <Nav></Nav>
      <MenuCoffe>
        <MenuCoffeContainer
          className={`px-[16px] flex flex-col gap-[40px] items-center`}
        />
      </MenuCoffe>
      <Contacts className={`px-[15px] mt-[101px] sm:px-[40px] mb-[40px]`}>
        <ContactsContainer />
      </Contacts>
    </>
  );
};

export default CoffeMenu;
