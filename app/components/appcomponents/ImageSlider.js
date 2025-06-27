"use client";
import Link from "next/link";
import { useState } from "react";

const images = [
  "/image_carousel_1.avif",
  "/image_carousel_2.avif",
  "/image_carousel_3.avif",
  "/image_carousel_4.jpg",
  "/image_carousel_5.avif",
  "/image_carousel_1.avif",
  "/image_carousel_2.avif",
  "/image_carousel_3.avif",
  "/image_carousel_4.jpg",
  "/image_carousel_5.avif",
  "/image_carousel_1.avif",
  "/image_carousel_2.avif",
  "/image_carousel_3.avif",
  "/image_carousel_4.jpg",
  "/image_carousel_5.avif",
  "/image_carousel_1.avif",
  "/image_carousel_2.avif",
  "/image_carousel_3.avif",
  "/image_carousel_4.jpg",
  "/image_carousel_5.avif",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

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

  const ImageSliderBlock = ({ image, index, key }) => {
    return (
      <div
        className={`absolute items-center  h-full w-full flex object-cover transition-opacity duration-500 ease-in-out ${
          index === currentIndex
            ? " justify-center rounded-xl "
            : index > currentIndex
            ? "justify-end"
            : "justify-start"
        }
              ${
                index === currentIndex
                  ? "z-30"
                  : index === currentIndex + 2 || index === currentIndex - 2
                  ? "z-10"
                  : index === currentIndex + 1 || index === currentIndex - 1
                  ? " z-20"
                  : "z-0"
              }
              `}
      >
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`relative object-cover${
            index === currentIndex
              ? " border-8 border-white rounded-3xl"
              : "border-0"
          } ${
            index === currentIndex
              ? "h-full  w-[493px] tablet:w-[323.3px]  mobile:w-[279.77px]"
              : index === currentIndex + 2 || index === currentIndex - 2
              ? "h-[211px] w-[294px] tablet:w-[189.41px] tablet:h-[153.55px] mobile:w-[162.57px] mobile:h-[153.55px]"
              : index === currentIndex + 1 || index === currentIndex - 1
              ? "h-[279px] w-[387px] mx-[45.8px] tablet:mx-[29.5px] mobile:mx-[25.32px] tablet:w-[249.32px] tablet:h-[203.04px] mobile:w-[214px] mobile:h-[203.04px]"
              : "h-0 w-0 hidden"
          }`}
        />
      </div>
    );
  };

  return (
    <div className="relative max-w-[1920px] py-14 mobile:py-9 w-full overflow-hidden mx-auto justify-center items-center flex flex-col">
      <div className="text-[40px] mobile:text-[28px] leading-[47px] mobile:leading-[33px] font-normal text-[#1E2125] text-center ">
        Nepozabni trenutki
      </div>

      <Link
        href={"/cvetlicarne"}
        className="flex items-center mt-12 mb-10 mobile:mt-10 mobile:mb-8 tablet:mt-[39px] rounded-lg h-[48px] w-[155px] justify-center  shadow-custom-light-dark-with-white bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
      >
        <img
          src={"/icon_plus_round.png"}
          alt={`Shadow}`}
          className={`h-[16px]  w-[16px] mr-2 `}
        />
        <div className="text-base leading-6 font-normal text-[#1E2125] text-center ">
          Dodaj slike
        </div>
      </Link>

      <div className="relative  w-[931.34px] tablet:w-[600px] mobile:w-full h-[345px] tablet:h-[267.07px] mobile:h-[267.07px]">
        {images.map((image, index) => (
          <ImageSliderBlock image={image} index={index} key={index} />
        ))}
      </div>
      <div className="absolute bottom-[86px] mobile:bottom-[66px] z-30 w-[931.34px] tablet:w-[600px] mobile:w-full h-[345px] tablet:h-[267.07px] mobile:h-[267.07px] flex items-center ">
        <button
          onClick={handlePrev}
          className="flex flex-1 h-[279px] tablet:h-[203.04px] mobile:h-[203.04px]"
        />
        <div className="h-full  w-[493px] tablet:w-[323.3px]  mobile:w-[279.77px]" />
        <button
          onClick={handleNext}
          className="flex flex-1 h-[279px] tablet:h-[203.04px] mobile:h-[203.04px]"
        />
      </div>
      <img
        src={"/image_shadow.png"}
        alt={`Shadow}`}
        className={`h-[30px]  w-[493px] tablet:w-[323.3px]  mobile:w-[279.77px] pt-[-16px]`}
      />
    </div>
  );
};

export default ImageSlider;
