import Link from "next/link";

export default function AnnouncementBlock() {
  return (
    <div className="bg-[#083545] border border-[#0F0671]">
      <div className="max-w-[1200px] mx-auto py-[37px] mobile:pb-[24px] px-[32px] flex items-end justify-between mobile:flex-col mobile:items-center mobile:gap-[24px]">
        <div className="flex flex-col gap-[16px] mobile:gap-[10px]">
          <h4 className="text-[20px] mobile:text-[18px] leading-[100%] text-[#FFFFFF] font-variation-customOpt24 font-normal relative">
            Postani skrbnik te spominske strani
            <a className="text-[#81D6F1] text-[20px] hidden tablet:inline px-[5px] absolute right-[-20px] top-[-10px]">
              ?
            </a>
          </h4>
          <p className="text-[16px] mobile:text-[14px] mobile:text-center leading-[24px] text-[#EDF1F3] font-variation-customOpt16 font-normal">
            Naredi stran bolj osebno, bolj toplo.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="bg-[#CAF0F8] text-[#1E2125] text-[16px] leading-[24px] font-variation-customOpt16 font-normal py-[12px] px-[24px] rounded-[8px]">
            Postani Skrbnik
          </div>
        </div>
        <p className="text-[#EDF1F3] text-[16px] leading-[24px] font-variation-customOpt16 font-normal tablet:hidden mobile:w-full mobile:text-end">
          Več informacij
          <span className="mobile:hidden">
            o Skrbniku je
            <Link
              href={"/spominska-stran"}
              className="underline text-[#41C0FF] font-variation-customOpt16 font-normal italic"
            >
              tukaj
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
