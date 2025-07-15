"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import RevenueComp from "../components/appcomponents/RevenueComp";
import RevenueCompoMemory from "../components/appcomponents/RevenueCompoMemory";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import obituaryService from "@/services/obituary-service";

const MemoryBook = () => {
  const tableData = [
    {
      memoryName: "Mario Danilo Primo",
      memory: "#1SS153S ",
      city: "Chiang Rai",
      created: "03.05.24",
      obitPage: "/blue_arrow.png",
      totalView: "254",
      contributors: "24",
      uniqueContry: "11",
      grifBook: "7",
      sympthy: "7",
      candle: "72",
      photos: "2",
      tribute: "4",
      mobile: "1",
      premium: "0",
      died: "11.05.24",
      invoiceImg: "",
      invoice: "14.05.24 ",
      funeral: "13.00",
      cemetery: "Neverland Cemetery",
      Obituary: "Last wishes funeral company",
      postedby: "Palm Springs",
      email: "/disableEmail.png",
      notes: "/gray_file.png",
      grantCode: "/grant_code.png",
      keeper: "/green_arrow.png",
    },
    {
      memoryName: "Mario Danilo Primo",
      memory: "#1SS153S ",
      city: "Vladivostok",
      created: "01.05.24",
      obitPage: "/blue_arrow.png",
      totalView: "774",
      contributors: "14",
      uniqueContry: "8",
      grifBook: "6",
      sympthy: "2",
      candle: "221",
      photos: "0",
      tribute: "0",
      mobile: "0",
      premium: "0",
      died: "11.05.24",
      invoiceImg: "",
      invoice: "",
      funeral: "",
      cemetery: "Neverland Cemetery",
      Obituary: "Magnolia Flower",
      postedby: "Tahoe",
      email: "/enableEmail.png",
      notes: "/file.png",
      grantCode: "/grant_code.png",
      keeper: "/green_arrow.png",
    },
    {
      memoryName: "Mario Danilo Primo",
      memory: "#1SS153S ",
      city: "Bamako",
      created: "28.04.24",
      obitPage: "/blue_arrow.png",
      totalView: "411",
      contributors: "6",
      uniqueContry: "3",
      grifBook: "3",
      sympthy: "2",
      candle: "68",
      photos: "0",
      tribute: "0",
      mobile: "0",
      premium: "2",
      died: "10.05.24",
      invoiceImg: "/ico_eye.png",
      invoice: "13.05.24 ",
      funeral: "16.00",
      cemetery: "Neverland Cemetery",
      Obituary: "Last wishes funeral company",
      postedby: "Palm Springs",
      email: "/disableEmail.png",
      notes: "/gray_file.png",
      grantCode: "/grant_code.png",
      keeper: "",
    },
  ];
  const [approvedPosts, setApprovedPosts] = useState({});
  const [memories, setMemories] = useState({});

  useEffect(() => {
    getApprovedData();
    getMemories();
  }, []);

  const getApprovedData = async () => {
    try {
      const response = await obituaryService.getApprovedData();

      setApprovedPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getMemories = async () => {
    try {
      const response = await obituaryService.getAdminMemories();

      setMemories(response.finalObituaries);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";

    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();

    return `${day}.${month}.${year}`;
  };
  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin
          headerCheck={4}
          isSelectedLabel={"stats"}
          whichtab={"Memory Page - Stats"}
        />
      </div>

      <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
        <div className="w-full h-[114px] py-[2px] flex flex-row justify-between">
          <RevenueCompoMemory
            amount={approvedPosts?.sorrowBooks?.data?.currentMonthCount.toString()}
            total={approvedPosts?.sorrowBooks?.total.toString()}
            revenue={"Grief Book entries"}
            previous={approvedPosts?.sorrowBooks?.data?.lastMonthCount.toString()}
            change={""}
            isWhiteBg={"1"}
          />
          <RevenueCompoMemory
            amount={approvedPosts?.condolence?.data?.currentMonthCount.toString()}
            total={approvedPosts?.condolence?.total.toString()}
            revenue={"Sympathy Messages"}
            previous={approvedPosts?.condolence?.data?.lastMonthCount.toString()}
            change={""}
            isWhiteBg={"1"}
          />
          <RevenueCompoMemory
            amount={approvedPosts?.dedication?.data?.currentMonthCount.toString()}
            total={approvedPosts?.dedication?.total.toString()}
            revenue={"Tributes"}
            previous={approvedPosts?.dedication?.data?.lastMonthCount.toString()}
            change={""}
            isWhiteBg={"1"}
          />
          <RevenueCompoMemory
            amount={approvedPosts?.photos?.data?.currentMonthCount.toString()}
            total={approvedPosts?.photos?.total.toString()}
            revenue={"Photos"}
            previous={approvedPosts?.photos?.data?.lastMonthCount.toString()}
            change={""}
            isWhiteBg={"1"}
          />
          <RevenueCompoMemory
            amount={"16"}
            total={"61"}
            revenue={"Premiums ordered"}
            previous={"16"}
            change={""}
            //   isWhiteBg={"1"}
          />
        </div>

        <div className="w-full h-[114px] py-[2px] flex mt-[37px] justify-between">
          <RevenueCompoMemory
            amount={approvedPosts?.candle?.data?.currentMonthCount.toString()}
            total={approvedPosts?.candle?.total.toString()}
            revenue={"Daily Candles"}
            previous={approvedPosts?.candle?.data?.lastMonthCount.toString()}
            change={""}
            isWhiteBg={"1"}
          />
          <RevenueCompoMemory
            amount={approvedPosts?.memories?.data?.currentMonthCount.toString()}
            total={approvedPosts?.memories?.total.toString()}
            revenue={"Memory Page counter"}
            previous={approvedPosts?.memories?.data?.lastMonthCount.toString()}
            change={""}
            isWhiteBg={"1"}
          />
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
                  placeholder="Memory page"
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

              <div className="flex h-[16px] w-[360px] tablet:hidden desktop:hidden" />
              <Dropdown
                label={"City"}
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
            <thead className=" uppercase ">
              <tr className="">
                <th className="w-[181px] py-2 text-center border-r">
                  <div className="flex flex-row items-center pl-4 text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    Memory page
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>

                <th className="w-[375px] py-2 text-left border-r">
                  <div className="flex flex-row items-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">CITY</div>
                    <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                </th>

                <th className="w-[100px] py-2 text-left border-r">
                  <div className="flex flex-row items-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    <div className="">created</div>
                    {/* <Image
                      src={"/ico_down_arrow_memory.png"}
                      alt=""
                      width={24}
                      height={24}
                    /> */}
                  </div>
                </th>

                <th className="w-[103px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#0769FD]">
                  OBIT <br /> PAGE
                </th>

                <th className="w-[120px] py-2 text-left   border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#5EAE91]">
                  KEEPER
                </th>

                <th className="w-[180px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  TOTAL <br /> PAGE VIEW
                </th>

                <th className="w-[100px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  contributions <br /> TOTAL
                </th>

                <th className="w-[180px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  unique <br />
                  contributions
                </th>

                <th className="w-[180px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]"></th>

                <th className="w-[105px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  Grief <br /> Book
                </th>

                <th className="w-[103px] py-2 text-center border-r">
                  <div className="flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    Sympathy
                    <br /> Messages
                  </div>
                </th>

                <th className="w-[103px] py-2 text-center border-r">
                  <div className="flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    daily <br /> candle
                  </div>
                </th>

                <th className="w-[103px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]"></th>

                <th className="w-[103px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  photos
                </th>

                <th className="w-[103px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  tribute
                </th>

                <th className="w-[103px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  Mobile
                </th>

                <th className="w-[240px] py-2 text-justify border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  premium
                </th>

                <th className="w-[103px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  notes
                </th>

                <th className="w-[103px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  emails
                </th>

                <th className="w-[103px] py-2 text-center border-r text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  GRANT <br /> CODE
                </th>
              </tr>
            </thead>
            <tbody className="">
              {memories && memories.length > 0
                ? memories.map((data, index) => (
                    <tr
                      key={index}
                      className={`border-[0.5px] border-[#A1B1D4] ${
                        index === 0 || index === 2 ? "bg-[#F7F9FA70]" : ""
                      }`}
                    >
                      <td className="w-[181px] h-[64px] flex flex-col justify-center items-start text-[12px] text-black pl-4">
                        <div className=" text-[13px] text-[#3C3E41] font-normal leading-[23px] font-variation-customOpt20">
                          {data.name}
                          <p className="text-[12px] font-normal text-[#D4D4D4]">
                            {data.id}
                          </p>
                        </div>
                      </td>

                      <td className=" h-[64px] text-left w-[135px] text-[13px] font-normal text-[#3C3E41]">
                        {data.city}
                      </td>

                      <td>
                        <div className="text-[12px] font-normal text-[#3C3E41]">
                          {formatDate(data.createdTimestamp)}
                        </div>
                      </td>

                      <td className="w-[122px]  pl-[28px] h-[64px] text-center px-2 ">
                        <div className="flex flex-col items-start gap-y-[4px]">
                          <Image
                            src={tableData[0].obitPage}
                            alt=""
                            width={16}
                            height={18}
                            className={"block"}
                          />
                        </div>
                      </td>

                      <td className="w-[112px] h-[64px] text-center pl-[18px] px-2 ">
                        <div className="flex flex-col items-start gap-y-[4px]">
                          <Image
                            src={tableData[0].keeper}
                            alt=""
                            width={16}
                            height={18}
                            className={`${
                              data.hasKeeper === false ? "hidden" : "block"
                            }`}
                          />
                        </div>
                      </td>

                      <td className="text-[20px] text-center font-bold text-[#3C3E41]">
                        {data.totalVisits}
                      </td>

                      <td className="w-[80px] h-[64px] text-center text-[20px] font-bold text-[#3C3E41] ">
                        {data.totalContributions}
                      </td>
                      <td className="w-[180px] h-[64px] text-center text-[13px]  text-[#3C3E41]  ">
                        {data.uniqueContribution}
                      </td>

                      <td className="w-[180px] h-[64px] text-center text-[13px]  text-[#3C3E41]  "></td>

                      <td className="w-[105px] h-[64px] text-center text-[13px]  text-[#3C3E41]  ">
                        {data.totalSorrowBooks}
                      </td>
                      <td className="w-[100px] h-[64px] text-center text-[13px]  text-[#3C3E41]  ">
                        {data.totalCondolences}
                      </td>
                      <td className="w-[100px] h-[64px] text-center text-[13px]  text-[#3C3E41]  ">
                        {data.totalCandles}
                      </td>

                      <td className="w-[100px] h-[64px] text-center text-[13px]  text-[#3C3E41]  "></td>

                      <td className="w-[100px] h-[64px] text-center text-[13px]  text-[#3C3E41]  ">
                        {data.totalPhotos}
                      </td>
                      <td className="w-[100px] h-[64px] text-center text-[13px]  text-[#3C3E41]  ">
                        {data.totalDedications}
                      </td>
                      <td className="w-[100px] h-[64px] text-center text-[13px]  text-[#3C3E41]  ">
                        0
                      </td>
                      <td className="w-[100px] h-[64px] text-justify pl-[30px] text-[10px]  text-[#3C3E41]  ">
                        0
                      </td>

                      <td className="w-[90px] h-[64px] text-center text-[12px]  text-[#3C3E41]  ">
                        <div className="flex flex-row justify-center items-center">
                          <Image
                            src={tableData[0].notes}
                            alt=""
                            width={14}
                            height={14}
                            className={`h-[18.9px] w-[18.9px] ${"block "}`}
                          />
                        </div>
                      </td>

                      <td className="w-[90px] h-[64px] items-center text-[12px]  text-[#3C3E41]  ">
                        <div className="flex flex-row justify-center items-center">
                          <Image
                            src={tableData[0].email}
                            alt=""
                            width={20}
                            height={19}
                            className={`${"block "}`}
                          />
                        </div>
                      </td>

                      <td className="w-[90px] h-[64px] items-center text-[12px]  text-[#3C3E41]  ">
                        <div className="flex flex-row justify-center items-center">
                          <Image
                            src={tableData[0].grantCode}
                            alt=""
                            width={22}
                            height={18}
                            className={`${"block "}`}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemoryBook;
