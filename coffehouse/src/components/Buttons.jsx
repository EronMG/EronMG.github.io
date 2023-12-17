import cup from "../assets/coffee-cup.svg";
import text from "../styles";
import AppleStore from "../assets/AppStore.svg";
import PlayMarket from "../assets/PlayMarket.svg";
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
    <button className="flex gap-[8px] border-[1px] border-brddark rounded-[100px] py-[11.5px] px-[20px] sm:w-[200px]">
      <img src={AppleStore} alt="appStore" />
      <div className="flex flex-col">
        <p className={`${text.caption}`}>Available on the</p>
        <p className={`${text.link}`}>App Store</p>
      </div>
    </button>
  );
};

export const PlayMarketButton = () => {
  return (
    <button className="flex gap-[8px] border-[1px] border-brddark rounded-[100px] py-[11.5px] px-[20px] sm:w-[200px]">
      <img src={PlayMarket} alt="appStore" />
      <div className="flex flex-col">
        <p className={`${text.caption} w-fit`}>Available on</p>
        <p className={`${text.link}`}>Google Play</p>
      </div>
    </button>
  );
};

export const LinkButton = ({ children }) => {
  return (
    <button className="border-[1px] border-brdlight p-[17px] rounded-[100px]">
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

export default Menu;
