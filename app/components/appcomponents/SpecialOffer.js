"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import API_BASE_URL from "@/config/apiConfig";
import Image from "next/image";
const defaultSlides = [
  {
    id: 1,
    title: "Posebna ponudba v avgustu",
    image: "/sopek_v_vazi.jpg",
    description:
      "Visok blok, kjer lahko dodate karkoli, kar bi lahko pritegnilo vaše stranke ali poudarite posebne promocije ali ponudbo pred prazniki, ipd. Da boste lahko povedali kar največ, je opcija tudi več takih blokov, ki se izmenjujejo levo-desno. Enako kot prejšnji blok, si lahko tudi tega skreirate sami in gaprilepite kot sliko.",
  },
  {
    id: 2,
    title: "Some other heading",
    image: "/flologo3.avif",
    description:
      "Visok blok, kjer lahko dodate karkoli, kar bi lahko pritegnilo vaše stranke ali poudarite posebne promocije ali ponudbo pred prazniki, ipd. Da boste lahko povedali kar največ, je opcija tudi več takih blokov, ki se izmenjujejo levo-desno. Enako kot prejšnji blok, si lahko tudi tega skreirate sami in gaprilepite kot sliko.",
  },
  {
    id: 3,
    title: "Primo Heading",
    image: "/flower2.jpeg",
    description:
      "Visok blok, kjer lahko dodate karkoli, kar bi lahko pritegnilo vaše stranke ali poudarite posebne promocije ali ponudbo pred prazniki, ipd. Da boste lahko povedali kar največ, je opcija tudi več takih blokov, ki se izmenjujejo levo-desno. Enako kot prejšnji blok, si lahko tudi tega skreirate sami in gaprilepite kot sliko.",
  },
];

const getSlideImage = (slide = {}) => {
  if (slide?.image?.includes("floristSlideUploads")) {
    return `${API_BASE_URL}/${slide.image}`;
  }
  return slide.image;
};

const SpecialOffer = ({ data }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (data?.slides?.length) {
      setSlides(data?.slides);
    } else {
      setSlides(defaultSlides);
    }
  }, [data?.slides]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const activeSlide = slides?.[currentIndex] || defaultSlides?.[0] || {};

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full  overflow-hidden">
      <div className="w-full flex-shrink-0  desktop:bg-[#FBF8F4] bg-white flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="mobile:hidden flex my-auto mr-[30px] tablet:ml-[30px]"
        >
          <img src="/img_back.png" alt="Next" className="h-[40px] w-[17px]" />
        </button>

        {slides && slides.length > 0 && (
          <div
            key={`${activeSlide?.id}-${currentIndex}`}
            className="h-full max-w-[1023px] w-full py-28 tablet:py-8 mobile:py-6 flex desktop:flex-row flex-col-reverse justify-between items-center"
          >
            <div className=" flex  flex-col w-[450px] mobile:w-[300px]">
              <div className="text-[40px] leading-[47px mobile:leading-[38px] font-variation-customOpt40  text-[#000000] mobile:text-[32px] ">
                {activeSlide.title}
              </div>
              <div className="text-[16px] text-[#414141] font-variation-customOpt16 leading-[24px] mt-[20px]">
                {activeSlide.description}
              </div>
            </div>
            <div className=" relative tablet:mb-6 mobile:mb-8">
              <Image
                width={350}
                height={350}
                src={getSlideImage(activeSlide)}
                alt={activeSlide.title || "slide"}
                className=" w-[351px] h-[351px] tablet:w-[450px] tablet:h-[411px] mobile:w-[296px] mobile:h-[296px]  rounded"
              />
              {currentIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className=" absolute bottom-2 left-2 mobile:flex hidden h-[36px] shadow-custom-light-dark-with-white-button bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] justify-center items-center rounded-lg w-[36px] px-2"
                >
                  <img
                    src="img_back_mob.png"
                    alt="back"
                    className="h-[13.79px] w-[8.43px]"
                  />
                </button>
              )}

              {currentIndex < slides.length - 1 && (
                <button
                  onClick={handleNext}
                  className=" absolute bottom-2 right-2 mobile:flex hidden h-[36px] shadow-custom-light-dark-with-white-button bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] justify-center items-center rounded-lg w-[36px] px-2 "
                >
                  <img
                    src="/img_forward_mob.png"
                    alt="back"
                    className="h-[13.79px] w-[8.43px]"
                  />
                </button>
              )}
            </div>
          </div>
        )}

        <button
          onClick={handleNext}
          className="mobile:hidden flex my-auto ml-[30px] tablet:mr-[30px]"
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

export default SpecialOffer;
