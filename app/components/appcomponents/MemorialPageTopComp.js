import API_BASE_URL from "@/config/apiConfig";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("sl-SI", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div
      id="memoryPageTop"
      className="flex flex-col w-full items-center  justify-center"
    >
      <div
        className="bg-[#ecf0f3]   w-full flex justify-center 
      mt-[53px] tablet:mt-[60px]   pt-[60px] relative"
      >
        <Image
          src={"/memory_page_bg.png"}
          alt=""
          width={1280}
          height={1091}
          className="absolute top-0 left-0 w-full h-[120%]"
        />
        <div
          className="flex flex-col 
               w-[100%] px-[14px] tablet:px-0 desktop:px-0
               tablet:w-[525px]
               desktop:w-[1089px]  
               desktop:h-[auto]    
               "
        >
          <div className="flex  flex-col desktop:flex-row w-[100%] relative">
            <div className="flex  w-[100%] justify-center desktop:w-[50%] static">
              <div className="flex  flex-col w-[100%]">
                <div className="flex  flex-col w-[100%]  items-center  desktop:sticky top-[115px]">
                  <div className="hidden desktop:flex h-[30px]" />
                  <div className=" ">
                    <div
                      className="text-[64px] text-[#414141] font-greatVibes font-normal text"
                      style={{
                        textShadow:
                          "0px 1px 1px #000000, 0px 4px 4px #00000040",
                      }}
                    >
                      V spomin
                    </div>
                  </div>
                  <div
                    className="mt-[40px] flex items-center justify-center overflow-hidden rounded-[8px]"
                    style={{
                      boxShadow:
                        "-5px -5px 10px 0px #FFFFFF80, 5px 5px 10px 0px #C2C2C280, -1px -1px 2px 0px #FFFFFF",
                    }}
                  >
                    <div
                      className="bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                      style={{
                        border: "4px solid",
                        borderImageSource:
                          "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                        borderImageSlice: 1,
                      }}
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
                    <div className="flex flex-col w-[100%] mt-[40px] tablet:[31px] desktop:mt-[30px] h-auto ">
                      <p className="text-[24px] text-[#414141] font-normal font-greatVibes text-center mb-[72px]">
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
                <div className="hidden desktop:flex h-[35px] w-full" />
                <div
                  className="flex-col 
                  pt-4 w-[100%] mobile:px-[21px] mobile:pb-[19px]
                  tablet:px-[22px] tablet:pb-[15px]
                  desktop:w-[517px] desktop:pl-[22px] desktop:pr-[17px] bg-gradient-to-br rounded-2xl from-[#E3E8EC] to-[#FFFFFF]"
                  style={{
                    background:
                      "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                    boxShadow:
                      "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                  }}
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
                  className="flex cursor-pointer self-end mt-[20px] pr-[7px] tablet:pr-[9px] tablet:mt-[12px] desktop:mt-[14px] h-[14px] tablet:h-[16px] desktop:h-[16px] items-center desktop:pr-[20px] tablet:mb-[26px] mobile:mb-[26px]"
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
                  <p className="text-[12px] text-[#414141] font-variation-customOpt12 font-normal ml-[10px]">
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
                      desktop:w-[517px]  desktop:pb-[14px] desktop:pl-[22px] desktop:pr-[17px] shadow-custom-light-dark-box bg-gradient-to-br rounded-2xl from-[#E3E8EC] to-[#FFFFFF] mb-[28px]"
                      style={{
                        background:
                          "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                        boxShadow:
                          "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                      }}
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
                                          data?.Cemetry?.name || "Pokopalisce"
                                        )}, ${formatTitleCase(
                                          data?.funeralLocation || ""
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
                  className={`
                  flex-col pt-4 pl-[22px] pr-[18px] w-[100%]                       
                  desktop:w-[517px]   desktop:pl-[22px] desktop:pr-[14px]
                  bg-gradient-to-br rounded-2xl from-[#E3E8EC] to-[#FFFFFF]
                  ${
                    parsedEvents.length === 90
                      ? "desktop:mt-2"
                      : "desktop:mt-[24px]"
                  }
                  `}
                  style={{
                    background:
                      "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                    boxShadow:
                      "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                  }}
                >
                  <div
                    className="flex flex-col tablet:flex-row desktop:flex-row tablet:justify-between 
                  desktop:justify-between h-[39px] "
                  >
                    <div className="text-[20px] text-[#1E2125] font-variation-customOpt20 font-normal desktop:mt-[2px] ">
                      Prižgi svečko v spomin
                    </div>
                    <div className="hidden  tablet:flex desktop:flex text-[12px] text-[#1E2125] font-normal mt-[10px]">
                      Skupno ta teden: {data?.currentWeekVisits}
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
                      className="flex cursor-pointer h-[62px] w-[62px] items-center justify-center border-[#B9DFF2] rounded-full"
                      style={{
                        background:
                          "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                        boxShadow:
                          "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                      }}
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
                          Skupno obiskov: {data.totalVisits}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex self-end ${
                    parsedEvents.length === 90
                      ? "tablet:mt-2 desktop:mt-[10px] mobile:mt-[10px]"
                      : "tablet:mt-4 desktop:mt-[28px] mobile:mt-[28px]"
                  } desktop:h-[0px] items-center desktop:pr-[20px]`}
                >
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
                  className="flex-col  tablet:mt-0 
                            desktop:mt-0
                            py-4      
                            pl-[21px] pr-[28px]
                            w-[100%] tablet:px-4 
                            desktop:w-[517px] desktop:pl-[22px] desktop:pr-[17px] shadow-custom-light-dark-box bg-gradient-to-br rounded-2xl from-[#E3E8EC] to-[#FFFFFF]"
                  style={{
                    background:
                      "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                    boxShadow:
                      "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                  }}
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

                {/* <div
                  className="flex-col
                            mt-[24px]
                            mobile:mt-[28px]
                            py-4      
                            pl-[21px] pr-[28px]
                            w-[100%] tablet:px-4 
                            desktop:w-[517px] desktop:pl-[22px] desktop:pr-[17px]
                             shadow-custom-light-dark-box bg-gradient-to-br rounded-2xl from-[#E3E8EC] to-[#FFFFFF]"
                  style={{
                    background:
                      "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                    boxShadow:
                      "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                  }}
                >
                  <div className="text-[20px] text-[#1E2125] font-variation-customOpt20 font-normal  w-full">
                    QR koda do te strani
                  </div>
                  <div className="flex items-end justify-end gap-[10px]">
                    <span className="text-[16px] text-[#414141] font-variation-customOpt12 font-normal">
                      Klikni za povečavo
                    </span>
                    <Image
                      src={"/qr_demo.png"}
                      alt="Slika"
                      width={72}
                      height={72}
                      className=""
                    />
                  </div>
                </div> */}

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
      <div className="w-full pb-10">
        <div className="flex flex-col w-full items-center mt-[40px] tablet:mt-[45px] desktop:mt-[60px] ">
          {/* <div className="flex flex-col w-full items-center">
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
          </div> */}

          <div className="flex flex-col w-full items-center mt-[40px] tablet:mt-[60px] desktop:mt-[70px] ">
            <div className="flex items-center justify-center h-[33px] tablet:h-[47px] desktop:h-[47px] relative">
              <div className="text-[#1E2125] text-[28px] tablet:text-[40px] desktop:text-[40px] font-variation-customOpt28 tablet:font-variation-customOpt40 desktop:font-variation-customOpt40 font-normal">
                Žalna knjiga
              </div>
              {/* <div className="text-[#0A85C2] text-[24px] font-[400] absolute top-[-3px] right-[-38px] text-end">
                22
              </div> */}
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
          {data?.Dedications && data?.Dedications.length > 0 ? null : (
            <div
              className="ml-auto mr-[14px] mb-5 desktop:mr-[18%] flex items-center cursor-pointer "
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
      </div>
      {data?.Dedications && data?.Dedications?.length > 0 && (
        <div className="w-full pb-[150px]">
          <div className="flex flex-col w-full items-center">
            <div className="flex flex-col w-full items-center mt-[100px] ">
              <div className="flex items-center justify-center h-[33px] tablet:h-[47px] desktop:h-[47px] relative mobile:mb-[16px]">
                <div className="text-[#1E2125] text-[28px] tablet:text-[40px] desktop:text-[40px] font-variation-customOpt28 tablet:font-variation-customOpt40 desktop:font-variation-customOpt40 font-normal">
                  Posvetilo
                </div>
                <div className="text-[#0A85C2] text-[24px] font-[400] absolute top-[-3px] right-[-38px]">
                  22
                </div>
              </div>
              <div
                className="flex items-center mt-4 h-6 cursor-pointer"
                onClick={() => {
                  set_Id("13");
                  setModal(true);
                }}
              >
                <p className="text-[16px] text-[#414141] font-variation-customOpt16 font-normal text-center mobile:w-[306px] mobile:mx-auto">
                  Delite zgodbe, čarobne trenutke, morda biografijo, zadnji
                  pozdrav
                </p>
              </div>
            </div>

            <div
              className="mt-[30px] w-[720px] mobile:w-[321px] mx-auto flex items-center justify-end cursor-pointer mb-[18px] px-[10px]"
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

            <ContentSlider data={data.Dedications} />
          </div>
        </div>
      )}
      {data?.Photos && data?.Photos?.length > 0 && (
        <div className="w-full pb-[150px]">
          <div className="flex flex-col w-full items-center">
            <div className="flex items-center justify-center h-[33px] tablet:h-[47px] desktop:h-[47px] relative">
              <div className="text-[#1E2125] text-[28px] tablet:text-[40px] desktop:text-[40px] font-variation-customOpt28 tablet:font-variation-customOpt40 desktop:font-variation-customOpt40 font-normal">
                Nepozabni trenutki
              </div>
              <div className="text-[#0A85C2] text-[24px] font-[400] absolute top-[-3px] right-[-38px]">
                22
              </div>
            </div>

            <button
              className="flex cursor-pointer self-center tablet:self-start desktop:self-start items-center justify-center flex-col gap-[2px] border-2 rounded-[4px] border-[#FFFFFF] w-[165px] h-[60px] bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30] z-20 mx-auto mt-[47px] tablet:hidden mobile:hidden mb-[30px]"
              style={{
                boxShadow: "3px 3px 18px 0px #00000040",
              }}
              onClick={() => {
                set_Id("6");
                setModal(true);
              }}
            >
              <Image
                src={"/memory_page_plus_icon.png"}
                alt="Slika"
                width={20}
                height={20}
                className=""
              />
              <p className="text-[16px] text-[#1E2125] font-variation-customOpt16 font-normal">
                Dodaj sliko
              </p>
            </button>
            <button
              onClick={() => {
                set_Id("6");
                setModal(true);
              }}
              className="flex gap-[8px] items-center justify-end w-[1024px] tablet:w-[610px] mobile:w-[321px] text-end desktop:hidden text-[#414141] text-[14px] font-[400] mt-3 mb-[20px]"
            >
              <Image
                src={"/memory_page_plus_icon.png"}
                alt="Slika"
                width={16}
                height={16}
                className=""
              />
              Dodaj Sliko
            </button>

            <div className="w-full  space-y-[30px] px-[15px] mobile:space-y-[14px]">
              <div className="hidden desktop:flex overflow-x-auto scrollbar-hide gap-[25px] w-[1024px]  flex-nowrap tablet:w-[800px] mobile:w-[406px] mobile:h-[125px] mx-auto mobile:gap-[14px]">
                {data?.Photos?.length > 0 &&
                  data?.Photos.map((item, index) => (
                    <div
                      key={index}
                      className="p-[4px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] rounded-[10px] shrink-0"
                      style={{
                        boxShadow:
                          "-5px -5px 10px 0px #FFFFFF80, 5px 5px 10px 0px #C2C2C280, -1px -1px 2px 0px #FFFFFF",
                      }}
                    >
                      <Image
                        src={`${API_BASE_URL}/${item.fileUrl}`}
                        alt="Slika"
                        width={200}
                        height={200}
                        className="w-[175px] mobile:w-[125px] mobile:h-[125px] h-[175px] rounded-[8px] object-cover object-center"
                      />
                    </div>
                  ))}
              </div>
              <div className="hidden overflow-x-auto scrollbar-hide tablet:flex mobile:flex gap-[25px] w-[1024px] mobile:h-[125px] tablet:w-[800px] mobile:w-[406px] mobile:gap-[14px] mx-auto">
                {data?.Photos?.length > 0 &&
                  data?.Photos.map((item, index) => (
                    <div
                      key={index}
                      className="p-[4px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] rounded-[10px] shrink-0"
                      style={{
                        boxShadow:
                          "-5px -5px 10px 0px #FFFFFF80, 5px 5px 10px 0px #C2C2C280, -1px -1px 2px 0px #FFFFFF",
                      }}
                    >
                      <Image
                        src={`${API_BASE_URL}/${item.fileUrl}`}
                        alt="Slika"
                        width={200}
                        height={200}
                        className="w-[175px] mobile:w-[125px] mobile:h-[125px] h-[175px] rounded-[8px] object-cover object-center"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-[1024px] tablet:w-[678.78px]   mobile:w-[341px] h-auto  flex flex-col items-center ">
        <div className="flex flex-row h-[47px] items-center relative">
          <div className="font-variation-customOpt40 text-[40px] leading-[46.88px] mr-[8px] mobile:text-[28px] mobile:leading-[32.9px] mobile:font-variation-customOpt28 text-[#1E2125] ">
            Sožalja
          </div>
          {/* <div className="text-[#0A85C2] text-[24px] font-[400] absolute top-[-3px] right-[-29px]">
            22
          </div> */}
        </div>

        <button
          className="flex cursor-pointer self-center tablet:self-start desktop:self-start items-center justify-center flex-col gap-[2px] border-2 rounded-[4px] border-[#FFFFFF] w-[165px] h-[60px] bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30] z-20 mx-auto mt-[47px] mb-[48px] tablet:hidden mobile:hidden"
          style={{
            boxShadow: "3px 3px 18px 0px #00000040",
          }}
          onClick={() => {
            set_Id("sayings_condolence");
            setModal(true);
          }}
        >
          <Image
            src={"/memory_page_plus_icon.png"}
            alt="Slika"
            width={20}
            height={20}
            className=""
          />
          <p className="text-[16px] text-[#1E2125] font-variation-customOpt16 font-normal">
            Dodaj Sožalje
          </p>
        </button>

        <button
          onClick={() => {
            set_Id("sayings_condolence");
            setModal(true);
          }}
          className="flex gap-[8px] items-center justify-end w-[1024px] tablet:w-[610px] mobile:w-[321px] text-end desktop:hidden text-[#414141] text-[14px] font-[400] mt-3 mb-[20px]"
        >
          <Image
            src={"/memory_page_plus_icon.png"}
            alt="Slika"
            width={16}
            height={16}
            className=""
          />
          Dodaj sožalje
        </button>

        <div className="w-[824px] tablet:w-[629px] mobile:w-[321px] mobile:grid-cols-1 mx-auto grid grid-cols-2 gap-[24px]">
          <div className="flex flex-col gap-[27px]">
            {data?.Condolences &&
              data?.Condolences.length > 0 &&
              data.Condolences.filter((_, index) => index % 2 === 0).map(
                (item, index) => (
                  <div
                    className="bg-white rounded-[3px] text-[16px] text-[#414141]"
                    style={{
                      boxShadow: "5px 5px 10px 0px #C2C2C280",
                    }}
                    key={index}
                  >
                    <div className="px-[17px] pt-[14px] pb-[28px]">
                      {item.message}
                    </div>
                    <div className="bg-[#E1E7E8] text-[#6D778E] px-[16px] py-[4px] flex justify-between">
                      <div className="flex items-end gap-[4px]">
                        <span className="text-[16px] leading-none">
                          {item.name}
                        </span>
                        <span className="text-[12px] leading-none">
                          {item.relation}
                        </span>
                      </div>
                      <span className="text-[12px] leading-none">
                        {formatDate(item?.createdTimestamp)}
                      </span>
                    </div>
                  </div>
                )
              )}
          </div>
          <div className="flex flex-col gap-[27px]">
            {data?.Condolences &&
              data?.Condolences.length > 0 &&
              data.Condolences.filter((_, index) => index % 2 !== 0).map(
                (item, index) => (
                  <div
                    className="bg-white rounded-[3px] text-[16px] text-[#414141]"
                    style={{
                      boxShadow: "5px 5px 10px 0px #C2C2C280",
                    }}
                    key={index}
                  >
                    <div className="px-[17px] pt-[14px] pb-[28px]">
                      {item.message}
                    </div>
                    <div className="bg-[#E1E7E8] text-[#6D778E] px-[16px] py-[4px] flex justify-between">
                      <div className="flex items-end gap-[4px]">
                        <span className="text-[16px] leading-none">
                          {item.name}
                        </span>
                        <span className="text-[12px] leading-none">
                          {item.relation}
                        </span>
                      </div>
                      <span className="text-[12px] leading-none">
                        {formatDate(item?.createdTimestamp)}
                      </span>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
        <Image
          src={"/memory_down.png"}
          alt="Slika"
          width={74}
          height={74}
          className="mt-[24px] mb-[71px] mx-auto"
        />
      </div>
    </div>
  );
};

const UserCircles = ({ onTextClick, onCircle, users }) => {
  return (
    <div className="flex flex-col tablet:flex-row desktop:flex-row ">
      <button
        onClick={onTextClick}
        className="flex cursor-pointer self-center tablet:self-start desktop:self-start items-center justify-center flex-col gap-[2px] border-2 rounded-[100px] border-[#FFFFFF] w-[165px] h-[60px] bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30] z-20"
      >
        <Image
          src={"/memory_page_plus_icon.png"}
          alt="Slika"
          width={20}
          height={20}
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
// Deterministic hash function (simple but works for this use case)
const getConsistentIndex = (input, length) => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % length;
};

// Use this for gradients
const getConsistentGradientClass = (input) => {
  const index = getConsistentIndex(input, gradientStyles.length);
  return gradientStyles[index].class;
};

const Container = ({ index, item, key, onCircleClick }) => {
  const userIdentifier = item?.createdTimestamp || "default";
  const gradientClass = useMemo(
    () => getConsistentGradientClass(userIdentifier),
    [userIdentifier]
  );

  return (
    <button
      onClick={onCircleClick}
      key={index}
      className={`flex border-2 backdrop-blur-lg cursor-pointer ${gradientClass}  items-center justify-center w-[64px] h-[64px] rounded-full ml-[-10px]`}
    >
      <div className="text-[20px] text-[#1E2125] font-normal">
        {(() => {
          const nameParts = item?.name?.split(" ") || [];
          const initials =
            nameParts.length > 1
              ? nameParts[0][0] + nameParts[1][0]
              : nameParts[0]?.substring(0, 1) || "";

          return initials.toUpperCase();
        })()}
      </div>
    </button>
  );
};
const gradientStyles = [
  {
    class: "bg-gradient-to-br from-[#F1A5F380] to-[#FFFFFF30] border-[#F1A5F3]",
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

const ContentSlider = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };
  const currentDedication = data[activeIndex];
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("sl-SI", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  const [showFullDedicationText, setShowFullDedicationText] = useState(false);

  const toggleDedicationText = () => {
    setShowFullDedicationText((prev) => !prev);
  };

  const characterLimit = 300;
  const message = currentDedication?.message || "";
  const [shouldTruncate, setShouldTruncate] = useState(false);
  const messageRef = useRef(null);
  const maxHeight = 198;

  useEffect(() => {
    if (messageRef.current && message.length > characterLimit) {
      const height = messageRef.current.scrollHeight;
      if (height > maxHeight) {
        setShouldTruncate(true);
      } else {
        setShouldTruncate(false); // reset if height is OK
      }
    } else {
      setShouldTruncate(false); // reset if under char limit
    }
  }, [currentDedication]);

  return (
    <div className="flex h-auto object-cover w-full items-center mt-[10px] gap-[38px] justify-center relative px-[10px]">
      <Image
        onClick={handlePrev}
        src={"/memory_slider_left.png"}
        alt="Left"
        width={74}
        height={74}
        className="cursor-pointer tablet:absolute tablet:z-10 tablet:left-0 tablet:top-1/2 tablet:-translate-y-1/2 mobile:hidden"
      />
      <div className="flex flex-col gap-[10px] w-[720px] mobile:w-[321px] min-h-[370px] h-auto mobile:h-auto overflow-hidden rounded-[3px] relative pt-[38px] mobile:py-[40px] mobile:px-[35px]">
        <Image
          src={"/memory_paper_slider.jpg"}
          alt="Background"
          width={720}
          height={370}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="w-[522px] h-auto mobile:w-[255px] relative mx-auto">
          <div className="flex justify-between items-center gap-[10px]">
            <h3
              className="text-[40px] mobile:text-[24px] font-greatVibes font-normal text-[#1E2125]"
              style={{
                textShadow: "0px 1px 1px #000000, 0px 4px 4px #00000040",
              }}
            >
              {currentDedication?.title}
            </h3>
            <div className="flex flex-col items-end justify-end gap-[7px] ">
              <p className="text-[14px] leading-[14px] font-variation-customOpt16 font-normal text-[#36556CE5]">
                {currentDedication?.name}
              </p>
              <p className="text-[12px] leading-[12px] font-variation-customOpt16 font-normal text-[#36556CE5]">
                {formatDate(currentDedication?.createdTimestamp)}
              </p>
            </div>
          </div>
          <p
            ref={messageRef}
            className="text-[16px] leading-[24px] font-normal text-[#1E2125] mt-[19px]"
            style={{
              background:
                "linear-gradient(180deg, #414141 76.56%, rgba(166, 166, 167, 0.1) 96.35%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              maxHeight:
                !showFullDedicationText && shouldTruncate
                  ? `${maxHeight}px`
                  : "none",
              overflow: "hidden",
            }}
          >
            {message.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>

          {shouldTruncate && !showFullDedicationText && (
            <p
              onClick={toggleDedicationText}
              className="text-end text-[12px] leading-[100%] font-regular text-[#36556CB2]  mt-[26px]"
            >
              Odpri več
            </p>
          )}

          {shouldTruncate && showFullDedicationText && (
            <p
              onClick={toggleDedicationText}
              className="text-end text-[12px] leading-[100%] font-regular text-[#36556CB2]  mt-[26px]"
            >
              Zapri
            </p>
          )}
        </div>
      </div>
      <Image
        onClick={handleNext}
        src={"/memory_slider_right.png"}
        alt="Right"
        width={74}
        height={74}
        className="cursor-pointer tablet:absolute tablet:z-10 tablet:right-0 tablet:top-1/2 tablet:-translate-y-1/2 mobile:hidden"
      />
    </div>
  );
};

export default MemorialPageTopComp;
