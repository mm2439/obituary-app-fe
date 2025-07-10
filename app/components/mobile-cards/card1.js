"use client";
import API_BASE_URL from "@/config/apiConfig";
import React, { useRef } from "react";

const Card1 = ({ data, cardRefs, index }) => {
  const formatDate = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";
    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formatYear = (timestamp) => {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "";
    return `${date.getFullYear()}`;
  };

  const formatDayAndTimeSlovenian = (timestamp) => {
    const date = new Date(timestamp);
    const dayName = date.toLocaleDateString("sl-SI", { weekday: "long" });
    const time = date.toLocaleTimeString("sl-SI", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { dayName, time };
  };

  const { dayName, time } = formatDayAndTimeSlovenian(data?.funeralTimestamp);

  return (
    <>
      <div
        ref={(el) => {
          if (cardRefs?.current) {
            cardRefs.current[index] = el;
          }
        }}
        className="w-[360px] flex items-center justify-start bg-[#3b3b3b] h-[720px]  max-h-[720px] shadow-md overflow-hidden text-white"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        <div>
          <div className="ml-[35px] mt-[63.35px]">
            <div className="w-[138px]  bg-[#3b3b3b] rounded-t-full overflow-hidden border-[6px]  border-[#3b3b3b] shadow-2xl flex items-start justify-center pt-1">
              <img
                src={`${API_BASE_URL}/${data?.image}`}
                className="w-auto max-h-[188px]"
              />
            </div>

            <br />
            <h2 className="text-[#fff] font-greatVibes text-[36px] font-normal leading-[30px] tracking-[0px]">
              V spomin
            </h2>

            <div className="mt-4">
              <h5 className="text-[#D89B1C] text-[42px] font-[500]">
                {data?.name}
              </h5>
              <h5 className="text-[#D89B1C] translate-y-[-14px] text-[42px] font-[500]">
                {data?.sirName}
              </h5>

              <p className="text-[24px]">
                {formatYear(data?.birthDate)} - {formatYear(data?.deathDate)}
              </p>
            </div>

            <div className="mt-[163px]">
              <h1 className="text-[#D89B1C] text-[24px] font-semibold">
                {dayName} ob {time}
              </h1>
              <p className="mt-3 pb-10">{formatDate(data?.funeralTimestamp)}</p>
              {data?.funeralLocation && data?.Cemetry?.funeralCemetery && (
                <p>
                  {data?.Cemetry?.funeralCemetery} v {data?.funeralLocation}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
