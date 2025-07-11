"use client"

import Image from "next/image";
import logo from "@/public/app_big_logo.png";
import logo2 from "@/public/footer_logo.png";
import logoWhite from "@/public/footer_logo_white.png";
import iconFb from "@/public/icon_facebook.png";
import mobFb from "@/public/fb_mob.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BottomSlider from "../authcomponents/BottomSlider";
import BottomSliderForTabAndMob from "../authcomponents/BottomSliderForTabAndMob";
import { LocalQuickReviewModal } from "./LocalQuickReview";
import MemoralPopup from "./MemoralPopup";
import Link from "next/link";

const promoPathname = [
  "/funeralpromo",
  "/floristspromo",
  "/memorypromo",
  "/keeperpromo"
]

export default function Footer() {
  const [isLocalQuickModalVisible, setIsLocalQuickModalVisible] = useState(false);
  const [isMemoralPopupVisible, setIsMemoralPopupVisible] = useState(false);
  const [footerVariant, setFooterVariant] = useState("default");

  const pathname = usePathname();

  useEffect(() => {
    if(pathname.startsWith("/memorypromo") || pathname.startsWith("/keeperpromo")) {
      setFooterVariant("memory");
    } else {
      setFooterVariant("default");
    }
  }, [pathname]);

  const handleLocalQuickModalVisible = () => {
    setIsLocalQuickModalVisible(!isLocalQuickModalVisible);
  }

  const handleMemoralPopupVisible = () => {
    setIsMemoralPopupVisible(!isMemoralPopupVisible);
  }

  if(promoPathname.includes(pathname)) {
    return (
      <div className="bg-[#E0E9F399] border-l-1 border-r-1 border-t-1 border-b-1 border-color-[#E3E8EC] pt-[35px] pb-[23px]">
        <div className="flex justify-between items-center tablet:w-[695px] mobile:w-[320px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto">
          <Image src={logo2} width={160} height={20} alt="c" className="w-[160px] h-[20px] mobile:hidden" />
          {footerVariant === "default" && <div className="inline-flex gap-[10px] mobile:gap-[8px] text-[14px] items-center mobile:justify-center mobile:w-full">
            <Link href="/" className="text-[#1860A3] underline">Začetna</Link>
            <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
            <Link href="/" className="text-[#1860A3] underline">Cvetličarne</Link>
            <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
            <Link href="/" className="text-[#1860A3] underline">Pogrebna</Link>
            <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
            <Link href="/" className="text-[#1860A3] underline">Priložnost</Link>
          </div>}
          {footerVariant === "memory" && <div className="inline-flex gap-[10px] mobile:gap-[8px] text-[14px] items-center mobile:justify-center mobile:w-full">
            <Link href="/" className="text-[#1860A3] underline">Začetna</Link>
            <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
            <Link href="/" className="text-[#1860A3] underline">Osmrtnice</Link>
            <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
            <Link href="/" className="text-[#1860A3] underline">Pogrebi</Link>
            <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
            <Link href="/" className="text-[#1860A3] underline">Spominske</Link>
            <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
            <Link href="/" className="text-[#1860A3] underline">Cvetličarne</Link>
          </div>}
        </div>
        <div className="flex justify-between items-center tablet:w-[695px] mobile:w-[320px] desktop:w-[1190px] mx-auto bg-[#D4D4D4] h-[1px] mt-[22px]"></div>
        <div className="flex justify-between items-center tablet:w-[695px] mobile:w-[320px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto mt-[22px]">
          <div className="flex flex-col">
          <Image src={logo2} width={160} height={20} alt="c" className="w-[160px] h-[20px] hidden mobile:flex mb-[5px]" />

          <span className="text-[12px] text-[#1E2125] font-normal leading-[24px] mobile:text-[#3C3E41B2]">© 2025 Vse pravice zadržane</span>
          </div>
          <div className="inline-flex gap-[30px] mobile:gap-[16px]">
            <Link href="/" className="text-[#1860A3] underline w-[65px] text-[14px]">Pišite nam</Link>
            <Link href="/" className="">
              <Image src={"/promo_footer_facebook.png"} width={18} height={18} alt="Facebook Icon" />
            </Link>
            <Link href="/" className="">
              <Image src={"/promo_footer_instagram.png"} width={18} height={18} alt="Instagram Icon" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
    <div className="flex border-t-[1px] border-[#C7C7C7]">
      <div className="flex w-full bg-[#E3E8EC] items-center justify-center">
        <div
          className="
      mobile:w-[360px]  tablet:w-[680px] desktop:w-[1200px]    
       desktop:pl-[62px] desktop:pr-[40.19px]
       mobile:h-[610px] tablet:h-[500px] desktop:h-[480px]
       "
        >
          <footer
            className=" flex flex-col
        mobile:w-[311.88px] tablet:w-[612px] desktop:w-[1096.97px]       
        mobile:mt-[40px] tablet:mt-[46px] desktop:mt-[60px] 
        mobile:ml-[24px] tablet:ml-[42px]
        desktop:pl-[0.84px]
        "
          >
            <div className="flex flex-col tablet:flex-row desktop:flex-row ">
              <div
                className=" flex flex-col
            mobile:w-[200px] tablet:w-[211px] desktop:w-[211px] 
             desktop:mt-[5.73px]
             mobile:self-center
            "
              >
                <Image
                  src={logo}
                  alt="App Logo"
                  width={210}
                  height={77.05}
                  className="box-border
                mobile:h-[73.07px] tablet:h-[73.07px] desktop:h-[77.05px]  
                mobile:w-[197.85px] tablet:w-[198px] desktop:w-[210px]  "
                />
                <div className="mobile:mt-[21.93px] desktop:mt-[37px] tablet:mt-[22.93px] items-center desktop:h-[24px] desktop:w-[212px] ">
                  <div className="hidden desktop:flex ">
                    <h
                      style={{
                        fontSize: "17px",
                        lineHeight: "24px",
                        fontWeight: "normal",
                        color: "#414141",
                        fontVariationSettings: "'XOPQ' 90, 'opsz' 17",
                        whiteSpace: "nowrap", // Prevents text from wrapping
                      }}
                    >
                      Naj spomin nanje ne ugasne.
                    </h>
                  </div>
                  <div className="flex desktop:hidden  mobile:h-[25px] items-center">
                    <h
                      style={{
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontWeight: "normal",
                        color: "#414141",
                        fontVariationSettings: "'opsz' 20",
                        whiteSpace: "nowrap", // Prevents text from wrapping
                      }}
                    >
                      Naj spomin nanje ne ugasne.
                    </h>
                  </div>
                </div>
                <a
                  href="#"
                  className="hidden tablet:flex desktop:flex items-center text-gray-600 mobile:mt-[75px] tablet:mt-[73px] desktop:mt-[50px] hover:text-blue-500 transition duration-200 "
                >
                  <div className="rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white p-[6px] transition duration-300 hover:scale-105 active:scale-95">
                    <Image
                      src={iconFb}
                      alt="Facebook Icon"
                      width={27}
                      height={27}
                    />
                  </div>
                  <h className="font-variation-customOpt16 ml-[16px]">
                    Facebook
                  </h>
                </a>
              </div>
              <div
                className="flex 
              desktop:ml-[118.79px] desktop:pt-[0.19px] tablet:ml-[47px] mobile:mt-[37px]"
              >
                <div className="">
                  <div className="h-[19px] flex items-center">
                    <h3 className="font-semibold text-[#ACAAAA]  text-[16px]">
                      Glavne strani
                    </h3>
                  </div>
                  <ul className="mt-[24px] ">
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center">
                      <div
                        className=" text-[#414141] font-variation-customOpt16 hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px] cursor-pointer"
                        onClick={handleLocalQuickModalVisible}
                      >
                        Osmrtnice
                      </div>
                    </li>
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] mt-4 items-center">
                      <div
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px] cursor-pointer"
                        onClick={handleMemoralPopupVisible}
                      >
                        Pogrebi
                      </div>
                    </li>
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Spominska
                      </a>
                    </li>
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Cvetličarne
                      </a>
                    </li>
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal   hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Pogrebna podjetja
                      </a>
                    </li>
                    <li className="flex tablet:hidden desktop:hidden mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal   hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Partnerji
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ml-[52px] tablet:ml-[51.75px] desktop:ml-[103.75px]  ">
                  <div className="h-[19px] flex items-center ">
                    <h3 className="font-semibold text-[#ACAAAA]  text-[16px]">
                      Koristne povezave
                    </h3>
                  </div>
                  <ul className="mt-[24px] ">
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center">
                      <a
                        href="#"
                        className=" text-[#414141] font-normal   hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Pogosta vprašanja
                      </a>
                    </li>
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] mt-4 items-center">
                      <a
                        href="#"
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Kaj storiti, ko se zgodi
                      </a>
                    </li>
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Kako oddati osmrtnico
                      </a>
                    </li>
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Kontakt
                      </a>
                    </li>
                    <li className="hidden tablet:flex desktop:flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal   hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Partnerji
                      </a>
                    </li>
                    <li className="flex desktop:hidden mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal   hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Povej naprej
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="hidden tablet:hidden desktop:flex flex-col ml-[107.78px]">
                  <div className="h-[19px] flex items-center ">
                    <h3 className="font-semibold text-[#ACAAAA]  text-[16px]">
                      Drobni tisk
                    </h3>
                  </div>
                  <ul className="mt-[24px] ">
                    <li className="flex h-[24px] items-center">
                      <a
                        href="#"
                        className=" text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[16px]"
                      >
                        Splošni pogoji poslovanja
                      </a>
                    </li>
                    <li className="flex h-[24px] mt-4 items-center">
                      <a
                        href="#"
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]"
                      >
                        Politika zasebnosti
                      </a>
                    </li>
                    <li className="flex h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]"
                      >
                        Politika varovanja osebnih podatkov
                      </a>
                    </li>
                    <li className="flex h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]"
                      >
                        Piškotki
                      </a>
                    </li>
                    <li className="flex h-[24px] items-center mt-4">
                      <a
                        href="#"
                        className="text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[16px]"
                      >
                        Povej naprej
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <div className="flex tablet:hidden desktop:hidden justify-center mt-[23px]">
            <div className="flex flex-col  w-[311px] self-center ">
              <div className="flex justify-center items-center h-[38px]   ">
                <a
                  href="#"
                  className="flex items-center text-gray-600  hover:text-blue-500 transition duration-200 "
                >
                  <Image
                    src={mobFb}
                    alt="Facebook Icon"
                    className=" h-12 w-12  mt-2"
                  />
                  <h className="font-variation-customOpt14 ml-[5px] text-[14px]">
                    Facebook
                  </h>
                </a>
              </div>
              <div className=" flex flex-col mt-[23px] px-[6.5px] ">
                <div className="flex justify-between items-center ">
                  <div className="flex items-center h-6 ">
                    <a
                      href="#"
                      className=" text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[13px]"
                    >
                      Splošni pogoji poslovanja
                    </a>
                  </div>
                  <div className="flex items-center h-6 ">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[13px]"
                    >
                      Politika zasebnosti
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center h-6 ">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[13px]"
                    >
                      Politika varovanja osebnih podatkov
                    </a>
                  </div>
                  <div className="flex items-center h-6 ">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[13px]"
                    >
                      Piškotki
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-4 h-6 items-center font-variation-customOpt12 text-[12px] text-[#414141]">
                © osmrtnica.com, 2024. Vse pravice pridržane.
              </div>
            </div>
          </div>
          <div className="flex mobile:hidden tablet:flex desktop:hidden h-[33px] tablet:w-[680px] justify-center  mt-[46px]  tablet:pl-[35px]">
            <div className="w-[612px] h-[33px]  items-end pl-[6px]">
              <div className=" h-full w-[596px] flex  space-x-[18px] flex-row ">
                <div className="flex items-center h-6 ">
                  <a
                    href="#"
                    className=" text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[13px]"
                  >
                    Splošni pogoji poslovanja
                  </a>
                </div>
                <div className="flex items-center h-6 ">
                  <a
                    href="#"
                    className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[13px]"
                  >
                    Politika zasebnosti
                  </a>
                </div>
                <div className="flex items-center h-6 ">
                  <a
                    href="#"
                    className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[13px]"
                  >
                    Politika varovanja osebnih podatkov
                  </a>
                </div>
                <div className="flex items-center h-6 ">
                  <a
                    href="#"
                    className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[13px]"
                  >
                    Piškotki
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden desktop:flex desktop:mt-[92px] w-[680px] desktop:w-[1137px] pr-[1px] ">
            <div className="desktop:w-[427px] h-6 mt-[48px] flex  items-center ">
              <div className="hidden desktop:flex font-variation-customOpt12 text-[12px] text-[#414141] ">
                © osmrtnica.com, 2024. Vse pravice pridržane.
              </div>
            </div>
            <div className="border-t border-[#117ab7] flex w-[680px] desktop:w-[710px] ">
              <BottomSlider data={[{}, {}, {}]} />
            </div>
          </div>
          <div className="hidden tablet:flex desktop:hidden w-[680px] pr-[1px] ">
            <div className="absolute z-50 mobile:ml-[40px] tablet:ml-[42px] w-[280px] h-4 desktop:w-[427px] desktop:h-6 desktop:mt-[48px] mt-[84px] flex  items-center ">
              <div className="flex desktop:flex font-variation-customOpt12 text-[12px] text-[#414141] ">
                © osmrtnica.com, 2024. Vse pravice pridržane.
              </div>
            </div>
            <div className="border-t border-[#117ab7] flex w-[680px] desktop:w-[710px] ">
              <BottomSliderForTabAndMob data={[{}, {}, {}]} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    {isLocalQuickModalVisible && (
      <LocalQuickReviewModal
        setIsLocalQuickModalVisible={setIsLocalQuickModalVisible}
      />
    )}
    {isMemoralPopupVisible && (
      <MemoralPopup
        setIsMemoralPopupVisible={setIsMemoralPopupVisible}
      />
    )}
    </>
  );
}

