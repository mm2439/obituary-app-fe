import React from "react";
import Link from "next/link";

const WorkTogetherComp = () => {
  return (
    <div className="w-full bg-[#083545]">
    <div className="h-[270px] tablet:h-[280px] mobile:h-[289px] overflow-hidden flex items-center max-w-[1920px] mx-auto ">
    <div className="h-full max-w-[1920px] w-full flex justify-center mx-auto overflow-hidden ">
      <div className="h-full mx-auto max-w-[953px] w-full flex flex-col items-start tablet:items-center mobile:items-center">
        <div className="text-[#DAEBF1] desktop:ml-[12px] mt-[60px] tablet:mt-[46px] mobile:mt-[38px] mobile:text-[28px] text-[40px] font-[400px] leading-[46.88px] font-variation-customOpt40">
          Sodelujmo!
        </div>
        <div className="text-[#D4D4D4] text-[16px] font-[400px] leading-[24px] tablet:leading-[16px] desktop:ml-[12px] desktop:mt-[15px] tablet:mt-[13px] mobile:mt-[13px]">
        Imate ideje, vprašanja, predloge?
        </div>
        <div className="text-[#D4D4D4] mobile:hidden text-[16px] font-[400px] leading-[24px] mobile:leading-[16px] mobile:mx-2 flex flex-wrap text-center desktop:ml-[12px] desktop:mt-[24px] tablet:mt-[9px] mobile:mt-[10px]">
        Kontaktirajte nas! Z veseljem vam bomo prisluhnili!
        </div>
        <div className="text-[#D4D4D4] text-[16px] desktop:hidden tablet:hidden mobile:block 
        font-[400px] leading-[24px] mobile:leading-[16px] mobile:mx-2 flex flex-wrap text-center desktop:ml-[12px] tablet:mt-[9px] mobile:mt-[10px]">
          <div>Kontaktirajte nas!</div>
          <div>Z veseljem vam bomo prisluhnili!</div>

        </div>
        <div
          className="flex mt-[29.44px] tablet:mt-[25px] justify-center 
        desktop:hidden tablet:block mobile:mt-[22px]">
          <div
            className="flex items-center rounded-lg justify-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]
            desktop:h-[48px] desktop:w-[164px]
          mobile:h-[48px] mobile:w-[164px]
          tablet:h-[48px] tablet:w-[164px]">
           <div  className="hidden desktop:flex font-variation-customOpt16 text-[16px] text-[#1E2125] text-center">
              Prikaži več
            </div>
            <Link href={"/kontakt"} className="flex desktop:hidden font-variation-customOpt16 text-[16px] text-[#1E2125] text-center">
            Kontaktirajte nas
            </Link >
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
  );
};

export default WorkTogetherComp;
