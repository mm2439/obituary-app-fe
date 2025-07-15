import React from "react";
import Link from "next/link";
import strings from "../../strings";
import Image from "next/image";

const ButtonGreen = ({ placeholder,bg }) => {
  return (
    <div className="w-[100%] rounded-[10px] shadow-custom-dark-bottom">
      <div
        className={`h-[60px] w-full ${bg} flex justify-center items-center rounded-[8px]`}
      >
        <div
          className=" text-[20px]  text-[#FFFFFF]
            font-variation-customOpt20 font-semibold leading-[24px] "
        >
          {placeholder}
        </div>
      </div>
    </div>
  );
};

export default ButtonGreen;
