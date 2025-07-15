import React from "react";
import Link from "next/link";
import Image from "next/image";

const ButtonLightGreen = ({ placeholderText, isOpen, isMobile = false }) => {
  return (
    <div
      className={`py-[2px] ${
        isMobile === true ? "my-5 px-[1px]" : " px-[2px]"
      } rounded-[10px] shadow-custom-light-dark-box-image bg-gradient-to-b from-[#0D94E8] to-[#530CC6]`}
    >
      <div className="bg-[#0A85C208] rounded-[10px]">
        <div
          className={`${
            isMobile === true ? "w-[320px]" : "w-[310px"
          } py-[15px] pl-[20px] rounded-[8px] flex flex-row justify-between items-center border-gradient-mac`}
        >
          <div
            className={`ml-[20px] h-full text-base  ${"text-[#6D778E]"} text-[16px]
            font-variation-customOpt16 font-normal leading-[24px] flex justify-center items-center`}
          >
            {placeholderText}
          </div>

          <div className="flex-1 flex justify-end">
            <Image
              src={
                isOpen === 1
                  ? "/ico_arrow_red_down.png"
                  : isOpen === 2
                  ? "/ico_back_arrow.png"
                  : "/ico_right_arrow_user.png"
              }
              alt=""
              width={24}
              height={24}
              className="mr-[15px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonLightGreen;
