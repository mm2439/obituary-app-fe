"use client"; 

import UserAccountHeaderNew from "@/app/components/appcomponents/UserAccountHeaderNew";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Funeral() {
  const gotoTopRef = useRef(null);
  const [isMobilSideBarOpen, setIsMobilSideBarOpen] = useState(false);
  const [showAlternateContent, setShowAlternateContent] = useState(false);
  const [pendingPosts, setPendingPosts] = useState([]);
  const [memories, setMemories] = useState([]);

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
      isMobilSideBarOpen={isMobilSideBarOpen}
      pendingConfirmations={pendingPosts.length}
      isKeeper={showAlternateContent}
          memories={memories}
        />
        <div className="flex flex-col gap-4 min-h-screen min-w-full relative items-center justify-center">
          <img src="/user/main_background.png" alt="funeral banner" className="w-full h-full object-cover absolute top-0 left-0 z-0" />
          <div className="relative z-10 py-28 max-w-3xl w-full mx-auto">
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
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
          </div>
        </div>
    </div>
  );
}
