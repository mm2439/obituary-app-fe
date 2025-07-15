import React from "react";
import { useRouter } from "next/navigation";

const RevenueComp = ({
  amount,
  revenue,
  previous,
  next,
  total,
  change,
  isWhiteBg = 0,
  divide,
  withRevenue,
  isprevious,
}) => {
  const router = useRouter();

  const showEuroLabel = router.pathname === "/memorybook";

  return (
    <div
      className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px] ${
        isWhiteBg === "1" ? "bg-[#fafbfc]" : "bg-[#e8f4fc]"
      } ${
        revenue === "Total earnings last m."
          ? "border-[#EB1D1D] border-[4px]"
          : "border-[#0A85C2] border-[2px]"
      } h-[110px] flex flex-row justify-between bg-[#e8f4fc]`}
    >
      <div className="flex flex-col justify-between h-[79px] w-[57%]">
        <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
          {amount}
          <span className="text-[32px] font-medium text-[#ACAAAA]">
            {divide}
          </span>
        </div>
        <div className="min-w-[241px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
          {revenue}
          <span className="text-[16px] font-medium text-[#ACAAAA]">
            {withRevenue}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        {previous ? (
          <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row justify-end items-center gap-x-[4px]">
            {isprevious ? "" : <div>Previous m:</div>}
            <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#5EAE91] font-bold">
              {previous}{" "}
              <span className="text-[16px] font-bold text-[#EB1D1D]">
                {next}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]"></div>
        )}

        {total ? (
          <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center justify-end gap-x-[4px]">
            <div className="pb-[2px]">
              {showEuroLabel ? "€ in total:" : "Total:"}
            </div>
            <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#6D778E]">
              {total}
            </div>
          </div>
        ) : (
          <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#6D778E] flex flex-row items-center gap-x-[4px]"></div>
        )}

        {change ? (
          <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-row justify-end items-center gap-x-[4px]">
            <div className="text-[#EB1D1D] flex flex-row text-[16px] leading-[19px] justify-end font-variation-customOpt16 font-bold">
              <span className="text-[12px] text-nowrap font-medium text-[#6D778E]">
                Change:
              </span>{" "}
              <div className="text-[16px] leading-[19px] font-variation-customOpt16 text-[#EB1D1D]">
                {change}
              </div>
              {/* <div className="mx-[10px] text-[12px] leading-[14.06px] font-variation-customOpt16 text-[#0A85C2] underline">
                SHOW
              </div> */}
            </div>
          </div>
        ) : (
          <div className="text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-row items-center gap-x-[4px]"></div>
        )}
      </div>
    </div>
  );
};

export default RevenueComp;
