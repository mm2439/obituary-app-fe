"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
];

const ShippingNotifications = ({ set_Id, setModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const widthDivRef = useRef(null);
  const heightDivRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const widthDiv = widthDivRef.current;
    const heightDiv = heightDivRef.current;
    if (!widthDiv || !heightDiv) return;

    const handleResize = () => {
      if (widthDiv) {
        setWidth(widthDiv.offsetWidth);
      }
      if (heightDiv) {
        setHeight(heightDiv.offsetHeight);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(widthDiv);
    resizeObserver.observe(heightDiv);

    // Initial width and height set
    handleResize();

    return () => {
      resizeObserver.unobserve(widthDiv);
      resizeObserver.unobserve(heightDiv);
      resizeObserver.disconnect();
    };
  }, []);

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
      <>
        {index === currentIndex ? (
          <div className="h-[500px]  w-[260px] ">
            <div className="mockup-phone h-[500px] w-[260px] shadow-custom-light-dark-box-image-wall ">
              <div style={{ height: 25, width: 120 }} className=" camera" />
              <div className="display w-full h-full flex justify-center items-center">
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className={`relative object-cover h-full w-full`}
                />
              </div>
            </div>
          </div>
        ) : index > currentIndex ? (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`relative object-cover my-auto h-[300px] w-[156px] ml-4 rounded shadow-custom-light-dark-box-image-wall `}
          />
        ) : null}
      </>
    );
  };

  return (
    <div className="relative bg-[url('../public/pisano_ozadje.avif')]  bg-cover border-t-[1px] border-b-[1px] border-[#0F0671] py-24 w-full overflow-hidden mx-auto justify-center items-center flex flex-col">
      <div className="max-w-[1280px] w-full flex flex-row mobile:flex-col justify-evenly mobile:px-7">
        <div className="w-[368.5px] mobile:pl-0 pl-[25px] mobile:w-full mx-3 mobile:mx-0 mobile:text-center  ">
          <div className="text-[32px] leading-[47px] mobile:text-[28px] mobile:leading-[33px] whitespace-nowrap font-normal text-[#1E2125]">
            Obvestila za pošiljanje
          </div>
          <div className="text-base leading-6 mt-4 font-normal text-[#414141]">
            Prenesite si že pripravljena obvestila za pošiljanje naprej po
            emailu ali preko mobilnega telefona. Predloge dobite brezplačno pri
            vašem cvetličarju, ki je v našem imeniku in s pošiljanjem naprej
            lahko začnete takoj. Cena predlog preko naše strani je sicer 10€.
          </div>
          <div className="text-[20px] font-normal text-[#0977AE] mt-10">
            Obvestilo o pogrebu
          </div>
          <div className="text-[20px] font-normal text-[#0977AE] mt-6">
            Zahvala
          </div>
          <div className="text-[20px] font-normal text-[#0977AE] mt-6">
            Vabilo
          </div>
          <div className=" mobile:hidden flex flex-row items-end mt-20 mobile:justify-center whitespace-nowrap">
            <div
              className="text-[28px] tablet:text-[28px] mobile:[24px] mobile:leading-[28px] leading-[38px] font-normal text-[#1E2125]"
            >
              BREZPLAČNO
            </div>
            <div className="text-[20px] font-normal text-[#1E2125] ml-[5px]">
              v vaši cvetličarni
            </div>
          </div>
        </div>
        <div className="relative flex w-full tablet:ml-5 desktop:ml-10  flex-col">
          <div
            ref={widthDivRef}
            style={{
              height: height,
            }}
            className="relative flex w-full flex-col"
          />
          <div
            style={{
              width: width,
            }}
            ref={heightDivRef}
            className="flex absolute desktop:right-0 tablet:right-0 flex-col"
          >
            <div className="relative  flex-1  flex flex-row mobile:my-7  ">
              {images.map((image, index) => (
                <ImageSliderBlock image={image} index={index} key={index} />
              ))}
            </div>
            <div className="flex h-full absolute items-center">
              <div className="flex w-[260px] justify-between">
                <button
                  className="h-16 w-12 rounded-r-full shadow-custom-light-dark-with-white-button bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] flex justify-center items-center"
                  onClick={handlePrev}
                >
                  <ChevronLeftIcon
                    className="h-6 w-6 mobile:w-4 mobile:h-4 text-black"
                    aria-hidden="true"
                  />
                </button>

                <button
                  className="h-16 w-12 rounded-l-full shadow-custom-light-dark-with-white-button bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] flex justify-center items-center"
                  onClick={handleNext}
                >
                  <ChevronRightIcon
                    className="h-6 w-6 mobile:w-4 mobile:h-4 text-black"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <div className="mobile:flex hidden flex-row items-end mt-5 mobile:justify-center whitespace-nowrap">
              <div
                onClick={() => {
                  set_Id("drugega");
                  setModal(true);
                }}
                className="text-[24px] cursor-pointer leading-[28px] font-normal text-[#1E2125]"
              >
                BREZPLAČNO
              </div>
              <div className="text-[20px] font-normal text-[#1E2125] ml-[5px]">
                v vaši cvetličarni
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingNotifications;
