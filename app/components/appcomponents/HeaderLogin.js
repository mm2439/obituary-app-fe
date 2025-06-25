import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import logo from "@/public/app_logo.png";
import iconMenu from "@/public/icon_menu_black.png";
import iconUser from "@/public/icon_user_black.png";
import omr from "@/public/omr.png";
import Link from "next/link";

function ObituaryHeader({ from }) {
  return (
    // <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
    <header
      className={`fixed ${
        from == "2" ? "top-[45px]" : "top-0"
      } left-0 right-0 bg-white shadow-md z-50`}
    >
      <div className=" flex w-full justify-center">
        <div
          className=" flex 
                    w-full h-[72px] px-6
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
            {from == "2" ? null : (
              <div className="flex tablet:hidden desktop:hidden">
                <Image src={iconUser} className="h-6 w-6" />
              </div>
            )}
            <Link href={"/"} className="flex tablet:hidden desktop:hidden">
              <Image
                src={logo}
                alt="App Logo"
                width={500}
                height={500}
                className="box-border h-[22px] w-[182.76px] mobile:h-[22.19px] mobile:w-[180.17px]"
              />
            </Link>
            <Link href={"/"} className="hidden tablet:flex desktop:flex">
              <Image
                src={omr}
                alt="App Logo"
                width={500}
                height={500}
                className="box-border h-[22px] w-[182.76px] desktop:w-[255.31px] desktop:h-[32px] "
              />
            </Link>
            <div className="flex">
              <div className="hidden tablet:flex desktop:flex tablet:mr-[30px] desktop:mr-[60px]">
                <ul className="flex items-center space-x-[15px] desktop:space-x-[27px] ">
                  <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center">
                    <Link
                      href={"/osmrtnice"}
                      className=" text-[#1E2125] font-normal hover:text-blue-500 transition duration-200 tablet:text-[18px] desktop:text-[20px]"
                    >
                      Osmrtnice
                    </Link>
                  </li>
                  <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px]  items-center">
                    <Link
                      href={"#"}
                      className="text-[#1E2125] font-normal  hover:text-blue-500 transition duration-200 tablet:text-[18px] desktop:text-[20px]"
                    >
                      Pogrebi
                    </Link>
                  </li>
                  <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center ">
                    <Link
                      href={"/osmrtnice"}
                      className="text-[#1E2125] font-normal  hover:text-blue-500 transition duration-200 tablet:text-[18px] desktop:text-[20px]"
                    >
                      Spominske
                    </Link>
                  </li>
                  <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center ">
                    <Link
                      href={"/cvetlicarne"}
                      className="text-[#1E2125] font-normal  hover:text-blue-500 transition duration-200 tablet:text-[18px] desktop:text-[20px]"
                    >
                      Cvetličarne
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <Image
                src={iconMenu}
                className="
                             h-5 w-6 tablet:h-[26.67px] tablet:w-[32px] desktop:h-[26.67px] desktop:w-[30.73px] 
                             "
              /> */}

              <Image
                src={iconMenu}
                className="
                              h-5 w-6 tablet:h-8 tablet:w-8 desktop:h-8 desktop:w-8 
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
