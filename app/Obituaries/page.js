"use client";
import React, { useState } from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import RevenueComp from "../components/appcomponents/RevenueComp";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Obituaries = () => {
  const tableData = [
    {
      memoryBook: "1PD102S ",
      ObituaryName: "Mario Danilo",
      keeperAmount: "Primo",
      city: "Palm Springs",
      died: "11.05.24",
      invoiceImg: "",
      invoice: "14.05.24 ",
      funeral: "13.00",
      cemetery: "Neverland Cemetery",
      Obituary: "Last wishes funeral company",
      postedby: "Palm Springs",
      date: "14.05.24",
      expiresImg: "/ico_eye.png",
      photo_funeral_one: "/blue_tick.png",
      photo_funeral_two: "/yellow_tick.png",
      memoryPage: "/purple_arrow.png",
      keeper: "/green_arrow.png",
      delete: "/delete.png",
      hide: "/red_cross.png",
      block: "/gray_cross.png",
      notes: "/file.png",
      grantCode: "/grant_code.png",
    },
    {
      memoryBook: "1PD104G ",
      ObituaryName: "Danny",
      keeperAmount: "de Vito",
      city: "Palm Springs",
      died: "11.05.24",
      invoiceImg: "",
      invoice: "",
      funeral: "",
      cemetery: "Neverland Cemetery",
      Obituary: "Magnolia Flower",
      postedby: "Tahoe",
      date: "14.05.24",
      expiresImg: "/ico_eye.png",
      photo_funeral_one: "/blue_tick.png",
      photo_funeral_two: "/gray_tick.png",
      memoryPage: "/purple_arrow.png",
      keeper: "/green_arrow.png",
      delete: "/delete.png",
      hide: "/red_cross.png",
      block: "/gray_cross.png",
      notes: "/file.png",
      grantCode: "/grant_code.png",
    },
    {
      memoryBook: "1PD111V",
      ObituaryName: "Alexander",
      keeperAmount: "the Great",
      city: "Palm Springs",
      died: "10.05.24",
      invoiceImg: "/ico_eye.png",
      invoice: "13.05.24 ",
      funeral: "16.00",
      cemetery: "Neverland Cemetery",
      Obituary: "Last wishes funeral company",
      postedby: "Palm Springs",
      date: "14.05.24",
      expiresImg: "/ico_eye.png",
      photo_funeral_one: "/gray_tick.png",
      photo_funeral_two: "/gray_tick.png",
      memoryPage: "/purple_arrow.png",
      keeper: "",
      delete: "/delete.png",
      hide: "/danger_cross.png",
      block: "/black_cross.png",
      notes: "/gray_file.png",
      grantCode: "/grant_code.png",
    },
    {
      memoryBook: "1PD137F",
      ObituaryName: "Claudio",
      keeperAmount: "Stradivari Nicolo",
      city: "Palm Springs",
      died: "08.05.24",
      invoiceImg: "",
      invoice: "",
      funeral: "",
      cemetery: "Neverland Cemetery",
      Obituary: "Last wishes funeral company",
      postedby: "Palm Springs",
      date: "14.05.24",
      expiresImg: "/ico_eye.png",
      photo_funeral_one: "/blue_tick.png",
      photo_funeral_two: "/gray_tick.png",
      memoryPage: "/purple_arrow.png",
      keeper: "/green_arrow.png",
      delete: "/delete.png",
      hide: "/red_cross.png",
      block: "/black_cross.png",
      notes: "/file.png",
      grantCode: "/grant_code.png",
    },
    {
      memoryBook: "1PD134A",
      ObituaryName: "Tetsuya",
      keeperAmount: "Miyazaki",
      city: "Palm Springs",
      died: "08.05.24",
      invoiceImg: "/ico_eye.png",
      invoice: "",
      funeral: "",
      cemetery: "Neverland Cemetery",
      Obituary: "Roses and Candles  ",
      postedby: "Palm Springs",
      date: "14.05.24",
      whosKeeper: "01002SIA \n their@email.com",
      expiresImg: "/ico_eye.png",
      photo_funeral_one: "/gray_tick.png",
      photo_funeral_two: "/yellow_tick.png",
      memoryPage: "/purple_arrow.png",
      keeper: "",
      delete: "/delete.png",
      hide: "/red_cross.png",
      block: "/gray_cross.png",
      notes: "/gray_file.png",
      grantCode: "/grant_code.png",
    },
  ];
  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin whichtab={"Obituaries"} headerCheck={3} />
      </div>

      <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
        <div className="w-full h-[114px] py-[2px] flex flex-row justify-between">
          <RevenueComp
            amount={"772"}
            divide={" | 236"}
            revenue={"Total obituaries "}
            withRevenue={"| With a Keeper"}
            previous={"36%"}
            change={""}
            isWhiteBg={"1"}
            isprevious={1}
          />
          <RevenueComp
            amount={"136"}
            revenue={"Obituaries last month"}
            previous={"92"}
            change={""}
            isWhiteBg={"1"}
          />
          <RevenueComp
            amount={"74"}
            revenue={"with a Keeper"}
            previous={"62"}
            change={""}
            isWhiteBg={"1"}
          />
          <div
            className={`rounded-[8px]  w-[310px] ounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]" border-[#0A85C2] border-[2px]
               h-[110px] flex flex-row justify-between bg-[#e8f4fc]`}
          >
            <div className="flex flex-col justify-between h-[79px] w-[57%]">
              <div className="w-[200px] text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                185
                <span className="ml-[10px] text-[32px] font-medium text-[#ACAAAA]">
                  / 212
                </span>
              </div>
              <div className="min-w-[50px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[18.75px]">
                Cities covered
              </div>
            </div>

            <div className="flex flex-col justify-end items-end">
              <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
                <div className="text-[#0A85C2] underline pb-1 text-[12px] font-medium">
                  SHOW
                </div>
              </div>
              <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
                <div>Missing cities:</div>
                <div className="text-[#EB1D1D] text-[16px] leading-[19px] font-variation-customOpt16 font-bold">
                  {"20"}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-[8px]  w-[310px] ounded-[8px] px-[16px] py-[14px] bg-[#fafbfc]" border-[#0A85C2] border-[2px]
               h-[110px] flex flex-row justify-between bg-[#e8f4fc]`}
          >
            <div className="flex flex-col justify-between h-[79px] w-[57%]">
              <div className="flex ">
                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]">
                  131
                </p>
                <p className="font-sourcesans text-[30px] font-medium leading-[40.75px] text-[#6D778E] mx-[4px]">
                  |
                </p>
                <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]">
                  18
                </p>
              </div>
              <div className="min-w-[241px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                With photo I funeral %
              </div>
            </div>

            <div className="text-right">
              <div className="leading-[14px] font-variation-customOpt12  flex flex-row items-center gap-x-[4px]">
                <div className="text-[#6D778E] text-[12px] ">Previous m:</div>
                <div className="flex flex-col items-end ">
                  <div className="flex">
                    <p className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91]">
                      64
                    </p>
                    <p className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#6D778E] mx-[4px]">
                      |
                    </p>
                    <p className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D]">
                      82
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-[12px] leading-[14px]  font-normal font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px] mt-[10px]">
                <div className=" font-normal">Overall:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                  59 I 74
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[80px] ">
          <div
            className="flex flex-row
           items-center justify-end space-x-[16px]"
          >
            <div className="flex flex-row space-x-[16px] ">
              <div className="flex h-[48px]">
                <input
                  type="text"
                  placeholder="Name / Last Name"
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
              <Dropdown
                label={"Month"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
              <Dropdown
                label={"Cemetery"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
              <div className="flex h-[16px] w-[360px] tablet:hidden desktop:hidden" />
              <Dropdown
                label={"Obit posted by"}
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

        <div className="mt-[50px] w-full ">
          <table className="min-w-full border-b-[0.5px] border-[#A1B1D4] ">
            <thead className="  ">
              <tr className="">
                <th className="pl-[16px] w-[80px] mt-[8px] flex flex-row items-center text-center border-r">
                  <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    #
                  </div>
                  <Image
                    src={"/ico_down_arrow_memory.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </th>
                <th className="w-[140px] text-left border-r">
                  <div className="flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    OBITUARY <br />
                    <div className="flex flex-row items-center pl-[20px]">
                      <Image
                        src={"/bottom_purple_arrow.png"}
                        alt=""
                        width={12}
                        height={12}
                        className="w-[12px] h-[8.33px]"
                      />
                    </div>
                  </div>
                </th>
                <th className="w-[120px] text-left pl-2 py-2 border-r">
                  <div className="flex flex-row justify-start items-center text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">CITY</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>

                <th className="w-[120px] py-2 text-right border-r ">
                  <div className="flex flex-row items-center justify-end text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">DIED</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>
                <th className="w-[90px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  FUNERAL
                </th>

                <th className="w-[200px] py-2 text-left border-r">
                  <div className="flex flex-row items-center text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">CEMETERY</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>

                <th className="w-[255px] py-2 text-left border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  OBITUARY POSTED BY
                </th>
                <th className="w-[150px] pl-[20px] py-2 text-center border-r">
                  <div className="flex flex-row justify-center items-center text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">DATE</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>

                <th className="w-[100px] py-2 text-center border-r"></th>

                <th className="w-[103px] py-2 text-center border-r">
                  <div className="flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    OBITUARY <br /> FORM
                  </div>
                </th>

                <th className="w-[90px] py-2 text-left border-r">
                  <div className="flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#00B4D8]">
                    PHOTO <br /> <span className="text-[#F4A153]">FUNERAL</span>
                  </div>
                </th>
                {/*Memory Page */}
                <th className="w-[60px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#9A4497]">
                  MEMORY <br /> PAGE
                </th>
                <th className="w-[50px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#5EAE91]">
                  KEEPER
                </th>
                <th className="w-[100px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#5EAE91]"></th>
                {/*delete obit */}
                <th className="w-[80px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  DELETE <br /> OBIT
                </th>
                {/*HIDE obit */}
                <th className="w-[80px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  HIDE <br /> OBIT
                </th>

                {/*Block Memory */}
                <th className="w-[80px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  BLOCK <br /> MEMORY
                </th>
                {/*Our notes */}
                <th className="w-[80px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  OUR <br /> NOTES
                </th>
                <th className="w-[80px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]"></th>
                {/*grant code */}
                <th className="w-[103px] py-2 text-center border-r text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  GRANT <br /> CODE
                </th>
              </tr>
            </thead>
            <tbody className="">
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className={`border-[0.5px] border-[#A1B1D4] max-h-[64px] ${
                    index === 0 ? "bg-[#F7F9FA70]" : ""
                  }`}
                >
                  <td className="pl-[18px] text-left w-[80px] text-[10px] font-normal text-[#3C3E41]">
                    {data.memoryBook}
                  </td>
                  <td className="w-[140px] flex flex-col gap-x-[4px] justify-start items-start text-center text-[12px] text-black ">
                    <div className=" text-[12px] text-[#6D778E] font-normal leading-[14.06px] font-variation-customOpt20">
                      {data.ObituaryName}{" "}
                    </div>
                    <div className="text-justify text-[14px] font-normal text-[#3C3E41]">
                      {data.keeperAmount}
                    </div>
                  </td>
                  <td className="w-[120px] text-[12px] text-right font-normal text-[#3C3E41]">
                    {data.city}
                  </td>
                  <td className="w-[120px] pr-3 text-right text-[10px] font-normal text-[#3C3E41]">
                    {data.died}
                  </td>
                  <td className="w-[90px] text-center text-[12px] flex flex-col items-center gap-y-[4px]  text-[#3C3E41] py-3  ">
                    {data.invoice} <br />
                    <span>{data.funeral}</span>
                  </td>
                  <td className="w-[200px] text-left text-[10px]  text-[#3C3E41]  ">
                    {data.cemetery}
                    <br />
                    <span className="text-[12px]">{data.city}</span>
                  </td>
                  <td className="w-[255px] text-left text-[10px]  text-[#3C3E41]  ">
                    {data.Obituary}
                    <br />
                    <span className="text-[12px]">{data.postedby}</span>
                  </td>
                  <td className="w-[120px] text-center text-[10px]  text-[#3C3E41]  ">
                    {data.date}
                  </td>
                  <td className="w-[100px] text-[10px]  text-[#3C3E41]  "></td>
                  <td className="w-[122px] text-center px-2 ">
                    <div className="flex flex-col items-center gap-y-[4px]">
                      <Image
                        src={data.expiresImg}
                        alt=""
                        width={18}
                        height={18}
                        className={`${
                          data.expiresImg === "" ? "hidden" : "block"
                        }`}
                      />
                    </div>
                  </td>

                  <td className="w-[90px] text-left text-[12px] text-[#3C3E41]">
                    <div className="flex items-start gap-x-[8px]">
                      <Image
                        src={data.photo_funeral_one}
                        alt=""
                        width={18}
                        height={18}
                        className={`${
                          data.photo_funeral_one === "" ? "hidden" : "block"
                        }`}
                      />
                      {data.photo_funeral_one && data.photo_funeral_two && (
                        <span className="text-[12px] text-[#D4D4D4]">|</span>
                      )}
                      <Image
                        src={data.photo_funeral_two}
                        alt=""
                        width={18}
                        height={18}
                        className={`${
                          data.photo_funeral_two === "" ? "hidden" : "block"
                        }`}
                      />
                    </div>
                  </td>

                  <td className="w-[60px]  pl-[25px] text-center px-2 ">
                    <div className="flex flex-col items-start gap-y-[4px]">
                      <Image
                        src={data.memoryPage}
                        alt=""
                        width={16}
                        height={18}
                        className={`${
                          data.memoryPage === "" ? "hidden" : "block"
                        }`}
                      />
                    </div>
                  </td>

                  <td className="w-[50px] text-center pl-[15px] px-2 ">
                    <div className="flex flex-col items-start gap-y-[4px]">
                      <Image
                        src={data.keeper}
                        alt=""
                        width={16}
                        height={18}
                        className={`${data.keeper === "" ? "hidden" : "block"}`}
                      />
                    </div>
                  </td>
                  <td className="w-[100px] text-center pl-[18px] px-2 "></td>
                  <td className="w-[80px] text-left pl-[18px]  px-2 ">
                    <div className="flex flex-col items-center gap-y-[4px]">
                      <Image
                        src={data.delete}
                        alt=""
                        width={18}
                        height={20}
                        className={`${data.delete === "" ? "hidden" : "block"}`}
                      />
                    </div>
                  </td>
                  <td className="w-[80px] text-left pl-[18px]  px-2 ">
                    <div className="flex flex-col items-center gap-y-[4px]">
                      <Image
                        src={data.hide}
                        alt=""
                        width={18}
                        height={18}
                        className={`${data.hide === "" ? "hidden" : "block"}`}
                      />
                    </div>
                  </td>
                  <td className="w-[80px] text-left pl-[18px] px-2 ">
                    <div className="flex flex-col items-center gap-y-[4px]">
                      <Image
                        src={data.block}
                        alt=""
                        width={18}
                        height={18}
                        className={`${data.block === "" ? "hidden" : "block"}`}
                      />
                    </div>
                  </td>
                  <td className="w-[90px] text-center text-[12px]  text-[#3C3E41]  ">
                    <div className="flex flex-row justify-center items-center">
                      <Image
                        src={data.notes}
                        alt=""
                        width={14}
                        height={14}
                        className={`h-[18.9px] w-[18.9px] ${
                          data.notes === "" ? "hidden" : "block "
                        }`}
                      />
                    </div>
                  </td>
                  <td className="w-[90px] text-center text-[12px]  text-[#3C3E41]  "></td>
                  <td className="w-[90px] items-center text-[12px]  text-[#3C3E41]  ">
                    <div className="flex flex-row justify-center items-center">
                      <Image
                        src={data.grantCode}
                        alt=""
                        width={22}
                        height={18}
                        className={`${
                          data.grantCode === "" ? "hidden" : "block "
                        }`}
                      />
                    </div>
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

export default Obituaries;