export function FooterForFaq() {
  return (
    <div className="bg-[#083545] border-l-1 border-r-1 border-t-1 border-b-1 border-color-[#E3E8EC] pt-[29px] mobile:pt-[15px] pb-[9px]">
      <div className="flex justify-between items-center tablet:w-[695px] mobile:w-[340px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto">
        <Image src={logoWhite} width={160} height={20} alt="c" className="w-[160px] h-[20px] mobile:hidden" />
        <div className="inline-flex gap-[10px] mobile:gap-[8px] text-[14px] items-center mobile:justify-center mobile:w-full">
          <Link href="/" className="text-[#DAEBF1] ">Prva stran</Link>
          <div className="w-[5px] h-[5px] bg-[#DAEBF1] rounded-full"></div>
          <Link href="/" className="text-[#DAEBF1] ">Stran za cvetličarne</Link>
          <div className="w-[5px] h-[5px] bg-[#DAEBF1] rounded-full"></div>
          <Link href="/" className="text-[#DAEBF1] ">Pogrebna podjetja</Link>
        </div>
      </div>
      <div className="flex justify-between items-center tablet:w-[695px] mobile:w-[320px] desktop:w-[1190px] mx-auto bg-[#D4D4D4] h-[1px] mt-[18px] mobile:hidden"></div>
      <div className="flex justify-between items-center tablet:w-[695px] mobile:w-[320px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto mt-[18px] mobile:hidden">
        <div className="flex flex-col">
        <Image src={logo2} width={160} height={20} alt="c" className="w-[160px] h-[20px] hidden mobile:flex mb-[5px]" />

        <span className="text-[12px] text-[#C7C7C7] font-normal leading-[24px]">© 2025 Vse pravice zadržane</span>
        </div>
        <div className="inline-flex gap-[30px] mobile:gap-[16px]">
          <Link href="/" className="text-[#A7C6E3] underline w-[65px] text-[14px]">Pišite nam</Link>
          <Link href="/" className="">
            <Image src={"/promo_footer_facebook_white.png"} width={18} height={18} alt="Facebook Icon" />
          </Link>
          <Link href="/" className="">
            <Image src={"/promo_footer_instagram_white.png"} width={18} height={18} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <div className="text-center text-[#1A6F8D] font-[400] text-[12px] leading-[100%] mt-[12px] mb-[6px] hidden mobile:block">
      www.osmrtnica.com @ 2025.  Vse pravice zadržane
      </div>
    </div>
  )
}

