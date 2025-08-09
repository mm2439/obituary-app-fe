"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import API_BASE_URL from "@/config/apiConfig";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ images }) {
  const [dotStartIndex, setDotStartIndex] = React.useState(0);
  const visibleDots = 6; // Number of dots to show at once
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // how many images visible at once
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => {
      // Change the visible dots window
      if (newIndex >= dotStartIndex + visibleDots) {
        setDotStartIndex(newIndex - visibleDots + 1);
      } else if (newIndex < dotStartIndex) {
        setDotStartIndex(newIndex);
      }
    },
    appendDots: (dots) => {
      const totalDots = React.Children.count(dots);
      const visible = dots.slice(dotStartIndex, dotStartIndex + visibleDots);

      return (
        <div style={{ bottom: "10px" }}>
          <ul className="slick-dots">{visible}</ul>
        </div>
      );
    },
    customPaging: (i) => (
      <button type="button">
        {/* Empty button so slick styles it with ::before */}
      </button>
    ),
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-[45%] right-3 -translate-y-1/2 z-10 cursor-pointer"
        style={{ userSelect: "none" }}
      >
        <Image
          src="/right_gray_icon.png"
          alt="Slika"
          width={16}
          height={20}
          className="cursor-pointer"
        />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-[45%] left-3 -translate-y-1/2 z-10 cursor-pointer"
        style={{ userSelect: "none" }}
      >
        <Image
          src="/left_gray_icon.png"
          alt="Slika"
          width={16}
          height={20}
          className="cursor-pointer"
        />
      </div>
    );
  }

  return (
    <div className="w-[440px] h-[300px] relative desktop:mx-auto">
      <Slider {...settings}>
        {images.map((cemetery, index) => (
          <div
            key={index}
            className="relative h-[320px] rounded-lg overflow-hidden"
          >
            <img
              src={
                cemetery.image.includes("cemetryUploads")
                  ? `${API_BASE_URL}/${cemetery.image}`
                  : cemetery.image
              }
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black/40 backdrop-blur-md text-white text-sm">
              {cemetery.name} v {cemetery.address}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
