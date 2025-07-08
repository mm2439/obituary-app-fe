"use client";
import React from "react";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import RevenueComp from "../components/appcomponents/RevenueComp";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import downarrow from "../../public/bottomdropdown.png";
import greyarrow from "../../public/greyarrow.png";
import deleteImg from "../../public/deleteimg.png";
import crossImg from "../../public/crossImg.png";
import filterImg from "../../public/exportgrey.png";
import blueArrow from "../../public/rightarrow.png";
import purpleArrow from "../../public/pinkrightarrow.png";
import regionsAndCities from "@/utils/regionAndCities";
import { useState } from 'react';

const Page = () => {
  const allRegionsOption = { place: "- Pokaži vse regije - ", id: "allRegions" };
  const allCitiesOption = { place: " - Pokaži vse občine - ", id: "allCities" };
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  
const regionOptions = [
  allRegionsOption, 
  ...Object.keys(regionsAndCities).map((region) => ({
    place: region,
    id: region,
  }))
];

const cityOptions = selectedRegion && selectedRegion !== "allRegions"
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
    if(item.id==='allRegions'){
      setSelectedRegion(null);
      setSelectedCity(null);
      return
    }
    setSelectedRegion(item.place);
    setSelectedCity(null);
  };

  const handleCitySelect = (item) => {
    if(item.id==='allCities'){
      setSelectedCity(null);
      return
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
  const tableData = [
    {
      Memory: "Mario Danilo",
      Page: "Primo",
      city: "Palm Springs",
      keeper: "01002SIA ",
      my: "Y",
      since1: "11.05.24",
      Expiry: "11.05.25",
      price: "20€",
      paid: "11.05.24",
      prolong: "",
      lastkeeperslogin: "15.08.24",
      totalLogindays: "23",
      Waiting: "2",
      since: "21-08-24",
      delete_memory: "",
      blocks_memory: "",
      Notes: "",
      obitpage: "",
      memory_page: "",
    },
    {
      Memory: "Al",
      Page: "Goretzka",
      city: "Santa monica",
      keeper: "01002SIA ",
      my: "M",
      since1: "11.05.24",
      Expiry: "11.05.25",
      price: "Free",
      paid: "11.05.24",
      prolong: "",
      lastkeeperslogin: "",
      totalLogindays: "23",
      Waiting: "",
      since: "",
      delete_memory: "",
      blocks_memory: "",
    },
    {
      Memory: "Hans Christian",
      Page: "Andersen",
      city: "Beverly Hills",
      keeper: "01002SIA ",
      my: "Y",
      since1: "11.05.24",
      Expiry: "11.05.25",
      price: "20€",
      paid: "11.05.24",
      prolong: "",
      lastkeeperslogin: "15.08.24",
      totalLogindays: "23",
      Waiting: "2",
      since: "25-06-24",
      delete_memory: "",
      blocks_memory: "",
      Notes: "",
      obitpage: "",
      memory_page: "",
    },
  ];

  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin
          headerCheck={4}
          isSelectedLabel={"keepers"}
          whichtab={"Keepers"}
        />
      </div>

      <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
        <div className="w-full h-[114px] py-[2px] ] flex flex-row justify-between items-center">
          <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
            <div className="flex justify-between">
              <div className="flex">
                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]">
                  131
                </p>
                <p className="font-sourcesans text-[20px] font-thin leading-[16px] text-[#CCCCCC] mx-[8px] my-auto">
                  |
                </p>
                <p className="font-sourcesans text-[20px] font-normal leading-[16px] text-[#ACAAAA] my-auto">
                  18
                </p>
              </div>

              <div className="text-right">
                <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E]">
                  Privious m:{" "}
                  <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91]">
                    101
                  </span>
                </p>
                <p className="mt-[10px] font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E]">
                  in Total:{" "}
                  <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#6D778E]">
                    1227
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col items-end">
                <div className="flex">
                  <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125]">
                    New Keepers
                  </p>
                  <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#D4D4D4] mx-[4px]">
                    |
                  </p>
                  <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125]">
                    Paid
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E]">
                  Change:{" "}
                  <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D]">
                    + 31 %
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div
            className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px] ${"border-[#0A85C2] border-[2px]"} h-[110px]  bg-[#e8f4fc]`}
          >
            <div className="flex  justify-between">
              <div className="flex flex-col items-end mt-[20px]">
                <div className="flex">
                  <p className="font-sourcesans text-[40px] font-bold leading-[18.75px] text-[#6D778E]">
                    68
                  </p>
                  <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#D4D4D4] mx-[4px]">
                    |
                  </p>
                  <p className="font-sourcesans text-[40px] font-bold leading-[18.75px] text-[#6D778E]">
                    84
                  </p>
                </div>
              </div>
              <div className="leading-[14px] font-variation-customOpt12  flex flex-row items-center gap-x-[4px]">
                <div className="text-[#6D778E] text-[12px] ">Previous m:</div>
                <div className="flex flex-col items-end ">
                  <div className="flex">
                    <p className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91]">
                      51
                    </p>
                    <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#D4D4D4] mx-[4px]">
                      |
                    </p>
                    <p className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D]">
                      82
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="text-[14px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px] mt-[20px]">
                <p>With photo I funeral info in % last month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[80px]">
          <div className="flex flex-row items-center justify-end space-x-[16px]">
            <div className="flex flex-row space-x-[16px]">
              <div className="flex h-[48px]">
                <input
                  type="text"
                  placeholder="Memory Page"
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    width: "227px",
                    height: "100%",
                    fontWeight: 400,
                    borderWidth: "1px",
                    borderColor: "#7C7C7C",
                    borderRadius: "8px",
                    paddingLeft: "15.8px",
                    paddingRight: "15.8px",
                    color: "#7C7C7C",
                    backgroundColor: "white",
                    fontVariationSettings: "'opsz' 16",
                  }}
                />
              </div>
              <Dropdown
                label={"City"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
                data={cityOptions}
                selectedValue={selectedCity}
                onSelect={()=>handleCitySelect()}
              />
              <div className="flex h-[16px] w-[360px] tablet:hidden desktop:hidden" />
              <Dropdown
                label={"Region"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
                data={regionOptions}
                selectedValue={selectedRegion}
                onSelect={()=>handleRegionSelect()}
              />
            </div>
            <div className="hidden desktop:flex justify-center w-12 items-center h-full desktop:aspect-square rounded-lg bg-[#414141]">
              <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
            </div>
          </div>
        </div>

        <div className="mt-[50px] w-full">
        <table className="min-w-full border-b-[0.5px] border-[#A1B1D4]">
            <thead>
              <tr className=" h-[61px] uppercase  py-[14px] border-b-[0.5px] border-[#A1B1D4] ">
                <th className="pl-[38px] w-[244px] border-b border-[#A1B1D4] text-left text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  <div className="w-[150px] flex ml-[-20px]">Memory Page </div>
                  <div className="mt-1 ml-[-19px]">
                    <img
                      src={downarrow.src}
                      alt="Down Arrow"
                      className="mr-[24px] inline-block w-3 h-3"
                    />
                  </div>
                </th>

                <th
                  className="pr-[130px] pb-[5px] w-[40px] text-center  border-b border-[#A1B1D4] text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  City
                  <img
                    src={greyarrow.src}
                    alt="Down Arrow"
                    className="inline-block ml-2 w-4 h-4"
                  />
                </th>
                <th
                  className="pb-[22px] w-[206px] pl-[18px]  border-b border-[#A1B1D4] text-justify text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  keeper
                </th>
                <th
                  className="pb-[22px] pl-[28px] w-[74px]  border-b border-[#A1B1D4] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  <div
                    style={{
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "600",
                    }}
                  >
                    <p style={{ color: "#3C3E41", margin: "0" }}>M</p>
                    <span style={{ color: "#D4D4D4", margin: "0 8px" }}>|</span>
                    <p style={{ color: "#1FBE11", margin: "0" }}>Y</p>
                    <span style={{ color: "#D4D4D4", margin: "0 8px" }}>|</span>
                    <p style={{ color: "#EB1D1D", margin: "0" }}>5</p>
                  </div>
                </th>
                <th
                  className=" w-[242px] px-[40px] text-center  border-b border-[#A1B1D4] text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  <p className="uppercase text-[12px] text-[#6D778E] font-semibold">
                    {" "}
                    since{" "}
                    <span className="text-[#9A4497] font-semibold text-[12px]">
                      {" "}
                      expiry
                    </span>
                  </p>
                </th>
                <th
                  className=" w-[153px] text-center py-2  border-b border-[#A1B1D4] text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#530CC6]"
                >
                  price
                  <img
                    src={downarrow.src}
                    alt="Down Arrow"
                    className="inline-block ml-[2px] w-4 h-4"
                  />
                </th>
                <th
                  className="pb-[22px] w-[643px] px-[30px] mr-[0px]  border-b border-[#A1B1D4] text-left text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  paid
                </th>
                <th
                  className="pb-[22px] w-[643px] pr-[110px] mr-[0px]  border-b border-[#A1B1D4] text-right text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  prolong
                </th>
                <th
                  className=" w-[643px] pr-[18px] mr-[0px]   border-b border-[#A1B1D4] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  last keeper’s login
                </th>
                <th
                  className=" w-[643px] pr-[18px] mr-[0px] border-b border-[#A1B1D4] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  total logins (days)
                </th>
                <th
                  className=" w-[643px] pr-[28px] mr-[0px]  border-b border-[#A1B1D4] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  Waiting for con firmation
                </th>
                {/* <th
                  className=" w-[643px] pr-[18px] mr-[0px]  border-b border-[#A1B1D4] text-right text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  since
                  <img
                    src={downarrow.src}
                    alt="Down Arrow"
                    className="inline-block ml-2 w-4 h-4"
                  />
                </th> */}

                <th
                  className="pt-[23px] pr-[115px] w-[153px] text-center py-2  border-b border-[#A1B1D4] text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#530CC6]"
                >
                  since
                  <img
                    src={downarrow.src}
                    alt="Down Arrow"
                    className="inline-block m-[0] w-4 h-4"
                  />
                </th>

                <th
                  className=" w-[643px] pr-[18px] mr-[0px]  border-b border-[#A1B1D4] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  delete memory
                </th>
                <th
                  className=" w-[643px] pr-[18px] mr-[0px]  border-b border-[#A1B1D4] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  Block memory
                </th>
                <th
                  className="pt-[12px] w-[643px] pr-[18px] mr-[0px]  border-b border-[#A1B1D4] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#3C3E41]"
                >
                  notes
                </th>
                <th
                  className=" w-[643px] pr-[18px] mr-[0px] border-b border-[#A1B1D4] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#0769FD]"
                >
                  obit pages
                </th>
                <th
                  className=" w-[643px] pr-[18px] mr-[0px] border-b border-[#A1B1D4] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
               text-[#9A4497]"
                >
                  Memory page
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className={`border border-[#A1B1D4] rounded-[4px] ${
                    index === 0 ? "bg-[#F7F9FA70] " : ""
                  }`}
                >
                  <td className="pl-[18px]  border-t-[1px] border-b-[0.5px] border-[#A1B1D4] text-left  leading-[15px]  font-variation-customOpt13 w-[244px]">
                    <p className="text-[#6D778E] text-[12px] font-normal">
                      {data.Memory}
                    </p>
                    <span className="text-[#3C3E41] text-[14px] font-normal">
                      {" "}
                      {data.Page}
                    </span>
                  </td>
                  <td
                    className="w-[40px] border-t-[1px] border-b-[0.5px] border-[#A1B1D4]  py-[24px] text-[13px] leading-[15px] text-[#3C3E41] 
                font-variation-customOpt13"
                  >
                    {data.city}
                  </td>
                  <td
                    className=" pl-[18px] w-[206px]  border-t-[1px] border-b-[0.5px] border-[#A1B1D4] text-[13px] leading-[15px] 
                text-[#3C3E41] font-variation-customOpt13 text-center"
                  >
                    {data.keeper}
                  </td>
                  <td
                    className={`pl-[18px] w-[54px] border-t-[1px] text-[13px] leading-[20px] font-bold border-b-[0.5px] border-[#A1B1D4] text-center 
    ${
      index === 0
        ? "text-[#1FBE11] text-[20px]"
        : index === 1
        ? "text-[#6D778E] text-[20px]"
        : "text-[#EB1D1D] text-[20px]"
    }`}
                  >
                    {data.my}
                  </td>

                  <td
                    key={index}
                    className="w-[262px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center"
                  >
                    <p className="text-[#6D778E] text-[12px] font-normal">
                      {data.since1}
                    </p>
                    <p
                      className={`text-[12px] font-normal ${
                        index === 1 ? "text-[#EB1D1D]" : "text-[#9A4497]"
                      }`}
                    >
                      {data.Expiry}
                    </p>
                  </td>

                  <td
                    key={index}
                    className={`px-[10px] w-[153px] border-t-[1px] leading-[15px] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center ${
                      index === 1
                        ? "text-[#3C3E41] font-normal text-[12px]"
                        : "text-[#530CC6] font-bold text-[20px] f"
                    }`}
                  >
                    {data.price}
                  </td>

                  <td className=" pr-[18px] w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-right">
                    {data.paid}
                  </td>
                  <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-right pr-[22px]">
                    {data.prolong}
                  </td>
                  <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-right pr-[22px]">
                    {data.lastkeeperslogin}
                  </td>
                  <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-right pr-[22px]">
                    {data.totalLogindays}
                  </td>
                  <td className="w-[643px] border-t-[1px] text-[20px] font-bold leading-[15px] text-[#EB1D1D] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-right pr-[52px]">
                    {data.Waiting}
                  </td>
                  <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-left pr-[2px]">
                    <p> {data.since}</p>
                  </td>

                  <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center pr-[32px]">
                    {data.delete_memory}
                    <img
                      src={deleteImg.src}
                      alt="Down Arrow"
                      className="inline-block ml-2 w-4 h-4"
                    />
                  </td>

                  <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center pr-[32px]">
                    {data.blocks_memory}
                    <img
                      src={crossImg.src}
                      alt="Down Arrow"
                      className="inline-block ml-2 w-4 h-4"
                    />
                  </td>

                  <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center pr-[32px]">
                    {data.Notes}
                    <img
                      src={filterImg.src}
                      alt="Down Arrow"
                      className="inline-block ml-2 w-4 h-4"
                    />
                  </td>

                  <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center pr-[32px]">
                    {data.obitpage}
                    <img
                      src={blueArrow.src}
                      alt="Down Arrow"
                      className="inline-block ml-2 w-4 h-4"
                    />
                  </td>

                  <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center pr-[22px]">
                    {data.memory_page}
                    <img
                      src={purpleArrow.src}
                      alt="Down Arrow"
                      className="inline-block ml-2 w-4 h-4"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
