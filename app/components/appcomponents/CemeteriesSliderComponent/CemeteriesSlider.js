"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import API_BASE_URL from "@/config/apiConfig";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ images }) {
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
  };

  console.log(images, "Images for carousel");
  return (
    <div className="w-[440px] h-[300px] relative mx-auto">
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
