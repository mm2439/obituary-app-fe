'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => (
  <img
    src="/arrow-prev.png"
    alt="Previous"
    onClick={onClick}
    className="absolute left-[-48px] desktop:left-[-80px]  tablet:left-[-80px]  top-1/2 z-10 w-9  tablet:w-[74px]  desktop:w-[74px] h-9 tablet:h-[74px] desktop:h-[74px] cursor-pointer transform -translate-y-1/2 hover:scale-110 transition-all"
  />
);

const NextArrow = ({ onClick }) => (
  <img
    src="/arrow-next.png"
    alt="Next"
    onClick={onClick}
    className="absolute right-[-48px] desktop:right-[-70px]  tablet:right-[-70px]  top-1/2 z-10  w-9  tablet:w-[74px] desktop:w-[74px] h-9 tablet:h-[74px]  desktop:h-[74px] cursor-pointer transform -translate-y-1/2 hover:scale-110 transition-all"
  />
);

const calendarData = [
  { day: "Ned", date: 20, month: "APR", isToday: false },
  { day: "Pon", date: 21, month: "APR", isToday: true },
  { day: "Tor", date: 22, month: "APR", isToday: false },
  { day: "Sre", date: 23, month: "APR", isToday: false },
  { day: "Čet", date: 24, month: "APR", isToday: false },
  { day: "Pet", date: 25, month: "APR", isToday: false },
  { day: "Sob", date: 26, month: "APR", isToday: false },
  { day: "Ned", date: 27, month: "APR", isToday: false },
  { day: "Pon", date: 28, month: "APR", isToday: false },
];

const scheduleData = [
  { time: "9:00", name: "John Wayne", city: "Berlin" },
  { time: "11:30", name: "Johanna Wayne", city: "Oslo" },
  { time: "15:30", name: "Jean Paul Belmondo", city: "Manchester" },
  { time: "16:00", name: "Paula Schmidt", city: "Barcelona" },
];

