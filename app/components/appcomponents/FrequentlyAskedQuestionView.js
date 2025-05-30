"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import icon_cancel from "@/public/icon_cancel.png";
import icon_plus from "@/public/icon_plus.png";

const FrequentlyAskedQuestionView = ({ from }) => {
  const [isVisiblefirstQuestionView, setIsVisiblefirstQuestionView] =
    useState(true);
  const [isVisibleSecondQuestionView, setIsVisibleSecondQuestionView] =
    useState(false);
  const [isVisibleThirdQuestionView, setIsVisibleThirdQuestionView] =
    useState(false);
  const [isVisibleFourthQuestionView, setIsVisibleFourthQuestionView] =
    useState(false);

  return (
    <div
      className={`overflow-hidden relative flex items-center max-w-[1920px]  tablet:max-w-[600px] mobile:max-w-[400px] w-full mx-auto `}
    >
      <div
        className={`h-full max-w-[1920px] mx-auto w-full flex py-[65px] desktop:py-[105px] tablet:py-[75px] ${
          from == "7" || from == "8"
            ? null
            : " mobile:bg-white tablet:bg-white "
        }  justify-center overflow-hidden `}
      >
        <div className="h-full  mx-auto max-w-[906px] px-5 w-full flex flex-col items-start tablet:items-center mobile:items-center">
          <div className="flex mobile:flex-col w-full justify-between ">
            <div className="self-start text-[#1E2125] text-[40px] mobile:text-[28px] font-normal leading-[47px] mobile:leading-[33px]">
              Pogosta vprašanja
            </div>
            {from == "7" || from == "8" ? null : (
              <div className="self-end">
                <Link
                  href={"/obituarylist"}
                  className="flex mobile:mt-3 items-center rounded-lg py-3 px-6 justify-center border-[#0A85C270] border-2 shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                >
                  <div className=" flex font-variation-customOpt16 font-normal text-[16px] leading-6 text-[#414141] text-center">
                    Kaj storiti, ko se zgodi
                  </div>
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setIsVisiblefirstQuestionView(!isVisiblefirstQuestionView);
              setIsVisibleSecondQuestionView(false);
              setIsVisibleThirdQuestionView(false);
              setIsVisibleFourthQuestionView(false);
            }}
            className=" flex w-full justify-between items-center mt-8 h-12 border-t border-t-[#D4D4D4] px-6 mobile:px-0 "
          >
            <div className="flex font-variation-customOpt16 font-normal text-[16px] leading-6 text-[#1E2125] text-center">
              Pogrebna dejavnost
            </div>

            <Image
              src={isVisiblefirstQuestionView ? icon_cancel : icon_plus}
              className=" h-[12.5px] w-[12.5px]"
              alt="cross Icon"
              width={1000}
              height={1000}
            />
          </button>

          {isVisiblefirstQuestionView && (
            <div className="flex w-full flex-col mt-4 mb-12 px-14 mobile:px-0 ">
              <div
                className="font-sourceSerif"
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "400",
                  color: "#414141",
                }}
              >
                Pogrebna dejavnost obsega:
              </div>
              <ul className="list-disc ml-5 pl-2">
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  24-urno dežurno službo,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  prevoz pokojnika/pokojnice (v nadaljevanju: pokojnik),
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  pripravo pokojnika,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  upepelitev pokojnika,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  pripravo in izvedbo pogreba.
                </li>
              </ul>
            </div>
          )}
          <button
            onClick={() => {
              setIsVisiblefirstQuestionView(false);
              setIsVisibleSecondQuestionView(!isVisibleSecondQuestionView);
              setIsVisibleThirdQuestionView(false);
              setIsVisibleFourthQuestionView(false);
            }}
            className=" flex w-full justify-between items-center  h-12 border-t border-t-[#D4D4D4] px-6 mobile:px-0"
          >
            <div className="flex font-variation-customOpt16 font-normal text-[16px] leading-6 text-[#1E2125] text-center">
              Pokopališka dejavnost
            </div>

            <Image
              src={isVisibleSecondQuestionView ? icon_cancel : icon_plus}
              className=" h-[12.5px] w-[12.5px]"
              alt="cross Icon"
              width={1000}
              height={1000}
            />
          </button>
          {isVisibleSecondQuestionView && (
            <div className="flex w-full flex-col mt-4 mb-12 px-14 mobile:px-0 ">
              <div
                className="font-sourceSerif"
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "400",
                  color: "#414141",
                }}
              >
                Pogrebna dejavnost obsega:
              </div>
              <ul className="list-disc ml-5 pl-2">
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  24-urno dežurno službo,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  prevoz pokojnika/pokojnice (v nadaljevanju: pokojnik),
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  pripravo pokojnika,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  upepelitev pokojnika,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  pripravo in izvedbo pogreba.
                </li>
              </ul>
            </div>
          )}

          <button
            onClick={() => {
              setIsVisiblefirstQuestionView(false);
              setIsVisibleSecondQuestionView(false);
              setIsVisibleThirdQuestionView(!isVisibleThirdQuestionView);
              setIsVisibleFourthQuestionView(false);
            }}
            className=" flex w-full justify-between items-center  h-12 border-t border-t-[#D4D4D4] px-6 mobile:px-0"
          >
            <div className="flex font-variation-customOpt16 font-normal text-[16px] leading-6 text-[#1E2125] text-center">
              Urejanje najemnega razmerja
            </div>

            <Image
              src={isVisibleThirdQuestionView ? icon_cancel : icon_plus}
              className=" h-[12.5px] w-[12.5px]"
              alt="cross Icon"
              width={1000}
              height={1000}
            />
          </button>
          {isVisibleThirdQuestionView && (
            <div className="flex w-full flex-col mt-4 mb-12 px-14 mobile:px-0 ">
              <div
                className="font-sourceSerif"
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "400",
                  color: "#414141",
                }}
              >
                Pogrebna dejavnost obsega:
              </div>
              <ul className="list-disc ml-5 pl-2">
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  24-urno dežurno službo,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  prevoz pokojnika/pokojnice (v nadaljevanju: pokojnik),
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  pripravo pokojnika,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  upepelitev pokojnika,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  pripravo in izvedbo pogreba.
                </li>
              </ul>
            </div>
          )}

          <button
            onClick={() => {
              setIsVisiblefirstQuestionView(false);
              setIsVisibleSecondQuestionView(false);
              setIsVisibleThirdQuestionView(false);
              setIsVisibleFourthQuestionView(!isVisibleFourthQuestionView);
            }}
            className=" flex w-full justify-between items-center  h-12 border-t border-t-[#D4D4D4] border-b border-b-[#D4D4D4] px-6 mobile:px-0"
          >
            <div className="flex font-variation-customOpt16 font-normal text-[16px] leading-6 text-[#1E2125] text-center">
              24-urna dežurna služba
            </div>

            <Image
              src={isVisibleFourthQuestionView ? icon_cancel : icon_plus}
              className=" h-[12.5px] w-[12.5px]"
              alt="cross Icon"
              width={1000}
              height={1000}
            />
          </button>
          {isVisibleFourthQuestionView && (
            <div className="flex w-full flex-col mt-4 px-14 mobile:px-0 ">
              <div
                className="font-sourceSerif"
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: "400",
                  color: "#414141",
                }}
              >
                Pogrebna dejavnost obsega:
              </div>
              <ul className="list-disc ml-5 pl-2">
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  24-urno dežurno službo,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  prevoz pokojnika/pokojnice (v nadaljevanju: pokojnik),
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  pripravo pokojnika,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  upepelitev pokojnika,
                </li>
                <li
                  className="font-sourceSerif"
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: "400",
                    color: "#414141",
                  }}
                >
                  pripravo in izvedbo pogreba.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div
        className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[5%] tablet:mt-[5%] desktop:mt-[12%]  desktop:me-[50%] desktop:left-36
              "
      >
        <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[228px] ">
          <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
            Vstavljanje svojih slik in tekstov je zelo enostavno in vsak lahko
            izdela stran prej kot v pol ure. <br />
            <br />
            Stran lahko kasneje kadarkoli dopolnjujete, posodabljate. Enostavno
            je.
            <br />
            <br />
            Te pol ure za izdelavo strani, vam bo prihranilo dolge ure vsak
            mesec, ko odgovarjate na vedno ista vprašanja. Stran bo v pomoč
            uporabnikom in vam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestionView;
