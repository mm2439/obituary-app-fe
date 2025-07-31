import {
  formatDayAndTimeSlovenian,
  formatToDottedDate,
} from "@/utils/dateUtils";
import React from "react";

const Card2 = ({ data = {}, cardRefs, index }) => {
  return (
    <div
      ref={(el) => {
        if (cardRefs?.current) {
          cardRefs.current[index] = el;
        }
      }}
      className="w-[360px] relative bg-[#E9E9E9] h-[720px] flex items-center justify-center shadow-md overflow-hidden text-white"
      style={{ fontFamily: "Roboto Flex, sans-serif !important" }}
    >
      <div className="absolute top-0 left-0 opacity-[0.4] w-full h-full bg-[#E9E9E9]"></div>
      <div className="inner-container py-3 w-[308px] border-[3px] border-[#78600B] m-[25px]">
        <div className="img-container flex flex-col items-center mt-[75px]">
          <img src="/mobile-cards/object-1.png" alt="Mario" />

          <div className="text-containe mt-[60px]">
            <div className="img-container py-5 flex flex-col align-middle">
              <h2 className="text-[#78600B] text-[32px] font-normal text-center leading-[46px]">
                {data?.name} {data?.sirName}
              </h2>
              <p
                style={{ letterSpacing: "0px" }}
                className="text-[#78600B] mx-auto mt-[16px] text-[18px] font-light"
              >
                {formatToDottedDate(data?.birthDate)} -{" "}
                {formatToDottedDate(data?.deathDate)}
              </p>
            </div>
          </div>

          <div className="name-year-container text-[#F8EDE3] mt-[140px]">
            <h3 className="text-[#78600B] text-center text-[24px] font-semibold">
              {formatToDottedDate(data?.funeralTimestamp)}
            </h3>
            <p className="text-[#78600B] text-center mx-auto mt-3 text-[14px] font-light">
              {formatDayAndTimeSlovenian(data?.funeralTimestamp).dayName} ob{" "}
              {formatDayAndTimeSlovenian(data?.funeralTimestamp).time} <br />{" "}
              {data?.Cemetry?.funeralCemetery} v {data?.funeralLocation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
