import React from "react";
import Link from "next/link";
import strings from "../../strings";

const ButtonBlueBorder = ({ placeholder, onClick }) => {
  return (
    <div className="w-[100%]  shadow-custom-dark-bottom rounded-[10px] ">
      <div className="h-[60px] w-[100%] bg-gradient-to-b from-[#0A85C2] to-[#123597] flex justify-center items-center rounded-[10px] p-[2px]">
        <div
          className="h-[56px] w-[100%]  bg-[#E7EBF0] text-[20px] text-[#414B5A] cursor-pointer
            font-variation-customOpt20 font-semibold leading-[24px] flex justify-center items-center rounded-[8px]"
          onClick={onClick}
        >
          {placeholder} {/* {strings.Objavi} */}
        </div>
      </div>
    </div>
  );
};

export default ButtonBlueBorder;
