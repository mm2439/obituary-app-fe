import React from "react";

const FloristsSunFlowerView = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex desktop:mt-[92.02px] tablet:mt-[80px]  mt-[72px] justify-center h-[451px] tablet:h-[415px] desktop:h-[456px] w-full shadow-custom-light-dark-banner">
          <img
            src={"/soncnica.avif"}
            alt="soncnica"
            className=" h-[100%] w-full object-cover"
          />
 
        <div
          className="flex   absolute z-10 w-[330px] h-[451px]
                mobile:items-center mobile:justify-center
                tablet:w-[680px] tablet:h-[415px] tablet:items-center
                desktop:w-[1200px] desktop:h-[456px] desktop:items-end  "
        >
          <div
            className=" flex flex-col
                             rounded-2xl border-2 border-[#EDF1F3] shadow-custom-light-dark-banner 
                              bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF50] backdrop-blur-sm
                              w-[325px] py-[40.5px] px-[16px]
                              tablet:w-[530px]   tablet:py-7 tablet:px-9 tablet:ml-[43px]
                              desktop:w-[530px] desktop:py-7 desktop:px-9   desktop:mb-[51px] desktop:ml-[89px]
                            "
          >
            <div className="flex mobile:h-[66px] h-[42px] items-center">
              <h1
                className="flex mobile:text-[28px] text-[36px] text-[#1E2125] font-variation-customOpt36
                           font-normal mobile:leading-[32.81px] leading-[47px] "
              >
                Cvetličana z dolgoletno tradicijo
              </h1>
            </div>
            <div className="flex flex-col mt-6">
              <p className="text-[#414141]  text-[16px] font-variation-customOpt16 font-normal">
                V Cvetličarni Suniflower, na levem bregu Ljubljanice, že 22 let
                širimo ljubezen do cvetličarske umetnosti. Nudimo vam rezano
                cvetje, lončnice, žalne in poročne aranžmaje, aranžiranje daril.
              </p>
              <p className="text-[#414141] mt-[25px]  text-[16px] font-variation-customOpt16 font-normal">
                Obiščite nas!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-end mobile:h-[42px] h-[21px] items-center leading-[21px] mt-[3px]
            mobile:w-[343px]  mobile:self-end
            tablet:mt-[6px] tablet:pr-[9px]
            desktop:mt-[14px] desktop:pr-[91px]"
      >
      </div>
    </div>
  );
};

export default FloristsSunFlowerView;
