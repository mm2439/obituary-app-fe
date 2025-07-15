"use client";
import React from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const FuneralCompanyStatistics = () => {
  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin />
      </div>

      <div className="w-full bg-[#e5eaf1] pt-[64px]  py-[2px] px-[20px] flex flex-col">
        <div className="flex justify-between mb-[60px]">
          {/* Card 1 */}
          <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
            <div className="flex justify-between">
              <div className="flex">
                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                  145
                </p>
              </div>

              <div>
                <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                  Previous m :
                  <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                    122
                  </span>
                </p>
                <p className="font-sourcesans text-end text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                  Total :
                  <span className="font-sourcesans text-[16px] font-normal leading-[18.75px] text-[#EB1D1D] my-auto ">
                    143
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                  New obits last month
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
            <div className="flex justify-between">
              <div className="flex">
                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                  97
                </p>
              </div>

              <div>
                <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                  Previous m :
                  <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                    74
                  </span>
                </p>
                <p className="font-sourcesans text-end text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                  Total :
                  <span className="font-sourcesans text-[16px] font-normal leading-[18.75px] text-[#EB1D1D] my-auto ">
                    573
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                  New Memory pages last month
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#e8f4fc] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
            <div className="flex justify-between">
              <div className="flex">
                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                  68
                </p>

                <p className="font-sourcesans text-[35px] font-thin leading-[40px] text-[#6D778E] mx-[6px] mt-[0]">
                  |
                </p>

                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                  84
                </p>
              </div>

              <div className="flex">
                <p className="font-sourcesans text-[12px] font-normal leading-[18.75px] text-[#6D778E]  mr-[3px]">
                  Previous m :
                </p>
                <p className="font-sourcesans text-[16px] font-thin leading-[18.75px] text-[#6D778E]  mr-[3px]">
                  58
                </p>
                <p className="font-sourcesans text-[12px] font-normal leading-[18.75px] text-[#6D778E] mr-[3px] ">
                  |
                </p>
                <p className="font-sourcesans text-[16px] font-thin leading-[18.75px] text-[#6D778E]  mr-[3px]">
                  74
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                  Photo{" "}
                  <span className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#ACAAAA] m-[0]">
                    |{" "}
                  </span>
                  funeral info (%; last month)
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#eafbea] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
            <div className="flex justify-between">
              <div className="flex">
                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                  41
                </p>

                <p className="font-sourcesans text-[35px] font-thin leading-[40px] text-[#cccccc] mx-[6px] mt-[0]">
                  |
                </p>

                <p className="font-sourcesans text-[32px] font-medium leading-[37.5px] text-[#acaaaa]  pt-[8px]">
                  84
                </p>

                <p className="font-sourcesans text-[35px] font-thin leading-[40px] text-[#cccccc] mx-[6px] mt-[0]">
                  |
                </p>

                <p className="font-sourcesans text-[32px] font-medium leading-[37.5px] text-[#acaaaa]   pt-[8px]">
                  0
                </p>
              </div>

              <div>
                <p className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91]  mr-[3px]">
                  GIFTS
                </p>
                <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#EB1D1D]  mr-[3px]">
                  FUNERAL C
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] ">
                Keepers | Mobile | Tributes
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#eafbea] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
            <div className="flex justify-between">
              <div className="flex">
                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                  26
                </p>

                <p className="font-sourcesans text-[35px] font-thin leading-[40px] text-[#cccccc] mx-[6px] mt-[0]">
                  |
                </p>

                <p className="font-sourcesans text-[32px] font-medium leading-[37.5px] text-[#acaaaa]  pt-[8px]">
                  79
                </p>

                <p className="font-sourcesans text-[35px] font-thin leading-[40px] text-[#cccccc] mx-[6px] mt-[0]">
                  |
                </p>

                <p className="font-sourcesans text-[32px] font-medium leading-[37.5px] text-[#acaaaa]   pt-[8px]">
                  14
                </p>
              </div>

              <div>
                <p className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91]  mr-[3px]">
                  GIFTS
                </p>
                <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#EB1D1D]  mr-[3px]">
                  FLORISTS
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] ">
                Keepers | Mobile | Tributes
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="font-sourcesans text-[32px] font-semibold leading-[37.5px] text-[#0A85C2]">
              Funeral Companies only
            </p>
          </div>

          <div
            className="flex flex-row
           items-center space-x-[16px] mb-[80px]"
          >
            <div className="flex flex-row space-x-[16px] ">
              <div className="flex h-[48px]">
                <input
                  type="text"
                  placeholder="Funeral company only"
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
          <div className="absolute top-[-5px] left-[480px] w-[475px] h-[106px] flex justify-center p-[9px] bg-[#FFFFFF] z-0">
            <p className="font-sourcesans text-[24px] font-bold leading-[24px] text-[#2B5D80]  underline">
              OBITS
            </p>
          </div>

          <div className="absolute top-[-5px] left-[1050px]  w-[369px] h-[106px] flex justify-center p-[9px] bg-[#eafbea] z-0">
            <p className="font-sourcesans text-[24px] font-bold leading-[24px] text-[#2B5D80]  underline">
              OBITS
            </p>
          </div>

          <table className="min-w-full relative table-auto  z-10">
            <thead>
              <tr className="h-[70px] uppercase ">
                <th className="w-[167px] pt-[60px]  pl-[13px]">
                  <p className="text-left  font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Funeral Company
                  </p>
                  <p className="text-left font-sourcesans text-[12px] font-semibold leading-[16px] text-[#ACAAAA]">
                    Unit
                  </p>
                  <div className="w-full flex mt-[3px]">
                    <Image
                      src={"/arraydownward.png"}
                      width={8}
                      height={12}
                      //   className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="w-[143px] text-left pt-[40px]">
                  <div className="flex">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      City{" "}
                    </p>

                    <Image
                      src={"/downwardarraw.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="w-[163px] text-left pt-[40px]">
                  <div className="flex">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      Region
                    </p>
                    <Image
                      src={"/downwardarraw.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="w-[91px] text-center pt-[53px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Obituaries
                  </p>
                  <p className="font-sourcesans text-[12px] font-semibold leading-[16px] text-[#6D778E]">
                    Total
                  </p>
                </th>

                <th className="w-[103px] text-center pt-[53px]">
                  {/* arraydownward */}
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Obituaries
                  </p>

                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#0769FD]">
                    last m{" "}
                    <span className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                      {" "}
                      | prev
                    </span>
                  </p>
                </th>

                <th className="w-[125px] text-center  pt-[60px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Photo{" "}
                    <span className="font-sourcesans text-[13px] font-light leading-[16px] text-[#ACAAAA]">
                      |
                    </span>{" "}
                    funeral
                  </p>

                  <p className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                    last month in %
                  </p>
                  <div className="w-full flex justify-center mt-[3px]">
                    <Image
                      src={"/arraydownward.png"}
                      width={8}
                      height={12}
                      //   className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="w-[228px] text-justify pt-[53px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#E19A13]">
                    % of local obits
                  </p>
                  <p className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                    total | last month
                  </p>
                </th>

                <th className="w-[117px] text-center   pt-[53px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#530CC6]">
                    keepers
                  </p>
                  <p className="font-sourcesans text-[12px] font-semibold leading-[16px] text-[#6D778E]">
                    last m
                    <span className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                      {" "}
                      | prev.
                    </span>
                  </p>
                </th>

                <th className="w-[114px] text-center   pt-[53px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#530CC6]">
                    mobile
                  </p>
                  <p className="font-sourcesans text-[12px] font-semibold leading-[16px] text-[#6D778E]">
                    last m
                    <span className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                      {" "}
                      | prev.
                    </span>
                  </p>
                </th>

                <th className="w-[131px] text-center pt-[53px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#530CC6]">
                    tributes
                  </p>
                  <p className="font-sourcesans text-[12px] font-semibold leading-[16px] text-[#6D778E]">
                    last m
                    <span className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                      {" "}
                      | prev.
                    </span>
                  </p>
                </th>

                <th className="w-[136px] text-center pt-[60px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    contributions
                  </p>
                  <p className="font-sourcesans text-[12px] font-semibold leading-[16px] text-[#6D778E]">
                    last m
                    <span className="font-sourcesans text-[10px] font-semibold leading-[16px] text-[#ACAAAA]">
                      {" "}
                      | prev.
                    </span>
                  </p>
                  <div className="w-full flex justify-center mt-[3px]">
                    <Image
                      src={"/arraydownward.png"}
                      width={8}
                      height={12}
                      //   className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="w-[62px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Our Notes
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66]">
                <td className="w-[167px]  pl-[13px]">
                  <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                    Last Wishes LCC
                  </p>
                  <p className="text-left  font-sourcesans text-[12px] font-normal leading-[14px] text-[#ACAAAA]">
                    Last Wishes LCC
                  </p>
                </td>

                <td className="w-[143px] text-left">
                  <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                    Last Wishes LCC
                  </p>
                </td>

                <td className="w-[163px] text-left ">
                  <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                    Osrednja Slo
                  </p>
                </td>

                <td className="w-[91px] text-center">
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] m-auto">
                    145
                  </p>
                </td>

                <td className="w-[103px] text-center ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#0769FD] ">
                      36
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      25
                    </p>
                  </div>
                </td>

                <td className="w-[125px] text-center  ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      62
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#1FBE11]">
                      82
                    </p>
                  </div>
                </td>

                <td className="w-[228px] pl-[20px]">
                  <div className="flex ">
                    <p className=" font-sourcesans text-[14px] font-normal leading-[16px] text-[#3C3E41] ">
                      78
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[14px] font-normal leading-[16px] text-[#6D778E] ">
                      97
                    </p>
                  </div>
                </td>

                <td className="w-[117px] text-center">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      15
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      15
                    </p>
                  </div>
                </td>

                <td className="w-[114px] text-center  ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      12
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      9
                    </p>
                  </div>
                </td>

                <td className="w-[131px] text-center ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      0
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      0
                    </p>
                  </div>
                </td>

                <td className="w-[136px] text-center">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      12
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      18
                    </p>
                  </div>
                </td>

                <td className="w-[62px] text-center ">
                  <Image
                    src={"/icon_arrowright.png"}
                    width={24}
                    height={24}
                    //   className="w-[24px] h-[30px] m-[0]"
                  ></Image>
                </td>
              </tr>

              <tr
                className="h-[64px] border-l-[0.5px] border-l-[solid] border-l-[#A1B1D4]
             border-r-[0.5px] border-r-[solid] border-r-[#A1B1D4]
             border-b-[0.5px] border-b-[solid] border-b-[#A1B1D4]
            "
              >
                <td className="w-[167px]  pl-[13px]">
                  <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                    Goodbye Funerals
                  </p>
                  <p className="text-left  font-sourcesans text-[12px] font-normal leading-[14px] text-[#ACAAAA]">
                    Goodbye Funerals
                  </p>
                </td>

                <td className="w-[143px] text-left">
                  <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                    Manila
                  </p>
                </td>

                <td className="w-[163px] text-left ">
                  <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                    Zasavje
                  </p>
                </td>

                <td className="w-[91px] text-center">
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] m-auto">
                    38
                  </p>
                </td>

                <td className="w-[103px] text-center ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#0769FD] ">
                      36
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      25
                    </p>
                  </div>
                </td>

                <td className="w-[125px] text-center  ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      44
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#1FBE11]">
                      31
                    </p>
                  </div>
                </td>

                <td className="w-[228px] pl-[20px]">
                  <div className="flex ">
                    <p className=" font-sourcesans text-[14px] font-normal leading-[16px] text-[#3C3E41] ">
                      62
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[14px] font-normal leading-[16px] text-[#6D778E] ">
                      82
                    </p>
                  </div>
                </td>

                <td className="w-[117px] text-center">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      0
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      0
                    </p>
                  </div>
                </td>

                <td className="w-[114px] text-center  ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      0
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      0
                    </p>
                  </div>
                </td>

                <td className="w-[131px] text-center ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      0
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      0
                    </p>
                  </div>
                </td>

                <td className="w-[136px] text-center">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      17
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      12
                    </p>
                  </div>
                </td>

                <td className="w-[62px] text-center ">
                  <Image
                    src={"/icon_arrowright.png"}
                    width={24}
                    height={24}
                    //   className="w-[24px] h-[30px] m-[0]"
                  ></Image>
                </td>
              </tr>

              <tr
                className="h-[64px] border-l-[0.5px] border-l-[solid] border-l-[#A1B1D4]
             border-r-[0.5px] border-r-[solid] border-r-[#A1B1D4]
             border-b-[0.5px] border-b-[solid] border-b-[#A1B1D4]
            "
              >
                <td className="w-[167px]  pl-[13px]">
                  <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                    Adios Funeral Comp
                  </p>
                  <p className="text-left  font-sourcesans text-[12px] font-normal leading-[14px] text-[#ACAAAA]">
                    Blue Roses
                  </p>
                </td>

                <td className="w-[143px] text-left">
                  <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                    Houston
                  </p>
                </td>

                <td className="w-[163px] text-left ">
                  <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                    Prekmurje
                  </p>
                </td>

                <td className="w-[91px] text-center">
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] m-auto">
                    103
                  </p>
                </td>

                <td className="w-[103px] text-center ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#0769FD] ">
                      24
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      25
                    </p>
                  </div>
                </td>

                <td className="w-[125px] text-center  ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      81
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#1FBE11]">
                      86
                    </p>
                  </div>
                </td>

                <td className="w-[228px] pl-[20px]">
                  <div className="flex ">
                    <p className=" font-sourcesans text-[14px] font-normal leading-[16px] text-[#3C3E41] ">
                      100
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[14px] font-normal leading-[16px] text-[#6D778E] ">
                      100
                    </p>
                  </div>
                </td>

                <td className="w-[117px] text-center">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      5
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      1
                    </p>
                  </div>
                </td>

                <td className="w-[114px] text-center  ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      0
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      0
                    </p>
                  </div>
                </td>

                <td className="w-[131px] text-center ">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      0
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      0
                    </p>
                  </div>
                </td>

                <td className="w-[136px] text-center">
                  <div className="flex justify-center items-center">
                    <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                      6
                    </p>
                    <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                      |
                    </span>
                    <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                      8
                    </p>
                  </div>
                </td>

                <td className="w-[62px] text-center ">
                  <Image
                    src={"/icon_arrowright.png"}
                    width={24}
                    height={24}
                    //   className="w-[24px] h-[30px] m-[0]"
                  ></Image>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end items-center mt-[17px]">
          <Image
            src={"/arraydownward.png"}
            width={15}
            height={10}
            className="mr-[14px]"
          ></Image>
          <p className="font-sourcesans text-[12px] font-normal leading-[16px] text-[#6D778E]">
            Opens that company’s page for more info
          </p>
        </div>

        <div className="mt-[97px] ml-[10px]">
          <p className="font-sourcesans text-[12px] font-normal leading-[16px] text-[#6D778E]">
            To Dev only: this line is in the bottom of the list/table, so we’d
            have a total there .
          </p>
        </div>

        <table className="min-w-full table-auto relative mt-[9px]">
          <tbody>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66]">
              <td className="w-[167px]  pl-[13px]">
                <p className="text-left  font-sourcesans text-[13px] font-normal leading-[16px] text-[#3C3E41]">
                  TOTAL
                </p>
              </td>

              <td className="w-[143px] text-left"></td>

              <td className="w-[163px] text-left "></td>

              <td className="w-[91px] text-center">
                <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] m-auto">
                  973
                </p>
              </td>

              <td className="w-[103px] text-center ">
                <div className="flex justify-center items-center">
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                    244
                  </p>
                  <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                    |
                  </span>
                  <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                    145
                  </p>
                </div>
              </td>

              <td className="w-[125px] text-center  ">
                <div className="flex justify-center items-center">
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#1FBE11] ">
                    75
                  </p>
                  <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                    |
                  </span>
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#1FBE11]">
                    66
                  </p>
                </div>
              </td>

              <td className="w-[228px] pl-[20px]"></td>

              <td className="w-[117px] text-center">
                <div className="flex justify-center items-center">
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                    20
                  </p>
                  <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                    |
                  </span>
                  <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                    16
                  </p>
                </div>
              </td>

              <td className="w-[114px] text-center  ">
                <div className="flex justify-center items-center">
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                    20
                  </p>
                  <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                    |
                  </span>
                  <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                    9
                  </p>
                </div>
              </td>

              <td className="w-[131px] text-center ">
                <div className="flex justify-center items-center">
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                    0
                  </p>
                  <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                    |
                  </span>
                  <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                    0
                  </p>
                </div>
              </td>

              <td className="w-[136px] text-center">
                <div className="flex justify-center items-center">
                  <p className=" font-sourcesans text-[20px] font-bold leading-[23.44px] text-[#6D778E] ">
                    36
                  </p>
                  <span className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] my-auto mx-[8px]">
                    |
                  </span>
                  <p className=" font-sourcesans text-[12px] font-light leading-[16px] text-[#ACAAAA] ">
                    38
                  </p>
                </div>
              </td>

              <td className="w-[62px] text-center "></td>
            </tr>
          </tbody>
        </table>

        <div className="mt-[12px] ml-[10px]">
          <p className="font-sourcesans text-[12px] font-normal leading-[16px] text-[#6D778E]">
            Up to you if you make this page separately for Funeral Comps and
            Florists or both together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuneralCompanyStatistics;
