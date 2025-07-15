import Image from "next/image";
import logo from "@/public/app_big_logo.png";
import iconFb from "@/public/icon_facebook.png";
import mobFb from "@/public/fb_mob.png";

import BottomSlider from "../authcomponents/BottomSlider";
import BottomSliderForTabAndMob from "../authcomponents/BottomSliderForTabAndMob";
import Link from "next/link";
export default function LoginFooter() {
  return (
    <div className="flex">
      <div className="flex flex-col w-full bg-[#E3E8EC] items-center justify-center">
        {/* <div className="flex w-full desktop:w-full tablet:w-full bg-red-500 mobile:h-[609px] tablet:h-[500px] desktop:h-[480px]  justify-center "> */}
        <div
          className="
      mobile:w-[360px]  tablet:w-[680px] desktop:w-[1200px]    
       desktop:pl-[62px] desktop:pr-[40.19px]
       mobile:h-auto tablet:h-auto tablet:pb-[46px] desktop:h-[407px]
       "
        >
          <footer
            className=" flex flex-col
        mobile:w-[311.88px] tablet:w-[612px] desktop:w-[1096.97px]       
        mobile:mt-[80px] tablet:mt-[46px] desktop:mt-[60px] 
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
                  <div className="invisible  mobile:h-[25px] items-center">
                    <h
                      // className="font-variation-customOpt16 text-[16px] text-[#414141] leading-[24px] "
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
                  className=" flex items-center text-gray-600 mt-[5px] hover:text-blue-500 transition duration-200 "
                >
                  <div className="rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white p-[6px] transition duration-300 hover:scale-105 active:scale-95">
                    <Image
                      src={"/icon_phone.png"}
                      alt="Call Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                  <h className="font-variation-customOpt16 ml-[16px]">
                    386 05 05 05 05
                  </h>
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 mt-[8px] hover:text-blue-500 transition duration-200 "
                >
                  <div className="rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white p-[6px] transition duration-300 hover:scale-105 active:scale-95">
                    <Image
                      src={"/ico_@.png"}
                      alt="Call Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                  <h className="font-variation-customOpt16 ml-[16px]">
                    best@website.com
                  </h>
                </a>

                <a
                  href="#"
                  className="desktop:hidden flex  items-center text-gray-600 ml-[-2px] mt-[8px] hover:text-blue-500 transition duration-200 "
                >
                  <div className="rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white p-[6px] transition duration-300 hover:scale-105 active:scale-95">
                    <Image
                      src={"/img_fb1.png"}
                      alt="FB Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                  <h className="font-variation-customOpt16 ml-[16px]">
                    Facebook
                  </h>
                </a>
              </div>
              <div
                className="flex 
              desktop:ml-[118.79px] desktop:pt-[0.19px] tablet:ml-[47px] mobile:mt-[64px]"
              >
                <div className="">
                  <div className="h-[19px] flex items-center">
                    <h3 className="font-semibold text-[#1E2125]  text-[16px]">
                      Important links
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
                    <li className=" mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center mt-4">
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
                    <h3 className="font-semibold text-[#1E2125] text-[16px]">
                      Helpful links
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
                        Povej naprej
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
                  {/* Container for facebook */}
                  <div className="hidden desktop:flex w-[243px] px-[25px] py-[27px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] flex-col items-center shadow-custom-light-dark rounded-[8px]">
                    <div className="text-[#1E2125] text-[20px] font-variation-customOpt20">
                      Spremljajte nas na FB
                    </div>

                    <div className="text-[14px] text-[#1E2125] mt-[31px] leading-[16px] font-[400px]">
                      Med drugim tam najdete tudi občasne popuste samo za prve,
                      brezplačne nadgradnje in prihajajoče novosti.
                    </div>

                    <Link
                      href={"#"}
                      className="mt-[15px] rounded-[8px] px-[61.5px] py-[12px] bg-[#5470B0] text-[16px] text-[#FFFFFF] leading-[24px] font-variation-customOpt16 font-[400px]"
                    >
                      Facebook
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="flex tablet:hidden desktop:hidden justify-center mt-[23px]">
            <div className="flex flex-col mobile:mb-[60px] w-[311px] self-center ">
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
          <div className=" tablet:flex hidden w-[247px] mx-auto text-[#414141] text-[12px] leading-[24px] font-variation-customOpt12">
              © Our Company, 2024. Vse pravice pridržane.
            </div>
            <div className="w-full desktop:flex hidden h-[1px] mt-[20px] bg-[#D4D4D4]"></div>
          <div className="desktop:flex hidden w-full h-[48px]  flex-row justify-between items-center">
            
            <div className=" h-[24px] w-[247px] text-[#414141] text-[12px] leading-[24px] font-variation-customOpt12">
              © Our Company, 2024. Vse pravice pridržane.
            </div>

            <div className="h-[24px] text-[#414141] text-[12px] leading-[24px] font-variation-customOpt12 
            flex flex-row justify-end gap-[21px]">
              <div>Splošni pogoji poslovanja</div>

              <div>Politika zasebnosti</div>
              <div>
              Politika varovanja osebnih podatkov
              </div>
              <div>
              Piškotki
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
