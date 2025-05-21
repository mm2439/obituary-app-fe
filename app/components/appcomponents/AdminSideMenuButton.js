import React from "react";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";

const AdminSideMenuButton = ({
  isFrom,
  placeholderImg,
  placeholderText,
  pageName = "",
  isSelectedButton,
}) => {
  return (
    <Link
      href={pageName}
      className={`w-[192px] flex justify-start items-center cursor-pointer rounded-[4px] ${
        placeholderText == "Logout"
          ? "border-[0px]"
          : "border-[2px] border-[#1860A315] shadow-custom-light-dark-box-image"
      } 
      ${
        placeholderText === "Financials" || placeholderText == "Settings"
          ? "mt-[60px]"
          : ""
      }
      `}
    >
      <div
        className={`h-[48px] ${
          placeholderText === "Logout"
            ? "bg-transparent border-[0px] "
            : isSelectedButton
            ? "bg-gradient-to-b from-[#0D94E8] to-[#1860A3] border-[1px] border-[#FFFFFF40] w-full"
            : "bg-[#FFFFFF80] border-[1px] border-[#FFFFFF40] w-full"
        } 
  flex justify-start items-center rounded-[4px]`}
      >
        <div className="ml-[15px]">
          <Image src={placeholderImg} alt="" width={20} height={20} />
        </div>

        <div
          className={`ml-[8px] h-full my-[2px] text-base  ${
            placeholderText === "Logout"
              ? "text-[#6D778E]"
              : isSelectedButton
              ? "text-[#FFFFFF]"
              : "text-[#6D778E]"
          } font-variation-customOpt16 font-normal leading-[19px] text-[16px] flex justify-center items-center`}
        >
          {placeholderText}
        </div>
        {placeholderText === "Notifications" && (
          <div className="flex-1 flex flex-row justify-end">
            <div className="bg-[#EB1D1D] rounded-full h-[24px] w-[24px] mr-[15px] flex justify-center items-center">
              <div className="text-[15px] leading-[21px] font-[700px] font-sourcesans text-white">
                4
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default AdminSideMenuButton;
