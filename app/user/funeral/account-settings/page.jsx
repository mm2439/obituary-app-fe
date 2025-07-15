import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";

export default function AccountSettings() {
  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[1000px] min-w-[720px]">
        <div className="grid grid-cols-2 tabletUserAcc:grid-cols-1 mobileUserAcc:grid-cols-1 gap-4 tabletUserAcc:gap-[48px] mobileUserAcc:gap-[48px] text-[#6D778E] mt-[60px] text-[14px] tabletUserAcc:text-[12px] mobileUserAcc:text-[12px]">
          <div className="space-y-[18px]">
            <div className="flex items-center gap-5">
              <span className="uppercase">Podjetje:</span>
              <span className="text-[#3C3E41]">
                Blue Daisy Florist
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="uppercase">Naslov:</span>
              <span className="text-[#3C3E41]">
                Leonardo Boulevard 134, Shanghai
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="uppercase">tel. številka:</span>
              <span className="text-[#3C3E41]">
                037-877-199
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="uppercase">email:</span>
              <span className="text-[#3C3E41]">
                ourgreatemail@yahoo.com
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="uppercase">spletna stran:</span>
              <span className="text-[#3C3E41]">
                www.bludaisyflorist.com
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="uppercase">kontaktna oseba:</span>
              {/* <span className="text-[#3C3E41]">
                www.bludaisyflorist.com
              </span> */}
            </div>
          </div>
          <div className="space-y-[18px]">
            <div className="flex items-center gap-5">
              <span className="uppercase">uporabniško ime:</span>
              <span className="text-[#3C3E41]">
                bludaisy
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="uppercase">geslo:</span>
              <span className="text-[#3C3E41]">
                **************
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="uppercase">izberi novo geslo:</span>
              <span className="text-[#3C3E41]">

              </span>
            </div>
          </div>
        </div>
        <hr className="my-[28px]" />
        <div className="space-y-4 text-[#6D778E] text-[14px] tabletUserAcc:text-[12px] mobileUserAcc:text-[12px]">
          <span className="capitalize">City:</span>
          <div className="flex items-center gap-5 px-6">
            <span className="uppercase">Primarno:</span>
            <span className="text-[#3C3E41]">
              Bangalore
            </span>
            <div className="w-full flex items-center justify-center">
              <button
                className="flex items-center justify-between px-6 py-2 text-sm text-gray-500 border border-[#6D778E] rounded focus:outline-none focus:ring-2 focus:ring-blue-100 gap-5 text-[14px] tabletUserAcc:text-[12px] mobileUserAcc:text-[12px]"
                style={{ height: '38px' }}
              >
                <span>Dodaj še drugo mesto</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-5 px-6">
            <span className="capitalize">Dodatno:</span>
          </div>
          <hr />
        </div>
        <div className="grid grid-cols-2 gap-4 text-[#6D778E] mt-[60px] text-[14px] tabletUserAcc:text-[12px] mobileUserAcc:text-[12px]">
          <div className="flex items-center gap-5">
            <span className="uppercase">stran na osmrtnica.com:</span>
            <span className="text-[#3C3E41]">
              www.si.osmrtnica.com/sullivanis
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="uppercase">izdelana:</span>
            <span className="text-[#3C3E41]">
              14.05.2024
            </span>
          </div>
        </div>
      </div>
    </CompanyAccountLayout>
  );
}
