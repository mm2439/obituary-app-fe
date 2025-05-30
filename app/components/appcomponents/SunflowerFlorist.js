"use client";
import { React, useState } from "react";
import Link from "next/link";
import imgFb from "@/public/img_fb1.png";
import imgInsta from "@/public/img_insta.png";
import imgLocation from "@/public/img_Location.png";
import imgTelephone from "@/public/img_telephone.png";
import Image from "next/image";

const SunflowerFlorist = () => {
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
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const images = [
    {
      image: "/suniflo_logo.avif",
      title: "Cvetličarna Suniflower",
      detail:
        "In seveda noga vaše spletne strani, brez naše noge, kjer lahko dodate vse potrebne informacije in povezave do vaših socialnih omrežij. V kolikor imate več trgovin, je vsaka na svojem slajdu ",
      Sitelink: "www.suniflower.com",
      email: "trgovina@csunflo.com",
      telephone: "012-994-285",
    },
    {
      image: "/lila_cvet.avif",
      title: "Lotus Flower",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      Sitelink: "www.lipsum.com",
      email: "lotusflower@mailinator.com",
      telephone: "012-112-333",
    },
  ];

  return (
    <div className="bg-white desktop:bg-[#EDF1F3]">
      {/* Main Container */}
      <div
      
        className="relative max-w-[1920px] mobile:h-[908px] mobile:w-[360px] w-full mx-auto h-[514px] tablet:h-[838.23px] overflow-hidden flex flex-row 
            mobile:flex-col tablet:flex-col tablet:items-center desktop:bg-[#DAEBF120] bg-white desktop:justify-center"
      >
       
        <div className="flex desktop:hidden mobile:w-[306px] mobile:h-[84px] mobile:mt-[6.27px] w-[593px] h-[42px] mx-auto flex-wrap mt-[43.23px] text-center text-[#939393] text-[14px] leading-[21px]">
          {/* {images[currentIndex].detail} */}
        </div>
       
        <button
          onClick={handlePrev}
          className={
            "hidden desktop:flex self-center my-auto mr-[-80px] "
          }
        >
          <img src="/img_back.png" alt="Next" className="h-[40px] w-[17px]" />
        </button>
         {/* First detail Container for heading and flower image */}
        <div className="max-w-[596px] w-full mobile:w-full tablet:h-full desktop:h-full mobile:mx-auto items-center flex flex-col">
          <div className="text-[#1E2125] mobile:hidden text-[40px] mt-[58px] tablet:mt-[34px] leading-[46.88px] font-variation-customOpt40">
            {images[currentIndex].title}
          </div>

          <div className="tablet:flex flex-row w-full justify-between hidden ">
            <button onClick={handlePrev} className={" my-auto ml-[-20px]"}>
              <img
                src="/img_back.png"
                alt="Prev"
                className="h-[40px] w-[17px]"
              />
            </button>

            <img
              src={images[currentIndex].image}
              alt="sunflower_img"
              className="h-[240px] w-[371px] mobile:w-[297px] mobile:h-[240px] 
                        mobile:mt-[18px] rounded-md mx-auto tablet:mt-[33px] mt-[56px]"
            />

            <button onClick={handleNext} className={" my-auto mr-[-20px]"}>
              <img
                src="/img_forward.png"
                alt="Next"
                className="h-[40px] w-[17px]"
              />
            </button>
          </div>
            
            <div className="flex flex-row">
            <img
            src={images[currentIndex].image}
            alt="sunflower_img"
            className=" tablet:hidden  mobile:flex desktop:flex h-[240px] w-[371px] mobile:w-[297px] mobile:h-[240px] mobile:mt-[18px] rounded-md mx-auto tablet:mt-[33px] mt-[56px]"
          />
            </div>
         
          <div className="hidden desktop:flex">
            <ProgressBar
              currentSlide={currentIndex}
              totalSlides={images.length}
            />
          </div>

          <div className="hidden mobile:flex w-[297px] h-[48px] flex-row justify-end mr-[8px] mt-[-52px]">
            <div className="w-[48px] h-[48px] rounded-lg text-black flex justify-center items-center mb-[0px] mr-[0px] shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              <Image
                src={imgTelephone}
                alt="fb_ico"
                className=" w-[27px] h-[27px]"
              />
            </div>
          </div>
        </div>

        {/* Second detail Container for website and other texts */}
        <div className="max-w-[684px] w-full h-full flex flex-col mobile:mt-[37.27px] mobile:bg-white tablet:bg-white">
          {/* Conatiner for top most texts */}
          <div className="w-[593px] hidden h-[42px] mr-[91px] desktop:flex flex-wrap mt-[16px] text-center text-[#939393] text-[14px] leading-[21px]">
            {/* {images[currentIndex].detail} */}
          </div>

          {/* Container for websites */}
          <div className="hidden desktop:flex ml-[58px] mt-[13px]">
            <p className="text-[20px] leading-[23.44px] text-[#1E2125] font-variation-customOpt20">
              Obiščite našo spletno stran:
              <Link href="https://www.suniflower.com">
                <href className="text-[#1E2125] text-[24px] font-semibold  font-variation-customOpt24">
                  {} {images[currentIndex].Sitelink}
                </href>
              </Link>
            </p>
          </div>

          {/* Main Container for mail telephone and timings */}
          <div
            className=" desktop:mt-[79px] tablet:mt-[40px] w-[488px] mobile:ml-[40px] mobile:w-[274px] mobile:h-[254px]
                     mobile:flex-col tablet:w-full tablet:mx-auto tablet:justify-center ml-[29px] mobile:gap-[24px] tablet:gap-[74px] gap-[48px] flex flex-row"
          >
            {/* Container for telephone mail and other texts */}
            <div className="w-[274px] h-[115px] flex flex-col">
              <div className="text-[#000000] leading-[18.75px] text-[16px] font-variation-customOpt16">
                Cvetličarna št.1
              </div>

              <div className="text-[#414141] italic text-[16px] mt-[8px] font-[400px] leading-[24px] tablet:font-variation-customOpt16 desktop:font-variation-customOpt16">
                Zidarska ulica 184, Ljubno ob Savinji
              </div>

              <div className="font-variation-customOpt16 mt-[8px] italic text-[16px] leading-[24px] text-[#414141]">
                Tel. {images[currentIndex].telephone}
              </div>

              <div className="text-[16px] italic text-[#414141] leading-[24px] mt-[8px] font-variation-customOpt16">
                Email: {images[currentIndex].email}
              </div>
            </div>

            {/* Container for time and other texts */}
            <div className="w-[166px] h-[115px] flex flex-col">
              <div className="text-[#000000] leading-[18.75px] text-[16px] font-variation-customOpt16">
                Delovni čas
              </div>

              <div className="text-[#414141] italic text-[16px] mt-[8px] leading-[24px] font-variation-customOpt16">
                Pon - Pet: 8:00 -18:00
              </div>

              <div className="font-variation-customOpt16 mt-[8px] italic text-[16px] leading-[24px] text-[#414141]">
                Sobota: 8:00 - 15:00
              </div>

              <div className="text-[16px] italic text-[#414141] leading-[24px] mt-[8px] font-variation-customOpt16">
                Nedelja: Zaprto
              </div>
            </div>
          </div>

          <div className="tablet:flex hidden">
            <ProgressBar
              currentSlide={currentIndex}
              totalSlides={images.length}
            />
          </div>

          <div className="mobile:flex flex-row hidden mt-[18px] justify-between w-[275px] h-[41px] ml-[29px]">
            <div>
              <ProgressBar
                currentSlide={currentIndex}
                totalSlides={images.length}
              />
            </div>

            <div className="flex gap-[30px] flex-row items-center ">
              <button
                onClick={handlePrev}
                className="mobile:flex h-[36px] shadow-custom-light-dark-with-white-button bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] justify-center items-center rounded-lg w-[36px] px-2"
              >
                <img
                  src="/img_back_mob.png"
                  alt="back"
                  className="h-[13.79px] w-[8.43px]"
                />
              </button>

              <button
                onClick={handleNext}
                className="mobile:flex h-[36px] shadow-custom-light-dark-with-white-button bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] justify-center items-center rounded-lg w-[36px] px-2 "
              >
                <img
                  src="/img_forward_mob.png"
                  alt="back"
                  className="h-[13.79px] w-[8.43px]"
                />
              </button>
            </div>
          </div>

          <div className="desktop:hidden flex mt-[30px] mobile:mt-[38px]">
            <p className="text-[20px] mobile:w-[249px] mx-auto leading-[23.44px] text-[#1E2125] font-variation-customOpt20">
              Obiščite našo spletno stran:
              <Link href="https://www.suniflower.com">
                <href className="text-[#1E2125] text-[24px] font-semibold  font-variation-customOpt24">
                  {} {images[currentIndex].Sitelink}
                </href>
              </Link>
            </p>
          </div>

          <div className="ml-[29px] tablet:mx-auto mobile:mx-auto flex flex-row gap-[16px] w-[176px] h-[48px] tablet:mt-[26px] mobile:mt-[29px] mt-[63px]">
            <div className="w-[48px] h-[48px] rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              <Image src={imgFb} alt="fb_ico" className=" w-[20px] h-[20px]" />
            </div>

            <div className="w-[48px] h-[48px] rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              <Image
                src={imgInsta}
                alt="fb_ico"
                className=" w-[20px] h-[20px]"
              />
            </div>

            <div className="w-[48px] h-[48px] rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              <Image
                src={imgLocation}
                alt="fb_ico"
                className=" w-[20px] h-[20px]"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className={
            "hidden desktop:flex self-center my-auto ml-[-80px]"
          }
        >
          <img
            src="/img_forward.png"
            alt="Next"
            className="h-[40px] w-[17px]"
          />
        </button>
      </div>
    </div>
  );
};

export default SunflowerFlorist;
