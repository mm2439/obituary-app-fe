"use client";
import Image from "next/image";
import { CommonViewUserAccSidebar, NotificationViewUserAccSidebar } from "./Commonfunction";
import { usePathname, useRouter } from "next/navigation";
import authService from "@/services/auth-service";

export default function CompanySidebar({
  showAlternateContent,
  setShowAlternateContent,
  pendingConfirmations,
}) {
  const pathname = usePathname();
  const router = useRouter();

  const logoutUser = async () => {
    try {
      const response = await authService.logout();

      localStorage.removeItem("user");
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      document.cookie = "accessToken=; path=/; max-age=0";
      router.push("/");
    } catch (err) {
      console.error("Error Fetching Pending Posts:", err);
    }
  };
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
          MOJI BLIŽNJI
        </div>
        <div>
          <CommonViewUserAccSidebar
            imgPath={
              pathname == "/pregled" ? "/ico_pre.png" : "/ico_pregled.png"
            }
            title={"Osmrtnice"}
            route="/user/osmrtnice"
            pendingConfirmations={pendingConfirmations}
          />
          <CommonViewUserAccSidebar
            imgPath={
             "/spominske.png"
            }
            title={"Spominske"}
            route="/spominske"
          />

          <CommonViewUserAccSidebar
            imgPath={
              "/mobi_predloge.png"
            }
            title={"MOBI predloge"}
            route="/moji-prispevki"
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
        <CommonViewUserAccSidebar
            imgPath={
              pathname == "/user/companies/account-settingsasdf"
                ? "/icon_white_setting.png"
                : "/ico_setting.png"
            }
            title={"Naša spletna stran"}
            route="/user/companies/account-settingsadsf"
          />
        <CommonViewUserAccSidebar
            imgPath={
              pathname == "/user/companies/account-settings"
                ? "/icon_white_setting.png"
                : "/ico_setting.png"
            }
            title={"Naši podatki"}
            route="/user/companies/account-settings"
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
              <div
                className=" ml-[8px] h-full my-[2px] text-base  text-[#EB1D1D] text-[16px]
        font-variation-customOpt16 font-normal leading-[24px] flex justify-center items-center "
              >
                Nazaj na spletno stran
              </div>
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
