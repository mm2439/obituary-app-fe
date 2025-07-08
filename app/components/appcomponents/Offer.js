"use client";
import React, { useEffect, useState } from "react";
import API_BASE_URL from "@/config/apiConfig";
import Image from "next/image";
const Offer = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    return imagePath.includes("companyUploads")
      ? `${API_BASE_URL}/${imagePath}`
      : imagePath;
  };

  const images = [
    data?.offer_one_image && data?.offer_one_title
      ? {
          image: getImageUrl(data.offer_one_image),
          title: data.offer_one_title,
        }
      : {
          image: "/porocna.avif",
          title: "Poročni aranžmaji",
        },
    data?.offer_two_image && data?.offer_two_title
      ? {
          image: getImageUrl(data.offer_two_image),
          title: data.offer_two_title,
        }
      : {
          image: "/roza_sopek.avif",
          title: "Rezano cvetje",
        },

    data?.offer_three_image && data?.offer_three_title
      ? {
          image: getImageUrl(data.offer_three_image),
          title: data.offer_three_title,
        }
      : {
          image: "/vrtnice.jpg",
          title: "Žalni maharani",
        },
  ].filter(Boolean);

  useEffect(() => {
    console.log(images, "====");
  }, [images]);
  return (
    <div className="relative max-w-[1920px] bg-[#F5F7F9] py-16 tablet:py-12 mobile:py-8 w-full overflow-hidden flex mx-auto justify-center items-center">
      {/*Main container (child view)*/}
      <div className="flex w-[1085px]  tablet:w-[666.5px] mobile:w-[287.76px] items-center flex-col">
        {/*Header container*/}
        {images.length > 0 && (
          <div className="flex w-[537px] h-[70px] tablet:w-[488.57px] mobile:w-[296px] mobile:h-[142px] items-center flex-col">
            <div className="text-[40px] mobile:text-[32px] text-[#000000] font-variation-customOpt40 mobile:font-variation-customOpt32 mt-[-6px] mobile:mt-[-18px]">
              Naša ponudba
            </div>
            <div className="h-[48px] w-full font-semibold text-[24px] mobile:h-[96px] text-[#939393] text-center leading-[24px] font-variation-customOpt16 flex desktop:hidden mobile:mt-[1px]">
              {data?.offer_subtitle}
            </div>
            <div className="text-[24px] font-semibold text-[#939393] text-center leading-[24px] font-variation-customOpt16 tablet:hidden desktop:flex mobile:hidden">
              {data?.offer_subtitle}
            </div>
          </div>
        )}

        {/*Flower container*/}
        <div className="flex w-[1085px]   h-[455px] tablet:w-[666px] tablet:h-[357px] mobile:w-[287.76px] mobile:h-[390.83px] mt-12 mobile:mt-[27px]">
          {images.length > 0 && (
            <div className="hidden w-[355px] h-[455px] tablet:w-[210px] tablet:h-full mobile:h-[390px] desktop:bg-gradient-to-r mobile:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark mobile:shadow-custom-light-dark mobile:rounded-lg desktop:rounded-lg flex-col items-center mobile:flex">
              <Image
                src={images[currentIndex].image}
                alt="flower 1 image"
                width={291}
                height={345}
                className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] mobile:w-[249.96px] mobile:h-[296.35px] mt-[22px] tablet:mt-0 rounded-lg"
              />
              <div className="text-[24px] text-[#1E2125] mobile:text-[20px] mobile:font-variation-customOpt20wght400 font-variation-customOpt24 mobile mt-5 mobile:mt-[14px] text-center">
                {images[currentIndex].title}
              </div>
            </div>
          )}

          {data?.offer_one_image && data?.offer_one_title ? (
            <div className="flex  w-[355px] h-[455px] tablet:w-[210px] tablet:h-full mobile:h-[390px] desktop:bg-gradient-to-r mobile:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark mobile:shadow-custom-light-dark mobile:rounded-lg desktop:rounded-lg flex-col items-center mobile:hidden">
              <Image
                src={images[0].image}
                alt={`${data?.offer_one_title}`}
                width={290}
                height={345}
                className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] mobile:w-[249.96px] mobile:h-[296.35px] mt-[22px] tablet:mt-0 rounded-lg"
              />
              <div className="text-[24px] text-[#1E2125] mobile:text-[20px] mobile:font-variation-customOpt20wght400 font-variation-customOpt24 mobile mt-5 mobile:mt-[14px] text-center">
                {data?.offer_one_title}
              </div>
            </div>
          ) : (
            <div className="flex  w-[355px] h-[455px] tablet:w-[210px] tablet:h-full mobile:h-[390px] desktop:bg-gradient-to-r mobile:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark mobile:shadow-custom-light-dark mobile:rounded-lg desktop:rounded-lg flex-col items-center mobile:hidden">
              <Image
                src={images[0].image}
                alt={`${data?.offer_one_title}`}
                width={290}
                height={345}
                className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] mobile:w-[249.96px] mobile:h-[296.35px] mt-[22px] tablet:mt-0 rounded-lg"
              />
              <div className="text-[24px] text-[#1E2125] mobile:text-[20px] mobile:font-variation-customOpt20wght400 font-variation-customOpt24 mobile mt-5 mobile:mt-[14px] text-center">
                {images[0].title}
              </div>
            </div>
          )}

          {/*f2 container*/}

          {data?.offer_two_image && data?.offer_two_title ? (
            <div className="flex   w-[355px] h-[455px] tablet:w-[210px] tablet:h-full desktop:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark desktop:rounded-lg flex-col items-center ml-10 tablet:ml-[18px] mobile:hidden">
              <Image
                src={images[1].image}
                alt={`${data?.offer_two_title}`}
                width={290}
                height={345}
                className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] tablet:mt-0 mt-[22px] rounded-lg"
              />
              <div className="text-[24px] text-[#1E2125] font-variation-customOpt20wght400 mt-5 text-center">
                {data?.offer_two_title}
              </div>
            </div>
          ) : (
            <div className="flex  w-[355px] h-[455px] tablet:w-[210px] tablet:h-full mobile:h-[390px] desktop:bg-gradient-to-r mobile:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark mobile:shadow-custom-light-dark mobile:rounded-lg desktop:rounded-lg ml-10 tablet:ml-[18px] flex-col items-center mobile:hidden">
              <Image
                src={images[1].image}
                alt={`${data?.offer_one_title}`}
                width={290}
                height={345}
                className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] mobile:w-[249.96px] mobile:h-[296.35px] mt-[22px] tablet:mt-0 rounded-lg"
              />
              <div className="text-[24px] text-[#1E2125] mobile:text-[20px] mobile:font-variation-customOpt20wght400 font-variation-customOpt24 mobile mt-5 mobile:mt-[14px] text-center">
                {images[1].title}
              </div>
            </div>
          )}

          {/*f3 container*/}
          {data?.offer_three_image && data?.offer_three_title ? (
            <div className="flex   w-[355px] h-[455px] tablet:w-[210px] tablet:h-full desktop:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark desktop:rounded-lg flex-col items-center ml-10 tablet:ml-[18px] mobile:hidden">
              <Image
                src={images[2].image}
                alt={`${data?.offer_three_title}`}
                width={290}
                height={345}
                className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] tablet:mt-0 mt-[22px] rounded-lg"
              />
              <div className="text-[24px] text-[#1E2125] font-variation-customOpt20wght400 mt-5 text-center tablet:hidden flex">
                {data?.offer_three_title}
              </div>
              <div className="text-[24px] text-[#1E2125] font-variation-customOpt20wght400 mt-5 text-center tablet:flex hidden">
                {data?.offer_three_title}
              </div>
            </div>
          ) : (
            <div className="flex w-[355px] h-[455px] tablet:w-[210px] tablet:h-full mobile:h-[390px] desktop:bg-gradient-to-r mobile:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark mobile:shadow-custom-light-dark mobile:rounded-lg desktop:rounded-lg flex-col items-center ml-10 tablet:ml-[18px] mobile:hidden">
              <Image
                src={images[2].image}
                alt={`${data?.offer_one_title}`}
                width={290}
                height={345}
                className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] mobile:w-[249.96px] mobile:h-[296.35px] mt-[22px] tablet:mt-0 rounded-lg"
              />
              <div className="text-[24px] text-[#1E2125] mobile:text-[20px] mobile:font-variation-customOpt20wght400 font-variation-customOpt24 mobile mt-5 mobile:mt-[14px] text-center">
                {images[2].title}
              </div>
            </div>
          )}
        </div>

        {/*bottom slider button*/}
        <div className="hidden mobile:flex w-[136px] h-[41px] mx-auto mt-[21px] items-center justify-between">
          <button
            className="w-[36px] h-[36px] rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF]"
            onClick={handlePrev}
          >
            <img
              src="/previous_img.png"
              alt="imgPrevious"
              className=" w-[8.43px] h-[13.79px]"
            />
          </button>
          <button
            className="w-[36px] h-[36px] rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF]"
            onClick={handleNext}
          >
            <img
              src="/next_img.png"
              alt="imgNext"
              className=" w-[8.43px] h-[13.79px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
