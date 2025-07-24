"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Dropdown from "@/app/components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import API_BASE_URL from "@/config/apiConfig";

import regionsAndCities from "@/utils/regionAndCities";
import shopService from "@/services/shop-service";

const FloristList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get city from URL params, default to empty (no filter)
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || "");
  const [floristList, setFloristList] = useState([]);
  const [loading, setLoading] = useState(false);

  const cityOptions = Object.values(regionsAndCities)
    .flat()
    .map((city) => ({
      place: city,
      id: city,
    }))
    .sort((a, b) => a.place.localeCompare(b.place, "sl"));

  // Update URL parameters
  const updateUrlParams = (city) => {
    const params = new URLSearchParams();

    if (city && city.trim() !== "") {
      params.set('city', city);
    }

    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    router.push(newUrl, { scroll: false });
  };

  const handleCitySelect = (item) => {
    const newCity = item.place;
    setSelectedCity(newCity);
    updateUrlParams(newCity);
  };

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

  const getFlowerShops = async () => {
    try {
      setLoading(true);

      // Get city from URL params
      const urlParams = new URLSearchParams(window.location.search);
      const cityParam = urlParams.get('city');

      const params = {};

      // Only add city to params if it exists and is not empty
      if (cityParam && cityParam.trim() !== "") {
        params.city = cityParam.trim();
      }


      console.log("Fetching shops with params:", params);
      const response = await shopService.getFloristShops(params);
      console.log("API Response:", response);

      setFloristList(response.shops || []);

    } catch (error) {
      console.error("Error fetching florist shops:", error);
      setFloristList([]);
    } finally {
      setLoading(false);
    }
  };

  // Clear filters
  const clearFilters = () => {
    setSelectedCity("");
    router.push(window.location.pathname, { scroll: false });
  };

  // Fetch data when component mounts or URL changes
  useEffect(() => {
    getFlowerShops();
  }, [searchParams]);

  // Update state when URL params change
  useEffect(() => {
    const cityParam = searchParams.get('city') || "";
    setSelectedCity(cityParam);
  }, [searchParams]);

  return (
    <div className="max-w-[1920px] w-full pb-[81px] tablet:pb-[55px] desktop:pb-[121px] tablet:w-full mobile:w-full mx-auto flex flex-col items-center desktop:bg-[#F5F7F9] mobile:bg-white tablet:bg-white">
      <div className="flex flex-col items-center w-full tablet:w-full mobile:w-full">
        <div className="w-full tablet:w-full mobile:w-full flex flex-col items-center">

          {/* Filter Section */}
          <div className="flex flex-col tablet:flex-row desktop:flex-row gap-4 mt-[63px] mb-[40px] mobile:w-[311px] tablet:w-[612px] desktop:w-[1088px] tablet:mt-[63px] tablet:mb-[40px] desktop:mt-[80px] desktop:mb-[40px] tablet:justify-end desktop:justify-end">

            {/* Mobile Filter Row */}
            <div className="flex tablet:hidden gap-4 w-full">
              <div className="flex-1">
                <Dropdown
                  label={"Išči po kraju"}
                  isFromNotification={false}
                  isFromFlower={false}
                  isFrom={"florist"}
                  data={cityOptions}
                  onSelect={handleCitySelect}
                  selectedValue={selectedCity}
                  placeholder="Vse cvetličarne"
                />
              </div>
              <div className="flex justify-center items-center w-12 h-[48px] rounded-lg bg-[#414141] cursor-pointer hover:bg-[#555555] transition-colors" onClick={getFlowerShops}>
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Tablet/Desktop Filter Row */}
            <div className="hidden tablet:block tablet:w-full desktop:w-auto">
              <Dropdown
                label={"Išči po kraju"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={"florist"}
                data={cityOptions}
                onSelect={handleCitySelect}
                selectedValue={selectedCity}
                placeholder="Vse cvetličarne"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={getFlowerShops}
              className="hidden tablet:flex px-3 h-[48px] text-[16px] text-[#F6F6F6] rounded-lg bg-[#414141] justify-center items-center cursor-pointer hover:bg-[#555555] transition-colors font-medium"
            >
              Prikaži
            </button>
          </div>

          {/* Hitri izbor Section */}
          <div className="flex w-full items-center justify-center">
            <div className="flex mobile:flex tablet:flex desktop:flex-row desktop:justify-between mobile:w-[315px] mobile:mb-[59px] tablet:items-center tablet:justify-center tablet:w-[660px] tablet:mb-[42px] desktop:w-[1088px] desktop:mt-[20px] desktop:mb-[68px]">

              <div className="flex desktop:ml-[0px] desktop:h-[78px] tablet:w-[650px] tablet:h-[70px] tablet:justify-center mobile:w-[330px] mobile:flex-col desktop:flex-col">
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
                            setSelectedCity(language);
                            updateUrlParams(language);
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
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex w-[310px] tablet:w-[612px] desktop:w-[1088px] desktop:justify-between justify-center">
          <div className="w-full">
            {loading ? (
              <div className="flex justify-center items-center h-32">
                <p className="text-gray-500">Nalaganje cvetličarn...</p>
              </div>
            ) : floristList?.length > 0 ? (
              floristList.map((item, index) => (
                <FloristlistCom item={item} index={index} key={`florist-${index}`} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-32 text-gray-500">
                <p>
                  {selectedCity
                    ? `Ni najdenih cvetličarn v mestu ${selectedCity}.`
                    : "Ni najdenih cvetličarn."
                  }
                </p>
                {selectedCity && (
                  <button
                    onClick={clearFilters}
                    className="mt-2 px-4 py-2 text-sm text-blue-500 hover:text-blue-700 underline"
                  >
                    Prikaži vse cvetličarne
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="hidden desktop:flex w-[290px] items-end flex-col">
            <div className="flex items-center justify-center w-[286px] h-[210px] border-[1px] rounded-lg border-[#D4D4D4]">
              <p className="text-[#414141] text-[24px] font-variation-customOpt24wght100 font-thin">
                Kmalu
              </p>
            </div>
            <div className="flex items-center justify-center w-[286px] mt-8 h-[695px] border-[1px] rounded-lg border-[#D4D4D4]">
              <p className="text-[#414141] text-[24px] font-variation-customOpt24wght100 font-thin">
                Kmalu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FloristlistCom component remains the same
const FloristlistCom = ({ item, index }) => {
  return (
    <div className={`${index == 0 ? "flex mt-0 w-full" : "flex mt-8 w-full"}`}>
      <Link
        href={"/floristdetails"}
        className="
             flex 
             w-[310px] h-[123px] pl-3 pr-1 py-1
             tablet:w-[600px] tablet:h-[200px] tablet:pl-[32px] tablet:pr-[10px] tablet:items-center
             desktop:w-[772px] desktop:h-[210px] desktop:pl-[32px] desktop:pr-[24px] desktop:py-[30px]                
             border-2 border-white shadow-custom-light-dark-box 
             bg-gradient-to-br from-[#E3EAEF] to-[#F3F6F8] rounded-lg hover:bg-gradient-to-br hover:from-[#D8DFE4] hover:to-[#E8EBF3] transition-colors"
      >
        <div
          className="rounded-xl mobile:rounded-[5px] p-1 mobile:p-[2.54px]
               mr-[16px] mobile:mr-[14px] mobile:my-auto
               tablet:mr-[48px] 
               desktop:mr-[48px]
               h-[98.53px] w-[80px]
               tablet:h-[148px] tablet:w-[128px] 
               desktop:h-[148px]  desktop:w-[124px] 
               shadow-custom-light-dark-box-image
                bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30]
                mobile:bg-gradient-to-br mobile:from-[#E3E8EC] mobile:to-[#FFFFFF]
               "
        >
          {item?.logo || item?.CompanyPage?.logo ? (
            <Image
              src={
                (item?.logo || item?.CompanyPage?.logo)?.includes("floristShopUploads") ||
                  (item?.logo || item?.CompanyPage?.logo)?.includes("companyUploads")
                  ? `${API_BASE_URL}/${item?.logo || item?.CompanyPage?.logo}`
                  : item?.logo || item?.CompanyPage?.logo
              }
              alt={`${item?.shopName || "Cvetličarna"} logo`}
              width={500}
              height={500}
              className="
              mobile:rounded-[5px]
              mobile:object-cover
                      h-full w-full object-cover
                        rounded-lg "
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}

          <div
            className="fallback-logo flex items-center justify-center h-full w-full bg-gray-200 rounded-lg text-gray-500 text-sm"
            style={{ display: (item?.logo || item?.CompanyPage?.logo) ? 'none' : 'flex' }}
          >
            {item?.shopName || item?.CompanyPage?.name || 'Cvetličarna'}
          </div>
        </div>
        <div className="flex items-start flex-col mt-1 tablet:mt-1 desktop:mt-1 w-[216px] tablet:w-[390px] desktop:w-[514px] tablet:pr-[10px] ">
          <div className="flex flex-1 flex-col w-full">
            <div className="flex justify-between h-[18px] tablet:h-7 desktop:h-7 w-full tablet:pr-[8px] desktop:pr-[10px]   ">
              <div className="flex items-center h-full">
                <div className="font-variation-customOpt24 text-left desktop:text-[24px] tablet:text-[24px] mobile:text-[15px]  text-[#1E2125] leading-[28.13px]">
                  {item?.shopName || item?.CompanyPage?.name || "Cvetličarna"}
                </div>
              </div>
            </div>
            <div className="flex items-center h-[18px] tablet:h-6 desktop:h-6 mt-[10px] tablet:mt-4 desktop:mt-4">
              <p className="hidden tablet:flex desktop:flex font-variation-customOpt14 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 text-left desktop:text-[16px] tablet:text-[16px] mobile:text-[14px]  text-[#414141] leading-[24px]">
                {item?.address || `${item?.city || "Mesto"}`}
              </p>
              <p className="flex tablet:hidden desktop:hidden font-variation-customOpt14 text-left text-[14px]  text-[#414141] leading-[24px]">
                {item?.city || "Mesto"}
              </p>
            </div>

            <div className="flex items-center h-[18px]  tablet:h-6 desktop:h-6 mt-1 tablet:mt-2 desktop:mt-2">
              <p className="flex tablet:hidden desktop:hidden font-variation-customOpt14  text-left text-[14px]  text-[#414141] leading-[24px]">
                Tel:
              </p>
              <p className="font-variation-customOpt14 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 text-left desktop:text-[16px] tablet:text-[16px] mobile:text-[14px]  text-[#414141] leading-[24px]">
                {item?.telephone || "Ni podatka"}
              </p>
            </div>
            <div className="hidden tablet:flex desktop:flex w-full mt-4 h-8 justify-between tablet:h-6 tablet:items-center  ">
              <div className="flex items-center h-6">
                <p className="font-variation-customOpt14 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 text-left desktop:text-[16px] tablet:text-[16px] mobile:text-[14px]  text-[#414141] leading-[24px]">
                  {item?.website || item?.email || "Kontakt"}
                </p>
              </div>
              <div className="flex h-4 desktop:w-[92px] justify-end items-center desktop:mt-3">
                <div className="text-[#1E2125] text-[14px] ">Odpri</div>
                <Image
                  src={"/icon_arrowright.png"}
                  alt="Slika"
                  width={24}
                  height={24}
                  className=""
                />
              </div>
            </div>
            <div className="flex desktop:hidden tablet:hidden w-full mt-1 h-[14px] justify-end items-center">
              <div className="text-[#1E2125] text-[12px] ">Odpri</div>
              <Image
                src={"/icon_arrowright.png"}
                alt="Slika"
                width={16}
                height={20}
                className=""
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FloristList;
