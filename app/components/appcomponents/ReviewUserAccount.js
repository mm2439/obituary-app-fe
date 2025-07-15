"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import obituaryService from "@/services/obituary-service";
import regionsAndCities from "@/utils/regionAndCities";
import DropdownWithSearch from "./DropdownWithSearch";

const ReviewUserAccount = () => {
  const [showSelect, setShowSelect] = useState(false);
  const [memories, setMemories] = useState(null);

  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    try {
      const response = await obituaryService.getMemories();
      console.log(response);
      setMemories(response.finalObituaries);
    } catch (error) {
      console.log(error);
    }
  };

  const funeralDateFormatted = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";

    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();

    return `${day}.${month}.${year}`;
  };
  const [selectedCity, setSelectedCity] = useState(null);

  const cityOptions = [
    ...Object.values(regionsAndCities)
      .flat()
      .map((city) => ({
        place: city,
        id: city,
      }))
      .sort((a, b) => a.place.localeCompare(b.place, "sl")),
  ];
  const handleCitySelect = async (item) => {
    setSelectedCity(item);
  };

  return (
    <div
      className="max-[1049px] w-full  mt-[62px] desktopUserAcc:pr-[55px]
      tabletUserAcc:w-full tabletUserAcc:max-w-[726px] 
      mobileUserAcc:mt-[32px]
      mobileUserAcc:w-full mobileUserAcc:max-w-[360px] 
     "
    >
      <div
        // 23 October 2024 - removed tabletUserAcc:ml-[39px]
        className=" w-[310px] h-[90px] bg-[#FFFFFFCC] border-[2px] border-[solid] border-[#0A85C2] flex flex-col justify-between rounded-[8px] pt-[14px] pl-[16px] pb-[24px] 
       mobileUserAcc:w-[335px] mobileUserAcc:h-[60px]
       mobileUserAcc:pt-[0px] mobileUserAcc:pl-[51px] mobileUserAcc:pb-[0px] 
       mobileUserAcc:flex-row
       mobileUserAcc:items-center
       mobileUserAcc:justify-normal
       "
      >
        <div>
          <p
            className="text-[40px] font-bold leading-[46.88px] text-[#6D778E] m-[0]
          mobileUserAcc:text-[#0A85C2]
          "
          >
            {memories?.length}
          </p>
        </div>

        <div className="mobileUserAcc:ml-[16px]">
          <p
            className="text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]
           mobileUserAcc:text-[16px] mobileUserAcc:font-normal mobileUserAcc:leading-[18.75px] mobileUserAcc:text-[#6D778E] mobileUserAcc:uppercase
          "
          >
            Strani, kjer si sodeloval/a
          </p>
        </div>
      </div>

      <div className="flex mobileUserAcc:hidden justify-between   mt-[26px] ">
        <div className=" text-[#717B8C] text-[12px] font-normal mt-[22px] ">
          Klikni okvir za ogled spominske strani
        </div>
        <div className="flex flex-col ">
          <div className="flex items-center">
            <Image src={"/rect_blue_icon.png"} alt="" width={19} height={10} />
            <div className=" ml-3 text-[#717B8C] text-[12px] font-normal ">
              obarvano ozadje - stran ima Skrbnika
            </div>
          </div>
          <div className="flex items-center">
            <Image src={"/rect_perp_icon.png"} alt="" width={19} height={10} />
            <div className="ml-3 text-[#717B8C] text-[12px] font-normal ">
              vijolični okvir - kjer si ti Skrbnik
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[10px] tabletUserAcc:mt-[10px] mobileUserAcc:mt-[12px] w-full flex flex-wrap gap-[11px] tabletUserAcc:gap-[9px] mobileUserAcc:gap-[9px] ">
        <div className="mt-[10px] tabletUserAcc:mt-[10px] mobileUserAcc:mt-[12px] w-full flex flex-wrap gap-[11px] tabletUserAcc:gap-[9px] mobileUserAcc:gap-[9px]">
          {memories && memories.length > 0
            ? memories.map((memory, index) => (
                <div
                  key={index}
                  className="relative w-[234px] h-[76px] p-[2px] rounded-[8px]
        mobileUserAcc:w-[160px] mobileUserAcc:h-[73px]"
                >
                  <Link
                    href={`/memorypage/${memory.id}/${memory.name}_${
                      memory.sirName
                    }_${funeralDateFormatted(memory.funeralTimestamp)}`}
                    className={`flex flex-col justify-between items-center w-full h-full rounded-[8px] pt-[12px] pb-[16px]
            mobileUserAcc:py-[6px]
            ${
              memory.Keepers?.length > 0
                ? memory.isKeeper
                  ? "bg-[#e9f1e8] border-2 border-purple-500"
                  : "bg-[#e9f1e8] border-2 border-[#1860A3]"
                : "bg-[#ffffff] border-2 border-[#1860A3]"
            }
          `}
                  >
                    <div className="mobileUserAcc:text-center">
                      <p
                        className="text-[16px] font-normal leading-[18.75px] text-[#1E2125] m-[0]
              mobileUserAcc:text-[14px] mobileUserAcc:leading-[16.41px] mobileUserAcc:text-[#6D778E] mobileUserAcc:mt-[2px]"
                      >
                        {memory.name}
                        <span className="mobileUserAcc:block text-[16px] ml-1 font-normal leading-[18.75px] text-[#1E2125] m-[0]">
                          {memory.sirName}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-[14px] font-normal leading-[16.41px] text-[#6D778E] m-[0]
              mobileUserAcc:text-[12px] mobileUserAcc:font-light mobileUserAcc:leading-[14.06px] mobileUserAcc:m-[0]"
                      >
                        {memory.city}
                      </p>
                    </div>
                    <div className="absolute bottom-[4px] right-[10px] mobileUserAcc:hidden">
                      <p className="text-[10px] font-extralight leading-[11.72px] text-[rgba(109,_119,_142,_0.6)] m-[0]">
                        {funeralDateFormatted(memory.deathDate)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </div>

      <div
        style={{
          fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 32",
        }}
        className="text-[24px] tabletUserAcc:mt-[83px] tabletUserAcc:pl-[26px] mt-[100px] mobileUserAcc:mt-[69px] text-6 font-semibold text-[#0A85C2] "
      >
        Dodaj bližnjega ?
      </div>

      <div className="flex mobileUserAcc:hidden w-[690px] tabletUserAcc:pl-[26px] tabletUserAcc:max-w-[660px] text-[#717B8C] text-[14px] font-normal font-variation-customOpt14 ">
        Enostavno je. Zgolj sodelujte na njegovi/njeni spominski strani in
        avtomatsko bo dodan/a med vaše bližnje na tej strani, prikazana bo
        statistika tiste spominske in nastavljeni bodo opomniki ob obletnicah,
        da jih ne zamudite.
      </div>

      <div
        className="flex gap-[16px] mt-[32px] tabletUserAcc:pl-[26px] mobileUserAcc:mt-[23px]
      mobileUserAcc:block
      "
      >
        <input
          type="text"
          placeholder="Išči po imenu / priimku"
          className="w-[227px] h-[36px] bg-[#f1fffe] border-[1px] border-[solid] border-[#7C7C7C] rounded-[8px] pl-[16px] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#7C7C7C] placeholder:m-[0]
          mobileUserAcc:w-[335px]
          "
        ></input>
        <div className="w-[227px]   bg-transparent  rounded-[8px]   placeholder:text-[16px] placeholder:font-normal placeholder:text-[#7C7C7C] placeholder:m-[0]">
          <DropdownWithSearch
            onSelectCity={handleCitySelect}
            selectedCity={selectedCity}
            isFrom="reviewUser"
          />
        </div>

        <div className=" flex mobileUserAcc:hidden justify-center  w-9 items-center h-full aspect-square rounded-lg bg-[#414141]">
          <MagnifyingGlassIcon className="w-5 h-5 text-white " />
        </div>
      </div>

      <div className="hidden mobileUserAcc:flex h-[48px] mt-4 w-[335px] tabletUserAcc:w-[292px] bg-[#414141] rounded-[8px] justify-center items-center ">
        <div
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 400,
            color: "#F6F6F6",
            fontVariationSettings: "'opsz' 16",
          }}
        >
          Prikaži
        </div>
      </div>
    </div>
  );
};

export default ReviewUserAccount;
