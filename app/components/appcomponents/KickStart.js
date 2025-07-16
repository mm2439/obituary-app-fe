import Image from "next/image";
import Link from "next/link";

export default function KickStart({cUrl = "" , showButton = "false"}) {
    return (
        <div className="flex w-full flex-col items-center bg-[#FFFFFF] mobile:bg-[#E0E9F3] pt-[85px] pb-[100px]">
          <Image src="/funeral-promo-footer.png" alt="KickStart" width={94} height={94} />
          <div className="flex gap-[25px] flex-col justify-between">
              <div className="flex flex-col w-full mt-[10px]">
                <div className="text-[40px] mobile:text-[28px] text-[#3C3E41] font-light text-center leading-[48px]">
                Kaj zdaj, kako naj začnem?
                </div>
                <div className="text-[22px] mobile:hidden mobile:text-[20px] text-[#3C3E41] font-bold mt-[5px] font-variation-customOpt24 text-center leading-[48px]">
                Pogosta vprašanja in preprosti napotki
                </div>
                <div className="text-[20px] hidden mobile:block mobile:text-[20px] text-[#3C3E41] font-bold font-variation-customOpt24 text-center leading-[48px]">
                Pogosta vprašanja in napotki
                </div>
              </div>

              <Link
                href={cUrl ? `${cUrl}`: "/c-faq"}
                className={`w-[250px] h-[53px] shrink-0 rounded-full text-white justify-center items-center self-center shadow-custom-light-dark bg-gradient-to-b from-[#0D94E8] to-[#1860A3] ${showButton ? "flex" : " hidden desktop:flex"}` }
                style={{
                  boxShadow: '0px 4px 5px 0px #00000038, 0px 2px 3px 0px #00000073',
                }}
              >
                Odpri
              </Link>
            </div>
        </div>
    )
}