"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CommonViewUserAccSidebar } from "./Commonfunction";
import { usePathname, useRouter } from "next/navigation";
import authService from "@/services/auth-service";

function SidebarDekstop({
  showAlternateContent,
  setShowAlternateContent,
  pendingConfirmations,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);

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
        <CommonViewUserAccSidebar
          imgPath={""}
          title={"Prejeto"}
          route=""
          pendingConfirmations={pendingConfirmations}
        />
        <CommonViewUserAccSidebar
          imgPath={
            pathname == "/moj-racun"
              ? "/icon_white_setting.png"
              : "/ico_setting.png"
          }
          title={"Moj račun"}
          route={`/u/${user?.slugKey}/moj-racun`}
        />
      </div>
      <div>
        <div className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#2198D3] mt-[32px] font-semibold">
          MOJI BLIŽNJI
        </div>
        <div>
          <CommonViewUserAccSidebar
            imgPath={
              pathname == "/pregled" ? "/ico_pre.png" : "/ico_pregled.png"
            }
            title={"Pregled"}
            route={`/u/${user?.slugKey}/pregled`}
            pendingConfirmations={pendingConfirmations}
          />
          <CommonViewUserAccSidebar
            imgPath={
              pathname == "/obletnice"
                ? "/icon_white_setting.png"
                : "/ico_setting.png"
            }
            title={"Obletnice"}
            route={`/u/${user?.slugKey}/obletnice`}
          />

          <CommonViewUserAccSidebar
            imgPath={
              pathname == "/moji-prispevki"
                ? "/icon_white_setting.png"
                : "/ico_setting.png"
            }
            title={"Moji prispevki"}
            route={`/u/${user?.slugKey}/moji-prispevki`}
          />
        </div>
      </div>
      <div>
        <div
          className="text-[14px] leading-[24px] font-variation-customOpt14 cursor-pointer text-[#2198D3] mt-[32px] font-semibold"
          onClick={() => setShowAlternateContent(!showAlternateContent)}
        >
          MOJI SKRBNIKI
        </div>
        {showAlternateContent ? (
          <div>
            <CommonViewUserAccSidebar
              imgPath={
                pathname == "/pregled2"
                  ? "/ico_preglad_blue.png"
                  : "/ico_pregled_black.png"
              }
              title={"Pregled"}
              route={`/u/${user?.slugKey}/pregled2`}
              isKeeper={true}
            />
            <CommonViewUserAccSidebar
              imgPath={""}
              title={"Potrditev objave"}
              route={`/u/${user?.slugKey}/potrditev-objave`}
              pendingConfirmations={pendingConfirmations}
              isKeeper={true}
            />
            <CommonViewUserAccSidebar
              imgPath={"/ico_setting.png"}
              title={"Dodaj vsebine"}
              route={`/u/${user?.slugKey}/dodaj-vsebine`}
              isKeeper={true}
            />
          </div>
        ) : (
          <div>
            <div>
              <CommonViewUserAccSidebar
                imgPath={"/icon_plus_round.png"}
                title={"Postani Skrbnik"}
                route=""
                isKeeper={true}
              />

              <CommonViewUserAccSidebar
                imgPath={"/icon_left_right.png"}
                title={""}
                route=""
              />
            </div>
          </div>
        )}

        <div className="mt-[54px]">
          <CommonViewUserAccSidebar
            imgPath={""}
            title={"Pogosta vprašanja"}
            route=""
          />
          <div className="w-[186px] cursor-pointer rounded-[10px] mt-[4px] shadow-custom-light-dark-box-image border-[2px] border-[#FFFFFF]">
            <div
              className="h-[50px] bg-[#FFFFFF80] border-[1px] border-[#FFFFFF40] 
    flex justify-center items-center rounded-[8px]"
            >
              <div
                className=" ml-[8px] h-full my-[2px] text-base  text-[#EB1D1D] text-[16px]
        font-variation-customOpt16 font-normal leading-[24px] flex justify-center items-center "
              >
                Nazaj na spletno stran
              </div>
            </div>
          </div>

          <div
            className="w-[186px]   cursor-pointer rounded-[10px] mt-[4px]"
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
export default SidebarDekstop;
