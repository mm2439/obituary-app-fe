import API_BASE_URL from "@/config/apiConfig";
import { formatToDottedDate } from "@/utils/dateUtils";
import React from "react";

const Card5 = ({ data = {}, cardRefs, index }) => {
  return (
    <div
      ref={(el) => {
        if (cardRefs?.current) {
          cardRefs.current[index] = el;
        }
      }}
      className="w-[360px] flex justify-center items-center bg-[#FFFFFF] h-[720px] shadow-md overflow-hidden text-white"
      style={{ fontFamily: "Roboto Flex" }}
    >
      <div>
        <div className="inner-container mt-[66px] h-[94px]">
          <div className="img-container flex justify-center">
            <h2
              className="font-greatVibes text-[75px] font-normal text-center align-middle"
              style={{ color: "#935559" }}
            >
              Hvala
            </h2>
          </div>
        </div>

        <div className="text-container py-1 mt-[77px] h-[200px]">
          <div className="img-container mx-auto rounded-full  shadow-md p-2 h-[200px] w-[140.7567596435547px] flex justify-center">
            <img
              className="object-cover rounded-full"
              src={`${API_BASE_URL}/${data?.image}`}
              alt="Mario"
            />
          </div>
        </div>

        <div className="name-year-container text-[#935559] mt-[22px]">
          <h1 className="text-center text-[18px] h-[18px] font-normal">
            V spomin
          </h1>
          <h2
            className="font-greatVibes text-[34px] h-[34px] font-normal text-center align-middle mt-[15px]"
            style={{ color: "#935559" }}
          >
            {data?.name} {data?.sirName}
          </h2>
          <p className="tracking-[2px] text-center mx-auto mt-[21px] text-[18px]">
            {formatToDottedDate(data?.birthDate)} -{" "}
            {formatToDottedDate(data?.deathDate)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card5;
