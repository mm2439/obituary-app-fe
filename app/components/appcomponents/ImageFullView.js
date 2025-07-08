"use client";
import React, { useState } from "react";
import { Modal, ModalContent } from "@nextui-org/react";
import cancle_icon from "@/public/cancle_icon.png";
import imgUp from "@/public/ico_up.png";
import Image from "next/image";
import Modals from "./Modals";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import API_BASE_URL from "@/config/apiConfig";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function ImageFullView({
  showImageView,
  imageId,
  setShowImageView,
  data,
}) {
  const [scrollBehavior, setScrollBehavior] = useState("outside");
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <Modal
      isOpen={showImageView}
      onOpenChange={() => {}}
      scrollBehavior={scrollBehavior}
      className={
        "flex flex-1 max-h-screen items-center justify-center  py-10 bg-[#00000070]"
      }
    >
      <ModalContent className="flex items-center justify-center w-full  ">
        <div className="w-[98%] items-center  justify-center   ">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={5}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
            }}
            initialSlide={imageId - 1}
          >
            {data?.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center h-screen  "
              >
                <div className="flex justify-center h-screen items-center self-center ">
                  <Image
                    src={`${API_BASE_URL}/${item.fileUrl}`}
                    alt="sponser4 of the image"
                    width={210}
                    height={72}
                    className="w-[500px] mobile:w-full aspect-auto self-center z-10 "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="absolute z-50 top-[45%] left-0 transform -translate-y-1/2 bg-black text-white p-2 w-[30px] h-[65px] rounded-lg mx-3"
            onClick={() => swiperInstance && swiperInstance.slidePrev()}
          >
            ‹
          </button>
          <button
            className="absolute z-50 top-[45%] right-0 transform -translate-y-1/2 bg-black text-white p-2 w-[30px] h-[65px] rounded-lg mx-3"
            onClick={() => {
              swiperInstance && swiperInstance.slideNext();
            }}
          >
            ›
          </button>
          <button
            className="absolute z-50 top-[3%] right-3 text-5xl text-black p-1 "
            onClick={() => {
              setShowImageView(false);
            }}
          >
            &times;
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
}
