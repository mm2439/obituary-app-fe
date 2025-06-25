"use client";

import UserAccountHeaderNew from "@/app/components/appcomponents/UserAccountHeaderNew";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import ButtonWhiteBG, {
  ButtonWhiteBGCap,
} from "@/app/components/appcomponents/buttonwhitebg";
import obituaryService from "@/services/obituary-service";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ButtonLightGreen from "@/app/components/appcomponents/buttonLightGreen";

export default function Funeral() {
  const [isMobilSideBarOpen, setIsMobilSideBarOpen] = useState(true);
  const [showAlternateContent, setShowAlternateContent] = useState(false);
  const [isKeeper, setIsKeeper] = useState(false);
  const router = useRouter();
  const gotoTopRef = useRef(null);

  useEffect(() => {
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
              <Link href={"/"} className="mt-[8px]">
                <ButtonWhiteBG
                  placeholderImg={"/ico_obletnice.png"}
                  placeholderText={"DOPOLNI OSMRTNICE"}
                />
              </Link>
              <div className="text-[#2198D3] mt-[50px] text-[14px] leading-[24px] font-variation-customOpt14 font-semibold">
                MESEČNI PREGLED IN STATISTIKE
              </div>
              <Link href="/pregled">
                <div className="mt-[8px]">
                  <ButtonWhiteBGCap
                    placeholderImg={"/ico_pregled.png"}
                    placeholderText={"OSMRTNICE"}
                    arrow={"down"}
                    isOpen={1}
                  />
                </div>
              </Link>

              <Link href="/obletnice">
                <div className="mt-[8px]">
                  <ButtonWhiteBGCap
                    placeholderImg={"/user/spominske.png"}
                    placeholderText={"SPOMINSKE"}
                    arrow={"down"}
                    isOpen={1}
                  />
                </div>
              </Link>
              <Link href="/moji-prispevki">
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

                  <Link href={"/potrditev-objave"}>
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
              <Link href={"/"} className="mt-[8px]">
                <ButtonWhiteBG
                  placeholderImg={"/ico_obletnice.png"}
                  placeholderText={"NAŠA SPLETNA STRAN"}
                />
              </Link>
              <Link href={"/"} className="mt-[8px]">
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
              <div className="mt-[35px] mobileUserAcc:mt-[15px] w-[184px] border-2 border-[#1860A335] rounded-[10px] ">
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
                  href={"/osmrtnice"}
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
                  href={"/osmrtnice"}
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
              <div className="mt-[8px]  mobileUserAcc:hidden">
                <ButtonWhiteBG
                  placeholderImg={"/ico_obletnice.png"}
                  placeholderText={"NAZAJ NA SPLETNO STRAN"}
                  isOpen={2}
                />
              </div>
              <div className="mt-[8px]  mobileUserAcc:hidden">
                <ButtonWhiteBG
                  placeholderImg={"/ico_obletnice.png"}
                  placeholderText={"POGOSTA VPRAŠANJA"}
                />
              </div>
              <div className="w-[314] h-[58px] mt-[8px] py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image bg-transparent opacity-0 invisible"></div>
              {/* {/ 21/10 changeeeee /} */}
              <div
                onClick={() => {
                  setIsButtonHide(!isButtonHide);
                }}
                className="cursor-pointer text-[#2198D3] mt-[50px] mb-[10px] text-[14px] leading-[24px] font-variation-customOpt14 font-semibold"
              >
                ZA STRANKE
              </div>
              <Link
                href="/user/funeral/notifications"
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
                  <h2 className="text-[16px] text-[#6D778E]">
                    DODAJ OSMRTNICO
                  </h2>
                </div>
              </Link>
              <Link
                href="/user/funeral/notifications"
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
                  <h2 className="text-[16px] text-[#6D778E]">
                    PODARI SKRBNIKA
                  </h2>
                </div>
              </Link>
              <div className="w-[314] h-[55px] mt-[8px] py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image bg-transparent mobileUserAcc:hidden"></div>
              <Link
                href="/user/funeral/notifications"
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
                  <h2 className="text-[16px] text-[#6D778E]">MOBI PREDLOGE</h2>
                </div>
              </Link>
              <div className="w-[314] h-[58px] mt-[8px] py-[2px] px-[2px] rounded-[10px] shadow-custom-light-dark-box-image bg-transparent mobileUserAcc:hidden"></div>
            </div>
          </div>
        </div>
        {/* <div className="relative z-10 py-28 max-w-3xl w-full mx-auto">
            <h1 className="text-[32px] font-bold text-[#0A85C2]">Uporabniški kotiček</h1>
            <div className="grid grid-cols-2 gap-12 py-12">
              <div className="flex flex-col gap-3">
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-6">
                  <div className="flex items-center gap-5">
                    <span className="w-6 h-6 rounded-full bg-[#EB1D1D] font-bold text-white flex items-center justify-center text-[15px] leading-none">
                      2
                    </span>
                    <h2 className="text-lg text-[#6D778E]">OBVESTILA</h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#6D778E" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
                <h3 className="text-[14px] font-semibold text-[#2198D3]">MESEČNI PREGLED IN STATISTIKE</h3>
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-1">
                  <div className="flex items-center gap-5">
                    <img src="/user/omsrtnice.png" alt="omsrtnice" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">OSMRTNICE</h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#6D778E" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-1">
                  <div className="flex items-center gap-5">
                    <img src="/user/spominske.png" alt="spominki" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">SPOMINKI</h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#6D778E" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
                
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-1">
                  <div className="flex items-center gap-5">
                    <img src="/user/mobi_predloge.png" alt="predloge" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">MOBI PREDLOGE </h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#6D778E" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>

                <Link href="/user/funeral/notifications" className="bg-white/30 rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-1 h-[64px]">
                </Link>

                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-1">
                  <div className="flex items-center gap-5">
                    <img src="/user/post.png" alt="predloge" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">NAŠA SPLETNA STRAN</h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#6D778E" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-1">
                  <div className="flex items-center gap-5">
                    <img src="/user/post.png" alt="predloge" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">NAŠ RAČUN</h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#6D778E" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-1">
                  <div className="flex items-center gap-5">
                    <img src="/user/post.png" alt="predloge" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">NAZAJ NA SPLETNO STRAN</h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#6D778E" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-1">
                  <div className="flex items-center gap-5">
                    <img src="/user/post.png" alt="predloge" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">POGOSTA VPRAŠANJA</h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#6D778E" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
                <Link href="/user/funeral/notifications" className="bg-white/30 rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] h-[64px] opacity-0 invisible mb-6">
                </Link>
                <h3 className="text-[14px] font-semibold text-[#2198D3]">ZA STRANKE</h3>
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mb-1 relative overflow-hidden min-h-[60px]">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[rgba(249,171,22,1)] to-[rgba(197,135,14,1)]">
                    <div className="px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#fff" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                 
                  </div>
                  <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[56px] bg-white rounded-s-md px-3">
                    <img src="/user/plus.png" alt="predloge" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">PODARI SKRBNIKA</h2>
                  </div>
                </Link>
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mb-1 relative overflow-hidden min-h-[60px]">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[rgba(10,133,194,1)] to-[rgba(24,96,163,1)]">
                    <div className="px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#fff" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />``
                      </svg>
                    </div>
                 
                  </div>
                  <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[56px] bg-white rounded-s-md px-3">
                    <img src="/user/plus.png" alt="predloge" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">DODAJ OSMRTNICO</h2>
                  </div>
                </Link>
                <Link href="/user/funeral/notifications" className="bg-white/30 rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] border-[2px] border-[rgba(13,148,232,0.1)] mb-1 h-[64px]">
                </Link>
                <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mb-1 relative overflow-hidden min-h-[60px]">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[rgba(249,22,214,1)] to-[rgba(157,32,138,1)]">
                    <div className="px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#fff" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                 
                  </div>
                  <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[56px] bg-white rounded-s-md px-3">
                    <img src="/user/plus.png" alt="predloge" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg text-[#6D778E]">DODAJ OSMRTNICO</h2>
                  </div>
                </Link>
              </div>
            </div>

            <button className="px-5 py-4 bg-gradient-to-b from-[#ffffffa2] to-[rgba(12,104,244,0.2)] rounded-lg inline-flex items-center justify-center text-[rgba(109,119,142,1)] font-medium text-[16px] outline  outline-[2px] outline-[#0d94e884] ">
            ODJAVA IZ RAČUNA
            </button>
          </div> */}
      </div>
    </div>
  );
}
