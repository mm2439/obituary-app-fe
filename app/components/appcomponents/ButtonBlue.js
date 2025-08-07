import React from "react";
import Link from "next/link";
import strings from "../../strings";
import Image from "next/image";

const ButtonBlue = ({ placeholder, isFor = "" }) => {
  // 23 October 2024 - {`${isFor === "Moj Račun" ? "desktopUserAcc:w-full" : " w-[250px] mobile:w-[200px]"} rounded-[10px] shadow-custom-dark-bottom`}>
  return (
    <div
      className={`${
        isFor === "Moj Račun"
          ? "desktopUserAcc:w-full"
          : " w-[250px] mobile:w-[200px]"
      } rounded-[10px] shadow-custom-dark-bottom`}
    >
      <label
        htmlFor={isFor}
        className="h-[50px] bg-gradient-to-b from-[#0D94E8] to-[#0A85C2] border-[1px] border-[#FFFFFF40] 
        flex justify-center items-center rounded-[10px]"
      >
        <div
          className="w-full mx-[2px] h-full my-[2px] text-base  text-[#FFFFFF]
            font-variation-customOpt16 font-normal leading-[24px] flex justify-center items-center "
        >
          {placeholder}
        </div>
      </label>
    </div>
  );
};

export default ButtonBlue;
