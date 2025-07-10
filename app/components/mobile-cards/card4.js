import React from "react";

const Card4 = ({ cardRefs, index }) => {
  return (
    <div
      ref={(el) => {
        if (cardRefs?.current) {
          cardRefs.current[index] = el;
        }
      }}
      className="w-[360px] flex justify-center items-center bg-[#F8EDE3] h-[720px] shadow-md overflow-hidden text-white mx-auto"
      style={{ fontFamily: "Roboto Flex" }}
    >
      <div>
        <div className="inner-container py-1 h-[431px]">
          <div className="img-container flex justify-center">
            <img src="/mobile-cards/Group 10.png" alt="Mario" />
          </div>
        </div>

        <div className="text-container py-1 mt-[58px] h-[80px]">
          <div className="img-container flex justify-center">
            <h2
              className="font-greatVibes text-[64px] font-normal leading-[30px] tracking-[0px] text-center align-middle lowercase"
              style={{ color: "#36556C" }}
            >
              iSKRENO SOŽALJE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
