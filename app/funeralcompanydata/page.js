"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// verify
const FuneralCompanyData = () => {
  const [whichScreen, setWhichScreen] = useState(1);

  const [whichTab, setWhichTab] = useState("");

  useEffect(() => {
    if (whichScreen == 2) {
      setWhichTab("Company - Statistics");
    } else if (whichScreen == 5) {
      setWhichTab("Cities - Overview");
    } else {
      setWhichTab("Funeral Companies");
    }
  }, [whichScreen]);
  return (
    <div className="w-[1920px] bg-[#ECF0F3]  min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin
          setWhichScreen={setWhichScreen}
          headerCheck={2}
          whichtab={whichTab}
        />
      </div>
      {whichScreen === 2 ? (
        <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
          <div className="flex justify-between mb-[80px]">
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
              
              <p
              style={{fontVariationSettings: "'wdth' 50"}}
              className="font-sourcesans text-[32px] font-semibold leading-[37.5px] text-[#0A85C2]">
                Funeral Companies only
              </p>
            </div>

            <div
              className="flex flex-row
     items-center space-x-[16px] mb-[50px]"
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
      ) : whichScreen === 5 ? (
        <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
          <div className="w-full bg-[#e5eaf1] mb-[80px]  flex justify-between">
            <div
              className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]"
  border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between bg-[#fafbfc]`}
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
                className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]"
  border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between bg-[#fafbfc]`}
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
                className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]"
  border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between bg-[#fafbfc]`}
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
              <p
              style={{fontVariationSettings: "'wdth' 50"}}
              className="font-sourcesans text-[32px] font-semibold leading-[37.5px] text-[#0A85C2]">
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
      ) : (
        // 28 October
        <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
          <div className="flex gap-x-[20px] mb-[80px] justify-between">
            <div className="flex">
              <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      115
                    </p>
                    <p className="font-sourcesans text-[33px] font-thin leading-[46.88px] text-[#CCCCCC] mx-[8px] mt-[-5px] mb-[0] ">
                      |
                    </p>

                    <p className="font-sourcesans text-[20px] font-normal leading-[16px] text-[#ACAAAA] mt-[revert]">
                      123
                    </p>
                  </div>

                  <div>
                    <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                      Last m:{" "}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                        88
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                    Total funeral comps{" "}
                    <span className="font-sourcesans text-[16px] font-light leading-[18.75px] text-[#6D778E] m-[0]">
                      | Cities
                    </span>
                  </p>
                </div>
              </div>

              <div className="ml-[17px] flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#EB1D1D]  m-[0]">
                      6
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                    Inactive last month -{" "}
                    <span className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#0A85C2] m-[0] underline">
                      Show
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
              <div className="flex justify-between">
                <div className="flex">
                  <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                    145
                  </p>
                  <p className="font-sourcesans text-[20px] font-thin leading-[16px] text-[#CCCCCC] mx-[8px] mt-[revert] ">
                    /
                  </p>

                  <p className="font-sourcesans text-[20px] font-normal leading-[16px] text-[#ACAAAA] mt-[revert] ">
                    212
                  </p>
                </div>

                <div>
                  <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                    Last m:{" "}
                    <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                      122
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                    Cities covered 
                  </p>
                </div>

                <div>
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#0A85C2] m-[0] underline">
                    Missing:{" "}
                    <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0] no-underline">
                      67
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-row
   items-center justify-end space-x-[16px] mb-[50px]"
          >
            <div className="flex flex-row space-x-[16px] ">
              <div className="flex h-[48px]">
                <input
                  type="text"
                  placeholder="Funeral company"
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

          <table className="min-w-full table-auto relative">
            <div className="absolute top-[22px] left-[785px]">
              <p className="font-sourcesans text-[24px] font-bold leading-[24px] text-[#2B5D80] underline ">
                ALLOW
              </p>
            </div>
            <thead>
              <tr className="h-[70px] uppercase">
                <th className="w-[78px] text-center pt-[55px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    #ID
                  </p>
                </th>

                <th className="w-[190px] pt-[40px]">
                  <p className="text-left  font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Funeral Company
                  </p>
                  <p className="text-left font-sourcesans text-[13px] font-semibold leading-[16px] text-[#ACAAAA]">
                    Unit
                  </p>
                </th>

                <th className="w-[131px] text-left pt-[55px]">
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

                <th className="text-left w-[150px] pt-[55px]">
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

                <th className="w-[74px] text-left pt-[55px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Joined
                  </p>
                </th>

                <th className="w-[131px] text-center pt-[60px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Shops{" "}
                    <span className="font-sourcesans text-[13px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    Cities
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

                <th className="w-[90px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Obits
                  </p>
                </th>
                <th className="w-[90px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Keepers
                  </p>
                </th>
                <th className="w-[90px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Mobiles
                  </p>
                </th>
                <th className="w-[90px] text-justify pl-[8px] pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Tributes
                  </p>
                </th>

                <th className="w-[75px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Block User
                  </p>
                </th>
                <th className="w-[90px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Block <span className="block">Their Page</span>
                  </p>
                </th>
                <th className="w-[50px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Our Notes
                  </p>
                </th>
                {/* 28 October 2024 - Commented */}
                {/* <th className="w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Show Emails
                  </p>
                </th> */}
                <th className="w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Grant Codes
                  </p>
                </th>
                <th className="pl-[45px] w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Our Rating
                  </p>
                </th>
                <th className="w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Have Florist
                  </p>
                </th>
                <th className="w-[60px] text-center">
                  <p className="mt-[20px] font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Paid
                  </p>
                </th>
                <th className="pl-[30px] w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    User Account
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66]">
                <td className="w-[78px] text-center">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    S105
                  </p>
                </td>

                <td className="w-[190px]">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    Adios Funeral Comp
                  </p>
                  <p className="text-left font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#ACAAAA]">
                    Blue Roses
                  </p>
                </td>

                <td className="w-[120px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    Santa Monica
                  </p>
                </td>

                <td className="w-[150px] text-left ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    Oszdrinja Slo
                  </p>
                </td>

                <td className="w-[74px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    21.05.24
                  </p>
                </td>

                <td className="w-[131px] text-center ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#6D778E]">
                    1{" "}
                    <span className="mx-[5px] font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    1
                  </p>
                </td>

                <td className="w-[90px] h-[64px]  flex justify-center items-center">
                  <Image src={"/verify.png"} width={24} height={24}></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/verify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/verify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/verify.png"}
                    width={24}
                    height={24}
                    className="ml-[28px]"
                  ></Image>
                </td>

                <td className="w-[50px] ">
                  <Image
                    src={"/reject.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/reject.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>

                <td className="w-[55px]">
                  <Image
                    src={"/disableNote.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                {/* 28 October 2024 */}
                {/* <td className="w-[60px] ">
                  <Image
                    src={"/disable@.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td> */}
                <td className="w-[60px] ">
                  <Image
                    src={"/disbleGift.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="pl-[45px] w-[60px] text-center">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.3px] text-[#EB1D1D]">
                    4
                  </p>
                </td>
                <td className="w-[60px] ">
                  <Image
                    src={"/yellowright.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[60px]">
                  <Image
                    src={"/ico_green_check.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>

                <td className="pl-[30px] w-[60px] ">
                  <Image
                    src={"/icon_arrowright.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
              </tr>

              <tr
                className="h-[64px] border-l-[0.5px] border-l-[solid] border-l-[#A1B1D4]
    border-r-[0.5px] border-r-[solid] border-r-[#A1B1D4]
    border-b-[0.5px] border-b-[solid] border-b-[#A1B1D4]
    "
              >
                <td className="w-[78px] text-center">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    SI11A
                  </p>
                </td>

                <td className="w-[148px] ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    ABC Gmbh
                  </p>
                  <p className="text-left font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#ACAAAA]">
                    1st funeral company
                  </p>
                </td>

                <td className="w-[120px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    Beverly Hills
                  </p>
                </td>

                <td className="w-[150px] text-left ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    Osrednja Slo
                  </p>
                </td>

                <td className="w-[74px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    05.12.23
                  </p>
                </td>

                <td className="w-[131px] text-center ">
                  <p className="m-auto  flex justify-center font-sourcesans text-[13px] font-normal leading-[24px] text-[#6D778E]">
                    1{" "}
                    <span className="  ml-[5px] font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |{" "}
                    </span>{" "}
                    <h1 className=" ml-[5px] font-sourcesans text-[20px] font-medium leading-[23.44px] text-[#EB1D1D]">
                      2
                    </h1>
                  </p>
                </td>

                <td className="w-[90px] h-[64px]  flex justify-center items-center">
                  <Image src={"/verify.png"} width={24} height={24}></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/verify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/disableverify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px]">
                  <Image
                    src={"/disableverify.png"}
                    width={24}
                    height={24}
                    className="ml-[28px]"
                  ></Image>
                </td>

                <td className="w-[50px]">
                  <Image
                    src={"/reject.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px]">
                  <Image
                    src={"/enablereject.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>

                <td className="w-[55px]">
                  <Image
                    src={"/enablenote.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                {/* 28 October 2024 - Commented */}
                {/* <td className="w-[60px]">
                  <Image
                    src={"/enable@.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td> */}
                <td className="w-[60px] ">
                  <Image
                    src={"/disbleGift.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="pl-[45px] w-[60px] text-center">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.3px] text-[#6D778E]">
                    3
                  </p>
                </td>
                <td className="w-[60px] "></td>
                <td className="w-[60px]"></td>

                <td className="pl-[30px] w-[60px] ">
                  <Image
                    src={"/icon_arrowright.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
              </tr>

              <tr
                className="h-[64px] border-l-[0.5px] border-l-[solid] border-l-[#A1B1D4]
    border-r-[0.5px] border-r-[solid] border-r-[#A1B1D4]
    border-b-[0.5px] border-b-[solid] border-b-[#A1B1D4]
    "
              >
                <td className="w-[78px] text-center">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    SI35C
                  </p>
                </td>

                <td className="w-[148px] ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    Last Wishes LCC
                  </p>
                  <p className="text-left font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#ACAAAA]">
                    Hollywood Funerals
                  </p>
                </td>

                <td className="w-[120px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    Hollywood
                  </p>
                </td>

                <td className="w-[150px] text-left ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    Osrednja Slo
                  </p>
                </td>

                <td className="w-[74px] text-left">
                  <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                    16.02.24
                  </p>
                </td>

                <td className="w-[131px] text-center ">
                  <p className="m-auto  flex justify-center font-sourcesans text-[13px] font-normal leading-[24px] text-[#6D778E]">
                    1{" "}
                    <span className=" mx-[5px] font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                      |{" "}
                    </span>{" "}
                    1
                  </p>
                </td>

                <td className="w-[90px]  h-[64px]  flex justify-center items-center">
                  <Image src={"/verify.png"} width={24} height={24}></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/disableverify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/verify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/disableverify.png"}
                    width={24}
                    height={24}
                    className="ml-[28px]"
                  ></Image>
                </td>

                <td className="w-[50px] ">
                  <Image
                    src={"/reject.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/reject.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>

                <td className="w-[55px]">
                  <Image
                    src={"/enablenote.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                {/* 28 October 2024 */}
                {/* <td className="w-[60px] ">
                  <Image
                    src={"/disable@.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td> */}
                <td className="w-[60px] ">
                  <Image
                    src={"/disbleGift.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="pl-[45px] w-[60px] text-center">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.3px] text-[#6D778E]">
                    2
                  </p>
                </td>
                <td className="w-[60px] "></td>
                <td className="w-[60px]"></td>

                <td className="pl-[30px] w-[60px] ">
                  <Image
                    src={"/icon_arrowright.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FuneralCompanyData;
