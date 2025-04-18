"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import obituaryService from "@/services/obituary-service";

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
    <div className="flex flex-col w-full mt-[32px] tabletUserAcc:pl-[0px] mobileUserAcc:min-h-[calc(100vh-310px)] tabletUserAcc:mt-[52px] desktopUserAcc:mt-[62px] ">
      <div className="flex mobileUserAcc:flex-col gap-x-[60px] tabletUserAcc:gap-x-[25px] mobileUserAcc:w-full">
        <div
          onClick={() => {
            setIsSkupnoOpen(!isSkupnoOpen);
          }}
          className=""
        >
          {/* 24 October - desktopUserAcc:h-[90px] */}
          <div className="flex mobileUserAcc:hidden bg-[#FFFFFF] bg items-center w-[310px] tabletUserAcc:w-[310px] desktopUserAcc:h-[90px] tabletUserAcc:h-[90px] justify-between py-3 px-4 border-2 rounded-lg border-[#0A85C2]  ">
            <div className="flex flex-col">
              <div className="text-[40px] text-[#6D778E] font-bold leading-[46px] ">
                {logs?.memoryPagesCount ? logs?.memoryPagesCount : 0}
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
              <div className="text-[40px] text-[#6D778E] font-bold leading-[46px] ">
                {logs?.totalContributions ? logs?.totalContributions : 0}
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
          <div className="hidden mobileUserAcc:flex bg-[#FFFFFF80] w-full items-center justify-between py-3 px-3 border-2 rounded-lg border-[#0A85C2] h-[60px] ">
            <div className="flex items-center">
              <div
                style={{
                  fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 32",
                }}
                className="text-[32px] text-[#0A85C2] font-semibold "
              >
                {logs?.totalContributions ? logs?.totalContributions : 0}
              </div>
              <div className="text-[16px] text-[#6D778E] font-normal ml-4 ">
                SKUPNO PRISPEVKOV
              </div>
            </div>
            <div>
              <Image
                src={
                  isSkupnoOpen
                    ? "/bordered_drop_down.png"
                    : "/img_left_arrow.png"
                }
                height={28}
                width={28}
                className="h-[28px] w-[28px]"
              />
            </div>
          </div>
        </div>

        {/* {/ For Mobile /} */}
        {isSkupnoOpen && (
          <div className="hidden mobileUserAcc:flex flex-row  mobileUserAcc:mt-[50px] gap-x-[13px]">
            <div className="flex flex-col gap-y-4">
              <GradientPurple
                num={logs?.approvedContributions?.sorrowbook}
                text={"Žalna knjiga"}
              />
              <GradientPurple
                num={logs?.approvedContributions?.condolence}
                text={"Izreki sožalja"}
              />
              <GradientPurple
                num={logs?.approvedContributions?.dedication}
                text={"Posvetila"}
                isFor={"Gray"}
              />
              <GradientPurple
                num={logs?.approvedContributions?.photo}
                text={"Dodane slike"}
                isFor={"Gray"}
              />
              <GradientPurple
                num={logs?.approvedContributions?.candle}
                text={"Dnevne sveče"}
              />
            </div>

            <div className="flex flex-col gap-y-4">
              <GradientBlue
                num={logs?.myAdministrator}
                text={"Moji Skrbniki"}
              />
              <GradientBlue num={"1"} text={"Podarjeni skrbniki"} />
              <GradientBlue num={"0"} text={"Premium sveče"} isFor={"Gray"} />
              <GradientBlue num={"6"} text={"Mobi Kartice"} />
            </div>
          </div>
        )}

        <div className="flex flex-row  mobileUserAcc:hidden gap-x-[13px]">
          <div className="flex flex-col gap-y-4">
            <GradientPurple
              num={logs?.approvedContributions?.sorrowbook}
              text={"Žalna knjiga"}
            />
            <GradientPurple
              num={logs?.approvedContributions?.condolence}
              text={"Izreki sožalja"}
            />
            <GradientPurple
              num={logs?.approvedContributions?.dedication}
              text={"Posvetila"}
              isFor={"Gray"}
            />
            <GradientPurple
              num={logs?.approvedContributions?.photo}
              text={"Dodane slike"}
              isFor={"Gray"}
            />
            <GradientPurple
              num={logs?.approvedContributions?.candle}
              text={"Dnevne sveče"}
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <GradientBlue num={logs?.myAdministrator} text={"Moji Skrbniki"} />
            <GradientBlue
              num={"0"}
              text={"Podarjeni skrbniki"}
              isFor={"Gray"}
            />
            <GradientBlue num={"0"} text={"Premium sveče"} isFor={"Gray"} />
            <GradientBlue num={"0"} text={"Mobi Kartice"} isFor={"Gray"} />
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          setIsVseMojeOpen(!isVseMojeOpen);
        }}
        className="hidden mobileUserAcc:flex mt-[40px]  bg-[#FFFFFF80] items-center justify-between py-3 px-3 border-2 rounded-lg border-[#0A85C2] h-[60px] "
      >
        <div className="flex items-center">
          <div
            style={{
              fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 32",
            }}
            className="text-[24px] leading-[28px] font-variation-customOpt24 text-[#0A85C2] font-semibold "
          >
            Vse moje objave
          </div>
        </div>
        <div>
          <Image
            src={
              isVseMojeOpen ? "/bordered_drop_down.png" : "/img_left_arrow.png"
            }
            height={28}
            width={28}
            className="h-[28px] w-[28px]"
          />
        </div>
      </div>

      {/* <div className="mobileUserAcc:hidden w-[950px] tabletUserAcc:w-auto tabletUserAcc:mx-[10px] mobileUserAcc:w-auto mobileUserAcc:mx-[10px] mt-[55px] mobileUserAcc:mt-[30px] mobileUserAcc:h-auto h-[30px] flex items-center justify-between">
        <div className="h-[28px] text-[#0A85C2] text-[24px] leading-[28px] font-variation-customOpt24  font-[600px]">
          Vse moje objave
        </div>

        <div className="h-[28px] mobileUserAcc:h-auto text-[12px] flex flex-row mobileUserAcc:flex-col mobileUserAcc:items-end mobileUserAcc:gap-y-[6px] gap-x-[24px] items-center leading-[14px] font-variation-customOpt12 text-[#717B8C]">
          <div className="flex flex-row items-center gap-x-[12px]">
            <Image src={"/ico_tick.png"} alt="check" width={20} height={20} />
            <div>Objavljeno</div>
          </div>

          <div className="flex flex-row items-center gap-x-[12px]">
            <Image src={"/ico_cross.png"} alt="cross" width={20} height={20} />
            <div>Zavrnjeno</div>
          </div>

          <div className="mobileUserAcc:hidden flex-row flex items-center gap-x-[12px]">
            <Image
              src={"/ico_sand_clock.png"}
              alt="cross"
              width={20}
              height={20}
            />
            <div>Čaka na potrditev</div>
          </div>

          <div className="mobileUserAcc:flex flex-row hidden items-center gap-x-[12px]">
            <Image
              src={"/ico_sand_clock.png"}
              alt="cross"
              width={15}
              height={15}
            />
            <div>Čaka na potrditev</div>
          </div>
        </div>
      </div> */}

      <div className="mobileUserAcc:hidden pr-[43px] tabletUserAcc:w-auto tabletUserAcc:mx-[10px] mobileUserAcc:w-auto mobileUserAcc:mx-[10px] mt-[55px] mobileUserAcc:mt-[30px] mobileUserAcc:h-auto h-[30px] flex items-center justify-between ">
        <div
          className="h-[28px] text-[#0A85C2] text-[24px] leading-[28px] font-variation-customOpt24  font-[600px]"
          style={{
            fontSize: "24px",
            color: "#0A85C2",
            fontWeight: 400,
            lineHeight: "28px",
            fontVariationSettings: "'opsz' 24",
            fontVariationSettings: "'wdth' 50",
          }}
        >
          Vse moje objave
        </div>

        <div className="h-[28px] mobileUserAcc:h-auto text-[12px] flex flex-row mobileUserAcc:flex-col mobileUserAcc:items-end mobileUserAcc:gap-y-[6px] gap-x-[24px] items-center leading-[14px] font-variation-customOpt12 text-[#717B8C]">
          <div className="flex flex-row items-center gap-x-[12px]">
            <Image src={"/ico_tick.png"} alt="check" width={20} height={20} />
            <div>Objavljeno</div>
          </div>

          <div className="flex flex-row items-center gap-x-[12px]">
            <Image src={"/ico_cross.png"} alt="cross" width={20} height={20} />
            <div>Zavrnjeno</div>
          </div>

          <div className="mobileUserAcc:hidden flex-row flex items-center gap-x-[12px]">
            <Image
              src={"/ico_sand_clock.png"}
              alt="cross"
              width={20}
              height={20}
            />
            <div>Čaka na potrditev</div>
          </div>

          <div className="mobileUserAcc:flex flex-row hidden items-center gap-x-[12px]">
            <Image
              src={"/ico_sand_clock.png"}
              alt="cross"
              width={15}
              height={15}
            />
            <div>Čaka na potrditev</div>
          </div>
        </div>
      </div>

      {/* {/ For Mobile /} */}
      {isVseMojeOpen && (
        <div>
          <div className="w-[950px] tabletUserAcc:w-auto tabletUserAcc:mx-[10px] mobileUserAcc:w-auto mobileUserAcc:mx-[10px] mt-[55px] mobileUserAcc:mt-[30px] mobileUserAcc:h-auto h-[30px] hidden mobileUserAcc:flex mobileUserAcc:items-end items-center justify-between">
            <div className="h-[28px] text-[#0A85C2] text-[20px] leading-[23px] font-variation-customOpt20 font-[600px]">
              Vse moje objave
            </div>

            <div className="h-[28px] mobileUserAcc:h-auto text-[12px] flex flex-row mobileUserAcc:flex-col mobileUserAcc:items-end mobileUserAcc:gap-y-[6px] gap-x-[24px] items-center leading-[14px] font-variation-customOpt12 text-[#717B8C]">
              <div className="flex flex-row items-center gap-x-[12px]">
                <Image
                  src={"/ico_tick.png"}
                  alt="check"
                  width={20}
                  height={20}
                />
                <div>Objavljeno</div>
              </div>

              <div className="flex flex-row items-center gap-x-[12px]">
                <Image
                  src={"/ico_cross.png"}
                  alt="cross"
                  width={20}
                  height={20}
                />
                <div>Zavrnjeno</div>
              </div>

              <div className="mobileUserAcc:hidden flex-row flex items-center gap-x-[12px]">
                <Image
                  src={"/ico_sand_clock.png"}
                  alt="cross"
                  width={20}
                  height={20}
                />
                <div>Čaka na potrditev</div>
              </div>

              <div className="mobileUserAcc:flex flex-row hidden items-center gap-x-[12px]">
                <Image
                  src={"/ico_sand_clock.png"}
                  alt="cross"
                  width={15}
                  height={15}
                />
                <div>Čaka na potrditev</div>
              </div>
            </div>
          </div>
          {/* {/ Table for mobile /} */}
          <div className="mx-[10px] mt-5 hidden mobileUserAcc:flex">
            <div className=" w-full ">
              <div>
                {logs?.logs && logs?.logs.length > 0
                  ? logs?.logs.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between  items-center py-[20px]"
                      >
                        <div className="flex flex-col  gap-y-[10px]">
                          <span className="text-[16px] leading-[14px] font-variation-customOpt14 text-[#1E2125]">
                            {item.Obituary.name} {item.Obituary.sirName}
                          </span>
                          <span className="text-[12px] text-[#6D778E] leading-[14px] font-variation-customOpt12">
                            {item.typeInSL}
                          </span>
                        </div>

                        <div className="flex flex-col gap-y-[10px] items-end">
                          <div className="text-[12px] text-[#6D778E] leading-[14px] font-variation-customOpt12">
                            {formattedDate(item.createdTimestamp)}
                          </div>

                          <Image
                            src={getStatusIcon(item.status)}
                            alt="status"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {/ table starts from here /} */}

      <div className="w-full mt-[30px] mobileUserAcc:hidden flex justify-start">
        <div className="w-full max-w-[1280px] ">
          <table className="max-w-full w-[984px] border-separate border-spacing-y-[10px] border-spacing-x-[0px]">
            <thead className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#3C3E41]">
              <tr className="">
                <th className="p-4 text-left">DAN</th>
                <th className="p-4 text-left">SPOMINSKA</th>
                <th className="p-4 text-left">DODANA VSEBINA</th>
                <th className="p-4 text-left">STATUS</th>
              </tr>

              {/* <tr className="desktopUserAcc:hidden">
                <th className="p-4 text-left uppercase">
                  <div className="flex items-center">
                    Name
                    <Image
                      src={"/greyarrow.png"}
                      alt="status"
                      width={20}
                      height={20}
                      className="ml-2" // Adds some spacing between text and image
                    />
                  </div>
                </th>
                <th className="p-4 text-left uppercase">
                  <div className="flex items-center">
                    Date
                    <Image
                      src={"/greyarrow.png"}
                      alt="status"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </div>
                </th>
                <th className="p-4 text-left uppercase">
                  <div className="flex items-center">
                    Contribution
                    <Image
                      src={"/greyarrow.png"}
                      alt="status"
                      width={20}
                      height={20}
                      className="ml-2"
                    />
                  </div>
                </th>
                <th className="p-4 text-left uppercase">STATUS</th>
              </tr> */}
            </thead>
            <tbody>
              {logs?.logs && logs?.logs.length > 0
                ? logs?.logs.map((item, index) => (
                    <tr key={index}>
                      <td className="p-4 text-[16px] leading-[19px] font-variation-customOpt18 text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4]">
                        {formattedDate(item.createdTimestamp)}
                      </td>
                      <td className="p-4 border-t border-b border-[#A1B1D4]">
                        <div className="flex flex-row items-center gap-x-[16px]">
                          <div className="flex flex-col justify-center">
                            <span className="text-[14px] leading-[24px] font-variation-customOpt14 text-[#6D778E]">
                              {item.Obituary.name}
                            </span>
                            <span className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
                              {item.Obituary.sirName}
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
                        {item.typeInSL}
                      </td>
                      <td className="p-4 border-t border-b border-r rounded-r border-[#A1B1D4]">
                        <Image
                          alt="item"
                          src={getStatusIcon(item.status)}
                          width={30}
                          height={30}
                        />
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

function GradientPurple({ num, text, isFor }) {
  return (
    <div
      className={`flex bg-gradient-to-b ${
        num === 0
          ? "from-[#D4D4D440] to-[#D4D4D420]"
          : "from-[#BE97FF] to-[#530CC6] "
      } w-[160px]  h-[30px]  p-[2px] rounded-lg shadow-lg shadow-[#C2C2C280]`}
    >
      <div
        className={`flex w-[156px] h-[26px] ${
          num === 0 ? "bg-[#FFFFFF20]" : "bg-white"
        } rounded-md items-center justify-start ps-2`}
      >
        <div
          style={{
            fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 24",
          }}
          className={`text-6 ${
            num === 0 ? "text-[#D4D4D480]" : "text-[#6D778E] "
          } font-semibold`}
        >
          {num}
        </div>
        <div
          className={`text-4 ${
            num === 0 ? "text-[#D4D4D480]" : "text-[#6D778E] "
          } font-normal ml-2`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

function GradientBlue({ num, text, isFor }) {
  return (
    <div
      className={`flex bg-gradient-to-b ${
        isFor === "Gray"
          ? "from-[#D4D4D440] to-[#D4D4D420]"
          : "from-[#0A85C2] to-[#123597]"
      }  w-[160px]  h-[30px]  p-[2px] rounded-lg shadow-lg shadow-[#C2C2C280]`}
    >
      <div
        className={`flex min-w-[156px] h-[26px] ${
          isFor === "Gray" ? "bg-[#FFFFFF20]" : "bg-white"
        }  rounded-md items-center justify-end pr-[10px]`}
      >
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
          className={`text-6  ${
            isFor === "Gray" ? "text-[#D4D4D480]" : "text-[#0A85C2] "
          }  font-semibold `}
        >
          {num}
        </div>
      </div>
    </div>
  );
}

export default Mycontributions;
