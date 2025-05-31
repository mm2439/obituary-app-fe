"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import icon_cancel from "@/public/icon_cancel.png";
import icon_plus from "@/public/icon_plus.png";
const defaultQuestions = [
  {
    question: "Pogrebna dejavnost",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    question: "Pokopališka dejavnost",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    question: "Urejanje najemnega razmerja",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    question: " 24-urna dežurna služba",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];
const FrequentlyAskedQuestionView = ({ from, data }) => {
  const [visibleIndexes, setVisibleIndexes] = useState({});
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    const customFaq = data?.faqs || [];

    if (customFaq.length > 4) {
      setFaqs(customFaq);
    } else if (customFaq.length > 0) {
      const updatedList = [...defaultQuestions];
      for (let i = 0; i < customFaq.length; i++) {
        updatedList[i] = customFaq[i];
      }
      setFaqs(updatedList);
    } else {
      setFaqs(defaultQuestions);
    }
  }, [data]);
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

          {faqs && faqs.length > 0
            ? faqs.map((faq, index) => (
                <>
                  <button
                    onClick={() =>
                      setVisibleIndexes((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                    className=" flex w-full justify-between items-center mt-8 h-12 border-t border-t-[#D4D4D4] px-6 mobile:px-0 "
                  >
                    <div className="flex font-variation-customOpt16 font-normal text-[16px] leading-6 text-[#1E2125] text-center">
                      {faq.question}
                    </div>

                    <Image
                      src={visibleIndexes[index] ? icon_cancel : icon_plus}
                      className=" h-[12.5px] w-[12.5px]"
                      alt="cross Icon"
                      width={1000}
                      height={1000}
                    />
                  </button>
                  {visibleIndexes[index] && (
                    <div className="flex w-full flex-col mt-4 mb-12 px-14 mobile:px-0 ">
                      {faq.answer}
                    </div>
                  )}
                </>
              ))
            : null}
        </div>
      </div>

      {/* <div
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
      </div> */}
    </div>
  );
};

export default FrequentlyAskedQuestionView;
