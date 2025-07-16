"use client";
import SlideOne from "../../components/slidercomponents/SlideOne";
import SlideTwo from "../../components/slidercomponents/SlideTwo";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const IpadSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    slideChanged(slider) {
      setCurrentIndex(slider.track.details.rel);
    },
    created(slider) {
      setCurrentIndex(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 122000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="w-auto mobile:h-[1010px] h-auto  overflow-hidden border-y border-solid" style={{ borderColor: '#36556C33' }}>
      <div className="relative w-screen">
        <div ref={sliderRef} className="keen-slider w-full">
          <div className="keen-slider__slide w-full">
            <SlideTwo currentIndex={currentIndex} />
          </div>
          <div className="keen-slider__slide w-full">
            <SlideOne currentIndex={currentIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IpadSlider;
