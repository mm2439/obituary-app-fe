"use client";
import React from "react";
import Dropdown from "@/app/components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import regionsAndCities from "@/utils/regionAndCities";
import { useState } from "react";
const FuneralList = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const regionOptions = Object.keys(regionsAndCities).map((region) => ({
    place: region,
    id: region,
  }));

  const handleRegionSelect = (item) => {
    setSelectedRegion(item.place);
  };
  const arrRegions = [
    {
      place: "Company 1",
      url: "/funeralcompany",
    },
    {
      place: "Company 2",
      url: "/funeralcompany",
    },
    {
      place: "Company 3",
      url: "/funeralcompany",
    },
    {
      place: "Company 4",
      url: "/funeralcompany",
    },
    {
      place: "Company 5",
      url: "/funeralcompany",
    },
  ];

  const floristslist = [
    {
      img: "/zasava_1.jpeg",
      name: "KSP Hrastnik",
      isPartner: true,
      add: "Cesta 3. julija 7, Hrastnik",
      web: "www.ksphrastnik.si",
      osmr: "95 osmrtnic",
    },
    {
      img: "/pok_gabrsko4.avif",
      name: "Komunala Trbovlje",
      isPartner: true,
      add: "Savinjska cesta 11 a, Trbovlje",
      web: "www.komunala-trbovlje.si",
      osmr: "178 osmrtnic",
    },
    {
      img: "/zasava_3.jpeg",
      name: "Komunala Zagorje",
      isPartner: true,
      add: "Cesta zmage 57, Zagorje",
      web: "www.komunala-zagorje.si",
      osmr: "146 osmrtnic",
    },
    {
      img: "/zasava_4.jpeg",
      name: "KSP Litija",
      isPartner: true,
      add: "Ponoviška cesta 15, Litija",
      web: "",
      osmr: "18 osmrtnic",
    },
  ];
  return (
    <div className="max-w-[1920px] w-full pb-[81px] tablet:pb-[55px] desktop:pb-[121px]  tablet:w-full mobile:w-full mx-auto flex flex-col items-center desktop:bg-[#F5F7F9] mobile:bg-white tablet:bg-white">
      <div className=" flex flex-col items-center w-full tablet:w-full mobile:w-full">
        <div className="w-full tablet:w-full mobile:w-full flex flex-col items-center">
          <div
            className="flex 
             h-[48px]  flex-row gap-4 
            mt-[63px]  mb-[63px]
            mobile:w-[311px]
            tablet:w-[600px]  tablet:h-[48px]   tablet:mt-[63px]  tablet:mb-[60px]
           tablet:justify-between
           desktop:w-[291px] desktop:h-12 desktop:mt-[80px] desktop:mb-10"
          >
            <div className="w-[244.47px] tablet:w-[372px] desktop:w-[227px] ">
              <Dropdown
                label={"Izberi regijo"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={"florist"}
                data={regionOptions}
                selectedValue={selectedRegion}
                onSelect={() => handleRegionSelect()}
              />
            </div>
            <div className="flex tablet:hidden  justify-center items-center w-12 h-full desktop:aspect-square rounded-lg bg-[#414141]">
              <MagnifyingGlassIcon className="w-5 h-5 text-white  desktop:block" />
            </div>
            <div className="hidden tablet:w-[211px] mobile:w-[296px] h-[48px] mobile:text-[16px] mobile:text-[#F6F6F6] rounded-lg tablet:leading-6 tablet:text-[16px] tablet:text-[#F6F6F6] bg-[#414141] tablet:font-[400px] tablet:flex justify-center items-center ">
              Prikaži
            </div>
          </div>
        </div>
      </div>
      <div
        className=" 
      hidden desktop:flex
      w-[1088px] h-[28px] items-center mb-[31px]
      "
      >
        <div className="font-variation-customOpt24 text-left text-[24px]  text-[#1E2125] leading-[28.13px]">
          Zasavska regija
        </div>
      </div>
      <div
        className=" 
      flex justify-center
      w-[310px]
      tablet:w-[612px]
      desktop:w-[1088px] desktop:justify-between
      
      "
      >
        <div>
          {floristslist?.map((item, index) => (
            <FuneralBlock item={item} index={index} key={index} />
          ))}
        </div>
        <div className="hidden desktop:flex w-[290px] items-end flex-col  ">
          <div className="flex items-center justify-center w-[286px] h-[200px] border-[1px] rounded-lg border-[#D4D4D4]">
            <p className="text-[#414141] text-[24px]  font-variation-customOpt24wght100 font-thin">
              Kmalu
            </p>
          </div>
          <div className="flex items-center justify-center w-[286px] mt-8 h-[429px] border-[1px] rounded-lg border-[#D4D4D4]">
            <p className="text-[#414141] text-[24px]  font-variation-customOpt24wght100 font-thin">
              Kmalu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const FuneralBlock = ({ item, index, key }) => {
  return (
    <div
      className={`${
        index == 0
          ? "flex mt-0 w-full"
          : "flex mt-6 tablet:mt-6 desktop:mt-8 w-full"
      }`}
    >
      <Link href={"/funeralpromo"}>
        <button
          className="
        flex flex-col tablet:flex-row desktop:flex-row 

        w-[276px] h-[259px] pl-[11px] pr-[11px] py-[11px]
        tablet:w-[600px] tablet:h-[170px] tablet:pl-[28px]  tablet:py-[21px] 
        desktop:w-[762px] desktop:h-[200px] desktop:pl-[28px] desktop:pr-[27px] desktop:py-[26px]                
        border-2 border-white shadow-custom-light-dark-box 
        bg-[#EBF0F4] rounded-lg "
        >
          <div
            className="rounded-xl 
             mr-[0px] 
             tablet:mr-[40px] 
             desktop:mr-[36px]
              shadow-custom-light-dark-box-image bg-gradient-to-br p-1 from-[#E3E8EC] to-[#FFFFFF] "
          >
            <Image
              src={item?.img}
              alt="Slika"
              width={500}
              height={500}
              className="
      object-cover
      h-[99px] w-[245px]
      tablet:h-[113px] tablet:w-[180px] 
      desktop:h-[140px]  desktop:w-[230px]
       bg-cover rounded-lg"
            />
          </div>
          <div className="flex items-start flex-col mt-5 tablet:mt-0 desktop:mt-1 w-[245px] ml-[2.5px] tablet:ml-0 desktop:ml-0 tablet:w-[310px] desktop:w-[433px] tablet:pr-[10px] ">
            <div className="flex flex-1 flex-col w-full">
              <div className="flex justify-between h-[19px] mobile:items-center tablet:h-7 desktop:h-7 w-full desktop:pr-[10px] ">
                <div className="flex items-center h-full">
                  <div className="font-variation-customOpt16 desktop:font-variation-customOpt24 tablet:font-variation-customOpt24 font-semibold tablet:font-normal desktop:font-normal text-left desktop:text-[24px] tablet:text-[24px] text-[16px]  text-[#1E2125] leading-[28.13px]">
                    {item?.name}
                  </div>
                </div>
                {item?.isPartner ? (
                  <div className="flex items-center h-full tablet:h-5 desktop:h-4 desktop:mt-[3px] ">
                    <div
                      className={`${
                        index == 3 ? "text-[#CC6F6F]" : "text-[#6F94CC]"
                      } font-variation-customOpt12 font-normal text-[12px] `}
                    >
                      PARTNER
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="flex items-center h-[16px] tablet:h-6 desktop:h-6 mt-[10px] tablet:mt-4 desktop:mt-4">
                <p className="flex font-variation-customOpt12 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 font-normal text-left desktop:text-[16px] tablet:text-[16px] text-[12px]  text-[#414141] leading-[24px]">
                  {item?.add}
                </p>
              </div>
              <div className="flex items-center h-[16px] tablet:h-6 desktop:h-6 mt-1 desktop:mt-2">
                <p className="font-variation-customOpt12 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 font-normal text-left desktop:text-[16px] tablet:text-[16px] text-[12px]  text-[#414141] leading-[24px]">
                  {item?.web}
                </p>
              </div>
              <div className="flex w-full  h-[30px] tablet:h-6 justify-between mt-[10px] tablet:mt-[2px] desktop:mt-2 tablet:pr-2">
                <div className="flex items-center h-[16px] tablet:h-6 desktop:h-6 tablet:mt-1 desktop:mt-2">
                  <p className="font-variation-customOpt14 tablet:font-variation-customOpt16 desktop:font-variation-customOpt20 font-normal text-left desktop:text-[20px] tablet:text-[16px] text-[14px]  text-[#414141] leading-[24px]">
                    {item?.osmr}
                  </p>
                </div>
                <div className="flex mt-[16px] tablet:mt-0 h-[14px] tablet:h-6 desktop:h-6 desktop:w-[92px] justify-end items-center desktop:mt-4 ">
                  <div className="text-[#1E2125] font-normal text-[12px]  tablet:text-[14px] desktop:text-[14px] ">
                    Odpri
                  </div>
                  <Image
                    src={"/icon_arrowright.png"}
                    alt="Slika"
                    width={24}
                    height={24}
                    className="h-4 w-4 tablet:h-6 desktop:h-6 tablet:w-6 desktop:w-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default FuneralList;
