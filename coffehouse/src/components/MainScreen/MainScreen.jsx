import React from "react";
import About from "../About";
import AboutContainer from "../AboutContainer";
import Contacts from "../Contacts";
import ContactsContainer from "../ContactsContainer";
import Hero from "../Hero";
import HeroContainer from "../HeroContainer";
import Mobila from "../Mobila";
import MobilaContainer from "../MobilaContainer";
import Nav from "../Nav";
import Slider from "../Slider";
import SliderContainer from "../SliderContainer";

const MainScreen = () => {
  return (
    <>
      <Nav />
      <Hero>
        <HeroContainer className={`video mx-[16px] sm:mx-[40px] md:mx-[0]`} />
      </Hero>
      <Slider className={`px-[16px] mt-[101px]`}>
        <SliderContainer className={`flex flex-col gap-[40px]`} />
      </Slider>
      <About className={`px-[16px] mt-[100px] sm:px-[40px]`}>
        <AboutContainer />
      </About>
      <Mobila className={`px-[16px] mt-[101px] sm:px-[40px]`}>
        <MobilaContainer
          paragraph={`Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are`}
        />
      </Mobila>
      <Contacts className={`px-[15px] mt-[101px] sm:px-[40px] mb-[40px]`}>
        <ContactsContainer />
      </Contacts>
    </>
  );
};

export default MainScreen;
