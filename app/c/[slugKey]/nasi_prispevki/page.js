"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import obituaryService from "@/services/obituary-service";
import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";

const Mycontributions = () => {
  const [isSkupnoOpen, setIsSkupnoOpen] = useState(true);
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
    <div className="flex flex-col w-full mt-[32px] tabletUserAcc:pl-[0px] max-w-[940px] tabletUserAcc:mt-[52px] mobileUserAcc:mt-[52px] desktopUserAcc:mt-[62px] ">
      <div className="flex items-start gap-x-[60px] tabletUserAcc:gap-x-[25px] mobileUserAcc:gap-x-[25px]">
        <div
          onClick={() => {
            setIsSkupnoOpen(!isSkupnoOpen);
          }}
          className=""
        >
          {/* 24 October - desktopUserAcc:h-[90px] */}
          <div className="flex bg-[#FFFFFF] bg items-center w-[310px] h-[90px] justify-between py-3 px-4 border-2 rounded-lg border-[#0A85C2]  ">
            <div className="flex flex-col">
              <div className="text-[40px] text-[#6D778E] font-bold leading-[46px] ">
              8
              </div>
              <div
                style={{
                  fontVariationSettings: "'wdth' 75,'wght' 500,'opsz' 16",
                }}
                className="text-[16px] text-[#1E2125] font-medium mt-2 "
              >
                Spominskih
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="text-[40px] text-[#6D778E] font-bold leading-[46px] text-end">
              13
              </div>
              <div
                style={{
                  fontVariationSettings: "'wdth' 75,'wght' 500,'opsz' 16",
                }}
                className="text-[16px] text-[#1E2125] font-medium mt-2 "
              >
                Prispevkov
              </div>
            </div>
          </div>
        </div>

        {/* {/ For Mobile /} */}
          <div className="flex flex-row tabletUserAcc:flex-col mobileUserAcc:flex-col items-end gap-y-[20px] gap-x-[13px] tabletUserAcc:ml-[70px] mobileUserAcc:ml-[70px]">
              <GradientBlue
                color={"#1FBE11"}
                text={"Žalna knjiga"}
                num={19}
              />
              <GradientBlue
                color={"#E1A60F"}
                text={"Sožalje"}
                num={11}
              />
              <GradientBlue
                color={"#EB1D1D"}
                text={"Drugo"}
                num={2}
              />
          </div>
      </div>

      <div className="tabletUserAcc:w-auto tabletUserAcc:mx-[10px] mobileUserAcc:mx-[10px] mt-[150px] tabletUserAcc:mt-[69px] mobileUserAcc:mt-[69px] h-[30px] flex items-center justify-between ">
        <div
          className="text-[12px] text-[#717B8C] tabletUserAcc:visible mobileUserAcc:visible invisible"
        >
          Klikni ime za ogled spominske / našega prispevka
        </div>

        <div className="h-[28px] mobileUserAcc:h-auto text-[12px] flex flex-row gap-x-[24px] items-center leading-[14px] font-variation-customOpt12 text-[#717B8C]">
          <div className="flex flex-row items-center gap-x-[12px]">
            <Image src={"/ico_tick.png"} alt="check" width={20} height={20} />
            <div>Objavljeno</div>
          </div>

          <div className="flex flex-row items-center gap-x-[12px]">
            <Image src={"/ico_cross.png"} alt="cross" width={20} height={20} />
            <div>Zavrnjeno</div>
          </div>

          <div className="flex-row flex items-center gap-x-[12px]">
            <Image
              src={"/ico_sand_clock.png"}
              alt="cross"
              width={20}
              height={20}
            />
            <div>Čaka na potrditev</div>
          </div>
        </div>
      </div>

      {/* {/ table starts from here /} */}

      <div className="w-full mt-[30px] flex justify-start">
        <div className="w-full max-w-[1280px] ">
          <table className="max-w-full w-[984px] border-separate border-spacing-y-[10px] tabletUserAcc:border-spacing-y-0 mobileUserAcc:border-spacing-y-[0px] border-spacing-x-[0px]">
            <thead className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#3C3E41]">
              <tr className="">
                <th className="p-4 text-left">DAN</th>
                <th className="p-4 text-left">SPOMINSKA</th>
                <th className="p-4 text-left">DODANA VSEBINA</th>
                <th className="p-4 text-left">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white/40">
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4]">
                12.03.2023
                </td>
                <td className="p-4 border-t border-b border-[#A1B1D4]">
                  <div className="flex flex-row items-center gap-x-[16px]">
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                      Elizabeth
                      </span>
                      <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41]">
                      Frederickson
                      </span>
                    </div>
                    <Image
                      alt="arrow"
                      src={"/img_left_arrow.png"}
                      width={30}
                      height={30}
                    />
                  </div>
                </td>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41] border-t border-b border-[#A1B1D4]">
                Sympathy message
                </td>
                <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                  <Image
                    alt="item"
                    src={"/ico_sand_clock2.png"}
                    width={30}
                    height={30}
                  />
                </td>
              </tr>
              <tr className="bg-white/40">
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4]">
                12.03.2023
                </td>
                <td className="p-4 border-t border-b border-[#A1B1D4]">
                  <div className="flex flex-row items-center gap-x-[16px]">
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                      Elizabeth
                      </span>
                      <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41]">
                      Frederickson
                      </span>
                    </div>
                    <Image
                      alt="arrow"
                      src={"/img_left_arrow.png"}
                      width={30}
                      height={30}
                    />
                  </div>
                </td>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41] border-t border-b border-[#A1B1D4]">
                Sympathy message
                </td>
                <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                  <Image
                    alt="item"
                    src={"/ico_tick.png"}
                    width={30}
                    height={30}
                  />
                </td>
              </tr>
              <tr className="bg-white/40">
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4]">
                12.03.2023
                </td>
                <td className="p-4 border-t border-b border-[#A1B1D4]">
                  <div className="flex flex-row items-center gap-x-[16px]">
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                      Elizabeth
                      </span>
                      <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41]">
                      Frederickson
                      </span>
                    </div>
                    <Image
                      alt="arrow"
                      src={"/img_left_arrow.png"}
                      width={30}
                      height={30}
                    />
                  </div>
                </td>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41] border-t border-b border-[#A1B1D4]">
                Sympathy message
                </td>
                <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                  <Image
                    alt="item"
                    src={"/ico_cross.png"}
                    width={30}
                    height={30}
                  />
                </td>
              </tr>
              <tr className="bg-white/40">
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4]">
                12.03.2023
                </td>
                <td className="p-4 border-t border-b border-[#A1B1D4]">
                  <div className="flex flex-row items-center gap-x-[16px]">
                    <div className="flex flex-col justify-center">
                      <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                      Elizabeth
                      </span>
                      <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41]">
                      Frederickson
                      </span>
                    </div>
                    <Image
                      alt="arrow"
                      src={"/img_left_arrow.png"}
                      width={30}
                      height={30}
                    />
                  </div>
                </td>
                <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt16 text-[#3C3E41] border-t border-b border-[#A1B1D4]">
                Sympathy message
                </td>
                <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                  <Image
                    alt="item"
                    src={"/ico_sand_clock2.png"}
                    width={30}
                    height={30}
                  />
                </td>
              </tr>

            </tbody>
          </table>
          <div className="text-end text-[#717B8C] text-[12px] mt-[13px]">
          Op. Seveda lahko sodelujete na vseh spominskih straneh, ne samo na tistih, ki ste jih sami podarili ali dodali osmrtnico
          </div>
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
