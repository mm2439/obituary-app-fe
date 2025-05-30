import React from "react";

const Card5 = () => {
  return (
    <div
      className="w-[360px] bg-[#FFFFFF] h-[720px] rounded-xl shadow-md overflow-hidden text-white"
      style={{ fontFamily: "Roboto Flex"}}
    >
      <div className="flex justify-between items-center px-4 py-4 text-sm font-semibold">
          <span className="text-black ml-3">9:41</span>
        <div className="flex space-x-1 text-xs">
          <img src="/mobile-cards/mini2.png" alt="Status Icons" />
        </div>
      </div>

      <div className="inner-container mt-[66px]">
        <div className="img-container flex justify-center">
          <img src="/mobile-cards/Hvala.png" alt="Mario" />
        </div>
      </div>

      <div className="text-container py-1 mt-[77px]">
        <div className="img-container flex justify-center">
          <img src="/mobile-cards/Mario(1).png" alt="Mario" />
        </div>
      </div>

          <div className="name-year-container text-[#935559] mt-[22px]">
          <h1 className="text-center text-[18px] font-normal">V spomin</h1>
          <img className="mx-auto mt-[15px]" src="/mobile-cards/Mario Danilo Primo-card-5.png" alt="" />
          <p className="tracking-[2px] text-center mx-auto mt-[21px] text-[18px]">14.01.1948 - 21.05.2025</p>
        </div>

        <div className="mt-[75px]">
         <img src="/mobile-cards/tool-bar.png" alt="" className="w-full" />
        </div>

    </div>
  );
};

export default Card5;
