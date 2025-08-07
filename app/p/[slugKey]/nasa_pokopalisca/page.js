import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";

export default function Cemeteries() {
  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[950px] mobileUserAcc:w-[720px]">
        <div className="justify-end hidden tabletUserAcc:flex mobileUserAcc:flex tabletUserAcc:mt-[26px] mobileUserAcc:mt-[24px] tabletUserAcc:mr-[46px] mobileUserAcc:mr-[46px]">
          <div className="flex gap-[16px]">
            <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
              <img src="/plus_icon_blue.png" alt="spominske" className="h-[24px] w-[24px]" />
            </div>
            <span className="text-[#0A85C2] text-[16px] uppercase underline">dodaj pokopališče</span>
          </div>
        </div>
        <div className="mt-[62px] tabletUserAcc:mt-[26px] mobileUserAcc:mt-[26px] flex justify-between tabletUserAcc:flex-col mobileUserAcc:flex-col">
          <div className="flex gap-[47px]">
            <div className="border-gradient-rounded  flex flex-col h-[90px] w-[310px] py-[13px] px-[15px] border-[2px] border-[#0A85C2] rounded-[10px] bg-[#fff] shadow-md">
              <div className="flex justify-between items-start mb-[2px]">
                <div className="space-y-[8px]">
                  <h2 className="text-[40px] font-bold text-[#6D778E] leading-[100%]">
                  11
                  </h2>
                  <span className="text-[16px] text-[#1E2125] font-medium">
                  Pokopališč
                  </span>
                </div>
                <div className="space-y-[8px]">
                  <h2 className="text-[40px] font-normal text-[#6D778E] leading-[100%] text-end">
                  178
                  </h2>
                  <span className="text-[16px] text-[#1E2125] font-medium">
                  Vnešenih pokojnih
                  </span>
                </div>
              </div>
            </div>

            <div className="border-gradient-rounded  flex flex-col h-[90px] w-[310px] py-[13px] px-[15px] border-[2px] border-[#0A85C2] rounded-[10px] bg-[#fff] shadow-md">
              <div className="flex justify-between items-start mb-[2px]">
                <div className="space-y-[8px]">
                  <div className="flex items-start justify-between">
                    <h2 className="text-[40px] font-bold text-[#EB1D1D] leading-[100%]">
                    6
                    </h2>
                    <div className="inline-flex items-center gap-[16px]">
                      <span className="text-[#0A85C2] underline text-[16px]">
                      Dopolni
                      </span>
                      <img src="/grey_left.png" alt="spominske" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <span className="text-[16px] text-[#1E2125] font-medium">
                  Pokojnih brez vnešenega pokopališča
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-[42px] tabletUserAcc:gap-[24px] mobileUserAcc:gap-[24px] tabletUserAcc:mr-[67px] mobileUserAcc:mr-[67px]">
            <div className="flex gap-[16px] tabletUserAcc:hidden mobileUserAcc:hidden">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/plus_icon_blue.png" alt="spominske" className="h-[24px] w-[24px]" />
              </div>
              <span className="text-[#0A85C2] text-[16px] uppercase underline">dodaj pokopališče</span>
            </div>
            <div className="w-[295px] text-[12px] text-[#717B8C] hidden tabletUserAcc:block mobileUserAcc:block tabletUserAcc:mt-[24px] mobileUserAcc:mt-[24px]">
            Če svojci želijo zasebni pogreb, potem vam ni treba vnesti datuma pogreba, ampak samo pokopališče 
            ALI pa pokopališče vnesete šele po pogrebu
            </div>
            <div className="flex gap-[16px]">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/plus_icon_blue.png" alt="spominske" className="h-[24px] w-[24px]" />
              </div>
              <span className="text-[#0A85C2] text-[16px] uppercase underline">POMOČ</span>
            </div>
          </div>
        </div>
        <div className="mt-[78px] tabletUserAcc:mt-[20px] mobileUserAcc:mt-[20px]">
          <div className="tabletUserAcc:block mobileUserAcc:block hidden text-[12px] text-[#717B8C] mb-[21px] px-[32px]">
          Klikni pokopališče za ogled vseh vnešenih
          </div>
          <table className="w-full">
              <thead>
                <tr className="text-[14px] tabletUserAcc:text-[14px] mobileUserAcc:text-[14px] text-[#6D778E] font-variation-customOpt16 font-semibold leading-[24px] border-b border-[#A1B1D4] uppercase">
                  <th className="w-[40%] pb-[12px] pl-[32px] text-start">Pokopališče</th>
                  <th className="w-[30%] pb-[12px] text-start">mesto</th>
                  <th className="w-[25%] pb-[12px] text-center text-[#3C3E41]">vpisanih</th>
                  <th className="w-[50px] pb-[12px] text-end tabletUserAcc:hidden mobileUserAcc:hidden"></th>
                </tr>
              </thead>
              <tbody className="bg-white/40">
                <tr className="h-[72px] border-b border-[#A1B1D4]">
                  <td className="px-[32px] py-[14px] text-[#6D778E] leading-none">
                    <div className="flex gap-[16px] items-center">
                      <div className="space-y-[6px]">
                        <span className="text-[16px] text-[#3C3E41]">Pokopališče Gabrsko</span>
                        <div className="text-[#6D778E] text-[14px]">Večna pot 12, Ljubljana</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="w-[13px] h-[13px] tabletUserAcc:block hidden mobileUserAcc:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                  <td className="text-[#3C3E41] text-[16px]">
                  Trbovlje
                  </td>
                  <td className="flex justify-center items-center h-[72px] text-[#6D778E] font-bold text-[20px]">
                  45
                  </td>
                  <td className="text-center px-[32px] tabletUserAcc:hidden mobileUserAcc:hidden">
                    <div className="inline-flex gap-[16px] items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="h-[72px] border-b border-[#A1B1D4]">
                  <td className="px-[32px] py-[14px] text-[#6D778E] leading-none">
                    <div className="flex gap-[16px] items-center">
                      <div className="space-y-[6px]">
                        <span className="text-[16px] text-[#3C3E41]">Pokopališče Zima</span>
                        <div className="text-[#6D778E] text-[14px]">Revolucije 12, Ljubno</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="w-[13px] h-[13px] tabletUserAcc:block hidden mobileUserAcc:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                  <td className="text-[#3C3E41] text-[16px]">
                  Port au Prince
                  </td>
                  <td className="flex justify-center items-center h-[72px] text-[#6D778E] font-bold text-[20px]">
                  0
                  </td>
                  <td className="text-center px-[32px] tabletUserAcc:hidden mobileUserAcc:hidden">
                    <div className="inline-flex gap-[16px] items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="h-[72px] border-b border-[#A1B1D4]">
                  <td className="px-[32px] py-[14px] text-[#6D778E] leading-none">
                    <div className="flex gap-[16px] items-center">
                      <div className="space-y-[6px]">
                        <span className="text-[16px] text-[#3C3E41]">Pokopališče Gabrsko</span>
                        <div className="text-[#6D778E] text-[14px]">Večna pot 12, Ljubljana</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="w-[13px] h-[13px] tabletUserAcc:block hidden mobileUserAcc:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                  <td className="text-[#3C3E41] text-[16px]">
                  Trbovlje
                  </td>
                  <td className="flex justify-center items-center h-[72px] text-[#6D778E] font-bold text-[20px]">
                  45
                  </td>
                  <td className="text-center px-[32px] tabletUserAcc:hidden mobileUserAcc:hidden">
                    <div className="inline-flex gap-[16px] items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="h-[72px] border-b border-[#A1B1D4]">
                  <td className="px-[32px] py-[14px] text-[#6D778E] leading-none">
                    <div className="flex gap-[16px] items-center">
                      <div className="space-y-[6px]">
                        <span className="text-[16px] text-[#3C3E41]">Pokopališče Gabrsko</span>
                        <div className="text-[#6D778E] text-[14px]">Večna pot 12, Ljubljana</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="w-[13px] h-[13px] tabletUserAcc:block hidden mobileUserAcc:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                  <td className="text-[#3C3E41] text-[16px]">
                  Trbovlje
                  </td>
                  <td className="flex justify-center items-center h-[72px] text-[#6D778E] font-bold text-[20px]">
                  45
                  </td>
                  <td className="text-center px-[32px] tabletUserAcc:hidden mobileUserAcc:hidden">
                    <div className="inline-flex gap-[16px] items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr className="h-[72px] border-b border-[#A1B1D4]">
                  <td className="px-[32px] py-[14px] text-[#6D778E] leading-none">
                    <div className="flex gap-[16px] items-center">
                      <div className="space-y-[6px]">
                        <span className="text-[16px] text-[#3C3E41]">Pokopališče Gabrsko</span>
                        <div className="text-[#6D778E] text-[14px]">Večna pot 12, Ljubljana</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="w-[13px] h-[13px] tabletUserAcc:block hidden mobileUserAcc:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                  <td className="text-[#3C3E41] text-[16px]">
                  Port au Prince
                  </td>
                  <td className="flex justify-center items-center h-[72px] text-[#6D778E] font-bold text-[20px]">
                  0
                  </td>
                  <td className="text-center px-[32px] tabletUserAcc:hidden mobileUserAcc:hidden">
                    <div className="inline-flex gap-[16px] items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="#6D778E" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-[13px] text-[#3C3E41] font-medium mt-[22px] tabletUserAcc:hidden mobileUserAcc:hidden">
            Op. Vnesite vsa pokopališča, vključno s tistimi, na katerih se že leta ne opravljajo pokopi; ta pokopališča so prikazana na vaši strani, <br/>
            ob tem pa je omogočen normalni vnos svojcem, ki imajo tam pokopane (če bi izdelali spominsko stran tudi za njih) in s tem bo tudi lažji vaš vpogled.  
            </div>
        </div>
      </div>
    </CompanyAccountLayout>
  );
}
