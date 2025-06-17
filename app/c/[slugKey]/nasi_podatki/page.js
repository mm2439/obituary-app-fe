import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import Link from "next/link";
import React from "react";

export default function AccountSettings() {
  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[1000px] min-w-[720px]">
        <div className="grid grid-cols-2 tabletUserAcc:grid-cols-1 mobileUserAcc:grid-cols-1 gap-4 text-[#6D778E] mt-[60px] text-[14px]">
          <div className="space-y-[18px]">
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">Podjetje:</span>
              <span className="text-[#3C3E41]">
                Blue Daisy Florist
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">Naslov:</span>
              <span className="text-[#3C3E41]">
                Leonardo Boulevard 134, Shanghai
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">tel. številka:</span>
              <span className="text-[#3C3E41]">
                037-877-199
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">email:</span>
              <span className="text-[#3C3E41]">
                ourgreatemail@yahoo.com
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">spletna stran:</span>
              <span className="text-[#3C3E41]">
                www.bludaisyflorist.com
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">kontaktna oseba:</span>
              {/* <span className="text-[#3C3E41]">
                www.bludaisyflorist.com
              </span> */}
            </div>
          </div>
          <div className="space-y-[18px]">
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">uporabniško ime:</span>
              <span className="text-[#3C3E41]">
                bludaisy
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">geslo:</span>
              <span className="text-[#3C3E41]">
                **************
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">izberi novo geslo:</span>
              <span className="text-[#3C3E41]">

              </span>
            </div>
          </div>
        </div>
        <hr className="my-[28px]" />
        <div className="space-y-4 text-[#6D778E] text-[14px]">
          <div className="flex items-center gap-[12px]">
            <div className="space-y-[18px] mb-12 w-full">
              <div className="grid grid-cols-2 gap-3">
                <h4 className="text-[#2c7ba3] text-[20px] font-medium pb-2" style={{
                  fontVariationSettings: "'wdth' 50,'opsz' 26",
                }}>Cvetličarna</h4>
                <Link href="" className="inline-flex items-center gap-3">
                  <img src="/plus_icon_blue.png" alt="add icon" className="size-6" />
                  <span className="text-[#2c7ba3] text-[14px] uppercase underline">dodaj cvetličarno</span>
                </Link>
              </div>

              <div className="flex items-center gap-3 text-[#3C3E41]">
                <span className="text-[16px]">Blue Daisy Florist,</span>
                <span className="text-[14px]">Thisflorist Street 112,</span>
                <span className="text-[14px]">Lahore</span>
              </div>
              <div className="flex items-center gap-3 text-[#3C3E41]">
                <span className="text-[16px]">Yellow Daisy Florist,</span>
                <span className="text-[14px]">Thisflorist Street 112,</span>
                <span className="text-[14px]">Karachi</span>
              </div>
            </div>

          </div>
          <div className="space-y-1">
            <span className="uppercase">mesto:</span>
            <div className="grid grid-cols-2 gap-[12px] px-6 pb-[10px]">
              <div className="flex items-center gap-[12px] ">
                <span className="uppercase">Primarno:</span>
                <span className="text-[#3C3E41]">
                  Karachi
                </span>
              </div>
              <div className="flex items-center gap-[38px]">
                <button
                  className="inline-flex items-center justify-between px-6 py-2 text-sm text-gray-500 border border-[#6D778E] rounded focus:outline-none focus:ring-2 focus:ring-blue-100 gap-[12px] text-[14px]"
                  style={{ height: '38px' }}
                >
                  <span>Dodaj še drugo mesto</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="currentColor" className="size-3 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <Link href="" className="inline-flex items-center gap-3 tabletUserAcc:hidden mobileUserAcc:hidden">
                  <img src="/question_icon_blue.png" alt="add icon" className="size-6" />
                  <span className="text-[#2c7ba3] text-[14px] uppercase underline">Preveri, kako gre</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-[12px] px-6">
              <span className="uppercase">Dodatno:</span>
              <span className="text-[#3C3E41]">
                Islamabad
              </span>
            </div>
          </div>

        </div>
        <hr className="mt-[24px]" />

        <div className="grid grid-cols-2 tabletUserAcc:grid-cols-3 mobileUserAcc:grid-cols-3 gap-4 text-[#6D778E] mt-[60px] text-[14px]">
          <div className="flex items-center gap-[12px] tabletUserAcc:col-span-2 mobileUserAcc:col-span-2">
            <span className="uppercase">stran na osmrtnica.com:</span>
            <span className="text-[#3C3E41]">
              www.si.osmrtnica.com/sullivanis
            </span>
          </div>
          <div className="flex items-center gap-[12px]">
            <span className="uppercase">izdelana:</span>
            <span className="text-[#3C3E41]">
              14.05.2024
            </span>
          </div>
          <div className="flex items-center gap-10 tabletUserAcc:col-span-2 mobileUserAcc:col-span-2">
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">naročnina:</span>
              <span className="text-[#3C3E41]">
                Letno - gratis
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">do:</span>
              <span className="text-[#3C3E41]">
                14.05.2025
              </span>
            </div>
          </div>

        </div>
      </div>
    </CompanyAccountLayout>
  );
}
