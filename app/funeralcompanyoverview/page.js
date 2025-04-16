"use client";
import React from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const FuneralCompanyOverview = () => {
  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin />
      </div>

      <div className="w-full bg-[#e5eaf1] pt-[64px]  py-[2px] px-[20px] flex flex-col">
        <div className="w-full bg-[#e5eaf1] mb-[88px]  flex justify-between">
          <div
            className={`w-[314px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]"
          border-[#0A85C2] border-[2px] h-[114px] flex flex-row justify-between bg-[#fafbfc]`}
          >
            <div className="flex flex-col justify-between w-[57%]">
              <div className="flex">
                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]">
                  131
                </p>
                <p className="font-sourcesans text-[40px] font-thin leading-[16px] text-[#CCCCCC] mx-[8px] my-auto">
                  |
                </p>
                <p className="font-sourcesans text-[40px] font-bold leading-[16px] text-[#0D94E8] my-auto">
                  18
                </p>
              </div>
              <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                Cities covered
              </div>
            </div>

            <div className="flex flex-col justify-between items-end">
              <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
                <div>Max:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E] font-bold">
                  212
                </div>
              </div>

              <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-row items-center gap-x-[4px]">
                <div className="text-[#6D778E] text-[12px] leading-[19px] font-variation-customOpt16 font-medium">
                  Last m:
                  <span className="text-[#6D778E] text-[16px] font-bold">
                    {" "}
                    122
                  </span>{" "}
                  <span className="text-[#0D94E8] text-[16px] font-bold">
                    | 164
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div
              className={`w-[314px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]"
          border-[#0A85C2] border-[2px] h-[114px] flex flex-row justify-between bg-[#fafbfc]`}
            >
              <div className="flex flex-col justify-between w-[57%]">
                <div className="flex">
                  <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]">
                    142
                  </p>
                  <p className="font-sourcesans text-[40px] font-thin leading-[16px] text-[#CCCCCC] mx-[8px] my-auto">
                    |
                  </p>
                  <p className="font-sourcesans text-[40px] font-bold leading-[16px] text-[#6D778E] my-auto">
                    38
                  </p>
                </div>
                <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[18.75px]">
                  Obits | Gifts
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <div className="text-[14px] leading-[16.41px] font-normal font-variation-customOpt12 text-[#6D778E] flex flex-col items-center gap-x-[4px]">
                  <div>FUNERAL C.</div>
                  <div className="text-[12px] leading-[19px] font-variation-customOpt16 text-[#6D778E] font-normal">
                    City coverage
                  </div>
                </div>

                <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-row items-center gap-x-[4px]">
                  <div className="text-[#6D778E] text-[12px] leading-[19px] font-variation-customOpt16 font-medium">
                    Last m:
                    <span className="text-[#6D778E] text-[16px] font-bold">
                      {" "}
                      135
                    </span>{" "}
                    <span className="text-[#6D778E] text-[16px] font-bold">
                      | 34
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-[314px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]"
          border-[#0A85C2] border-[2px] h-[114px] flex flex-row justify-between bg-[#fafbfc]`}
            >
              <div className="flex flex-col justify-between w-[57%]">
                <div className="flex">
                  <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#0D94E8]">
                    35
                  </p>
                  <p className="font-sourcesans text-[40px] font-thin leading-[16px] text-[#CCCCCC] mx-[8px] my-auto">
                    |
                  </p>
                  <p className="font-sourcesans text-[40px] font-bold leading-[16px] text-[#0D94E8] my-auto">
                    36
                  </p>
                </div>
                <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                  Obits | Gifts
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <div className="text-[14px] leading-[14px] font-normal font-variation-customOpt12 text-[#0A85C2] flex flex-col items-end gap-x-[4px]">
                  <div>FLORISTS</div>
                  <div className="text-[12px] leading-[19px] font-variation-customOpt16 text-[#6D778E] font-normal">
                    City coverage
                  </div>
                </div>

                <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-row items-center gap-x-[4px]">
                  <div className="text-[#6D778E] text-[12px] leading-[19px] font-variation-customOpt16 font-medium">
                    Last m:
                    <span className="text-[#0D94E8] text-[16px] font-bold">
                      {" "}
                      35
                    </span>{" "}
                    <span className="text-[#0D94E8] text-[16px] font-bold">
                      | 64
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="font-sourcesans text-[32px] font-semibold leading-[37.5px] text-[#0A85C2]">
              New Orleans
            </p>
          </div>

          <div
            className="flex flex-row
           items-center space-x-[16px] mb-[80px]"
          >
            <div className="flex flex-row space-x-[16px] ">
              <Dropdown
                label={"City"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
              <div className="flex h-[16px] w-[360px] tablet:hidden desktop:hidden" />
              <Dropdown
                label={"Region"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
            </div>
            <div className="hidden desktop:flex justify-center  w-12 items-center h-full desktop:aspect-square rounded-lg bg-[#414141]">
              <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
            </div>
          </div>
        </div>

        <div className="w-full relative">
          <div className="absolute top-[-26px] left-[605px] w-[420px] h-[106px] flex justify-center p-[9px] bg-[#FFFFFF] z-0">
            <p className="font-sourcesans text-[24px] font-bold leading-[24px] text-[#2B5D80]  underline">
              OBITS
            </p>
          </div>

          <div className="absolute top-[-26px] left-[1055px]  w-[369px] h-[106px] flex justify-center p-[9px] bg-[#eafbea] z-0">
            <p className="font-sourcesans text-[24px] font-bold leading-[24px] text-[#2B5D80]  underline">
              GIFTS
            </p>
          </div>

          <table className="min-w-full relative table-auto  z-10">
            <thead>
              <tr className="h-[70px] uppercase ">
                <th className="w-[167px] pt-[50px]  pl-[40px]">
                  <div className="flex">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                      City{" "}
                    </p>

                    <Image
                      src={"/downwardarraw.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0] pb-[15px]"
                    ></Image>
                  </div>
                </th>

                <th className="w-[143px] text-left pt-[50px]">
                  <div className="flex">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                      Region{" "}
                    </p>

                    <Image
                      src={"/downwardarraw.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0] pb-[15px]"
                    ></Image>
                  </div>
                </th>

                <th className="w-[65px] text-center pt-[20px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    total
                  </p>

                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Florists
                  </p>
                </th>

                <th className="w-[136px] text-center pt-[20px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    total
                  </p>

                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    shops
                  </p>
                </th>

                <th className="w-[80px] text-center pt-[23px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    cemeteries
                  </p>
                  <p className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                    total | active
                  </p>
                </th>

                <th className="w-[91px] text-center pt-[20px] pl-[100px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    total
                  </p>
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    obits
                  </p>
                </th>

                <th className="w-[103px] text-center pt-[20px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    last
                  </p>
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    month
                  </p>
                </th>

                <th className="w-[125px] text-center  pt-[20px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    last month
                  </p>

                  <p className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                    fun comp | florist
                  </p>
                </th>

                <th className="w-[125px] text-center pt-[20px]">
                  <p className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                    florist partners
                  </p>
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Obits{" "}
                    <span className="font-sourcesans text-[12px] font-semibold leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    gifts
                  </p>
                </th>

                <th className="w-[170px] text-center   pt-[39px] pl-[90px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    total
                  </p>
                  <Image
                    src={"/arraydownward.png"}
                    width={5}
                    height={5}
                    className="w-[15px] h-[25px] m-[0] pb-[15px] ml-[30px]"
                  ></Image>

                  {/* arraydownward */}
                </th>

                <th className="w-[70px] text-center   pt-[12px] relative ">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    keepers
                  </p>
                  <Image
                    src={"/icon_dropDown.png"}
                    width={5}
                    height={5}
                    className="w-[24px] h-[40px] m-[0] pb-[15px] ml-[40px] absolute z-10 top-[48px] left-[-11px]"
                  ></Image>
                </th>

                <th className="w-[70px] text-center pt-[12px] relative">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Mobile
                  </p>
                  <Image
                    src={"/icon_dropDown.png"}
                    width={5}
                    height={5}
                    className="w-[24px] h-[40px] m-[0] pb-[15px] ml-[40px] absolute z-10 top-[48px] left-[-11px]"
                  ></Image>
                </th>

                <th className="w-[400px] text-justify pl-[13px] pt-[12px] relative">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    tributes
                  </p>
                  <Image
                    src={"/icon_dropDown.png"}
                    width={5}
                    height={5}
                    className="w-[24px] h-[40px] m-[0] pb-[15px] ml-[40px] absolute z-10 top-[48px] left-[-11px]"
                  ></Image>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66]">
                <td className="w-[167px] pl-[40px]">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.43px] text-[#3C3E41]">
                    Albany
                  </p>
                </td>

                <td className="w-[143px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.43px] text-[#3C3E41]">
                    Osrednja Slo
                  </p>
                </td>

                <td className="w-[65px] text-center ">
                  <p className="font-sourcesans text-[16px] font-semibold leading-[18.75px] text-[#6D778E]">
                    5
                  </p>
                </td>

                <td className="w-[136px] text-center ">
                  <p className="font-sourcesans text-[16px] font-semibold leading-[18.75px] text-[#6D778E]">
                    8
                  </p>
                </td>

                <td className="w-[80px] text-center ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#6D778E]">
                    12{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    5
                  </p>
                </td>

                <td className="w-[91px] text-center pl-[100px]">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#6D778E]">
                    218
                  </p>
                </td>

                <td className="w-[103px] text-center ">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E]">
                    52
                  </p>
                </td>

                <td className="w-[125px] text-center">
                  <p className="font-sourcesans text-[14px] font-normal leading-[15.23px] text-[#6D778E]">
                    40{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    12
                  </p>
                </td>

                <td className="w-[125px] text-center ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[15.23px] text-[#6D778E]">
                    2{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    2
                  </p>
                </td>

                <td className="w-[170px] text-center  pl-[90px]">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E]">
                    20
                  </p>
                </td>

                <td className="w-[70px] text-center   relative ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    6
                  </p>
                </td>

                <td className="w-[70px] text-center relative">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    3
                  </p>
                </td>
                <td className="w-[70px] text-justify pl-[13px]  ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    4
                  </p>
                </td>
              </tr>

              <tr
                className="h-[64px] border-l-[0.5px] border-l-[solid] border-l-[#A1B1D4]
             border-r-[0.5px] border-r-[solid] border-r-[#A1B1D4]
             border-b-[0.5px] border-b-[solid] border-b-[#A1B1D4]
            "
              >
                <td className="w-[167px] pl-[40px]">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.43px] text-[#3C3E41]">
                    Boston
                  </p>
                </td>

                <td className="w-[143px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.43px] text-[#3C3E41]">
                    Primorska
                  </p>
                </td>

                <td className="w-[65px] text-center ">
                  <p className="font-sourcesans text-[16px] font-semibold leading-[18.75px] text-[#6D778E]">
                    1
                  </p>
                </td>

                <td className="w-[136px] text-center ">
                  <p className="font-sourcesans text-[16px] font-semibold leading-[18.75px] text-[#6D778E]">
                    1
                  </p>
                </td>

                <td className="w-[80px] text-center ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#6D778E]">
                    21{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    5
                  </p>
                </td>

                <td className="w-[91px] text-center pl-[100px]">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#6D778E]">
                    58
                  </p>
                </td>

                <td className="w-[103px] text-center ">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E]">
                    13
                  </p>
                </td>

                <td className="w-[125px] text-center">
                  <p className="font-sourcesans text-[14px] font-normal leading-[15.23px] text-[#6D778E]">
                    10{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    0
                  </p>
                </td>

                <td className="w-[125px] text-center ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[15.23px] text-[#6D778E]">
                    0{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    0
                  </p>
                </td>

                <td className="w-[170px] text-center  pl-[90px]">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E]">
                    32
                  </p>
                </td>

                <td className="w-[70px] text-center   relative ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    11
                  </p>
                </td>

                <td className="w-[70px] text-center relative">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    2
                  </p>
                </td>
                <td className="w-[70px] text-justify pl-[13px]  ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    29
                  </p>
                </td>
              </tr>

              <tr
                className="h-[64px] border-l-[0.5px] border-l-[solid] border-l-[#A1B1D4]
             border-r-[0.5px] border-r-[solid] border-r-[#A1B1D4]
             border-b-[0.5px] border-b-[solid] border-b-[#A1B1D4]
            "
              >
                <td className="w-[167px] pl-[40px]">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.43px] text-[#3C3E41]">
                    Cleveland
                  </p>
                </td>

                <td className="w-[143px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.43px] text-[#3C3E41]">
                    Osrednja Slo
                  </p>
                </td>

                <td className="w-[65px] text-center ">
                  <p className="font-sourcesans text-[16px] font-semibold leading-[18.75px] text-[#6D778E]">
                    3
                  </p>
                </td>

                <td className="w-[136px] text-center ">
                  <p className="font-sourcesans text-[16px] font-semibold leading-[18.75px] text-[#6D778E]">
                    3
                  </p>
                </td>

                <td className="w-[80px] text-center ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#6D778E]">
                    3{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    3
                  </p>
                </td>

                <td className="w-[91px] text-center pl-[100px]">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#6D778E]">
                    174
                  </p>
                </td>

                <td className="w-[103px] text-center ">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E]">
                    33
                  </p>
                </td>

                <td className="w-[125px] text-center">
                  <p className="font-sourcesans text-[14px] font-normal leading-[15.23px] text-[#6D778E]">
                    28{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    5
                  </p>
                </td>

                <td className="w-[125px] text-center ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[15.23px] text-[#6D778E]">
                    1{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    0
                  </p>
                </td>

                <td className="w-[170px] text-center  pl-[90px]">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E]">
                    29
                  </p>
                </td>

                <td className="w-[70px] text-center   relative ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    6
                  </p>
                </td>

                <td className="w-[70px] text-center relative">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    5
                  </p>
                </td>
                <td className="w-[70px] text-justify pl-[13px]  ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    8
                  </p>
                </td>
              </tr>

              <tr
                className="h-[64px] border-l-[0.5px] border-l-[solid] border-l-[#A1B1D4]
             border-r-[0.5px] border-r-[solid] border-r-[#A1B1D4]
             border-b-[0.5px] border-b-[solid] border-b-[#A1B1D4]
            "
              >
                <td className="w-[167px] pl-[40px]">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.43px] text-[#3C3E41]">
                    Denver
                  </p>
                </td>

                <td className="w-[143px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.43px] text-[#3C3E41]">
                    Osrednja Slo
                  </p>
                </td>

                <td className="w-[65px] text-center ">
                  <p className="font-sourcesans text-[16px] font-semibold leading-[18.75px] text-[#6D778E]">
                    7
                  </p>
                </td>

                <td className="w-[136px] text-center ">
                  <p className="font-sourcesans text-[16px] font-semibold leading-[18.75px] text-[#6D778E]">
                    8
                  </p>
                </td>

                <td className="w-[80px] text-center ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#6D778E]">
                    15{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    17
                  </p>
                </td>

                <td className="w-[91px] text-center pl-[100px]">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#6D778E]">
                    116
                  </p>
                </td>

                <td className="w-[103px] text-center ">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E]">
                    27
                  </p>
                </td>

                <td className="w-[125px] text-center">
                  <p className="font-sourcesans text-[14px] font-normal leading-[15.23px] text-[#6D778E]">
                    0{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    27
                  </p>
                </td>

                <td className="w-[125px] text-center ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[15.23px] text-[#6D778E]">
                    1{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    1
                  </p>
                </td>

                <td className="w-[170px] text-center  pl-[90px]">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E]">
                    16
                  </p>
                </td>

                <td className="w-[70px] text-center   relative ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    5
                  </p>
                </td>

                <td className="w-[70px] text-center relative">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    3
                  </p>
                </td>
                <td className="w-[70px] text-justify pl-[13px] ">
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#3C3E41]">
                    8
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-[42px] flex justify-end mr-[200px]">
          <Image
            src={"/arraydownward.png"}
            width={5}
            height={5}
            className="w-[15px] h-[25px] pb-[15px] mt-[5px] mr-[12px]"
          ></Image>

          <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]  m-[0]">
            Opens a popup with more info
          </p>
        </div>

        <div className="mt-[15px] flex justify-end mr-[239px] relative">
          <Image
            src={"/icon_dropDown.png"}
            width={5}
            height={5}
            className="w-[20px] h-[23px] absolute right-[145px] top-[-3px]"
          ></Image>
          <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]  m-[0]">
            Distributes in a column
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuneralCompanyOverview;
