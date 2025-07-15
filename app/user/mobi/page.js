import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Darila() {
  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[969px]">
        <div className="flex items-center gap-[37px] text-[#6D778E] mt-[62px]">
        <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mt-[9px] relative overflow-hidden min-h-[55px] w-[320px]">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[rgba(10,133,194,1)] to-[rgba(24,96,163,1)]">
            <div className="px-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#fff" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />``
              </svg>
            </div>
          
          </div>
          <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[51px] bg-white rounded-s-md px-3">
            <img src="/user/plus.png" alt="predloge" className="w-6 h-6 object-contain" />
            <h2 className="text-[16px] text-[#6D778E] leading-none">PODARI SKRBNIKA</h2>
          </div>
        </Link>
        <Link href="/user/funeral/notifications" className="bg-white rounded-lg py-4 px-6 flex items-center gap-4 justify-between shadow-[5px_5px_10px_rgba(194,194,194,0.5)] mt-[9px] relative overflow-hidden min-h-[55px] w-[320px]">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end bg-gradient-to-b from-[#F916D6] to-[#9D208A]">
            <div className="px-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#fff" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />``
              </svg>
            </div>
          
          </div>
          <div className="flex items-center gap-5 absolute top-[2px] left-[2px] w-[calc(100%-55px)] h-[51px] bg-white rounded-s-md px-3">
            <img src="/user/plus.png" alt="predloge" className="w-6 h-6 object-contain" />
            <h2 className="text-[16px] text-[#6D778E] leading-none">MOBI PREDLOGE</h2>
          </div>
        </Link>
        </div>
        <div className="w-full mt-[30px] flex justify-start">
        <div className="w-full">
          <div className="tabletUserAcc:block mobileUserAcc:block hidden text-[#717B8C] text-[14px] leading-[19px] mt-[60px] mb-[12px]">
          Klikni MESEC za podrobni  ogled
            </div>
          <table className="max-w-full w-[984px] border-separate border-spacing-y-[0px] mobileUserAcc:border-spacing-y-[0px] tabletUserAcc:border-spacing-y-[0px] border-spacing-x-[0px] mt-[42px]">
            <thead className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#3C3E41] uppercase">
              <tr className="leading-[14px]">
                <th className="p-[14px] text-left pt-[28px] w-[16%]">dan</th>
                <th className="p-[14px] text-left w-[20%]">spominska</th>
                <th className="p-[14px] text-left w-[18%]">mesto</th>
                <th className="p-[14px] text-left w-[15%]">komu</th>
                <th className="p-[14px] text-left w-[30%]">kaj</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white/40 text-[#3C3E41]">
                <td className="px-4 py-[18px] text-[16px] leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#A1B1D4] text-[#6D778E]">
                12.03.2023
                </td>
                <td className="px-4 py-[12px] border-t border-b border-[#A1B1D4] text-center text-[16px]">
                <div className="flex flex-col items-start gap-0">
                  <span className="text-[#6D778E] text-[12px]">Elizabeth</span>
                  <span className="text-[#3C3E41]">Frederickson</span>
                </div>
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                Managua
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                justme39
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-r rounded-r border-[#A1B1D4] text-[14px]">
                MOBI Pogreb 2
                </td>
                
              </tr>
              <tr className="bg-[#e3e9f0] text-[#3C3E41]">
                <td className="px-4 py-[18px] text-[16px] leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#A1B1D4] text-[#6D778E]">
                12.03.2023
                </td>
                <td className="px-4 py-[12px] border-t border-b border-[#A1B1D4] text-center text-[16px]">
                <div className="flex flex-col items-start gap-0">
                  <span className="text-[#6D778E] text-[12px]">Elizabeth</span>
                  <span className="text-[#3C3E41]">Frederickson</span>
                </div>
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                Managua
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                justme39
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px] border-r rounded-r">
                MOBI Pogreb 2
                </td>
                
              </tr>
              <tr className="bg-white/40 text-[#3C3E41]">
                <td className="px-4 py-[18px] text-[16px] leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#A1B1D4] text-[#6D778E]">
                12.03.2023
                </td>
                <td className="px-4 py-[12px] border-t border-b border-[#A1B1D4] text-center text-[16px]">
                <div className="flex flex-col items-start gap-0">
                  <span className="text-[#6D778E] text-[12px]">Elizabeth</span>
                  <span className="text-[#3C3E41]">Frederickson</span>
                </div>
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                Managua
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                justme39
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px] border-r rounded-r">
                MOBI Pogreb 2
                </td>
                
              </tr>
              <tr className="bg-[#e3e9f0] text-[#3C3E41]">
                <td className="px-4 py-[18px] text-[16px] leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#A1B1D4] text-[#6D778E]">
                12.03.2023
                </td>
                <td className="px-4 py-[12px] border-t border-b border-[#A1B1D4] text-center text-[16px]">
                <div className="flex flex-col items-start gap-0">
                  <span className="text-[#6D778E] text-[12px]">Elizabeth</span>
                  <span className="text-[#3C3E41]">Frederickson</span>
                </div>
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                Managua
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                justme39
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px] border-r rounded-r">
                MOBI Pogreb 2
                </td>
                
              </tr>
              <tr className="bg-white/40 text-[#3C3E41]">
                <td className="px-4 py-[18px] text-[16px] leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#A1B1D4] text-[#6D778E]">
                12.03.2023
                </td>
                <td className="px-4 py-[12px] border-t border-b border-[#A1B1D4] text-center text-[16px]">
                <div className="flex flex-col items-start gap-0">
                  <span className="text-[#6D778E] text-[12px]">Elizabeth</span>
                  <span className="text-[#3C3E41]">Frederickson</span>
                </div>
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                Managua
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                justme39
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px] border-r rounded-r">
                MOBI Pogreb 2
                </td>
                
              </tr>
              <tr className="bg-white/40 text-[#3C3E41]">
                <td className="px-4 py-[18px] text-[16px] leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#A1B1D4] text-[#6D778E]">
                12.03.2023
                </td>
                <td className="px-4 py-[12px] border-t border-b border-[#A1B1D4] text-center text-[16px]">
                <div className="flex flex-col items-start gap-0">
                  <span className="text-[#6D778E] text-[12px]">Elizabeth</span>
                  <span className="text-[#3C3E41]">Frederickson</span>
                </div>
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                Managua
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px]">
                justme39
                </td>
                <td className="p-4 leading-[19px] font-variation-customOpt16 border-t border-b border-[#A1B1D4] text-[14px] border-r rounded-r">
                MOBI Pogreb 2
                </td>
                
              </tr>
            </tbody>
          </table>
          <div className="items-center justify-center gap-[16px] mt-[16px] hidden tabletUserAcc:flex mobileUserAcc:flex">
            <div className="flex items-center justify-center gap-2">
              <div className="border border-[#6D778E] rounded flex items-center justify-center w-[32px] h-[32px]">
                <img src="/grey_right.png" alt="left" className="w-[24px] h-[24px]" />
              </div>
              <div className=" border border-[#6D778E] rounded flex items-center justify-center w-[32px] h-[32px] text-[14px] text-[#6D778E]">
                1
              </div>
              <div className="border border-[#6D778E] rounded flex items-center justify-center w-[32px] h-[32px]">
                <img src="/grey_left.png" alt="left" className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </CompanyAccountLayout>
  );
}
