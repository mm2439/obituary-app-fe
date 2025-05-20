"use client";
import SlideOne from "../../components/slidercomponents/SlideOne";
import SlideTwo from "../../components/slidercomponents/slideTwo";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const IpadSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <section
      className={`w-full flex justify-center items-center`}>
      <div className="relative flex w-full mobile:w-[679px] tablet:my-auto tablet:w-full desktop:max-w-[1920px] desktop:w-full mobile:w-full">
        <Swiper
          direction="horizontal"
          autoplay={{ delay: 20000 }}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
          onSlideChange={handleSlideChange}
          onSwiper={setSwiperInstance}
        >
          <SwiperSlide>
            <SlideTwo currentIndex={currentIndex} />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne currentIndex={currentIndex} />
          </SwiperSlide>
        </Swiper>

        {/* Left Arrow */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 z-20 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => swiperInstance?.slideNext()}
          aria-label="Next Slide"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 z-20 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default IpadSlider;
