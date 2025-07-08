"use client";
import React from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";

const AdminFlorists = () => {
  const tableData = [
    {
      open: ">",
      florist: "Alpha Florists",
      city: "Santo Domingo del Mar",
      region: "Osrednja Slo",
      shops: "1",
      cities: "1",
      notesIcon: <Icon icon="mingcute:edit-line" height={"22"} color="grey" />,
      invoice: {
        isGift: false,
        icon: <Icon icon="solar:eye-outline" height={"22"} color="black" />,
      },
      when: "21.06.2025",
      expireDate: "21.06.2025",
      expire: { date: "21.06.2025", isRed: false },
      paid: "14.05.2024",
      amounts: {
        value: "10€",
        isProcessing: false,
      },
      awardCodeImg: (
        <Icon icon="solar:eye-outline" height={"22"} color="black" />
      ),
    },
    {
      open: ">",
      florist: "Gamma florist",
      city: "Santo Domingo del Mar",
      region: "Osrednja Slo",
      shops: "2",
      cities: "2",
      notesIcon: (
        <Icon icon="mingcute:edit-line" height={"22"} color="#123597" />
      ),
      invoice: {
        isGift: false,
        icon: <Icon icon="solar:eye-outline" height={"22"} color="black" />,
      },
      when: "15.06.2025",
      expire: { date: "15.03.2025", isRed: false },
      paid: "14.05.2024",
      amounts: {
        value: "200€",
        isProcessing: false,
      },
    },
    {
      open: ">",
      florist: "Zeta florist",
      city: "Santo Domingo del Mar",
      region: "Savinjska",
      shops: "4",
      cities: "1",
      notesIcon: (
        <Icon icon="mingcute:edit-line" height={"22"} color="#123597" />
      ),
      invoice: {
        isGift: false,
        icon: <Icon icon="solar:eye-outline" height={"22"} color="black" />,
      },
      when: "14.06.2025",
      expire: { date: "14.10.2025", isRed: true },
      paid: "",
      amounts: {
        value: "",
        isProcessing: true,
      },
    },
    {
      open: ">",
      florist: "Zeta florist",
      city: "Santo Domingo del Mar",
      region: "Savinjska",
      shops: "2",
      cities: "6",
      notesIcon: (
        <Icon icon="mingcute:edit-line" height={"22"} color="#123597" />
      ),
      invoice: {
        isGift: true,
        icon: <Icon icon="solar:eye-outline" height={"22"} color="black" />,
      },
      when: "14.06.2025",
      expire: { date: "17.07.2025", isRed: false },
      paid: "",
      amounts: {
        value: "",
        isProcessing: false,
      },
    },
    {
      open: ">",
      florist: "Zeta florist",
      city: "Santo Domingo del Mar",
      region: "Zasavska",
      shops: "1",
      cities: "1",
      notesIcon: <Icon icon="mingcute:edit-line" height={"22"} color="grey" />,
      invoice: {
        isGift: false,
        icon: <Icon icon="solar:eye-outline" height={"22"} color="black" />,
      },
      when: "14.06.2025",
      expire: { date: "14.11.2024", isRed: false },
      paid: "14.05.2024",
      amounts: {
        value: "30€",
        isProcessing: false,
      },
    },
  ];

  return (
    <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
      <div className="w-full h-[110px] py-[2px] flex flex-row justify-between">
        <div className="flex flex-row gap-x-[15px]">
          <div
            className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] flex flex-row justify-between bg-[#fafbfc]`}
          >
            <div className="flex flex-col justify-between">
              <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                {"234"}
              </div>
              <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                {"Total Florists listed"}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="text-[12px] font-normal leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
                <div>Previous m:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91] font-bold">
                  {"210"}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] flex flex-row justify-between bg-[#fafbfc]`}
          >
            <div className="flex flex-col justify-between">
              <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                {"214"}
              </div>
              <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                {"Paying florists"}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
                <div>Free florists:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91] font-bold">
                  {"20"}
                </div>
              </div>
              <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-row items-center gap-x-[4px]">
                <div>New paying:</div>
                <div className="text-[#EB1D1D] text-[16px] leading-[19px] font-variation-customOpt16 font-bold">
                  {"+4"}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] flex flex-row justify-between bg-[#fafbfc]`}
          >
            <div className="flex flex-col justify-between">
              <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                {"16"}
              </div>
              <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                {"Funeral company’s florist"}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
                <div>Paying:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91] font-bold">
                  {"3"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] flex flex-row justify-between bg-[#e8f4fc]`}
          >
            <div className="flex flex-col justify-between">
              <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                {"780 €"}
              </div>
              <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                {"Revenue: Florist subsc"}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
                <div>Previos m:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91] font-bold">
                  {"820"}
                </div>
              </div>
              <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
                <div>€ in total:</div>
                <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                  {"6370"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[110px] py-[2px] flex mt-[29px]  flex-row justify-between">
        <div className="flex flex-row  gap-x-[15px]">
          <div
            className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px] "bg-[#fafbfc] 
          border-[#0A85C2] h-[110px] flex flex-row justify-between bg-[#fafbfc] `}
          >
            <div className="flex flex-col justify-between">
              <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                {"185 "}
                <span className="text-[40px] font-normal text-[#acaaaa]">
                  /
                </span>
                <span className="text-[30px] font-normal text-[#acaaaa]">
                  {" 212"}
                </span>
              </div>
              <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                {"Cities covered"}
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
            className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] bg-[#fafbfc] flex flex-col justify-between `}
          >
            <div>
              <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
                {" 114 "}
                <span className="text-[px] font-normal text-[#acaaaa]">|</span>
                {" 67 "}
                <span className="text-[px] font-normal text-[#acaaaa]">|</span>
                {" 53 "}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-between">
                <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
                  {"Cities"}
                  {" S "}
                  <span className="text-[px] font-normal text-[#acaaaa]">
                    |
                  </span>
                  {" M "}
                  <span className="text-[px] font-normal text-[#acaaaa]">
                    |
                  </span>
                  {" L "}
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-row items-center gap-x-[4px]">
                  <div>Change:</div>
                  <div className="text-[px] text-[#3DA34D] font-bold text-[16px] leading-[19px] font-variation-customOpt16">
                    {" +27 "}
                    <span className="text-[px] font-normal text-[#acaaaa]">
                      |
                    </span>
                    {" +5 "}
                    <span className="text-[px] font-normal text-[#acaaaa]">
                      |
                    </span>
                    {" +11 "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] flex flex-row justify-between bg-[#e8f4fc]`}
        >
          <div className="flex flex-col justify-between">
            <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
              {"260 €"}
            </div>
            <div className="text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
              {"Revenue: Florist Advert"}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
              <div>Previos m:</div>
              <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91] font-bold">
                {"220"}
              </div>
            </div>
            <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]">
              <div>€ in total:</div>
              <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                {"1253"}
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
                label={"Florists"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
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
      </div>

      {/* Table Starts from here */}
      <div className="mt-[50px] w-full ">
        <table className="min-w-full border-b-[0.5px] border-[#A1B1D4] ">
          <thead className="  ">
            <tr>
              <th className="pl-[16px] w-[145px] mt-[8px] flex flex-row items-center py-2 text-center border-r">
                <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  FLORIST
                </div>
                <Image
                  src={"/ico_down_arrow_memory.png"}
                  alt=""
                  width={24}
                  height={24}
                />
              </th>
              <th className="w-[285px] py-2 text-center border-r ">
                <div className="flex justify-start items-center">
                  <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    CITY
                  </div>
                  <Image
                    src={"/ico_down_arrow_memory.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </th>
              <th className="w-[145px] py-2 text-center border-r ">
                <div className="flex justify-start items-center">
                  <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    REGION
                  </div>
                  <Image
                    src={"/ico_down_arrow_memory.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </th>
              <th className="w-[185px] text-center mb-4">
                <div className="flex justify-center items-center flex-col">
                  <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    SHOPS <span className="text-[#D4D4D4]">|</span> CITIES
                  </div>
                  <div className="ml-1">
                    <Icon
                      icon="iconamoon:arrow-up-2"
                      vFlip
                      height={24}
                      color="#530CC6"
                    />
                  </div>
                </div>
              </th>
              <th className="w-[124px] py-2 text-center border-r">
                <div className="flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  NOTES
                </div>
              </th>

              <th className="w-[124px] py-2 text-center border-r">
                <div className="flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  INVOICE
                </div>
              </th>
              <th className="w-[144px] py-2 text-center border-r"></th>
              <th className="w-[102px] py-2 text-center border-r ">
                <div className="flex justify-start items-center">
                  <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    WHEN
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
                  <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    EXPIRE
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
                  <div className=" text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    PAID
                  </div>
                  <Image
                    src={"/ico_down_arrow_memory.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </th>
              <th className="w-[265px] py-2 text-start pl-[37px] border-r">
                <div className="flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  AMOUNT
                </div>
              </th>
              <th className="w-[103px] py-2 text-center border-r">
                <div className="flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                  AWARD <br /> CODE
                </div>
              </th>
              <th className="w-[170px]  text-center">
                <div className="flex justify-center flex-col items-center">
                  <div className="flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]">
                    DETAILS <br />{" "}
                    <span className="text-[grey] text-[10px]">
                      GO TO USER ACC
                    </span>
                  </div>
                  <Icon
                    icon="iconamoon:arrow-up-2"
                    vFlip
                    height={24}
                    color="#530CC6"
                  />
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
                <td className="pl-[18px] h-[64px]  text-left w-[145px] text-[13px] text-[#3C3E41]">
                  {data.florist}
                </td>
                <td className="pl-[px] h-[64px]  text-left w-[285px] text-[13px] text-[#3C3E41]">
                  {data.city}
                </td>
                <td className="pl-[px] h-[64px]  text-left w-[145px] text-[13px] text-[#3C3E41]">
                  {data.region}
                </td>
                <td className="w-[185px] h-[64px] text-[13px] text-black ">
                  <div className="flex flex-row justify-center items-center gap-2">
                    <div className="text-[13px] font-normal text-[grey]">
                      {data.shops}{" "}
                    </div>
                    <div className={`${"block h-[12px] w-[2px]"}`}>
                      <Image
                        src={"/ico_separator_memory.png"}
                        alt=""
                        width={2}
                        height={12}
                        className="w-[2px] h-[12px]"
                      />
                    </div>

                    <div className="text-[13px] font-normal text-[grey]">
                      {" "}
                      {data.cities}
                    </div>
                  </div>
                </td>
                <td className="w-[124px] h-[64px] text-center text-[13px]  text-[#3C3E41] py-3  ">
                  <div className="flex flex-col items-center gap-y-[4px]">
                    {data.notesIcon}
                  </div>
                </td>
                <td className="w-[124px] h-[64px] text-center text-[13px]  text-[#3C3E41] py-3">
                  <div className="flex flex-col items-center">
                    {!data.invoice.isGift ? (
                      data.invoice.icon
                    ) : (
                      <div className="flex flex-row gap-1 items-center">
                        <Icon
                          icon="material-symbols:circle"
                          color="#1FBE11"
                          height={14}
                        />
                        Gift
                      </div>
                    )}
                  </div>
                </td>
                <td className="w-[144px] h-[64px] text-center text-[13px]  text-[#3C3E41] py-3"></td>
                <td className="w-[124px] h-[64px] text-start text-[13px]  text-[#3C3E41]  ">
                  {data.when}
                </td>
                <td className="w-[124px] h-[64px] text-start text-[13px]  text-[#3C3E41]  ">
                  {!data.expire.isRed ? (
                    data.expire.date
                  ) : (
                    <span className="text-[red]">{data.expire.date}</span>
                  )}
                </td>
                <td className="w-[124px] h-[64px] text-start text-[13px]  text-[#3C3E41]  ">
                  {data.paid}
                </td>
                <td className="w-[124px] h-[64px] text-center flex text-[13px] items-center justify-center text-[#3C3E41]  ">
                  {!data.amounts.isProcessing ? (
                    data.amounts.value
                  ) : (
                    <div className="flex text-center">
                      <Icon
                        icon="mdi:timer-sand-complete"
                        height={22}
                        vFlip
                        color="#ff000099"
                      />
                    </div>
                  )}
                </td>
                <td className="w-[103px] pl-[40px] h-[64px] text-[13px] ">
                  <Image src={"/filecut.png"} alt="" width={22} height={100} />
                </td>
                <td className="w-[170px] h-[64px] text-center text-[13px]  text-[#6D778E] pl-[42px]">
                  <Image
                    src={"/img_left_arrow_admin.png"}
                    alt=""
                    width={24}
                    height={24}
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

export default AdminFlorists;
