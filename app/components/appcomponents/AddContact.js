"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineExport } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

const AddContact = () => {
  const [openSections, setOpenSections] = useState({
    elizabeth: true,
    nikola: true,
  });

  // const toggleSection = (section) => {
  //   setOpenSections((prevState) => ({
  //     ...prevState,
  //     [section]: !prevState[section], // Toggle the specific section without affecting the others
  //   }));
  // };

  return (
    <div className="flex flex-col max-w-[969px]">
      <div
        className="flex mt-[60px] tabletUserAcc:mt-[80px] gap-y-5 mobileUserAcc:gap-y-3 flex-col pr-0
                mobileUserAcc:mt-[30px]"
      >
        {/* 25 October 2024 -  */}
        <h2 style={{fontVariationSettings: "'wdth' 75"}} className=" desktopUserAcc:text-right tabletUserAcc:text-nowrap text-[15px] tabletUserAcc:text-[13px] leading-[16px] desktopUserAcc:leading-[19px] text-[#3C3E41] mobileUserAcc:hidden">
          Kdorkoli kupi Premium svečko, hkrati obstoječemu Skrbniku brezplačno
          podaljša veljavnost Skrbnika za naveden čas adasds.{" "}
        </h2>

        <div className="flex flex-col justify-between w-full items-start tabletUserAcc:hidden mobileUserAcc:hidden">
          <table className="w-full desktopUserAcc:min-w-[950px]">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#3C3E41] border-b border-[#A1B1D4] ">
                  SPOMINSKA
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#3C3E41] border-b border-[#A1B1D4]">
                  KDO JE PRISPEVAL
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#3C3E41] border-b border-[#A1B1D4]">
                  KDAJ
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#3C3E41] border-b border-[#A1B1D4]">
                  VELJA DO
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#3C3E41] border-b border-[#A1B1D4]">
                  PODALJŠAJ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#FFFFFF80]">
                <td className="px-6 pt-[0.7rem] pb-[0.6rem] border-b border-[#A1B1D4] text-base font-normal flex items-center">
                  <div className="text-[#3C3E41]">
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Elizabeth
                    </strong>
                    <br />
                    Frederickson
                  </div>
                  <Image
                    src="/img_left_arrow.png"
                    className="w-8 h-10 object-cover"
                    width={28}
                    height={32}
                  />
                </td>

                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal">
                  <div className="flex items-center">
                    <AiOutlineExport className="mr-3 w-6 h-6 fill-[#6D778E]" />{" "}
                    <div className="text-[#3C3E41]">
                      <strong className="text-[#6D778E] text-sm font-normal">
                        John Frederickson
                      </strong>
                      <br />
                      Skrbnik
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base text-[#3C3E41] font-normal text-center">
                  <strong className="text-[#6D778E] text-sm font-normal">
                    12.09.2023
                  </strong>
                  <br /> 1 leto
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-semibold text-[#3C3E41]">
                  12.09.2024
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#6D778E]">
                  PODALJŠAJ
                </td>
              </tr>

              <tr className="bg-[#FFFFFF80]">
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-[#3C3E41] flex items-center">
                  <div>
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Mary
                    </strong>
                    <br /> Poppins
                  </div>
                  <Image
                    src="/img_left_arrow.png"
                    className="w-8 h-10 object-cover"
                    width={28}
                    height={32}
                  />
                </td>

                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-[#3C3E41]">
                  <div className="flex items-center">
                    <AiOutlineExport className="mr-3 w-6 h-6 fill-[#6D778E]" />{" "}
                    <div className="text-[#3C3E41]">
                      <strong className="text-[#6D778E] text-sm font-normal">
                        John Wayne{" "}
                      </strong>
                      <br /> Skrbnik
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-[#3C3E41] text-center">
                  <strong className="text-[#6D778E] text-sm font-normal">
                    12.04.2024
                  </strong>
                  <br /> 1 leto
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-semibold text-[#3C3E41]">
                  12.04.2031
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#6D778E]"></td>
              </tr>

              <tr className="">
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-[#3C3E41] flex items-center">
                  <div>
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Mary
                    </strong>
                    <br /> Poppins
                  </div>
                  <Image
                    src="/img_left_arrow.png"
                    className="w-8 h-10 object-cover"
                    width={28}
                    height={32}
                  />
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal">
                  <div className="flex items-center">
                    <AiOutlineExport className="mr-3 w-6 h-6 fill-[#6D778E]" />{" "}
                    <div className="text-[#3C3E41]">
                      <strong className="text-[#6D778E] text-sm font-normal">
                        Oliver Stanley
                      </strong>
                      <br /> Premium Svečka
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-center text-[#3C3E41]">
                  <strong className="text-[#6D778E] text-sm font-normal">
                    17.04.2024
                  </strong>
                  <br /> 5 leto
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-semibold text-[#3C3E41]"></td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#6D778E]"></td>
              </tr>

              <tr className="">
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-[#3C3E41] flex items-center">
                  <div>
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Mary
                    </strong>
                    <br /> Poppins
                  </div>
                  <Image
                    src="/img_left_arrow.png"
                    className="w-8 h-10 object-cover"
                    width={28}
                    height={32}
                  />
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal">
                  <div className="flex items-center">
                    <AiOutlineExport className="mr-3 w-6 h-6 fill-[#6D778E]" />{" "}
                    <div className="text-[#3C3E41]">
                      <strong className="text-[#6D778E] text-sm font-normal">
                        Ahmad K
                      </strong>
                      <br /> Premium Svečka
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal text-[#3C3E41] text-center">
                  <strong className="text-[#6D778E] text-sm font-normal">
                    22.04.2024
                  </strong>
                  <br /> 1 leto
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-semibold text-[#3C3E41]"></td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#6D778E]"></td>
              </tr>

              <tr className="bg-[#FFFFFF80]">
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal flex items-center">
                  <div className="text-[#3C3E41]">
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Barbara
                    </strong>
                    <br /> Bushiosa
                  </div>
                  <Image
                    src="/img_left_arrow.png"
                    className="w-8 h-10 object-cover"
                    width={28}
                    height={32}
                  />
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal">
                  <div className="flex items-center">
                    <AiOutlineExport className="mr-3 w-6 h-6 fill-[#6D778E]" />{" "}
                    <div className="text-[#3C3E41]">
                      <strong className="text-[#6D778E] text-sm font-normal">
                        John Wayne{" "}
                      </strong>
                      <br /> Skrbnik
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base text-[#3C3E41] font-normal text-center">
                  <strong className="text-[#6D778E] text-sm font-normal">
                    12.06.2023{" "}
                  </strong>
                  <br /> 1 leto
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-semibold text-[#3C3E41]">
                  12.06.2025
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#6D778E]">
                  PODALJŠAJ
                </td>
              </tr>

              <tr className="">
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal flex items-center">
                  <div className="text-[#3C3E41]">
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Barbara
                    </strong>
                    <br /> Bushiosa
                  </div>
                  <Image
                    src="/img_left_arrow.png"
                    className="w-8 h-10 object-cover"
                    width={28}
                    height={32}
                  />
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal">
                  <div className="flex items-center">
                    <AiOutlineExport className="mr-3 w-6 h-6 fill-[#6D778E]" />{" "}
                    <div className="text-[#3C3E41]">
                      <strong className="text-[#6D778E] text-sm font-normal">
                        Alenka G.{" "}
                      </strong>
                      <br /> Premium Svečka
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base text-[#3C3E41] font-normal text-center">
                  <strong className="text-[#6D778E] text-sm font-normal">
                    12.10.2024{" "}
                  </strong>
                  <br /> 1 leto
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-semibold text-[#3C3E41]"></td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#6D778E]"></td>
              </tr>

              <tr className="bg-[#FFFFFF80]">
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal flex items-center">
                  <div className="text-[#3C3E41]">
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Andul Arif
                    </strong>
                    <br /> Azimi
                  </div>
                  <Image
                    src="/img_left_arrow.png"
                    className="w-8 h-10 object-cover"
                    width={28}
                    height={32}
                  />
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal">
                  <div className="flex items-center">
                    <AiOutlineExport className="mr-3 w-6 h-6 fill-[#6D778E]" />{" "}
                    <div className="text-[#3C3E41]">
                      <strong className="text-[#6D778E] text-sm font-normal">
                        John Wayne{" "}
                      </strong>
                      <br /> Skrbnik
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base text-[#3C3E41] font-normal text-center">
                  <strong className="text-[#6D778E] text-sm font-normal">
                    12.04.2023{" "}
                  </strong>
                  <br /> 1 leto
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-semibold text-[#3C3E41]">
                  12.04.2023
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal text-[#6D778E]">
                  <div className="flex items-center text-sm font-normal">
                    <GoDotFill className="mr-3 w-6 h-6 fill-[#EB1D1D]" />{" "}
                    <div>
                      <strong className="text-[#6D778E] text-sm font-normal">
                        POTEKLO{" "}
                      </strong>
                      <br /> Obnovi
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="bg-[#FFFFFF80]">
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal flex items-center">
                  <div className="text-[#3C3E41]">
                    <strong className="text-[#6D778E] text-sm font-normal">
                      Andro
                    </strong>
                    <br /> Knego
                  </div>
                  <Image
                    src="/img_left_arrow.png"
                    className="w-8 h-10 object-cover"
                    width={28}
                    height={32}
                  />
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-normal">
                  <div className="flex items-center">
                    <AiOutlineExport className="mr-3 w-6 h-6 fill-[#6D778E]" />{" "}
                    <div className="text-[#3C3E41]">
                      <strong className="text-[#6D778E] text-sm font-normal">
                        John Wayne{" "}
                      </strong>
                      <br /> Skrbnik
                    </div>
                  </div>
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base text-[#3C3E41] font-normal text-center">
                  <strong className="text-[#6D778E] text-sm font-normal">
                    12.09.2023{" "}
                  </strong>
                  <br /> 1 leto
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-base font-semibold text-[#3C3E41]">
                  12.09.2024
                </td>
                <td className="px-6 py-2 border-b border-[#A1B1D4] text-sm font-normal w-[101px] text-[#6D778E]">
                  <div className="border-gradient rounded-md text-center p-1">
                    PODALJŠAJ
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col tabletUserAcc:justify-start items-start mobileUserAcc:justify-between desktopUserAcc:hidden">
          <div className="w-full flex py-4 ">
            <div className="w-full  mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3">
              <h3 className="text-base font-normal text-[#1E2125] mb-2">
                Elizabeth
              </h3>
              <p className="flex mobileUserAcc:hidden text-base mobileUserAcc:text-[14px] font-normal text-[#717B8C]">
                {/* 25 October 2024 */}
                Skrbnik od: <span className="pl-1"> 21.10.2023</span>
              </p>
              <p className="flex tabletUserAcc:hidden pr-1 text-base mobileUserAcc:text-[14px] font-normal text-[#717B8C]">
                Skrbnik od: <span className="pl-1"> 21.10.2023</span>
              </p>
            </div>

            <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3 flex flex-col justify-end items-end ">
              <button
                className="text-sm mobileUserAcc:text-[12px] font-normal text-[#6D778E] mb-2 bg-[#f6f6f633] rounded-sm px-4 py-1 cursor-pointer"
                style={{ boxShadow: "5px 5px 10px #C2C2C2" }}
                // onClick={() => toggleSection("elizabeth")}
              >
                PODALJŠAJ
              </button>
              <p className="text-base mobileUserAcc:text-[14px] font-normal text-[#717B8C]">
                Do: <span>21.10.2026</span>
              </p>
            </div>
          </div>
          {openSections.elizabeth && (
            <div className="px-4 w-full space-y-4">
              <p className="text-xs font-semibold text-[#2198D3]">PRISPEVALI</p>
              <div className="flex">
                <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3">
                  <h3 className="text-sm mobileUserAcc:text-xs font-normal text-[#717B8C] mb-2">
                    Alex Sanpaoli
                  </h3>
                  {/* 25 October 2024 */}
                  <p style={{fontFeatureSettings: "'wdth' 75 "}} className="text-sm  mobileUserAcc:text-nowrap mobileUserAcc:text-xs font-normal text-[#717B8C]">
                    Premium sveča: <span>21.10.2023</span>
                  </p>
                </div>

                <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3 flex flex-col justify-end items-end ">
                  <h3 className="text-sm mobileUserAcc:text-xs font-normal text-[#717B8C] mb-2 ">
                    1 leto
                  </h3>

                  <AiOutlineExport className="w-[25.7px] h-[26px] fill-[#6D778E]" />
                </div>
              </div>

              <div className="flex">
                <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3">
                  <h3 className="text-sm mobileUserAcc:text-xs font-normal text-[#717B8C] mb-2">
                    Abdul Rahim
                  </h3>
                  {/* 25 October 2024 */}
                  <p style={{fontFeatureSettings: "'wdth' 75 "}} className="text-sm  mobileUserAcc:text-nowrap mobileUserAcc:text-xs font-normal text-[#717B8C]">
                    Premium sveča: <span>01.05.2023</span>
                  </p>
                </div>

                <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3 flex flex-col justify-end items-end ">
                  <h3 className="text-sm mobileUserAcc:text-xs font-normal text-[#717B8C] mb-2 ">
                    1 leto
                  </h3>

                  <AiOutlineExport className="w-[25.7px] h-[26px] fill-[#6D778E]" />
                </div>
              </div>
            </div>
          )}

          <div className="border border-b-[#0A85C2] border-opacity-30 w-[167px] my-3"></div>

          <div className="w-full flex py-4">
            <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3">
              <h3 className="text-base font-normal text-[#1E2125] mb-2">
                Otto von Bismarck
              </h3>
              <p className="flex mobileUserAcc:hidden text-base mobileUserAcc:text-[14px] font-normal text-[#717B8C]">
                {/* 25 October 2024 */}
              Skrbnik od: <span className="pl-1">04.10.2024</span>
              </p>
              <p className="flex tabletUserAcc:hidden text-base mobileUserAcc:text-[14px] font-normal text-[#717B8C]">
                Skrbnik od: <span className="pl-1">04.10.2024</span>
              </p>
            </div>

            <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3 flex flex-col justify-end items-end ">
              <button
                className="border-gradient text-sm mobileUserAcc:text-[12px] font-normal text-[#6D778E] mb-2 bg-[#f6f6f633] rounded-md  px-6 py-1 cursor-pointer"
                style={{ boxShadow: "5px 5px 10px #C2C2C2" }}
              >
                PODALJŠAJ
              </button>
              <p className="text-base font-normal text-[#717B8C] mobileUserAcc:text-[14px]">
                Do: <span className="text-[#EB1D1D]">04.10.2024</span>
              </p>
            </div>
          </div>

          <div className="border border-b-[#0A85C2] border-opacity-30 w-[167px] my-3"></div>

          <div className="w-full flex py-4">
            <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3">
              <h3 className="text-base font-normal text-[#1E2125] mb-2">
                Nikola Tesla
              </h3>
              <p className="flex mobileUserAcc:hidden text-base mobileUserAcc:text-[14px] font-normal text-[#717B8C]">
                {/* 25 October 2024 */}
              Skrbnik od: <span className="pl-1"> 11.03.2034</span>
              </p>
              <p className="flex tabletUserAcc:hidden text-base mobileUserAcc:text-[14px] font-normal text-[#717B8C]">
                Skrbnik od: <span className="pl-1"> 11.03.2034</span>
              </p>
            </div>

            <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3 flex flex-col justify-end items-end ">
              <button
                className="text-sm mobileUserAcc:text-[12px] font-normal text-[#6D778E] mb-2 bg-[#f6f6f633] rounded-sm px-4 py-1 cursor-pointer"
                style={{ boxShadow: "5px 5px 10px #C2C2C2" }}
                // onClick={() => toggleSection("nikola")}
              >
                PODALJŠAJ
              </button>
              <p className="text-base font-normal mobileUserAcc:text-[14px] text-[#717B8C]">
                Do: <span>11.03.2034</span>
              </p>
            </div>
          </div>
          {openSections.nikola && (
            <div className="px-4 w-full space-y-4">
              <p className="text-xs font-semibold text-[#2198D3]">PRISPEVALI</p>
              <div className="flex">
                <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3">
                  <h3 className="text-sm mobileUserAcc:text-xs font-normal text-[#717B8C] mb-2">
                    Maria Tesla
                  </h3>
                  <p style={{fontFeatureSettings: "'wdth' 75"}} className="text-sm mobileUserAcc:text-nowrap mobileUserAcc:text-xs font-normal text-[#717B8C]">
                    Skrbnik - 5 let: <span>11.03.2024</span>
                  </p>
                </div>

                <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3 flex flex-col justify-end items-end ">
                  <h3 className="text-sm mobileUserAcc:text-xs font-normal text-[#717B8C] mb-2 ">
                    5 leto
                  </h3>

                  <AiOutlineExport className="w-[25.7px] h-[26px] fill-[#6D778E]" />
                </div>
              </div>

              <div className="flex">
                <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3">
                  <h3 className="text-sm mobileUserAcc:text-xs font-normal text-[#717B8C] mb-2">
                    Suleiman Ozdemir
                  </h3>
                  {/* 25 October 2024 */}
                  <p style={{fontFeatureSettings: "'wdth' 75 "}} className="text-sm mobileUserAcc:text-nowrap mobileUserAcc:text-xs font-normal text-[#717B8C]">
                    Premium sveča: <span>01.05.2023</span>
                  </p>
                </div>

                <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3 flex flex-col justify-end items-end ">
                  <h3 className="text-sm mobileUserAcc:text-xs font-normal text-[#717B8C] mb-2 ">
                    1 leto
                  </h3>

                  <AiOutlineExport className="w-[25.7px] h-[26px] fill-[#6D778E]" />
                </div>
              </div>
            </div>
          )}

          <div className="border border-b-[#0A85C2] border-opacity-30 w-[167px] my-3"></div>

          <div className="w-full flex py-4">
            <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3">
              <h3 className="text-base font-normal text-[#1E2125] mb-2">
                Otto von Bismarck
              </h3>
              <p className="flex mobileUserAcc:hidden text-base mobileUserAcc:text-[14px] font-normal text-[#717B8C]">
                {/* 25 October 2024 */}
              Skrbnik od: <span className="pl-1"> 04.05.2023</span>
              </p>
              <p className="flex tabletUserAcc:hidden text-base mobileUserAcc:text-[14px] font-normal text-[#717B8C]">
                Skrbnik od: <span className="pl-1"> 04.05.2023</span>
              </p>
            </div>

            <div className="w-full mb-4 tabletUserAcc:mb-0 tabletUserAcc:w-1/3 flex flex-col justify-end items-end ">
              <button
                className=" flex items-center text-sm font-normal text-[#6D778E] mb-2 bg-[#f6f6f633] rounded-sm px-3 py-1 cursor-pointer"
                style={{ boxShadow: "5px 5px 10px #C2C2C2" }}
              >
                <GoDotFill className="mr-1 w-6 h-6 fill-[#EB1D1D]" /> POTEKLO
              </button>
              <p className="text-base font-normal text-[#717B8C]">
                Do: <span>04.05.2024</span>
              </p>
            </div>
          </div>

          <div className="border border-b-[#0A85C2] border-opacity-30 w-[167px] my-3"></div>

          <h2 className="text-xs font-normal text-[#3C3E41] mt-5 hidden mobileUserAcc:block">
            Kdorkoli kupi Premium svečko, hkrati obstoječemu Skrbniku brezplačno
            podaljša veljavnost Skrbnika za naveden čas.{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
