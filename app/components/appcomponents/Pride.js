import React, { useEffect, useState } from "react";
import Image from "next/image";
import API_BASE_URL from "@/config/apiConfig";
const Pride = ({ data }) => {
  return (
    <div
      className="max-w-[1920px] relative w-full tablet:h-[359px] mobile:h-[567px] desktop:pt-[64px] desktop:pb-[64px] 
         tablet:bg-gradient-to-r tablet:from-[#E6EBFA66] tablet:to-[#E2EEFC66]
         mobile:bg-gradient-to-r mobile:from-[#E6EBFA66] mobile:to-[#E2EEFC66]
        overflow-hidden mx-auto flex desktop:justify-center desktop:items-center tablet:justify-center tablet:items-center mobile:justify-center"
    >
      <div
        className="max-w-[889px] flex flex-row mobile:flex-col mobile:mt-[30px] items-center justify-between w-full h-[266px] 
            tablet:w-[594.33px] tablet:h-[265px] mobile:w-[293.49px] mobile:h-[479.13]px"
      >
        <div
          className="w-[419px] h-[230px] tablet:h-[332px] tablet:w-[269px] tablet:mt-[43.5px] mobile:w-[269px]
                mobile:h-[251px]"
        >
          <div
            className="leading-[46.88px] desktop:ml-[10px] tablet:mt-[15px] mobile:text-[28px] 
                    mobile:font-variation-customOpt28 mobile:leading-[32.81px] mobile:flex mobile:justify-center text-[40px] text-[#1E2125] font-variation-customOpt40"
          >
            <div>{data?.secondary_title || "Naš ponos"}</div>
          </div>
          <div
            className="font-variation-customOpt16 flex flex-col mt-[15px] text-[#414141] desktop:ml-[10px] leading-[24px] 
                    tablet:leading-[22.4px] tablet:text-[14px] text-[16px] mobile:text-[14px] mobile:leading-[22.4px] mobile:text-center"
          >
            {/* <div>{data?.secondary_description}</div> */}

            <div
              className="mt-[25px] tablet:mt-[20px] tablet:leading-[22.4px] tablet:text-[14px] text-[#414141]
                        mobile:text-[14px] mobile:leading-[22.4px] mobile:text-center"
            >
              {data?.secondary_description ||
                "Projekt prenove trboveljskega pokopališča je bil leta 2020 izbran kot primer dobre prakse trajnostnega urbanega razvoja v okviru razpisa Mesta mestom."}
              {/* <span className="underline"> POVEZAVA TUKAJ</span> */}
            </div>
          </div>
        </div>

        <div
          className="w-[371.33px] h-[266px] tablet:w-[267.06px] tablet:h-[187.69px] 
                bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] tablet:p-[3px] mobile:p-[3px] dekstop:p-2 rounded-lg mobile:w-[299.49px] mobile:h-[209.13px]  mobile:mt-[25px]"
        >
          {data?.secondary_image ? (
            <Image
              src={`${API_BASE_URL}/${data.secondary_image}`}
              alt="Pride_img"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="h-full w-full object-cover rounded-lg"
            />
          ) : (
            <Image
              src={`/pokopalisce.avif`}
              alt="Pride_img"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className="h-full w-full object-cover rounded-lg"
            />
          )}
        </div>
      </div>

      {!data.id && (
        <div
          className="hidden z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[4050px] tablet:mt-[3700px] desktop:mt-[10%] desktop:flex
              "
        >
          <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[171px] ">
            <p className="flex mobile:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Koristne informacije za uporabnike. Sami napišete najbolj pogosta
              vprašanja in nanje odgovorite. <br />
              <br />
              Enako tudi gumb ‘’Kaj storiti, ko se zgodi’’
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pride;
