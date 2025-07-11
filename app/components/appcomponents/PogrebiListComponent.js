"use client";
import React, { useEffect, useState } from "react";
import Dropdown from "@/app/components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ObituaryCard from "@/app/components/appcomponents/ObituaryCard";
import imgPrevious from "@/public/previous_img.png";
import imgNext from "@/public/next_img.png";
import Image from "next/image";
import { toast } from "react-hot-toast";
import obituaryService from "@/services/obituary-service";
import regionsAndCities from "@/utils/regionAndCities";
const ObituaryListComponent = ({ city }) => {
  const languages = [
    "Ljubljana",
    "Maribor",
    "Celje",
    "Kranj",
    "Koper",
    "Novo Mesto",
    "Domžale",
    "Velenje",
    "Nova Gorica",
    "Koroška",
    "Zasavje",
  ];

  const languagesMobile = [
    "Ljubljana",
    "Maribor",
    "Celje",
    "Kranj",
    "Koper",
    "Novo Mesto",
    "Domžale",
    "Velenje",
    "Nova Gorica",
  ];

  
  const [obituaries, setObituaries] = useState([]);
  const allRegionsOption = {
    place: "- Pokaži vse regije - ",
    id: "allRegions",
  };
  const allCitiesOption = { place: " - Pokaži vse občine - ", id: "allCities" };
  const [selectedCity, setSelectedCity] = useState(city ? city : null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regionOptions = [
    allRegionsOption,
    ...Object.keys(regionsAndCities).map((region) => ({
      place: region,
      id: region,
    })),
  ];

  const cityOptions =
    selectedRegion && selectedRegion !== "allRegions"
      ? [
          allCitiesOption,
          ...regionsAndCities[selectedRegion].map((city) => ({
            place: city,
            id: city,
          })),
        ]
      : [
          allCitiesOption,
          ...Object.values(regionsAndCities)
            .flat()
            .map((city) => ({
              place: city,
              id: city,
            }))
            .sort((a, b) => a.place.localeCompare(b.place, "sl")),
        ];

  const handleRegionSelect = (item) => {
    if (item.id === "allRegions") {
      setSelectedRegion(null);
      setSelectedCity(null);
      return;
    }
    setSelectedRegion(item.place);
    setSelectedCity(null);
  };

  const handleCitySelect = (item) => {
    if (item.id === "allCities") {
      setSelectedCity(null);
      return;
    }
    setSelectedCity(item.place);
    setSelectedRegion(null);
    // const region = Object.keys(regionsAndCities).find((region) =>
    //   regionsAndCities[region].includes(item.place)
    // );

    // if (region) {
    //   setSelectedRegion(region);
    // }
  };
  useEffect(() => {
    fetchObituary();
  }, []);
  const fetchObituary = async () => {
    try {
      const queryParams = {};

      if (selectedCity) queryParams.city = selectedCity;

      if (selectedRegion) queryParams.region = selectedRegion;
      const response = await obituaryService.getObituary(queryParams);

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      const sortedObituaries = response.obituaries.sort(
        (a, b) =>
          new Date(b.deathDate).getTime() - new Date(a.deathDate).getTime()
      );

      setObituaries(sortedObituaries);
    } catch (err) {
      console.error("Error fetching obituary:", err);
      toast.error(err.message || "Failed to fetch obituary.");
    }
  };

  return (
    <div className="max-w-[1920px] w-full tablet:w-full mobile:w-full mx-auto flex flex-col items-center desktop:bg-[#F5F7F9] mobile:bg-white tablet:bg-white">
      {/* Main Container */}
      <div className=" flex flex-col items-center w-full tablet:w-full mobile:w-full">
        {/* Main container for inputs main container */}
        <div className="w-full hidden desktop:flex tablet:w-full mobile:w-full  flex-col items-center">
          {/* Inputs main Container */}
          <div
            className="w-[777px] tablet:w-[600px] h-[48px] tablet:h-[112px] tablet:columns-2 mobile:w-[296px] mobile:h-[240px] mobile:flex-wrap 
            flex tablet:flex-wrap flex-row gap-4 mt-[69.07px] tablet:mt-[63px] mobile:mt-[40px] mobile:mb-[42px] tablet:mb-[53px] mb-[23.93px]"
          >
            {/* Input field for  Išči po imenu*/}
            <div className="flex w-[227px] tablet:w-[292px] h-[48px] mobile:w-[296px] justify-center items-center">
              <input
                type="text"
                placeholder="Išči po imenu"
                className="bg-white border-[#7C7C7C] placeholder-[#7C7C7C] text-[16px] font-[400] leading-[24px] border rounded-lg shadow-sm flex flex-1 items-center justify-between h-full px-4 text-[#7C7C7C] focus:outline-none"
              />
            </div>
         
            {/* Dropdown for Občina*/}
            <Dropdown
              data={cityOptions}
              label={"Občina"}
              isFromNotification={false}
              isFromFlower={false}
              selectedValue={selectedCity}
              onSelect={handleCitySelect}
            />
               {/* Dropdown for Regija*/}
            <Dropdown
              label={"Regija"}
              isFromNotification={false}
              isFromFlower={false}
              data={regionOptions}
              selectedValue={selectedRegion}
              onSelect={handleRegionSelect}
            />
            {/* Search container and magnifying glass image */}
            
            <div
              onClick={() => fetchObituary()}
              className="hidden desktop:flex justify-center items-center w-12 h-full desktop:aspect-square rounded-lg bg-[#414141]"
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
            </div>
            <div className="tablet:w-[292px] mobile:w-[296px] h-[48px] mobile:text-[16px] mobile:text-[#F6F6F6] rounded-lg tablet:leading-6 tablet:text-[16px] tablet:text-[#F6F6F6] bg-[#414141] tablet:font-[400px] hidden tablet:flex mobile:flex justify-center items-center">
              Prikaži
            </div>
          </div>
        </div>

        <div className="w-full tablet:w-full mobile:w-full tablet:flex hidden flex-col items-center">
          {/* Inputs main Container */}
          <div
            className="w-[777px] tablet:w-[600px] h-[48px] tablet:h-[112px] tablet:columns-2 mobile:w-[296px] mobile:h-[240px] mobile:flex-wrap 
            flex tablet:flex-wrap flex-row gap-4 mt-[69.07px] tablet:mt-[63px] mobile:mt-[40px] mobile:mb-[42px] tablet:mb-[53px] mb-[23.93px]"
          >
          
            
            {/* Dropdown for Mesto*/}
            <Dropdown
              data={cityOptions}
              label={"Mesto"}
              isFromNotification={false}
              isFromFlower={false}
              selectedValue={selectedCity}
              onSelect={handleCitySelect}
            />
            {/* Dropdown for Regija*/}
            <Dropdown
              label={"Regija"}
              isFromNotification={false}
              isFromFlower={false}
              data={regionOptions}
              selectedValue={selectedRegion}
              onSelect={handleRegionSelect}
            />

              {/* Input field for  Išči po imenu / priimku*/}
            <div className="flex w-[227px] tablet:w-[292px] h-[48px] mobile:w-[296px] justify-center items-center">
              <input
                type="text"
                placeholder="Išči po imenu / priimku"
                className="bg-white border-[#7C7C7C] placeholder-[#7C7C7C] text-[16px] font-[400] leading-[24px] border rounded-lg shadow-sm flex flex-1 items-center justify-between h-full px-4 text-[#7C7C7C] focus:outline-none"
              />
            </div>

            {/* Search container and magnifying glass image */}
            <div
              onClick={() => fetchObituary()}
              className="hidden desktop:flex justify-center items-center w-12 h-full desktop:aspect-square rounded-lg bg-[#414141]"
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
            </div>
            <div className="tablet:w-[292px] mobile:w-[296px] h-[48px] mobile:text-[16px] mobile:text-[#F6F6F6] rounded-lg tablet:leading-6 tablet:text-[16px] tablet:text-[#F6F6F6] bg-[#414141] tablet:font-[400px] hidden tablet:flex mobile:flex justify-center items-center">
              Prikaži
            </div>
          </div>
        </div>

        <div className="w-full tablet:w-full mobile:w-full mobile:flex hidden flex-col items-center">
          {/* Inputs main Container */}
          <div
            className="w-[777px] tablet:w-[600px] h-[48px] tablet:h-[112px] tablet:columns-2 mobile:w-[296px] mobile:h-[240px] mobile:flex-wrap 
            flex tablet:flex-wrap flex-row gap-4 mt-[69.07px] tablet:mt-[63px] mobile:mt-[40px] mobile:mb-[42px] tablet:mb-[53px] mb-[23.93px]"
          >
            {/* Input field for  Išči po imenu / priimku*/}
            <div className="flex w-[227px] tablet:w-[292px] h-[48px] mobile:w-[296px] justify-center items-center">
              <input
                type="text"
                placeholder="Išči po imenu / priimku"
                className="bg-white border-[#7C7C7C] placeholder-[#7C7C7C] text-[16px] font-[400] leading-[24px] border rounded-lg shadow-sm flex flex-1 items-center justify-between h-full px-4 text-[#7C7C7C] focus:outline-none"
              />
            </div>

          
            {/* Dropdown for Mesto*/}
            <Dropdown
              data={cityOptions}
              label={"Mesto"}
              isFromNotification={false}
              isFromFlower={false}
              isFrom={'pogrebi'}

              selectedValue={selectedCity}
              onSelect={handleCitySelect}
            />

              {/* Dropdown for Regija*/}
            <Dropdown
              label={"Regija"}
              isFromNotification={false}
              isFromFlower={false}
              isFrom={'pogrebi'}
              data={regionOptions}
              selectedValue={selectedRegion}
              onSelect={handleRegionSelect}
            />

           

            {/* Search container and magnifying glass image */}
            <div
              onClick={() => fetchObituary()}
              className="hidden desktop:flex justify-center items-center w-12 h-full desktop:aspect-square rounded-lg bg-[#414141]"
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
            </div>
            <div className="tablet:w-[292px] mobile:w-[296px] h-[48px] mobile:text-[16px] mobile:text-[#F6F6F6] rounded-lg tablet:leading-6 tablet:text-[16px] tablet:text-[#F6F6F6] bg-[#414141] tablet:font-[400px] hidden tablet:flex mobile:flex justify-center items-center">
              Prikaži
            </div>
          </div>
        </div>

        {/* Hitri izbor heading and list for tablet */}
        <div className="tablet:w-[660px] desktop:hidden mobile:w-[304px] tablet:justify-end  tablet:flex tablet:flex-row  mobile:hidden text-[24px] mobile:text-[28px] font-[400px] leading-[28.13px] text-[#1E2125]">
          <div>
            <div className="mr-[24px] mobile:mb-[17px] whitespace-nowrap">
              Hitri izbor:
            </div>
          </div>
          <div className="w-[504px] mobile:w-[307px]">
            <div className="w-full">
              <ul className="flex flex-row flex-wrap list-none w-full gap-x-[14px]">
                {languages.map((language) => (
                  <li key={language} className="flex items-center ">
                    <div
                      className=" mobile:mr-[16px] mb-[12px] mobile:mb-[16px] border border-[#C3C6C8] rounded-sm text-[#3C3E41] 
                        text-[14px] font-extrabold italic leading-[16.41px] px-[7.5px] py-[4px] 
                        bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] whitespace-nowrap"
                    >
                      {language}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
        {/* Hitri izbor heading and list for mobile*/}
        <div className="tablet:w-[660px] desktop:hidden mobile:w-[304px] tablet:justify-end  tablet:hidden tablet:flex-row  mobile:flex-col text-[24px] mobile:text-[28px] font-[400px] leading-[28.13px] text-[#1E2125]">
          <div>
            <div className="mr-[24px] mobile:mb-[17px] whitespace-nowrap">
              Hitri izbor:
            </div>
          </div>
          <div className="w-[504px] mobile:w-[307px]">
            <div className="w-full">
              <ul className="flex flex-row flex-wrap list-none w-full gap-x-[14px]">
                {languagesMobile.map((language) => (
                  <li key={language} className="flex items-center ">
                    <div
                      className=" mobile:mr-[4px] mb-[12px] mobile:mb-[16px] border border-[#C3C6C8] rounded-sm text-[#3C3E41] 
                        text-[14px] font-extrabold italic leading-[16.41px] px-[7.5px] py-[4px] 
                        bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] whitespace-nowrap"
                    >
                      {language}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* list horizontal container for desktop*/}

        <div className="mt-[18px] block mobile:hidden tablet:hidden ">
            {/* Hitri izbor heading for desktop*/}
            <div className=" w-full block mobile:hidden tablet:hidden text-[24px] font-[400px] leading-[28.13px] text-[#1E2125] mb-5">
                <div>Hitri izbor</div>
            </div>
          <ul className="flex flex-row list-none">
            {languages.map((language, index) => (
              <li key={language} className="flex items-center">
                {index == languages.length - 1 ? (
                  <div
                    className=" border border-[#C3C6C8] rounded-sm text-[#3C3E41] 
                        text-[14px] font-extrabold italic leading-[16.41px] px-[7.5px] py-[4px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                  >
                    {language}
                  </div>
                ) : (
                  <div
                    className="mr-[17px] border border-[#C3C6C8] rounded-sm text-[#3C3E41] 
                        text-[14px] font-extrabold italic leading-[16.41px] px-[7.5px] py-[4px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                  >
                    {language}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>


        {/* Grid Contaner */}
        <div className="mx-auto mobile:hidden tablet:hidden desktop:grid desktop:grid-cols-2 grid-cols-1 mobile:gap-[22px] tablet:gap-6 desktop:gap-6 mt-[24.58px] tablet:mt-[69px] mobile:mt-[43px] justify-between">
          {obituaries.map((obituary, index) => (
            <ObituaryCard
              data={obituary}
              index={index}
              key={index}
              mob={false}
            />
          ))}
        </div>
        <div className="mx-auto hidden tablet:grid desktop:hidden grid-cols-1 mobile:gap-[22px] tablet:gap-6 desktop:gap-6 mt-[24.58px] tablet:mt-[69px] mobile:mt-[43px] justify-between">
          {obituaries.map((obituary, index) => (
            <ObituaryCard
              data={obituary}
              index={index}
              key={index}
              mob={false}
            />
          ))}
        </div>

        <div className="mx-auto grid tablet:hidden desktop:hidden  grid-cols-1 mobile:gap-[22px] tablet:gap-6 desktop:gap-6 mt-[24.58px] tablet:mt-[69px] mobile:mt-[43px] justify-between">
          {obituaries.map((obituary, index) => (
            <ObituaryCard
              data={obituary}
              index={index}
              key={index}
              mob={true}
            />
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default ObituaryListComponent;
