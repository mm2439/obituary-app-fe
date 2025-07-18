"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import sponser1 from "@/public/sponser1.png";
import sponser2 from "@/public/sponser2.png";
import sponser3 from "@/public/sponser3.png";
import sponser5 from "@/public/sponser5.png";
import sponser6 from "@/public/sponsor-4.jpeg";
import sponser7 from "@/public/sponsor-6.jpeg";

const sponsors = [sponser1, sponser2, sponser3, sponser5, sponser6, sponser7];

const SponsorComponent = ({ text = "", images = sponsors }) => {
  const [maxItems, setMaxItems] = useState(4); // default for desktop

  // Handle responsive layout in JS
  useEffect(() => {
    const updateMaxItems = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        setMaxItems(2);
      } else if (width < 1024) {
        // Tablet
        setMaxItems(3);
      } else {
        // Desktop
        setMaxItems(4);
      }
    };

    updateMaxItems(); // Run on mount
    window.addEventListener("resize", updateMaxItems);

    return () => {
      window.removeEventListener("resize", updateMaxItems);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1920px] overflow-hidden mx-auto flex py-[115px] mobile:py-[100px] justify-center items-center bg-[#F5F7F9]">
      <div
        className="flex w-full flex-col  items-center justify-between 
          desktop:max-w-[1084px] desktop:min-h-[139.45px] 
          tablet:max-w-[603px] tablet:min-h-[123.75px]
          mobile:max-w-[360px] mobile:min-h-[90.52px] px-4 tablet:px-0"
      >
        <div
          className={`flex h-[28px] text-[#1E2125] mt-[-3px] font-variation-customOpt24 text-[24px] ${
            text ? "mobile:text-[16px]" : ""
          }`}
        >
          {text || "Sponzorji"}
        </div>

        <div
          className={classNames(
            "w-full grid justify-center items-center mt-10 grid-rows-1 overflow-hidden",
            "desktop:grid-cols-4 desktop:gap-[85px]",
            "tablet:grid-cols-3 tablet:gap-[60px]",
            "mobile:grid-cols-2 mobile:gap-[40px]"
          )}
        >
          {images.slice(0, maxItems).map((sponsor, index) => (
            <div
              key={index}
              className="relative aspect-[3/1] grayscale hover:grayscale-0 transition-all duration-300 h-auto w-full"
            >
              <Image
                src={sponsor}
                alt="sponsor"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorComponent;
