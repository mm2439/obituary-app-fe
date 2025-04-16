"use client";
import React from "react";
import Link from "next/link";

const FreePrice = () => {
  return (
    <div className="max-w-[1920px]  mx-auto h-[616px] tablet:h-[680px] w-full overflow-hidden">
      <div className="max-w-[1064px] w-full desktop:h-[253px] tablet:h-[253px] mx-auto mt-[109px] mobile:mt-[82px] flex flex-col">
        <div className="flex justify-center">
          <div className="text-[40px] mobile:hidden mobile:text-[28px] mobile:w-full leading-[48px] text-[#3C3E41] mobile:font-variation-customOpt28 font-variation-customOpt40 text-center">
            Cena? Popolnoma BREZPLAČNO!
          </div>

          <div className="text-[40px] mobile:text-[28px] hidden mobile:flex flex-col mobile:w-full leading-[48px] text-[#3C3E41] mobile:font-variation-customOpt28 font-variation-customOpt40 text-center">
            Cena?
            <div>Popolnoma BREZPLAČNO!</div>
          </div>
        </div>

        <div className="font-variation-customOpt24 mobile:font-variation-customOpt20 mx-auto leading-[48px] mt-[2px] font-bold text-[24px] mobile:text-[20px] text-[#3C3E41] text-center">
          Danes. Jutri. Za vedno.
        </div>

        <div className="w-[650px] mobile:w-[292px] desktop:h-[135px] text-center font-variation-customOpt18 mx-auto text-[18px] leading-[27px] mt-[16px] tablet:mt-[20px] text-[#3C3E41]">
          <div>
            Delimo iste cilje; kar najbolj pomagati žalujočim, da najdejo vse
            potrebne informacije na enem mestu v težkih trenutkih.
          </div>
          <div className="mt-[32px] tablet:mt-[28px]">
            Naše edino pričakovanje je, da dosledno in ažurno vnašate nove
            osmrtnice v sistem, da ima neko uporabno vrednost; tj vključno s
            sliko in časom pogreba.
          </div>
        </div>

        <div className="mt-[62px] mobile:hidden mx-auto w-[617.64px] tablet:w-[650px] tablet:h-[135px] h-[147px]">
          <div className="flex justify-center text-[#1E2125] text-[24px] font-bold font-variation-customOpt24 leading-[48px]">
            Oglej si primer strani za pogrebna podjetja
          </div>

          <div className="w-[99px] h-[48px] bg-[#BCD7F4] mx-auto flex mt-[8px] justify-center items-center rounded-lg">
            <Link
              href="/funeralcompany"
              className="font-variation-customOpt16 leading-[24px] text-[16px] text-[#1E2125] text-center"
            >
              Vzorec
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePrice;
