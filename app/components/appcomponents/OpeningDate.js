import React from "react";
import Link from "next/link";

const OpeningDate = () => {
  return (
    <div className="max-w-[1920px]  bg-[#BCD7F455] ">
      {/*Main contianer*/}
      <div className="relative flex justify-center bg-[#BCD7F455] tablet:items-center desktop:items-center flex-row max-w-[1920px] w-full overflow-hidden mx-auto dekstop:h-[328px] tablet:h-[284px] mobile:h-[394px]">
        <img
          src="/ozadje2.avif"
          alt="Flower_img"
          className="h-[328px] max-w-[1920px] w-full object-cover hidden desktop:flex"
        />

        <img
          src="/oranzno_ozadje.avif"
          alt="Flower_img"
          className="h-[328px] w-[378px] mobile:w-full mobile:h-[166px] object-cover flex  bg-[#BCD7F445] desktop:hidden tablet:ml-auto mobile:mt-auto "
        />

        {/*text container for desktop*/}
        <div className="mx-auto w-[1085px] absolute h-[243px] justify-end hidden desktop:flex">
          {/*blur container*/}
          <div className="flex w-[526px] h-[243px] flex-col justify-center items-center rounded-[16px] bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF30]"
            style={{
              border: '2px solid #EDF1F3',
              backdropFilter: 'blur(64px)',
            }}
          >
            {/*text container inside*/}
            <div className="flex  h-[174px] flex-col justify-between">
              <div className="flex flex-col w-full h-[102px]">
                <div className="text-[40px] text-[#3C3E41] font-variation-customOpt40 text-center mt-[-5px]">
                Uradna otvoritev je 30. junija
                </div>
                <div className="text-[24px] text-[#3C3E41] font-bold mt-[3px] font-variation-customOpt24 text-center">
                  Izdelajte svojo spletno stran še pravočasno
                </div>
              </div>

              <Link
                href={"/companyregistrationpage"}
                className="w-[250px] h-[53px] rounded-full text-white justify-center items-center self-center shadow-custom-light-dark bg-gradient-to-b from-[#0D94E8] to-[#1860A3] hidden desktop:flex"
                style={{
                  boxShadow: '0px 4px 5px 0px #00000038, 0px 2px 3px 0px #00000073',
                }}
              >
                Sodelujmo
              </Link>
            </div>
          </div>
        </div>

        {/*text container for tablet*/}
        <div className="mx-auto w-[598px] absolute hidden tablet:flex ">
          <div className="flex w-[478px] h-[174px] flex-col justify-between">
            <div className="flex flex-col w-full h-[102px]">
              <div className="text-[40px] text-[#3C3E41] font-variation-customOpt40 text-left mt-[-5px]">
                Uradna otvoritev je 1. avgusta
              </div>
              <div className="text-[24px] text-[#3C3E41] font-bold mt-[5px] font-variation-customOpt24 text-left">
                Izdelajte svojo spletno stran še pravočasno
              </div>
            </div>

            <Link
              href={"/companyregistrationpage"}
              className="w-[122px] flex h-[48px] rounded-lg text-black justify-center items-center self-start shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] "
            >
              Začni zdaj
            </Link>
          </div>
        </div>

        {/*text container for mobile */}
        <div className="w-[297px] h-[282px] absolute mt-[37px] hidden mobile:flex flex-col">
          <div className="flex w-[297px] h-[195px] flex-col justify-between">
            <div className="flex flex-col w-full h-[102px]">
              <div className="text-[28px] text-[#3C3E41] font-variation-customOpt28 text-center mt-[-5px] leading-[48px]">
                Uradna otvoritev je 1.avgusta
              </div>
              <div className="text-[20px] text-[#3C3E41] font-bold mt-[2px] font-variation-customOpt20wght400 text-center leading-[48px]">
                Izdelajte svojo spletno stran še pravočasno
              </div>
            </div>
          </div>
          <Link
            href={"/companyregistrationpage"}
            className="flex h-[48px] rounded-lg text-[#1E2125] font-variation-customOpt16 text-[16px] border-[#BCD7F4] 
        border-[2px] mt-[13px] w-full justify-center items-center self-start shadow-custom-light-dark-with-white bg-gradient-to-r  from-[#E3E8EC80] to-[#FFFFFF80] "
          >
            Začni zdaj
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpeningDate;
