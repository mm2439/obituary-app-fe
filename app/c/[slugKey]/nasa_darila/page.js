"use client";
import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import obituaryService from "@/services/obituary-service";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Darila() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    console.log("here-called");
    getLogs();
  }, []);

  const getLogs = async () => {
    try {
      const response = await obituaryService.getGiftLogs();
      setLogs(response.logs);
    } catch (error) {
      console.log(error, "==============");
    }
  };
  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[969px]">
        <div className="flex items-center gap-[37px] text-[#6D778E] mt-[62px]">
          <Link
            href="/user/funeral/notifications"
            className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mt-[9px] relative overflow-hidden min-h-[55px] w-[320px]"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[rgba(10,133,194,1)] to-[rgba(24,96,163,1)]">
              <div className="px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#fff"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                  ``
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[51px] bg-white rounded-s-md px-3">
              <img
                src="/user/plus.png"
                alt="predloge"
                className="w-6 h-6 object-contain"
              />
              <Link
                href={"/floristsgifts"}
                className="text-[16px] text-[#6D778E] leading-none"
              >
                PODARI SKRBNIKA
              </Link>
            </div>
          </Link>
          <Link
            href="/user/funeral/notifications"
            className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mt-[9px] relative overflow-hidden min-h-[55px] w-[320px]"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[#F916D6] to-[#9D208A]">
              <div className="px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#fff"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                  ``
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[51px] bg-white rounded-s-md px-3">
              <img
                src="/user/plus.png"
                alt="predloge"
                className="w-6 h-6 object-contain"
              />
              <Link
                href={"/floristsgifts"}
                className="text-[16px] text-[#6D778E] leading-none"
              >
                MOBI PREDLOGE
              </Link>
            </div>
          </Link>
        </div>
        <div className="w-full mt-[30px] flex justify-start">
          <div className="w-full">
            <div className="tabletUserAcc:block mobileUserAcc:block hidden text-[#717B8C] text-[14px] leading-[19px] mt-[60px] mb-[12px]">
              Klikni MESEC za podrobni ogled
            </div>
            <table className="max-w-full w-[984px] border-separate border-spacing-y-[0px] mobileUserAcc:border-spacing-y-[0px] tabletUserAcc:border-spacing-y-[0px] border-spacing-x-[0px] mt-[42px]">
              <thead className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#3C3E41] uppercase">
                <tr className="leading-[14px]">
                  <th className="p-[14px] text-left pt-[28px] w-[16%]">dan</th>
                  <th className="p-[14px] text-left w-[25%] tabletUserAcc:w-[30%] mobileUserAcc:w-[30%]">
                    spominska
                  </th>
                  <th className="p-[14px] text-left w-[18%]">mesto</th>
                  <th className="p-[14px] text-left w-[15%]">komu</th>
                  <th className="p-[14px] text-left w-[30%]">kaj</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, index) => {
                  const createdAt = new Date(log.createdAt);
                  const day = createdAt.getDate().toString().padStart(2, "0");
                  const month = (createdAt.getMonth() + 1)
                    .toString()
                    .padStart(2, "0");
                  const year = createdAt.getFullYear();

                  const isEven = index % 2 === 0;
                  const rowBg = isEven ? "bg-white/40" : "bg-[#e3e9f0]";

                  return (
                    <tr key={index} className={`${rowBg} text-[#3C3E41]`}>
                      <td className="px-4 py-[18px] text-[16px] leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#A1B1D4] text-[#6D778E]">
                        <span className="tabletUserAcc:hidden mobileUserAcc:hidden">
                          {`${day}.${month}.${year}`}
                        </span>
                        <span className="tabletUserAcc:block mobileUserAcc:block hidden text-[14px]">
                          {`${day}.${month}.`}
                          <br />
                          <span className="text-[#D4D4D4]">{year}</span>
                        </span>
                      </td>
                      <td className="px-4 py-[12px] border-t border-b border-[#A1B1D4] text-center text-[16px]">
                        <div className="flex flex-col items-start gap-0">
                          <span className="text-[#6D778E] text-[12px]">
                            {log.name}
                          </span>
                          <span className="text-[#3C3E41] text-[14px]">
                            {log.surname}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                        {log.city}
                      </td>
                      <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                        {log.giftedTo}
                      </td>
                      <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-r rounded-r border-[#A1B1D4] text-[14px]">
                        {log.typeInSL}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="items-center justify-center gap-[16px] mt-[16px] hidden tabletUserAcc:flex mobileUserAcc:flex">
              <div className="flex items-center justify-center gap-2">
                <div className="border border-[#6D778E] rounded flex items-center justify-center w-[32px] h-[32px]">
                  <img
                    src="/grey_right.png"
                    alt="left"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className=" border border-[#6D778E] rounded flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[#6D778E]">
                  1
                </div>
                <div className="border border-[#6D778E] rounded flex items-center justify-center w-[32px] h-[32px]">
                  <img
                    src="/grey_left.png"
                    alt="left"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CompanyAccountLayout>
  );
}
