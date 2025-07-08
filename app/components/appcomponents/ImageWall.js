"use client";
import React from "react";
import useScrollbarWidth from "@/app/hooks/useScrollbarWidth";
import API_BASE_URL from "@/config/apiConfig";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { useRef } from "react";
import Link from "next/link";

// 7 October 2024 - sivo_ozadje.jpg

const ImageWall = ({
  set_Id,
  setModal,
  setSelectedImage,
  setShowImageView,
  setImageId,
  data,
}) => {
  const ImageContainer = ({ image, onClose }) => {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
          <img
            src={image.fileUrl}
            alt="Test 123"
            className="w-300 h-300 object-cover"
          />

          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  const scrollContainerRef = useRef(null);
  const marginLeftClasses = [
    "ml-[-12px]",
    "ml-[-22px]",
    "ml-[12px]",
    "ml-[-7px]",
    "ml-[7px]",
  ];
  const marginRightClasses = [
    "mr-[-12px]",
    "mr-[-22px]",
    "mr-[12px]",
    "mr-[-7px]",
    "mr-[7px]",
  ];
  const heightClasses = [
    "h-12",
    "h-10",
    "h-16",
    "h-20",
    "h-28",
    "h-32",
    "h-36",
    "h-52",
    "h-48",
    "h-44",
    "h-56",
  ];

  const getRandomClass = (classes) => {
    return classes[Math.floor(Math.random() * classes.length)];
  };

  const getRandomHeightClass = () => {
    return heightClasses[Math.floor(Math.random() * heightClasses.length)];
  };

  const commonClasses =
    "relative flex flex-shrink-0 h-full flex-col items-center";

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount =
        direction === "left"
          ? -window.innerWidth / 1.2
          : window.innerWidth / 1.2;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const HeaderHeadingText = ({
    image,
    index,
    key,
    randomHeightClass,
    randomMarginClasses,
  }) => {
    return (
      <div className={`${commonClasses} ${randomMarginClasses}`}>
        <div className="w-12 h-12 rounded-full flex justify-center items-center text-gray-500 font-normal text-lg shadow-custom-light-dark-box-image bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
          {/* {image.lable} */}M
        </div>
        <div
          className={`w-px bg-gradient-to-b from-[#00000010] mt-1  to-black ${randomHeightClass} shadow-custom-light-dark-box-image`}
        />
        <div className=" z-10 flex flex-col items-center justify-center">
          <div className="h-3 w-3 border rounded-full border-black bg-transparent" />
          <div className=" h-1.5 w-7  bg-black" />
        </div>

        <div
          onClick={() => {
            setImageId(index);
            setShowImageView(true);
          }}
          className="mt-[-4px] relative cursor-pointer flex flex-shrink-0 shadow-custom-light-dark-box-image-wall p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] "
        >
          <img
            src={`${API_BASE_URL}/${image.fileUrl}`}
            alt="sponser4 of the image"
            className="flex w-full h-auto max-w-48 mobile:max-w-40 bg-center"
          />
        </div>
      </div>
    );
  };
  const scrollbarWidth = useScrollbarWidth();

  return (
    <div className="relative  w-full overflow-hidden mx-auto flex justify-center items-center">
      <div
        style={{
          width: `calc(100vw - ${scrollbarWidth}px)`,
        }}
        className="relative flex flex-col bg-[url('../public/oblaki_ozadje.jpg')]  bg-cover items-center justify-between  "
      >
        <div className=" max-w-[1920px]  w-full  mx-auto relative flex flex-col items-center justify-between">
          <div className="text-[40px] mobile:text-[28px] leading-[47px] mobile:leading-[33px] font-normal text-[#1E2125] text-center mt-[115px] ">
            Nepozabni trenutki
          </div>

          <div
            onClick={() => {
              set_Id("6");
              setModal(true);
            }}
            // href={"/memorypromo"}
            className="flex cursor-pointer items-center mt-10 rounded-lg h-[48px] w-[155px] justify-center  shadow-custom-light-dark-with-white bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
          >
            <img
              src={"/icon_plus_round.png"}
              alt={`Shadow}`}
              className={`h-[16px]  w-[16px] mr-2 `}
            />
            <div className="text-base leading-6 font-normal text-[#1E2125] text-center ">
              Dodaj slike
            </div>
          </div>

          <button
            onClick={() => scroll("left")}
            className=" h-16 w-16 mobile:w-12 mobile:h-12 shadow-custom-light-dark-box-image bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] absolute left-5 top-1/2 z-20 rounded-full flex justify-center items-center"
          >
            <ChevronLeftIcon
              className="h-6 w-6 mobile:w-4 mobile:h-4 text-black"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className=" h-16 w-16 mobile:w-12 mobile:h-12 shadow-custom-light-dark-box-image bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] absolute right-5 top-1/2  z-20 rounded-full flex justify-center items-center"
          >
            <ChevronRightIcon
              className="h-6 w-6 mobile:w-4 mobile:h-4 text-black"
              aria-hidden="true"
            />
          </button>

          <div
            ref={scrollContainerRef}
            className="relative flex w-full h-full  overflow-x-auto container-snap px-40 mobile:px-20 py-10"
          >
            {data?.map((image, index) => {
              const marginLeftClass = getRandomClass(marginLeftClasses);
              const marginRightClass = getRandomClass(marginRightClasses);
              const randomHeightClass = getRandomHeightClass();
              const randomMarginClasses = `${marginLeftClass} ${marginRightClass}`;

              return (
                <HeaderHeadingText
                  image={image}
                  index={index}
                  key={index}
                  randomHeightClass={randomHeightClass}
                  randomMarginClasses={randomMarginClasses}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWall;
