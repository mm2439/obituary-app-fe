import React from "react";
import Link from "next/link";
import Image from "next/image";

const ButtonWhiteBG = ({
  placeholderImg,
  placeholderText,
  isOpen,
  pendingConfirmations,
  arrow,
}) => {
  return (
    <div className="py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image bg-gradient-to-b from-[rgba(13,148,232,0.05)] to-[rgba(24,100,163,0.05)]">
      <div className=" py-[14px] rounded-[8px] bg-[#FFFFFF] bg-opacity-80 flex flex-row items-center">
        {/* <div className=" bg-[#EB1D1D] rounded-full h-[24px] w-[24px] ml-[15px] flex justify-center items-center">
            <div className=" text-[15px] leading-[21px]  font-[700px] font-sourcesans">
              2
            </div>
          </div> */}

        {placeholderImg === "" ? (
          <div
            className={`rounded-full h-[24px] w-[24px] ml-[15px] flex justify-center items-center ${
              pendingConfirmations === 0 ? "bg-none" : "bg-[#EB1D1D]"
            }`}
          >
            {/* 17 October 2024 */}
            <div className="text-[15px] text-[#FFFFFF] leading-[21px] font-[700px] font-sourcesans">
              {pendingConfirmations}
            </div>
          </div>
        ) : (
          <div className="ml-[15px]">
            <Image src={placeholderImg} alt="" width={24} height={24} />
          </div>
        )}

        <div
          className={`ml-[20px] h-full text-base  ${
            isOpen === 2 || placeholderText === "NAZAJ NA SPLETNO STRAN"
              ? "text-[#EB1D1D]"
              : "text-[#6D778E]"
          } text-[16px]
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
            className={`mr-[15px]`}
          />
        </div>
      </div>
    </div>
  );
};

const ButtonWhiteBGCap = ({
  placeholderImg,
  placeholderText,
  isOpen,
  pendingConfirmations,
  arrow,
}) => {
  return (
    <div className="py-[2px] px-[2px] rounded-[10px]  shadow-[5px_5px_10px_rgba(194,194,194,0.5)] bg-gradient-to-b from-[rgba(13,148,232,0.05)] to-[rgba(24,100,163,0.05)]">
      <div className=" py-[14px] rounded-[8px] bg-[#FFFFFF] bg-opacity-80 flex flex-row items-center">
        {/* <div className=" bg-[#EB1D1D] rounded-full h-[24px] w-[24px] ml-[15px] flex justify-center items-center">
            <div className=" text-[15px] leading-[21px]  font-[700px] font-sourcesans">
              2
            </div>
          </div> */}

        {placeholderImg === "" ? (
          <div
            className={`rounded-full h-[24px] w-[24px] ml-[15px] flex justify-center items-center ${
              pendingConfirmations === 0 ? "bg-none" : "bg-[#EB1D1D]"
            }`}
          >
            {/* 17 October 2024 */}
            <div className="text-[15px] text-[#FFFFFF] leading-[21px] font-[700px] font-sourcesans">
              {pendingConfirmations}
            </div>
          </div>
        ) : (
          <div className="ml-[15px]">
            <Image src={placeholderImg} alt="" width={24} height={24} />
          </div>
        )}

        <div
          className={`ml-[20px] h-full text-base  ${
            isOpen === 2 || placeholderText === "NAZAJ NA SPLETNO STRAN"
              ? "text-[#EB1D1D]"
              : "text-[#6D778E]"
          } text-[16px]
            font-variation-customOpt16 font-normal leading-[24px] flex justify-center items-center`}
        >
          <span className="text-[#0A85C2] font-bold">{placeholderText.slice(0, 1)}</span>
          {placeholderText.slice(1)}
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
            className={`mr-[15px]`}
          />
        </div>
      </div>
    </div>
  );
};
export default ButtonWhiteBG;
export { ButtonWhiteBGCap };
