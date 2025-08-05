"use client";
import React, { useEffect, useState } from "react";
import { IconView } from "./Commonfunction";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import authService from "@/services/auth-service";
import { useLogout } from "@/utils/authUtils";

function FooterMobile({ handleGoToTop, setIsMobilSideBarOpen }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isIconChange, setIsIconChange] = useState(false);

  // useEffect(() => {
  //   if (
  //     pathname == "/moji-prispevki" ||
  //     pathname == "/pregled2" ||
  //     pathname == "/potrditev-objave"
  //   ) {
  //     setIsIconChange(true);
  //   }
  // }, [pathname]);

  const {logout} = useLogout();
  return (
    <div className=" hidden mobileUserAcc:flex tabletUserAcc:flex self-end bottom-0 rounded-t-[12px] fixed z-[999] w-full h-[85px] bg-[#FFFFFF] shadow-lg justify-center items-center">
      <div
        className="justify-between items-center w-full max-w-[745px] flex mr-[55px] ml-[55px]
       mobileUserAcc:mx-[25px] my-0 mobileUserAcc:flex-row mobileUserAcc:max-w-[360px] mobileUserAcc:justify-between mobileUserAcc:items-center
      "
      >
        <div className=" hidden tabletUserAcc:flex ">
          <button onClick={logout} className="w-full h-[52px] ">
            <IconView
              iconPath={"/icon_sidebar_arrow.png"}
              name={"Na spletno stran"}
            />
          </button>
        </div>

        <div className="flex mobileUserAcc:w-full justify-between tabletUserAcc:gap-[60px]">
          <div
            onClick={() => {
              setIsMobilSideBarOpen(true);
            }}
          >
            <IconView iconPath={"/icon_home.png"} name={"Domov"} />
          </div>

          <Link href={"/pregled"}>
            <div>
              <IconView
                iconPath={"/icon_inactive_heart.png"}
                name={"Moji bližnji"}
              />
            </div>
          </Link>

          <Link href={"/obletnice"}>
            <div>
              <IconView iconPath={"/icon_search.png"} name={"Obletnice"} />
            </div>
          </Link>

          {isIconChange ? (
            <div className="w-[68.77px] mobileUserAcc:w-[58.33px]">
              <IconView iconPath={"/gototop.png"} name={"Na vrh"} />
            </div>
          ) : (
            <Link href={"/pregled2"}>
              <div>
                <IconView
                  iconPath={"/icon_active_heart.png"}
                  name={"Moji skrbniki"}
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default FooterMobile;
