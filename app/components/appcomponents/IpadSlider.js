// 16 September 2024
"use client";
import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import ipadImage from "@/public/spominska_tab.avif";
import ipadImageTablet from "@/public/spominska_tablica1.avif";
import ipadImageMobile from "@/public/tablica_mobi.avif";
import Link from "next/link";
import "swiper/swiper-bundle.css";

const IpadSlider = ({ data }) => {
  // 16 September 2024
  const [bgColor, setBgColor] = useState(
    "bg-gradient-to-r from-gray-700 to-blue-900"
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // 16 September 2024
  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.realIndex; // Get the current slide index
    setCurrentIndex(swiper.realIndex);
    // Change background color based on the active slide index
    if (currentSlide === 1) {
      setBgColor("bg-gradient-to-r from-[#451808] to-[#45180886]"); // Change to blue for second slide
    } else if (currentSlide === 2) {
      setBgColor("bg-gradient-to-r from-[#240845] to-[#24084586]"); // Change to red for third slide
    } else {
      setBgColor("bg-gradient-to-r from-gray-700 to-blue-900"); // Default for other slides
    }
  };

  const swiper = useSwiper();
  return (
    <section
      className={`w-full ${
        currentIndex === 0
          ? "mobile:h-[920px] tablet:h-[1200px] bg-[#f8fff1]"
          : "mobile:h-[920px] tablet:h-[1200px] bg-[#F1FAF8]"
      } flex justify-center items-center  `}
    >
      <div
        className={`relative flex w-full mobile:w-[679px] tablet:my-auto ${
          currentIndex === 0
            ? "mobile:h-[920px] tablet:h-[1200px]"
            : "mobile:h-[920px] tablet:h-[1200px]"
        } tablet:w-full desktop:max-w-[1920px] desktop:w-full mobile:w-full`}
      >
        <Swiper
          direction="horizontal"
          autoplay={{ delay: 20000 }}
          loop={true}
          modules={[Autoplay]}
          className=" w-full"
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}
          // allowSlideNext ={false}
          // allowSlidePrev ={false}
        >
          {[1, 2]?.map((id, index) => (
            <SwiperSlide key={id} className="flex w-screen">
              <div className="flex justify-center-center mobile:w-full tablet:w-full desktop:w-full ">
                <div
                  className={`flex mobile:flex-col-reverse  tablet:flex-col-reverse desktop:flex justify-center  mx-auto  `}
                >
                  <div className="">
                    <div
                      className="
        tablet:h-auto desktop:h-[868.27px] 
        tablet:w-auto desktop:w-[570px] 
        mobile:w-auto mobile:h-auto
        desktop:pt-[58px] desktop:pb-[90px] 
        desktop:pl-[55.54px] desktop:pr-[43.53px] 
        mobile:mt-[40.17px] tablet:mt-[40px] desktop:mt-[18px] 
        mobile:mx-auto tablet:mx-auto 
        tablet:mb-[74px] mobile:mb-[18.38px]
        
      "
                    >
                      <Image
                        src={ipadImage}
                        alt="Slika"
                        width={1000} // Desired width
                        height={1000} // Desired height
                        className="w-['100%'] h-['100%'] desktop:flex hidden"
                      />

                      <div
                        className={`relative ${
                          currentIndex === 0
                            ? "h-[767px] w-[504px]"
                            : "h-[540] w-[374px]"
                        }  mx-auto tablet:flex hidden`}
                      >
                        <Image
                          src={ipadImageTablet}
                          alt="spominska_tablica1"
                          width={1000} // Desired width
                          height={1000} // Desired height
                          className="w-['100%'] h-['100%'] tablet:flex hidden"
                        />
                      </div>

                      <div
                        className={`relative ${
                          currentIndex === 0
                            ? "h-[498px] w-[297px]"
                            : "h-[420px] w-[250px]"
                        }  mx-auto mobile:flex hidden`}
                      >
                        <Image
                          src={ipadImageMobile}
                          alt="Slika"
                          width={1000} // Desired width
                          height={1000} // Desired height
                          className="w-['100%'] h-['100%'] mobile:flex hidden"
                        />
                      </div>
                    </div>
                    <Link
                      href={index == 0 ? "/memorypromo" : "/keeperpromo"}
                      className="mobile:flex hidden items-center mx-auto mt-[17px] rounded-lg h-[47px] w-[173px] justify-center  shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                    >
                      <div
                        // style={{
                        //   fontSize: "20px",
                        //   lineHeight: "23.44px",
                        //   fontWeight: 400,
                        //   color: "#1E2125",
                        //   textAlign: "center",
                        //   fontVariationSettings: "'opsz' 20",
                        // }}
                        className="text-[#1E2125] text-center font-variation-customOpt16 font-normal text-[16px]"
                      >
                        {index == 0 ? "Več informacij" : "Več o Skrbniku"}
                      </div>
                    </Link>
                  </div>

                  <div
                    className="
        mobile:mt-[35px] tablet:mt-[64px] desktop:mt-[179px] 
        mobile:w-[360px] tablet:w-[480px]  desktop:w-[504px] 
        mobile:mx-auto tablet:mx-auto desktop:ml-3
        flex flex-col mobile:items-center tablet:items-center  
        
        "
                  >
                    <div className="flex desktop:justify-start justify-center items-center w-full tablet:h-[47px] desktop:h-[47px]">
                      <div
                        className="text-[#22281C] flex mobile:flex-col
          mobile:text-[28px] tablet:text-[40px] desktop:text-[40px] 
          mobile:leading-[32.81px] leading-[46.88px] 
          font-variation-customOpt40 text-center mobile:w-full mobile:items-center"
                      >
                        <div className="mobile:flex flex-row justify-center text-center">
                          {index == 0 ? "Osmrtnica" : "Spominska stran"}
                          {index == 1 ? (
                            <span
                              className="text-red-600 
          mobile:text-[28px] tablet:text-[40px] desktop:text-[40px] 
          mobile:leading-[32.81px] leading-[46.88px] 
          font-variation-customOpt40 ml-2 "
                            >
                              {"s skrbnikom"}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    {index == 0 ? (
                      <p className="font-variation-customOpt16 tablet:mb-[39px] mobile:mb-[39px] mt-4  mb-6 text-[#414141] text-[16px] text-center desktop:text-left ">
                        Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno
                        knjigo, izrečemo sožalje in prižgemo virtualno svečko.
                      </p>
                    ) : (
                      <>
                        <p className="font-variation-customOpt16 tablet:mb-[60px]  mobile:mb-[10px] mt-4  mb-[80px] text-[#414141] text-[16px] text-center desktop:text-left ">
                          Nadgradnja osnovne spominske strani - osmrtnice, kjer
                          skrbnik prevzame kontrolo nad objavljeno vsebino;
                          ponavadi je to nekdo, ki je bil preminulemu bližnji.
                          <span className="mobile:hidden">
                            Upravljanje je enostavno; vsak je lahko skrbnik.
                          </span>
                          <br />
                          <br />
                          Ker Skrbnik skrbi za vsebino še preden je objavljena,
                          so tu lahko dodane številne dodatne možnosti za
                          izdelavo prave spominske knjige, na katero se bodo
                          bližnji radi vračali in jo dopolnjevali.
                        </p>
                      </>
                    )}
                    <p
                      className={`${
                        index === 1 ? "mobile:hidden" : "mobile:block"
                      }`}
                      style={{
                        fontSize: "20px",
                        lineHeight: "23.44px",
                        fontWeight: 500,
                        color: "#22281C",
                        fontVariationSettings: "'opsz' 20",
                      }}
                    >
                      {index == 0
                        ? "Vse navedeno je BREZPLAČNO."
                        : "Spomini niso večni"}
                    </p>
                    {index == 1 ? (
                      <div className="font-variation-customOpt16 mt-2 mobile:hidden text-[#414141] text-[16px] text-center desktop:text-left ">
                        Prehitro nam uidejo, čarobni trenutki se pozabijo, slike
                        zbledijo. Povežimo spomine na naše najdražje v celoto in
                        jih ohranimo.
                      </div>
                    ) : null}
                    <Link
                      href={index == 0 ? "/memorypromo" : "/keeperpromo"}
                      className="flex mobile:hidden items-center mt-[62px] tablet:mt-[39px] rounded-lg h-[47px] w-[173px] justify-center  shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
                    >
                      <div className="text-[20px] tablet:text-[16px] leading-[23.44px] font-normal text-[#1E2125] text-center font-variation-customOpt20 tablet:font-variation-customOpt16">
                        {index == 0 ? "Več informacij" : "Več o Skrbniku"}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute z-40 top-[45%] left-[120px] mobile:left-[60px] transform -translate-y-1/2 text-white p-2 mobile:w-[24px] mobile:h-[24px] w-[45px] h-[45px]"
          onClick={() => swiperInstance && swiperInstance.slidePrev()}
        >
          <Image
            src={"/prev_img_icon.png"}
            alt="Slika"
            width={1000}
            height={1000}
            className="flex w-[45px] h-[45px] mobile:w-[24px] mobile:h-[24px]"
          />
        </button>
        <button
          className="absolute z-40 top-[45%] right-[120px] mobile:right-[60px] transform -translate-y-1/2 text-white p-2 mobile:w-[24px] mobile:h-[24px] w-[40px] h-[40px]"
          onClick={() => {
            swiperInstance && swiperInstance.slideNext();
          }}
        >
          <Image
            src={"/next_img_icon.png"}
            alt="Slika"
            width={1000}
            height={1000}
            className="flex w-[45px] h-[45px] mobile:w-[24px] mobile:h-[24px]"
          />
        </button>
      </div>
      {/* <div className="absolute flex z-10 bg-red-600 h-10 mobile:w-[360px] tablet:w-[680px] desktop:w-[1200px] justify-between px-4">
        <div
          onClick={() => {
            swiper.slideNext();
          }}
          className="h-10 w-10 bg-yellow-400"
        ></div>
        <div
          onClick={() => {
            // alert('clicke')
            swiper.slideNext();
            
          }}
          className="h-10 w-10 bg-green-400"
        ></div>
      </div> */}
      <style jsx global>{`
        .custom-pagination {
          position: absolute;
          z-index: 50;
          transform: translateY(-50%);
          gap: 5px;
          left: 40px;
        }
        .customx-pagination {
          position: absolute;
          z-index: 50;
          right: 5px;
          gap: 5px;
        }
        .custom-bullet {
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #c3c6c8 0%, #e3e5e5 100%);
          border-radius: 50%;
          opacity: 0.5;
          cursor: pointer;
        }
        .custom-bullet-active {
          background: linear-gradient(135deg, #d9d9d9 0%, #ffffff 100%);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.08);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default IpadSlider;
