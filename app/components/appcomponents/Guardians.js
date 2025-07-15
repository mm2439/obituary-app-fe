"use client";
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import obituaryService from "@/services/obituary-service";

const Guardians = () => {
  const cardsData = [
    {
      title: "432",
      content: "Skupno obiskov",
      image: "/Total.png",
      price: "Skupno obiskovalcev:",
      cost: "156",
      background: "linear-gradient(180deg, #0D94E8 0%, #10579B 100%)",
      size: { width: "64px", height: "42.67px" },
    },
    {
      title: "1335",
      time: "min",
      content: "Čas preživet na strani",
      image: "/Time.svg",
      price: "Minut v maju:",
      cost: "236",
      background: "linear-gradient(180deg, #63B8F3 0%, #1F6BB2 100%)",
      size: { width: "42px", height: "40px" },
    },
    {
      title: "22",
      content: "Žalnih vsebin",
      image: "/magnifier.svg",
      price: "Darovalcev:",
      cost: "16",
      background: "linear-gradient(180deg, #A5DAFF 0%, #5BA8DE 100%)",
      size: { width: "42px", height: "42px" },
    },
    {
      title: "191",
      content: "Dnevnih svečk",
      image: "/img_candle_users_acc.png",
      price: "Premium svečk:",
      cost: "6",
      background: "linear-gradient(180deg, #81D6F1 0%, #419CBE 100%)",
      size: { width: "46px", height: "50px" },
    },
  ];

  const [activeTab, setActiveTab] = useState(null);
  const [memories, setMemories] = useState([]);
  const [keepers, setKeepers] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [logs, setLogs] = useState([]);

  const toggleTableVisibility = () => {
    if (isTableVisible === false) {
      getMemoryLog(activeTab);
    }
    setIsTableVisible((prev) => !prev);
  };

  useEffect(() => {
    getKeeperMemory();
  }, []);

  const getKeeperMemory = async () => {
    try {
      const response = await obituaryService.getKeeperMemories();

      setMemories(response.obituaries);
      setKeepers(response.keeperObituaries);
      if (response.obituaries.length > 0) {
        setActiveTab(response.obituaries[0].id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMemoryLog = async (id) => {
    try {
      const response = await obituaryService.getMemoryLogs(id);
      const memory = memories.find((memory) => memory.id === id);

      const systemLog = {
        type: "Spominska stran izdelana",
        interactionData: {
          name: "Sistem",
        },

        createdTimestamp: memory.createdTimestamp,
      };

      const allLogs = [systemLog, ...response.detailedLogs];
      setLogs(allLogs);
    } catch (error) {
      console.log(error);
    }
  };

  const formattedDate = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";

    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const formattedDateWithTime = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";

    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();

    const hours = funeralDate.getHours().toString().padStart(2, "0");
    const minutes = funeralDate.getMinutes().toString().padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  useEffect(() => {
    console.log(logs);
  }, [logs]);
  return (
    <div className="flex flex-col w-full">
      <div
        // 21 october 2024 - desktopUserAcc:pr-[20px]
        className="flex mt-[86px] tabletUserAcc:mt-[46px] gap-y-5 mobileUserAcc:gap-y-3 flex-col pr-0
              mobileUserAcc:mt-[27px] desktopUserAcc:w-[975px] w-[100%]"
      >
        <div className="flex tabletUserAcc:flex-col-reverse mobileUserAcc:flex-col flex-row justify-between">
          <div className="flex flex-wrap gap-[16px]">
            {memories && memories.length > 0
              ? memories.map((item, index) => (
                  <button
                    className={`px-4 py-2 h-12 rounded-lg p-6 min-w-[116px] ${
                      activeTab === item.id
                        ? "bg-gradient-to-t from-[#530CC6] to-[#0D94E8] text-white"
                        : "bg-white text-[#6D778E] border-gradient"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                    key={index}
                  >
                    {item.name} {item.sirName}
                  </button>
                ))
              : null}
          </div>
          {/* 17 October 2024 - tabletUserAcc:max-w-[950px] */}
          <div className="ml-[49px] tabletUserAcc:mb-5 tabletUserAcc:max-w-[950px] mobileUserAcc:mt-5 md:m-2 flex justify-end items-end mobileUserAcc:ml-[22px] h-[25px] text-[18px] font-normal text-[#0D94E8]">
            <p className="border-b-2 border-[#0D94E8]">Dodaj novega Skrbnika</p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-[26px] mt-7 ">
          {/* 22 October 2024 */}
          <div className="flex desktopUserAcc:w-[403px] w-full flex-col tabletUserAcc:flex-row justify-between mobileUserAcc:flex-col">
            {/* 22 October 2024 mobileUserAcc:items-start */}
            <div className="flex w-full justify-between items-center mobileUserAcc:items-start mobileUserAcc:flex-col">
              <h1
                className="text-[32px] m-0 leading-[38px] font-variation-customOpt32 font-semibold text-[#530CC6] "
                style={{
                  fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 32",
                }}
              >
                {/* 25 October 2024 */}
                {memories && memories.length > 0
                  ? (() => {
                      const memory = memories.find(
                        (memory) => memory.id === activeTab
                      );
                      return memory ? `${memory.name} ${memory.sirName}` : null;
                    })()
                  : null}
              </h1>

              <div className="text-[16px] text-[#6D778E] font-variation-customOpt16 mt-[2px] mobileUserAcc:mt-3 hidden tabletUserAcc:flex">
                Status Skrbnika traja do:
                <span
                  style={{
                    // this is for tablet
                    color: "#530CC6",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "18px",
                    fontVariationSettings: "'opsz' 20",
                    fontVariationSettings: "'wdth' 50",
                    marginLeft: "4px",
                  }}
                >
                  {memories && memories.length > 0
                    ? (() => {
                        const keeper = keepers.find(
                          (keeper) => keeper.obituaryId === activeTab
                        );
                        return keeper ? formattedDate(keeper.expiry) : null;
                      })()
                    : null}
                </span>
              </div>

              <div className="text-[16px] text-[#6D778E] font-variation-customOpt16 mobileUserAcc:mt-3 hidden mobileUserAcc:flex">
                Status Skrbnika traja do:
                <span
                  style={{
                    // this text is for mobile to show
                    color: "#6D778E",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "23px",
                    fontVariationSettings: "'opsz' 16",
                    fontVariationSettings: "'wdth' 50",
                    marginLeft: "8px",
                  }}
                >
                  {memories && memories.length > 0
                    ? (() => {
                        const keeper = keepers.find(
                          (keeper) => keeper.obituaryId === activeTab
                        );
                        return keeper ? formattedDate(keeper.expiry) : null;
                      })()
                    : null}
                </span>
              </div>
            </div>

            <div className="mobileUserAcc:flex flex-row justify-end hidden">
              <Image
                src="/scroll_icon.png"
                className="w-16 h-16 object-cover"
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className="hidden desktopUserAcc:flex justify-center items-center border-gradient rounded-lg bg-white desktopUserAcc:w-[300px] h-[60px] w-full">
            {(() => {
              const memory = memories.find((m) => m.id === activeTab);
              if (!memory) return null;

              const deathDateFormatted = new Date(memory.deathDate)
                .toISOString()
                .split("T")[0]
                .split("-")
                .reverse()
                .join(".");

              const memoryLink = `/memorypage/${memory.id}/${memory.name}_${memory.sirName}_${deathDateFormatted}`;

              return (
                <Link href={memoryLink} className="flex items-center">
                  <p
                    className="p-2 m-0 font-variation-customOpt14 flex text-[#0A85C2] text-[24px] font-semibold"
                    style={{
                      fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 24",
                    }}
                  >
                    Dopolni / uredi to stran
                  </p>
                  <Image
                    src="/img_left_arrow.png"
                    className="w-6 h-6 object-cover"
                    width={24}
                    height={24}
                    alt="Arrow"
                  />
                </Link>
              );
            })()}
          </div>
        </div>

        <div
          // 25 October 2024 - gap-[28px]
          className="ml-[10px] flex overflow-y-hidden desktopUserAcc:justify-between mobileUserAcc:mt-[24px] gap-[24px] tabletUserAcc:overflow-x-scroll tabletUserAcc:ml-3 mobileUserAcc:ml-3 mobileUserAcc:overflow-x-scroll mobileUserAcc:space-x-1 tabletUserAcc:space-x-1 py-4 pb-6 tabletUserAcc:snap-x mobileUserAcc:snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="snap-start mobileUserAcc:pl-[10px] relative pl-[10px]">
            <div
              className="flex flex-col items-center text-center rounded-[40px] shadow-lg"
              style={{
                width: "206px",
                height: "330.14px",
                background: "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                boxShadow:
                  "#CCCCCC -13px 10px 4px -2px, #CCCCCC 3px 11px 14px -4px",
              }}
            >
              <div
                // 22 October 2024 - rounded-t-[40px]
                className="w-full py-6 rounded-t-[40px] h-[84.55px]"
                style={{
                  background:
                    "linear-gradient(180deg, #0D94E8 0%, #10579B 100%)",
                  clipPath: "ellipse(100% 55% at 48% 44%)",
                }}
              >
                {memories && memories.length > 0 ? (
                  <h2 className="text-[40px] leading-[46.88px] font-normal text-white">
                    {(() => {
                      const memory = memories.find(
                        (memory) => memory.id === activeTab
                      );
                      return memory.totalVisits;
                    })()}
                  </h2>
                ) : null}
              </div>
              <div
                className="w-full py-3 rounded-b-3xl flex flex-col justify-around items-center h-[236.16px]"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                }}
              >
                {/* 21 October 2024 */}
                <p
                  className="text-[#808080] text-nowrap text-[18px] font-normal px-2 h-5 leading-6"
                  style={{
                    fontVariationSettings: "'wdth' 75,'wght' 400,'opsz' 18",
                  }}
                >
                  Skupno obiskov
                </p>

                <img
                  src="/Total.png"
                  alt=" Skupno obiskov"
                  className="mt-2"
                  style={{
                    width: "64px",
                    height: "42.67px",
                  }}
                />

                <p
                  className="text-[#FFFFFF] text-sm font-light w-full h-[30px] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #0D94E8 0%, #10579B 100%)",
                  }}
                >
                  Skupno obiskovalcev:
                  {memories && memories.length > 0 ? (
                    <span className="text-[16px] font-bold pl-1">
                      {(() => {
                        const memory = memories.find((m) => m.id === activeTab);
                        if (!memory || !memory.visits) return 0;

                        const uniqueVisitors = new Set();

                        memory.visits.forEach((visit) => {
                          const identifier =
                            visit.userId !== null
                              ? `user-${visit.userId}`
                              : `ip-${visit.ipAddress}`;
                          uniqueVisitors.add(identifier);
                        });

                        return uniqueVisitors.size;
                      })()}
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
            <img
              src={"/shadow.svg"}
              alt="shadow"
              className="absolute inset-x-0 bottom-[-25px] ml-3 w-[200px] h-[10.13px] object-contain"
            />
          </div>

          <div className="snap-start mobileUserAcc:pl-[10px] relative pl-[10px]">
            <div
              className="flex flex-col items-center text-center rounded-[40px] shadow-lg"
              style={{
                width: "206px",
                height: "330.14px",
                background: "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                boxShadow:
                  "#CCCCCC -13px 10px 4px -2px, #CCCCCC 3px 11px 14px -4px",
              }}
            >
              <div
                // 22 October 2024 - rounded-t-[40px]
                className="w-full py-6 rounded-t-[40px] h-[84.55px]"
                style={{
                  background:
                    "linear-gradient(180deg, #63B8F3 0%, #1F6BB2 100%)",
                  clipPath: "ellipse(100% 55% at 48% 44%)",
                }}
              >
                {/* <h2 className="text-[40px] leading-[46.88px] font-normal text-white">
                  1335
                  <span className="text-[32px]">min</span>
                </h2> */}
              </div>
              <div
                className="w-full py-3 rounded-b-3xl flex flex-col justify-around items-center h-[236.16px]"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                }}
              >
                {/* 21 October 2024 */}
                <p
                  className="text-[#808080] text-nowrap text-[18px] font-normal px-2 h-10 leading-6 mb-5"
                  style={{
                    fontVariationSettings: "'wdth' 75,'wght' 400,'opsz' 18",
                  }}
                >
                  {/* Čas preživet na strani */}
                  Kmalu
                </p>

                {/* <img
                  src="/Time.svg"
                  alt="Čas preživet na strani"
                  className="mt-2"
                  style={{
                    width: "42px",
                    height: "40px",
                  }}
                /> */}

                <p
                  className="text-[#FFFFFF] text-sm font-light w-full h-[30px] mt-11 flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #63B8F3 0%, #1F6BB2 100%)",
                  }}
                >
                  <span className="text-[16px] font-bold pl-1"> </span>
                </p>
              </div>
            </div>
            <img
              src={"/shadow.svg"}
              alt="shadow"
              className="absolute inset-x-0 bottom-[-25px] ml-3 w-[200px] h-[10.13px] object-contain"
            />
          </div>
          <div className="snap-start mobileUserAcc:pl-[10px] relative pl-[10px]">
            <div
              className="flex flex-col items-center text-center rounded-[40px] shadow-lg"
              style={{
                width: "206px",
                height: "330.14px",
                background: "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                boxShadow:
                  "#CCCCCC -13px 10px 4px -2px, #CCCCCC 3px 11px 14px -4px",
              }}
            >
              <div
                className="w-full py-6 rounded-t-[40px] h-[84.55px]"
                style={{
                  background:
                    "linear-gradient(180deg, #A5DAFF 0%, #5BA8DE 100%)",
                  clipPath: "ellipse(100% 55% at 48% 44%)",
                }}
              >
                {memories && memories.length > 0 ? (
                  <h2 className="text-[40px] leading-[46.88px] font-normal text-white">
                    {(() => {
                      const memory = memories.find(
                        (memory) => memory.id === activeTab
                      );
                      return memory.MemoryLogs.length;
                    })()}
                  </h2>
                ) : null}
              </div>
              <div
                className="w-full py-3 rounded-b-3xl flex flex-col justify-around items-center h-[236.16px]"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                }}
              >
                <p
                  className="text-[#808080] text-nowrap text-[18px] font-normal px-2 h-5 leading-6"
                  style={{
                    fontVariationSettings: "'wdth' 75,'wght' 400,'opsz' 18",
                  }}
                >
                  Žalnih vsebin
                </p>

                <img
                  src="/magnifier.svg"
                  alt="Žalnih vsebin"
                  className="mt-2"
                  style={{
                    width: "42px",
                    height: "42px",
                  }}
                />

                <p
                  className="text-[#FFFFFF] text-sm font-light w-full h-[30px] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #A5DAFF 0%, #5BA8DE 100%)",
                  }}
                >
                  Darovalcev:
                  {memories && memories.length > 0 ? (
                    <span className="text-[16px] font-bold pl-1">
                      {(() => {
                        const memory = memories.find((m) => m.id === activeTab);
                        if (!memory || !memory.MemoryLogs) return 0;

                        // Use a Set to track unique `memoryId|userId` combinations
                        const uniqueCombinations = new Set();

                        memory.MemoryLogs.forEach((log) => {
                          uniqueCombinations.add(
                            `${log.memoryId}|${log.userId}`
                          );
                        });

                        return uniqueCombinations.size;
                      })()}
                    </span>
                  ) : null}
                </p>
              </div>
            </div>
            <img
              src={"/shadow.svg"}
              alt="shadow"
              className="absolute inset-x-0 bottom-[-25px] ml-3 w-[200px] h-[10.13px] object-contain"
            />
          </div>
          <div className="snap-start mobileUserAcc:pl-[10px] relative pl-[10px]">
            <div
              className="flex flex-col items-center text-center rounded-[40px] shadow-lg"
              style={{
                width: "206px",
                height: "330.14px",
                background: "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                boxShadow:
                  "#CCCCCC -13px 10px 4px -2px, #CCCCCC 3px 11px 14px -4px",
              }}
            >
              <div
                className="w-full py-6 rounded-t-[40px] h-[84.55px]"
                style={{
                  background:
                    "linear-gradient(180deg, #81D6F1 0%, #419CBE 100%)",
                  clipPath: "ellipse(100% 55% at 48% 44%)",
                }}
              >
                {memories && memories.length > 0 ? (
                  <h2 className="text-[40px] leading-[46.88px] font-normal text-white">
                    {(() => {
                      const memory = memories.find(
                        (memory) => memory.id === activeTab
                      );
                      return memory.totalCandles;
                    })()}
                  </h2>
                ) : null}
              </div>
              <div
                className="w-full py-3 rounded-b-3xl flex flex-col justify-around items-center h-[236.16px]"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%)",
                }}
              >
                <p
                  className="text-[#808080] text-nowrap text-[18px] font-normal px-2 h-5 leading-6"
                  style={{
                    fontVariationSettings: "'wdth' 75,'wght' 400,'opsz' 18",
                  }}
                >
                  Dnevnih svečk
                </p>

                <img
                  src="/img_candle_users_acc.png"
                  alt="Dnevnih svečk"
                  className="mt-2"
                  style={{
                    width: "46px",
                    height: "50px",
                  }}
                />

                <p
                  className="text-[#FFFFFF] text-sm font-light w-full h-[30px] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #81D6F1 0%, #419CBE 100%)",
                  }}
                >
                  Premium svečk:
                  <span className="text-[16px] font-bold pl-1">0</span>
                </p>
              </div>
            </div>
            <img
              src={"/shadow.svg"}
              alt="shadow"
              className="absolute inset-x-0 bottom-[-25px] ml-3 w-[200px] h-[10.13px] object-contain"
            />
          </div>
        </div>

        <div className="hidden desktopUserAcc:flex justify-end text-[16px] font-normal text-[#6D778E] text-end mt-[10.87px]">
          Status Skrbnika traja do:
          <span className="text-[#530CC6] font-medium">
            {memories && memories.length > 0
              ? (() => {
                  const keeper = keepers.find(
                    (keeper) => keeper.obituaryId === activeTab
                  );
                  return keeper ? formattedDate(keeper.expiry) : null;
                })()
              : null}
          </span>
        </div>

        <div className="flex desktopUserAcc:hidden justify-between items-center w-full mt-7">
          {memories.map((memory) => {
            const isActive = memory.id === activeTab;

            // Format the date for the URL
            const deathDateFormatted = new Date(memory.deathDate)
              .toISOString()
              .split("T")[0]
              .split("-")
              .reverse()
              .join(".");

            const href = isActive
              ? `/memorypage/${memory.id}/${memory.name}_${memory.sirName}_${deathDateFormatted}`
              : "#";

            return (
              <Link
                key={memory.id}
                href={href}
                style={{
                  color: "#0A85C2",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "28px",
                  fontVariationSettings: "'opsz' 24, 'wdth' 50",
                }}
                className="border-gradient p-3 m-0 h-[60px] mobileUserAcc:w-full tabletUserAcc:w-[334px] tabletUserAcc:justify-between items-center mobileUserAcc:justify-between font-variation-customOpt14 flex rounded-lg bg-white text-[#0A85C2] text-[24px] font-semibold border-2 border-[#0D94E8]"
              >
                Dopolni / uredi to stran
                <Image
                  src="/img_left_arrow.png"
                  className="w-8 h-10 object-cover"
                  width={28}
                  height={32}
                  alt="Arrow"
                />
              </Link>
            );
          })}

          <div className="tabletUserAcc:flex hidden">
            <Image
              src="/scroll_icon.png"
              className="w-16 h-16 object-cover"
              width={64}
              height={64}
            />
          </div>
        </div>

        {/* 25 October 2024 */}
        <div className="flex flex-col mt-[20px] tabletUserAcc:w-full desktopUserAcc:mt-[103px] tabletUserAcc:mt-[30px] justify-between w-full  mobileUserAcc:w-full  items-start ">
          {/* 22 October 2024 - mobileUserAcc:w-full bg-[#FFFFFFCC] mobileUserAcc:rounded-[8px]  */}
          <div className="flex justify-between w-full  bg-[#FFFFFFCC] desktopUserAcc:bg-transparent rounded-[8px] items-center mb-3 desktopUserAcc:max-w-[326px] tabletUserAcc:max-w-[334px]">
            <div
              style={{
                color: "#0A85C2",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "28px",
                fontVariationSettings: "'opsz' 24",
                fontVariationSettings: "'wdth' 50",
              }}
              className="text-[24px] md:text-[24px] text-[#0A85C2] tabletUserAcc:shadow-custom-light-dark mobileUserAcc:shadow-custom-light-dark justify-between font-semibold rounded-lg h-[60px] flex items-center p-3 desktopUserAcc:bg-transparent  desktopUserAcc:border-none w-full "
              onClick={toggleTableVisibility}
            >
              <span>Vse objave na tej strani</span>
              {/*For Mobile-only*/}
              {!isTableVisible ? (
                <Image
                  src="/img_left_arrow.png"
                  className="w-8 h-10 object-cover"
                  width={28}
                  height={32}
                />
              ) : (
                <Image
                  src="/img_down_arrow.png"
                  className="w-7 h-7 border-2 mx-1 border-[#EB1D1D] p-2 px-1.5" // Only show on mobile when visible
                  width={32}
                  height={32}
                />
              )}
            </div>

            {/* <Image
              src="/img_down_arrow.png"
              className="w-7 h-7 ml-7 border-2 border-[#EB1D1D] p-2 px-1.5 hidden tabletUserAcc:block desktopUserAcc:block"
              width={32}
              height={32}
            /> */}
          </div>

          <div
            className={`overflow-x-auto w-full ${
              isTableVisible ? "block" : "hidden"
            }`}
          >
            <table className="w-full tabletUserAcc:max-w-[950px]">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#3C3E41] border-b border-[#A1B1D4] w-[180px]">
                    DAN
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#3C3E41] border-b border-[#A1B1D4]">
                    PRISPEVKI
                  </th>
                </tr>
              </thead>
              <tbody>
                {logs && logs.length > 0
                  ? logs.map((item, index) => (
                      <tr className="bg-[#FFFFFF80]" key={index}>
                        <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#3C3E41]">
                          {formattedDateWithTime(item.createdTimestamp)}
                        </td>
                        <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-[#3C3E41]">
                          <strong className="text-[#6D778E] text-sm font-normal">
                            {item.interactionData?.name || item?.userName}
                          </strong>
                          <br /> {item.typeInSL}
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guardians;
