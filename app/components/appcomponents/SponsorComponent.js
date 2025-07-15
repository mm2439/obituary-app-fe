import React from "react";
import sponser1 from "@/public/sponser1.png";
import sponser2 from "@/public/sponser2.png";
import sponser3 from "@/public/sponser3.png";
import sponser5 from "@/public/sponser5.png";
import Image from "next/image";
const SponsorComponent = ({text = ""}) => {
  return (
    <div className="relative max-w-[1920px]  overflow-hidden mx-auto flex py-[115px] mobile:py-[100px] justify-center items-center bg-[#F5F7F9]"> 
      <div
        className="flex flex-col items-center justify-between
                    w-[1084px] h-[139.45px] 
                    tablet:w-[603px] tablet:h-[123.75px]
                    mobile:w-[360px] mobile:h-[90.52px]">
        <div className={`flex h-[28px] text-[#1E2125] mt-[-3px] font-variation-customOpt24 text-[24px] ${
          text ? 'mobile:text-[16px]' : ''
        }`}>
          {text ? `${text}` : "Sponzorji"}
        </div>
        <div className="flex w-full h-[63.75px] mobile:h-[30.52px] items-center">
          <Image
            src={sponser1}
            alt="sponser1 of the image"
            className="flex w-[200px] h-[40.7px] mobile:w-[150px] mobile:h-[30.52px] tablet:ml-[14.5px] mobile:ml-[21px]"
          />
          <Image
            src={sponser2}
            alt="sponser2 of the image"
            className="flex w-[64px] ml-[80px] h-full mobile:hidden"
          />
          <Image
            src={sponser3}
            alt="sponser3 of the image"
            className="flex w-[150px] ml-[80px] h-[25px] mobile:w-[120px] mobile:h-[20.12px] tablet:mr-[14.5px] mobile:ml-[48px] mobile:mr-[21px]"
          />

          <Image
            src={sponser1}
            alt="sponser4 of the image"
            className="flex w-[200px] ml-[80px] h-[40.7px]  tablet:hidden mobile:hidden"
          />

          <Image
            src={sponser5}
            alt="sponser4 of the image"
            className="flex w-[150px] ml-[80px] h-[29.35px]  tablet:hidden mobile:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorComponent;
