"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import obituaryService from "@/services/obituary-service";

const Anniversaries = () => {
  const data = [
    {
      img: "/name_sanpaoli.png",
      val1: "86",
      val2: "734",
      val3: "48",
      val4: "25",
      date: "16.04.2028",
      date2: "28.09.2024",
      name: "Angela",
      surname: "Sanpaoli",
      location: "Palermo",
      className: "border-gradient-purple",
    },
    {
      img: "/name_bismarchk.png",
      val1: "62",
      val2: "462",
      val3: "32",
      val4: "18",
      date: "19.06.2025",
      date2: "02.01.2025",
      name: "Otto",
      surname: "von Bismarck",
      location: "Schönhausen",
      className: "border-gradient-purple",
    },
    {
      img: "/name_gonzales.png",
      val1: "28",
      val2: "173",
      val3: "11",
      val4: "3",
      date: "-",
      date2: "25.09.2024",
      name: "Juan Pedro",
      surname: "Gonzales Ochoa",
      location: "Santo Domingo",
      className: "border-gradient-blue",
    },
    {
      img: "/name_marco.png",
      val1: "44",
      val2: "377",
      val3: "6",
      val4: "2",
      date: "14.09.2024",
      date2: "05.10.2024",
      name: "Antonio ",
      surname: "di Marco",
      location: "Verona",
      className: "border-gradient-mix",
    },
    {
      img: "/name_tesla.png",
      val1: "13",
      val2: "112",
      val3: "21",
      val4: "7",
      date: "-",
      date2: "19.02.2025",
      name: "Nikola ",
      surname: "Tesla",
      location: "Belgrade",
      className: "border-gradient-blue",
    },
  ];
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    try {
      const response = await obituaryService.getMemories();
      console.log(response);

      if (Array.isArray(response.finalObituaries)) {
        const sorted = response.finalObituaries.map((item) => {
          if (Array.isArray(item.Keepers)) {
            item.Keepers.sort((a, b) => {
              if (a.isKeeper && !b.isKeeper) return -1;
              if (!a.isKeeper && b.isKeeper) return 1;
              return 0;
            });
          }
          return item;
        });

        setMemories(sorted);
      }
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

  function getNextAnniversary(birthDate, deathDate) {
    const today = new Date();
    const currentYear = today.getFullYear();

    // Create a Date object for the death and birth dates and set the year
    const deathAnniversary = new Date(deathDate);
    deathAnniversary.setFullYear(currentYear);
    stripTime(deathAnniversary); // Strip time from death anniversary

    const birthAnniversary = new Date(birthDate);
    birthAnniversary.setFullYear(currentYear);
    stripTime(birthAnniversary); // Strip time from birth anniversary

    // If the death anniversary has passed but the birth anniversary hasn't, or vice versa
    if (deathAnniversary < today && birthAnniversary < today) {
      // If both have passed, we need to check which one is next in the coming year
      deathAnniversary.setFullYear(currentYear + 1);
      birthAnniversary.setFullYear(currentYear + 1);
    }

    if (deathAnniversary < birthAnniversary) {
      return {
        type: "death",
        date: deathAnniversary.toISOString().split("T")[0], // Return death date
        year: deathAnniversary.getFullYear(), // Return death anniversary year
      };
    } else {
      return {
        type: "birth",
        date: birthAnniversary.toISOString().split("T")[0], // Return birth date
        year: birthAnniversary.getFullYear(), // Return birth anniversary year
      };
    }
  }

  function stripTime(date) {
    date.setHours(0, 0, 0, 0);
  }

  const getColorBasedOnDate = (date) => {
    if (date) {
      const targetDate = new Date(date);
      targetDate.setHours(0, 0, 0, 0);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const thirtyDaysFromNow = new Date(today);
      thirtyDaysFromNow.setDate(today.getDate() + 30);
      thirtyDaysFromNow.setHours(0, 0, 0, 0);

      if (targetDate >= today && targetDate <= thirtyDaysFromNow) {
        return "text-red-500";
      }
    }
    // Default color if it's not within the next 30 days
    return "text-[#6D778E]";
  };

  const firstNonKeeperIndex = memories.findIndex(
    (memory) => memory.isKeeper === false
  );
  const notAKeeperAnywhere = !memories.some(
    (memory) => memory.isKeeper === true
  );

  return (
    <div className="flex flex-col mt-[32px] tabletUserAcc:mt-[52px] desktopUserAcc:mt-[62px] ">
      <div className="justify-end hidden mobileUserAcc:flex">
        <Image src={"/scroll_icon.png"} width={64} height={64} />
      </div>
      <div className="flex desktopUserAcc:flex-col w-full flex-row gap-5 pr-[37px] mobileUserAcc:pr-[0]">
        <div className="hidden desktopUserAcc:flex justify-between items-center  w-full ">
          {notAKeeperAnywhere ? (
            <h1 className="text-[#0A85C2] text-[14px] font-semibold ">
              SPOMINSKE, KJER SEM SODELOVAL/A
            </h1>
          ) : (
            <h1 className="text-[#0A85C2] text-[14px] font-semibold ">
              MOJI SKRBNIKI
            </h1>
          )}
          <div className="flex items-center gap-[80px]">
            {/* <div className="text-[#1E2125] text-[14px] font-light ">
              Skupno žalnih vsebin
            </div> */}
            <div className="text-[#1E2125] text-[14px] font-light">
              Obarvan okvir - spominska ima Skrbnika
            </div>
          </div>
        </div>
        <div
          className="flex desktopUserAcc:flex-col gap-4 mobileUserAcc:gap-3 mt-[32px] mobileUserAcc:mt-5 tabletUserAcc:overflow-x-scroll mobileUserAcc:overflow-x-scroll tabletUserAcc:snap-x mobileUserAcc:snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
          }}
        >
          {memories?.map((item, index) => (
            <React.Fragment key={index}>
              {/* Mobile View */}
              <div className="flex desktopUserAcc:hidden flex-col items-start gap-3">
                {/* First item */}
                {/* 23 October 2024 */}
                <Link
                  href={item.name === "Angela" ? "/memorypage" : ""}
                  className={`flex flex-col justify-center items-center w-[210px] mobileUserAcc:w-[160px] h-[90px] mobileUserAcc:h-[73px] mobileUserAcc:items-center py-[13px] px-[3px] border-[2px] border-[#0A85C2] rounded-[8px] ${item.className}`}
                >
                  <h2 className="text-[16px] text-[#6D778E] font-normal flex flex-col items-center leading-[18.75px] pb-[4px]">
                    {item.name} <br />{" "}
                    <span className="text-[18px] pt-[2px] font-normal text-[#1E2125]">
                      {item.sirName}
                    </span>
                  </h2>
                  <p className="text-[14px] text-[#6D778E] font-normal leading-[16.41px]">
                    {item.city}
                  </p>
                </Link>

                {/* Second item */}
                <div className="w-[210px] h-[60px] mobileUserAcc:w-[160px]">
                  <TextView
                    text={"SKUPNO PRISPEVKOV:"}
                    val={item.MemoryLogs.length}
                  />
                  <div className="h-1" />
                  <TextView text={"OBISKOV STRANI:"} val={item.totalVisits} />
                </div>

                {/* Third item */}
                <div className="w-[215px] h-[61px] mobileUserAcc:w-[160px]">
                  {item.visits && item.visits.length > 0 ? (
                    <TextStyle
                      text={
                        "Zadnji obisk: " +
                        formattedDate(
                          item.visits[item.visits.length - 1].createdTimestamp
                        )
                      }
                      size={"text-[14px]"}
                    />
                  ) : (
                    <TextStyle text={"Zadnji obisk: "} size={"text-[14px]"} />
                  )}

                  {item.candles && item.candles.length > 0 ? (
                    <>
                      <div className="h-1" />
                      <TextView
                        text={"Skupno prižganih svečk:"}
                        val={item.totalCandles}
                      />
                      <div className="h-1" />
                      <TextStyle
                        text={
                          "Zadnja svečka: " +
                          formattedDate(item.lastCandleBurnt)
                        }
                        size={"text-[14px]"}
                      />
                    </>
                  ) : (
                    <>
                      <div className="h-1" />
                      <TextView text={"Skupno prižganih svečk:"} val={""} />
                      <div className="h-1" />
                      <TextStyle text={"Zadnja svečka"} size={"text-[14px]"} />
                    </>
                  )}
                </div>

                <div className="w-[210px] mobileUserAcc:w-[160px] h-[60px] flex justify-center items-center">
                  {item.Keepers && item.Keepers.length > 0 ? (
                    <CommonView
                      isLeft={false}
                      val={""}
                      date={item.Keepers[0].expiry}
                    />
                  ) : null}
                </div>

                {/* fourth item */}
                <div className="flex w-[155px] tabletUserAcc:w-[205px]  mt-[33px]   tabletUserAcc:mt-[38px] ">
                  <div className="h-[73px] tabletUserAcc:h-[90px] w-[100%] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] flex justify-center items-center rounded-tl-[7px] rounded-br-[7px] p-[2px] relative overflow-hidden">
                    <div
                      className="h-[69px] tabletUserAcc:h-[86px] w-[100%] bg-[#FFFFFF] cursor-pointer flex-col
    flex pl-[14px] justify-center rounded-tl-[5px] rounded-br-[5px]"
                    >
                      <TextStyle
                        text={"Naslednja obletnica"}
                        size={"text-[14px]"}
                      />
                      <div
                        className={`text-[16px]  font-medium leading-[18px] mt-[5px]
                       ${(() => {
                         const nextAnniversary = getNextAnniversary(
                           item.birthDate,
                           item.deathDate
                         );
                         const anniversaryDate =
                           nextAnniversary.type === "birth"
                             ? item.birthDate
                             : item.deathDate;

                         const anniversaryWithNewYear = new Date(
                           anniversaryDate
                         );
                         anniversaryWithNewYear.setFullYear(
                           nextAnniversary.year
                         );

                         return getColorBasedOnDate(anniversaryWithNewYear);
                       })()}
                        `}
                      >
                        {(() => {
                          const nextAnniversary = getNextAnniversary(
                            item.birthDate,
                            item.deathDate
                          );
                          const anniversaryDate =
                            nextAnniversary.type === "birth"
                              ? item.birthDate
                              : item.deathDate;

                          const anniversaryWithNewYear = new Date(
                            anniversaryDate
                          );
                          anniversaryWithNewYear.setFullYear(
                            nextAnniversary.year
                          );

                          const [year, month, day] = anniversaryWithNewYear
                            .toISOString()
                            .split("T")[0]
                            .split("-");

                          return `${day}.${month}.${year}`;
                        })()}
                      </div>

                      {(() => {
                        const nextAnniversary = getNextAnniversary(
                          item.birthDate,
                          item.deathDate
                        );
                        return (
                          <TextStyle
                            text={
                              nextAnniversary.type === "birth"
                                ? "Dan rojstva"
                                : "Dan slovesa"
                            }
                            size={"text-[12px]"}
                          />
                        );
                      })()}
                    </div>
                    {/* Ensure the image scrolls along with the card */}
                    <div className="flex justify-center items-center bg-gradient-to-b from-[#237FD4] to-[#1860A3] h-[25px] w-[25px] tabletUserAcc:w-[30px] tabletUserAcc:h-[30px] absolute z-0 bottom-0 right-0 rounded-br-[4px] rounded-tl-[5px]">
                      <Image
                        src={"/ico_arrow_right_popup.png"}
                        height={10}
                        width={10}
                        className="h-5 w-5 tabletUserAcc:w-6 tabletUserAcc:h-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop View */}
              {/* 23 October 2024 */}

              <div className="hidden desktopUserAcc:flex items-start justify-between">
                <Link
                  href={item.name === "Angela" ? "/memorypage" : ""}
                  className={`flex 
                    ${
                      item.Keepers?.length > 0
                        ? item.isKeeper
                          ? "bg-[#e9f1e8] border-2 border-purple-500"
                          : "bg-[#e9f1e8] border-2 border-blue-500"
                        : "bg-[#ffffff] border-2 border-blue-500"
                    }
                     flex-col justify-center items-center w-[230px] h-[73px] mobileUserAcc:w-full mobileUserAcc:flex-row mobileUserAcc:justify-around mobileUserAcc:items-center py-[13px] border-[2px]  rounded-[8px]  `}
                >
                  <h2 className="text-[16px] text-[#1E2125] font-normal leading-[18.75px] pb-2">
                    {item.name} <span>{item.sirName}</span>
                  </h2>
                  <p className="text-[14px] text-[#6D778E] font-normal leading-[16.41px]">
                    {item.city}
                  </p>
                </Link>

                <div className="flex flex-col justify-center pl-[15px] w-[204px] h-[74px]">
                  <TextView
                    text={"ŽALNIH VSEBIN:"}
                    val={item.MemoryLogs.length}
                  />
                  <div className="h-[5px]" />
                  <TextView text={"OBISKOV STRANI:"} val={item.totalVisits} />
                </div>

                <div className="flex justify-between gap-3">
                  <div className="w-[105px] h-[73px] flex justify-center items-center">
                    {item.visits && item.visits.length > 0 ? (
                      <CommonView
                        isLeft={true}
                        val={item.visits.length}
                        date={formattedDate(
                          item.visits[item.visits.length - 1].createdTimestamp
                        )}
                      />
                    ) : (
                      <CommonView isLeft={true} val={""} date={""} />
                    )}
                  </div>
                  <div className="w-[125px] h-[73px] flex justify-center items-center">
                    {item.candles && item.candles.length > 0 ? (
                      <CommonView
                        isLeft={false}
                        isCandle={true}
                        val={item.totalCandles}
                        date={formattedDate(item.lastCandleBurnt)}
                      />
                    ) : (
                      <CommonView
                        isLeft={false}
                        isCandle={true}
                        val={""}
                        date={""}
                      />
                    )}
                  </div>
                  <div className="w-[115px] h-[73px] flex justify-center items-center">
                    {item.Keepers && item.Keepers.length > 0 ? (
                      <CommonView
                        isLeft={false}
                        val={""}
                        date={item.Keepers[0].expiry}
                      />
                    ) : null}
                  </div>
                </div>

                <div className="w-[153px] rounded-tl-[7px] rounded-br-[7px] ml-2">
                  <div className="border-gradient-blue h-[73px] min-w-[153px] w-full flex justify-center items-center rounded-tl-[7px] rounded-br-[7px] p-[2px]">
                    <div className="cursor-pointer flex-col flex justify-center rounded-tl-[5px] rounded-br-[5px]">
                      <TextStyle
                        text={"Naslednja obletnica"}
                        size={"text-[13px]"}
                      />
                      <div
                        className={`text-[16px] font-medium leading-[18px] mt-[5px] ${(() => {
                          const nextAnniversary = getNextAnniversary(
                            item.birthDate,
                            item.deathDate
                          );
                          const anniversaryDate =
                            nextAnniversary.type === "birth"
                              ? item.birthDate
                              : item.deathDate;

                          const anniversaryWithNewYear = new Date(
                            anniversaryDate
                          );
                          anniversaryWithNewYear.setFullYear(
                            nextAnniversary.year
                          );

                          return getColorBasedOnDate(anniversaryWithNewYear);
                        })()}
  `}
                      >
                        {(() => {
                          const nextAnniversary = getNextAnniversary(
                            item.birthDate,
                            item.deathDate
                          );
                          const anniversaryDate =
                            nextAnniversary.type === "birth"
                              ? item.birthDate
                              : item.deathDate;

                          const anniversaryWithNewYear = new Date(
                            anniversaryDate
                          );
                          anniversaryWithNewYear.setFullYear(
                            nextAnniversary.year
                          );

                          const [year, month, day] = anniversaryWithNewYear
                            .toISOString()
                            .split("T")[0]
                            .split("-");

                          return `${day}.${month}.${year}`;
                        })()}
                      </div>
                      {(() => {
                        const nextAnniversary = getNextAnniversary(
                          item.birthDate,
                          item.deathDate
                        );
                        return (
                          <TextStyle
                            text={
                              nextAnniversary.type === "birth"
                                ? "Dan rojstva"
                                : "Dan slovesa"
                            }
                            size={"text-[12px]"}
                          />
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              {index === firstNonKeeperIndex - 1 && (
                <div className="text-[#0A85C2] text-[14px] font-semibold mt-[50px] hidden desktopUserAcc:flex">
                  SPOMINSKE, KJER SEM SODELOVAL/A
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className=" justify-end  hidden tabletUserAcc:flex">
        <Image src={"/scroll_icon.png"} width={64} height={64} />
      </div>

      <div className="tabletUserAcc:hidden desktopUserAcc:hidden flex flex-col mt-[20px]  ">
        <div className="flex items-center ml-[90px]">
          <Image src={"/rect_blue_icon.png"} alt="" width={19} height={10} />
          <div className=" ml-3 text-[#717B8C] text-[12px] font-normal ">
            obarvano ozadje - stran ima Skrbnika
          </div>
        </div>
        <div className="flex items-center ml-[90px]">
          <Image src={"/rect_perp_icon.png"} alt="" width={19} height={10} />
          <div className="ml-3 text-[#717B8C] text-[12px] font-normal ">
            vijolični okvir - kjer si ti Skrbnik
          </div>
        </div>
      </div>
    </div>
  );
};

function TextView({ text, val }) {
  return (
    <div className="flex items-center ">
      <TextStyle text={text} size={"text-[14px]"} />
      <div className=" text-[#6D778E] text-[18px] tabletUserAcc:text-[16px] mobileUserAcc:text-[14px] font-bold    ml-[5px] leading-4 ">
        {val}
      </div>
    </div>
  );
}

function CommonView({ isLeft, isCandle = false, val, date }) {
  // Utility function to get color based on date
  const getColorBasedOnDate = (date) => {
    if (date) {
      const targetDate = new Date(date);
      const today = new Date();

      const thirtyDaysFromNow = new Date(today.setDate(today.getDate() + 60));

      if (targetDate <= thirtyDaysFromNow) {
        return "text-red-500";
      }
    }
    return "text-[#6D778E]";
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
    <div
      className={`flex flex-row  desktopUserAcc:flex-col w-full ${
        isLeft && "desktopUserAcc:items-end"
      } ${
        date !== "" || (date === "" && val === "")
          ? "desktopUserAcc:items-start"
          : ""
      } `}
    >
      {date !== "" && val && (
        <>
          <TextStyle
            text={isCandle ? "Zadnja svečka" : "Zadnji obisk"}
            size={"text-[14px]"}
          />
          <TextStyle text={date} size={"text-[14px]"} />
          <div className="text-[14px] text-[#6D778E] font-normal">
            Skupno: {val}
          </div>
        </>
      )}

      {date !== "" && !val && (
        <>
          <TextStyle text="Skrbnik do:" size={"text-[14px]"} />

          <div
            className={`text-[14px] ${getColorBasedOnDate(
              date
            )} font-normal leading-[16.41px] mobileUserAcc:text-[12px] pt-1`}
          >
            {formatDate(date)}
          </div>
        </>
      )}

      {date === "" && val === "" && (
        <>
          <TextStyle
            text={isCandle ? "Zadnja svečka" : "Zadnji obisk"}
            size={"text-[14px]"}
          />
          <TextStyle text="" size={"text-[14px]"} />
          <div className="text-[14px] text-[#6D778E] font-normal">Skupno</div>
        </>
      )}
    </div>
  );
}

function TextStyle({ text, size }) {
  return (
    <div
      className={`${size}    ${
        text == "14.09.2024" ? "text-[#EB1D1D]" : "text-[#6D778E]"
      }  font-normal leading-[16.41px] mobileUserAcc:text-[12px] pt-1`}
    >
      {text}
    </div>
  );
}

export default Anniversaries;
