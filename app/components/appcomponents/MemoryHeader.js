import Image from "next/image";
import Link from "next/link";
import omr from "@/public/omr.png";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function MemoryHeader({ onChange }) {
  const router = useRouter();
  return (
    <header className="flex flex-col fixed left-0 right-0 shadow-md z-50 bg-[#FFFFFF]">
      <div className=" flex w-full justify-center">
        <div
          className={`
            desktop:h-[92.02px] mobile:h-[68px] tablet:h-[79px]
            w-full  desktop:w-[1200px]
            desktop:pl-[23px] desktop:pr-[27px] tablet:pl-[23px]  tablet:pr-[27px] mobile:px-[24px]
            flex justify-between items-center
          `}
        >
          <Link
            href={"/"}
            className="flex justify-start items-center h-full mobile:hidden"
          >
            <Image
              src={omr}
              alt="App Logo"
              width={500}
              height={500}
              className="box-border h-[22px] w-[182.76px] desktop:w-[255.31px] desktop:h-[32px]"
            />
          </Link>
          <div className="flex items-center mobile:flex-row-reverse mobile:justify-between mobile:w-full gap-[70px] tablet:gap-[50px]">
            <div className="flex items-center justify-between gap-[20px] mobile:gap-[14px] border-[2px] border-[#0A85C2] rounded-[4px] h-[60px] mobile:h-[50px] px-[13px] mobile:px-[10px]">
              <Image
                src={"/memory_header_bottom.png"}
                className="mobile:w-[28px] mobile:h-[28px] cursor-pointer"
                alt=""
                width={31}
                height={31}
                onClick={() => onChange("previous")}
              />
              <span className="text-[#0A85C2] text-[20px] mobile:text-[14px]">
                LOKALNO
              </span>
              <Image
                src={"/memory_header_top.png"}
                className="mobile:w-[28px] mobile:h-[28px] cursor-pointer"
                alt=""
                width={31}
                height={31}
                onClick={() => onChange("next")}
              />
            </div>
            <div
              onClick={() => router.back()}
              className="cursor-pointer flex tablet:flex-col mobile:flex-col items-center gap-[20px] tablet:gap-[5px] mobile:gap-[5px]"
            >
              <Image
                src={"/memory_header_left.png"}
                alt=""
                width={31}
                height={31}
              />
              <span className="text-[#3C3E41] text-[20px] tablet:text-[14px] mobile:text-[14px] font-bold">
                NAZAJ
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
