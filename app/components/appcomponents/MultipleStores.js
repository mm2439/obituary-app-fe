import Image from "next/image";
import React from "react";

const MultipleStores = () => {
  return (
    <div className="w-full bg-[#E0E9F3]">
    <div className="relative max-w-[1920px]  h-[560px] tablet:h-[680px] mobile:h-[707px] w-full overflow-hidden flex mx-auto justify-center items-center">
      {/*Main Container for desktop*/}
      <div className="w-[1164px] h-[295px] hidden desktop:flex justify-between">
        {/*header container*/}
        <div className="flex w-[496px] flex-col">
          <h1 className="text-[40px] text-[#3C3E41] font-variation-customOpt40 mt-[39px]">
            Spletne rešitve za cvetličarne
          </h1>
          <div className="text-[24px] text-[#3C3E41] font-variation-customOpt24 font-semibold mt-1">
            Za majhne lokalne in tiste z več trgovinami
          </div>
          <p className="text-[18px] text-[#3C3E41] font-variation-customOpt18 mt-[22px] leading-[27px]">
            Ni pomembno samo, da si na spletu, pomembno je, da te uporabniki
            najdejo. Da si na pravem mestu ob pravem trenutku in prav to ponuja
            spletni imenik slovenskih cvetličarn.
          </p>
        </div>

        {/*image container*/}
        <div className="w-[635px] flex justify-end relative">
          <img
            src="/cvetlicarna_laptop.png"
            className="relative z-10 h-[401px] w-[635px]  object-cover"
          />
          <div className="absolute top-full left-1/2 -translate-x-1/2  w-full flex justify-center items-center bg-[#000000] h-[9px] blur-[44px]" />
        </div>
      </div>

      {/*Main container for tablet & mobile*/}
      <div className="w-[512px] h-[558px] mobile:w-[336px] mobile:h-[598px] flex flex-col desktop:hidden">
        {/*header container*/}
        <div className="flex w-[496px] h-[199px] mobile:w-[336px] mobile:h-[96px] mx-auto flex-col">
          <div className="text-[40px] text-[#3C3E41] mobile:text-[28px] mobile:font-variation-customOpt28 text-center font-variation-customOpt40 mt-[-5px] mobile:mt-0 mobile:leading-[48px]">
            Spletne rešitve za cvetličarne
          </div>
          <div className="text-[20px] text-[#3C3E41] text-center font-variation-customOpt20 font-semibold mt-[5px] mobile:mt-[15px] self-center leading-8 px-[50px]">
            Za majhne lokalne in tiste z več trgovinami{" "}
          </div>
          <p className="text-[18px] text-[#3C3E41] text-center font-variation-customOpt18 mt-[22px] leading-[27px] hidden tablet:flex">
            Ni pomembno samo, da si na spletu, pomembno je, da te uporabniki
            najdejo. Da si na pravem mestu ob pravem trenutku in prav to ponuja
            spletni imenik slovenskih cvetličarn.
          </p>
        </div>

        {/*image for mobile */}
        <Image
          src={"/cvetlicarna_laptop.png"}
          width={336}
          height={217}
          className="w-[336px] h-[217px] self-center mt-[79px] hidden mobile:flex"
        ></Image>

        {/*image for tablet*/}
        <img
          src="/cvetlicarna_laptop.png"
          className="w-[512px] h-[295px] mobile:w-[391px] self-center mt-[64px] mobile:mt-[44.9px] hidden tablet:flex"
        ></img>

        <div className=" w-[336px] h-[189px] mt-4 flex-col hidden mobile:flex">
          <p className="text-[18px] text-[#3C3E41] font-variation-customOpt18 text-center mt-[27px]">
            Ni pomembno samo, da si na spletu, pomembno je, da te uporabniki
            najdejo.
          </p>
          <p className="text-[18px] text-[#3C3E41] px-5 font-variation-customOpt18 text-center mt-7">
            Da si na pravem mestu ob pravem trenutku in prav to ponuja spletni
            imenik slovenskih cvetličarn.{" "}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MultipleStores;
