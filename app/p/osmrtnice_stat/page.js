import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import React from "react";

export default function Obituaries() {
  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[950px]">
        <div className="mt-[62px] flex gap-[15px]">

          <div className="border-gradient-rounded  flex flex-col h-[90px] w-[310px] py-[13px] px-[15px] border-[2px] border-[#0A85C2] rounded-[10px] bg-[#fff] shadow-md">
            <div className="flex justify-between items-start mb-[2px]">
              <h2 className="items-center text-[40px] text-[#6D778E] font-bold leading-none">
                218
              </h2>
              <div className="text-[#6D778E] text-[12px] font-normal">
                vseh lokalno: <span className="font-semibold">332</span>
              </div>
            </div>
            <p className="text-[16px] text-[#1E2125]">Vseh objavljenih osmrtnic</p>
          </div>

          <div className="border-gradient-rounded  flex flex-col h-[90px] w-[310px] py-[13px] px-[15px] border-[2px] border-[#0A85C2] rounded-[10px] bg-[#fff] shadow-md">
            <div className="flex justify-between items-start mb-[2px]">
              <h2 className="items-center text-[40px] text-[#6D778E] font-bold leading-none">
                124
              </h2>
              <div className="text-[#6D778E] text-[12px] font-normal">
                vseh lokaln: <span className="font-semibold">133</span>
              </div>
            </div>
            <p className="text-[16px] text-[#1E2125]">Spominskih strani (s Skrbnikom)</p>
          </div>

        </div>
        <div className="mt-[150px]">

          <div className="mt-[20px]">
            <table className="w-full border-separate border-spacing-[0] mobileUserAcc:w-[720px]">
              <thead>
                <tr className="text-[14px] tabletUserAcc:text-[14px] mobileUserAcc:text-[14px] text-[#3C3E41] font-variation-customOpt16 font-normal leading-[16px] uppercase">
                  <th className="w-[100px] tabletUserAcc:w-[150px] mobileUserAcc:w-[150px] pt-[8px]">Mesec</th>
                  <th className="w-[110px] shrink-0 pb-[7px] tabletUserAcc:text-[#530CC6] mobileUserAcc:text-[#530CC6]">skupno
                    osmrtnic
                  </th>
                  <th className="w-[90px] shrink-0 pb-[7px] tabletUserAcc:hidden mobileUserAcc:hidden">s <br />
                    sliko</th>
                  <th className="w-[110px] shrink-0 pb-[7px] tabletUserAcc:hidden mobileUserAcc:hidden">s <br />
                    pogrebom</th>
                  <th className="w-[150px] shrink-0 pb-[7px] hidden tabletUserAcc:block mobileUserAcc:block text-[#6D778E]">
                    <div className="flex items-center justify-center gap-[6px] pt-[25px]">
                      <span>sliko</span> <span className="text-[#D4D4D4]">I</span> 
                      <span>pogreb</span>
                    </div>
                  </th>
                  <th className="w-[90px] pt-[8px]">
                    OBOJE v %
                  </th>
                  <th className="pb-[60px]">
                  </th>
                  <th className="w-[130px] tabletUserAcc:w-[25%] mobileUserAcc:w-[25%] text-center pt-[8px] tabletUserAcc:text-[#530CC6] mobileUserAcc:text-[#530CC6]">skrbnikov</th>
                  <th className="w-[100px]">
                    bolj <br />
                    podrobno</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/40">
                  <td className="p-4 text-[16px] text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4] w-[100px]">
                    Jul, 2024
                  </td>
                  <td className="p-4 border-t border-b border-[#A1B1D4] text-[20px] text-center text-[#3C3E41]">
                    36
                  </td>
                  <td className="p-4 text-[16px]n leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center tabletUserAcc:hidden mobileUserAcc:hidden">
                    19
                  </td>
                  <td className="p-4 text-[16px] leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center tabletUserAcc:hidden mobileUserAcc:hidden">
                    16
                  </td>
                  <td className="py-[22px] px-4 text-[16px] leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center hidden tabletUserAcc:block mobileUserAcc:block">
                    <div className="flex items-center justify-center gap-[6px] text-[16px] text-[#6D778E]">
                      <span>19</span>
                      <span className="text-[#D4D4D4]">I</span>
                      <span>16</span>
                    </div>
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#EB1D1D] border-t font-bold border-b border-[#A1B1D4] text-center">
                    43
                  </td>
                  <td className="border-t border-b border-[#A1B1D4]">
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center">
                    33
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#3C3E41] border-t border-b border-r border-[#A1B1D4] text-end rounded-r-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 ml-auto">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-[#e3e9f1]">
                  <td className="p-4 text-[16px] text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4] w-[100px]">
                    Jul, 2024
                  </td>
                  <td className="p-4 border-t border-b border-[#A1B1D4] text-[20px] text-center text-[#3C3E41]">
                    36
                  </td>
                  <td className="p-4 text-[16px]n leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center tabletUserAcc:hidden mobileUserAcc:hidden">
                    19
                  </td>
                  <td className="p-4 text-[16px] leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center tabletUserAcc:hidden mobileUserAcc:hidden">
                    16
                  </td>
                  <td className="py-[22px] px-4 text-[16px] leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center hidden tabletUserAcc:block mobileUserAcc:block">
                    <div className="flex items-center justify-center gap-[6px] text-[16px] text-[#6D778E]">
                      <span>19</span>
                      <span className="text-[#D4D4D4]">I</span>
                      <span>16</span>
                    </div>
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#ACAAAA] border-t font-bold border-b border-[#A1B1D4] text-center">
                    56
                  </td>
                  <td className="border-t border-b border-[#A1B1D4]">
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center">
                    33
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#3C3E41] border-t border-b border-r border-[#A1B1D4] text-end rounded-r-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 ml-auto">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white/40">
                  <td className="p-4 text-[16px] text-[#6D778E] border-t border-b border-l rounded-l border-[#A1B1D4] w-[100px]">
                    Jul, 2024
                  </td>
                  <td className="p-4 border-t border-b border-[#A1B1D4] text-[20px] text-center text-[#3C3E41]">
                    36
                  </td>
                  <td className="p-4 text-[16px]n leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center tabletUserAcc:hidden mobileUserAcc:hidden">
                    19
                  </td>
                  <td className="p-4 text-[16px] leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center tabletUserAcc:hidden mobileUserAcc:hidden">
                    16
                  </td>
                  <td className="py-[22px] px-4 text-[16px] leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center hidden tabletUserAcc:block mobileUserAcc:block">
                    <div className="flex items-center justify-center gap-[6px] text-[16px] text-[#6D778E]">
                      <span>19</span>
                      <span className="text-[#D4D4D4]">I</span>
                      <span>16</span>
                    </div>
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#1FBE11] border-t font-bold border-b border-[#A1B1D4] text-center">
                    76
                  </td>
                  <td className="border-t border-b border-[#A1B1D4]">
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#3C3E41] border-t border-b border-[#A1B1D4] text-center">
                    33
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#3C3E41] border-t border-b border-r border-[#A1B1D4] text-end rounded-r-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 ml-auto">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                  </td>
                </tr>
                <tr className="bg-white/40">
                  <td className="px-4 py-1 text-[24px] font-bold text-[#6D778E] border-t border-b border-l rounded-l-[4px] border-[#000000] w-[100px]">
                    TOTAL
                  </td>
                  <td className="p-4 border-t border-b border-[#000000] text-[20px] text-center text-[#3C3E41]">
                    36
                  </td>
                  <td className="p-4 text-[16px]n leading-[19px] text-[#3C3E41] border-t border-b border-[#000000] text-center tabletUserAcc:hidden mobileUserAcc:hidden">
                    19
                  </td>
                  <td className="p-4 text-[16px] leading-[19px] text-[#3C3E41] border-t border-b border-[#000000] text-center tabletUserAcc:hidden mobileUserAcc:hidden">
                    16
                  </td>
                  <td className="py-[22px] px-4 text-[16px] leading-[19px] text-[#3C3E41] border-t border-b border-[#000000] text-center hidden tabletUserAcc:block mobileUserAcc:block">
                    <div className="flex items-center justify-center gap-[6px] text-[16px] text-[#6D778E]">
                      <span>19</span>
                      <span className="text-[#D4D4D4]">I</span>
                      <span>16</span>
                    </div>
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#ACAAAA] border-t font-bold border-b border-[#000000] text-center">
                    62
                  </td>
                  <td className="border-t border-b border-[#000000]">
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#3C3E41] border-t border-b border-[#000000] text-center">
                    33
                  </td>
                  <td className="p-4 text-[20px] leading-[19px] text-[#3C3E41] border-t border-b border-r border-[#000000] text-end rounded-r-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 ml-auto">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CompanyAccountLayout>
  );
}
