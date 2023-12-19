import React, { useCallback, useEffect, useState } from "react";
import text from "../styles";
import { tea, coffe, dessert } from "../constants";
import { RefreshButton } from "./Buttons";
import ModalCofee from "./ModalCofee";

const MenuItem = ({ icon, label, active, onClick }) => (
  <button
    className={`pl-[8px] pr-[16px] py-[8px] rounded-[100px] ${
      active
        ? "bg-container text-light"
        : "bg-none border-[1px] border-brdlight"
    } ${
      text.link
    } flex justify-center items-center gap-[8px] hover:text-body hover:bg-container transition ease-in-out duration-500`}
    onClick={onClick}
  >
    <div
      className={`w-[30px] h-[30px] rounded-[100px] ${
        active ? "bg-body" : "bg-brdlight"
      } flex items-center justify-center`}
    >
      {icon}
    </div>
    <p>{label}</p>
  </button>
);

const MenuCoffeContainer = ({ className }) => {
  const [selectedItem, setSelectedItem] = useState({});
  const [active, setActive] = useState("Coffee");
  const [number, setNumber] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const categories = { Coffee: coffe, Tea: tea, Dessert: dessert };
  const activeItems = categories[active] || [];

  const handleItemClick = (category) => setActive(category);

  const handleRefresh = () => setNumber((prevNumber) => !prevNumber);

  function openModal(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const checkScreenWidth = useCallback(() => {
    setIsWideScreen(window.innerWidth > 767);
  }, []);

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [checkScreenWidth]);

  return (
    <div className={className}>
      <h2
        className={`${text.mobileHeading2} text-dark text-center sm:text-[60px] sm:w-[688px] md:w-[800px]`}
      >
        Behind each of our cups hides an{" "}
        <span className="text-accent italic">amazing surprise</span>
      </h2>
      <div className="flex gap-[8px]">
        {["Coffee", "Tea", "Dessert"].map((category) => (
          <MenuItem
            key={category}
            label={category}
            icon={
              category === "Coffee" ? "☕" : category === "Tea" ? "🫖" : "🍰"
            }
            active={active === category}
            onClick={() => handleItemClick(category)}
          />
        ))}
      </div>
      <div className="px-[20px] flex flex-wrap gap-[40px] justify-center">
        {isWideScreen
          ? activeItems.map((item) => (
              <>
                <div
                  onClick={() => openModal(item)}
                  key={item.id}
                  className="flex flex-col border-[1px] border-brdlight rounded-[40px] h-[506px] w-[310px]"
                >
                  <div className="overflow-hidden rounded-[40px]">
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-[40px] object-cover scale-[110%] hover:scale-[100%] transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-between items-between p-[20px] flex-auto">
                    <div className="flex flex-col gap-[12px]">
                      <h2 className={`${text.heading3} text-dark`}>
                        {item.name}
                      </h2>
                      <p className={`${text.medium} text-dark`}>{item.title}</p>
                    </div>
                    <span className={`${text.heading3} text-dark`}>
                      {`$${item.cost.toFixed(2)}`}
                    </span>
                  </div>
                </div>
                <ModalCofee
                  onRequestClose={closeModal}
                  isOpen={modalIsOpen}
                  label={selectedItem.name}
                  title={selectedItem.title}
                  cost={selectedItem.cost}
                  name={active}
                  image={selectedItem.img}
                />
              </>
            ))
          : (number ? activeItems.slice(4) : activeItems.slice(0, 4)).map(
              (item) => (
                <>
                  <div
                    onClick={() => openModal(item)}
                    key={item.id}
                    className="flex flex-col border-[1px] border-brdlight rounded-[40px] h-[506px] w-[310px]"
                  >
                    <div className="overflow-hidden rounded-[40px]">
                      <img
                        src={item.img}
                        alt=""
                        className="rounded-[40px] object-cover scale-[110%] hover:scale-[100%] transition-all duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-between items-between p-[20px] flex-auto">
                      <div className="flex flex-col gap-[12px]">
                        <h2 className={`${text.heading3} text-dark`}>
                          {item.name}
                        </h2>
                        <p className={`${text.medium} text-dark`}>
                          {item.title}
                        </p>
                      </div>
                      <span className={`${text.heading3} text-dark`}>
                        {`$${item.cost}`}
                      </span>
                    </div>
                  </div>
                  <ModalCofee
                    onRequestClose={closeModal}
                    isOpen={modalIsOpen}
                    label={selectedItem.name}
                    title={selectedItem.title}
                    cost={selectedItem.cost}
                    name={active}
                  />
                </>
              )
            )}
      </div>
      <RefreshButton
        className={`justify-center items-center w-[60px] h-[60px] rounded-[100px] border-[1px] border-brddark ${
          active === "Tea" ? "hidden" : "flex"
        } sm:hidden`}
        onClick={handleRefresh}
      />
    </div>
  );
};

export default MenuCoffeContainer;
