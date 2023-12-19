import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import text from "../styles";
import "../index.css";
import { CloseButton } from "./Buttons";
import empty from "../assets/info-empty.svg";

const ModalCofee = React.memo(
  ({ isOpen, onRequestClose, label, title, cost, name, image }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedAdding, setSelectedAdding] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(0);

    const handleButtonClick = useCallback((size) => {
      setSelectedSize(size);
    }, []);

    const handleButtonAdding = useCallback(
      (size, price) => {
        setSelectedAdding((prevAdding) => {
          if (prevAdding.includes(size)) {
            return prevAdding.filter((item) => item !== size);
          } else {
            return [...prevAdding, size];
          }
        });
        setSelectedPrice((prevPrice) =>
          Math.max(
            0,
            prevPrice + (selectedAdding.includes(size) ? -price : price)
          )
        );
      },
      [selectedAdding]
    );

    const renderSizeButton = useCallback(
      (size, label) => (
        <button
          className={`pl-[8px] pr-[16px] py-[7px] rounded-[100px] ${
            selectedSize === size
              ? "bg-container border-[1px] border-container"
              : "bg-none border-[1px] "
          }${
            text.link
          } flex justify-center items-center gap-[8px] border-brdlight`}
          onClick={() => handleButtonClick(size)}
        >
          <div
            className={`w-[30px] h-[30px] rounded-[100px] ${
              selectedSize === size ? "bg-body text-dark" : "bg-brdlight"
            } flex items-center justify-center `}
          >
            {size}
          </div>
          <p
            className={`${selectedSize === size ? "text-light" : "text-dark"}`}
          >{`${label} ${name === "Dessert" ? "g" : "ml"}`}</p>
        </button>
      ),
      [selectedSize, handleButtonClick, name]
    );

    const renderNumberButton = useCallback(
      (size, label, price) => (
        <button
          className={`pl-[8px] pr-[16px] py-[7px] rounded-[100px] ${
            selectedAdding.includes(size)
              ? "bg-container border-[1px] border-container "
              : "bg-none border-[1px] "
          }${
            text.link
          } flex justify-center items-center gap-[8px] border-brdlight`}
          onClick={() => handleButtonAdding(size, parseFloat(price))}
        >
          <div
            className={`w-[30px] h-[30px] rounded-[100px] ${
              selectedAdding.includes(size)
                ? "bg-body text-dark"
                : "bg-brdlight"
            } flex items-center justify-center `}
          >
            {size}
          </div>
          <p
            className={`${
              selectedAdding.includes(size) ? "text-light" : "text-dark"
            }`}
          >{`${label} `}</p>
        </button>
      ),
      [selectedAdding, handleButtonAdding]
    );

    const Coffe = useCallback(
      () => (
        <div className="flex flex-col gap-[8px]">
          <p className={`${text.medium} text-dark`}>Size</p>
          <div className={`flex flex-col gap-[8px] md:flex-row`}>
            <div className="flex gap-[8px]">
              {renderSizeButton("S", name === "Dessert" ? "50" : "200")}
              {renderSizeButton("M", name === "Dessert" ? "100" : "300")}
            </div>
            <div>
              {" "}
              {renderSizeButton("L", name === "Dessert" ? "200" : "400")}
            </div>
          </div>
        </div>
      ),
      [renderSizeButton, name]
    );

    const Adding = useCallback(
      () => (
        <div className="flex flex-col gap-[8px]">
          <p className={`${text.medium} text-dark`}>Additives</p>
          <div className={`flex flex-col gap-[8px] md:flex-row`}>
            <div className="flex gap-[8px]">
              {renderNumberButton(
                "1",
                name === "Dessert" ? "Berries" : "Sugar",
                0.5
              )}
              {renderNumberButton(
                "2",
                name === "Tea"
                  ? "Lemon"
                  : name === "Coffee"
                  ? "Cinnamon"
                  : "Nuts",
                0.75
              )}
            </div>
            <div>
              {" "}
              {renderNumberButton(
                "3",
                name === "Dessert" ? "Jam" : "Syrup",
                0.5
              )}
            </div>
          </div>
        </div>
      ),
      [renderNumberButton, name]
    );
    return (
      <Modal
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-body p-4 rounded-[40px] shadow-md w-[342px] sm:w-fit flex flex-row sm:gap-[20px] outline-none"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 flex justify-center items-center"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <div className="overflow-hidden rounded-[40px] min-w-[310px] h-[310px] hidden sm:block">
          {" "}
          <img
            src={image}
            alt=""
            className=" rounded-[40px]  object-cover scale-[110%] hover:scale-[100%] transition-all duration-500"
          />
        </div>
        <div className="flex flex-col gap-[20px] sm:w-[326px] md:w-[428px] ">
          <div className="flex flex-col gap-[12px]">
            <h2 className={`${text.heading3} text-dark`}>{label}</h2>
            <p className={`${text.medium} text-dark`}>{title}</p>
          </div>

          <Coffe />
          <Adding />
          <div className="flex justify-between">
            <p className={`${text.heading3} text-dark`}>Total:</p>
            <span className={`${text.heading3} text-dark`}>
              {selectedSize === "S"
                ? `$${(cost + selectedPrice).toFixed(2)}`
                : selectedSize === "M"
                ? `$${(8.5 + selectedPrice).toFixed(2)}`
                : selectedSize === "L"
                ? `$${(10.0 + selectedPrice).toFixed(2)}`
                : "$0.00"}
            </span>
          </div>
          <div className="py-[10px]  border-t-[1px] border-brdlight flex gap-[8px] items-start">
            <img src={empty} alt="" />
            <p className={`${text.caption} text-dark`}>
              The cost is not final. Download our mobile app to see the final
              price and place your order. Earn loyalty points and enjoy your
              favorite coffee with up to 20% discount.
            </p>
          </div>
          <CloseButton
            label={`Close`}
            className={`${text.link} text-dark border-[1px] border-brddark rounded-[100px] py-[9px] hover:bg-container hover:text-body transition duration-500 ease-in-out`}
            onClick={onRequestClose}
          />
        </div>
      </Modal>
    );
  }
);

export default ModalCofee;
