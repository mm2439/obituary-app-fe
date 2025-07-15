import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import Image from "next/image";

export default function Obituaries() {
  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[940px]">
        <div className="mt-[60px]">
          <div className="flex items-center gap-3">
            <div className="h-[55px] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] border-2 custom-border-gradient inline-flex flex-row items-center justify-center rounded-[8px] w-[310px] relative cursor-pointer tabletUserAcc:w-[310px]">
              <div
                className="text-[18px] text-[#FFFFFF]
                        font-variation-customOpt16 font-normal leading-[24px]"
              >
                DODAJ OSMRTNICO
              </div>

              <Image
                src={"/ico_right_white.png"}
                alt=""
                width={32}
                height={32}
                className="w-6 h-6 absolute top-1/2 right-[20px] -translate-y-1/2"
              />
            </div>
            <div className="h-[55px] bg-gradient-to-b from-[#F9AB16] to-[#C5870E] border-2 custom-border-gradient inline-flex flex-row items-center justify-center rounded-[8px] w-[310px] relative cursor-pointer tabletUserAcc:w-[310px]">
              <div
                className="text-[18px] text-[#FFFFFF]
                        font-variation-customOpt16 font-normal leading-[24px]"
              >
                PODARI SKRBNIKA
              </div>

              <Image
                src={"/ico_right_white.png"}
                alt=""
                width={32}
                height={32}
                className="w-6 h-6 absolute top-1/2 right-[20px] -translate-y-1/2"
              />
            </div>
          </div>

        </div>
        <div className="mt-[82px]">
          <h4 className="text-[24px] text-[#0A85C2]" style={{
            fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 26",
          }}>
            Dopolni podatke
          </h4>
          {/* Table */}
          <div className="mt-[20px]">
            <table className="min-w-[720px]">
              <thead>
                <tr className="text-[16px] tabletUserAcc:text-[14px] mobileUserAcc:text-[14px] text-[#6D778E] font-variation-customOpt16 font-normal leading-[24px] border-b border-[#A1B1D4] uppercase">
                  <th className="w-[20%] tabletUserAcc:w-[10%] mobileUserAcc:w-[10%] pb-[12px]"></th>
                  <th className="w-[25%] tabletUserAcc:w-[30%] mobileUserAcc:w-[30%] pb-[12px] text-start">osmrtnica</th>
                  <th className="w-[10%] pb-[12px]">skrbnik</th>
                  <th className="flex items-center gap-[10px]">
                    <span className="w-[50%] text-end">slika</span>
                    <span className="text-[#D4D4D4] shrink-0">I</span>
                    <span className="w-[50%] text-start">pogreb</span>
                  </th>
                  <th className="w-[20%] tabletUserAcc:w-[25%] mobileUserAcc:w-[25%] pb-[12px] text-end pr-[25px]">dopolni  podatke</th>
                </tr>
              </thead>
              <tbody className="bg-white/40">
                <tr className="h-[72px] border-b border-[#A1B1D4]">
                  <td className="px-[19px] py-[28px] tabletUserAcc:py-[16px] mobileUserAcc:py-[16px] text-[#6D778E] leading-none">
                    <span className="tabletUserAcc:hidden mobileUserAcc:hidden">12.03.2023</span>
                    <span className="hidden mobileUserAcc:block tabletUserAcc:block text-end text-[rgba(109,119,142,1)] leading-[20px] text-[14px]">12.03.<br/><span className="text-[rgba(212,212,212,1)]">2023</span></span>
                  </td>
                  <td>
                    <div className="inline-flex gap-[16px] items-center">
                      <div className="space-y-[1px]">
                        <span className="text-[14px] text-[#6D778E]">Elizabeth</span>
                        <div className="text-[#3C3E41] text-[16px]">Frederickson</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="#6D778E" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                  <td className="flex justify-center items-center h-[72px]">
                    <img src="/tick.png" alt="" className="w-[24px] h-[24px]" />
                  </td>
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-[50%] flex items-center justify-end">
                        <img src="/tick_green.png" alt="" className="w-[28px] h-[28px]" />
                      </div>
                      <span className="text-[#D4D4D4]">I</span>
                      <div className="w-[50%] flex items-center justify-start">
                        <img src="/cross.png" alt="" className="w-[28px] h-[28px]" />

                      </div>
                    </div>
                  </td>
                  <td className="pr-[25px]">
                    <button className="border-[2px] border-[#0A85C2] bg-white rounded-[6px] px-[11px] py-[5px] flex items-center gap-[16px] shadow-md ml-auto ">
                      <img src="/edit.png" alt="" className="w-[26px] h-[26px]" />
                      <span className="text-[16px] text-[#6D778E] leading-none">Dopolni</span>
                    </button>
                  </td>
                </tr>
                <tr className="h-[72px] border-b border-[#A1B1D4]">
                  <td className="px-[19px] py-[28px] tabletUserAcc:py-[16px] mobileUserAcc:py-[16px] text-[#6D778E] leading-none">
                    <span className="tabletUserAcc:hidden mobileUserAcc:hidden">12.03.2023</span>
                    <span className="hidden mobileUserAcc:block tabletUserAcc:block text-end text-[rgba(109,119,142,1)] leading-[20px] text-[14px]">12.03.<br/><span className="text-[rgba(212,212,212,1)]">2023</span></span>
                  </td>
                  <td>
                    <div className="inline-flex gap-[16px] items-center">
                      <div className="space-y-[1px]">
                        <span className="text-[14px] text-[#6D778E]">Alex</span>
                        <div className="text-[#3C3E41] text-[16px]">Hulk</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="#6D778E" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                  <td className="flex justify-center items-center h-[72px]">
                    {/* <img src="/tick.png" alt="" className="w-[24px] h-[24px]" /> */}
                  </td>
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-[50%] flex items-center justify-end">
                        <img src="/cross.png" alt="" className="w-[28px] h-[28px]" />
                      </div>
                      <span className="text-[#D4D4D4]">I</span>
                      <div className="w-[50%] flex items-center justify-start">
                        <img src="/cross.png" alt="" className="w-[28px] h-[28px]" />
                      </div>
                    </div>
                  </td>
                  <td className="pr-[25px]">
                    <button className="border-[2px] border-[#0A85C2] bg-white rounded-[6px] px-[11px] py-[5px] flex items-center gap-[16px] shadow-md ml-auto ">
                      <img src="/edit.png" alt="" className="w-[26px] h-[26px]" />
                      <span className="text-[16px] text-[#6D778E] leading-none">Dopolni</span>
                    </button>
                  </td>
                </tr>
                <tr className="h-[72px] border-b border-[#A1B1D4]">
                  <td className="px-[19px] py-[28px] tabletUserAcc:py-[16px] mobileUserAcc:py-[16px] text-[#6D778E] leading-none">
                    <span className="tabletUserAcc:hidden mobileUserAcc:hidden">12.03.2023</span>
                    <span className="hidden mobileUserAcc:block tabletUserAcc:block text-end text-[rgba(109,119,142,1)] leading-[20px] text-[14px]">12.03.<br/><span className="text-[rgba(212,212,212,1)]">2023</span></span>
                  </td>
                  <td>
                    <div className="inline-flex gap-[16px] items-center">
                      <div className="space-y-[1px]">
                        <span className="text-[14px] text-[#6D778E]">Elizabeth</span>
                        <div className="text-[#3C3E41] text-[16px]">Frederickson</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="#6D778E" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                  <td className="flex justify-center items-center h-[72px]">
                    <img src="/tick.png" alt="" className="w-[24px] h-[24px]" />
                  </td>
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-[50%] flex items-center justify-end">
                        <img src="/tick_green.png" alt="" className="w-[28px] h-[28px]" />
                      </div>
                      <span className="text-[#D4D4D4]">I</span>
                      <div className="w-[50%] flex items-center justify-start">
                        <img src="/tick_green.png" alt="" className="w-[28px] h-[28px]" />

                      </div>
                    </div>
                  </td>
                  <td className="pr-[25px] ">
                    <button className="border-[2px] border-[#ffffff00] rounded-[6px] px-[11px] py-[5px] flex items-center gap-[16px] ml-auto">
                      <img src="/edit.png" alt="" className="w-[26px] h-[26px]" />
                      <span className="text-[16px] text-[#6D778E] leading-none opacity-0">Dopolni</span>
                    </button>
                  </td>
                </tr>
                <tr className="h-[72px] border-b border-[#A1B1D4]">
                  <td className="px-[19px] py-[28px] tabletUserAcc:py-[16px] mobileUserAcc:py-[16px] text-[#6D778E] leading-none">
                    <span className="tabletUserAcc:hidden mobileUserAcc:hidden">12.03.2023</span>
                    <span className="hidden mobileUserAcc:block tabletUserAcc:block text-end text-[rgba(109,119,142,1)] leading-[20px] text-[14px]">12.03.<br/><span className="text-[rgba(212,212,212,1)]">2023</span></span>
                  </td>
                  <td>
                    <div className="inline-flex gap-[16px] items-center">
                      <div className="space-y-[1px]">
                        <span className="text-[14px] text-[#6D778E]">Elizabeth</span>
                        <div className="text-[#3C3E41] text-[16px]">Frederickson</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="#6D778E" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </td>
                  <td className="flex justify-center items-center h-[72px]">
                    <img src="/tick.png" alt="" className="w-[24px] h-[24px]" />
                  </td>
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-[50%] flex items-center justify-end">
                        <img src="/tick_green.png" alt="" className="w-[28px] h-[28px]" />
                      </div>
                      <span className="text-[#D4D4D4]">I</span>
                      <div className="w-[50%] flex items-center justify-start">
                        <img src="/cross.png" alt="" className="w-[28px] h-[28px]" />

                      </div>
                    </div>
                  </td>
                  <td className="pr-[25px]">
                    <button className="border-[2px] border-[#0A85C2] bg-white rounded-[6px] px-[11px] py-[5px] flex items-center gap-[16px] shadow-md ml-auto">
                      <img src="/edit.png" alt="" className="w-[26px] h-[26px]" />
                      <span className="text-[16px] text-[#6D778E] leading-none">Dopolni</span>
                    </button>
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
