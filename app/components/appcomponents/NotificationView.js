"use client";
import { React, useState } from "react";
import Dropdown from "@/app/components/appcomponents/Dropdown";
import Link from "next/link";
import regionsAndCities from "@/utils/regionAndCities";

const NotificationView = () => {
  const [isSelected, setIsSelected] = useState(false);
  const handleCheckboxClick = () => {
    setIsSelected(!isSelected);
  };

  const [isSelectedEnkrat, setIsSelectedEnkrat] = useState(false);
  const handleCheckboxEnkrat = () => {
    setIsSelectedEnkrat(!isSelectedEnkrat);
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cityOptions = 
  Object.values(regionsAndCities)
      .flat()
      .map((city) => ({
        place: city,
        id: city,
      }))
      .sort((a, b) => a.place.localeCompare(b.place, "sl"));

const handleCitySelect = (item) => {
        setSelectedCity(item.place);
        console.log(selectedCity)
    
        
      };
  return (
    <div className="w-full bg-[#fffbf4] flex justify-center mobile:h-[529px]">
      <div
        className="
      desktop:w-[1200px] desktop:h-[453px] desktop:pl-[57px] desktop:pr-[55px]
      tablet:w-[680px] tablet:pb-[73.36px] tablet:pt-[78.35px]
       mobile:mt-[46.77px] mobile:mb-[62.76px] mobile:w-[310px] "
      >
        <div className="flex flex-col desktop:w-[1088px] items-center">
          <div className="desktop:w-[636px] desktop:h-[297.48px] desktop:mt-[80.26px] mobile:w-full">
            <div className="w-full flex flex-col items-center mobile:text-center">
              <div className="mobile:w-[290px] block mobile:hidden justify-center items-center ">
                <div className="flex text-[32px] leading-[37.5px] font-normal text-[#1E2125] font-variation-customOpt32 mobile:text-[28px] mobile:font-variation-customOpt28">
                  Obveščanje o osmrtnicah v domačem kraju
                </div>
              </div>
              <div className="mobile:w-[250px] hidden mobile:block justify-center items-center">
                <div className="flex text-[32px] leading-[32.81px] font-normal text-[#1E2125] font-variation-customOpt32 mobile:text-[28px] mobile:font-variation-customOpt28">
                  Obveščanje o lokalnih osmrtnicah
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-6 mobile:gap-4 mt-6 w-full mobile:w-[320px] mobile:flex-col ">
                <Dropdown
                  label="Izberi mesto"
                  isFromNotification={true}
                  isFromFlower={true}
                  data={cityOptions}
                  onSelect={()=>handleCitySelect()}
                />

                <input
                  type="email"
                  placeholder="Vpiši svoj e-poštni naslov"
                  className="bg-white flex text-[16px] placeholder:text-[#7C7C7C] leading-[24px] w-[306px] mobile:mx-[30px] h-[48.48px] font-normal border-[1px] border-[#7C7C7C] rounded-[8px] pl-[16.8px] pr-[23.5px] text-[#7C7C7C] font-variation-customOpt16"
                ></input>
              </div>

            </div>
            <div className="flex flex-col mt-6 ">
              <div className=" flex flex-col pl-1 items-center">
                <div className="h-6 w-full flex items-center pl-1 mobile:pl-0 tablet:w-[605px] tablet:mt-[4px]">
                  <label className="flex items-center ">
                    <div
                      onClick={handleCheckboxClick}
                      className="mr-[12px] h-4 w-4 border-[1.8px] rounded-sm border-[#000000] flex justify-center items-center"
                    >
                      {isSelected && (
                        <img
                          src="/check_ico.png"
                          alt="Facebook"
                          className="w-[10px] h-[10px]"
                        />
                      )}
                    </div>
                    <div className="flex">
                      <div className="text-[#414141] font-variation-customOpt12 text-[12px] tablet:text-[14px]">
                        Strinjam se s
                      </div>
                      <div className="w-[4px]" />
                      <div>
                        <div className="text-[#414141] font-variation-customOpt12 text-[12px] tablet:text-[14px]">
                          splošnimi pogoji in pravili
                        </div>
                        <div className="h-[1px] bg-[#414141] mt-[-3px]" />
                      </div>
                    </div>
                  </label>
                </div>
                <div className="h-6 w-full mobile:h-[38px] flex  items-center pl-1 mobile:pl-0 mt-2 mobile:mt-2 tablet:w-[605px]  ">
                  <label className="flex items-center  text-start  text-[#414141] font-variation-customOpt12 text-[12px] tablet:text-[14px] leading-[19px]">
                    <div
                      onClick={handleCheckboxEnkrat}
                      className="mr-3 h-4 w-4 mobile:w-7 tablet:mr-[10px] border-[1.8px] rounded-sm border-[#000000] flex justify-center items-center leading-[19px]"
                    >
                      {isSelectedEnkrat && (
                        <img
                          src="/check_ico.png"
                          alt="Facebook"
                          className="w-[10px] h-[10px]"
                        />
                      )}
                    </div>
                    Enkrat mesečno prejemam tudi novice, posebne popuste,
                    občasne brezplačne nadgradnje
                  </label>
                </div>
              </div>
              <div className="w-full flex flex-col items-center mt-6 mobile:mt-[39.5px] pt-[2px]">
                <Link href={'/funeralcompany'} className="w-[276px] h-[47px]">
                  <div className="rounded-lg w-[276px] h-full flex justify-center items-center shadow-custom-light-dark  bg-[#CAF0F8] transition duration-100 ">
                    <h className="text-[#1E2125] text-[16px] font-variation-customOpt16">
                      Prijava
                    </h>
                  </div>
                </Link>
                <div className="flex justify-center items-center h-6 mt-2 mobile:mt-[7px]">
                  <p className="text-center text-[12px] text-[#414141] font-variation-customOpt12 tablet:text-[14px]">
                    Osmrtnice boste prejemali enkrat dnevno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationView;