const Carousel = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
 
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="slider-container gap-5 w-[240px] tablet:w-[500px] desktop:w-[610px] py-12 bg-[#f9fafb] hidden tablet:block desktop:block">
        <Slider {...settings}>
          {calendarData.map((item, i) => (
            <div key={i} style={{ width: item.isToday ? 160 :115 ,  }}   >
              {item.isToday ? (
                <div className="relative h-[210px] w-[140px]  right-0">
                  <img src="/active-date-top.png" alt="active-top" />
                  <img
                    src="/active-date-bottom.png"
                    alt="active-bottom"
                    className="scale-[1.4] bottom-[-13px] relative"
                  />
                  <div className="absolute w-[138px] justify-center z-10 top-4 flex items-center">
                    <h1 className="font-[900] text-white">{item.month}</h1>
                  </div>
                  <div className="absolute w-[138px] justify-center z-10 top-1/3 flex items-center">
                    <h1 className="font-semibold text-[#3C3E41] text-[48px]">
                      {item.date}
                    </h1>
                  </div>
                  <div className="absolute w-[138px] justify-center z-10 bottom-[33px] flex items-center">
                    <p className="font-light text-[#808080] text-[24px]">
                      {item.day}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative h-[140px]  w-[103px] top-[37px]">
                  <img src="/date-top.png" alt="date-top" />
                  <img
                    src="/date-bottom.png"
                    alt="date-bottom"
                    className="relative top-[-6px] left-0]"
                  />
                  <div className="absolute w-[90px] justify-center z-10 top-1/3 flex items-center">
                    <h1 className="font-normal text-[#3C3E41] text-[32px]">
                      {item.date}
                    </h1>
                  </div>
                  <div className="absolute w-[90px] justify-center z-10 bottom-[18px] flex items-center">
                    <p className="font-light text-[#808080] text-[16px]">
                      {item.day}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
          ))}
        </Slider>
      </div>


      <div className="slider-container gap-5 w-[210px]  py-12 bg-[#f9fafb] block tablet:hidden desktop:hidden">
        <Slider {...settings}>
           {calendarData.map((item, i) => (
            <div key={i} style={{ width: item.isToday ? 90 :65 }}  >
              {item.isToday ? (
                <div className="relative h-[104px] w-[76px]  right-0 mb-3">
                  <img src="/active-date-top.png" alt="active-top" />
                  <img
                    src="/active-date-bottom.png"
                    alt="active-bottom"
                    className="scale-[1.4] bottom-[-7px] relative"
                  />
                  <div className="absolute w-[76px] justify-center z-10 top-2 flex items-center">
                    <h1 className="font-[700] text-[15px] text-white">{item.month}</h1>
                  </div>
                  <div className="absolute  w-[76px] justify-center z-10 top-1/3 flex items-center">
                    <h1 className="font-semibold text-[#3C3E41] text-[28px]">
                      {item.date}
                    </h1>
                  </div>
                  <div className="absolute w-[76px] justify-center z-10 bottom-[5px] flex items-center">
                    <p className="font-light text-[#808080] text-[18px] leading-6">
                      {item.day}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative h-[52] w-[52px] top-[17px] `  ">
                  <img src="/date-top.png" alt="date-top" />
                  <img
                    src="/date-bottom.png"
                    alt="date-bottom"
                    className="relative top-[-4px] left-0 h-[52px] w-[52px]"
                  />
                  <div className="absolute w-[52px] justify-center z-10 top-1/3 flex items-center">
                    <h1 className="font-normal text-[#3C3E41] text-[16px]">
                      {item.date}
                    </h1>
                  </div>
                  <div className="absolute w-[52px] justify-center z-10 bottom-[8px] flex items-center">
                    <p className="font-light text-[#808080] text-[14px] leading-6 ">
                      {item.day}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
          ))}
        </Slider>
      </div>

      <div className="flex-col hidden tablet:flex desktop:flex">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center border-t border-b border-[#D4D4D4] tablet:w-[691px] desktop:w-[900px] h-[64px]"
          >
            <h1 className="text-[#0A85C2] font-normal text-2xl tablet:w-[75px] desktop:w-[97px] text-center">
              {item.time}
            </h1>

            <h3 className="text-[#3C3E41] font-semibold text-[18px] tablet:w-[323px] desktop:w-[375px] pl-[22px]">
              {item.name}
            </h3>

            <h4 className="text-[#3C3E41] font-normal text-[16px] tablet:w-[262px] desktop:w-[389px] pl-[9px]">
              {item.city}
            </h4>

            <button>
              <img src="/arrow-next.png" className="w-6 h-6 hidden desktop:block" />
              <img src="/icon_right.png" className="w-2 h-3 tablet:block desktop:hidden object-contain" />

            </button>
          </div>
        ))}
      </div>

      <div className="flex tablet:hidden desktop:hidden flex-col">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center w-[336px] h-[64px]"
          >
            <div className="flex justify-end items-start  w-[70px] h-[48px]  mr-5">
              <h1 className="text-[#0A85C2] font-normal text-2xl  ">
                {item.time}
              </h1>
            </div>
            

            <div className="flex flex-col items-start">
              <h3 className="text-[#3C3E41] font-medium text-[18px]">
                {item.name}
              </h3>

              <h4 className="text-[#6D778E] font-light text-[14px] ">
                {item.city}
              </h4>
            </div>

          </div>
        ))}
      </div>

      <div className="w-[317px] tablet:w-[680px] desktop:w-[915px] mt-[72px] tablet:mt-20 desktop:mt-20">
        <p className="text-[#3C3E41] hidden tablet:block desktop:block">
          Če pogreb še ni vnešen, je pa termin že znan, 
          zaprosite svojo cvetličarno (ali pogrebno podjetje), da ga vnese. 
        </p>

        <p className="text-[#3C3E41] tablet:hidden desktop:hidden">
          Če pogreb še ni vnešen, je pa termin že znan,
          zaprosite svojo cvetličarno (ali pogrebno p.), da ga vnese. 
        </p>
      </div>
    </div>
  );
};

export default Carousel;
