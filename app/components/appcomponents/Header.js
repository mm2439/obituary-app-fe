import Image from "next/image";
import React, { useState } from "react";
import iconMenu from "@/public/icon_menu_black.png";
import omr from "@/public/omr.png";
import Link from "next/link";

function Header({ onMenuCLick, from, isMegaMenuVisible }) {
  const [showCloseButton, setShowCloseButton] = useState(false);
  return (
    <header className="flex flex-col fixed top-[45px] left-0 right-0 shadow-md z-50 pt-[1px] bg-[#FFFFFF]">
      <div className=" flex w-full justify-center">
        <div
          className={`
        desktop:h-[92.02px] mobile:h-[72px] tablet:h-[79px]
        w-full  desktop:w-[1200px]
        desktop:pl-[23px] ${isMegaMenuVisible && from === "1" ? "tablet:max-w-[700px] tablet:w-full mobile:max-w-[400px] mobile:w-full" : "" } desktop:pr-[27px] tablet:pl-[23px]  tablet:pr-[27px] mobile:px-[24px]
        `}
        >
          <div className="mobile:h-[72px] tablet:h-[79px] desktop:h-[92.02px] w-full desktop:w-[1150px] flex justify-between items-center ">
            <Link href={"/"} className="flex justify-start items-center">
              <Image
                src={omr}
                alt="App Logo"
                width={500}
                height={500}
                className="box-border h-[22px] w-[182.76px] desktop:w-[255.31px] desktop:h-[32px]"
              />
            </Link>
            {/* <Link href={"/loginpage"}> */}
            <button
              className=" rounded-full hover:bg-gray-100 active:bg-gray-200  transition duration-200 ease-in-out cursor-pointer transform-gpu active:scale-95"
              onClick={() => {
                setShowCloseButton(!showCloseButton);
                onMenuCLick();
              }}
            >
              {showCloseButton === false && (
                <Image
                  src={iconMenu}
                  className="
              h-5 w-6 tablet:h-8 tablet:w-8 desktop:h-8 desktop:w-8 
              "
                />
              )}

              {showCloseButton === true && (
                <Image
                  src={"/cancle_icon.png"}
                  className=""
                  width={40}
                  height={40}
                />
              )}
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
