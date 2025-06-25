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
    { place: "Place 1", url: "/florists", id: 1 },

    {
      place: "Place 2",
      url: "/florists",
      id: 2,
    },

    {
      place: "Place 3",
      url: "/florists",
      id: 3,
    },
    {
      place: "Place 4",
      url: "/florists",
      id: 4,
    },
  ];

  return (
    <div className="flex w-full flex-col border-b-[1px] border-[#C7C7C7]">
      <div className="flex w-full ">
        <div className="relative flex flex-row min-w-full dekstop:h-[300px] tablet:h-[230px] mobile:h-[236px]">
          <img
            src="/flower38.png"
            alt="Slika"
            className="h-full w-full  object-cover"
          />

          <div
            className="
                            flex absolute  
                            justify-start mobile:px-4 tablet:pl-11 items-center desktop:items-center desktop:justify-end                             
                            h-full w-full   desktop:w-[50%]"
          >
            <div
              className="flex
                           
                             items-center justify-center
                             w-full tablet:w-[58%] desktop:w-full desktop:items-center desktop:justify-end tablet:items-center tablet:justify-start  "
            >
              <div
                className="flex flex-col items-center justify-between
                                h-full w-full
                                tablet:items-start
                                mobile:w-[391px] mobile:h-[167px] mobile:py-[22px] mobile:px-[16px]
                                tablet:w-[391px] tablet:h-[167px] tablet:py-[22px] tablet:px-[16px]
                                desktop:w-[70%] desktop:h-[167px] desktop:py-[22px] desktop:px-[0px]
                                mobile:rounded-2xl tablet:rounded-2xl mobile:border-2 tablet:border-2
                                mobile:border-[#FFFFFF] tablet:border-[#FFFFFF] mobile:shadow-custom-light-dark-banner tablet:shadow-custom-light-dark-banner mobile:bg-gradient-to-r tablet:bg-gradient-to-r mobile:from-[#FFFFFF] tablet:from-[#FFFFFF] mobile:to-[#FFFFFF50] tablet:to-[#FFFFFF50] mobile:backdrop-blur-sm tablet:backdrop-blur-sm
                                "
              >
                <div className="flex w-full mobile:justify-start tablet:justify-start mobile:items-end tablet:items-center h-[47px] ">
                  <div className="mobile:text-[24px] text-[40px] customOpt40 text-[#414141] whitespace-nowrap">
                    Lokalne cvetličarne
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
