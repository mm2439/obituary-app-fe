import React from "react";
import Image from "next/image";
import imgLocation from "@/public/ico_location.png";
import imgMessage from "@/public/ico_message.png";
import imgPhone from "@/public/ico_phone.png";

const CompanyFooter = ({ data }) => {
  return (
    // Main container
    <div className="w-full bg-[#D4E6F9]">
      <div className="max-w-[1920px] h-[341px] mobile:h-[566px] mx-auto w-full flex items-center overflow-hidden bg-[#D4E6F9]">
        {/* Main container for content */}
        <div className="max-w-[610px] w-full h-[245px] mobile:h-auto mx-auto flex flex-col items-center mt-[8px]">
          {/* First content container */}
          <div className="w-full h-[48px] mobile:h-[272px] mobile:mt-[20px] flex flex-row mobile:flex-col items-center">
            <div className="font-variation-customOpt40 flex mobile:hidden text-[40px] text-[#1E2125] mr-[48px] whitespace-nowrap">
              Več informacij:
            </div>

            <div className="font-variation-customOpt24 mb-[20px] font-semibold text-[24px] hidden mobile:flex text-[#1E2125] whitespace-nowrap">
              Pogrebni zavod Trbovlje
            </div>

            <div className="flex flex-row mobile:flex-col gap-[16px]">
              <div className="w-[48px] h-[48px] mobile:w-[200px] mobile:h-[48px] rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
                <Image
                  src={imgLocation}
                  alt="imgLocation"
                  className=" w-[24px] h-[24px]"
                />
              </div>
              <div className="w-[48px] h-[48px] mobile:w-[200px] mobile:h-[48px] rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
                <Image
                  src={imgMessage}
                  alt="imgMessage"
                  className=" w-[24px] h-[24px]"
                />
              </div>

              <div className="w-[200px] h-[48px] mobile:w-[200px] mobile:h-[48px] rounded-lg text-black flex flex-row gap-[8px] justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
                <Image
                  src={imgPhone}
                  alt="imgCall"
                  className=" w-[24px] h-[24px]"
                />

                <div className="text-[#1E2125] text-[20px] font-[400px] leading-[23.44px] whitespace-nowrap">
                  {data?.phone || "1231391093"}
                </div>
              </div>
            </div>
          </div>

          {/* Border of 1 pixel */}
          <div className="h-[1px] min-h-[1px] w-[533px] mobile:w-[296px] bg-[#86BEDA] mobile:mt-[1px] desktop:mt-[24px] tablet:mt-[24px] relative" />

          {/* Middle container for content */}
          <div className="w-[336px] h-[68px] desktop:mt-[24px] tablet:mt-[24px] mobile:mt-[28px] flex flex-col items-center justify-end">
            <div
              className="text-black text-[24px] leading-[28.13px] mobile:leading-[23.44px] mobile:text-[20px]
                     mobile:font-variation-customOpt20 font-variation-customOpt24 whitespace-nowrap"
            >
              Delovni čas: {data?.workingHours || "pon-pet 7:00 - 15:00"}
            </div>
            <div className="text-[#414141] mt-[16px] font-variation-customOpt16 italic text-[16px] whitespace-nowrap">
              {data?.working_hour_highlight_text || "Poleti med 6. in 14. uro"}
            </div>
          </div>

          {/* Last container for content */}
          <div className="w-[505px] h-[87px] mt-[24px] mobile:w-[277px] mobile:h-[80px] mobile:mt-[51px]">
            <div className="flex flex-row mobile:flex-col text-black desktop:gap-[18px] tablet:gap-[18px] mobile:gap-[-10px] items-center ">
              <div className="text-[24px] font-variation-customOpt24 font-semibold whitespace-nowrap">
                24-urna dežurna služba:
              </div>
              <div className=" text-[40px] font-variation-customOpt40 font-bold whitespace-nowrap">
                {data?.emergencyPhone || "041-599-742"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFooter;
