"use client"
import React from "react";
import Image from "next/image";
import icoCross from "@/public/ico_cross_popup.png";
import icoEdit from "@/public/ico_edit_popup.png";
import icoArrowRight from "@/public/icon_arrowright.png";
import icoArrowWhiteRight from "@/public/ico_arrow_right_popup.png";
import icoCloseBlue from "@/public/ico_close_blue_popup.png";

const LocalQuickReview = ({setIsLocalQuickModalVisible}) => {
  return (
    <div className="fixed z-50 w-full bg-[#00000030] h-screen  mt-[45px] ">
      <div className="relative mx-auto max-w-[1280px] flex justify-center mobile:justify-end w-full h-full mt-[5px]">
        <div className="w-[350px] h-[557px] bg-[#FFFFFF] rounded-md">
          <div className="h-[65px] shadow-box-shadow px-[1px] flex justify-center items-center mx-auto">
            <div className="w-full flex flex-row justify-between text-[#0A85C2] text-[24px] leading-[28.13px] font-[600px]">
              <div className="whitespace-nowrap ml-[10px]">
                <span className="underline">LOKALNO</span> - HITER PREGLED
              </div>

              <button
                onClick={() => {
                  setIsLocalQuickModalVisible(false);
                }}
                className="w-[18px] h-[18px] mr-[16px] mt-[5px] "
              >
                <Image src={icoCloseBlue} alt="Close" width={18} height={18} />
              </button>
            </div>
          </div>

          <div
            className="h-[20px] mt-[6px] mx-[13px] flex flex-row justify-end text-[15px] leading-[24px]
            text-[#3C3E41] font-variation-customOpt16"
          >
            Z ENIM SAMIM KLIKOM
          </div>

          {/* Center Container */}
          <div className="w-[338px] border border-[#3C3E41] h-[327px] mt-[30px] mx-auto flex flex-col rounded-3xl overflow-hidden">
            <div className="w-full h-[48px] bg-[#3C3E41] flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <div className="text-[16px] text-[#CBE1EC] leading-[24px] font-variation-customOpt16 font-[400px] ml-[29px]">
                  Torek,
                </div>
                <div className="text-[16px] text-[#CBE1EC] leading-[24px] font-variation-customOpt16 font-[400px] ml-[10px]">
                  23.05.2024
                </div>
              </div>

              <Image
                src={icoCross}
                alt="Close icon"
                width={28}
                height={28}
                className="mr-[12px]"
              />
            </div>

            <div className="w-full h-[48px] bg-[#0A85C2] flex flex-row justify-between items-center">
              <div className="text-[20px] ml-[32px] text-[#FFFFFF] leading-[24px] font-variation-customOpt20 font-[400px]">
                Maribor
              </div>

              <Image
                src={icoEdit}
                alt="Edit icon"
                width={18}
                height={18}
                className="mr-[18px]"
              />
            </div>

            <div className="w-full h-[238px] bg-[#C7DFF5] flex flex-col items-center">
              <div className="w-[300px] h-[109px] flex flex-col items-center mt-[30px]">
                <div className="w-full h-[48px] mb-[13px] bg-[#FFFFFFCC] rounded-lg flex flex-row items-center">
                  <div className="text-[#0A85C2] font-variation-customOpt24 text-[24px] leading-[24px] ml-[15px] font-[400px]">
                    4
                  </div>
                  <div className="text-[18px] leading-[24px] ml-[12px] font-variation-customOpt24 font-[400px] mr-[82px] text-[#3C3E41]">
                    Osmrtnic od včeraj
                  </div>

                  <Image
                    src={icoArrowRight}
                    alt="Right_arrow"
                    width={24}
                    height={24}
                  />
                </div>

                <div className="w-full h-[48px] bg-[#FFFFFFCC] rounded-lg flex flex-row  items-center">
                  <div className="text-[#0A85C2] font-variation-customOpt24 text-[24px] leading-[24px] ml-[15px] font-[400px]">
                    3
                  </div>
                  <div className="text-[18px] leading-[24px] ml-[12px] font-variation-customOpt24 mr-[50px] font-[400px] text-[#3C3E41]">
                    Pogrebov danes in jutri
                  </div>

                  <Image
                    src={icoArrowRight}
                    alt="Right_arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              <div className="w-full h-[28px] bg-[#0A85C2] flex items-center mt-[36px] shadow-box-shadow">
                <div className="w-[293px] h-[24px] mr-[11px] ml-[34px] flex flex-row items-center">
                  <div className="text-[#FFFFFF] text-[20px] leading-[24px] mr-[12px] font-variation-customOpt20 font-[400px]">
                    4
                  </div>

                  <div className="text-[#FFFFFF] text-[14px] mr-[82px] leading-[24px]">
                    Novih spominskih strani
                  </div>

                  <Image
                    src={icoArrowWhiteRight}
                    alt="Right_arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="mt-[19px] w-[289px] mx-auto text-[#3C3E41] font-[400px] text-[14px] leading-[24px]">
            Mesto izbereš v svojem uporabniškem računu. Moraš biti prijavljen,
            da zazna tvojo nastavitev. Brez vsakodnevnega iskanja po imenikih.
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default LocalQuickReview;
