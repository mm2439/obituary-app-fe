import React from "react";

const ButtonBlue = ({ placeholder, color, key, onPress }) => {
  return (
    <button
      key={key}
      className="w-full rounded-[10px] shadow-custom-dark-bottom mt-4 mb-4"
    >
      <div
        onClick={onPress}
        className={`h-12 mobile:h-[50px] cursor-pointer ${
          color === "yellowBorder"
            ? "border-[#D8A800] border-[1.5px] bg-[#E7EBF0]"
            : color === "yellowBackground"
            ? "bg-gradient-to-b from-[#FFBA33] to-[#E39C11] " // Example color for yellowBackground
            : color === "redBackground"
            ? "bg-gradient-to-b from-[#F45A49] to-[#B61F0F]" // red background
            : color === "greenBackground"
            ? "bg-gradient-to-b from-[#09D6B4] to-[#03A68B]" // green background
            : "bg-gradient-to-b from-[#0D94E8] to-[#1860A3] " // blue background
        } flex justify-center items-center rounded-[10px]`}
      >
        <div
          className={`w-full mx-[2px] h-full my-[2px] text-[20px] ${
            color === "yellowBorder"
              ? "text-[#D8A800] font-medium"
              : "text-[#FFFFFF] font-normal"
          } 
            font-variation-customOpt20 mobile:font-variation-customOpt16 mobile:text-[16px]  leading-[24px] flex justify-center items-center mobile:font-normal `}
        >
          {placeholder}
        </div>
      </div>
    </button>
  );
};

export default ButtonBlue;
