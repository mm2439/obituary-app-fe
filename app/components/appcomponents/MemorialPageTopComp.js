import API_BASE_URL from "@/config/apiConfig";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";

import obituaryService from "@/services/obituary-service";

const MemorialPageTopComp = ({ set_Id, setModal, data, updateObituary }) => {
  const [currentURL, setCurrentURL] = useState("");
  const [user, setUser] = useState(null);

  const toggleText = () => {
    setShowFullObituaryText((prev) => !prev);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const decodedURL = decodeURIComponent(window.location.href);
      setCurrentURL(decodedURL);
    }
  }, []);

  const parsedEvents = data?.events ? data?.events : [];

  const handleCopyURL = () => {
    navigator.clipboard
      .writeText(currentURL) // Copy to clipboard
      .then(() => {
        toast.success("URL copied to clipboard!"); // Show success toast
      })
      .catch(() => {
        toast.error("Failed to copy the URL."); // Show error toast in case of failure
      });
  };

  const truncateURL = (url, maxLength) => {
    return url.length > maxLength ? `${url.slice(0, maxLength)}...` : url;
  };

  const formattedBirthDate =
    data && data.birthDate
      ? format(new Date(data.birthDate), "dd.MM.yyyy")
      : "";
  const formattedDeathDate =
    data && data.deathDate
      ? format(new Date(data.deathDate), "dd.MM.yyyy")
      : "";

  const formatTitleCase = (str) => {
    return str
      .split(" ")
      .map(
        (word) =>
          word.charAt(0).toLocaleUpperCase("sl") +
          word.slice(1).toLocaleLowerCase("sl")
      )
      .join(" ");
  };
  const burnCandle = async () => {
    const candleData = {
      userId: user?.id || null,
    };

    try {
      const response = await obituaryService.burnCandle(data.id, candleData);

      toast.success("Candle Burnt Successfully");
      set_Id("3");
      setModal(true);
      const updatedCandles = [
        {
          ...data.candles[0],
          totalCandles: (data.candles[0]?.totalCandles || 0) + 1,
          lastBurnedCandleTime: new Date().toISOString(),
          myLastBurntCandleTime: new Date(),
        },
        ...data.candles.slice(1),
      ];

      updateObituary({
        ...data,
        candles: updatedCandles,
      });
    } catch (error) {
      console.error("Failed to burn candle:", error);

      if (error.status === 409) {
        toast.error("You can only burn one candle per 24 hours.");
      } else {
        toast.error(
          error.data?.message || "Error burning candle. Please try again."
        );
      }
      set_Id("3");
      setModal(true);
    }
  };

  //obituary text setting
  const [showFullObituaryText, setShowFullObituaryText] = useState(false);

  const toggleObituaryText = () => {
    setShowFullObituaryText((prev) => !prev);
  };

  const characterLimit = 300;
  const obituary = data?.obituary || "";
  const shouldTruncate = obituary.length > characterLimit;

  const displayedObituary =
    showFullObituaryText || !shouldTruncate
      ? obituary
      : obituary.slice(0, characterLimit);

  return (
    <div
      id="memoryPageTop"
      className="flex flex-col w-full  items-center  justify-center"
    >
      <div
        className="bg-[#ecf0f3]   w-full flex justify-center 
      mt-[57px] tablet:mt-[60px] desktop:mt-0   pt-[60px] "
      >
        <div
          className="flex flex-col 
               w-[100%] px-[14px] tablet:px-0 desktop:px-0
               tablet:w-[525px]
               desktop:w-[1089px]  
               desktop:h-[auto]    
       
               "
        >
          <div className="flex desktop:h-auto  flex-col desktop:flex-row w-[100%] min-h-screen  relative ">
            <div className="flex  w-[100%] justify-center desktop:w-[50%]  desktop:h-screen static desktop:sticky top-20">
              <div className="flex  flex-col  desktop:h-[60%] w-[100%]  ">
                <div className="flex  flex-col w-[100%]  items-center ">
                  <div className="hidden desktop:flex h-[30px]" />
                  <div className=" ">
                    <div className="text-[64px]   text-[#414141] font-greatVibes font-normal ">
                      V spomin
                    </div>
                  </div>
                  <div
                    className=" mt-[40px] 
                            rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                  >
                    <Image
                      src={
                        data.image
                          ? `${API_BASE_URL}/${data.image}`
                          : data.gender === "Male"
                          ? "/img_profile.png"
                          : "/woman.png"
                      }
                      alt="Slika"
                      width={1000}
                      height={1000}
                      className="
                                    h-[266.87px] w-[195px] 
                                    tablet:h-[266.87px] tablet:w-[195px] 
                                    desktop:h-[266.87px]  desktop:w-[195px] 
                                    rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-center mt-[50px]">
                    <div className="flex items-center justify-center h-[33px] tablet:h-[47px] desktop:h-[40px]">
                      <h1 className="text-[#1E2125] text-[28px] tablet:text-[40px] desktop:text-[40px] font-variation-customOpt28 tablet:font-variation-customOpt40 desktop:font-variation-customOpt40 font-normal">
                        {data.name && data.sirName
                          ? `${formatTitleCase(data.name)} ${formatTitleCase(
                              data.sirName
                            )}`.length > 25
                            ? `${`${formatTitleCase(
                                data.name
                              )} ${formatTitleCase(data.sirName)}`.slice(
                                0,
                                25
                              )}...`
                            : `${formatTitleCase(data.name)} ${formatTitleCase(
                                data.sirName
                              )}`
                          : ""}
                      </h1>
                    </div>
                    <div className="flex items-center justify-center mt-[14px] h-[21px] tablet:h-[23px] desktop:h-[20px] ">
                      <div className="text-[#1E2125] text-[18px] tablet:text-[20px] desktop:text-[20px] font-variation-customOpt18 tablet:font-variation-customOpt20 desktop:font-variation-customOpt20 font-normal">
                        {formattedBirthDate} - {formattedDeathDate}
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-[14px] h-[21px] tablet:h-[23px] desktop:h-[20px] ">
                      <div className="text-[#414141] text-[18px] tablet:text-[20] desktop:text-[20px] font-variation-customOpt18 tablet:font-variation-customOpt20 desktop:font-variation-customOpt20 font-normal">
                        {data.location ? formatTitleCase(data.location) : ""}
                      </div>
                    </div>
                    <div className="flex flex-col w-[100%] my-[40px] tablet:[31px] desktop:mt-[30px] h-auto ">
                      <p className="text-[24px] text-[#414141] font-normal font-greatVibes text-center">
                        {data?.verse
                          ? data?.verse
                          : "The song is ended but the melody lingers on."}
                      </p>

                      {/* <p className="text-[16px] text-[#414141] font-normal font-greatVibes text-center desktop:text-end">
                        Irving Berlin
                      </p> */}
                    </div>
                  </div>
                </div>
                {data && data.symbol && (
                  <>
                    <div
                      className="hidden desktop:flex tablet:flex absolute z-10  items-end w-[100%]  
                                          pl-[62%] tablet:pl-0 desktop:pl-0 tablet:w-[525px]  desktop:w-[545px] "
                    >
                      <div
                        className=" flex self-center mt-[50px]  desktop:mt-[160px]
                                              tablet:w-[90%] tablet:justify-end tablet:mt-[108px] desktop:w-[540px] desktop:pt-[0px] desktop:pl-[389px]
                                        "
                      >
                        {data.symbol === "1" && (
                          <Image
                            src={"/icon_cross.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[94.29px] w-[73.19px] tablet:h-[116px] tablet:w-[89px] desktop:h-[105px] desktop:w-[89px] "
                          />
                        )}
                        {data.symbol === "2" && (
                          <Image
                            src={"/img_plus2.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[94.29px] w-[73.19px] tablet:h-[116px] tablet:w-[89px] desktop:h-[105px] desktop:w-[89px] "
                          />
                        )}
                        {data.symbol === "3" && (
                          <Image
                            src={"/img_moon_star.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[94.29px] w-[73.19px] tablet:h-[95px] tablet:w-[89px] desktop:h-[85px] desktop:w-[89px] "
                          />
                        )}
                        {data.symbol === "4" && (
                          <Image
                            src={"/img_plus3.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[94.29px] w-[73.19px] tablet:h-[116px] tablet:w-[89px] desktop:h-[105px] desktop:w-[89px] "
                          />
                        )}
                        {data.symbol === "5" && (
                          <Image
                            src={"/img_star.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[94.29px] w-[73.19px] tablet:h-[116px] tablet:w-[89px] desktop:h-[105px] desktop:w-[89px] "
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex tablet:hidden desktop:hidden absolute z-10 self-center  justify-end w-[330px] ">
                      <div className=" flex self-center mt-[86px] mr-[10px] ">
                        {data.symbol === "1" && (
                          <Image
                            src={"/icon_cross.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[80.29px] w-[60.19px] "
                          />
                        )}
                        {data.symbol === "2" && (
                          <Image
                            src={"/img_plus2.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[80.29px] w-[60.19px] "
                          />
                        )}
                        {data.symbol === "3" && (
                          <Image
                            src={"/img_moon_star.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[65.29px] w-[60.19px] "
                          />
                        )}
                        {data.symbol === "4" && (
                          <Image
                            src={"/img_plus3.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[80.29px] w-[60.19px] "
                          />
                        )}

                        {data.symbol === "5" && (
                          <Image
                            src={"/img_star.png"}
                            alt="Slika"
                            width={1000}
                            height={1000}
                            className="h-[80.29px] w-[60.19px] "
                          />
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex w-[100%]    desktop:mt-0 desktop:w-[50%]   ">
              <div className="flex flex-col w-[100%]   desktop:items-end ">
                <div className="hidden desktop:flex h-[70px] w-full" />
                <div
                  className="flex-col 
                  pt-4
                            w-[100%] mobile:px-[21px] mobile:pb-[19px]
                              tablet:px-[22px] tablet:pb-[15px]
                             desktop:w-[517px]   desktop:pl-[22px] desktop:pr-[17px]
                            border-2 border-white shadow-custom-light-dark-box bg-gradient-to-br rounded-2xl from-[#E3E8EC] to-[#FFFFFF]"
                >
                  <div className="flex items-center h-[39px] ">
                    <div className="text-[20px] text-[#1E2125] font-variation-customOpt20 font-normal  ">
                      Osmrtnica
                    </div>
                  </div>
                  <div className="bg-[#D4D4D4] h-[1px] w-[100%] my-4 " />
                  {/* <div className="flex h-[79px] desktop:h-[71px] bg-yellow-400"> */}
                  <div className="flex desktop:pb-[20px] p-[14px]    ">
                    <p className="text-[#414141] text-[16px] font-variation-customOpt16 font-normal leading-6 hidden desktop:block tablet:block">
                      {obituary.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    <p className="text-[#414141] text-[16px] font-variation-customOpt16 font-normal leading-6 hidden mobile:block ">
                      {displayedObituary.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                  <div className="  justify-end hidden mobile:flex">
                    {shouldTruncate && (
                      <button
                        onClick={toggleObituaryText}
                        className="text-blue-500 ml-auto"
                      >
                        {showFullObituaryText ? "Zapri" : "Odpri več"}
                      </button>
                    )}
                  </div>
                </div>

                <div
                  onClick={() => {
                    set_Id("14");
                    setModal(true);
                  }}
                  className="flex cursor-pointer self-end my-[13px] pr-[7px] tablet:pr-[9px] tablet:my-6 desktop:my-6 h-[14px] tablet:h-[16px] desktop:h-[16px] items-center desktop:pr-[20px]"
                >
                  {/* {user && data.User && user.id === data.User.id && (
                    <> */}
                  <Image
                    src={"/pan.png"}
                    alt="Slika"
                    width={12}
                    height={12}
                    className=""
                  />
                  <p className="text-[12px] text-[#414141] font-variation-customOpt12 font-normal ml-[10px] ">
                    Spremeni / dopolni podatke na strani
                  </p>
                  {/* </>
                  )} */}
                </div>

                {data &&
                  (data.funeralTimestamp ||
                    (parsedEvents && parsedEvents.length > 0)) &&
                  [
                    ...(data.funeralTimestamp
                      ? [
                          {
                            type: "funeral",
                            timestamp: new Date(
                              data.funeralTimestamp
                            ).getTime(),
                            details: data,
                          },
                        ]
                      : []),
                    ...(Array.isArray(parsedEvents) ? parsedEvents : [])
                      .filter((event) => {
                        const eventDate = new Date(event.eventDate).getTime();
                        const today = new Date().getTime();
                        return eventDate + 5 * 24 * 60 * 60 * 1000 >= today;
                      })

                      .map((event) => ({
                        type: "event",
                        timestamp: new Date(event.eventDate).setHours(
                          event.eventHour || 0,
                          event.eventMinute || 0
                        ), // Include eventHour and eventMinute in the timestamp
                        details: event,
                      })),
                  ]
                    .filter((item) => {
                      const today = new Date().getTime();
                      return item.timestamp + 5 * 24 * 60 * 60 * 1000 >= today; // Exclude items older than 5 days
                    })
                    .sort((a, b) => a.timestamp - b.timestamp).length > 0 && (
                    <div
                      className="flex-col w-[100%] pt-4 
         mobile:px-[21px]  mobile:pb-[25px] 
          tablet:pb-[23px]  tablet:px-[22px]                          
          desktop:w-[517px]  desktop:pb-[14px] desktop:pl-[22px] desktop:pr-[17px]
              border-2 border-white shadow-custom-light-dark-box bg-gradient-to-br rounded-2xl from-[#E3E8EC] to-[#FFFFFF]  "
                    >
                      <div className="flex  h-[38px] items-center">
                        <div className="text-[20px] text-[#1E2125] font-variation-customOpt20 font-normal  ">
                          Dogodki
                        </div>
                      </div>
                      <div className="bg-[#D4D4D4] h-[1px] w-[100%] my-4 " />
                      {[
                        ...(data.funeralTimestamp
                          ? [
                              {
                                type: "funeral",
                                timestamp: new Date(
                                  data.funeralTimestamp
                                ).getTime(),
                                details: data,
                              },
                            ]
                          : []),
                        ...(Array.isArray(parsedEvents) ? parsedEvents : [])
                          .filter((event) => {
                            const eventDate = new Date(
                              event.eventDate
                            ).getTime();
                            const today = new Date().getTime();
                            return eventDate + 5 * 24 * 60 * 60 * 1000 >= today;
                          })

                          .map((event) => ({
                            type: "event",
                            timestamp: new Date(event.eventDate).setHours(
                              event.eventHour || 0,
                              event.eventMinute || 0
                            ), // Include eventHour and eventMinute in the timestamp
                            details: event,
                          })),
                      ]
                        .filter((item) => {
                          const today = new Date().getTime();
                          return (
                            item.timestamp + 5 * 24 * 60 * 60 * 1000 >= today
                          ); // Exclude items older than 5 days
                        })
                        .sort((a, b) => a.timestamp - b.timestamp) // Sort by earliest to latest
                        .map((item, index) => {
                          const date = new Date(item.timestamp);
                          const day = date.getDate();
                          const month = date.toLocaleString("en-US", {
                            month: "short",
                          });
                          const weekday = date
                            .toLocaleDateString("sl-SI", { weekday: "long" })
                            .replace(/^\S/, (c) => c.toLocaleUpperCase("sl"));
                          const time = `${date
                            .getHours()
                            .toString()
                            .padStart(2, "0")}:${date
                            .getMinutes()
                            .toString()
                            .padStart(2, "0")}`;

                          if (item.type === "funeral") {
                            return (
                              <div
                                key={`funeral-${index}`}
                                className="flex mobile:py-[15px] flex-row tablet:mr-0 desktop:mt-0 tablet:py-4 tablet:pl-[15.88px] tablet:pr-[60px] desktop:py-4 desktop:pl-[15.88px]"
                              >
                                <div className="w-[58px] tablet:w-[68px] desktop:w-[80px]">
                                  <div className="flex flex-col bg-[#144D82] h-[54px] w-[55px] tablet:h-[64px] tablet:w-[64px] desktop:h-[64px] desktop:w-[64px] rounded-lg justify-center items-center">
                                    <div className="text-[#FFFFFF] text-[16px] tablet:text-[24px] desktop:text-[24px] font-variation-customOpt24wght900 font-[900]">
                                      {day}
                                    </div>
                                    <div className="text-[#FFFFFF] text-[12px] tablet:text-[14px] desktop:text-[12px] font-normal">
                                      {month}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col pl-[15px]">
                                  <div className="flex items-center h-[23px]">
                                    <div className="text-[#1E2125] text-[20px] font-medium">
                                      Pogreb
                                    </div>
                                  </div>
                                  <div className="flex mt-[8px] flex-col">
                                    <p className="text-[#414141] text-[14px] font-normal leading-[16.41px]">
                                      {weekday}, {time}
                                    </p>
                                    <p className="text-[#414141] text-[14px] font-normal leading-[16.41px]">
                                      {(() => {
                                        const formattedText = `${formatTitleCase(
                                          data.funeralCemetery || ""
                                        )}, ${formatTitleCase(
                                          data.funeralLocation || ""
                                        )}`;

                                        return formattedText.length > 50
                                          ? `${formattedText.slice(0, 50)}...`
                                          : formattedText;
                                      })()}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          } else {
                            return (
                              <div
                                key={`event-${index}`}
                                className="flex mobile:py-[15px] flex-row tablet:mr-0 desktop:mt-0 tablet:py-4 tablet:pl-[15.88px] tablet:pr-[60px] desktop:py-4 desktop:pl-[15.88px]"
                              >
                                <div className="w-[58px] tablet:w-[68px] desktop:w-[80px]">
                                  <div className="flex flex-col bg-[#144D82] h-[54px] w-[55px] tablet:h-[64px] tablet:w-[64px] desktop:h-[64px] desktop:w-[64px] rounded-lg justify-center items-center">
                                    <div className="text-[#FFFFFF] text-[16px] tablet:text-[24px] desktop:text-[24px] font-variation-customOpt24wght900 font-[900]">
                                      {day}
                                    </div>
                                    <div className="text-[#FFFFFF] text-[12px] tablet:text-[14px] desktop:text-[12px] font-normal">
                                      {month}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col pl-[15px]">
                                  <div className="flex items-center h-[23px]">
                                    <div className="text-[#1E2125] text-[20px] font-medium">
                                      {item.details.eventName
                                        ? formatTitleCase(
                                            item.details.eventName
                                          )
                                        : ""}
                                    </div>
                                  </div>
                                  <div className="flex mt-[8px] flex-col">
                                    <p className="text-[#414141] text-[14px] font-normal leading-[16.41px]">
                                      {weekday}, {time}
                                    </p>
                                    <p className="text-[#414141] text-[14px] font-normal leading-[16.41px]">
                                      {item.details.eventLocation
                                        ? item.details.eventLocation.length > 50
                                          ? `${formatTitleCase(
                                              item.details.eventLocation.slice(
                                                0,
                                                50
                                              )
                                            )}...`
                                          : formatTitleCase(
                                              item.details.eventLocation
                                            )
                                        : ""}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                  )}

                {false && (
                  <div className=" flex tablet:hidden desktop:hidden my-[14px] self-end items-center pr-[7px]">
                    <Image
                      src={"/placeholder_icon.png"}
                      alt="Slika"
                      width={18}
                      height={18}
                      className=""
                    />
                    <p className="text-[12px] text-[#414141] font-variation-customOpt12 font-normal ml-[10px] ">
                      Admin te strani:
                    </p>
                    <p className="text-[12px] text-[#0A85C2] font-variation-customOpt12 font-normal ml-[5px] ">
                      Mike Jones, Kim Jones
                    </p>
                  </div>
                )}

                <div
                  className="flex-col mt-[13px]    
                          pt-4       
                          pl-[22px] pr-[18px]  
                          tablet:mt-6 w-[100%]                       
                            desktop:mt-8 desktop:w-[517px]   desktop:pl-[22px] desktop:pr-[14px]
                            border-2 border-white shadow-custom-light-dark-box 
                            bg-gradient-to-br rounded-2xl from-[#E3E8EC] to-[#FFFFFF]"
                >
                  <div
                    className="flex flex-col tablet:flex-row desktop:flex-row tablet:justify-between 
                  desktop:justify-between h-[39px] "
                  >
                    <div className="text-[20px] text-[#1E2125] font-variation-customOpt20 font-normal desktop:mt-[2px] ">
                      Prižgi svečko v spomin
                    </div>
                    <div className="hidden  tablet:flex desktop:flex text-[12px] text-[#1E2125] font-normal mt-[10px]">
                      Skupno ta teden: {data?.totalVisits}
                    </div>
                    {/* <div className="flex tablet:hidden desktop:hidden self-end text-[12px] text-[#1E2125] font-normal mt-[-10px] ">
                      Skupno ta teden: {data?.currentWeekVisits}
                    </div> */}
                  </div>
                  <div className="bg-[#D4D4D4] h-[1px]  w-[100%] mt-4 " />
                  <div className="flex  mt-[18px] tablet:mt-[15px] mb-[25px] desktop:mt-[15px] justify-between pl-0 tablet:pl-[10px] desktop:pl-[15px]">
                    <div
                      onClick={() => {
                        burnCandle();
                      }}
                      className="flex cursor-pointer h-[62px] w-[62px] items-center justify-center border-[2px] border-[#B9DFF2] rounded-full bg-white"
                    >
                      <Image
                        src={"/candle.png"}
                        alt="Slika"
                        width={36}
                        height={44}
                        className=""
                      />
                    </div>
                    <div className="flex flex-col mt-[5px]  tablet:mt-0 desktop:mt-0">
                      <div className="flex h-6 tablet:h-[40px] desktop:h-[36px] justify-end">
                        <p className="text-[#1E2125] text-[16px] font-variation-customOpt16 font-normal ">
                          Skupno svečk: {data?.candles?.[0]?.totalCandles || 0}
                        </p>
                      </div>
                      <div className="flex h-[29px] tablet:h-[40]  desktop:h-[40px]">
                        <p className="text-[#1E2125] text-[16px] font-variation-customOpt16 font-normal ">
                          Skupno obiskov: {data.currentWeekVisits}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" hidden tablet:flex desktop:flex self-end tablet:my-4 desktop:my-[22px] desktop:h-[18px] items-center desktop:pr-[20px]">
                  {false && (
                    <>
                      <Image
                        src={"/placeholder_icon.png"}
                        alt="Slika"
                        width={18}
                        height={18}
                        className=""
                      />
                      <p className="text-[12px] text-[#414141] font-variation-customOpt12 font-normal ml-[10px] ">
                        Admin te spominske strani:
                      </p>
                      <p className="text-[12px] text-[#0A85C2] font-variation-customOpt12 font-normal ml-[5px] ">
                        Mike Jones, Kim Jones
                      </p>
                    </>
                  )}
                </div>

                <div
                  className="flex-col mt-6 tablet:mt-0 
                            desktop:mt-0
                            py-4      
                            pl-[21px] pr-[28px]
                            w-[100%] tablet:px-4 
                            desktop:w-[517px] desktop:pl-[22px] desktop:pr-[17px]
                             border-2 border-white shadow-custom-light-dark-box bg-gradient-to-br rounded-2xl from-[#E3E8EC] to-[#FFFFFF]"
                >
                  <div className="flex items-center  h-[39px]">
                    <div className="text-[20px] text-[#1E2125] font-variation-customOpt20 font-normal  ">
                      Povabi družino in prijatelje
                    </div>
                  </div>
                  <div className="bg-[#D4D4D4] h-[1px] w-[100%] my-4 " />
                  <div
                    className="flex flex-col items-center
                                tablet:flex-row tablet:justify-between  tablet:px-2  tablet:py-[14px]                            
                                desktop:flex-row desktop:justify-between  desktop:pr-[7px] "
                  >
                    <div
                      onClick={() => {
                        set_Id("4");
                        setModal(true);
                      }}
                      className="flex cursor-pointer flex-row items-center h-[50px] w-[209px] justify-center bg-[#f8ecda] border-[2px] border-[#d9a800] rounded-lg "
                    >
                      <Image
                        src={"/message_icon.png"}
                        alt="Slika"
                        width={17}
                        height={15}
                        className=""
                      />
                      <div className="text-[16px] text-[#d9a800] ml-[10px] font-variation-customOpt16 font-normal">
                        Obvesti jih
                      </div>
                    </div>
                    <div className="flex mt-[20px] tablet:mt-0 desktop:mt-0 flex-row items-center h-[50px] w-[209px] justify-center bg-[#DAF3F8] border-[#00B4D8] border-[2px] rounded-lg ">
                      <Image
                        src={"/facebook_icon.png"}
                        alt="Slika"
                        width={17}
                        height={17}
                        className=""
                      />
                      <div className="text-[16px] ml-[10px] text-[#00B4D8] font-variation-customOpt16 font-normal">
                        Deli na Facebooku
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center mt-[26px]
                                tablet:mt-2 h-[42px] tablet:h-[52px] desktop:mt-[22px] desktop:h-[52px] "
                  >
                    <div className="text-[#1E2125] text-[14px] tablet:text-[16px] desktop:text-[16px] font-variation-customOpt14 font-normal leading-[16.17px] ">
                      Kopiraj povezavo do te strani
                    </div>
                    <div
                      className="mt-2 text-[#1E2125] text-nowrap text-[12px] tablet:text-[14px] desktop:text-[14px] font-variation-customOpt14 font-normal leading-[16.17px] cursor-pointer hover:underline"
                      onClick={handleCopyURL}
                      title="Click to copy URL"
                    >
                      {truncateURL(currentURL, 60)}
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    set_Id("error_report"), setModal(true);
                  }}
                  className="flex self-end mt-4 tablet:mt-6 desktop:mt-6 h-[15px] desktop:h-[16px] items-center desktop:pr-[20px]"
                >
                  <Image
                    src={"/flag.png"}
                    alt="Slika"
                    width={13}
                    height={13}
                    className=""
                  />
                  <p className="text-[12px] text-[#414141] font-variation-customOpt12 font-normal ml-[10px] ">
                    Sporoči napake
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full bg-gradient-to-br from-[#ECF0F3] to-[#F2F6F9] pb-10"> */}
      <div className="w-full pb-10 desktop:pb-14 ">
        <div className="flex flex-col w-full items-center mt-[98.33px] tablet:mt-[109.33px] desktop:mt-[123px] ">
          <div className="flex flex-col w-full items-center">
            <div className=" ">
              <div className=" relative h-[120px] w-[110.77px] mx-auto overflow-hidden rounded-xl">
                <iframe
                  src="https://giphy.com/embed/j7N0GKEWqZxNC"
                  className="h-[120px] w-[160px] ml-[-25px]"
                ></iframe>
                <div className="absolute top-0  h-[120px] w-[160px] ml-[-25px] bg-transparent z-50"></div>
              </div>
            </div>
            <din className="flex flex-col items-center mt-6 tablet:mt-9 h-[63px] ">
              <p className="text-[16px] text-[#414141] font-variation-customOpt16 font-normal ">
                Max Johnson, 15.12.2003
              </p>
              <p className="text-[16px] text-[#414141] font-variation-customOpt16 font-normal ">
                Mary Oswald Johnson, 17.12.2003
              </p>
            </din>
            <div className="flex items-center h-[14px]">
              <p className="text-[12px] text-[#1E2125] font-variation-customOpt12 font-normal ">
                Prižgi svečko v spomin
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full items-center mt-[98px] tablet:mt-[109px] desktop:mt-[140px] ">
            <div className="flex items-center justify-center h-[33px] tablet:h-[47px] desktop:h-[47px]">
              <div className="text-[#1E2125] text-[28px] tablet:text-[40px] desktop:text-[40px] font-variation-customOpt28 tablet:font-variation-customOpt40 desktop:font-variation-customOpt40 font-normal">
                Žalna knjiga
              </div>
            </div>
            <div
              className="flex items-center mt-4 h-6 cursor-pointer"
              onClick={() => {
                set_Id("20");
                setModal(true);
              }}
            >
              <p className="text-[16px] text-[#414141] font-variation-customOpt16 font-normal">
                Odpri knjigo
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full items-center mt-[48px] ">
            <UserCircles
              onTextClick={() => {
                set_Id("17");
                setModal(true);
              }}
              onCircle={() => {
                set_Id("20");
                setModal(true);
              }}
              users={data.SorrowBooks}
            />
          </div>
        </div>
      </div>
      {data?.Dedications && data?.Dedications.length > 0 ? null : (
        <div
          className="ml-auto mr-[14px] mb-10 desktop:mr-[18%] flex items-center cursor-pointer "
          onClick={() => {
            set_Id("13");
            setModal(true);
          }}
        >
          <Image
            src={"/round_add.png"}
            alt="Slika"
            width={100}
            height={100}
            className="w-[12px] mb-[2px] h-[12px] mr-[10px]"
          />
          <p className="text-[14px] text-[#414141] font-variation-customOpt12 font-normal">
            Dodaj posvetilo
          </p>
        </div>
      )}
      {data?.Photos && data?.Photos.length > 0 ? null : (
        <div
          className="ml-auto mr-[14px] desktop:mr-[18%] flex items-center cursor-pointer "
          onClick={() => {
            set_Id("6");
            setModal(true);
          }}
        >
          <Image
            src={"/round_add.png"}
            alt="Slika"
            width={100}
            height={100}
            className="w-[12px] mb-[2px] h-[12px] mr-[10px]"
          />
          <p className="text-[14px]  text-[#414141] font-variation-customOpt12 font-normal">
            Dodaj fotografije
          </p>
        </div>
      )}
    </div>
  );
};

const UserCircles = ({ onTextClick, onCircle, users }) => {
  return (
    <div className="flex flex-col tablet:flex-row desktop:flex-row ">
      <button
        onClick={onTextClick}
        className="flex cursor-pointer self-center tablet:self-start desktop:self-start items-center justify-center flex-col border-2 rounded-[100px]  border-[#FFFFFF] w-[165px] h-[64px] bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30] z-20"
      >
        <Image
          src={"/placeholder2.png"}
          alt="Slika"
          width={24}
          height={24}
          className=""
        />
        <p className="text-[16px] text-[#1E2125] font-variation-customOpt16 font-normal">
          Dodaj svoje ime
        </p>
      </button>
      <div className="hidden   tablet:flex desktop:flex  flex-row">
        {users
          ?.reverse()
          .slice(0, 7)
          .map((item, index) => (
            <Container
              item={item}
              index={index}
              key={index}
              onCircleClick={onCircle}
            />
          ))}
        {users?.length > 7 && (
          <button className="flex border-2 backdrop-blur-lg cursor-pointer bg-gradient-to-br from-[#FFFFFF80] to-[#FFFFFF30] border-[#FFFFFF] items-center justify-center w-[64px] h-[64px] rounded-full ml-[-10px]">
            <div className="text-[20px] text-[#1E2125] font-normal">
              +{users.length - 7}
            </div>
          </button>
        )}
      </div>
      <div className="flex tablet:hidden desktop:hidden justify-center mt-[48px] flex-row">
        {users
          ?.reverse()
          .slice(0, 4)
          .map((item, index) => (
            <Container
              item={item}
              index={index}
              key={index}
              onCircleClick={onCircle}
            />
          ))}

        {users?.length > 4 && (
          <button className="flex border-2 backdrop-blur-lg cursor-pointer bg-gradient-to-br from-[#FFFFFF80] to-[#FFFFFF30] border-[#FFFFFF] items-center justify-center w-[64px] h-[64px] rounded-full ml-[-10px]">
            <div className="text-[20px] text-[#1E2125] font-normal">
              +{users.length - 4}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
const Container = ({ index, item, key, onCircleClick }) => {
  const gradientClass = useMemo(() => getRandomGradientClass(), [item?.user]);
  return (
    <button
      onClick={onCircleClick}
      key={index}
      className={`flex border-2 backdrop-blur-lg cursor-pointer ${gradientClass} items-center justify-center w-[64px] h-[64px] rounded-full ml-[-10px]`}
      style={{ backgroundColor: getRandomColor() }}
    >
      <div className="text-[20px] text-[#1E2125] font-normal ">
        {(() => {
          const nameParts = item?.name?.split(" ") || [];
          const initials =
            nameParts.length > 1
              ? nameParts[0][0] + nameParts[1][0]
              : nameParts[0]?.substring(0, 2) || "";

          return initials.toUpperCase();
        })()}

        {key}
      </div>
    </button>
  );
};

const gradientStyles = [
  {
    class: "bg-gradient-to-br from-[#F1A5F380] to-[#FFFFFF30] border-[#F1A5F3]",
  },
  {
    class: "bg-gradient-to-br from-[#FFFFFF80] to-[#FFFFFF30] border-[#FFFFFF]",
  },
  {
    class: "bg-gradient-to-br from-[#A6A5F380] to-[#FFFFFF30] border-[#A6A5F3]",
  },
  {
    class: "bg-gradient-to-br from-[#ABEDED80] to-[#FFFFFF30] border-[#ABEDED]",
  },
  {
    class: "bg-gradient-to-br from-[#F3ACA580] to-[#FFFFFF30] border-[#F3ACA5]",
  },
  {
    class: "bg-gradient-to-br from-[#B9D1DF80] to-[#FFFFFF30] border-[#B9D1DF]",
  },
  {
    class: "bg-gradient-to-br from-[#B2E6E380] to-[#FFFFFF30] border-[#B2E6E3]",
  },
];
const getRandomGradientClass = () => {
  const randomIndex = Math.floor(Math.random() * gradientStyles.length);
  return gradientStyles[randomIndex].class;
};

const getRandomColor = () => {
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-yellow-200",
    "bg-teal-200",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default MemorialPageTopComp;
