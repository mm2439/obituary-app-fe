import Image from "next/image";
import logo from "@/public/app_big_logo.png";
import iconFb from "@/public/icon_facebook.png";
import mobFb from "@/public/fb_mob.png";

import BottomSlider from "../authcomponents/BottomSlider";
import BottomSliderForTabAndMob from "../authcomponents/BottomSliderForTabAndMob";


export default function Footer() {
  return (
    <div className="flex">
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
                      <a
                        href="#"
                        className=" text-[#414141] font-variation-customOpt16 hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Osmrtnice
                      </a>
                    </li>
                    <li className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] mt-4 items-center">
                      <a
                        href="#"
                        className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 mobile:text-[14px] tablet:text-[16px] desktop:text-[16px]"
                      >
                        Pogrebi
                      </a>
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
  );
}
