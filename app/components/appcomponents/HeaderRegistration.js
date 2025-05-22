import Image from "next/image";
import React from "react";
import iconMenu from "@/public/icon_menu_black.png";
import omr from "@/public/omr.png";
import Link from "next/link";
import back_icon from "@/public/back_icon.png";
import { useRouter } from "next/navigation";

function HeaderRegistration({ onMenuClick, isfrom }) {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
      <div className=" flex w-full justify-center">
        <div
          className={`flex w-full ${
            isfrom === "ObituaryForm" ? "tablet:h-[92px]" : " tablet:h-[80px]"
          } h-[72px] px-[10.6px] tablet:w-full ObituaryForm tablet:px-4 desktop:w-[1200px] desktop:h-[92.02px] desktop:px-[18px] justify-between items-center`}
        >
          <Link href={"/"} className="flex items-center">
            <Image
              src={omr}
              alt="App Logo"
              width={500}
              height={500}
              className="box-border h-[22px] w-[182.76px] desktop:w-[255.31px] desktop:h-[32px] "
            />
          </Link>

          <div
            onClick={() => router.back()}
            className="flex flex-col items-center cursor-pointer "
          >
            {/* 20 September 2024 height and width for image was asking and implemented check from useraccount with isfrom */}
            <Image
              src={
                isfrom === "useraccount" ? "/icon_menu_black.png" : back_icon
              }
              className="
                  h-[31.81px] w-[31.22px] desktop:h-[31px] desktop:w-[31.82px]     
                   "
              width={31}
              height={31}
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
        </div>
      </div>
    </header>
  );
}

export default HeaderRegistration;
