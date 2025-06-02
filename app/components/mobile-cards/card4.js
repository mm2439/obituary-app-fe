import React from "react";

const Card4 = () => {
  return (
    <div
      className="w-[360px] bg-[#F8EDE3] h-[720px] shadow-md overflow-hidden text-white mx-auto"
      style={{ fontFamily: "Roboto Flex"}}
    >
      <div className="flex justify-between h-[50px] items-center px-4 py-4 text-sm font-semibold">
          <span className="text-black ml-3">9:41</span>
        <div className="flex space-x-1 text-xs">
          <img src="/mobile-cards/mini2.png" alt="Status Icons" />
        </div>
      </div>

      <div className="inner-container py-1 h-[431px]">
        <div className="img-container flex justify-center">
          <img src="/mobile-cards/Group 10.png" alt="Mario" />
        </div>
      </div>

      <div className="text-container py-1 mt-[58px] h-[80px]">
        <div className="img-container flex justify-center">
          <h2  className="font-greatVibes text-[64px] font-normal leading-[30px] tracking-[0px] text-center align-middle lowercase" style={{ color: '#36556C' }}>iSKRENO SOŽALJE</h2>
        </div>
      </div>

        <div className="mt-[70px]">
         <img src="/mobile-cards/tool-bar.png" alt="" className="w-full" />
        </div>

    </div>
  );
};

export default Card4;
