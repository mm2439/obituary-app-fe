"use client";
import { useState } from "react";

const images = [
  "/img_ipad_slide.avif",
  "/img_ipad_slide.avif",
  "/img_ipad_slide.avif",
];

const ImageView = ({ image, index, currentIndex, handleImageClick, key }) => {
  const isCurrent = index === currentIndex;
  const isNext = index === (currentIndex + 1) % images.length;
  const isPrev = index === (currentIndex - 1 + images.length) % images.length;

  let className = "absolute transition-transform duration-500 ease-in-out ";
  if (isCurrent) {
    className += "w-[300px] h-[430px] z-20";
  } else if (isNext) {
    className +=
      "w-[204.75px] h-[300px] z-10 transform desktop:translate-x-[290px] tablet:translate-x-[270px] mobile:translate-x-[270px]";
  } else if (isPrev) {
    className +=
      "w-[204.75px] h-[300px] z-10 transform desktop:-translate-x-[290px] tablet:-translate-x-[270px] mobile:-translate-x-[270px]";
  } else {
    className += "hidden";
  }
  return (
    <img
      key={key}
      src={image}
      alt={`Slide ${index}`}
      className={`cursor-pointer ${className}`}
      onClick={() => handleImageClick(index)}
    />
  );
};

const LastFewPages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log("Previous button clicked, current index: ", currentIndex);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    console.log("Next button clicked, current index: ", currentIndex);
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    console.log("Image clicked, new current index: ", index);
  };

  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-[1920px] w-full h-[876px] tablet:h-[887px] mobile:h-[779px] overflow-hidden mx-auto flex justify-center items-center">
        <div className="w-[789.45px] h-[665px] tablet:w-[740px] items-center flex flex-col">
          <div className="w-[617.64px] h-[91px] flex flex-col items-center">
            <div className="font-variation-customOpt40 text-[#3C3E41] text-[40px] mobile:text-[28px] mobile:font-variation-customOpt28 leading-[48px]">
              Nekaj zadnjih strani
            </div>
            <div className="text-[#3C3E41] mt-[16px] text-[20px] mobile:font-variation-customOpt20 tablet:text-[24px] leading-[27px] font-variation-customOpt24 font-bold">
              Bodite med prvimi
            </div>
          </div>
          <div className="w-full h-[430px] mt-[48px]">
            <div className="relative max-w-[1920px] w-full overflow-hidden mx-auto justify-center items-center flex flex-col">
              <div className="relative w-[300px] h-[430px] flex justify-center items-center">
                {images.map((image, index) => (
                  <ImageView
                    key={index}
                    image={image}
                    index={index}
                    currentIndex={currentIndex}
                    handleImageClick={handleImageClick}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="h-[48px] mt-[48px] flex flex-row justify-between w-[120px] mx-auto">
            <button
              onClick={handlePrev}
              className="flex h-[48px] rounded-3xl shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] justify-center items-center w-[48px]"
            >
              <img
                src="img_back_mob.png"
                alt="Back"
                className="h-[13.79px] w-[8.43px]"
              />
            </button>
            <button
              onClick={handleNext}
              className="flex h-[48px] rounded-3xl shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] justify-center items-center w-[48px]"
            >
              <img
                src="img_forward_mob.png"
                alt="Forward"
                className="h-[13.79px] w-[8.43px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastFewPages;
