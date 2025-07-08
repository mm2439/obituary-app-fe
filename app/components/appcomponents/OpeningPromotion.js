"use client";
import React, { useState } from "react";

const OpeningPromotion = () => {
  const list = [
    {
      image: "/image_up_arrow.png",
      heading: "Skrbnik",
      title: "Podarjajo vam ga cvetličarne in pogrebna podjetja",
      description_one:
        "Kaj? Brezplačni enomesečni Skrbnik, ki je mogoč tokrat izjemoma (samo tekom otvoritve; kasneje bo umaknjen).",
      description_two:
        "Kje? Izključno v cvetličarnah in pogrebnih podjetjih, ki jih najdete na naših straneh. Mi enomesečnega skrbnika ne ponujamo na naših straneh.",
    },
    {
      image: "/image_mobile_arrow.png",
      heading: "Predloge",
      title: "Podarjajo vam jih cvetličarne pogrebna podjetja",
      description_one:
        "Kaj? Brezplačna Zahvala in Obvestilo o pogrebu, ki sta izdelana v merah za pošiljanje naprej preko mobilnega telefona .",
      description_two:
        "Kje? Izključno v cvetličarnah, ki jih najdete na naših straneh. Povprašajte jih, Mi enomesečnega skrbnika ne ponujamo na naših straneh.",
    },
    {
      image: "/image_pencil_desktop.png",
      heading: "Zahvala",
      title: "Podarjamo vam jih cvetličarne in mi",
      description_one:
        "Kaj? Da bo spominska stran še toplejša in bolj osebna, si lahko vsak Skrbnik izbere eno od možnosti: Zahvala, Zadnji pozdrav, Biografija ali pa zgolj naših straneh",
      description_two:
        "Kje? V cvetličarnah, ki jih najdete na naših straneh in na naših straneh, Povprašajte jih, Mi enomesečnega skrbnika ne ponujamo na naših straneh, izbere eno od možnosti",
    },
    {
      image: "/image_gift.png",
      heading: "Darila",
      title: "Podarjamo vam mi",
      description_one:
        "Kaj? Vse zgoraj našteto, popusti do 50% in nove nadgradnje za spominsko stran za tiste, katerih spominske strani sevajo največ topline in so bolj obiskane.",
      description_two:
        "Kdaj? Po koncu otvoritvene akcije. Več informacij bo na naši Facebook strani in tam bodo najprej predstavljene tudi vse novosti, posebni popusti, ugodnosti.",
    },
  ];

  const ProgressBar = ({ currentSlide, totalSlides }) => {
    return (
      <div className="hidden mobile:flex tablet:flex mx-auto desktop:flex gap-2 justify-center mt-[28px] mobile:my-auto tablet:mt-[11px] items-center h-[40px]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full mx-auto ${
              index === currentSlide
                ? "shadow-custom-light-dark bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF30] mobile:border tablet:border"
                : "bg-gradient-to-r from-[#C3C6C8] to-[#E3E5E5]"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === list.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="relative  max-w-[1920px] h-[1526px] w-full tablet:h-[1677px] mobile:h-[647px] overflow-hidden mx-auto justify-center items-center flex">
        {/*Main container*/}
        <div className="flex w-[1086px] tablet:w-[744px] mobile:h-[547px] mobile:w-full flex-col mb-[78px] mobile:mt-[60px]  ">
          {/*header container*/}
          <div className="flex w-full h-[185px] mobile:w-[339px] mobile:mx-auto mobile:h-[97px] flex-col tablet:items-start tablet:justify-center tablet:pl-12">
            <div className="text-[26px] text-[#3090D5] font-variation-customOpt26 mobile:text-[20px] mobile:font-variation-customOpt20wght400 mt-[78px] mobile:mt-[0px] ">
              Otvoritvena promocija
            </div>
            <div className="text-[40px] mobile:text-[28px] mobile:font-variation-customOpt28 text-[#2D3D48] font-variation-customOpt40 desktop:mt-[-12px] flex tablet:hidden">
              BREZPLAČNO do 1. maja
            </div>
            <div className="text-[40px] text-[#2D3D48] font-variation-customOpt40 mt-[-12px] hidden tablet:flex">
              BREZPLAČNO do 1. oktobra
            </div>
          </div>

          {/*main container for list data for desktop*/}
          {list.map((item, index) => (
            <div
              key={index} // Add a key prop for React list rendering
              className={`hidden w-[951px] desktop:flex mt-[108px] mx-auto ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex w-[654px] h-full">
                <img
                  src={item.image}
                  className="w-[78px] h-[78px]"
                  alt="Promotion Icon"
                />

                <div className="flex ml-4 w-full h-full flex-col">
                  <h className="text-[32px] text-[#3C3E41] font-variation-customOpt32 font-bold mt-[-10px]">
                    {item.heading}
                  </h>
                  <div className="text-[24px] text-[#3C3E41] font-variation-customOpt24">
                    {item.title}
                  </div>
                  <div className="text-[16px] text-[#3C3E41] font-variation-customOpt16 mt-2">
                    {item.description_one}
                  </div>
                  <div className="text-[16px] text-[#3C3E41] font-variation-customOpt16 mt-[6px]">
                    {item.description_two}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/*main container for list data for tablet*/}
          {list.map((item, index) => (
            <div
              key={index} // Add a key prop for React list rendering
              className={`hidden tablet:w-[606px]  tablet:flex mt-[72px] mobile:mt-5 mx-auto justify-start `}
            >
              <div className="flex tablet:w-[654px] h-full flex-col">
                <img
                  src={item.image}
                  className="w-[78px] mobile:h-[52px] mobile:w-[52px]"
                  alt="Promotion Icon"
                />

                <div className="flex w-full h-full flex-col mt-4">
                  <h className="text-[32px] text-[#3C3E41] font-variation-customOpt32 font-bold mt-[-10px]">
                    {item.heading}
                  </h>
                  <div className="text-[24px] text-[#3C3E41] font-variation-customOpt24">
                    {item.title}
                  </div>
                  <div className="text-[16px] text-[#3C3E41] font-variation-customOpt16 mt-2">
                    {item.description_one}
                  </div>
                  <div className="text-[16px] text-[#3C3E41] font-variation-customOpt16 mt-[6px]">
                    {item.description_two}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slider container for mobile */}
          <div className="hidden tablet:w-[606px] mobile:w-[320px] mobile:flex mt-[72px] mobile:mt-5 mx-auto justify-start">
            <div className="flex tablet:w-[654px] mobile:w-[320px] h-full flex-col">
              <img
                src={list[currentIndex].image}
                className="w-[78px] mobile:h-[52px] mobile:w-[52px]"
                alt="Promotion Icon"
              />

              <div className="flex w-full h-full flex-col mt-4">
                <div className="flex w-full justify-between ">
                  <h className="text-[32px] mobile:text-[24px] mobile:font-variation-customOpt24 text-[#3C3E41] font-variation-customOpt32 font-bold mt-[-10px]">
                    {list[currentIndex].heading}
                  </h>
                  <h className="text-[24px] text-[#3C3E41] font-variation-customOpt24 font-bold mt-[-10px] hidden mobile:flex">
                    {currentIndex + 1}/4
                  </h>
                </div>

                <div className="text-[24px] text-[#3C3E41] mobile:text-[20px] mobile:font-variation-customOpt20wght400 font-variation-customOpt24">
                  {list[currentIndex].title}
                </div>
                <div className="text-[16px] text-[#3C3E41] font-variation-customOpt16 mt-2">
                  {list[currentIndex].description_one}
                </div>
                <div className="text-[16px] text-[#3C3E41] font-variation-customOpt16 mt-[6px]">
                  {list[currentIndex].description_two}
                </div>
              </div>
            </div>
          </div>

          {/*Slider button container*/}
          <div className=" w-[275px] mt-[54px] h-[41px] mx-auto gap-[30px] justify-between items-center mobile:flex flex-row hidden">
            <div>
              <ProgressBar
                currentSlide={currentIndex}
                totalSlides={list.length}
              />
            </div>

            <div className="flex gap-[40px] flex-row items-center">
              <button
                onClick={handlePrev}
                className="mobile:flex h-[36px] shadow-custom-light-dark-with-white-button bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] justify-center items-center rounded-lg w-[36px] px-2"
              >
                <img
                  src="img_back_black.png"
                  alt="back"
                  className="h-[13.79px] w-[8.43px]"
                />
              </button>

              <button
                onClick={handleNext}
                className="mobile:flex h-[36px] shadow-custom-light-dark-with-white-button bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] justify-center items-center rounded-lg w-[36px] px-2"
              >
                <img
                  src="/img_forward_mob.png"
                  alt="back"
                  className="h-[13.79px] w-[8.43px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningPromotion;
