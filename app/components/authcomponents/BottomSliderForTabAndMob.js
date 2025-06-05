import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState } from "react";

const BottomSliderForTabAndMob = ({ data }) => {
  const [bgColor, setBgColor] = useState(
    "bg-gradient-to-r from-gray-700 to-blue-900"
  );
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section className="w-full desktop:pl-[54.51px]   flex flex-row justify-center">
      <div className="flex h-[100px] desktop:h-[71px] w-[596px] ">
        <Swiper
          direction="horizontal"
          pagination={{
            type: "bullets",
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          autoplay={{ delay: 15000 }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="h-[100px] w-full"
          onSlideChange={handleSlideChange}
        >
          {/* {data.map(({ id }) => (
            <SwiperSlide
              key={id}
              className="flex items-end justify-center pr-[-1px] ">
              <div className="bg-gradient-to-r from-gray-700 to-blue-900 text-white 
              h-[71px] w-[600px] rounded-b-lg flex flex-row  items-center justify-between pl-[24.2px] mobile:pr-[10.16px] tablet:pr-[24.16px] desktop:pr-[17.16px] ">
                <div className="">
                  <h2 className="font-variation-customOpt16wght700 font-bold  text-[16px] tracking-[0.3px]">Imate cvetličarno?</h2>
                  <p className="font-variation-customOpt12 text-[12px] font-normal">
                    Otvoritvena akcija BREZ RIZIKA pravkar poteka. Sodelujmo!
                  </p>
                </div>
                <div className="flex w-[140.17px] h-[34px] items-center justify-center rounded-lg bg-blue-100 transition-colors hover:bg-blue-200">
                  <h className="text-[14px] self-center  text-blue-800 line-clamp-1">
                    Več informacij
                  </h>
                </div>
              </div>
            </SwiperSlide>
          ))} */}
          {data.map((id, index) => (
            <SwiperSlide
              key={index}
              className="flex items-end justify-center pr-[-1px] "
            >
              <div
                className={`${bgColor} text-white 
              h-[71px] w-[600px] rounded-b-lg flex flex-row  items-center justify-between pl-[24.2px] mobile:pr-[10.16px] tablet:pr-[24.16px] desktop:pr-[17.16px]`}
              >
                <div className="">
                  <div className="font-variation-customOpt16wght700 font-bold  text-[16px] tracking-[0.3px]">
                    {currentIndex === 0
                      ? "Imate cvetličarno?"
                      : currentIndex === 1
                      ? "Brezplačni skrbnik"
                      : "Brezplačne MOBI predloge"}
                  </div>
                  <p className="font-variation-customOpt12 text-[12px] font-normal">
                    {currentIndex === 0
                      ? "Otvoritvena akcija BREZ RIZIKA pravkar poteka. Sodelujmo!"
                      : currentIndex === 1
                      ? "Podarjajo vam ga cvetličarne in pogrebna podjetja. Povprašajte jih!"
                      : "Podarjajo vam jih cvetličarne. Enako tudi Posvetilo, Zadnji klic."}
                  </p>
                </div>
                <div className="flex w-[140.17px] h-[34px] items-center justify-center rounded-lg bg-[#CAF0F8] transition-colors hover:bg-blue-200">
                  <div className="text-[14px] self-center  text-[#1E2125] line-clamp-1">
                    Več informacij
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="custom-pagination flex flex-row items-end mb-[-15px] tablet:ml-[507px]  "></div>
        </Swiper>
      </div>

      <style jsx global>{`
        .custom-pagination {
          position: absolute;
          z-index: 50;
          transform: translateY(-50%);
          gap: 8px;
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

export default BottomSliderForTabAndMob;
