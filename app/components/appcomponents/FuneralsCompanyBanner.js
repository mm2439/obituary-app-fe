import Image from "next/image";
import React from "react";
import iconFb from "@/public/icon_facebook.png";
import iconWeb from "@/public/icon_web.png";

const FuneralsCompanyBanner = () => {
  return (
    <div className="relative bg-gradient-to-b to-[#E8F0F5] from-[#EBEDEF] flex-col w-full overflow-hidden mx-auto desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[80px] flex justify-center items-center">
      <img
        src="/pok_gabrsko4.avif"
        alt="pok_gabrsko"
        className="flex h-[300px] mobile:h-[212px] tablet:h-[220px] max-w-[1280px] w-full object-cover"
      />
      <div className="bg-white rounded-2xl border-2 p-7 mobile:p-4 border-[#EDF1F3]  h-[185px] mobile:h-[405px] tablet:h-[272px] max-w-[1009px] w-full tablet:w-[80%] mobile:w-[296px] absolute top-[195px] mobile:top-[184px] tablet:top-[152px]">
        <div className="w-full flex mobile:flex-col items-center">
          <div className="min-w-200 mobile:min-w-[184px] max-w-[252px] w-full">
            <Image
              src="/logo_funeral_company.png"
              alt="App Logo"
              width={1000}
              height={1000}
              className="w-[200px] mobile:w-[184px] mobile:h-[75px] h-[82px]"
            />
          </div>

          <h1 className="w-full text-[#1E2125] text-[24px] font-semibold leading-[28px] mobile:mt-2">
            Pogrebni zavod Trbovlje
          </h1>
          <div className="hidden desktop:flex w-[102px]">
            <div className=" w-12 h-12 flex justify-center items-center rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white mr-2">
              <Image
                src={iconWeb}
                className=" h-[24px] w-[24px]"
                alt="Facebook Icon"
                width={1000}
                height={1000}
              />
            </div>
            <div className=" w-12 h-12 flex justify-center items-center rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white">
              <Image
                src={iconFb}
                className=" h-[24px] w-[24px]"
                alt="Facebook Icon"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        <div class="hidden  desktop:flex justify-between items-center mt-3">
          <div>
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              NASLOV
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              Savinjska cesta 11a, Trbovlje
            </div>
          </div>
          <div className="h-6 w-[2px] bg-[#D4D4D4]" />
          <div>
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              EMAIL
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              javno.podjetje@komunala-trbovlje.si
            </div>
          </div>
          <div className="h-6 w-[2px] bg-[#D4D4D4]" />

          <div>
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              TELEFON
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              (03) 56 53 126
            </div>
          </div>
          <div className="h-6 w-[2px] bg-[#D4D4D4]" />

          <div>
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              WEBSITE
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              www.komunala-trbovlje.si
            </div>
          </div>
        </div>

        <div class="hidden  tablet:flex justify-between items-center mt-3">
          <div className="flex flex-1 flex-col">
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              NASLOV
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              Savinjska cesta 11a, Trbovlje
            </div>
          </div>
          <div className="flex flex-1 items-center">
            <div className="h-6 w-[2px] bg-[#D4D4D4] mr-9 ml-1" />
            <div>
              <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
                WEBSITE
              </div>
              <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
                www.komunala-trbovlje.si
              </div>
            </div>
          </div>
        </div>

        <div class="hidden  tablet:flex justify-between items-center mt-4">
          <div className="flex flex-1 flex-col">
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              TELEFON
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              (03) 56 53 126
            </div>
          </div>
          <div className="flex flex-1 items-center">
            <div className="h-6 w-[2px] bg-[#D4D4D4] mr-9 ml-1" />
            <div>
              <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
                EMAIL
              </div>
              <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
                javno.podjetje@komunala-trbovlje.si
              </div>
            </div>
          </div>
          <div className="hidden tablet:flex w-[102px]">
            <div className=" w-12 h-12 flex justify-center items-center rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white mr-2">
              <Image
                src={iconWeb}
                className=" h-[24px] w-[24px]"
                alt="Facebook Icon"
                width={1000}
                height={1000}
              />
            </div>
            <div className=" w-12 h-12 flex justify-center items-center rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white">
              <Image
                src={iconFb}
                className=" h-[24px] w-[24px]"
                alt="Facebook Icon"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>

        <div class="hidden  mobile:flex flex-col mt-10">
          <div className=" flex flex-col flex-1">
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              NASLOV
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              Savinjska cesta 11a, Trbovlje
            </div>
          </div>
          <div className=" flex flex-col flex-1 mt-[14px]">
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              EMAIL
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              javno.podjetje@komunala-trbovlje.si
            </div>
          </div>

          <div className=" flex flex-col flex-1  mt-[14px]">
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              WEBSITE
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              www.komunala-trbovlje.si
            </div>
          </div>

          <div className="flex flex-1 justify-between items-center mt-[14px]">
            <div className=" flex flex-col flex-1 ">
              <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
                TELEFON
              </div>
              <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
                (03) 56 53 126
              </div>
            </div>
            <div className="hidden mobile:flex w-[80px]">
              <div className=" w-9 h-9 flex justify-center items-center rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white mr-2">
                <Image
                  src={iconWeb}
                  className=" h-[24px] w-[24px]"
                  alt="Facebook Icon"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className=" w-9 h-9 flex justify-center items-center rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white">
                <Image
                  src={iconFb}
                  className=" h-[24px] w-[24px]"
                  alt="Facebook Icon"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  h-[565px] mobile:h-[937px] tablet:h-[606pxpx] max-w-[1280px] w-full flex justify-center items-end">
        <div className="max-w-[1009px] w-full tablet:w-[597.23px] mobile:w-[296px] flex mobile:flex-col justify-between desktop:px-6 mb-16 mobile:mb-12">
          <div className=" relative desktop:w-[452px] desktop:h-[295px] tablet:w-[276px] tablet:h-[235.81px] flex flex-col justify-center">
            <div className="text-[#1E2125] mobile:text-[28px] text-[40px] font-normal leading-[47px] mobile:leading-[33px] whitespace-nowrap mobile:text-center">
              Predstavitev
            </div>
            <div className="text-[#414141] text-[16px] font-normal leading-[24px] mt-4 mobile:text-center mobile:mb-10">
              Komunala Trbovlje v okviru pogrebnega zavoda izvaja pogrebno in
              pokopališko dejavnost. Delovni čas zavoda je od ponedeljka do
              petka med 7. in 15. uro v letnem času oziroma med 6. in 14. uro v
              času med 1. 6. in 31. 8.
            </div>
          </div>

          <div className=" relative desktop:w-[416px] desktop:h-[295px] w-[302.23px] h-[214.81px] flex justify-end">
            <img
              src="/pokopalisce_gabrsko1.avif"
              alt="Slika"
              className=" desktop:h-[256px]  desktop:w-[367.21px] w-[266.98px] h-[186.63px] object-cover rounded-lg border-[3px] border-white"
            />
            <img
              src="/pokopalisce_gabrsko2.avif"
              alt="Slika"
              className="desktop:h-[156px] desktop:w-[222.72px] w-[162.59px] h-[114.38px] object-cover absolute bottom-0 left-0 rounded-lg border-[3px] border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralsCompanyBanner;
