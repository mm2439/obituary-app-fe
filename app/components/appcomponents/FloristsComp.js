"use client";
import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";
import regionsAndCities from "@/utils/regionAndCities";
const FloristsComp = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cityOptions = [
    ...Object.values(regionsAndCities)
      .flat()
      .map((city) => ({
        place: city,
        id: city,
      }))
      .sort((a, b) => a.place.localeCompare(b.place, "sl")),
  ];

  const handleCitySelect = (item) => {
    setSelectedCity(item.place);
  };
  // 17 September 2024
  const arrPlace = [
    { place: "Place 1", url: "/cvetlicarne", id: 1 },

    {
      place: "Place 2",
      url: "/cvetlicarne",
      id: 2,
    },

    {
      place: "Place 3",
      url: "/cvetlicarne",
      id: 3,
    },
    {
      place: "Place 4",
      url: "/cvetlicarne",
      id: 4,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full ">
        <div className="relative flex flex-row min-w-full dekstop:h-[300px] tablet:h-[361px] mobile:h-[236px]">
          <img
            src="/soncnica_modra.avif"
            alt="Flower_img"
            className="h-[100%] w-[100%] desktop:w-[50%] hidden tablet:flex desktop:flex  object-cover"
          />
          <img
            src="/zel_ozadje.avif"
            alt="Slika"
            className="h-full w-full tablet:hidden desktop:hidden object-cover"
          />
          <div
            className="
                            flex mobile:absolute tablet:absolute  
                            tablet:justify-end tablet:items-center desktop:items-center desktop:justify-center desktop:bg-[#FFE5B4]                             
                            h-full w-full   desktop:w-[50%]   "
          >
            <div
              className="flex
                           
                             mobile:items-center mobile:justify-center
                             w-full tablet:w-[58%] desktop:w-full desktop:items-center desktop:justify-center tablet:items-center tablet:justify-start  "
            >
              <div
                className="flex flex-col items-center justify-between
                                h-full w-full
                                mobile:w-[293px] mobile:h-[110px]
                                desktop:w-[476px] desktop:h-[124px]
                                tablet:h-[167px] tablet:w-[391px] tablet:py-[22px]
                                tablet:rounded-2xl tablet:border-2
                                tablet:border-[#FFFFFF] tablet:shadow-custom-light-dark-banner tablet:bg-gradient-to-r tablet:from-[#FFFFFF] tablet:to-[#FFFFFF50] tablet:backdrop-blur-sm
                                "
              >
                <div className="flex mobile:w-full mobile:justify-end items-center h-[47px] mobile:h-[33px] ">
                  <div className="text-[40px] mobile:text-[28px] tablet:customOpt40 desktop:customOpt40 text-[#414141] whitespace-nowrap">
                    Lokalne cvetličarnes
                  </div>
                </div>
                <Dropdown
                  label={"Izberi kraj"}
                  isFromFlower={true}
                  isFromNotification={false}
                  data={cityOptions}
                  selectedValue={selectedCity}
                  onSelect={() => handleCitySelect()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloristsComp;
