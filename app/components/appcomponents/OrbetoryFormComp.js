"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const OrbetoryFormComp = ({ showForms, focusInput }) => {
  const [selectedBtn, setSelectedBtn] = useState(0);

  const [showSelect, setShowSelect] = useState(false);

  return (
    <div
      className="relative max-w-[1920px] min-h-[852px] max-h-[100vh] mobile:h-[731px] desktop:bg-[url('/login_ozadje.avif')] bg-[url('/ozadje_klop_tablica.avif')] 
    tablet: bg-cover bg-center w-full mx-auto desktop:mt-[80.02px] mobile:mt-[60px] tablet:mt-[79px] flex justify-center items-center
    "
    >
      <div
        className="mb-[30px] pt-[50px] mobile:pt-[20px] tablet:pt-[40px] pr-[91px] pl-[91px] w-[650px] h-[620px] max-h-[100%] mobile:mx-2 absolute flex flex-col
         bg-white/60 backdrop-blur rounded-2xl border-[2px] border-[#FFFFFF] shadow-lg
         
         tablet:w-[550px] tablet:pr-[60px] tablet:pl-[60px]
         mobile:w-[336px] mobile:pr-[18px] mobile:pl-[18px] 
         "
      >
        <div
          className="text-[32px] font-variation-customOpt32  mx-auto text-[#1E2125] font-semibold mobile:text-[28px] 
        mobile:font-variation-customOpt28 mobile:font-[600px]"
        >
          Podarite
        </div>

        <div className="flex justify-between items-center w-full mt-[28px]">
          {selectedBtn === 1 ? (
            <button
              type="button"
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#DFF6FB_0%,_#82D9EB_100%)] border-[2px] border-[solid] border-[#0A85C2] font-sourcesans text-[16px] font-semibold leading-[24px] text-[rgba(22,_72,_120,_0.8)]
              tablet:w-[133px] tablet:font-normal
              mobile:w-[95px] mobile:font-normal
              "
            >
              Skrbnik
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSelectedBtn(1);
                showForms(true);
              }}
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)] border-[2px] border-[solid] border-[#FFFFFF] font-sourcesans text-[16px] font-normal leading-[24px] text-[#ffffff]
               tablet:w-[133px] tablet:font-normal
               mobile:w-[95px] mobile:font-normal
               "
            >
              Skrbnik
            </button>
          )}

          {selectedBtn === 2 ? (
            <button
              type="button"
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#DFF6FB_0%,_#82D9EB_100%)] border-[2px] border-[solid] border-[#0A85C2] font-sourcesans text-[16px] font-semibold leading-[24px] text-[rgba(22,_72,_120,_0.8)]
               tablet:w-[133px] tablet:font-normal
               mobile:w-[95px] mobile:font-normal
               mobile:pr-[25px] mobile:pl-[25px] mobile:leading-[16px] mobile:text-end  
               "
            >
              Mobi kartice
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSelectedBtn(2);
                showForms(false);
              }}
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)] border-[2px] border-[solid] border-[#FFFFFF] font-sourcesans text-[16px] font-normal leading-[24px] text-[#ffffff]
               tablet:w-[133px] tablet:font-normal
               mobile:w-[95px] mobile:font-normal
               mobile:pr-[25px] mobile:pl-[25px] mobile:leading-[16px] mobile:text-end
               "
            >
              Mobi kartice
            </button>
          )}

          {selectedBtn === 3 ? (
            <button
              type="button"
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#DFF6FB_0%,_#82D9EB_100%)] border-[2px] border-[solid] border-[#0A85C2] font-sourcesans text-[16px] font-semibold leading-[24px] text-[rgba(22,_72,_120,_0.8)]
               tablet:w-[133px] tablet:font-normal
               mobile:w-[95px] mobile:font-normal
               "
            >
              Posvetilo
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSelectedBtn(3);
                showForms(false);
              }}
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)] border-[2px] border-[solid] border-[#FFFFFF] font-sourcesans text-[16px] font-normal leading-[24px] text-[#ffffff]
              tablet:w-[133px] tablet:font-normal
              mobile:w-[95px] mobile:font-normal
              "
            >
              Posvetilo
            </button>
          )}
        </div>

        {selectedBtn === 0 ? (
          <div className="w-full flex justify-center items-center mt-[50px]">
            <p
              className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#848484] m-[0]
             mobile:text-[14px]"
            >
              Izberi eno možnost
            </p>
          </div>
        ) : (
          ""
        )}

        {selectedBtn === 1 ? (
          <div className="mt-[50px]">
            <div>
              <input
                placeholder="Vpiši ime pokojnika / ce"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#123597] font-medium text-[18px] leading-[24px] m-[0]
                 mobile:placeholder:text-[14px] mobile:text-[14px]"
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div
              onClick={() => {
                setShowSelect(!showSelect);
              }}
              className="relative cursor-pointer w-full h-[36px] border-b-[1px]  border-b-[rgba(212,212,212,1)] mt-[30px]"
            >
              <div className="h-[30px]">
                <p
                  className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#848484] m-[0]
                 mobile:text-[14px]"
                >
                  Izberi Skrbnika
                </p>
              </div>

              <div className="absolute -top-[4px] right-[15px]">
                <Image
                  src={"/icon_dropDown.png"}
                  height={28}
                  width={28}
                  className="h-[28px] w-[28px]"
                />
              </div>

              {showSelect ? (
                <div className="h-auto w-full bg-[#ffffff] rounded-[12px] p-[5px] absolute top-[25px] z-10">
                  <li className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#848484] m-[0]">
                    Option1
                  </li>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="mt-[15px]">
              <input
                placeholder="Vpiši e-pošto uporabnika"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#123597] font-medium text-[18px] leading-[24px] m-[0]
                mobile:placeholder:text-[14px] mobile:text-[14px]"
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div className="mt-[18px]">
              <p
                className="font-sourcesans text-[14px] font-normal leading-[16px] text-[#848484] m-[0]
              tablet:text-[14px]
              mobile:text-[12px]"
              >
                Op. če še ni registriran, naj se doma registrira s tem emailom,
                ki ga bo podal tukaj in v uporabniškem računu ga bo že čakal
                Skrbnik.{" "}
              </p>
            </div>

            <button
              onClick={() => {
                focusInput();
              }}
              type="button"
              className="mt-[53px] w-full h-[48px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)]   font-sourcesans text-[16px] font-medium leading-[24px] text-[#ffffff] m-[0]
               tablet:font-normal
               mobile:font-normal
               "
            >
              NAPREJ
            </button>

            <div className="flex justify-center items-center mt-[14px]">
              <p
                className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#3C3E41] m-[0]
              tablet:text-[14px]
              mobile:text-[14px]
              "
              >
                Skrbnik bo aktiviran takoj
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {selectedBtn === 2 ? (
          <div className="mt-[50px]">
            <div>
              <input
                placeholder="Vpiši ime pokojnika / ce"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#123597] font-medium text-[18px] leading-[24px] m-[0]
                mobile:placeholder:text-[14px] mobile:text-[14px]"
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div
              onClick={() => {
                setShowSelect(!showSelect);
              }}
              className="relative cursor-pointer w-full h-[36px] border-b-[1px]  border-b-[rgba(212,212,212,1)] mt-[30px]"
            >
              <div className="h-[30px]">
                <p
                  className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#848484] m-[0]
                 mobile:text-[14px]"
                >
                  Izberi predlogo
                </p>
              </div>

              <div className="absolute -top-[4px] right-[15px]">
                <Image
                  src={"/icon_dropDown.png"}
                  height={28}
                  width={28}
                  className="h-[28px] w-[28px]"
                />
              </div>

              {showSelect ? (
                <div className="h-auto w-full bg-[#ffffff] rounded-[12px] p-[5px] absolute top-[25px] z-10">
                  <li className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#848484] m-[0]">
                    Option1
                  </li>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="mt-[15px]">
              <input
                placeholder="Vpiši e-pošto uporabnika"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#123597] font-medium text-[18px] leading-[24px] m-[0]
                mobile:placeholder:text-[14px] mobile:text-[14px]"
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div className="mt-[18px]">
              <p
                className="font-sourcesans text-[14px] font-normal leading-[16px] text-[#848484] m-[0]
              tablet:text-[14px]
              mobile:text-[12px]
              "
              >
                Op. če še ni registriran, naj se doma registrira s tem emailom,
                ki ga bo podal tukaj in v uporabniškem računu ga bo že čakala
                Mobi kartica.
              </p>
            </div>

            <button
              type="button"
              className="mt-[53px] w-full h-[48px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)]   font-sourcesans text-[16px] font-medium leading-[24px] text-[#ffffff] m-[0]
               tablet:font-normal
               mobile:font-normal
               "
            >
              POŠLJI
            </button>

            <div className="flex justify-center items-center mt-[14px]">
              <p
                className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#3C3E41] m-[0]
              tablet:text-[14px]
              mobile:text-[13px]
              "
              >
                Mobi kartica je že pripravljena za pošiljanje naprej
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {selectedBtn === 3 ? (
          <div className="mt-[69px] tablet:mt-[81px] mobile:mt-[69px]">
            <div>
              <input
                placeholder="Vpiši ime pokojnika / ce"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#123597] font-medium text-[18px] leading-[24px] m-[0]
                mobile:placeholder:text-[14px] mobile:text-[14px]"
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div className="mt-[15px]">
              <input
                placeholder="Vpiši email uporabnika"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#123597] font-medium text-[18px] leading-[24px] m-[0]
                mobile:placeholder:text-[14px] mobile:text-[14px]"
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div className="mt-[33px]">
              <p
                className="font-sourcesans text-[14px] font-normal leading-[16px] text-[#848484] m-[0]
              tablet:text-[14px]
              mobile:text-[12px]
              "
              >
                Op. če še ni registriran, naj se doma registrira s tem emailom,
                ki ga bo podal tukaj in v uporabniškem računu ga bo že čakalo
                Posvetilo (ali Zadnji klic, Zahvala, lahko deli daljše zgodbe
                ali poezijo ali...)
              </p>
            </div>

            <button
              type="button"
              className="mt-[53px] w-full h-[48px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)]   font-sourcesans text-[16px] font-medium leading-[24px] text-[#ffffff] m-[0]
               tablet:font-normal
               mobile:font-normal
               "
            >
              POŠLJI
            </button>

            <div className="flex justify-center items-center mt-[14px]">
              <p
                className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#3C3E41] m-[0]
               tablet:text-[14px]
               mobile:text-[14px]
               "
              >
                S pisanjem posvetila lahko začne takoj
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default OrbetoryFormComp;
