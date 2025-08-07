"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import obituaryService from "@/services/obituary-service";
// import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";

const Mycontributions = () => {
  const [isSkupnoOpen, setIsSkupnoOpen] = useState(true);
  const [isVseMojeOpen, setIsVseMojeOpen] = useState(false);
  const tableData = [
    {
      date: "12.03.2023",
      firstName: "Elizabeth",
      lastName: "Frederickson",
      content: "Sympathy Message",
      status: "/ico_sand_clock2.png",
    },
    {
      date: "02.03.2023",
      firstName: "John",
      lastName: "Holland",
      content: "Tribute",
      status: "/ico_tick.png",
    },
    {
      date: "22.02.2023",
      firstName: "Diego",
      lastName: "Costa",
      content: "Photo Added",
      status: "/ico_cross.png",
    },
    {
      date: "22.02.2023",
      firstName: "Dietmar",
      lastName: "Albertini Casiraghi",
      content: "Photo Added",
      status: "/ico_sand_clock2.png",
    },
  ];

  const formattedDate = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";

    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const [logs, setLogs] = useState(null);

  useEffect(() => {
    getMemoryLogs();
  }, []);

  const getMemoryLogs = async () => {
    try {
      const response = await obituaryService.getLogs();
      setLogs(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return "/ico_tick.png";
      case "pending":
        return "/ico_sand_clock2.png";
      case "rejected":
        return "/ico_cross.png";
      default:
        return "/ico_sand_clock2.png";
    }
  };
  return (
    <CompanyAccountLayout>
    <div className="flex flex-col w-full mt-[32px] tabletUserAcc:pl-[0px] mobileUserAcc:min-h-[calc(100vh-310px)] max-w-[967px] tabletUserAcc:mt-[52px] desktopUserAcc:mt-[79px] mobileUserAcc:mt-[52px]">
      <h4 
        className="text-[24px] leading-[23px] font-variation-customOpt20 font-[600px] text-[#0A85C2] mb-[35px] tabletUserAcc:hidden mobileUserAcc:hidden" 
        style={{fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 24"}}
      >
        Trenutno v teku
      </h4>
      <div className="flex justify-between tabletUserAcc:justify-center mobileUserAcc:justify-center items-start gap-x-[60px]">
        <div className="space-y-[32px]">
          <div
            className="bg-gradient-to-b from-[#0A85C2] to-[#530CC6] rounded-lg p-[2px] w-[550px] shadow-lg"
          >
            {/* 24 October - desktopUserAcc:h-[90px] */}
            <div className="flex bg-[#FFFFFF] items-center justify-between py-[16px] px-[16px] rounded-lg">
              <div className="flex flex-col gap-[8px]">
                <div className="text-[14px] text-[#6D778E] uppercase">
                naročnina
                </div>
                <div className="text-[20px] text-[#1E2125] font-semibold">
                Letna
                </div>
              </div>
              <div className="flex flex-col gap-[13px]">
                <div className="text-[16px] text-[#1E2125] text-end">
                21.01.2023
                </div>
                <div className="text-[12px] text-[#6D778EB2] font-light text-end">
                Veljavno do: 20.01.2024
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-to-b from-[#0A85C2] to-[#530CC6] rounded-lg p-[2px] w-[550px] shadow-lg"
          >
            {/* 24 October - desktopUserAcc:h-[90px] */}
            <div className="flex bg-[#FFFFFF] items-center justify-between py-[16px] px-[16px] rounded-lg">
              <div className="flex flex-col gap-[8px]">
                <div className="text-[14px] text-[#6D778E] uppercase">
                Oglaševanje
                </div>
                <div className="text-[20px] text-[#1E2125] font-semibold">
                Lokalne cvetličarne - Mesečno
                </div>
              </div>
              <div className="flex flex-col gap-[13px]">
                <div className="text-[16px] text-[#1E2125] text-end">
                21.01.2023
                </div>
                <div className="text-[12px] text-[#6D778EB2] font-light text-end">
                Veljavno do: 20.01.2024
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-to-b from-[#0A85C2] to-[#3DA34D] rounded-lg p-[2px] w-[550px] shadow-lg"
          >
            {/* 24 October - desktopUserAcc:h-[90px] */}
            <div className="flex bg-[#FFFFFF] items-center justify-between py-[16px] px-[16px] rounded-lg">
              <div className="flex flex-col gap-[8px]">
                <div className="text-[14px] text-[#6D778E] uppercase flex gap-[10px]">
                <span>Oglaševanje</span> <span className="text-[#3DA34D]">gratis</span>
                </div>
                <div className="text-[20px] text-[#1E2125] font-semibold">
                Lokalne cvetličarne - Mesečno
                </div>
              </div>
              <div className="flex flex-col gap-[13px]">
                <div className="text-[16px] text-[#1E2125] text-end">
                21.01.2023
                </div>
                <div className="text-[12px] text-[#6D778EB2] font-light text-end">
                Veljavno do: 20.01.2024
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-[49px] tabletUserAcc:hidden mobileUserAcc:hidden">
          <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-lg p-[2px] h-[72px] w-[252px] shadow-lg flex items-center justify-center gap-[16px] border-[2px] border-[#0A85C2] cursor-pointer">
            <img src={"/circle_plus_white.png"} alt="check" className="w-[24px] h-[24px]" />
            <span className="text-[18px] text-[#FFFFFF] font-normal leading-none uppercase w-[120px]">naročnina</span>
          </div>
          <div className="bg-[#E7FEFFCC] rounded-lg p-[2px] h-[72px] w-[252px] shadow-lg flex items-center justify-center gap-[16px] border-[2px] border-[#0A85C2] cursor-pointer">
            <img src={"/plus_blue.png"} alt="check" className="w-[24px] h-[24px]" />
            <span className="text-[18px] text-[#0A85C2] font-normal leading-none uppercase w-[120px]">oglaševanje</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-[66px] flex justify-start">
        <div className="w-full">
          <h4 
            className="text-[32px] tabletUserAcc:text-[24px] mobileUserAcc:text-[24px] tabletUserAcc:mx-[38px] mobileUserAcc:mx-[38px] leading-[23px] font-variation-customOpt20 text-[#0A85C2] mb-[35px]" 
            style={{fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 24"}}
          >
            Zgodovina plačil
          </h4>
          <table className="max-w-full w-[984px] border-separate border-spacing-y-[6px] border-spacing-x-[0px]">
            <thead className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#3C3E41]">
              <tr className="uppercase">
                <th className="pl-[20px] p-2 text-left"># Naročilo</th>
                <th className="p-2 text-left">račun  I  Kaj</th>
                <th className="p-2 text-center">kdaj</th>
                <th className="p-2 pr-[40px] w-[150px] text-end">znesek</th>
                <th className="p-2 w-[120px] tabletUserAcc:w-[90px] mobileUserAcc:w-[90px] text-center">status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4] pl-[20px]">
                01234fd45
                </td>
                <td className="p-[10px] border-t border-b border-[#A1B1D4]">
                  <div className="flex flex-row items-center gap-x-[16px]">
                  <Image
                      alt="arrow"
                      src={"/external_link.png"}
                      width={24}
                      height={24}
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                      Oglaševanje
                      </span>
                      <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41]">
                      Lokalne cveličarne - tedensko
                      </span>
                    </div>
                    
                  </div>
                </td>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E] border-t border-b border-[#A1B1D4] text-center">
                  <span className="tabletUserAcc:hidden mobileUserAcc:hidden">12.03.2023</span>
                  <span className="hidden tabletUserAcc:block mobileUserAcc:block">12.03. <br />2023</span>
                </td>
                <td className="text-[16px] border-t border-b border-[#A1B1D4] text-[#3C3E41] font-semibold text-end p-4 pr-[40px]">97,60€</td>
                <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                  <Image
                    alt="item"
                    src={"/ico_sand_clock2.png"}
                    className="mx-auto shrink-0"
                    width={30}
                    height={30}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4] pl-[20px]">
                01234fd45
                </td>
                <td className="p-[10px] border-t border-b border-[#A1B1D4]">
                  <div className="flex flex-row items-center gap-x-[16px]">
                  <Image
                      alt="arrow"
                      src={"/external_link.png"}
                      
                      width={24}
                      height={24}
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                      Naročnina
                      </span>
                      <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41]">
                      Letna - Manjši kraji
                      </span>
                    </div>
                    
                  </div>
                </td>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E] border-t border-b border-[#A1B1D4] text-center">
                  <span className="tabletUserAcc:hidden mobileUserAcc:hidden">12.03.2023</span>
                  <span className="hidden tabletUserAcc:block mobileUserAcc:block">12.03. <br />2023</span>
                </td>
                <td className="text-[16px] border-t border-b border-[#A1B1D4] text-[#3C3E41] font-semibold text-end p-4 pr-[40px]">183,00€</td>
                <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                  <Image
                    alt="item"
                    src={"/ico_tick.png"}
                    className="mx-auto shrink-0"
                    width={30}
                    height={30}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4] pl-[20px]">
                01234fd45
                </td>
                <td className="p-[10px] border-t border-b border-[#A1B1D4]">
                  <div className="flex flex-row items-center gap-x-[16px]">
                  <Image
                      alt="arrow"
                      src={"/external_link.png"}
                      width={24}
                      height={24}
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                      Oglaševanje
                      </span>
                      <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41]">
                      Lokalne cveličarne - tedensko
                      </span>
                    </div>
                    
                  </div>
                </td>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E] border-t border-b border-[#A1B1D4] text-center">
                  <span className="tabletUserAcc:hidden mobileUserAcc:hidden">12.03.2023</span>
                  <span className="hidden tabletUserAcc:block mobileUserAcc:block">12.03. <br />2023</span>
                </td>
                <td className="text-[16px] border-t border-b border-[#A1B1D4] text-[#3C3E41] font-semibold text-end p-4 pr-[40px]">73,20€</td>
                <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                  <Image
                    alt="item"
                    src={"/ico_tick.png"}
                    className="mx-auto shrink-0"
                    width={30}
                    height={30}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4] pl-[20px]">
                01234fd45
                </td>
                <td className="p-[10px] border-t border-b border-[#A1B1D4]">
                  <div className="flex flex-row items-center gap-x-[16px]">
                  <Image
                      alt="arrow"
                      src={"/external_link.png"}
                      width={24}
                      height={24}
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                      Oglaševanje
                      </span>
                      <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41]">
                      Prva stran - Mesečno
                      </span>
                    </div>
                    
                  </div>
                </td>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E] border-t border-b border-[#A1B1D4] text-center">
                  <span className="tabletUserAcc:hidden mobileUserAcc:hidden">12.03.2023</span>
                  <span className="hidden tabletUserAcc:block mobileUserAcc:block">12.03. <br />2023</span>
                </td>
                <td className="text-[16px] border-t border-b border-[#A1B1D4] text-[#3C3E41] font-semibold text-end p-4 pr-[40px]">88,40€</td>
                <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                  <Image
                    alt="item"
                    src={"/ico_cross.png"}
                    className="mx-auto shrink-0"
                    width={30}
                    height={30}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4] pl-[20px]">
                01234fd45
                </td>
                <td className="p-[10px] border-t border-b border-[#A1B1D4]">
                  <div className="flex flex-row items-center gap-x-[16px]">
                  <Image
                      alt="arrow"
                      src={"/external_link.png"}
                      width={24}
                      height={24}
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                      Naročnina
                      </span>
                      <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41]">
                      Letna - Manjši kraji
                      </span>
                    </div>
                    
                  </div>
                </td>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E] border-t border-b border-[#A1B1D4] text-center">
                  <span className="tabletUserAcc:hidden mobileUserAcc:hidden">12.03.2023</span>
                  <span className="hidden tabletUserAcc:block mobileUserAcc:block">12.03. <br />2023</span>
                </td>
                <td className="text-[16px] border-t border-b border-[#A1B1D4] text-[#3C3E41] font-semibold text-end p-4 pr-[40px]">183,00€</td>
                <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                  <Image
                    alt="item"
                    src={"/ico_tick.png"}
                    className="mx-auto shrink-0"
                    width={30}
                    height={30}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </CompanyAccountLayout>
  );
};

function GradientBlue({ num, text, color, isFor }) {
  return (
    <div
      className={`flex bg-gradient-to-b ${
        isFor === "Gray"
          ? "from-[#D4D4D440] to-[#D4D4D420]"
          : "from-[#0A85C2] to-[#123597]"
      }  h-[30px]  p-[2px] rounded-lg shadow-lg shadow-[#C2C2C280]`}
    >
      <div
        className={`flex h-[26px] px-[15px] py-[4px] ${
          isFor === "Gray" ? "bg-[#FFFFFF20]" : "bg-white"
        }  rounded-md items-center justify-center pr-[10px]`}
      >
        <div className="w-[10px] h-[10px] mr-[10px] rounded-full" style={{backgroundColor: color}}>

        </div>
        <div
          className={`text-[15px] leading-[18px] font-variation-customOpt16 ${
            isFor === "Gray" ? "text-[#D4D4D480]" : "text-[#6D778E] "
          } font-normal mr-[8px]`}
        >
          {text}
        </div>
        <div
          style={{
            fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 24",
          }}
          className={`text-6  text-[#1E2125] font-semibold `}
        >
          {num}
        </div>
      </div>
    </div>
  );
}

export default Mycontributions;
