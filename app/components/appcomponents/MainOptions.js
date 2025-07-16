"use client";

import Image from "next/image";
import { useState } from "react";

export default function MainOptions() {
  const [selectedIndex, setSelectedIndex] = useState(13);
  const data = [
    {
      hasId: true,
      id: "1",
      title: "klik do lokalnih informacij",
      roughTitle: false,
      image: "/landing_features/1.png",
      isRedIcon: false,
    },
    {
      hasId: false,
      id: "2",
      title: "Digitalna vabila, zahvale",
      roughTitle: false,
      image: "/landing_features/2.png",
      isRedIcon: true,
    },
    {
      hasId: false,
      id: "3",
      title: "Sožalja",
      roughTitle: false,
      image: "/landing_features/3.png",
      isRedIcon: true,
    },
    {
      hasId: false,
      id: "4",
      title: "Kmalu",
      roughTitle: true,
      image: "none",
      isRedIcon: false,
    },
    {
      hasId: false,
      id: "5",
      title: "Kmalu",
      roughTitle: true,
      image: "none",
      isRedIcon: false,
    },
    {
      hasId: false,
      id: "6",
      title: "Zasebna stran - samo za najbližje",
      roughTitle: false,
      image: "/landing_features/4.png",
      isRedIcon: false,
    },
    {
      hasId: false,
      id: "7",
      title: "Obveščanje pred obletnicami",
      roughTitle: false,
      image: "/landing_features/5.png",
      isRedIcon: false,
    },
    {
      hasId: false,
      id: "8",
      title: "Pregled lokalnih cvetličarn",
      roughTitle: false,
      image: "/landing_features/6.png",
      isRedIcon: false,
    },
    {
      hasId: false,
      id: "9",
      title: "Kmalu",
      roughTitle: true,
      image: "/landing_features/9.png",
      isRedIcon: false,
    },
    {
      hasId: false,
      id: "10",
      title: "Virtualna svečka",
      roughTitle: false,
      image: "/landing_features/7.png",
      isRedIcon: false,
    },
    {
      hasId: false,
      id: "11",
      title: "Status Skrbnika za cel mesec",
      roughTitle: false,
      image: "/landing_features/8.png",
      isRedIcon: true,
    },
    {
      hasId: false,
      id: "12",
      title: "Odločanje o tem, kaj bo objavljeno",
      roughTitle: false,
      image: "/landing_features/9.png",
      isRedIcon: false,
    },
  ];
  return (
    <div className="w-full bg-[#f1f6fd] flex justify-center">
      <div
        className="
        desktop:w-[1280px] desktop:pl-[57px] desktop:pr-[55px]
        tablet:w-[680px]
        mobile:pb-[63px] pb-[83px] mobile:mb-[62.76px] mobile:w-[310px] "
      >
        <h1 className="text-[#1E2125] text-[28px] tablet:text-[32px] desktop:text-[40px] font-regular text-center mb-3 tablet:mb-7 desktop:mb-7">
          Ponekod vam podarijo virtualno svečko
        </h1>
        <p className="text-[#3C3E41] text-center text-[16px] tablet:text-2xl desktop:text-2xl font-light mb-10 tablet:mb-[68px] desktop:mb-[86px]">Pri nas dobite več</p>
        
        <div className="flex gap-[130px] mobile:flex-col tablet:gap-[80px] mobile:gap-[40px] justify-center items-center">
          <div
            className={`flex flex-col gap-[15px] w-[310px] ${
              selectedIndex === 13 ? "mobile:hidden" : ""
            }`}
          >
            {data.map((item, index) => (
              <div
                className={`flex ${
                  selectedIndex === index ? "mobile:flex" : "mobile:hidden"
                } gap-4 py-[10px] rounded-[10px] h-[45px] w-[310px] pl-[18px] pr-[3px] shadow-lg cursor-pointer`}
                key={item.id}
                style={{
                  background:
                    index === selectedIndex
                      ? "linear-gradient(to bottom, #0D94E8, #1860A3)"
                      : "#e4e8ef",
                  backgroundClip: "padding-box",
                  borderImageSlice: 1,
                  borderImageSource:
                    index === selectedIndex
                      ? "linear-gradient(91.95deg, rgba(255, 255, 255, 0.4) -4.26%, rgba(255, 255, 255, 0) 107.52%)"
                      : "linear-gradient(91.95deg, rgba(255, 255, 255, 0.4) -4.26%, rgba(255, 255, 255, 0) 107.52%)",
                  boxShadow:
                    "5px 5px 10px 0px #A6ABBD, -5px -5px 10px 0px #FAFBFF",
                }}
                onClick={() => {
                  if (item.roughTitle) return;
                  setSelectedIndex(index);
                }}
              >
                <h2
                  className={`${
                    item.roughTitle
                      ? "text-[#C7C7C7]"
                      : index === selectedIndex
                      ? "text-[#FFFFFF]"
                      : "text-[#3C3E41]"
                  } text-[16px] font-light w-full`}
                >
                  {item.hasId && (
                    <span className="text-[#EB1D1D] text-[16px] font-normal">
                      {item.id}
                    </span>
                  )}{" "}
                  {item.title}
                </h2>
                <Image
                  src={
                    item.isRedIcon
                      ? "/landing_features/landing_right_red.png"
                      : index === selectedIndex
                      ? "/landing_features/landing_right_light.png"
                      : "/landing_features/landing_right_dark.png"
                  }
                  alt={item.title}
                  width={27}
                  height={27}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col mobile:flex-col-reverse justify-center items-center gap-[60px] w-[310px]">
            {selectedIndex === 13 ? (
              <Image
                src="/landing_features/10.png"
                alt="landing_right_light"
                width={210}
                height={420}
              />
            ) : (
              data[selectedIndex] &&
              data[selectedIndex].image !== "none" && (
                <Image
                  src={data[selectedIndex].image}
                  alt={data[selectedIndex].title}
                  width={210}
                  height={420}
                />
              )
            )}
            <div
              className={`flex flex-col gap-[26px] ${
                selectedIndex !== 13 && "mobile:hidden"
              }`}
            >
              <div
                className="flex gap-4 py-[10px] rounded-[10px] h-[45px] w-[310px] pl-[18px] pr-[3px] shadow-lg cursor-pointer"
                style={{
                  background:
                    13 === selectedIndex
                      ? "linear-gradient(to bottom, #0D94E8, #1860A3)"
                      : "#e4e8ef",
                  backgroundClip: "padding-box",
                  borderImageSlice: 1,
                  borderImageSource:
                    13 === selectedIndex
                      ? "linear-gradient(91.95deg, rgba(255, 255, 255, 0.4) -4.26%, rgba(255, 255, 255, 0) 107.52%)"
                      : "linear-gradient(91.95deg, rgba(255, 255, 255, 0.4) -4.26%, rgba(255, 255, 255, 0) 107.52%)",
                  boxShadow:
                    "5px 5px 10px 0px #A6ABBD, -5px -5px 10px 0px #FAFBFF",
                  fontVariationSettings:
                    "GRAD: 0, XOPQ: 96, XTRA: 468, YOPQ: 79, YTAS: 750, YTDE: -203, YTFI: 738, YTLC: 514, YTUC: 712, Slant: 0, Width: 100",
                }}
                onClick={() => {
                  setSelectedIndex(13);
                }}
              >
                <h2
                  className={`${
                    selectedIndex === 13 ? "text-[#FFFFFF]" : "text-[#1860A3]"
                  } text-[16px] font-light w-full text-center`}
                >
                  in 10+ možnosti na Spominski
                </h2>
                {selectedIndex === 13 && (
                  <Image
                    src={"/landing_features/landing_right_light.png"}
                    width={27}
                    height={27}
                  />
                )}
              </div>
              <div className="flex gap-[7px] items-center text-[14px] font-light text-[#1860A3] mobile:hidden">
                <Image
                  src="/landing_features/landing_right_red.png"
                  width={24}
                  height={24}
                />
                podarjajo cvetličarne in pogrebna podjetja
              </div>
            </div>
          </div>
          <div className="gap-[8px] hidden mobile:flex">
            {data.map((item, index) => {
              return (
                <div
                  className={`w-[16px] h-[16px] rounded-[10px] cursor-pointer ${
                    item.roughTitle ? "mobile:hidden" : ""
                  }`}
                  style={{
                    background:
                      selectedIndex === index
                        ? "linear-gradient(113.63deg, #E3E8EC 0%, #0A85C2 100%)"
                        : "linear-gradient(113.63deg, #C3C6C8 0%, #E3E5E5 100%)",
                  }}
                  key={item.id}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                ></div>
              );
            })}

            <div
                  className={`w-[16px] h-[16px] rounded-[10px] cursor-pointer hidden mobile:block`}
                  style={{
                    background:
                      selectedIndex === 13
                        ? "linear-gradient(113.63deg, #E3E8EC 0%, #0A85C2 100%)"
                        : "linear-gradient(113.63deg, #C3C6C8 0%, #E3E5E5 100%)",
                  }}
                  onClick={() => {
                    setSelectedIndex(13);
                  }}
                ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
