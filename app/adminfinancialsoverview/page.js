"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SideMenuAdmin from "../components/appcomponents/SideMenuAdmin";
import RevenueComp from "../components/appcomponents/RevenueComp";
import AdminFinancialsMemory from "../adminfinancialsmemory/page";
import AdminFlorists from "../adminflorists/page";
import AdminAdvertisers from "../adminadvertisers/page";
import AdminPayments from "../adminpayments/page";
import { useRouter } from "next/navigation";
const AdminFinancialOverView = () => {
  const [whichScreen, setWhichScreen] = useState(1);

  const [whichTab, setWhichTab] = useState("");

  useEffect(() => {
    if (whichScreen == 4) {
      setWhichTab("Financials - Advertisers");
    } else if (whichScreen == 3) {
      setWhichTab("Financials - Florists Subscriptions");
    } else if (whichScreen == 2) {
      setWhichTab("Financials - Memory page");
    } else if (whichScreen == 1) {
      setWhichTab("Financials - Overview");
    } else {
      setWhichTab("Financials - Delayed Payments");
    }
  }, [whichScreen]);

  const tableData = [
    {
      what: "Keepers",
      total: 230,
      prevMonth: 180,
      change: "+ 30%",
      delayed_payment: 0,
      expected: 0,
      open: ">",
    },
    {
      what: "Premium on Memory pages",
      total: 130,
      prevMonth: 80,
      change: "+ 57%",
      delayed_payment: 0,
      expected: 0,
      open: ">",
    },
    {
      what: "Other",
      total: 30,
      prevMonth: 0,
      change: "0",
      delayed_payment: 0,
      expected: 0,
      open: ">",
    },
    {
      what: "Florist subscriptions",
      total: 540,
      prevMonth: 430,
      change: "+ 26%",
      delayed_payment: 180,
      expected: 3570,
      open: ">",
    },
    {
      what: "Florist Advertising",
      total: 210,
      prevMonth: 330,
      change: "- 46%",
      delayed_payment: 130,
      expected: 330,
      open: ">",
    },
    {
      what: "Others Advertising",
      total: 160,
      prevMonth: 130,
      change: "+ 28%",
      delayed_payment: 30,
      expected: 170,
      open: ">",
    },
  ];

  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin setWhichScreen={setWhichScreen} whichtab={whichTab} />
      </div>

      {whichScreen === 1 ? (
        <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
          <div className="w-full h-[110px] py-[2px] flex flex-row justify-between">
            <div className="flex flex-row gap-x-[15px]">
              <RevenueCompAdminOverivew
                amount={"530€"}
                total={"3280"}
                revenue={"Revenue: Memory page"}
                previous={"430"}
                change={" +23%"}
              />
              <RevenueCompAdminOverivew
                amount={"760€"}
                total={"3280"}
                revenue={"Revenue Florists subscr."}
                previous={"730"}
                change={" +8%"}
              />
              <RevenueCompAdminOverivew
                amount={"370€"}
                total={"1380"}
                revenue={"Revenue: Advertising"}
                previous={"290"}
                change={"+33%"}
              />
            </div>

            <RevenueCompAdminOverivew
              amount={"1480€"}
              total={"31380"}
              revenue={"Total earnings last m."}
              previous={"290"}
              change={" +3%"}
            />
          </div>

          <div className="mt-[50px] w-full">
            <table className="w-full">
              <thead className="border-b-[1.5px] border-[#A1B1D4] ">
                <tr className=" py-[14px] ">
                  <th
                    className="border-b-[0.5px] border-b-[solid] border-b-[#A1B1D4] w-[244px] pl-[18px] text-left text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
         text-[#3C3E41]"
                  >
                    WHAT
                  </th>
                  <th
                    className="border-b-[0.5px_solid_#A1B1D4] w-[40px] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
         text-[#3C3E41]"
                  >
                    TOTAL
                  </th>
                  <th
                    className="border-b-[0.5px_solid_#A1B1D4] w-[206px] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
         text-[#3C3E41]"
                  >
                    PREVIOUS MONTH
                  </th>
                  <th
                    className="border-b-[0.5px_solid_#A1B1D4] w-[74px] text-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
         text-[#3C3E41]"
                  >
                    CHANGE
                  </th>
                  <th
                    className="border-b-[0.5px_solid_#A1B1D4] w-[242px] px-[50px] text-center py-2 text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
         text-[#3C3E41]"
                  >
                    {" "}
                    STILL OPENED DELAYED PAYMENTS
                  </th>
                  <th
                    className="border-b-[0.5px_solid_#A1B1D4] w-[153px] text-center py-2 text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
         text-[#3C3E41]"
                  >
                    {" "}
                    EXPECTED (LONG-TERM CONTRACTS)
                  </th>
                  <th
                    className="border-b-[0.5px_solid_#A1B1D4] w-[643px] pr-[18px] mr-[0px] text-right text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
         text-[#3C3E41]"
                  >
                    OPEN
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr
                    key={index}
                    className={`border-[0.5px] border-[#A1B1D4] ${
                      data.what === "Florist Advertising" ||
                      data.what === "Others Advertising"
                        ? "bg-[#6D778E35]"
                        : ""
                    }`}
                  >
                    <td className="pl-[18px] border-t-[1px] border-b-[0.5px] border-[#A1B1D4] text-left text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 w-[244px]">
                      {data.what}
                    </td>
                    <td
                      className="w-[40px] border-t-[1px] border-b-[0.5px] border-[#A1B1D4] text-center py-[24px] text-[13px] leading-[15px] text-[#3C3E41] 
          font-variation-customOpt13"
                    >
                      {data.total}
                    </td>
                    <td
                      className="w-[206px]  border-t-[1px] border-b-[0.5px] border-[#A1B1D4] text-[13px] leading-[15px] 
          text-[#3C3E41] font-variation-customOpt13 text-center"
                    >
                      {data.prevMonth}
                    </td>
                    <td
                      className={`w-[54px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center`}
                    >
                      {data.change}
                    </td>
                    <td className=" w-[262px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center">
                      {data.delayed_payment}
                    </td>
                    <td className=" w-[153px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-center">
                      {data.expected}
                    </td>
                    <td className="w-[643px] border-t-[1px] text-[13px] leading-[15px] text-[#3C3E41] font-variation-customOpt13 border-b-[0.5px] border-[#A1B1D4] text-right pr-[22px]">
                      {data.open}
                    </td>
                  </tr>
                ))}
              </tbody>

              <div></div>
              <tfoot className="w-full min-h-[64px] border-[#EB1D1D] border-[4px] rounded-[4px]">
                <tr className=" py-[14px] h-[64px] bg-[#F7F9FACC]">
                  <th
                    className=" w-[244px] pl-[18px] text-left text-[24px] leading-[28px] font-variation-customOpt24 font-semibold
         text-[#ACAAAA] "
                  >
                    TOTAL{" "}
                    <span className="text-[16px] leading-[19px] font-variation-customOpt18">
                      Last Month
                    </span>
                  </th>
                  <th
                    className="w-[40px] text-center text-[24px] leading-[16px] font-variation-customOpt24 font-semibold
         text-[#ACAAAA] "
                  >
                    860€
                  </th>
                  <th
                    className="w-[206px] text-center text-[24px] leading-[16px] font-variation-customOpt24 font-semibold
         text-[#ACAAAA] "
                  >
                    680€
                  </th>
                  <th
                    className=" w-[74px] text-center text-[24px] leading-[16px] font-variation-customOpt24 font-semibold
         text-[#ACAAAA] "
                  >
                    + 28%
                  </th>
                  <th
                    className=" w-[242px] text-center text-[24px] leading-[16px] font-variation-customOpt24 font-semibold
         text-[#ACAAAA] "
                  >
                    {" "}
                    330€
                  </th>
                  <th
                    className=" w-[153px] text-center text-[24px] leading-[16px] font-variation-customOpt24 font-semibold
         text-[#ACAAAA] "
                  >
                    {" "}
                    4170€{" "}
                  </th>
                  <th
                    className=" w-[643px] pr-[18px] text-right text-[12px] leading-[16px] font-variation-customOpt12 font-semibold
         text-[#3C3E41]"
                  ></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      ) : whichScreen === 2 ? (
        <AdminFinancialsMemory />
      ) : whichScreen === 3 ? (
        <AdminFlorists />
      ) : whichScreen === 4 ? (
        <AdminAdvertisers />
      ) : (
        <AdminPayments />
      )}
    </div>
  );
};

const RevenueCompAdminOverivew = ({
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
              <span className="text-[12px] text-[#1E2125] font-medium font-variation-customOpt14 mt-[2px] leading-[14px] text-nowrap">
                Changes:
              </span>{" "}
              <div className="text-[16px] ml-1 leading-[19px] font-variation-customOpt16 text-[#EB1D1D]">
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

export default AdminFinancialOverView;
