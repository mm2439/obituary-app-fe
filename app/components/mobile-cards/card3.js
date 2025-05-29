import React from "react";

const Card3 = ({ data }) => {
  return (
    <div
      className="w-[360px] bg-[#36556C] h-[720px] rounded-xl shadow-md overflow-hidden text-white"
      style={{ fontFamily: "Roboto Flex" }}
    >
      <div className="flex justify-between items-center px-4 py-4 text-sm font-semibold">
        <span className="text-[#F8EDE3] ml-3">9:41</span>
        <div className="flex space-x-1 text-xs">
          <img src="/mobile-cards/mini-off.png" alt="Status Icons" />
        </div>
      </div>

      <div className="inner-container mt-[34px] py-1">
        <div className="img-container py-5 flex justify-center">
          <img src="/mobile-cards/V spomin(1).png" alt="Mario" />
        </div>
      </div>

      <div className="text-containe mt-[108px]">
        <div className="img-container py-5 flex flex-col align-middle">
          <img
            className="w-[320px] mx-auto"
            src="/mobile-cards/Mario Danilo Primo.png"
            alt="Mario"
          />
          <p
            style={{ letterSpacing: "3px" }}
            className="text-[#F8EDE3] mx-auto mt-[34px] text-[18px] font-light"
          >
            14.01.1948 - 21.05.2025
          </p>
        </div>
      </div>

      <div className="name-year-container text-[#F8EDE3] mt-[100px]">
        <h1 className="text-center text-[24px] font-semibold">
          23.05.2025 ob 11:00
        </h1>
        <p className="text-center mx-auto mt-3 text-[18px] mt-[0px]">
          Pokopališče v Gabrskem
        </p>
      </div>

      <div className="mt-[27px]">
        <img src="/mobile-cards/tool-bar.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Card3;
