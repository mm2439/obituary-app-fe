"use client";

import UserAccountHeaderNew from "@/app/components/appcomponents/UserAccountHeaderNew";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ButtonWhiteBG, {
  ButtonWhiteBGCap,
} from "@/app/components/appcomponents/buttonwhitebg";
import obituaryService from "@/services/obituary-service";
import { useRouter, usePathname } from "next/navigation";
import authService from "@/services/auth-service";

export default function Funeral() {
  const [isMobilSideBarOpen, setIsMobilSideBarOpen] = useState(true);
  const [showAlternateContent, setShowAlternateContent] = useState(false);
  const [isKeeper, setIsKeeper] = useState(false);
  const router = useRouter();
  const gotoTopRef = useRef(null);
  const pathname = usePathname();

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData();
    fetchPendingPosts();
    getKeeperMemory();
  }, []);

  const [pendingPosts, setPendingPosts] = useState([]);

  const fetchPendingPosts = async () => {
    try {
      const response = await obituaryService.fetchPendingPosts();

      if (response.error) {
        return;
      }
      console.log(response);
      setPendingPosts(response.pending);

      setIsKeeper(response.isKeeper);
    } catch (err) {
      console.error("Error Fetching Pending Posts:", err);
    }
  };

  const [memories, setMemories] = useState([]);

  const getKeeperMemory = async () => {
    try {
      const response = await obituaryService.getKeeperMemories();

      setMemories(response.obituaries);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoToTop = () => {
    gotoTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleMobileSidebar = () => {
    setIsMobilSideBarOpen(!isMobilSideBarOpen);
  };

  const getUserData = () => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      setUser(JSON.parse(currUser));
    }
  };

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
      console.error("Error:", err);
    }
  };
  return (
    <div
      ref={gotoTopRef}
      className="desktopUserAcc:overflow-x-hidden flex mx-auto bg-[#F1F5F8] tabletUserAcc:bg-[#ECF0F3] desktopUserAcc:bg-[#ECF0F3] w-full"
    >
      {/* HEADER */}
      <UserAccountHeaderNew
        onMenuClick={toggleMobileSidebar}
        setIsMobilSideBarOpen={setIsMobilSideBarOpen}
        isMobilSideBarOpen={false}
        pendingConfirmations={pendingPosts.length}
        isKeeper={showAlternateContent}
        memories={memories}
        company={true}
        noFooterOnMobile={true}
      />
      <div className="flex flex-col gap-4 min-h-screen min-w-full relative items-center justify-center py-[50px]">
        <img
          src="/user/main_background.png"
          alt="funeral banner"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="relative z-10 desktopUserAcc:pt-16 tabletUserAcc:pt-0">
          <div className="w-full tabletUserAcc:max-w-[620px] desktopUserAcc:w-[620px] mobileUserAcc:max-w-[310px] text-[16px]">
            <div
              className="text-[#0A85C2] text-[32px] leading-[38px] font-semibold mb-5"
              style={{
                fontVariationSettings: "'wdth' 50,'opsz' 26",
              }}
            >
              Uporabniški kotiček
            </div>
            <div>
              <div className="text-[rgb(60,62,65)] hidden mobileUserAcc:block">
                Pozor. Razen spodnjih treh povezav je ta del za boljšo
                uporabniško izkušnjo optimiziran za tablico ali računalnik.{" "}
                <br /> <br />
                Vseeno nadaljujem?
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-x-[30px] left-[0px] right-[0px]">
            <div className="w-[322px] flex flex-col h-full mobileUserAcc:hidden">
              <div className="mt-[8px]">
                <ButtonWhiteBG
                  placeholderImg={""}
                  placeholderText={"OBVESTILA"}
                  pendingConfirmations={pendingPosts.length}
                />
              </div>
              <Link
                href={"/c" + `/${user?.slugKey}` + "/nase_osmrtnice"}
                className="mt-[8px]"
              >
                <ButtonWhiteBG
                  placeholderImg={"/ico_obletnice.png"}
                  placeholderText={"DOPOLNI OSMRTNICE"}
                />
              </Link>
              <div className="text-[#2198D3] mt-[50px] text-[14px] leading-[24px] font-variation-customOpt14 font-semibold">
                MESEČNI PREGLED IN STATISTIKE
              </div>
              <Link href={"/c" + `/${user?.slugKey}` + "/nase_osmrtnice"}>
                <div className="mt-[8px]">
                  <ButtonWhiteBGCap
                    placeholderImg={"/ico_pregled.png"}
                    placeholderText={"OSMRTNICE"}
                    arrow={"down"}
                    isOpen={1}
                  />
                </div>
              </Link>

              <Link href={"/c" + `/${user?.slugKey}` + "/nase_spominske"}>
                <div className="mt-[8px]">
                  <ButtonWhiteBGCap
                    placeholderImg={"/user/spominske.png"}
                    placeholderText={"SPOMINSKE"}
                    arrow={"down"}
                    isOpen={1}
                  />
                </div>
              </Link>
              <Link href={"/c" + `/${user?.slugKey}` + "/nasa_darila"}>
                <div className="mt-[8px]">
                  <ButtonWhiteBGCap
                    placeholderImg={"/user/mobi_predloge.png"}
                    placeholderText={"MOBI PREDLOGE"}
                  />
                </div>
              </Link>
              <div
                onClick={() => {
                  setIsButtonHide(!isButtonHide);
                }}
                className="hidden mobileUserAcc:block cursor-pointer text-[#2198D3] mt-[50px] text-[14px] leading-[24px] font-variation-customOpt14 font-semibold"
              >
                MOJI SKRBNIKI
              </div>
              {!isKeeper ? (
                <div className="hidden mobileUserAcc:block">
                  <div className="w-[314] h-[58px] mt-[8px] py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image  bg-transparent"></div>

                  <div className="w-[314] h-[58px] mt-[8px] py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image bg-transparent"></div>

                  <div className="w-[314] h-[58px] mt-[8px] py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image bg-transparent"></div>
                </div>
              ) : (
                <div className="hidden mobileUserAcc:block ">
                  <div className="mt-[8px]">
                    <ButtonWhiteBG
                      placeholderImg={"/ico_pregled_black.png"}
                      placeholderText={"PREGLED"}
                    />
                  </div>

                  <Link href={"/c" + `/${user?.slugKey}` + "/potrditev-objave"}>
                    <div className="mt-[8px]">
                      <ButtonWhiteBG
                        placeholderImg={""}
                        placeholderText={"POTRDITEV OBJAVE"}
                        pendingConfirmations={pendingPosts.length}
                      />
                    </div>
                  </Link>
                </div>
              )}
              <div className="w-[314] h-[55px] mt-[8px] rounded-[10px] shadow-custom-light-dark-box-image bg-transparent"></div>
              <Link
                href={"/c" + `/${user?.slugKey}` + "/spletna-stran"}
                className="mt-[8px]"
              >
                <ButtonWhiteBG
                  placeholderImg={"/ico_obletnice.png"}
                  placeholderText={"NAŠA SPLETNA STRAN"}
                />
              </Link>
              <Link
                href={"/c" + `/${user?.slugKey}` + "/nasi_podatki"}
                className="mt-[8px]"
              >
                <ButtonWhiteBG
                  placeholderImg={"/ico_obletnice.png"}
                  placeholderText={"NAŠ RAČUN"}
                />
              </Link>
              <div className="hidden mobileUserAcc:flex flex-col mt-[70px]">
                <div>
                  <ButtonWhiteBG
                    placeholderImg={"/ico_obletnice.png"}
                    placeholderText={"POGOSTA VPRAŠANJA"}
                  />
                </div>
                <Link href={"/"}>
                  <ButtonWhiteBG
                    placeholderImg={"/ico_obletnice.png"}
                    placeholderText={"NAZAJ NA SPLETNO STRAN"}
                  />
                </Link>
              </div>
              <div
                onClick={() => logoutUser()}
                className="mt-[35px] mobileUserAcc:mt-[15px] w-[184px] border-2 border-[#1860A335] rounded-[10px] "
              >
                <div className=" rounded-lg w-[180px] h-[55px] flex justify-center items-center bg-gradient-to-b from-[#FFFFFF40] via-[rgba(12,104,244,0.15)] to-[#FFFFFF40]">
                  <div className="text-[16px] leading-[24px] font-variation-customOpt16 text-[#6D778E] ">
                    ODJAVA IZ RAČUNA
                  </div>
                </div>
              </div>
            </div>

            {/* 21 October 2024 */}

            <div className="w-[314px] flex flex-col">
              <div className="items-center justify-center gap-5 mt-5 hidden mobileUserAcc:flex">
                <Link
                  href={"/c" + `/${user?.slugKey}` + "/osmrtnice"}
                  className="flex items-center rounded-lg justify-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]
                mobile:h-[50px] mobile:w-[120px]
                tablet:h-[43px] tablet:w-[97px]
                desktop:h-12 desktop:w-[125px]"
                >
                  {/* <div className="hidden desktop:flex font-variation-customOpt16 text-[16px] text-[#1E2125] text-center">
                    Prikaži več
                  </div> */}
                  <div className="flex font-variation-customOpt16 text-[14px] text-[#6D778E] text-center">
                    NAZAJ
                  </div>
                </Link>
                <Link
                  href={"/c" + `/${user?.slugKey}` + "/osmrtnice"}
                  className="flex items-center rounded-lg justify-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]
                mobile:h-[50px] mobile:w-[120px]
                tablet:h-[43px] tablet:w-[97px]
                desktop:h-12 desktop:w-[125px]"
                >
                  {/* <div className="hidden desktop:flex font-variation-customOpt16 text-[16px] text-[#1E2125] text-center">
                    Prikaži več
                  </div> */}
                  <div className="flex font-variation-customOpt16 text-[14px] text-[#6D778E] text-center">
                    NAPREJ
                  </div>
                </Link>
              </div>
              <Link href={"/"} className="mt-[8px]  mobileUserAcc:hidden">
                <ButtonWhiteBG
                  placeholderImg={"/ico_obletnice.png"}
                  placeholderText={"NAZAJ NA SPLETNO STRAN"}
                  isOpen={2}
                />
              </Link>
              <Link href={"/"} className="mt-[8px]  mobileUserAcc:hidden">
                <ButtonWhiteBG
                  placeholderImg={"/ico_obletnice.png"}
                  placeholderText={"POGOSTA VPRAŠANJA"}
                />
              </Link>
              <div className="w-[314] h-[58px] mt-[8px] py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image bg-transparent opacity-0 invisible"></div>

              <div
                onClick={() => {
                  setIsButtonHide(!isButtonHide);
                }}
                className="cursor-pointer text-[#2198D3] mt-[47px] mb-[10px] text-[14px] leading-[24px] font-variation-customOpt14 font-semibold"
              >
                ZA STRANKE
              </div>
              <Link
                href={"/obituaryform"}
                className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mt-[2px] mobileUserAcc:mt-[5px] relative overflow-hidden min-h-[55px]"
              >
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[rgba(249,171,22,1)] to-[rgba(197,135,14,1)]">
                  <div className="px-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="#fff"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[51px] bg-white rounded-s-md px-3">
                  <img
                    src="/user/plus.png"
                    alt="predloge"
                    className="w-6 h-6 object-contain"
                  />
                  <Link
                    href={"/obituaryform"}
                    className="text-[16px] text-[#6D778E]"
                  >
                    DODAJ OSMRTNICO
                  </Link>
                </div>
              </Link>
              <Link
                href={"/floristsgifts"}
                className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mt-[9px] mobileUserAcc:mt-[15px] relative overflow-hidden min-h-[55px]"
              >
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[rgba(10,133,194,1)] to-[rgba(24,96,163,1)]">
                  <div className="px-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="#fff"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                      ``
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[51px] bg-white rounded-s-md px-3">
                  <img
                    src="/user/plus.png"
                    alt="predloge"
                    className="w-6 h-6 object-contain"
                  />
                  <Link
                    href={"/floristsgifts"}
                    className="text-[16px] text-[#6D778E]"
                  >
                    PODARI SKRBNIKA
                  </Link>
                </div>
              </Link>
              <div className="w-[314] h-[55px] mt-[8px] py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image bg-transparent mobileUserAcc:hidden"></div>
              <Link
                href={"/floristsgifts"}
                className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mt-[9px] mobileUserAcc:mt-[15px] relative overflow-hidden min-h-[55px]"
              >
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[rgba(249,22,214,1)] to-[rgba(157,32,138,1)]">
                  <div className="px-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="#fff"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[51px] bg-white rounded-s-md px-3">
                  <img
                    src="/user/plus.png"
                    alt="predloge"
                    className="w-6 h-6 object-contain"
                  />
                  <Link
                    href={"/floristsgifts"}
                    className="text-[16px] text-[#6D778E]"
                  >
                    MOBI PREDLOGE
                  </Link>
                </div>
              </Link>
              <div className="w-[314] h-[58px] mt-[8px] py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image bg-transparent mobileUserAcc:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
