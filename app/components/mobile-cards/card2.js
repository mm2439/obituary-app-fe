import React from "react";

const Card2 = () => {
  return (
    <div
      className="w-[360px] bg-[#fff] h-[720px] shadow-md overflow-hidden text-white"
      style={{ fontFamily: "Roboto Flex"}}
    >
      <div className="flex justify-between items-center px-4 py-4 text-sm font-semibold">
          <span className="text-black ml-3">9:41</span>
        <div className="flex space-x-1 text-xs">
          <img src="/mobile-cards/mini2.png" alt="Status Icons" />
        </div>
      </div>

      <div className="inner-container py-3 w-[308px] border-solid m-[25px]" style={{ borderWidth: '3px', borderColor: '#78600B' }}>
        <div className="img-container flex flex-col items-center mt-[75px]">
          <img src="/mobile-cards/object-1.png" alt="Mario" />

          <div className="text-containe mt-[60px]">
            <div className="img-container py-5 flex flex-col align-middle">
              <h2 className="text-[#78600B] text-[32px] font-normal text-center leading-[46px]">
                Mario Danilo Primo
              </h2>
              <p style={{ letterSpacing: '0px' }} className="text-[#78600B] mx-auto mt-[16px] text-[18px] font-light">14.01.1948 - 21.02.2024</p>
            </div>
         </div>


        <div className="name-year-container text-[#F8EDE3] mt-[140px]">
          <h3 className="text-[#78600B] text-center text-[24px] font-semibold">23.05.2025</h3>
          <p className="text-[#78600B] text-center mx-auto mt-3 text-[14px] font-light">Torek ob 11:00 <br /> Pokopališče v Gabrskem</p>
        </div>

        </div>
      </div>

      <div className="mt-[12px]">
         <img src="/mobile-cards/tool-bar.png" alt="" className="w-full" />
      </div>

    </div>
  );
};

export default Card2;
