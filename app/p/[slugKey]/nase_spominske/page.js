"use client";
import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import obituaryService from "@/services/obituary-service";
import React, { useEffect, useState } from "react";

export default function Spominske() {
  const [obituaries, setObituaries] = useState([]);
  const [monthData, setMonthData] = useState({
    currentMonthCount: 0,
    lastMonthCount: 0,
  });
  useEffect(() => {
    getObituaries();
  }, []);

  const getObituaries = async () => {
    try {
      const response = await obituaryService.getCompanyObituaries();
      console.log(response);
      setObituaries(response.obituaries);
      setMonthData(response.data);
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
    <CompanyAccountLayout>
      <div className="w-full max-w-[940px]">
        <div className="mt-[62px] flex justify-between">
          <div className="flex gap-[15px]">
            <div className="border-gradient-rounded  flex flex-col h-[90px] w-[310px] py-[13px] px-[15px] border-[2px] border-[#0A85C2] rounded-[10px] bg-[#fff] shadow-md">
              <div className="flex justify-between items-start mb-[2px]">
                <h2 className="text-[32px] text-[#CCCCCC] font-light leading-none flex items-end gap-[10px]">
                  <span className="font-bold text-[#6D778E] text-[40px]">
                    {obituaries.length}
                  </span>
                  I <span>{monthData.lastMonthCount}</span>
                </h2>
                <img
                  src="/ico_pregled.png"
                  alt="pregled"
                  className="w-[26px] h-[20px]"
                />
              </div>
              <p className="text-[16px] text-[#CCCCCC] font-light">
                <span className="text-[#1E2125] font-medium">
                  Objavljenih osmrtnic{" "}
                </span>{" "}
                I Ta mesec
              </p>
            </div>

            <div className="border-gradient-rounded  flex flex-col h-[90px] w-[310px] py-[13px] px-[15px] border-[2px] border-[#0A85C2] rounded-[10px] bg-[#fff] shadow-md">
              <div className="flex justify-between items-start mb-[2px]">
                <h2 className="text-[32px] text-[#CCCCCC] font-light leading-none flex items-end gap-[10px]">
                  <span className="font-bold text-[#6D778E] text-[40px]">
                    5
                  </span>{" "}
                  I <span>2</span>
                </h2>
                <img
                  src="/spominske.png"
                  alt="pregled"
                  className="w-[26px] h-[20px]"
                />
              </div>
              <p className="text-[16px] text-[#CCCCCC] font-light">
                <span className="text-[#1E2125] font-medium">
                  Podarjenih Skrbnikov{" "}
                </span>{" "}
                I Ta mesec
              </p>
            </div>
          </div>
          <div className="space-y-[5px] tabletUserAcc:hidden mobileUserAcc:hidden">
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img
                  src="/ico_pregled.png"
                  alt="spominske"
                  className="h-[10px]"
                />
              </div>
              <span className="text-[#717B8C] text-[12px]">
                Dodana osmrtnica
              </span>
            </div>
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img
                  src="/spominske.png"
                  alt="spominske"
                  className="h-[10px]"
                />
              </div>
              <span className="text-[#717B8C] text-[12px]">Dodan Skrbnik</span>
            </div>
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/dodana.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">
                Dodana osmrtnica IN Skrbnik
              </span>
            </div>
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/obarvano.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">
                (obarvano) Aktivni Skrbnik
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[76px] min-w-[720px]">
          <div className="flex justify-between">
            <div className="flex items-end gap-2">
              <h4
                className="text-[24px] text-[#0A85C2] leading-none"
                style={{
                  fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 26",
                }}
              >
                Vse osmrtnice in spominske
              </h4>
              <span className="text-[#717B8C] text-[12px] leading-none mb-[2px]">
                ,{"   "}ki ste jih podarili
              </span>
            </div>

            <div className="space-y-[5px] tabletUserAcc:block mobileUserAcc:block hidden">
              <div className="flex gap-3">
                <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                  <img
                    src="/ico_pregled.png"
                    alt="spominske"
                    className="h-[10px]"
                  />
                </div>
                <span className="text-[#717B8C] text-[12px]">
                  Dodana osmrtnica
                </span>
              </div>
              <div className="flex gap-3">
                <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                  <img
                    src="/spominske.png"
                    alt="spominske"
                    className="h-[10px]"
                  />
                </div>
                <span className="text-[#717B8C] text-[12px]">
                  Dodan Skrbnik
                </span>
              </div>
              <div className="flex gap-3">
                <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                  <img src="/dodana.png" alt="spominske" className="h-[10px]" />
                </div>
                <span className="text-[#717B8C] text-[12px]">
                  Dodana osmrtnica IN Skrbnik
                </span>
              </div>
              <div className="flex gap-3">
                <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                  <img
                    src="/obarvano.png"
                    alt="spominske"
                    className="h-[10px]"
                  />
                </div>
                <span className="text-[#717B8C] text-[12px]">
                  (obarvano) Aktivni Skrbnik
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[36px] grid grid-cols-4 tabletUserAcc:grid-cols-3 mobileUserAcc:grid-cols-3 gap-[18px]">
            {obituaries.length > 0
              ? obituaries.map((obituary, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-[8px] p-[2px] h-[72px]"
                  >
                    <div className="bg-[#E9F1E8] rounded-[7px] w-full h-full">
                      <div className="w-full flex flex-col items-center justify-center pt-[9px] pb-0">
                        <p className="text-[16px] text-[#1E2125]">
                          {obituary.name} {obituary.sirName}
                        </p>
                        <p className="text-[14px] text-[#6D778E]">
                          {obituary.city}
                        </p>
                      </div>
                      <div className="flex justify-between items-center px-[6px] pb-[6px]">
                        {obituary.hasKeeper === true ? (
                          <img src="/dodana.png" alt="" className="h-[10px]" />
                        ) : (
                          <img
                            src="/ico_pregled.png"
                            alt=""
                            className="h-[10px]"
                          />
                        )}
                        <span className="text-[#6D778E99] text-[10px] leading-none">
                          {formatDate(obituary.createdTimestamp)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </CompanyAccountLayout>
  );
}
