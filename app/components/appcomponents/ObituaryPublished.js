import React from "react";
import Image from "next/image";
import imgFlag from "@/public/img_Flag.png";
import { format } from "date-fns";

const ObituaryPublished = ({ set_Id, setModal, data }) => {
  return (
    <>
      <div className="mx-auto border-t-[1px] border-b-[1px] border-[#DCE4E4] w-full flex items-center overflow-hidden bg-[#FFFAF826] py-[68px] mobile:py-[30px]">
        {/* Main Container */}
        <div className="max-w-[1042] w-full flex flex-col justify-center items-center">
          {/* Container for first details */}
          {/* <div className="desktop:w-[993px] h-[128px] flex flex-row mobile:w-full mobile:mr-[32px] mobile:ml-[32px] mobile:flex-col mobile:h-[202px] bg-blue-500 tablet:w-[534px] tablet:mx-auto justify-between"> */}
          <div
            className="desktop:w-[993px] h-[128px] mobile:h-auto flex flex-row tablet:w-[639px] tablet:mx-auto justify-between 
        mobile:w-full mobile:px-[32px] mobile:flex-col"
          >
            {/* First row details */}
            <div className="desktop:w-[496px] tablet:w-[496px] h-full flex flex-col items-start">
              <div className="block text-[16px] text-[#36556C] leading-[100%] mb-[16px]">
                Osmrtnica objavljena dne{" "}
                {data && data.createdTimestamp
                  ? format(new Date(data.createdTimestamp), "dd.MM.yyyy")
                  : "N/A"}{" "}
                by preko:
              </div>
              <div className="block text-[16px] text-[#36556C] leading-[100%] mb-[12px] mobile:hidden">
                {data?.Company?.name}
              </div>
              <div className="block text-[14px] text-[#36556C] leading-[100%] mb-[12px] mobile:hidden">
                {data?.Company?.address}
              </div>
              <div className="block text-[14px] text-[#36556C] leading-[100%] mb-[12px] mobile:hidden">
                Tel. {data?.Company?.phone}
              </div>
              {data?.Company?.type === "FLORIST" ? (
                <div className="block text-[14px] text-[#36556C] leading-[100%] mobile:hidden">
                  {`${
                    typeof window !== "undefined" ? window.location.origin : ""
                  }/c/floristsdetails/${data?.User?.slugKey}`}
                </div>
              ) : (
                <div className="block text-[14px] text-[#36556C] leading-[100%] mobile:hidden">
                  {`${
                    typeof window !== "undefined" ? window.location.origin : ""
                  }/p/funeralcompany/${data?.User?.slugKey}`}
                </div>
              )}
              <div className="text-[16px] text-[#1E2125] leading-[100%] mb-[12px] hidden mobile:block">
                Name of funeral company
              </div>
              <div className="text-[14px] text-[#1E2125] leading-[100%] mb-[16px] hidden mobile:block">
                Spletna stran
              </div>
              {/* <div className="block tablet:hidden mobile:hidden text-[16px] text-[#1E2125] leading-[18.75px] font-variation-customOpt16 ml-[2px]">
              This obituary was published on{" "}
              {data && data.createdTimestamp
                ? format(new Date(data.createdTimestamp), "dd.MM.yyyy")
                : "N/A"}{" "}
              by{" "}
            </div>
            <div className="hidden tablet:block mobile:block text-[14px] text-[#1E2125] leading-[18.75px] font-variation-customOpt16 mt-[5px]">
              To osmrtnico je dne{" "}
              {data && data.createdTimestamp
                ? format(new Date(data.createdTimestamp), "dd.MM.yyyy")
                : "N/A"}{" "}
              objavil:
            </div>

            <div className="font-variation-customOpt16 text-[16px] text-[#1E2125] leading-[18.75px] desktop:mt-[13px] tablet:mt-[17px] mobile:mt-[20px] desktop:ml-[2px]">
              {data && data.User
                ? data.User.role === "User"
                  ? data.User.name || ""
                  : data.User.company || ""
                : ""}
            </div>
            <div className="block tablet:hidden mobile:hidden leading-[16.41px] text-[14px] text-[#414141] mt-[4px] ml-[2px]">
              {data && data.User && data.User.region ? data.User.region : ""}
              {data && data.User && data.User.city ? `, ${data.User.city}` : ""}
            </div>
            <div className="block tablet:hidden mobile:hidden leading-[16.41px] text-[14px] text-[#414141] mt-[10px] ml-[2px]">
              {data && data.User && data.User.phone
                ? `Tel. ${data.User.phone}`
                : ""}
            </div>
            <div className="block tablet:hidden mobile:hidden leading-[16.41px] text-[14px] text-[#414141] mt-[9px] ml-[2px]">
              {(data && data.User && data.User.pageLink) || ""}
            </div>
            <div className="desktop:hidden tablet:block mobile:block text-[12px] font-variation-customOpt12 text-[#414141]">
              {(data && data.User && data.User.pageLink) || ""}
            </div> */}
            </div>

            {/* Second row details */}
            <div className="desktop:w-[496px] tablet:w-[496px] h-full flex flex-col items-end mobile:mt-[15px]">
              <div className="desktop:mr-[18px] tablet:mr-[18px] text-[12px] text-[#414141] leading-[14.06px] flex tablet:mb-[24px] mb-[24px] flex-row mobile:mb-[10px]">
                <div className="mr-[8px] ml-[6px]">
                  <Image
                    src={imgFlag}
                    alt="imgPrevious"
                    className=" w-[16px] h-[16px] mr-[-4px]"
                  />
                </div>
                <div
                  onClick={() => {
                    set_Id("error_report"), setModal(true);
                  }}
                  className="mt-[1px] "
                >
                  Sporoči napake
                </div>
              </div>
              <div className="leading-[] text-[12px] text-[#414141] desktop:mt-[8px] mobile:mt-[8px] tablet:mt-[8px] desktop:mr-[4px] tablet:mr-[4px] text-end">
                <span className="text-[14px]">Zadnje spremembe:</span> <br />
                {data && data?.MemoryLogs?.length > 0
                  ? data?.MemoryLogs?.map((item, index) => (
                      <div
                        key={index}
                        className="leading-[14.06px] text-[12px] desktop:mr-[3px] tablet:mr-[3px] mt-[4px] font-variation-customOpt12 text-[#414141]"
                      >
                        <div>
                          {item.typeInSL}:&nbsp; {item.userName},&nbsp;
                          {format(
                            new Date(item.createdTimestamp),
                            "dd.MM.yyyy"
                          )}
                        </div>
                      </div>
                    ))
                  : null}
              </div>
              {/* {data && data?.MemoryLogs?.length > 0
              ? data?.MemoryLogs?.map((item, index) => (
                  <div
                    key={index}
                    className="leading-[14.06px] text-[12px] desktop:mr-[3px] tablet:mr-[3px] mt-[4px] font-variation-customOpt12 text-[#414141]"
                  >
                    <div>
                      {item.typeInSL}: {item.userName}
                      {format(new Date(item.createdTimestamp), "dd.MM.yyyy")}
                    </div>
                  </div>
                ))
              : null}

            <div
              onClick={() => {
                set_Id("error_report"), setModal(true);
              }}
              className="mr-[3px] mt-[15px] text-[12px] text-[#414141] leading-[14.06px] hidden tablet:flex flex-row"
            >
              <div className="mr-[8px] ml-[6px]">
                <Image
                  src={imgFlag}
                  alt="img_Flag"
                  className=" w-[16px] h-[16px] mr-[-4px]"
                />
              </div>
              <div className="mt-[1px] ">Sporoči napake</div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-[#083545] text-[#F3F3F3] py-[29px]">
        <div
          className="text-[20px] mobile:text-[18px] mobile:font-variation-customOpt14 mobile:w-[300px] leading-[23.44px] font-variation-customOpt40 text-center text-[#C6E4EF]"
          style={{
            textShadow: "0px 10px 0px 0px #D8A800",
          }}
        >
          Želite biti obveščeni o spremembah na tej spominski strani?
        </div>

        <div className="text-center text-[12px] mt-[16px] text-[#F3F3F3] leading-[14.06px] font-variation-customOpt12 mobile:mx-[15px]">
          Vpišite se v Žalno knjigo, izrazite sožalje ali drugače sodelujte in
          ta stran bo uvrščena med vaše bližnje. <br />
          Vse spremembe bodo redno beležene v vašem uporabniškem računu, hkrati
          pa boste po spletni pošti še pravočasno obveščeni tudi o prihajajočih
          obletnicah pokojne(ga).
        </div>
      </div>
    </>
  );
};

export default ObituaryPublished;