export function FooterForFaq2() {
  return (
    <div className="bg-[#083545] border-l-1 border-r-1 border-t-1 border-b-1 border-color-[#E3E8EC] pt-[29px] mobile:pt-[15px] pb-[9px]">
      <div className="flex justify-between items-center tablet:w-[695px] mobile:w-[340px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto">
        <Image src={logoWhite} width={160} height={20} alt="c" className="w-[160px] h-[20px] mobile:hidden" />
        <div className="inline-flex gap-[10px] mobile:gap-[8px] text-[14px] items-center mobile:justify-center mobile:w-full">
          <Link href="/" className="text-[#DAEBF1]  underline">Prva stran</Link>
          <div className="w-[5px] h-[5px] bg-[#DAEBF1] rounded-full underline"></div>
          <Link href="/" className="text-[#DAEBF1] mobile:hidden underline">Stran za cvetličarne</Link>
          <Link href="/" className="text-[#DAEBF1] mobile:block hidden underline">Cvetličarne</Link>
          <div className="w-[5px] h-[5px] bg-[#DAEBF1] rounded-full underline"></div>
          <Link href="/" className="text-[#DAEBF1]  underline">Pogrebna podjetja</Link>
        </div>
      </div>
      <div className="flex justify-between items-center tablet:w-[695px] mobile:w-[320px] desktop:w-[1190px] mx-auto bg-[#D4D4D4] h-[1px] mt-[18px] mobile:hidden"></div>
      <div className="flex justify-between items-center tablet:w-[695px] mobile:w-[320px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto mt-[18px] mobile:hidden">
        <div className="flex flex-col">
        <Image src={logo2} width={160} height={20} alt="c" className="w-[160px] h-[20px] hidden mobile:flex mb-[5px]" />

        <span className="text-[12px] text-[#C7C7C7] font-normal leading-[24px]">© 2025 Vse pravice zadržane</span>
        </div>
        <div className="inline-flex gap-[30px] mobile:gap-[16px]">
          <Link href="/" className="text-[#A7C6E3] underline w-[65px] text-[14px]">Pišite nam</Link>
          <Link href="/" className="">
            <Image src={"/promo_footer_facebook_white.png"} width={18} height={18} alt="Facebook Icon" />
          </Link>
          <Link href="/" className="">
            <Image src={"/promo_footer_instagram_white.png"} width={18} height={18} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <div className="text-center text-[#1A6F8D] font-[400] text-[12px] leading-[100%] mt-[12px] mb-[6px] hidden mobile:block">
      www.osmrtnica.com @ 2025.  Vse pravice zadržane
      </div>
    </div>
  )
}
