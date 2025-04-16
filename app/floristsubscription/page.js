"use client";
import React from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import RevenueComp from "../components/appcomponents/RevenueComp";

// verify
const FloristSubscription = () => {
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

  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin />
      </div>

      <div className="w-full bg-[#e5eaf1] pt-[64px]  py-[2px] px-[20px] flex flex-col">
        <div className="flex justify-between mb-[60px]">
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

            <div className="ml-[17px]  flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
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

           

            <div className="ml-[17px]  flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
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

            <div className="ml-[10px]">
              <RevenueComp
                amount={"260 €"}
                total={"1253"}
                revenue={"Revenue: Florist Advert"}
                previous={"220"}
                change={" +18%"}
              />
            </div>
            <div className="ml-[10px]">
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
           items-center justify-end space-x-[16px] mb-[54px]"
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
              <th className="w-[80px] pl-[10px] pt-[55px]">
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

              <th className="uppercase w-[100px] pt-[40px] mt-[12px]">
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

              <th className="uppercase w-[80px] text-left pt-[55px]">
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

              <th className="uppercase w-[60px] text-left pt-[55px]">
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

              <th className="uppercase w-[60px] text-left pt-[55px]">
                <div className="flex  items-center">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Invoice
                  </p>
                </div>
              </th>

              <th className="uppercase w-[60px] text-center pt-[40px]">
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

              <th className="uppercase w-[60px] text-center pt-[40px]">
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

              <th className="uppercase w-[60px] text-center pt-[40px]">
                <div className="flex items-center mt-[12px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Gift
                  </p>
                </div>
              </th>

              <th className="uppercase w-[60px] pl-[10px] pt-[40px]">
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

              <th className="uppercase w-[60px] pl-[10px] pt-[40px]">
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
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
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
              <tr key={index} className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66]">
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

                <td className="w-[60px] ">
                  <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#3C3E41]"></p>
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

                <td className="w-[80px] ">
                  <Image
                    src={"/exportgrey.png"}
                    width={24}
                    height={24}
                    className="ml-[70px]"
                  />
                </td>
                <td className="w-[90px]">
                  <Image
                    src={"/icon_arrowright.png"}
                    width={24}
                    height={24}
                    className="ml-[90px]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FloristSubscription;
