import cup from "../assets/coffee-cup.svg";
import text from "../styles";
const Menu = () => {
  return (
    <button className={`${text.link} text-dark bg-`}>
      Menu <img src={cup} alt="cup" />
    </button>
  );
};
export default Menu;
