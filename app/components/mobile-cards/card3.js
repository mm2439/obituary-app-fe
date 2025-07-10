import {
  formatDayAndTimeSlovenian,
  formatToDottedDate,
} from "@/utils/dateUtils";
import Image from "next/image";
import React from "react";

const Card3 = ({ data = {}, cardRefs, index }) => {
  return (
    <div
      ref={(el) => {
        if (cardRefs?.current) {
          cardRefs.current[index] = el;
        }
      }}
      className="w-[360px] flex items-center justify-center relative bg-[#36556C] min-h-[720px] shadow-md overflow-hidden text-white"
      style={{ fontFamily: "Roboto Flex" }}
    >
      <Image
        src={"/mobile-cards/blue-card-overlay.png"}
        alt="bg-card3"
        fill
        className="object-cover w-full h-full absolute top-0 left-0"
      />

      <div>
        <div className="inner-container mt-[53px] py-1 h-[60px]">
          <div className="img-container py-5 flex justify-center">
            <p className="font-greatVibes text-[48px] leading-[36px] text-[#F8EDE3] text-center [text-shadow:0px_2px_2px_#00000040]">
              V spomin
            </p>
          </div>
        </div>

        <div className="text-container h-[72px] mt-[108px] w-[328px] mx-auto">
          <div className="img-container py-5 flex flex-col align-middle text-center">
            <h2
              className="text-[40px] text-[#F8EDE3] font-normal text-center leading-[36px]"
              style={{
                textShadow: "0px 3px 3px #00000040",
              }}
            >
              {data?.name} {data?.sirName}
            </h2>

            <p
              style={{ letterSpacing: "3px" }}
              className="text-[#F8EDE3] h-[18px] mx-auto mt-[34px] text-[18px] font-light"
            >
              {formatToDottedDate(data?.birthDate)} -{" "}
              {formatToDottedDate(data?.deathDate)}
            </p>
          </div>
        </div>

        <div className="name-year-container text-[#F8EDE3] mt-[177px]">
          <h1 className="text-center text-[24px] font-medium h-[20px]">
            {formatToDottedDate(data?.funeralTimestamp)} ob{" "}
            {formatDayAndTimeSlovenian(data?.funeralTimestamp).time}
          </h1>
          <p className="text-center mx-auto mt-[16px] text-[18px] h-[20px]">
            {data?.Cemetry?.funeralCemetery} v {data?.funeralLocation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
