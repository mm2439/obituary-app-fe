import React from "react";

const Card3 = () => {

  return (
    <div
      className="w-[360px] bg-[#36556C] min-h-[720px] shadow-md overflow-hidden text-white"
      style={{ fontFamily: "Roboto Flex"}}
    >
      <div className="flex justify-between items-center px-4 py-4 text-sm font-semibold max-h-[50px]">
        <span className="text-[#F8EDE3] ml-3">9:41</span>
        <div className="flex space-x-1 text-xs">
          <img src="/mobile-cards/mini-off.png" alt="Status Icons" />
        </div>
      </div>

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
               textShadow: '0px 3px 3px #00000040',
              }}
          >
            Mario Danilo Primo
          </h2>

          <p style={{ letterSpacing: '3px' }} className="text-[#F8EDE3] h-[18px] mx-auto mt-[34px] text-[18px] font-light">14.01.1948 - 21.05.2025</p>
        </div>
      </div>


        <div className="name-year-container text-[#F8EDE3] mt-[177px]">
          <h1 className="text-center text-[24px] font-medium h-[20px]">23.05.2025 ob 11:00</h1>
          <p className="text-center mx-auto mt-[14px] text-[18px] h-[20px]">Pokopališče v Gabrskem</p>
        </div>

         <div className="mt-[112px]">
         <img src="/mobile-cards/tool-bar.png" alt="" className="w-full" />
        </div>
    </div>
  );
};

export default Card3;
