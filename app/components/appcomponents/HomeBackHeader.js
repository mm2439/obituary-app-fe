import React from "react";
import Link from "next/link";

const HomeBackHeader = () => {
  return (
    <div className="mobile:pb-[110px] relative max-w-[1280px] overflow-hidden mx-auto desktop:mt-[137.02px] mobile:mt-[115px] tablet:mt-[124px] flex justify-center">
      <img
        src="/samotna_klop.avif"
        alt="samotna_klop"
        className="mobile:hidden h-[605.27px] mobile:h-[257px] w-[1280px] object-cover"
      />
      <img
        src="/klop_naslovna.avif"
        alt="Slika"
        className="mobile:flex hidden h-[257px] w-[1280px] object-cover"
      />
      <div className="h-[170px] smmobile:w-[160px] smmobile:h-[332px] w-[288.58px] left-[25.41px] smmobile:left-[14px] top-2 rounded-lg border border-[#D4D4D4] absolute mobile:flex hidden overflow-hidden shadow-custom-light-dark-banner bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF10] backdrop-blur-sm">
        <div className="grid grid-cols-2 smmobile:grid-cols-1 gap-[22px] p-4 ">
          <HeaderHeadingTextMobile
            head={"OSMRTNICE"}
            index={"01."}
            id={1}
            endPoint={"/obituarylist"}
          />
          <HeaderHeadingTextMobile
            head={"POGREBI"}
            index={"02."}
            id={2}
            endPoint={""}
          />
          <HeaderHeadingTextMobile
            head={"SPOMINSKA"}
            index={"03."}
            id={3}
            endPoint={"/obituarylist"}
          />
          <HeaderHeadingTextMobile
            head={"CVETLIČARNE"}
            index={"04."}
            id={4}
            endPoint={"/cvetlicarne"}
          />
        </div>
      </div>
      <div className="justify-center absolute bottom-[44px] -mr-9 desktop:flex hidden">
        <HeaderHeadingText
          head={"OSMRTNICE"}
          index={"01."}
          id={1}
          endPoint={"/obituarylist"}
        />
        <HeaderHeadingText
          head={"POGREBI"}
          index={"02."}
          id={2}
          endPoint={""}
        />
        <HeaderHeadingText
          head={"SPOMINSKA"}
          index={"03."}
          id={3}
          endPoint={"/obituarylist"}
        />
        <HeaderHeadingText
          head={"CVETLIČARNE"}
          index={"04."}
          id={4}
          endPoint={"/cvetlicarne"}
        />
      </div>
      <div className=" justify-between absolute bottom-[70px] w-full max-w-[898.97px] tablet:flex hidden pl-[65px] pr-[50px]">
        <HeaderHeadingTextTablet
          head={"OSMRTNICE"}
          index={"01."}
          id={1}
          endPoint={"/obituarylist"}
        />
        <HeaderHeadingTextTablet
          head={"POGREBI"}
          index={"02."}
          id={2}
          endPoint={""}
        />
        <HeaderHeadingTextTablet
          head={"SPOMINSKA"}
          index={"03."}
          id={3}
          endPoint={"/obituarylist"}
        />
        <HeaderHeadingTextTablet
          head={"CVETLIČARNE"}
          index={"04."}
          id={4}
          endPoint={"/cvetlicarne"}
        />
      </div>
    </div>
  );
};

export default HomeBackHeader;

const HeaderHeadingText = ({ head, index, id, endPoint }) => {
  return (
    <div className="flex flex-row items-end w-[220px] ">
      <div className="w-[1.5px] h-[60px] bg-[#FFFFFF80] mr-[15px]" />
      <Link href={endPoint} className="">
        <div className="h-[75px]">
          <p
            className="flex"
            style={{
              marginTop: "2px",
              fontWeight: "200",
              textShadow: "1px 1px 2px #fff",
              color: "#7C7C7C",
              fontSize: "64px",
              lineHeight: "75px",
              fontVariationSettings: "'opsz' 64",
            }}
          >
            {index}
          </p>
        </div>
        <div className=" flex items-center h-[33px]">
          <p
            className="flex"
            style={{
              marginTop: "5px",
              color: "#DEDEDE",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "32.81px",
              fontVariationSettings: "'opsz' 28",
            }}
          >
            {head}
          </p>
        </div>
      </Link>
    </div>
  );
};
const HeaderHeadingTextTablet = ({ head, index, id, endPoint }) => {
  return (
    <div className="flex flex-row items-end  ">
      <div className="w-[1.5px] h-[53px] bg-[#FFFFFF80] mr-[7.31px]" />
      <Link href={endPoint}>
        <div className="h-[47px]">
          <p
            className="flex"
            style={{
              marginTop: "2px",
              fontWeight: "200",
              textShadow: "1px 1px 2px #fff",
              color: "#7C7C7C",
              fontSize: "40px",
              lineHeight: "47px",
              fontVariationSettings: "'opsz' 40",
            }}
          >
            {index}
          </p>
        </div>
        <div className=" flex items-center h-[23px]">
          <p
            className="flex"
            style={{
              marginTop: "5px",
              color: "#DEDEDE",
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "23px",
              fontVariationSettings: "'opsz' 20",
            }}
          >
            {head}
          </p>
        </div>
      </Link>
    </div>
  );
};
const HeaderHeadingTextMobile = ({ head, index, id, endPoint }) => {
  return (
    <div className="flex flex-row w-[110px] items-end ">
      <div className="w-[1px] h-[57px] bg-[#C0C0C080]  " />
      <Link href={endPoint} className="ml-[6px]">
        <div className="h-[38px]">
          <p
            className="flex"
            style={{
              fontWeight: "200",
              textShadow: "1px 1px 2px #fff",
              color: "#A2A2A2",
              fontSize: "32px",
              lineHeight: "38px",
              fontVariationSettings: "'opsz' 32",
            }}
          >
            {index}
          </p>
        </div>
        <div className=" flex items-center h-[19px]">
          <p
            className="flex"
            style={{
              color: "#414141",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "19px",
              fontVariationSettings: "'opsz' 16",
            }}
          >
            {head}
          </p>
        </div>
      </Link>
    </div>
  );
};
