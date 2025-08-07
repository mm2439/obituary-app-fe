"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
  ];
  const [obituaries, setObituaries] = useState([]);
  const allRegionsOption = {
    place: "- Pokaži vse regije - ",
    id: "allRegions",
  };
  const allCitiesOption = { place: " - Pokaži vse občine - ", id: "allCities" };
  const [selectedCity, setSelectedCity] = useState(city ? city : null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // default to mobile

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

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const cityParam = searchParams.get("city");

    if (cityParam) {
      setSelectedCity(cityParam);

      const region = Object.keys(regionsAndCities).find((region) =>
        regionsAndCities[region].includes(cityParam)
      );
      if (region) {
        setSelectedRegion(region);
      }
    }
  }, []);


  const updateUrlParams = (city) => {
    const params = new URLSearchParams();

    if (city && city.trim() !== "") {
      params.set("city", city);
    }

    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;

    router.push(newUrl, { scroll: false });
  };

  useEffect(() => {
    fetchObituary();
  }, [selectedCity, selectedRegion]);

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
    updateUrlParams(item.place)
    // const region = Object.keys(regionsAndCities).find((region) =>
    //   regionsAndCities[region].includes(item.place)
    // );

    // if (region) {
    //   setSelectedRegion(region);
    // }
  };

  const handleCitySelectQuickLinks = (city) => {
    setSelectedCity(city);
    setSelectedRegion(null);
    updateUrlParams(city)
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

  const totalPages = Math.ceil(obituaries.length / itemsPerPage);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        // Desktop
        setItemsPerPage(12); // 6+6
      } else if (width >= 768) {
        // Tablet
        setItemsPerPage(8); // 5+5
      } else {
        // Mobile
        setItemsPerPage(8); // Single column
      }
    };

    updateItemsPerPage(); // Initial check
    window.addEventListener("resize", updateItemsPerPage); // On resize

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const cardTopRef = React.useRef(null);

  useEffect(() => {
    if (cardTopRef.current) {
      cardTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="max-w-[1920px] w-full tablet:w-full mobile:w-full mx-auto flex flex-col items-center desktop:bg-[#F5F7F9] mobile:bg-white tablet:bg-white">
      {/* Main Container */}
      <div className=" flex flex-col items-center w-full tablet:w-full mobile:w-full">
        {/* Main container for inputs main container */}
        <div className="w-full tablet:w-full mobile:w-full flex flex-col items-center">
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
            {/* Dropdown for Išči po regiji*/}
            <Dropdown
              label={"Išči po regiji"}
              isFromNotification={false}
              isFromFlower={false}
              data={regionOptions}
              selectedValue={selectedRegion}
              onSelect={handleRegionSelect}
            />
            {/* Dropdown for Išči po kraju*/}
            <Dropdown
              data={cityOptions}
              label={"Išči po kraju"}
              isFromNotification={false}
              isFromFlower={false}
              selectedValue={selectedCity}
              onSelect={handleCitySelect}
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

        {/* Hitri izbor heading and list for tablet and mobile*/}
        <div className="flex desktop:ml-[0px] desktop:h-[78px] tablet:w-[650px] tablet:h-[70px] tablet:justify-center mobile:w-[330px] mobile:flex-col desktop:flex-col" ref={cardTopRef}>
          <div className="hidden desktop:flex text-[32px] font-[400px] leading-[28.13px] text-[#1E2125]">
            Hitri izbor
          </div>
          <div className="flex desktop:hidden items-center mr-[24px] tablet:mr-[18px] whitespace-nowrap h-7">
            <div className="text-[24px] font-[400px] leading-[28.13px] text-[#1E2125]">
              Hitri izbor
            </div>
            <div className="hidden tablet:flex desktop:hidden text-[24px] text-[#1E2125]">
              :
            </div>
          </div>
          <div className="flex mobile:w-[330px] tablet:w-[480px] desktop:mt-4">
            <ul className="flex flex-row list-none flex-wrap mobile:ml-[0px]">
              {languages.map((language, index) => (
                <li
                  key={language}
                  className="flex items-center mobile:w-[104px]"
                >
                  <button
                    onClick={() => {
                      handleCitySelectQuickLinks(language)
                    }}
                    className={`border border-[#C3C6C8] rounded-sm text-[#3C3E41] mobile:mt-[16px] hover:bg-gray-100 transition-colors cursor-pointer ${index == languages.length - 1
                      ? "ml-[0px]"
                      : index == 5
                        ? "mobile:ml-[0px] tablet:mx-[6px] desktop:mr-[17px]"
                        : "mobile:ml-[0px] tablet:mx-[6px] desktop:mr-[17px]"
                      } ${index < 6
                        ? "tablet:mb-[18px]"
                        : "tablet:mb-[18px]"
                      } ${selectedCity === language
                        ? "bg-[#414141] text-white"
                        : "bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                      } text-[14px] mobile:text-[13px] font-extrabold tablet:font-bold mobile:font-bold italic leading-[16.41px] mobile:px-[6px] px-[7.5px] py-[4px]`}
                  >
                    {language}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Zasavska regija container*/}
        <div className="max-w-[1062px] w-full block tablet:hidden mobile:hidden text-[24px] mt-[55px] font-[400px] leading-[28.13px] text-[#1E2125]" >
          <div>Zasavska regija</div>
        </div>

        {/* Grid Contaner */}
        <div className="mx-auto mobile:hidden tablet:hidden desktop:grid desktop:grid-cols-2 grid-cols-1 mobile:gap-[22px] tablet:gap-6 desktop:gap-6 mt-[24.58px] tablet:mt-[69px] mobile:mt-[43px] justify-between">
          {obituaries
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((obituary, index) => (
              <ObituaryCard
                data={obituary}
                index={index}
                key={index}
                mob={false}
              />
            ))}
        </div>
        <div className="mx-auto hidden tablet:grid desktop:hidden grid-cols-1 mobile:gap-[22px] tablet:gap-6 desktop:gap-6 mt-[24.58px] tablet:mt-[69px] mobile:mt-[43px] justify-between">
          {obituaries
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((obituary, index) => (
              <ObituaryCard
                data={obituary}
                index={index}
                key={index}
                mob={false}
              />
            ))}
        </div>

        <div className="mx-auto grid tablet:hidden desktop:hidden  grid-cols-1 mobile:gap-[22px] tablet:gap-6 desktop:gap-6 mt-[24.58px] tablet:mt-[69px] mobile:mt-[43px] justify-between">
          {obituaries
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((obituary, index) => (
              <ObituaryCard
                data={obituary}
                index={index}
                key={index}
                mob={true}
              />
            ))}
        </div>

        <div className="w-[272px] h-[48px] mt-[47.27px] gap-2 flex flex-row justify-center mobile:mt-[30px] mobile:mb-[66px] mb-[87.81px]">
          <div
            className="w-[48px] h-[48px] rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] hover:border-black hover:border-2"
            onClick={() => goToPage(currentPage - 1)}
          >
            <Image
              src={imgPrevious}
              alt="imgPrevious"
              className=" w-[5.66px] h-[8.49px]"
            />
          </div>
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;
            return (
              <div
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={`hover:border-black hover:border-2 w-[48px] h-[48px] rounded-lg text-black flex justify-center items-center cursor-pointer shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ${currentPage === pageNumber ? 'bg-gray-300 font-bold' : ''
                  }`}
              >
                {pageNumber}
              </div>
            );
          })}
          <div
            className="w-[48px] h-[48px] rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] hover:border-black hover:border-2 cursor-pointer transition-colors duration-200"
            onClick={() => {
              goToPage(currentPage + 1);
            }}
          >
            <Image
              src={imgNext}
              alt="imgNext"
              className="w-[5.66px] h-[8.49px]"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ObituaryListComponent;
