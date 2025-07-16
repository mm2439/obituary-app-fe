import React from "react";

const FreeCharge = () => {
  return (
    <div className="w-full bg-[#edf1f4]">
      <div className="relative max-w-[1920px]  py-[65px] desktop:py-[105px] tablet:py-[75px] w-full overflow-hidden flex mx-auto justify-center items-center">
        {/*Main container */}
        <div className="w-[669px] h-[616px] tablet:w-[637px] tablet:h-[685px] mobile:w-[337px] mobile:h-[483px] flex flex-col">
          {/*header container*/}
          <div className="flex mobile:w-[304px] mobile:h-[228px] tablet:h-[228px] mx-auto flex-col">
            <div className="text-[40px] text-[#3C3E41] mobile:text-[28px] mobile:font-variation-customOpt28 text-center font-variation-customOpt40  tablet:mt-[1px] tablet:truncate mobile:mt-[1px] leading-[48px] mobile:leading-10">
              Spletno stran si sami izdelate v 30 minutah
            </div>

            {/*text for desktop*/}
            <div className="text-[24px] text-[#3C3E41] self-center font-variation-customOpt24 font-bold mt-[12px] mobile:mt-[15px] hidden desktop:flex">
              BREZPLAČNO
            </div>

            {/*text for tablet & mobile*/}
            <div className="text-[24px] text-[#3C3E41] self-center font-variation-customOpt24 mobile:text-[20px] mobile:font-variation-customOpt20wght400 mobile:font-bold font-bold mt-[11px] mobile:mt-[7px] flex desktop:hidden">
              Bolj enostavno ne gre
            </div>

            <p className="text-[18px] text-[#3C3E41] text-center font-variation-customOpt18 mt-[22px] mobile:mt-[29px] leading-[27px] tablet:mx-6">
              Korak za korakom v naši predlogi zamenjate tekste s svojimi in
              vstavite svoje slike.
            </p>
          </div>

          {/*image for mobile */}
          {/* 7 October 2024 To be confirmed */}
          <img
            src="/image_desktop_offer.png"
            className="w-[336px] h-[217px] self-center mt-[42px] hidden mobile:flex"
          ></img>

          {/*image for tablet*/}
          {/* 7 October 2024 - To be confirmed */}
          <img
            src="/image_desktop_offer.png"
            className=" h-[401px] self-center mx-4 mt-[63px] desktop:mt-[70px] flex mobile:hidden"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default FreeCharge;
