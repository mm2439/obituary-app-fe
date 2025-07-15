"use client";
import React from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";

const AdminPayments = () => {
  const tableData = [
    {
      rejecticon: "/red_cross.png",
      lefticon: "/icon_right.png",
      emailicon: "/enable@.png",
      notepath: "/gray_file.png",
      delete: "/delete.png",
      whoMenu: { text: "Roses Florist", subText: "#28SH380" },
      who: "Florists",
      whatMenu: { text: "Subscription", subText: "L | M" },
      issued: "21.06.2025",
      expireDate: "21.06.2025",
      paid: "",
      amount: "30€",
      advertiser: "Best Candles",
      city: "San Diego",
      what: "Other",
      where: { text: "Main Page", subText: "" },
      duration: "Week",
      notesIcon: <Icon icon="mingcute:edit-line" height={"22"} color="grey" />,
      invoice: {
        amount: "30 €",
        icon: <Icon icon="solar:eye-outline" height={"22"} color="black" />,
      },
      when: "21.06.2025",

      gift: false,
      awardCodeImg: (
        <Icon icon="mingcute:edit-line" height={"22"} color="grey" />
      ),
    },
    {
      rejecticon: "/danger_cross.png",
      lefticon: "/icon_right.png",
      emailicon: "/disable@.png",
      notepath: "/gray_note.png",
      delete: "/delete.png",
      notepath: "/gray_file.png",
      whoMenu: { text: "theiremail@yahoo.com", subText: "#24fH360" },
      who: "User",
      whatMenu: { text: "Keeper", subText: "Expired" },
      issued: "21.06.2025",
      expireDate: "21.06.2025",
      paid: "",
      amount: "30€",
      advertiser: "Best Candles",
      city: "San Diego",
      what: "Other",
      where: { text: "Main Page", subText: "" },
      duration: "Week",
      notesIcon: <Icon icon="mingcute:edit-line" height={"22"} color="grey" />,
      invoice: {
        amount: "30 €",
        icon: <Icon icon="solar:eye-outline" height={"22"} color="black" />,
      },
      when: "21.06.2025",

      gift: false,
      awardCodeImg: (
        <Icon icon="mingcute:edit-line" height={"22"} color="grey" />
      ),
    },
    {
      rejecticon: "/red_cross.png",
      lefticon: "/icon_right.png",
      emailicon: "/disableEmail.png",
      notepath: "/gray_note.png",
      delete: "/delete.png",
      notepath: "/gray_file.png",
      whoMenu: { text: "Best Candles", subText: "" },
      who: "Advertiser",
      whatMenu: { text: "Advertising", subText: "" },
      issued: "21.06.2025",
      expireDate: "21.06.2025",
      paid: "",
      amount: "30€",
      advertiser: "Best Candles",
      city: "San Diego",
      what: "Other",
      where: { text: "Main Page", subText: "" },
      duration: "Week",
      notesIcon: <Icon icon="mingcute:edit-line" height={"22"} color="grey" />,
      invoice: {
        amount: "30 €",
        icon: <Icon icon="solar:eye-outline" height={"22"} color="black" />,
      },
      when: "21.06.2025",

      gift: false,
      awardCodeImg: (
        <Icon icon="mingcute:edit-line" height={"22"} color="grey" />
      ),
    },
  ];

  return (
    <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
      <div className="w-full h-[110px] py-[2px] flex flex-row justify-start gap-x-[15px]">
        <div
          className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] bg-[#e8f4fc] flex flex-col justify-between `}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E] text-center">
                {"750€ "}
                <span className="text-[32px] font-light text-[#D4D4D4]">|</span>
                <span className="text-[32px] font-bold  text-[#CCCCCC]">
                  {" 210€"}
                </span>
              </div>
            </div>
            {/* <div className="flex flex-col justify-end">
                <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-col items-end gap-x-[4px]">
                  <div className="text-[#979595]">Previous month</div>
                  <div className="text-[px] text-[#3DA34D] font-bold text-[16px] leading-[19px] font-variation-customOpt16">
                    {"340 "}
                    <span className="text-[px] font-normal text-[#acaaaa]">
                      |
                    </span>
                    <span className="text-[12px]">{" 190"}</span>
                  </div>
                </div>
              </div> */}
          </div>
          <div></div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <div className="text-[14px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                {"Pending Payments "}
                <span className="text-[px] font-normal text-[#D4D4D4]">|</span>
                <span className="text-[#D4D4D4]">{" 30+ days"}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] bg-[#fafbfc] flex flex-col justify-between `}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E] text-center">
                {"330€ "}
                <span className="text-[32px] font-light text-[#D4D4D4]">|</span>
                <span className="text-[32px] font-bold  text-[#CCCCCC]">
                  {" 210€ "}
                </span>
                <span className="text-[32px] font-light text-[#D4D4D4]">|</span>
                <span className="text-[32px] font-bold  text-[#CCCCCC]">
                  {" 40€"}
                </span>
              </div>
            </div>
            {/* <div className="flex flex-col justify-end">
                <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-col items-end gap-x-[4px]">
                  <div className="text-[#979595]">Previous month</div>
                  <div className="text-[px] text-[#3DA34D] font-bold text-[16px] leading-[19px] font-variation-customOpt16">
                    {"40 "}
                    <span className="text-[px] font-normal text-[#acaaaa]">
                      |
                    </span>
                    <span className="text-[12px]">{" 16"}</span>
                  </div>
                </div>
              </div> */}
          </div>
          <div></div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                {"Florists "}
                <span className="text-[px] font-normal text-[#acaaaa]">|</span>
                <span>{" Advertisers "}</span>
                <span className="text-[px] font-normal text-[#acaaaa]">|</span>
                <span>{" Users "}</span>
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
              <Dropdown
                label={"Month"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
            </div>
            <Dropdown
              label={"Year"}
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
          <thead className="uppercase  ">
            <tr>
              <th className="pl-[16px] w-[200px] mt-[8px] flex flex-row items-center py-2 text-center border-r pb-4">
                <div className=" text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  WHO
                </div>
                <Image
                  src={"/ico_down_arrow_memory.png"}
                  alt=""
                  width={24}
                  height={24}
                />
              </th>

              <th className="w-[195px] py-2 text-center border-r ">
                <div className="flex justify-start items-center">
                  <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    WHO
                  </div>
                </div>
              </th>

              <th className="w-[102px] py-2 text-center border-r ">
                <div className="flex justify-start items-center">
                  <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    WHAT
                  </div>
                  <Image
                    src={"/ico_down_arrow_memory.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </th>

              <th className="w-[184px]  py-2 text-center border-r">
                <div className="flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  INVOICE
                </div>
              </th>

              <th className="w-[155px] pl-2 py-2 text-center border-r ">
                <div className="flex justify-start items-center">
                  <div className=" text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    ISSUED
                  </div>
                  <Image
                    src={"/ico_down_arrow_memory.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </th>

              <th className="w-[102px] py-2 text-center border-r ">
                <div className="flex justify-start items-center">
                  <div className=" text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    EXPIRED
                  </div>
                  <Image
                    src={"/ico_down_arrow_memory.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </th>

              <th className="w-[110px] py-2 text-center border-r flex">
                <div className="flex flex-col flex-start text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  AMOUNT
                </div>
              </th>

              <th cl assName="w-[125px] py-2 text-start border-r ">
                <div className="flex justify-start items-center flex-start">
                  <div className=" text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    PAID
                  </div>
                </div>
              </th>

              <th className="w-[103px] py-2 text-center border-r">
                <div className="flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  confirm <br /> payment
                </div>
              </th>

              <th className="w-[250px] py-2 text-center border-r">
                <div className="flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                TERMINATE <br /> PRIVILEGE
                </div>
              </th>

              <th className="w-[103px] py-2 text-center border-r">
                <div className="flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  delete <br /> user
                </div>
              </th>

              <th className="w-[103px] py-2 text-center border-r">
                <div className="flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  block <br /> user
                </div>
              </th>

              <th className="w-[103px] py-2 text-center border-r">
                <div className="flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  notes
                </div>
              </th>

              <th className="w-[103px] py-2 text-center border-r">
                <div className="flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  emails
                </div>
              </th>

              <th className="w-[103px] py-2 text-center border-r">
                <div className="flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  open
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="">
            {tableData.map((data, index) => (
              <tr
                key={index}
                className={`border-[0.5px] border-[#A1B1D4] ${
                  index === 0 ? "bg-[#F7F9FA70]" : ""
                }`}
              >
                <td className="pl-[18px] h-[64px] font-normal text-left w-[190px] text-[13px] text-[#3C3E41]">
                  {data.whoMenu.text}
                  <br />
                  <span className="text-[#D4D4D4] text-[12px]">
                    {data.whoMenu.subText}
                  </span>
                </td>

                <td className="pl-[px] h-[64px] font-normal text-left w-[135px] text-[13px] text-[#3C3E41]">
                  {data.who}
                </td>

                <td className="pl-[px] h-[64px] font-normal text-left w-[135px] text-[13px] text-[#3C3E41]">
                  {data.whatMenu.text} <br />
                  {data.whatMenu.subText}
                </td>

                <td className="pl-[px] h-[64px] font-normal text-left w-[184px] text-[13px] text-[#3C3E41]">
                  <div className="flex flex-col items-center">
                    {data.invoice.icon}
                  </div>
                </td>

                <td className="pl-[px] h-[64px] font-normal text-left w-[155px] text-[13px] text-[#3C3E41]">
                  {data.issued}
                </td>

                <td className="w-[124px] h-[64px] font-normal text-start text-[13px]  text-[#3C3E41]  ">
                  <span>{data.expireDate}</span>
                </td>

                <td className="w-[110px] h-[64px] text-start text-[13px]  text-[#3C3E41]  ">
                  <p className="font-sourcesans pl-2 text-[20px] font-bold leading-[24px] text-[#6D778E]">
                    {data.amount}
                  </p>
                </td>

                <td className="w-[125px] h-[64px] font-normal text-start text-[13px]  text-[#3C3E41]  ">
                  {data.paid}
                </td>

                <td className="w-[124px] h-[64px] font-normal flex justify-center items-center text-start text-[13px]  text-[#3C3E41]  ">
                  <div className="w-[32px] h-[32px] border-[1px] border-[solid] border-[#D4D4D4] bg-[linear-gradient(113.63deg,_#E3E8EC_0%,_#FFFFFF_100%)]"></div>
                </td>

                {/* <td className="my-auto pl-[35px] w-[120px] h-[64px] text-center text-[12px]  text-[#3C3E41] py-3">
                  <Image src={data.rejecticon} width={28} height={28}></Image>
                </td> */}
                <td className="w-[250px] pl-[68px] h-[64px] text-center text-[13px] text-[#3C3E41] ">
                  <Image src={data.rejecticon} alt="" width={21} height={21} />
                </td>

                <td className="w-[124px] pl-[25px] h-[64px] text-start text-[13px]  text-[#3C3E41]  ">
                  <Image src={data.delete} alt="" width={21} height={21} />
                </td>
                <td className="w-[124px] pl-[25px] h-[64px] text-start text-[13px]  text-[#3C3E41]  ">
                  <Image src={"/reject.png"} alt="" width={21} height={21} />
                </td>
                {/* <td className="w-[120px] pl-[33px] h-[64px] text-center text-[12px]  text-[#3C3E41] py-3  ">
                  <Image src={"/reject.png"} width={28} height={28}></Image>
                </td> */}
                <td className="w-[103px] pl-[25px] h-[64px] text-[13px] ">
                  <Image src={data.notepath} width={21} height={21}></Image>
                </td>
                <td className="w-[103px] pl-[25px] h-[64px] text-[13px] ">
                  <Image src={data.emailicon} width={21} height={21}></Image>
                </td>

                <td className="w-[103px] pl-[27px] h-[64px] text-[13px] ">
                  <Image src={data.lefticon} width={4} height={3}></Image>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPayments;
