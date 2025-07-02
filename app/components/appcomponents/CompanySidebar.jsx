"use client";

import Image from "next/image";
import {
  CommonViewBusinessAccSidebar,
  NotificationViewUserAccSidebar,
} from "./Commonfunction";
import { usePathname, useRouter } from "next/navigation";
import authService from "@/services/auth-service";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CompanySidebar({
  showAlternateContent,
  setShowAlternateContent,
  pendingConfirmations,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);

  const normalPath = pathname.startsWith("/c")
    ? pathname.replace("/c", "")
    : pathname.replace("/p", "");
  const absolutePath = pathname.startsWith("/c") ? "/c" : "/p";

  const logoutUser = async () => {
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

  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      setUser(JSON.parse(currUser));
      console.log(JSON.parse(currUser));
    }
  }, []);

  return (
    <div
      className="px-[22px] mx-auto bg-[#F1F5F8] pt-[36px] hidden desktopUserAcc:flex flex-col border-r-2 border-[#FFFFFF]
       tabletUserAcc:hidden
       mobileUserAcc:hidden
      "
    >
      <div>
        <NotificationViewUserAccSidebar
          title={"Obvestila"}
          route=""
          count={0}
        />
      </div>
      <div>
        <div className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#2198D3] mt-[32px] font-semibold">
          NAŠA AKTIVNOST
        </div>
        <div>
          <CommonViewBusinessAccSidebar
            imgPath={
              normalPath == "/nase_osmrtnice" || normalPath == "/osmrtnice_stat"
                ? "/ico_pre.png"
                : "/ico_pregled.png"
            }
            title={"Osmrtnice"}
            route={absolutePath + `/${user?.slugKey}` + "/nase_osmrtnice"}
            pendingConfirmations={pendingConfirmations}
            isActive={normalPath === "/osmrtnice_stat"}
            isFirstLetterDifferent={true}
          />
          <CommonViewBusinessAccSidebar
            imgPath={
              normalPath === "/nase_spominske" ||
              normalPath === "/nasi_prispevki"
                ? "/anti_spominske.png"
                : "/spominske.png"
            }
            title={"Spominske"}
            route={absolutePath + `/${user?.slugKey}` + "/nase_spominske"}
            isActive={
              normalPath === "/nase_spominske" ||
              normalPath === "/nasi_prispevki"
            }
            isFirstLetterDifferent={true}
          />

          <CommonViewBusinessAccSidebar
            imgPath={
              normalPath === "/nasa_darila" || normalPath === "/darila_pregled"
                ? "/anti_mobi.png"
                : "/mobi_predloge.png"
            }
            title={"MOBI predloge"}
            route={absolutePath + `/${user?.slugKey}` + "/nasa_darila"}
            isActive={
              normalPath === "/nasa_darila" || normalPath === "/darila_pregled"
            }
            isFirstLetterDifferent={true}
          />

          <div className="w-[186px] cursor-pointer rounded-[10px] shadow-custom-light-dark-box-image relative mt-5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0D94E8] to-[#530CC6] rounded-[8px]" />
            <div className="h-[40px] bg-[#ffffff] relative z-10 m-[2px] border-[1px] border-[#FFFFFF40] flex justify-center items-center rounded-[7px]">
              <img src="/dodaj-com.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="text-[14px] leading-[24px] font-variation-customOpt14 cursor-pointer text-[#2198D3] mt-[32px] font-semibold"
          onClick={() => setShowAlternateContent(!showAlternateContent)}
        >
          NAŠ BRLOG
        </div>
        <CommonViewBusinessAccSidebar
          imgPath={
            normalPath == "/nasa_pokopalisca" || normalPath == "/spletna-stran"
              ? "/icon_white_setting.png"
              : "/ico_setting.png"
          }
          title={"Naša stran"}
          route={absolutePath + `/${user?.slugKey}` + "/spletna-stran"}
          isActive={
            normalPath === "/nasa_pokopalisca" ||
            normalPath === "/spletna-stran"
          }
        />
        <CommonViewBusinessAccSidebar
          imgPath={
            normalPath == "/nasi_podatki" ||
            normalPath == "/narocila" ||
            normalPath == "/promocije"
              ? "/icon_white_setting.png"
              : "/ico_setting.png"
          }
          title={"Naš račun"}
          route={absolutePath + `/${user?.slugKey}` + "/nasi_podatki"}
          isActive={
            normalPath === "/nasi_podatki" ||
            normalPath === "/narocila" ||
            normalPath === "/promocije"
          }
        />
        <div className="w-[186px] cursor-pointer rounded-[10px] mt-[4px] shadow-custom-light-dark-box-image border-[2px] border-[#FFFFFF]">
          <div
            className="h-[50px] bg-[#FFFFFF80] border-[1px] border-[#FFFFFF40] 
    flex justify-center items-center rounded-[8px]"
          >
            <div
              className=" h-full text-base  text-[#2d2d2da9] text-[16px]
        font-variation-customOpt16 font-normal leading-[24px] flex justify-start items-center"
            >
              Pogosta vprašanja
            </div>
          </div>
        </div>
        <div className="mt-[54px]">
          <div className="w-[186px] cursor-pointer rounded-[10px] mt-[4px] shadow-custom-light-dark-box-image border-[2px] border-[#FFFFFF]">
            <div
              className="h-[50px] bg-[#FFFFFF80] border-[1px] border-[#FFFFFF40] 
    flex justify-center items-center rounded-[8px]"
            >
              <Link
                href={"/"}
                className=" ml-[8px] h-full my-[2px] text-base  text-[#EB1D1D] text-[16px]
        font-variation-customOpt16 font-normal leading-[24px] flex justify-center items-center "
              >
                Nazaj na spletno stran
              </Link>
            </div>
          </div>

          <div
            className="w-[186px]   cursor-pointer rounded-[10px] mt-[20px]"
            onClick={logoutUser}
          >
            <div className="h-[48px] flex justify-start items-center rounded-[8px]">
              <div className="ml-[15px]">
                <Image src={"/ico_logout.png"} alt="" width={24} height={24} />
              </div>

              <div
                className=" ml-[8px] h-full my-[2px] text-base  text-[#6D778E] text-[16px]
        font-variation-customOpt16 font-normal leading-[24px] flex justify-center items-center "
              >
                Odjava iz računa
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
