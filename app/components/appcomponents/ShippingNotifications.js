"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const defaultImages = [
  "/memory_demo/1.png",
  "/memory_demo/2.png",
  "/memory_demo/3.png",
  "/memory_demo/4.png",
  "/memory_demo/5.png",
];

const ShippingNotifications = ({
  set_Id,
  setModal,
  images = defaultImages,
  blurredImages = false,
}) => {
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
            className={`relative hidden desktop:inline object-cover my-auto h-full w-full  `}
          />
        ) : null}
      </>
    );
  };

  return (
    <div className="relative bg-[url('../public/pisano_ozadje.avif')]  bg-cover border-t-[1px] border-[#0F0671]  py-24 tablet:py[65px] w-full overflow-hidden mx-auto justify-center items-center flex flex-col">
      <div className="max-w-[1000px] tablet:w-[700px] w-full flex flex-row mobile:flex-col gap-[77px] tablet:gap-[50px] mobile:gap-[39px] justify-evenly mobile:px-7">
        <div className="w-[368.5px] tablet:w-[347px] shrink-0 mobile:pl-0 mobile:w-full mx-3 mobile:mx-0 mobile:text-center  ">
          <div className="text-[40px] leading-[100%] mobile:text-[28px] mobile:leading-[33px] whitespace-nowrap font-normal text-[#1E2125]">
            Obvestila za pošiljanje
          </div>
          <div className="text-[16px] leading-6 mt-4 font-normal text-[#414141]">
            Prenesite si že pripravljena obvestila za pošiljanje naprej po
            emailu ali preko mobilnega telefona. <br /> <br />
            Predloge dobite brezplačno pri vašem cvetličarju, ki je v našem
            imeniku in s pošiljanjem naprej lahko začnete takoj.
          </div>
          <div className="text-[20px] font-normal text-[#0977AE] mt-[65px] mobile:mt-[30px]">
            Obvestilo o pogrebu
          </div>
          <div className="text-[20px] font-normal text-[#0977AE] mt-2">
            Zahvala
          </div>
          <div className="text-[20px] font-normal text-[#0977AE] mt-2">
            Vabilo
          </div>
          <div className=" mobile:hidden flex flex-row items-end mt-20 mobile:justify-center whitespace-nowrap">
            <div className="text-[28px] tablet:text-[28px] mobile:[24px] mobile:leading-[28px] leading-[38px] font-normal text-[#1E2125]">
              BREZPLAČNO
            </div>
            <div className="text-[20px] font-normal text-[#1E2125] ml-[5px]">
              v vaši cvetličarni
            </div>
          </div>
        </div>
        <div className="relative flex w-full desktop:ml-10 flex-col">
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
            <div className="relative  flex-1  flex flex-row mobile:justify-center">
              {images.map((image, index) => (
                <ImageSliderBlock image={image} index={index} key={index} />
              ))}
            </div>

            <div className="flex justify-center items-center gap-[58px] tablet:gap-[20px] mobile:gap-[10px] mobile:my-[20px] desktop:ml-[350px] desktop:translate-y-[-100%] tablet:mt-[27px]">
              <button
                className="flex justify-center items-center h-[74px] w-[74px] "
                onClick={handlePrev}
              >
                <Image
                  src="/memory_demo_left.png"
                  alt="arrow-left"
                  width={74}
                  height={74}
                />
              </button>
              <div className="inline-flex flex-row gap-[10px] desktop:hidden">
                {images.map((image, index) => (
                  <>
                    {index === currentIndex ? (
                      <div
                        className="w-[16px] h-[16px] bg-white rounded-full"
                        style={{
                          background:
                            "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                          boxShadow:
                            "5px 5px 10px 0px #C2C2C280, -5px -5px 10px 0px #FFFFFF",
                        }}
                      ></div>
                    ) : (
                      <div
                        className="w-[16px] h-[16px] bg-white rounded-full"
                        style={{
                          background:
                            "linear-gradient(113.63deg, #C3C6C8 0%, #E3E5E5 100%)",
                        }}
                      ></div>
                    )}
                  </>
                ))}
              </div>
              <button
                className="flex justify-center items-center h-[74px] w-[74px]"
                onClick={handleNext}
              >
                <Image
                  src="/memory_demo_right.png"
                  alt="arrow-right"
                  width={74}
                  height={74}
                />
              </button>
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
