"use client";
import React from "react";
import Dropdown from "@/app/components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import regionsAndCities from "@/utils/regionAndCities";
const FloristList = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cityOptions = Object.values(regionsAndCities)
    .flat()
    .map((city) => ({
      place: city,
      id: city,
    }))
    .sort((a, b) => a.place.localeCompare(b.place, "sl"));

  const handleCitySelect = (item) => {
    setSelectedCity(item.place);
    console.log(selectedCity);
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

  //  7 October 2024
  const floristslist = [
    {
      img: "/flologo1.avif",
      name: "Cvetličarna Suniflower",
      isPartner: true,
      add: "Ulica cvetličarn 28, Mesto",
      num: "055-0045655",
      web: "www.suniflower.co",
    },
    {
      img: "/flologo2.avif",
      name: "Cvetličarna Lucijan",
      isPartner: false,
      add: "Trg svobode 134, Mesto ",
      num: "055-0012345",
      web: "www.cvlucijan.si",
    },
    {
      img: "/flologo4.avif",
      name: "Mestna cvetličarna",
      isPartner: false,
      add: "Ulica cvetličarn 23, Mesto",
      num: "055-009123",
      web: "www.mestnacv1.si",
    },
    {
      img: "/flologo3.avif",
      name: "Naša cvetličarna ",
      isPartner: false,
      add: "Ulica cvetličarn 134, Mesto",
      num: "055-006142",
      web: "www.nasacvtl.si",
    },
  ];

  return (
    <div className="max-w-[1920px] w-full pb-[81px] tablet:pb-[55px] desktop:pb-[121px] tablet:w-full mobile:w-full mx-auto flex flex-col items-center desktop:bg-[#F5F7F9] mobile:bg-white tablet:bg-white">
      <div className=" flex flex-col items-center w-full tablet:w-full mobile:w-full">
        <div className="w-full tablet:w-full mobile:w-full flex flex-col items-center">
          <div
            className="flex desktop:hidden
             h-[48px]  flex-row gap-4 
            mt-[55px]  mb-[40px]
            mobile:w-[311px]
            tablet:w-[600px]  tablet:h-[48px]   tablet:mt-[63px]  tablet:mb-[54px]
           tablet:justify-between "
          >
            <div className="w-[244.47px] tablet:w-[372px] ">
              <Dropdown
                label={"Išči po kraju"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={"florist"}
              />
            </div>
            <div className="flex tablet:hidden justify-center items-center w-12 h-full desktop:aspect-square rounded-lg bg-[#414141]">
              <MagnifyingGlassIcon className="w-5 h-5 text-white  desktop:block" />
            </div>
            <div className="hidden tablet:w-[211px] mobile:w-[296px] h-[48px] mobile:text-[16px] mobile:text-[#F6F6F6] rounded-lg tablet:leading-6 tablet:text-[16px] tablet:text-[#F6F6F6] bg-[#414141] tablet:font-[400px] tablet:flex justify-center items-center ">
              Prikaži
            </div>
          </div>
        </div>
        <div className="flex w-full items-center  justify-center">
          <div
            className="
         flex mobile:flex tablet:flex desktop:flex-row desktop:justify-between
           desktop:mt-[68px] desktop:mb-[68px]  
          mobile:w-[315px] mobile:mb-[59px] tablet:items-center tablet:justify-end
          tablet:w-[660px] tablet:mb-[42px]  
        "
          >
            <div className="hidden desktop:flex desktop:w-[225px]  desktop:pt-[11px]">
              <Dropdown
                label={"Išči po krajih"}
                isFromNotification={false}
                isFromFlower={false}
                data={cityOptions}
                onSelect={() => handleCitySelect()}
              />
            </div>
            {/* <div> */}
            <div
              className=" 
            flex
        desktop:ml-[50px] desktop:h-[78px]
        tablet:w-[650px] tablet:h-[70px] tablet:justify-center 
         mobile:w-[330px] mobile:flex-col desktop:flex-col  "
            >
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
              <div className="flex  mobile:w-[330px] tablet:w-[480px]  desktop:mt-4 ">
                <ul className="flex flex-row list-none flex-wrap mobile:ml-[0px]">
                  {languages.map((language, index) => (
                    <li
                      key={language}
                      className="flex items-center mobile:w-[104px] "
                    >
                      <div
                        className={`border border-[#C3C6C8] rounded-sm text-[#3C3E41] mobile:mt-[16px]  ,
                            ${
                              index == languages.length - 1
                                ? "ml-[0px]"
                                : index == 5
                                ? "mobile:ml-[0px] tablet:mx-[6px] desktop:mr-[17px]  "
                                : " mobile:ml-[0px] tablet:mx-[6px] desktop:mr-[17px]"
                            }
                            ${
                              index < 6
                                ? "tablet:mb-[18px]"
                                : "tablet:mb-[18px]"
                            }
                        text-[14px] mobile:text-[13px] font-extrabold tablet:font-bold mobile:font-bold italic leading-[16.41px] mobile:px-[6px] px-[7.5px] py-[4px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]`}
                      >
                        {language}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div
        className=" 
      flex 
      w-[310px]
      tablet:w-[612px]
      desktop:w-[1088px] desktop:justify-between justify-center 
      "
      >
        <div>
          {floristslist?.map((item, index) => (
            <FloristlistCom item={item} index={index} key={index} />
          ))}
        </div>
        <div className="hidden desktop:flex w-[290px] items-end flex-col  ">
          <div className="flex items-center justify-center w-[286px] h-[210px] border-[1px] rounded-lg border-[#D4D4D4]">
            <p className="text-[#414141] text-[24px]  font-variation-customOpt24wght100 font-thin ">
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
  );
};

const FloristlistCom = ({ item, index, key }) => {
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
             bg-gradient-to-br from-[#E3EAEF] to-[#F3F6F8] rounded-lg "
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
          //   "
        >
          <Image
            src={item?.img}
            alt="Slika"
            width={500}
            height={500}
            className="
            mobile:rounded-[5px]
            mobile:object-cover
                    h-full w-full 
                      rounded-lg "
          />
        </div>
        <div className="flex items-start flex-col mt-1 tablet:mt-1 desktop:mt-1 w-[216px] tablet:w-[390px] desktop:w-[514px] tablet:pr-[10px] ">
          <div className="flex flex-1 flex-col w-full">
            <div className="flex w-full justify-end tablet:hidden desktop:hidden h-[14px] pr-2">
              {item?.isPartner || index == 1 ? (
                <div className="text-[#CC6F6F] mobile:text-[12px] text-[14px] ">
                  Partner
                </div>
              ) : null}
            </div>
            <div className="flex justify-between h-[18px] tablet:h-7 desktop:h-7 w-full tablet:pr-[8px] desktop:pr-[10px]   ">
              <div className="flex items-center h-full">
                <div className="font-variation-customOpt24 text-left desktop:text-[24px] tablet:text-[24px] mobile:text-[15px]  text-[#1E2125] leading-[28.13px]">
                  {item?.name}
                </div>
              </div>
              {item?.isPartner ? (
                <div className="hidden tablet:flex desktop:flex items-center h-4 mt-[3px]">
                  <div className="text-[#CC6F6F] desktop:text-[14px] ">
                    Partner
                  </div>
                </div>
              ) : null}
            </div>
            <div className="flex items-center h-[18px] tablet:h-6 desktop:h-6 mt-[10px] tablet:mt-4 desktop:mt-4">
              <p className="hidden tablet:flex desktop:flex font-variation-customOpt14 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 text-left desktop:text-[16px] tablet:text-[16px] mobile:text-[14px]  text-[#414141] leading-[24px]">
                {item?.add}
              </p>
              <p className="flex tablet:hidden desktop:hidden font-variation-customOpt14 text-left text-[14px]  text-[#414141] leading-[24px]">
                Mesto
              </p>
            </div>

            <div className="flex items-center h-[18px]  tablet:h-6 desktop:h-6 mt-1 tablet:mt-2 desktop:mt-2">
              <p className="flex tablet:hidden desktop:hidden font-variation-customOpt14  text-left text-[14px]  text-[#414141] leading-[24px]">
                Tel:
              </p>
              <p className="font-variation-customOpt14 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 text-left desktop:text-[16px] tablet:text-[16px] mobile:text-[14px]  text-[#414141] leading-[24px]">
                {item?.num}
              </p>
            </div>
            <div className="hidden tablet:flex desktop:flex w-full mt-4 h-8 justify-between tablet:h-6 tablet:items-center  ">
              <div className="flex items-center h-6">
                <p className="font-variation-customOpt14 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 text-left desktop:text-[16px] tablet:text-[16px] mobile:text-[14px]  text-[#414141] leading-[24px]">
                  {item?.web}
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
