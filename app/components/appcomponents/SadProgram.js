"use client";
import { useState, useEffect } from "react";
import React from "react";
import API_BASE_URL from "@/config/apiConfig";
import Image from "next/image";

const defaultText =
  "Dodate osem produktov iz vaše ponudbe in dodate pod njimi svoje tekste. Seveda ni nujno, da so vsi produkti iz žalnega programa. Tudi naslov lahko poimenujete drugače.";

const SadProgram = ({ data }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data?.packages || []);
  }, [data?.packages]);

  return (
    <div className="relative max-w-[1920px] bg-[#F5F7F9] w-full py-16 tablet:py-12 mobile:py-8 overflow-hidden mx-auto justify-center items-center flex">
      {/* Main Container */}
      <div className="flex w-[901px] h-[550px] tablet:w-[613px] tablet:h-[900px] mobile:h-[1290px] mobile:w-[292px] flex-col">
        {/* Header */}
        <div className="flex w-[613px] h-[111px] mobile:w-[292px] mobile:h-[174px] flex-col tablet:justify-center tablet:items-center mobile:justify-center mobile:items-center">
          <div className="text-[40px] mt-[-8px] text-[#1E2125] mobile:text-[32px] mobile:font-variation-customOpt32 font-variation-customOpt40">
            Žalni program
          </div>
          <div className="text-[16px] text-[#939393] font-variation-customOpt16 leading-[24px] mt-[11px]">
            {data?.offer_subtitle || defaultText}
          </div>
        </div>

        {/* Grid Container */}
        <div className="flex flex-col w-full h-[470px] tablet:w-[600px] tablet:h-[860px] mobile:w-[288px] mobile:h-[1240px] tablet:mx-auto mobile:mx-auto">
          {/* Grid */}
          <div className="w-[900px] h-[470px] tablet:w-[600px] tablet:h-auto mobile:w-[288px] mobile:h-[1240px] mt-12 mobile:mt-10 grid grid-cols-4 gap-6 tablet:grid-cols-2 mobile:grid-cols-1">
            {/* Desktop & Tablet Cards */}
            {list.length > 0 &&
              list.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="bg-gradient-to-br from-white to-[#ffffff30] border-white border-2 desktop:w-[211px] desktop:h-[295px] w-[292px] h-[295px] flex items-center flex-col rounded-lg shadow-custom-light-dark mobile:hidden"
                >
                  <Image
                    src={
                      item.image.includes("packageUploads")
                        ? `${API_BASE_URL}/${item.image}`
                        : item.image
                    }
                    alt="flower 1 image"
                    className="w-[119.65px] h-[135.08px] mt-[58.27px]"
                    width={120}
                    height={135}
                  />
                  <div className="text-[16px] line-clamp-2 text-[#1E2125] font-variation-customOpt16 mt-[40.46px] text-center w-[157px]">
                    {item.title}
                    {item?.price && Number(item?.price) > 0
                      ? `od ${item?.price}€`
                      : ""}
                  </div>
                </div>
              ))}

            {/* Mobile Cards */}
            {list.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-gradient-to-br from-white to-[#ffffff30] border-white border-2 w-[292px] h-[295px] items-center flex-col rounded-lg shadow-custom-light-dark mobile:flex hidden"
              >
                <Image
                  src={
                    item.image.includes("packageUploads")
                      ? `${API_BASE_URL}/${item.image}`
                      : item.image
                  }
                  alt="flower 1 image"
                  className="w-[119.65px] h-[135.08px] mt-[58.27px]"
                  width={120}
                  height={135}
                />
                <div className="text-[16px] text-[#1E2125] font-variation-customOpt16 mt-[40.46px] text-center w-[157px]">
                  {item.title}
                  {item?.price && Number(item?.price)
                    ? `od ${item?.price}€`
                    : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SadProgram;
