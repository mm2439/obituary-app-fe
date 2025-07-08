import React from "react";
import Link from "next/link";

const WorkTogether = () => {
  return (
    <div className="flex w-full bg-[#6D778E] justify-center items-center  py-[24px] tablet:py-[55px]   desktop:py-[58px] ">
     
      <div className="mobile:hidden relative p-[2px] w-[575px] mobile:w-full  bg-gradient-to-r from-[#0D94E8CC] via-[#0A85C2] to-[#5742DBCC] rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D94E8CC] via-[#0A85C2] to-[#5742DBCC] rounded-[16px]  "></div>
        <div className="bg-[#6D778E] relative rounded-[8px]">
          <div className="relative  bg-gradient-to-r from-[#FFFFFF30] to-[#FFFFFF09]  rounded-[8px] py-8 tablet:py-6 flex flex-col items-center justify-center">
            <div className="  text-[#FFFFFF] text-[40px] leading-[48px]  font-variation-customOpt40 font-light">
              Sodelujmo!
            </div>
            <Link
              href={"/companyregistrationpage"}
              className="mt-6 w-[133px]  h-[48px] rounded-lg bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF]
                flex justify-center items-center"
            >
              <div className=" text-[16px] text-[#1E2125] leading-[24px] font-variation-customOpt16">
                Registracija
              </div>
            </Link>
            <div className="mt-6  text-[#FFFFFF] text-[16px] font-variation-customOpt16 text-center mx-[90px]">
              Brezplačno. Brez rizika. Kmalu še dodatne koristi.
            </div>
          </div>
        </div>
      </div>
      <div className="hidden mobile:flex flex-col items-center justify-center">
        <div className="  text-[#FFFFFF] text-[40px] mobile:text-[28px] leading-[48px] mobile:font-variation-customOpt28 font-variation-customOpt40 font-light">
          Sodelujmo!
        </div>
        <Link
          href={"/companyregistrationpage"}
          className="mt-6 w-[133px]  h-[48px] rounded-lg bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF]
                flex justify-center items-center"
        >
          <div className=" text-[16px] text-[#1E2125] leading-[24px] font-variation-customOpt16">
            Registracija
          </div>
        </Link>
        <div className="mt-6  text-[#FFFFFF] text-[16px] font-variation-customOpt16 text-center mx-[90px]">
          Brezplačno. Brez rizika. Kmalu še dodatne koristi.
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
