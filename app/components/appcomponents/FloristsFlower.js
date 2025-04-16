"use client";
import Link from "next/link";
import React from "react";

import { useEffect, useState } from "react";

const FloristsFlower = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = windowWidth > 1199;

  return (
    <div className="relative w-full h-[284px] overflow-hidden flex justify-center items-center mx-auto">
      <div className="flex w-full h-full">
        <img
          // 7 October 2024 - sivo_ozadje.jpg
          src={isTablet ? "/lila_ozadje.jpg" : "/sivo_ozadje.jpg"}
          alt="Slika"
          className="h-[284px] w-full object-cover"
        />
      </div>

      <div
        className="flex justify-end absolute
                  w-[1280px] h-full 
                  tablet:w-[744px]
                  mobile:w-[744px]"
      >
        <div className="flex w-[476px] h-[178px] tablet:w-[301px] absolute tablet:mt-[53px] tablet:mr-[74.5px] mobile:mt-[60px] mobile:mr-[87px] mr-[78px] mt-[53px] mb-[98px] flex-col items-center">
          <div className="flex w-full text-[40px] mobile:text-[28px] h-[47px] text-[#FFFFFF] tablet:text-[#1E2125] mobile:text-[#1E2125] items-center justify-center  font-variation-customOpt40 mobile:font-variation-customOpt28 whitespace-nowrap">
            Imate cvetličarno?
          </div>
          <div className="flex w-full text-[24px] h-[28px] font-bold mt-[10px] mb-[46px] mobile:mt-0 mobile:mb-[37px] text-[#FFFFFF] tablet:text-[#1E2125] mobile:text-[#1E2125] items-center justify-center font-variation-customOpt24wght700">
            Sodelujmo!
          </div>
          {/* 17 September 2024 removed /floristspromo */}
          <Link
            href={"/companyregistrationpage"}
            className="flex w-[107px] h-[48px] bg-white items-center justify-center text-[20px] text-[#1E2125] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] rounded-lg font-variation-customOpt20wght500 mb-[2px] tablet:shadow-custom-light-dark-with-whiteBlack mobile:shadow-custom-light-dark-with-whiteBlack"
          >
            Naprej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloristsFlower;
