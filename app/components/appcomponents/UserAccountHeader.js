import Image from "next/image";
import React from "react";
import omr from "@/public/omr.png";
import back_icon from "@/public/back_icon.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

function UserAccountHeader({ onMenuClick, isfrom }) {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 ">
      <div className=" flex w-full justify-center">
        {/* 17 October 2024 */}
        <div
          className=" flex 
                        w-full px-[15.6px] desktop:h-[75px] tablet:h-[70px] mobile:h-[58px]
                        tablet:max-w-[764px] tablet:w-full 
                        desktop:w-[1260px] mobile:max-w-[360px] desktop:px-[18px] justify-between items-center
                        "
        >
          <div className="hidden mobile:flex">
            <div className="flex items-center ">
              <Image src={back_icon} width={30} height={32} />
              <div className="text-[14px]  text-[#3C3E41] font-variation-customOpt12 font-bold ml-2 mt-[2px] ">
                NAZAJ
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-between w-full mobile:w-auto">
            <Link href={"/"} className="flex items-center ">
              <Image
                src={omr}
                alt="App Logo"
                className="box-border h-[21px] w-[166.76px] mobile:h-[18px] mobile:w-[150px]  "
              />
            </Link>

            <div
              className=" flex flex-col mobile:hidden items-center cursor-pointer "
              onClick={onMenuClick}
            >
              <Image
                src={"/icon_menu_black.png"}
                width={32}
                height={25}
                className="w-[32px] h-[25px] mobile:w-[30px] mobile:h-[22px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default UserAccountHeader;
