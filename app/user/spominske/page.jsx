import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";

export default function Spominske() {
  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[940px]">
        <div className="mt-[62px] flex justify-between">
          <div className="flex gap-[15px]">
            <div className="border-gradient-rounded  flex flex-col h-[90px] w-[310px] py-[13px] px-[15px] border-[2px] border-[#0A85C2] rounded-[10px] bg-[#fff] shadow-md">
              <div className="flex justify-between items-start mb-[2px]">
                <h2 className="text-[32px] text-[#CCCCCC] font-light leading-none flex items-end gap-[10px]">
                <span className="font-bold text-[#6D778E] text-[40px]">18</span>  I <span>6</span>
                </h2>
                <img src="/ico_pregled.png" alt="pregled" className="w-[26px] h-[20px]" />
              </div>
              <p className="text-[16px] text-[#CCCCCC] font-light"><span className="text-[#1E2125] font-medium">Objavljenih osmrtnic  </span> I  Ta mesec</p>
            </div>

            <div className="border-gradient-rounded  flex flex-col h-[90px] w-[310px] py-[13px] px-[15px] border-[2px] border-[#0A85C2] rounded-[10px] bg-[#fff] shadow-md">
              <div className="flex justify-between items-start mb-[2px]">
                <h2 className="text-[32px] text-[#CCCCCC] font-light leading-none flex items-end gap-[10px]">
                <span className="font-bold text-[#6D778E] text-[40px]">5</span>  I <span>2</span>
                </h2>
                <img src="/spominske.png" alt="pregled" className="w-[26px] h-[20px]" />
              </div>
              <p className="text-[16px] text-[#CCCCCC] font-light"><span className="text-[#1E2125] font-medium">Podarjenih Skrbnikov </span> I  Ta mesec</p>
            </div>
          </div>
          <div className="space-y-[5px] tabletUserAcc:hidden mobileUserAcc:hidden">
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/ico_pregled.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">Dodana osmrtnica</span>
            </div>
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/spominske.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">Dodan Skrbnik</span>
            </div>
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/dodana.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">Dodana osmrtnica IN Skrbnik</span>
            </div>
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/obarvano.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">(obarvano) Aktivni Skrbnik</span>
            </div>
          </div>
        </div>
        <div className="mt-[76px] min-w-[720px]">
          <div className="flex justify-between">
            <div className="flex items-end gap-2">
              <h4 className="text-[24px] text-[#0A85C2] leading-none" style={{
                fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 26",
              }}>
                Vse osmrtnice in spominske 
              </h4>
              <span className="text-[#717B8C] text-[12px] leading-none mb-[2px]">,{"   "}ki ste jih podarili</span>
            </div>

            <div className="space-y-[5px] tabletUserAcc:block mobileUserAcc:block hidden">
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/ico_pregled.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">Dodana osmrtnica</span>
            </div>
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/spominske.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">Dodan Skrbnik</span>
            </div>
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/dodana.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">Dodana osmrtnica IN Skrbnik</span>
            </div>
            <div className="flex gap-3">
              <div className="w-[30px] shrink-0 inline-flex items-center justify-end">
                <img src="/obarvano.png" alt="spominske" className="h-[10px]" />
              </div>
              <span className="text-[#717B8C] text-[12px]">(obarvano) Aktivni Skrbnik</span>
            </div>
          </div>
          </div>
          <div className="mt-[36px] grid grid-cols-4 tabletUserAcc:grid-cols-3 mobileUserAcc:grid-cols-3 gap-[18px]">
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-[8px] p-[2px] h-[72px]">
              <div className="bg-[#E9F1E8] rounded-[7px] w-full h-full">
                <div className="w-full flex flex-col items-center justify-center pt-[9px] pb-0">
                  <p className="text-[16px] text-[#1E2125]">Angela Sanpaoli</p>
                  <p className="text-[14px] text-[#6D778E]">Palermo</p>
                </div>
                <div className="flex justify-between items-center px-[6px] pb-[6px]">
                  <img src="/dodana.png" alt="" className="h-[10px]" />
                  <span className="text-[#6D778E99] text-[10px] leading-none">11.10.2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-[8px] p-[2px] h-[72px]">
              <div className="bg-[#E9F1E8] rounded-[7px] w-full h-full">
                <div className="w-full flex flex-col items-center justify-center pt-[9px] pb-0">
                  <p className="text-[16px] text-[#1E2125]">Otto von Bismarck</p>
                  <p className="text-[14px] text-[#6D778E]">Schönhausen</p>
                </div>
                <div className="flex justify-between items-center px-[6px] pb-[6px]">
                  <img src="/ico_pregled.png" alt="" className="h-[10px]"  />
                  <span className="text-[#6D778E99] text-[10px] leading-none">11.10.2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-[8px] p-[2px] h-[72px]">
              <div className="bg-gradient-to-r from-[#FFFFFF] to-[#edf1f5] rounded-[7px] w-full h-full">
                <div className="w-full flex flex-col items-center justify-center pt-[9px] pb-0">
                  <p className="text-[16px] text-[#1E2125]">Juan Pedro Gonzales Ochoa</p>
                  <p className="text-[14px] text-[#6D778E]">Santo Domingo</p>
                </div>
                <div className="flex justify-between items-center px-[6px] pb-[6px]">
                  <img src="/dodana.png" alt="" className="h-[10px]"  />
                  <span className="text-[#6D778E99] text-[10px] leading-none">11.10.2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-[8px] p-[2px] h-[72px]">
              <div className="bg-[#E9F1E8] rounded-[7px] w-full h-full">
                <div className="w-full flex flex-col items-center justify-center pt-[9px] pb-0">
                  <p className="text-[16px] text-[#1E2125]">Otto von Bismarck</p>
                  <p className="text-[14px] text-[#6D778E]">Schönhausen</p>
                </div>
                <div className="flex justify-between items-center px-[6px] pb-[6px]">
                  <img src="/spominske.png" alt="" className="h-[10px]"  />
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-[8px] p-[2px] h-[72px]">
              <div className="bg-[#E9F1E8] rounded-[7px] w-full h-full">
                <div className="w-full flex flex-col items-center justify-center pt-[9px] pb-0">
                  <p className="text-[16px] text-[#1E2125]">Muhammad Ali</p>
                  <p className="text-[14px] text-[#6D778E]">Las Vegas</p>
                </div>
                <div className="flex justify-between items-center px-[6px] pb-[6px]">
                  <img src="/spominske.png" alt="" className="h-[10px]" />
                  <span className="text-[#6D778E99] text-[10px] leading-none">11.10.2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-[8px] p-[2px] h-[72px]">
              <div className="bg-gradient-to-r from-[#FFFFFF] to-[#edf1f5] rounded-[7px] w-full h-full">
                <div className="w-full flex flex-col items-center justify-center pt-[9px] pb-0">
                  <p className="text-[16px] text-[#1E2125]">Juan Pedro Gonzales Ochoa</p>
                  <p className="text-[14px] text-[#6D778E]">Santo Domingo</p>
                </div>
                <div className="flex justify-between items-center px-[6px] pb-[6px]">
                  <img src="/dodana.png" alt="" className="h-[10px]" />
                  <span className="text-[#6D778E99] text-[10px] leading-none">11.10.2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-[8px] p-[2px] h-[72px]">
              <div className="bg-gradient-to-r from-[#FFFFFF] to-[#edf1f5] rounded-[7px] w-full h-full">
                <div className="w-full flex flex-col items-center justify-center pt-[9px] pb-0">
                  <p className="text-[16px] text-[#1E2125]">Juan Pedro Gonzales Ochoa</p>
                  <p className="text-[14px] text-[#6D778E]">Santo Domingo</p>
                </div>
                <div className="flex justify-between items-center px-[6px] pb-[6px]">
                  <img src="/dodana.png" alt="" className="h-[10px]" />
                  <span className="text-[#6D778E99] text-[10px] leading-none">11.10.2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CompanyAccountLayout>
  );
}
