import React from "react";

const Card4 = () => {
  return (
    <div
      className="w-[360px] bg-[#F8EDE3] h-[720px] rounded-xl shadow-md overflow-hidden text-white"
      style={{ fontFamily: "Roboto Flex"}}
    >
      <div className="flex justify-between items-center px-4 py-4 text-sm font-semibold">
          <span className="text-black ml-3">9:41</span>
        <div className="flex space-x-1 text-xs">
          <img src="/mobile-cards/mini2.png" alt="Status Icons" />
        </div>
      </div>

      <div className="inner-container py-1">
        <div className="img-container flex justify-center">
          <img src="/mobile-cards/Group 10.png" alt="Mario" />
        </div>
      </div>

      <div className="text-container py-1 mt-[58px]">
        <div className="img-container flex justify-center">
          <img src="/mobile-cards/text-4-card.png" alt="Mario" />
        </div>
      </div>

        <div className="mt-[68px]">
         <img src="/mobile-cards/tool-bar.png" alt="" className="w-full" />
        </div>

    </div>
  );
};

export default Card4;
