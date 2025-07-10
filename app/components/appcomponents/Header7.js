import Image from "next/image";
import React from "react";
import iconMenu from "@/public/icon_menu_black.png";
import back_icon from "@/public/back_icon.png";
import telephone_icon from "@/public/telephone_icon.png";

function ObituaryHeader({ from, data }) {
  return (
    <header
      key={data?.id}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 "
    >
      <div className=" flex w-full justify-center">
        <div
          className=" flex 
                    w-full h-[72px] px-[10.6px]
                    tablet:w-full tablet:h-[80px] tablet:px-4
                    desktop:w-[1200px] desktop:h-[92.02px] desktop:px-[18px]
                    "
        >
          <div
            className="
                    flex justify-between items-center
                    w-full h-full 
                     "
          >
            <div className="flex items-center h-full">
              <div className="flex flex-col">
                <Image
                  src={back_icon}
                  className="
                  h-[38.81px] w-[39.22px] desktop:h-[48px] desktop:w-[44.82px]  
                   "
                />
                <div
                  className="flex items-center
                h-[17.56px] mt-[7.39px]
                 desktop:h-[19px] desktop:mt-2 desktop:ml-[1px] "
                >
                  <div className="mobile:text-[14px] text-[16px] text-[#3C3E41] mobile:font-variation-customOpt12 font-variation-customOpt16 font-bold ">
                    NAZAJ
                  </div>
                </div>
              </div>

              <div className="mobile:hidden flex items-center h-[53px] ml-[20px] desktop:ml-[49px] desktop:pr-[10px] ">
                <h
                  className="text-[#414141] 
                tablet:text-[28px] tablet:font-variation-customOpt28 tablet:font-normal
                desktop:text-[32px] desktop:font-variation-customOpt32wght500"
                >
                  {from === 7
                    ? `${data?.heading || "Cvetličarna Suniflower"}`
                    : `${data?.heading || "Pogrebni zavod"}`}
                </h>
              </div>
              <div className="flex h-[50px] flex-col tablet:hidden desktop:hidden ml-[22px] pl-[2px]">
                <h className="text-[#414141] text-[20px] font-variation-customOpt20 font-normal">
                  {from === 7
                    ? `${data?.heading || "Cvetličarna Suniflower"}`
                    : `${data?.heading || "Pogrebni zavod"}`}
                </h>
                {/* <h className="text-[#939393] text-[16px] font-variation-customOpt20 font-normal">
                  {from === 7 ? "Milano" : "Rome"}
                </h> */}
              </div>
              <div
                className="mobile:hidden  flex   ml-4 tablet:ml-6 h-[52px] w-[52px] tablet:justify-center desktop:h-[48px] desktop:w-[200px] items-center
               bg-[#72C6DD10] border-2 border-[#0A85C2] desktop:pl-[25.5px] rounded-lg shadow-custom-light-dark "
              >
                <Image src={telephone_icon} className=" h-[27px] w-[27px] " />
                <p className="hidden desktop:flex text-[#1E2125] font-normal text-[20px] ml-[12.5px] ">
                  {data?.phone || "1231391093"}
                </p>
              </div>
            </div>
            <div className="mobile:hidden flex">
              <Image
                src={iconMenu}
                className="
                  h-5 w-6 tablet:h-[26.67px] tablet:w-[32px] desktop:h-[26.67px] desktop:w-[30.73px] 
                   "
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ObituaryHeader;
