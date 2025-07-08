import React from "react";
import Link from "next/link";

const SimpleComp = () => {
  return (
    <div className="w-full desktop:bg-[#FFFFFF] tablet:bg-[#FFFFFF]">
      <div className="relative max-w-[1920px]  desktop:h-[488px] tablet:h-[494px]  w-full overflow-hidden flex mx-auto justify-center items-center">
        {/*Main contianer*/}
        <div className="flex max-w-[1038.25px] bg-[#FFFFFF] w-full px-[20px] mobile:px-0 tablet:max-w-[724px] mobile:w-full mobile:mx-4 flex-col">
          {/*Header contianer*/}
          <div className="flex max-w-[669px] w-full tablet:w-[600px] mobile:w-[297px] mx-auto flex-col mobile:mt-9">
            <div className="flex tablet:h-[48px] flex-col">
              <h1 className="text-[40px] text-[#3C3E41] font-variation-customOpt40 mobile:text-[28px] text-center mobile:font-variation-customOpt28 mobile:text-center tablet:mt-[2px] mobile:mt-0 tablet:text-center leading-[48px]">
                Enostavno je
              </h1>
            </div>
          </div>

          {/*Main contianer for boxes*/}
          <div className="flex w-full h-[244px] mobile:w-[296px] mobile:h-[749px] mt-[66px] tablet:mt-[54px] mx-auto mobile:mt-[48px] mobile:flex-col">
            {/*Main contianer for tablet*/}
            <div className="w-full flex-col hidden tablet:flex">
              {/* coloum container*/}
              <div className="flex h-[248px] w-full">
                {/*1st box*/}
                <div className="max-w-[200.42px] w-full h-[244px] bg-[#0A85C2] flex-col items-center hidden tablet:flex rounded-lg">
                  <img
                    src="/image_registration.png"
                    className="w-[64px] h-[64px] mt-4"
                  ></img>
                  <div className="text-[20px] h-[46px] text-[#FFFFFF] font-variation-customOpt20wght400 font-semibold mt-[12px]">
                    Registriraj se
                  </div>
                  <Link
                    href={"/registrationpage"}
                    className="w-[81px] flex h-[48px] rounded-lg text-[#3C3E41] justify-center items-center self-center mt-5 shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] "
                  >
                    Vpis
                  </Link>
                </div>

                {/*2nd box*/}
                <div className="max-w-[220px] w-full h-[241px] flex-col items-center ml-[40px] mobile:mt-12 hidden tablet:flex">
                  <img
                    src="/image_desktop_pencil.png"
                    className="w-[70px] h-[70px] mt-2"
                  ></img>
                  <div className="text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-[13px]">
                    Začneš lahko takoj
                  </div>
                  <div className="text-[16px] text-[#3C3E41] font-variation-customOpt16 text-center mt-4">
                    Odpri osmrtnico svojih dragih in z izrekanji sožalja, vpisi
                    v Žalno knjigo, prižiganjem svečk, lahko pričneš takoj.
                  </div>
                </div>

                {/*3rd box*/}
                <div className="max-w-[220px] w-full h-[248px] flex-col items-center ml-[30px] mobile:mt-12 hidden tablet:flex">
                  <img
                    src="/image__mobile_device.png"
                    className="w-[64px] h-[64px] mt-4"
                  ></img>
                  <div className="text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-[11px]">
                    Povej naprej
                  </div>
                  <div className="text-[16px] text-[#3C3E41] font-variation-customOpt16 text-center mt-4">
                  V svoji lokalni cvetličarni brezplačno dobiš tudi digitalne kartice za pošiljanje naprej; in nekaj časa tudi Skrbnika.   
                  </div>
                </div>
              </div>
            </div>

            {/*C1 container for desktop*/}
            <div className="w-[319.42px] h-full mobile:w-[296px] mobile:h-[244px] bg-[#0A85C2] flex-col items-center flex tablet:hidden rounded-lg">
              <img
                src="/image_registration.png"
                className="w-[64px] h-[64px] mt-4"
              ></img>
              <div className="text-[20px] h-[46px] text-[#FFFFFF] font-variation-customOpt20wght400 font-semibold mt-[12px]">
                Registriraj se
              </div>
              <Link
                href={"/registrationpage"}
                className="flex w-[81px] h-[48px] rounded-lg text-[#3C3E41] justify-center items-center self-center mt-[16px] shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF]"
              >
                Vpis
              </Link>
            </div>

            {/*C2 container for desktop*/}
            <div className="w-[319.42px] h-[217px] mobile:w-[296px] mobile:h-[217px] flex-col items-center desktop:ml-[40px] mobile:mt-8 flex tablet:hidden">
              <img
                src="/image_desktop_pencil.png"
                className="w-[70px] h-[70px] mt-2"
              ></img>
              <div className="text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-4 mobile:mt-3">
                Začneš lahko takoj
              </div>
              <div className="text-[16px] h-[72px] text-[#3C3E41] font-variation-customOpt16 text-center mt-4 desktop:mx-3">
                Odpri osmrtnico svojih dragih in z izrekanji sožalja, vpisi v
                Žalno knjigo, prižiganjem svečk, lahko pričneš takoj.
              </div>
            </div>

            {/*C3 container for desktop*/}
            <div className="w-[319.42px] h-[217px] mobile:w-[296px] mobile:h-[217px] flex-col items-center desktop:ml-[40px] mobile:mt-8 flex tablet:hidden">
              <img
                src="/image__mobile_device.png"
                className="w-[64px] h-[64px] mt-4"
              ></img>
              <div className="text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-[14px] mobile:mt-3">
                Povej naprej
              </div>
              <div className="text-[16px] h-[72px] text-[#3C3E41] font-variation-customOpt16 text-center mt-4 mobile:mt-3 desktop:mx-3">
              V svoji lokalni cvetličarni brezplačno dobiš tudi digitalne kartice za pošiljanje naprej; in nekaj časa tudi Skrbnika.   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleComp;
