"use client";
import React, { useState } from "react";

const Offer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    console.log("prev button is tapped");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    console.log("next button is tapped");
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const images = [
    {
      image: "/porocna.avif",
      title: "Poročni aranžmaji",
    },
    {
      image: "/roza_sopek.avif",
      title: "Rezano cvetje",
    },
    {
      image: "/vrtnice.jpg",
      title: "Žalni maharani",
    },
  ];

  return (
    <div className="relative max-w-[1920px] bg-[#F5F7F9] py-16 tablet:py-12 mobile:py-8 w-full overflow-hidden flex mx-auto justify-center items-center">
      {/*Main container (child view)*/}
      <div className="flex w-[1085px]  tablet:w-[666.5px] mobile:w-[287.76px] items-center flex-col">
        {/*Header container*/}
        <div className="flex w-[537px] h-[103px] tablet:w-[488.57px] mobile:w-[296px] mobile:h-[142px] items-center flex-col">
          <div className="text-[40px] mobile:text-[32px] text-[#000000] font-variation-customOpt40 mobile:font-variation-customOpt32 mt-[-6px] mobile:mt-[-18px]">
            Naša ponudba
          </div>
          <div className="h-[48px] w-full text-[16px] mobile:h-[96px] text-[#939393] text-center leading-[24px] font-variation-customOpt16 flex desktop:hidden mobile:mt-[1px]">
            Dodate tri stvari iz vaše ponudbe, ki jih želite posebej poudariti
            Tukaj pod naslovom lahko dopišete tudi poljubni tekst, prodajno
            sporočilo.
          </div>
          <div className="text-[16px] text-[#939393] text-center leading-[24px] font-variation-customOpt16 tablet:hidden desktop:flex mobile:hidden">
            Dodate tri stvari iz vaše ponudbe, ki jih želite posebej poudariti
          </div>
          <div className="text-[16px] text-[#939393] leading-[24px] font-variation-customOpt16 hidden desktop:flex">
            Tukaj pod naslovom lahko dopišete tudi poljubni tekst, prodajno
            sporočilo.
          </div>
        </div>

        {/*Flower container*/}
        <div className="flex w-[1085px] h-[455px] tablet:w-[666px] tablet:h-[357px] mobile:w-[287.76px] mobile:h-[390.83px] mt-12 mobile:mt-[27px]">
          <div className="hidden w-[355px] h-[455px] tablet:w-[210px] tablet:h-full mobile:h-[390px] desktop:bg-gradient-to-r mobile:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark mobile:shadow-custom-light-dark mobile:rounded-lg desktop:rounded-lg flex-col items-center mobile:flex">
            <img
              src={images[currentIndex].image}
              alt="flower 1 image"
              className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] mobile:w-[249.96px] mobile:h-[296.35px] mt-[22px] tablet:mt-0 rounded-lg"
            />
            <div className="text-[24px] text-[#1E2125] mobile:text-[20px] mobile:font-variation-customOpt20wght400 font-variation-customOpt24 mobile mt-5 mobile:mt-[14px] text-center">
              {images[currentIndex].title}
            </div>
          </div>

          <div className="flex w-[355px] h-[455px] tablet:w-[210px] tablet:h-full mobile:h-[390px] desktop:bg-gradient-to-r mobile:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark mobile:shadow-custom-light-dark mobile:rounded-lg desktop:rounded-lg flex-col items-center mobile:hidden">
            <img
              src="porocna.avif"
              alt="porocna"
              className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] mobile:w-[249.96px] mobile:h-[296.35px] mt-[22px] tablet:mt-0 rounded-lg"
            />
            <div className="text-[24px] text-[#1E2125] mobile:text-[20px] mobile:font-variation-customOpt20wght400 font-variation-customOpt24 mobile mt-5 mobile:mt-[14px] text-center">
              Poročni aranžmaji
            </div>
          </div>

          {/*f2 container*/}
          <div className="flex w-[355px] h-[455px] tablet:w-[210px] tablet:h-full desktop:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark desktop:rounded-lg flex-col items-center ml-10 tablet:ml-[18px] mobile:hidden">
            <img
              src="/roza_sopek.avif"
              alt="flower 1 image"
              className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] tablet:mt-0 mt-[22px] rounded-lg"
            />
            <div className="text-[24px] text-[#1E2125] font-variation-customOpt20wght400 mt-5 text-center">
              Rezano cvetje
            </div>
          </div>

          {/*f3 container*/}
          <div className="flex w-[355px] h-[455px] tablet:w-[210px] tablet:h-full desktop:bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:shadow-custom-light-dark desktop:rounded-lg flex-col items-center ml-10 tablet:ml-[18px] mobile:hidden">
            <img
              src="/vrtnice.jpg"
              alt="vrtnice"
              className="w-[291px] h-[345px] tablet:w-[210px] tablet:h-[289px] tablet:mt-0 mt-[22px] rounded-lg"
            />
            <div className="text-[24px] text-[#1E2125] font-variation-customOpt20wght400 mt-5 text-center tablet:hidden flex">
              Žalno cvetje
            </div>
            <div className="text-[24px] text-[#1E2125] font-variation-customOpt20wght400 mt-5 text-center tablet:flex hidden">
              Žalni aranžmaji
            </div>
          </div>
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
