"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import RevenueComp from "../components/appcomponents/RevenueComp";
const FloristFirst = () => {
  const [whichScreen, setWhichScreen] = useState(1);

  const tableData = [
    {
      florist: "Alpha florist",
      city: "Santo Domingo del Mar",
      region: "Osrednja Slo ",
      whatP: "S",
      whatS: "M",
      when: "21.05.2024",
      expires: "21.06.2024",
      gift: "",
      paid: "21.06.2024",
      amount: "10 €",
    },
    {
      florist: "Gamma florist",
      city: "Santo Domingo del Mar",
      region: "Osrednja Slo ",
      whatP: "M",
      whatS: "Y",
      when: "21.05.2024",
      expires: "21.06.2024",
      gift: "",
      paid: "21.06.2024",
      amount: "200 €",
    },
    {
      florist: "Zeta florist",
      city: "Santo Domingo del Mar",
      region: "Osrednja Slo ",
      whatP: "L",
      whatS: "M",
      when: "21.05.2024",
      expires: "21.06.2024",
      gift: "",
      paid: "21.06.2024",
      amount: "pending",
    },
    {
      florist: "Zeta florist",
      city: "Santo Domingo del Mar",
      region: "Osrednja Slo ",
      whatP: "S",
      whatS: "Y",
      when: "21.05.2024",
      expires: "21.06.2024",
      gift: "",
      paid: "21.06.2024",
      amount: "",
      isredDot: 1,
    },
    {
      florist: "Zeta florist",
      city: "Santo Domingo del Mar",
      region: "Osrednja Slo ",
      whatP: "L",
      whatS: "M",
      when: "21.05.2024",
      expires: "21.06.2024",
      gift: "",
      paid: "21.06.2024",
      amount: "30 €",
    },
  ];

  const [whichTab, setWhichTab] = useState("");

  useEffect(() => {
    if (whichScreen == 3) {
      setWhichTab("Financials - Florist Subscriptions");
    } else {
      setWhichTab("Florists");
    }
  }, [whichScreen]);

  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin
          setWhichScreen={setWhichScreen}
          headerCheck={2}
          whichtab={whichTab}
        />
      </div>

      {whichScreen === 3 ? (
        <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
          <div className="flex justify-between mb-[80px]">
            <div className="flex ">
              <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      234
                    </p>
                  </div>

                  <div>
                    <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                      Previous m:{" "}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                        210
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      Total Florists
                    </p>
                  </div>
                  <div>
                    <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#1E2125] m-[0] ">
                      change: {""}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0] ">
                        + 67%
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="ml-[20px]  flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      214
                    </p>
                  </div>

                  <div>
                    <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                      Free florists :{" "}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                        20
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      Paying florists
                    </p>
                  </div>
                  <div>
                    <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#1E2125] m-[0] ">
                      New: {""}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0] ">
                        + 4
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="ml-[20px]  flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      114
                    </p>
                    <p className="font-sourcesans text-[33px] font-thin leading-[46.88px] text-[#CCCCCC] mx-[8px] mt-[-5px] mb-[0] ">
                      |
                    </p>

                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      67
                    </p>
                    <p className="font-sourcesans text-[33px] font-thin leading-[46.88px] text-[#CCCCCC] mx-[8px] mt-[-5px] mb-[0] ">
                      |
                    </p>
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      53
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex w-[42%] space-x-[4px]">
                    <p className="mt-[10px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      Cities S
                    </p>
                    <p className="font-sourcesans text-[23px] font-thin leading-[46.88px] text-[#CCCCCC]  mt-[-5px] mb-[0]">
                      |
                    </p>
                    <p className="mt-[10px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      M
                    </p>
                    <p className="font-sourcesans text-[23px] font-thin leading-[46.88px] text-[#CCCCCC] mt-[-5px] mb-[0]">
                      |
                    </p>
                    <p className="mt-[10px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      L
                    </p>
                  </div>

                  <div className="flex w-[58%] justify-end items-center ">
                    <p className="font-sourcesans text-[12px] font-normal leading-[16.41px] text-[#1E2125] m-[0]">
                      Change:{" "}
                    </p>
                    <span className="inline-flex items-center space-x-[4px] ml-1.5">
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0]">
                        {" "}
                        +28
                      </span>
                      <span className="font-sourcesans text-[23px] font-thin leading-[46.88px] text-[#CCCCCC]">
                        |
                      </span>
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0]">
                        +6
                      </span>
                      <span className="font-sourcesans text-[23px] font-thin leading-[46.88px] text-[#CCCCCC]">
                        |
                      </span>
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0]">
                        +15
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-[20px]">
                <RevenueComp
                  amount={"260 €"}
                  total={"1253"}
                  revenue={"Revenue: Florist Advert"}
                  previous={"220"}
                  change={" +18%"}
                />
              </div>
              <div className="ml-[20px]">
                <RevenueComp
                  amount={"780 €"}
                  total={"6253"}
                  revenue={"Revenue: Florist subsc"}
                  previous={"820"}
                  change={" +28%"}
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-row
     items-center justify-end space-x-[16px] mb-[0px]"
          >
            <div className="flex flex-row space-x-[16px] ">
              <Dropdown
                label={"Florist"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
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
              <Dropdown
                label={"Subscriptions only"}
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

          {/* {/ Table Starts from here /} */}
          <table className="min-w-full table-auto relative">
            <thead>
              <tr className="h-[90px]">
                <th className="w-[180px] pl-[10px] pt-[55px]">
                  <div className="flex items-center">
                    <p className="uppercase font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      Florist
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[180px] pt-[40px] mt-[12px]">
                  <div className="flex  items-center">
                    <p className="text-left font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                      City
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="mt-[12px] w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[110px] text-left pt-[55px]">
                  <div className="flex items-center">
                    <p className="uppercase font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      Region
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] text-left pt-[55px]">
                  <div className="flex  items-center">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      What
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] text-left pt-[55px]">
                  <div className="flex  items-center">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      Invoice
                    </p>
                  </div>
                </th>

                <th className="uppercase w-[90px] text-center pt-[40px]">
                  <div className="flex  items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                      When
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] text-center pt-[40px]">
                  <div className="flex items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                      Expires
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] text-center pt-[40px]">
                  <div className="flex items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                      Gift
                    </p>
                  </div>
                </th>

                <th className="uppercase w-[90px] pl-[10px] pt-[40px]">
                  <div className="flex  items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#EB1D1D]">
                      Paid
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] pl-[10px] pt-[40px]">
                  <div className="flex  items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#EB1D1D]">
                      Amount
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[60px] text-center pt-[40px]"></th>

                <th className="uppercase w-[60px] text-center pt-[40px]"></th>

                <th className="uppercase w-[60px] text-right pt-[40px] pr-4">
                  <div className="flex justify-end items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41] text-nowrap">
                      Award code
                    </p>
                  </div>
                </th>
                <th className="uppercase w-[60px] text-right pt-[40px] pr-4">
                  <div className="flex justify-end items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                      Open
                    </p>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66]"
                >
                  <td className="w-[90px] pl-[10px]">
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                      {data.florist}
                    </p>
                  </td>

                  <td className="w-[100px]">
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                      {data.city}
                    </p>
                  </td>

                  <td className="w-[80px]">
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                      {data.region}
                    </p>
                  </td>

                  <td className="w-[60px]  text-left flex mt-[25px] m-1">
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                      {data.whatP} {""}
                    </p>
                    <p className="mr-[5px] ml-[5px] font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#CCCCCC]">
                      |
                    </p>
                    <p
                      className={`font-sourcesans text-[20px] font-normal leading-[15.23px] ${
                        index == 1 || index == 3
                          ? "text-[#EB1D1D]"
                          : "text-[#3C3E41]"
                      }`}
                    >
                      {" "}
                      {data.whatS}
                    </p>
                  </td>

                  <td className="w-[60px] ">
                    <Image
                      src={"/eye.png"}
                      width={24}
                      height={24}
                      className=""
                    ></Image>
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#D4D4D4] mt-[5px]">
                      10 €
                    </p>
                  </td>

                  <td className="w-[60px] ">
                    <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#3C3E41]">
                      {data.when}
                    </p>
                  </td>
                  <td className="w-[60px] ">
                    <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#3C3E41]">
                      {data.expires}
                    </p>
                  </td>

                  <td className="w-[60px] pl-[10px]">
                    {data?.isredDot ? (
                      <div className="w-[12px] h-[12px] rounded-[50%] bg-[#EB1D1D] "></div>
                    ) : (
                      ""
                    )}
                  </td>

                  <td className="w-[60px] pl-[10px] ">
                    <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#3C3E41]">
                      {data.paid}
                    </p>
                  </td>

                  <td className="w-[60px] pl-[20px] ">
                    <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#3C3E41]">
                      {data.amount}
                    </p>
                  </td>

                  <td className="w-[60px] text-right "></td>

                  <td className="w-[60px] text-right "></td>

                  <td className="w-[80px]">
                    <Image
                      src={"/exportgrey.png"}
                      width={24}
                      height={24}
                      className="ml-[45px]"
                    />
                  </td>
                  <td className="w-[90px]">
                    <Image
                      src={"/icon_arrowright.png"}
                      width={24}
                      height={24}
                      className="ml-[55px]"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
          <div className="flex justify-between mb-[80px]">
          <div className="flex gap-[20px]">
              <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      114
                    </p>
                    <p className="font-sourcesans text-[33px] font-thin leading-[46.88px] text-[#CCCCCC] mx-[8px] mt-[-5px] mb-[0] ">
                      |
                    </p>

                    <p className="font-sourcesans text-[20px] font-normal leading-[16px] text-[#ACAAAA] mt-[revert]">
                      146
                    </p>
                  </div>

                  <div>
                    <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                      Last month:{" "}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                        78
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="mt-[12px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                    Florist companies
                    <span className="font-sourcesans text-[12px] font-light leading-[18.75px] text-[#6D778E] m-[0]">
                      | Florist shops
                    </span>
                  </p>
                </div>
              </div>

              <div className=" flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      17
                    </p>
                    <p className="font-sourcesans text-[33px] font-thin leading-[46.88px] text-[#CCCCCC] mx-[8px] mt-[-5px] mb-[0] ">
                      |
                    </p>

                    <p className="font-sourcesans text-[20px] font-normal leading-[16px] text-[#ACAAAA] mt-[revert]">
                      67
                    </p>
                  </div>

                  <div>
                    <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                      previous m:{" "}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                        72
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="mt-[12px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                    Obit publishing florist{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[18.75px] text-[#6D778E] m-[0]">
                      | Total obits last m.
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
                    |
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
                    By florists:{" "}
                    <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0] no-underline">
                      17
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* dropdown input */}
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

          {/* Table Starts from here */}
          <table className="min-w-full table-auto relative">
          <div className="absolute top-[22px] left-[870px]"> {/*28 oct*/}
              <p className="font-sourcesans text-[24px] font-bold leading-[24px] text-[#2B5D80] underline ">
                ALLOW
              </p>
            </div>
            <thead>
              <tr className="h-[70px]">
                <th className="uppercase w-[78px] text-center pt-[55px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    #ID
                  </p>
                </th>

                <th className="uppercase w-[148px] pt-[40px]">
                  <p className="text-left  font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Funeral Company
                  </p>
                  <p className="text-left font-sourcesans text-[13px] font-semibold leading-[16px] text-[#ACAAAA]">
                    Unit
                  </p>
                </th>

                <th className="uppercase w-[131px] text-left pt-[55px]">
                  <div className="flex">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      City{" "}
                    </p>

                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="uppercase w-[103px] text-left pt-[55px]">
                  <div className="flex">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      Region
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="uppercase w-[74px] text-left pt-[55px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Joined
                  </p>
                </th>

                <th className="uppercase w-[131px] text-center pt-[60px]">
                  {/* {/ arraydownward /} */}
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

                <th className="uppercase w-[55px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Obits
                  </p>
                </th>
                <th className="uppercase w-[64px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Keepers
                  </p>
                </th>
                <th className="uppercase w-[66px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Mobiles
                  </p>
                </th>
                <th className="uppercase w-[90px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Tributes
                  </p>
                </th>
                <th className="uppercase w-[20px] text-center pt-[40px]">
                
                </th>
                <th className="uppercase w-[40px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Block User
                  </p>
                </th>
                <th className="uppercase w-[40px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Block <br/> Their Page
                  </p>
                </th>
                <th className="uppercase w-[40px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Our Notes
                  </p>
                </th>
                {/* <th className="uppercase w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Show Emails
                  </p>
                </th> */}
                <th className="uppercase w-[40px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Grant Codes
                  </p>
                </th>
                <th className="uppercase w-[20px] text-center pt-[40px]">
               
                </th>
                <th className="uppercase w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Our Rating
                  </p>
                </th>
                <th className="uppercase w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Funeral company
                  </p>
                </th>
                <th className="uppercase w-[60px] text-center">
                  <p className="mt-[20px] font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Paid
                  </p>
                </th>
                <th className="uppercase w-[60px] text-center pt-[40px]">
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

                <td className="w-[148px] ">
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

                <td className="w-[120px] text-left ">
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

                <td className="w-[55px]  h-[64px]  flex justify-center items-center">
                  <Image src={"/varify.png"} width={24} height={24}></Image>
                </td>
                <td className="w-[64px] ">
                  <Image
                    src={"/varify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[66px] ">
                  <Image
                    src={"/varify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[90px] ">
                  <Image
                    src={"/varify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[20px]">

                  </td>
                 
                <td className="w-[50px] ">
                  <Image
                    src={"/reject.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[70px] ">
                  <Image
                    src={"/red_cross.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>

                <td className="w-[50px]">
                  <Image
                    src={"/file.png"}
                    width={18.9}
                    height={18.9}
                    className="m-auto"
                  ></Image>
                </td>
                {/* <td className="w-[60px] ">
                  <Image
                    src={"/disable@.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td> */}
                <td className="w-[50px] ">
                  <Image
                    src={"/disbleGift.png"}
                    width={22}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[20px] text-center">
                 
                 </td>
                <td className="w-[60px] text-center">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.3px] text-[#EB1D1D]">
                    4
                  </p>
                </td>
                <td className="w-[60px] ">
                  <Image
                    src={"/yellowright.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                 <p className="text-[#0D94E8] text-[13px] underline ml-[18px]">
                    SI05A
                  </p>
                </td>
                <td className="w-[60px]">
                  <Image
                    src={"/paid.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>

                <td className="w-[60px] ">
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

                <td className="w-[120px] text-left ">
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

                <td className="w-[55px]  h-[64px]  flex justify-center items-center">
                  <Image src={"/varify.png"} width={24} height={24}></Image>
                </td>
                <td className="w-[64px] ">
                  <Image
                    src={"/varify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[66px] ">
                  <Image
                    src={"/disableverify.png"}
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
                <td className="w-[20px] ">
                </td>
                <td className="w-[50px] ">
                  <Image
                    src={"/reject.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[50px] ">
                  <Image
                    src={"/danger_cross.png"}
                    width={18}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[50px]">
                  <Image
                    src={"/file.png"}
                    width={18.9}
                    height={18.9}
                    className="m-auto"
                  ></Image>
                </td>
                {/* <td className="w-[60px] ">
                  <Image
                    src={"/disable@.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td> */}
                <td className="w-[50px] ">
                  <Image
                    src={"/disbleGift.png"}
                    width={22}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[20px] text-center">
                 
                 </td>
                <td className="w-[60px] text-center">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.3px] text-[#6D778E]">
                    3
                  </p>
                </td>
                <td className="w-[60px] ">
                  {/* <Image
          src={"/yellowright.png"}
          width={24}
          height={24}
          className="m-auto"
        ></Image> */}
                </td>
                <td className="w-[60px]">
                  {/* <Image
          src={"/verify.png"}
          width={24}
          height={24}
          className="m-auto"
        ></Image> */}
                </td>

                <td className="w-[60px] ">
                  <Image
                    src={"/icon_arrowright.png"}
                    width={18}
                    height={18}
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

                <td className="w-[120px] text-left ">
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

                <td className="w-[55px]  h-[64px]  flex justify-center items-center">
                  <Image src={"/varify.png"} width={24} height={24}></Image>
                </td>
                <td className="w-[64px] ">
                  <Image
                    src={"/disableverify.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[66px] ">
                  <Image
                    src={"/varify.png"}
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
                <td className="w-[20px] ">
                </td>
                <td className="w-[50px] ">
                  <Image
                    src={"/reject.png"}
                    width={18}
                    height={18}
                    className="m-auto"
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

                <td className="w-[50px]">
                  <Image
                    src={"/file.png"}
                    width={18.9}
                    height={18.9}
                    className="m-auto"
                  ></Image>
                </td>
                {/* <td className="w-[60px] ">
                  <Image
                    src={"/disable@.png"}
                    width={24}
                    height={24}
                    className="m-auto"
                  ></Image>
                </td> */}
                <td className="w-[50px] ">
                  <Image
                    src={"/disbleGift.png"}
                    width={22}
                    height={18}
                    className="m-auto"
                  ></Image>
                </td>
                <td className="w-[20px] text-center">
                 
                </td>
                <td className="w-[60px] text-center">
                  <p className="font-sourcesans text-[20px] font-bold leading-[23.3px] text-[#6D778E]">
                    2
                  </p>
                </td>
                <td className="w-[60px] ">
                  {/* <Image
          src={"/yellowright.png"}
          width={24}
          height={24}
          className="m-auto"
        ></Image> */}
                </td>
                <td className="w-[60px]">
                  {/* <Image
          src={"/verify.png"}
          width={24}
          height={24}
          className="m-auto"
        ></Image> */}
                </td>

                <td className="w-[60px] ">
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

export default FloristFirst;
