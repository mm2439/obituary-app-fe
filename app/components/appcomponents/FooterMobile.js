"use client";
import React, { useEffect, useState } from "react";
import { IconView } from "./Commonfunction";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import authService from "@/services/auth-service";

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

  const logoutUser = async () => {
    console.log("here");
    try {
      const response = await authService.logout();

      localStorage.removeItem("user");
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      const isProd = window.location.hostname.includes("osmrtnica.com");

      document.cookie = `accessToken=; path=/; ${
        isProd ? "domain=.osmrtnica.com; secure; sameSite=None;" : ""
      } max-age=0`;
      router.push("/");
    } catch (err) {
      console.error("Error Fetching Pending Posts:", err);
    }
  };
  return (
    <div className=" hidden mobileUserAcc:flex tabletUserAcc:flex self-end bottom-0 rounded-t-[12px] fixed z-[999] w-full h-[85px] bg-[#FFFFFF] shadow-lg justify-center items-center">
      <div
        className="justify-between items-center w-full max-w-[745px] flex mr-[55px] ml-[55px]
       mobileUserAcc:mx-[25px] my-0 mobileUserAcc:flex-row mobileUserAcc:max-w-[360px] mobileUserAcc:justify-between mobileUserAcc:items-center
      "
      >
        <div className=" hidden tabletUserAcc:flex ">
          <button onClick={logoutUser} className="w-full h-[52px] ">
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
