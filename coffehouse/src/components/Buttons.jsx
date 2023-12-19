import cup from "../assets/coffee-cup.svg";
import text from "../styles";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
const Menu = () => {
  return (
    <button
      className={`${text.link} text-dark bg-body py-[20px] flex flex-row gap-[8px] rounded-[100px] justify-center items-center w-[200px]`}
    >
      Menu <img src={cup} alt="cup" className="md:hidden" />
    </button>
  );
};

export const AppStoreButton = () => {
  return (
    <button className="flex gap-[8px] border-[1px] border-brddark rounded-[100px] py-[11.5px] px-[20px] sm:w-[200px] hover:text-body hover:bg-container  transition duration-500 ease-in-out">
      <FaApple className="text-[36px] " />
      <div className="flex flex-col">
        <p className={`${text.caption}`}>Available on the</p>
        <p className={`${text.link}`}>App Store</p>
      </div>
    </button>
  );
};

export const PlayMarketButton = () => {
  return (
    <button className="flex gap-[8px] border-[1px] border-brddark rounded-[100px] py-[11.5px] px-[20px] sm:w-[200px] hover:text-body hover:bg-container  transition duration-500 ease-in-out">
      <IoLogoGooglePlaystore className="text-[36px]" />
      <div className="flex flex-col">
        <p className={`${text.caption} w-fit`}>Available on</p>
        <p className={`${text.link}`}>Google Play</p>
      </div>
    </button>
  );
};

export const LinkButton = ({ children }) => {
  return (
    <button className="border-[1px] border-brdlight p-[17px] rounded-[100px] transition-opacity opacity-60 hover:opacity-100 duration-500 ">
      {children}
    </button>
  );
};

export const NextButton = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const CoffeeButton = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const TeaButton = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const DessertButton = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const RefreshButton = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8"
          stroke="#403F3D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3"
          stroke="#403F3D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export const CloseButton = ({ className, label, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Menu;
