"use client";

import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DemoMemoryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return <div className="w-full h-screen bg-white">
    <div className="container">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setIsOpen(true)}>DemoMemoryPage</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setIsRegisterOpen(true)}>Register</button>
      {isOpen && <div className="fixed top-0 left-0 h-screen w-screen bg-[#344054B2] backdrop-blur-sm z-50 flex items-center justify-end" onClick={() => setIsOpen(false)}>
        <div className="space-y-[18px] absolute top-[50%] translate-y-[-50%] right-[77px] tabletUserAcc:right-[50%] tabletUserAcc:translate-x-[50%] mobileUserAcc:right-[50%] mobileUserAcc:translate-x-[50%] w-[360px] tabletUserAcc:w-[550px]" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mobileUserAcc:px-[12px]">
            <div className="border border-[#FFFFFF] text-white w-[150px] h-[42px] flex items-center justify-center bg-[#e3e8ec28] rounded-[8px] font-normal text-[15px] [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] cursor-pointer" onClick={() => { setIsRegisterOpen(true); setIsOpen(false); }}>
              REGISTRACIJA
            </div>
            <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <img src="/white_cencel.png" alt="close" className="w-[60px] h-[60px]" />
            </div>
          </div>
          <div className="rounded-[12px] overflow-hidden bg-[url('/card_bg.jpg')] bg-cover bg-center px-[30px] tabletUserAcc:px-[60px] py-[35px]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-center flex-col gap-[5px]">
              <h4 className="text-[28px] text-[#1E2125] font-semibold leading-none">Prijava</h4>
              <h5 className="text-[18px] text-[#3C3E41] font-[400px] leading-none">v uporabniški račun </h5>
              <p className="text-[#6D778E] text-center text-[12px] leading-[16px] mt-[10px] tabletUserAcc:px-[100px]">Prijava je potrebna, da se ohrani pieteta do pokojnih
                in prepreči smetenje na spominski strani (spam). </p>
            </div>
            <div className=" text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[29px] h-[62px] flex flex-col justify-start items-start">
              <div>E-pošta</div>
              <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                <input
                  type="email"
                  className="w-full h-full bg-transparent focus:outline-none text-[#848484]"
                />
              </div>
            </div>
            {/* Container for geslo field */}
            <div className="text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
              <div>Geslo</div>

              <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                <input
                  type="password"
                  className="h-[38px] w-full bg-transparent focus:outline-none text-[#848484]"
                />
              </div>
            </div>
            <div className="flex w-full justify-between items-center mt-[12px]">
              {/* Checkbox */}
              <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-custom400 text-[12px] text-[#6D778E]">
                <Checkbox
                  className="mr-[12px] justify-center items-center group w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] bg-white/10 ring-white/15 ring-inset data-[checked]:bg-[#6D778E]"
                >
                  <CheckIcon className="hidden ml-[-1px] size-4 rotate-6 fill-white group-data-[checked]:block" />
                </Checkbox>
                Zapomni si
              </label>
              {/*  */}
              <Link
                href="#"
                className="flex font-custom400 mt-[3px] text-[12px] leading-[20px] font-variation-customOpt12 text-[#6D778E] justify-end "
              >
                Pozabljeno geslo
              </Link>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] h-[48px] w-full mt-[35px] tabletUserAcc:mt-[18px] mobileUserAcc:mt-[15px] flex items-center justify-center text-[18px] font-medium rounded-[8px]">
              Prijava
            </div>

            <div className="mt-[67px] tabletUserAcc:mt-[30px] text-center text-[15px] leading-[16px] text-[#414141]">
              Ali hitra prijava preko
            </div>
            <div className="w-[300px]  tabletUserAcc:w-full mobile:w-full tabletUserAcc:gap-[28px] mx-auto mt-[16px] h-[52px] mobile:h-auto mobile:gap-[13px] flex flex-row justify-between items-center">
              <Link
                href={"#"}
                className="w-[140px] tabletUserAcc:w-full mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] rounded-[10px] border-[0.5px] flex items-center justify-center"
              >
                <Image
                  src={"/ico_fb.png"}
                  width={28}
                  height={28}
                  alt="Facebook Icon"
                />
                <div className="ml-[8px] text-[16px] leading-[100%] font-variation-customOpt16 text-[#414141]">
                  Facebook
                </div>
              </Link>

              <Link
                href={"#"}
                className="w-[140px] tabletUserAcc:w-full mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] border-[0.5px] rounded-[10px] flex items-center justify-center"
              >
                <Image
                  src={"/ico_google.png"}
                  width={28}
                  height={28}
                  alt="Google Icon"
                />
                <div className="ml-[8px] text-[16px] leading-[100%] font-variation-customOpt16 text-[#414141]">
                  Google
                </div>
              </Link>
            </div>
            <div className="mt-[20px] text-center text-[15px] text-[#3C3E41]">
              Nov uporabnik? Registriraj se <Link href={"#"} className="text-[#0A85C2] underline">tukaj</Link>
            </div>
          </div>
        </div>
      </div>}

      {isRegisterOpen && <div className="fixed top-0 left-0 h-screen w-screen bg-[#344054B2] backdrop-blur-sm z-50 flex items-center justify-end cursor-pointer" onClick={() => setIsRegisterOpen(false)}>
        <div className="space-y-[18px] absolute top-[50%] translate-y-[-50%] right-[77px] tabletUserAcc:right-[50%] tabletUserAcc:translate-x-[50%] mobileUserAcc:right-[50%] mobileUserAcc:translate-x-[50%] w-[360px] tabletUserAcc:w-[550px]" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mobileUserAcc:px-[12px]">
            <div className="border border-[#FFFFFF] w-[150px] h-[42px] flex items-center justify-center bg-[#e3e8ec28] rounded-[8px] font-normal text-[15px] [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]" onClick={() => { setIsRegisterOpen(false); setIsOpen(true); }}>
              PRIJAVA
            </div>
            <div className="cursor-pointer" onClick={() => setIsRegisterOpen(false)}>
              <img src="/white_cencel.png" alt="close" className="w-[60px] h-[60px]" />
            </div>
          </div>
          <div className="rounded-[12px] overflow-hidden bg-[url('/card_bg.jpg')] bg-cover bg-center px-[30px] tabletUserAcc:px-[60px] py-[35px]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-center flex-col gap-[5px]">
              <h4 className="text-[28px] text-[#1E2125] font-semibold leading-none">Registracija</h4>
              <h5 className="text-[18px] text-[#3C3E41] font-[400px] leading-none">novega uporabnika </h5>
            </div>
            <div className=" text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[29px] h-[62px] flex flex-col justify-start items-start">
              <div>E-pošta</div>
              <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                <input
                  type="email"
                  className="w-full h-full bg-transparent focus:outline-none text-[#848484]"
                />
              </div>
            </div>
            {/* Container for geslo field */}
            <div className="text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
              <div>Geslo</div>

              <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                <input
                  type="password"
                  className="h-[38px] w-full bg-transparent focus:outline-none text-[#848484]"
                />
              </div>
            </div>
            <div className="text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
              <div>Ponovi geslo</div>

              <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                <input
                  type="password"
                  className="h-[38px] w-full bg-transparent focus:outline-none text-[#848484]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-[12px] gap-[12px]">
              {/* Checkbox */}
              <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-custom400 text-[12px] text-[#6D778E]">
                <Checkbox
                  className="mr-[12px] justify-center items-center group w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] bg-white/10 ring-white/15 ring-inset data-[checked]:bg-[#6D778E] shrink-0"
                >
                  <CheckIcon className="hidden ml-[-1px] size-4 rotate-6 fill-white group-data-[checked]:block" />
                </Checkbox>
                Dovoljujem, da me Firma s.p. preko elektronske pošte, do preklica obvešča o posodobitvah, nadgradnjah, novostih in  ugodnostih.
              </label>
              <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-custom400 text-[12px] text-[#6D778E]">
                <Checkbox
                  className="mr-[12px] justify-center items-center group w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] bg-white/10 ring-white/15 ring-inset data-[checked]:bg-[#6D778E] shrink-0"
                >
                  <CheckIcon className="hidden ml-[-1px] size-4 rotate-6 fill-white group-data-[checked]:block" />
                </Checkbox>
                Strinjam se s splošnimi pogoji in pravili
              </label>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] h-[48px] w-full mt-[35px] tabletUserAcc:mt-[18px] mobileUserAcc:mt-[15px] flex items-center justify-center text-[18px] font-medium rounded-[8px]">
              Registracija
            </div>

            <div className="mt-[67px] tabletUserAcc:mt-[26px] mobileUserAcc:mt-[26px] text-center text-[15px] leading-[16px] text-[#414141]">
              Ali hitra prijava preko
            </div>
            <div className="w-[300px]  tabletUserAcc:w-full mobile:w-full tabletUserAcc:gap-[28px] mx-auto mt-[16px] h-[52px] mobile:h-auto mobile:gap-[13px] flex flex-row justify-between items-center">
              <Link
                href={"#"}
                className="w-[140px] tabletUserAcc:w-full mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] rounded-[10px] border-[0.5px] flex items-center justify-center"
              >
                <Image
                  src={"/ico_fb.png"}
                  width={28}
                  height={28}
                  alt="Facebook Icon"
                />
                <div className="ml-[8px] text-[16px] leading-[100%] font-variation-customOpt16 text-[#414141]">
                  Facebook
                </div>
              </Link>

              <Link
                href={"#"}
                className="w-[140px] tabletUserAcc:w-full mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] border-[0.5px] rounded-[10px] flex items-center justify-center"
              >
                <Image
                  src={"/ico_google.png"}
                  width={28}
                  height={28}
                  alt="Google Icon"
                />
                <div className="ml-[8px] text-[16px] leading-[100%] font-variation-customOpt16 text-[#414141]">
                  Google
                </div>
              </Link>
            </div>
            <div className="mt-[20px] text-center text-[15px] text-[#3C3E41]">
              Obstoječ uporabnik? Prijavi se <Link href={"#"} className="text-[#0A85C2] underline">tukaj</Link>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="border border-[#FFFFFF] w-[213px] h-[42px] flex items-center justify-center bg-[#e3e8ec28] rounded-[8px] font-normal text-[15px] [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]" onClick={() => { setIsRegisterOpen(false); setIsOpen(true); }}>
              Registracija za podjetja
            </div>
          </div>
        </div>
      </div>}
    </div>
  </div>;
}

