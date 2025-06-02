"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";
import obituaryService from "@/services/obituary-service";
import { useRouter } from "next/navigation";
const FuneralInFewDays = ({ data }) => {
  const [startDateFunerals, setStartDateFunerals] = useState([]);
  const [endDateFunerals, setEndDateFunerals] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const [city, setCity] = useState(data?.city);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const formatStartDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}T00:00:00`;
  };

  const formatEndDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}T23:59:59.999`;
  };

  const [startDate, setStartDate] = useState(formatStartDate(today));
  const [endDate, setEndDate] = useState(
    isMobile ? formatEndDate(today) : formatEndDate(tomorrow)
  );

  const nextDates = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(newStartDate.getDate() + 1);

    // Get today's date and calculate max allowed date (7 days ahead)
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7);
    maxDate.setHours(0, 0, 0, 0);

    // Prevent going beyond the max date
    if (newStartDate > maxDate) return;

    if (isMobile) {
      setStartDate(formatStartDate(newStartDate));
      setEndDate(formatEndDate(newStartDate));
      return;
    }

    const newEndDate = new Date(endDate);
    newEndDate.setDate(newEndDate.getDate() + 1);

    if (newEndDate > maxDate) return;

    setStartDate(formatStartDate(newStartDate));
    setEndDate(formatEndDate(newEndDate));
  };

  const prevDates = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(newStartDate.getDate() - 1);

    // Get today's date and reset its time to midnight for comparison
    const minDate = new Date();
    minDate.setHours(0, 0, 0, 0);

    // Set the maximum allowed past date (7 days ago)
    const maxPastDate = new Date();
    maxPastDate.setDate(maxPastDate.getDate() - 7);
    maxPastDate.setHours(0, 0, 0, 0);

    // Prevent going before the last 7 days
    if (newStartDate < maxPastDate) return;

    if (isMobile) {
      setStartDate(formatStartDate(newStartDate));
      setEndDate(formatEndDate(newStartDate));
      return;
    }

    const newEndDate = new Date(endDate);
    newEndDate.setDate(newEndDate.getDate() - 1);

    if (newEndDate < maxPastDate) return;

    setStartDate(formatStartDate(newStartDate));
    setEndDate(formatEndDate(newEndDate));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchObituary();
  }, [startDate]);
  const fetchObituary = async () => {
    try {
      const queryParams = {};
      if (city) {
        queryParams.city = city;
      }

      queryParams.startDate = startDate;

      queryParams.endDate = endDate;
      const response = await obituaryService.getFunerals(queryParams);

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }
      console.log(response.obituaries, "----------------");
      splitFunerals(response.obituaries, startDate, endDate);
    } catch (err) {
      console.error("Error fetching obituary:", err);
      toast.error(err.message || "Failed to fetch obituary.");
    }
  };

  const splitFunerals = (data, startDate, endDate) => {
    let startFunerals = [];
    let endFunerals = [];

    // Convert startDate to range (00:00:00 - 23:59:59)
    const startOfDay = new Date(startDate);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(startDate);
    endOfDay.setHours(23, 59, 59, 999);

    // Convert endDate to range (00:00:00 - 23:59:59)
    const startOfEndDay = new Date(endDate);
    startOfEndDay.setHours(0, 0, 0, 0);

    const endOfEndDay = new Date(endDate);
    endOfEndDay.setHours(23, 59, 59, 999);

    data.forEach((funeral) => {
      const funeralTimestamp = new Date(funeral.funeralTimestamp);

      // Check if funeral timestamp falls within startDate range
      if (funeralTimestamp >= startOfDay && funeralTimestamp <= endOfDay) {
        startFunerals.push(funeral);
      }

      // Check if funeral timestamp falls within endDate range
      if (
        funeralTimestamp >= startOfEndDay &&
        funeralTimestamp <= endOfEndDay
      ) {
        endFunerals.push(funeral);
      }
    });

    console.log(startFunerals, "------ start funerals");
    console.log(endFunerals, "------ end funerals");

    setStartDateFunerals(startFunerals);
    setEndDateFunerals(endFunerals);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("sl-SI", {
      weekday: "long",
      month: "2-digit",
      day: "2-digit",
    });
  };
  const list1 = [
    {
      time: "11:00",
      name: "Elizabeta Škorjanc",
    },
    {
      time: "13:00",
      name: "Marija Špes",
    },
    {
      time: "15:00",
      name: "Tatjana Štruc",
    },
    {
      time: "15:30",
      name: "Alojz Lavbič",
    },
    {
      time: "11:00",
      name: "Elizabeta Škorjanc",
    },
    {
      time: "13:00",
      name: "Marija Špes",
    },
    {
      time: "15:00",
      name: "Tatjana Štruc",
    },
    {
      time: "15:30",
      name: "Alojz Lavbič",
    },
  ];
  const list2 = [
    {
      time: "09:00",
      name: "Franc Novak",
    },
    {
      time: "11:00",
      name: "Ivan Toplišek",
    },
    {
      time: "12:00",
      name: "Franja Venc",
    },
    {
      time: "15:30",
      name: "Lucija Lokan",
    },
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center mb-5 mobile:bg-[#DAEBF140]">
      <div className="flex w-full h-auto mobile:self-center tablet:h-[729px] mobile:w-[360px] mobile:h-auto flex-col items-center tablet:bg-[#DAEBF140] tablet:border-t-[1px] tablet:border-b-[1px] tablet:border-b-[#D4D4D4] tablet:border-t-[#D4D4D4]">
        <div className="flex flex-col desktop:w-[1087px] desktop:h-[159px] desktop:pl-[85px] tablet:w-[598px] tablet:h-[626px] tablet:mt-[45px] mobile:w-[321px] mobile:h-auto mobile:mt-[28px]">
          {/*Header text*/}
          <div className="flex h-12 items-center desktop:pt-[53.65px] desktop:pb-[30px] desktop:pl-[2px] tablet:pr-[21px]">
            <div className="text-[#1E2125] text-[40px] font-variation-customOpt40 font-normal mobile:text-[28px] mobile:font-variation-customOpt28">
              Pogrebi v prihodnjih dneh
            </div>
          </div>

          {/*Input field container for desktop*/}
          <div className="flex flex-row h-12 mt-[30px] tablet:hidden mobile:hidden">
            <SearchFunc label={"Išči po imenu"} />
            <div className="w-6" />
            <SearchFunc label={"Išči po pokopališču"} />
          </div>

          <div className="flex w-[598px] h-[48px] mobile:w-[321px] tablet:block desktop:hidden mt-[38px] mobile:mt-[28px]">
            <SearchFunc label={"Išči po imenu"} />
          </div>

          {/*Torek Mobile container*/}
          <div className=" w-[598px]  desktop:hidden mobile:w-[321px] bg-black mt-[48px] mobile:mt-[32px]">
            <div className="bg-[#CAF0F8] min-h-[445px]  h-auto">
              <div className="h-[89px] w-full flex items-center border-t-[1px] justify-between">
                <div className="flex h-6 items-center pl-[31px] mobile:pl-[15px]">
                  <div className="text-[#000000] text-[28px] font-variation-customOpt28 font-light mobile:text-[24px] mobile:truncate">
                    {formatDate(startDate)}
                  </div>
                </div>

                <div className="flex w-[152px] h-[48px] mobile:w-[90px] mobile:h-[41px] justify-center items-center mr-7 mobile:mr-[7px]">
                  <button
                    onClick={() => prevDates()}
                    className="hidden mobile:flex tablet:flex w-[48px] h-[48px] mobile:w-[36px] mobile:h-[36px] rounded-lg text-black justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                  >
                    <img
                      src="/icon_left.png"
                      alt="imgPrevious"
                      className=" w-[8.43px] h-[13.79px]"
                    />
                  </button>

                  <button
                    onClick={() => nextDates()}
                    className="hidden mobile:flex tablet:flex ml-[52px] w-[48px] h-[48px] mobile:w-[36px] mobile:ml-[18px] mobile:h-[36px] rounded-lg text-black justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                  >
                    <img
                      src="/icon_right.png"
                      alt="imgPrevious"
                      className=" w-[8.43px] h-[13.79px]"
                    />
                  </button>
                </div>
              </div>

              {startDateFunerals && startDateFunerals.length > 0 ? (
                startDateFunerals.map((item, index) => (
                  <ListView item={item} key={index} />
                ))
              ) : (
                <div className="flex   items-center justify-center py-5 ">
                  <p className="text-gray-900    font-normal">
                    Na ta dan ni pogrebov
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/*Desktop View */}
        <div className="flex flex-row h-auto desktop:w-[1090px] desktop:pt-[53px] tablet:h-[451px] tablet:hidden mobile:hidden ">
          <div className="mt-[29px]">
            <Image
              src="/left_gray_icon.png"
              alt="Slika"
              width={25}
              height={59}
              className="cursor-pointer	"
              onClick={() => prevDates()}
            />
          </div>
          <div className="ml-[62px] w-[420px]  flex flex-col ">
            <div className="  bg-[#CAF0F8] min-h-[445px] flex-1 ">
              <div className="h-[89px] w-full flex items-center  border-b-[1px]    border-[#C3C6C8]  ">
                <div className="flex h-6 items-center pl-[27px] ">
                  <div className="text-[#000000] text-[28px] font-variation-customOpt28 font-light">
                    {formatDate(startDate)}
                  </div>
                </div>
              </div>
              {startDateFunerals && startDateFunerals.length > 0 ? (
                startDateFunerals.map((item, index) => (
                  <ListView item={item} key={index} />
                ))
              ) : (
                <div className="flex   items-center justify-center py-5 ">
                  <p className="text-gray-900    font-normal">
                    Na ta dan ni pogrebov
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-[420px]  bg-[#FFE5B4] ml-[70px] flex flex-col">
            <div className="  bg-transparent min-h-[445px]  flex-1">
              <div className="h-[89px] w-full flex items-center border-b-[1px]    border-[#C3C6C8] ">
                <div className="flex h-6 items-center pl-[27px] ">
                  <div className="text-[#000000] text-[28px] font-variation-customOpt28 font-light">
                    {formatDate(endDate)}
                  </div>
                </div>
              </div>
              {endDateFunerals && endDateFunerals.length > 0 ? (
                endDateFunerals.map((item, index) => (
                  <ListView item={item} key={index} />
                ))
              ) : (
                <div className="flex   items-center justify-center  py-5">
                  <p className="text-gray-900    font-normal">
                    Na ta dan ni pogrebov
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="ml-[69px] mt-[29px]">
            <Image
              src="/right_gray_icon.png"
              alt="Slika"
              width={25}
              height={59}
              className="cursor-pointer	"
              onClick={() => nextDates()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const ListView = ({ item, key }) => {
  const router = useRouter();
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("sl-SI", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleClick = () => {
    const responseDeathDate = new Date(item.deathDate);
    const deathDateFormatted = `${responseDeathDate
      .getDate()
      .toString()
      .padStart(2, "0")}${(responseDeathDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}${responseDeathDate.getFullYear().toString().slice(2)}`;

    router.push(
      `/memorypage/${item.id}/${item.name}_${item.sirName}_${deathDateFormatted}`
    );
  };
  return (
    <div
      className="h-[89px] w-full flex items-center justify-between px-[20px] tablet:px-[21px] border-b-[1px]    border-[#C3C6C8] "
      onClick={() => handleClick()}
    >
      <div className="flex h-6 items-center p-[1px] ">
        <p className="text-[#333333] mobile:ml-[-4px] text-[24px] font-variation-customOpt24 font-light">
          {formatDate(item?.funeralTimestamp)}
        </p>
        <p className="ml-[22px] mobile:ml-[16px] text-[#333333] text-[18px] font-light">
          {item?.name} {item?.sirName}
        </p>
      </div>
      <div className="flex h-6 w-6 mobile:mr-[-5px] items-center justify-center">
        <Image
          src="/next_img.png"
          alt="Slika"
          width={6}
          height={9}
          className=""
        />
      </div>
    </div>
  );
};
const SearchFunc = ({ label }) => {
  return (
    <div className="flex w-[444px] h-full tablet:w-[598px] mobile:w-[321px] mobile:h-[48px] justify-between">
      <div>
        <input
          type="email"
          placeholder={label}
          className="text-[16px] leading-[24px] w-[380px] h-[100%] mobile:w-[257px] tablet:w-[490px] border-[1px] border-[#7C7C7C] rounded-lg pl-[20.8px] pr-[20.8px] tablet:pl-[22.8px] text-[#7C7C7C] bg-white font-variation-customOpt16"
        />
      </div>
      <div
        className="hidden mobile:flex desktop:flex tablet:flex justify-center w-12 tablet:w-[84px] tablet:mr-[8px] items-center h-full desktop:aspect-square
                        shadow-custom-light-dark-box 
                        rounded-lg bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-[#414141] hidden desktop:block tablet:block mobile:block" />
      </div>
    </div>
  );
};

export default FuneralInFewDays;
