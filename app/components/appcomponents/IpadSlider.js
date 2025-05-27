"use client";
import SlideOne from "../../components/slidercomponents/SlideOne";
import SlideTwo from "../../components/slidercomponents/SlideTwo";
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
    <section className="w-auto h-auto overflow-hidden">
      <div className="relative w-screen">
        <Swiper
          direction="horizontal"
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
          onSlideChange={handleSlideChange}
          onSwiper={setSwiperInstance}>

          <SwiperSlide>
            <SlideTwo currentIndex={currentIndex} />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne currentIndex={currentIndex} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default IpadSlider;
