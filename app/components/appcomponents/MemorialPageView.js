import Image from "next/image";
import Link from "next/link";
import React from "react";

const MemorialPageView = () => {
  return (
    <div className="relative w-full overflow-hidden mx-auto flex justify-center">
      <img
        src="/spominska_ozadje.avif"
        alt="spominska_ozadje.avif"
        className="h-[919px] mobile:h-[916px] w-full object-cover flex mobile:hidden"
      />
      <img
        src="/ozadje_mobile.jpg"
        alt="ozadje_mobile"
        className="h-[916px] w-full object-cover hidden mobile:flex"
      />

      <div
        className=" flex flex-col items-center
        desktop:w-[1200px] tablet:w-full mobile:w-[360px] mx-auto h-full  absolute"
      >
        <div className="flex flex-col items-center justify-center desktop:w-[904px] tablet:w-[90%] mobile:w-[331px] mx-auto h-[430px] mobile:h-[448px] mt-[79px] mobile:mt-[72px] mobile:mb-[56.15px] mb-[65.15px] rounded-lg border-2 border-[#FFFFFF] backdrop-blur-md bg-[#ffffff90]">
          <div className="h-[303px] mobile:h-auto  w-[750px] mobile:w-[295px] tablet:w-[556px] flex flex-col items-center">
            <div
              className="text-[#1E2125] 
          mobile:text-[28px] tablet:text-[40px] desktop:text-[40px] 
          font-normal leading-[47px]  mobile:leading-[33px]"
            >
              Odpri Spominsko stran
            </div>
            <p className="font-variation-customOpt16 mb-12 mobile:mb-4 mt-4 text-[#3C3E41] text-[16px] text-center leading-6 font-normal w-[629.27px] tablet:w-[596px] mobile:w-[301px]">
              Spomini niso večni. Prehitro nam uidejo, čarobni trenutki se
              pozabijo, slike zbledijo. Povežite spomine na najdražje v celoto
              in jih ohranite.
            </p>

            <div className="w-full flex flex-row mobile:flex-col mx-auto justify-between mr-12">
              <div className="h-[48px]">
                <input
                  type="email"
                  placeholder="Ime pokojnika/ce"
                  className="text-base leading-6 desktop:w-[367px] tablet:w-[270px] mobile:w-[295px] h-full font-normal border border-[#7C7C7C] rounded-lg px-[15.8px] text-[#7C7C7C] bg-white"
                />
              </div>
              <div className="h-[48px] mobile:mt-4">
                <input
                  type="email"
                  placeholder="Priimek pokojnika/ce"
                  className="text-base leading-6 desktop:w-[367px] tablet:w-[270px] mobile:w-[295px] h-full font-normal border border-[#7C7C7C] rounded-lg px-[15.8px] text-[#7C7C7C] bg-white"
                />
              </div>
            </div>
            <div
              className="flex w-full justify-center 
          mobile:pt-[22.09px] 
          tablet:pt-[43px] tablet:pb-[46px]
          desktop:pt-[45px] desktop:pb-[62px]"
            >
              <Link
                href={"obituarylist"}
                className="flex items-center rounded-lg justify-center shadow-custom-light-dark-with-white bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]
            mobile:h-12 mobile:w-full
            tablet:h-12 tablet:w-[97px]
            desktop:h-12 desktop:w-[97px]"
              >
                <div className="flex font-variation-customOpt16 text-[16px] text-[#1E2125] text-center">
                  Naprej
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-[24px] font-semibold text-[#1E2125] leading-[28px] font-variation-customOpt24">
          Zadnje Spominske strani
        </div>

        <div
          className=" flex flex-row items-center 
          mx-auto  mt-[20.85px] "
        >
          <div className="mobile:pr-5">
            <div className="rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
              <Image
                src={"/mario_danilo_primo.avif"}
                alt="mario_danilo_primo"
                width={1000}
                height={1000}
                className="h-[190.11px] w-[136px]  rounded-lg"
              />
            </div>
            <div className="text-center mt-3 text-[14px] font-normal text-[#1E2125] leading-[24px]">
              Mario Danilo Primo
            </div>
          </div>
          <div className="mobile:hidden px-10">
            <div className="rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
              <Image
                src={"/mario_danilo_primo.avif"}
                alt="mario_danilo_primo"
                width={1000}
                height={1000}
                className="h-[190.11px] w-[136px]  rounded-lg"
              />
            </div>
            <div className="text-center mt-3 text-[14px] font-normal text-[#1E2125] leading-[24px]">
              Mario Primo
            </div>
          </div>
          <div className="mobile:pl-5">
            <div className="rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
              <Image
                src={"/mario_danilo_primo.avif"}
                alt="mario_danilo_primo"
                width={1000}
                height={1000}
                className="h-[190.11px] w-[136px]  rounded-lg"
              />
            </div>
            <div className="text-center mt-3 text-[14px] font-normal text-[#1E2125] leading-[24px]">
              Danilo Primo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorialPageView;
