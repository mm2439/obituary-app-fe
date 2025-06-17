import React from "react";
import Image from "next/image";
import API_BASE_URL from "@/config/apiConfig";

const Qualityflowers = ({ data }) => {
  return (
    <div className=" w-full relative h-[278px] tablet:bg-[#FFFFFF] mobile:bg-[#FFFFFF] tablet:h-[337px] mobile:h-[537px] overflow-hidden mx-auto flex flex-col items-center">
      {data?.showBoxBackground === false && (
        <>
          <div className="w-full desktop:block mobile:hidden tablet:hidden h-full relative">
            <Image
              src="/plava_desktop.avif"
              alt="plava_desktop"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="w-full h-[244px] hidden tablet:block relative">
            <Image
              src="/plava_tablica.jpg"
              alt="plava_tablica"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full mobile:h-[474px] hidden mobile:block relative">
            <Image
              src="/plava_roza.avif.png"
              alt="plava_roza"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </>
      )}
      {data?.showBoxBackground === true && (
        <>
          <div className="w-full desktop:block mobile:hidden tablet:hidden h-full relative">
            <Image
              src={`${API_BASE_URL}/${data?.boxBackgroundImage}`}
              alt="plava_desktop"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="w-full h-[244px] hidden tablet:block relative">
            <Image
              src={`${API_BASE_URL}/${data?.boxBackgroundImage}`}
              alt="plava_tablica"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-full mobile:h-[474px] hidden mobile:block relative">
            <Image
              src={`${API_BASE_URL}/${data?.boxBackgroundImage}`}
              alt="plava_roza"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </>
      )}
      {/* Container for the data */}
      {data?.showBoxBackground === false && (
        <div className="w-full absolute flex flex-col items-center">
          {/* Main Container for data */}
          <div
            className="w-[697px] tablet:w-[533.17px] tablet:h-[136.63px] 
                h-[174px] flex gap-[67px] mobile:gap-[38px] mobile:w-[360px] mobile:h-[474px] mobile:mt-[46.9px] mobile:flex-col mt-[52px] tablet:mt-[54px] flex-row desktop:justify-center"
          >
            {/* First image Container*/}
            {data?.box_one_icon && data?.box_one_text && (
              <div
                className="w-[315px] h-[174px] mobile:mx-auto tablet:w-[242.59px] tablet:h-[136.63px] bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30]
                                     backdrop-blur border-[2px] border-[#FFFFFF] rounded-[16px] flex flex-col items-center"
              >
                <Image
                  src={`${data.box_one_icon}`}
                  width={70}
                  height={70}
                  alt="vehicle"
                  className="w-[70px] h-[52.5px] tablet:h-[55.17px] tablet:mt-[19.72px] mt-[40.75px] mx-auto"
                />

                <div
                  className="mt-[23.75px] tablet:mt-[16px] tablet:font-variation-customOpt16 text-[20px] 
                        tablet:text-[16px] flex justify-center tablet:leading-[18.75px] leading-[23.44px] text-[#22281C] font-variation-customOpt20"
                >
                  {data?.box_one_text}
                </div>
              </div>
            )}

            {/* Second image Container*/}
            {data?.box_two_icon && data?.box_two_text && (
              <div
                className="w-[315px] h-[174px] mobile:mx-auto tablet:w-[242.59px] tablet:h-[136.63px] bl bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30]
                     backdrop-blur border-[2px] border-[#FFFFFF] rounded-[16px]"
              >
                <Image
                  src={`${data.box_two_icon}`}
                  width={70}
                  height={70}
                  alt="vehicle"
                  className="w-[60px] h-[60px] tablet:w-[66.18px] 
                                                                        tablet:h-[65px] tablet:mt-[15.84px] mt-[32px] mx-auto"
                />

                <div
                  className="mt-[25px] tablet:mt-[16px] flex justify-center tablet:text-[16px] 
                        tablet:font-variation-customOpt16 text-[20px] tablet:leading-[18.75px] 
                        leading-[23.44px] text-[#22281C] tablet:font-variation-customOpt16 font-variation-customOpt20"
                >
                  <div className="px-[4px]">{data?.box_two_text}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Qualityflowers;
