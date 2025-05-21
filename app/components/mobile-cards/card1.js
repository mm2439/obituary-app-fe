import React from "react";

const Card1 = () => {
  return (
    <div
      className="w-[360px] bg-[#3b3b3b] h-[720px] rounded-xl shadow-md overflow-hidden text-white"
      style={{ fontFamily: "'Roboto Flex', sans-serif" }}
    >
      <div className="flex justify-between items-center px-4 py-4 text-sm font-semibold">
        <span className="ml-3">9:41</span>
        <div className="flex space-x-1 text-xs">
          <img src="/mobile-cards/mini.png" alt="Status Icons" />
        </div>
      </div>

      <div className="inner-container ml-[35px] py-1">
        <div className="img-container py-5">
          <img src="/mobile-cards/Mario.png" alt="Mario" />
          <br />
          <img src="/mobile-cards/V spomin.png" alt="V spomin" />
        </div>

        <div className="name-year-container">
          <h1 className="text-[42px] text-[#D89B1C] font-medium">Mario Danilo <br/> Primo</h1>
          <p className="text-[24px]">1948 - 2025</p>
        </div>

        <div className="name-year-container mt-[87px]">
          <h1 className="text-[#D89B1C] text-[24px] font-semibold">Torek ob 11:00</h1>
          <p className="mt-3">23.05.2025</p>
          <p>Pokopališče v Gabrskem, Trbovlje</p>
        </div>
      
      </div>

       <div className="">
         <img src="/mobile-cards/tool-bar.png" alt="" className="" />
        </div>
    </div>
  );
};

export default Card1;
