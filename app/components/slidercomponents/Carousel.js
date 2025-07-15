'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";

const PrevArrow = ({ onClick }) => (
  <img
    src="/arrow-prev.png"
    alt="Previous"
    onClick={onClick}
    className="absolute left-[-55px] desktop:left-[-80px]  tablet:left-[-80px]  top-1/2 z-10 w-9  tablet:w-[74px]  desktop:w-[74px] h-9 tablet:h-[74px] desktop:h-[74px] cursor-pointer transform -translate-y-1/2 hover:scale-110 transition-all"
  />
);

const NextArrow = ({ onClick }) => (
  <img
    src="/arrow-next.png"
    alt="Next"
    onClick={onClick}
    className="absolute right-[-55px] desktop:right-[-70px]  tablet:right-[-70px]  top-1/2 z-10  w-9  tablet:w-[74px] desktop:w-[74px] h-9 tablet:h-[74px]  desktop:h-[74px] cursor-pointer transform -translate-y-1/2 hover:scale-110 transition-all"
  />
);

const initialCalendarData = [
  { day: "Ned", date: 20, month: "APR" },
  { day: "Pon", date: 21, month: "APR" },
  { day: "Tor", date: 22, month: "APR" },
  { day: "Sre", date: 23, month: "APR" },
  { day: "Čet", date: 24, month: "APR" },
  { day: "Pet", date: 25, month: "APR" },
  { day: "Sob", date: 26, month: "APR" },
  { day: "Ned", date: 27, month: "APR" },
  { day: "Pon", date: 28, month: "APR" },
];


const scheduleMap = {
  0: [
    { time: "9:00", name: "John Wayne", city: "Berlin" },
    { time: "10:00", name: "Lily Ivanova", city: "Sofia" },
    { time: "11:15", name: "Ahmed Rami", city: "Cairo" },
  ],
  1: [
    { time: "11:30", name: "Johanna Wayne", city: "Oslo" },
    { time: "13:00", name: "Ivan Petrov", city: "Moscow" },
    { time: "14:45", name: "Maria Lopez", city: "Madrid" },
  ],
  2: [
    { time: "15:30", name: "Jean Paul Belmondo", city: "Paris" },
    { time: "17:00", name: "Amélie Poulain", city: "Lyon" },
    { time: "18:10", name: "Luc Dubois", city: "Nice" },
    { time: "19:00", name: "Sophie Marceau", city: "Toulouse" },
  ],
  3: [
    { time: "16:00", name: "Paula Schmidt", city: "Barcelona" },
    { time: "18:30", name: "Carlos Martinez", city: "Madrid" },
    { time: "20:00", name: "Isabella Cruz", city: "Valencia" },
  ],
  4: [
    { time: "10:30", name: "Greta Keller", city: "Vienna" },
    { time: "12:00", name: "Hans Zimmer", city: "Hamburg" },
    { time: "13:30", name: "Erika Mustermann", city: "Munich" },
    { time: "15:00", name: "Max Müller", city: "Berlin" },
  ],
  5: [
    { time: "09:45", name: "Antonio Banderas", city: "Seville" },
    { time: "11:00", name: "Pedro Sanchez", city: "Toledo" },
  ],
  6: [
    { time: "14:00", name: "Sven Svensson", city: "Stockholm" },
    { time: "15:15", name: "Erik Karlsson", city: "Uppsala" },
    { time: "16:30", name: "Anna Lind", city: "Gothenburg" },
  ],
  7: [
    { time: "08:30", name: "Fatima Zahra", city: "Casablanca" },
    { time: "10:00", name: "Mohammed Ali", city: "Rabat" },
    { time: "11:30", name: "Youssef Benali", city: "Fes" },
  ],
  8: [
    { time: "17:00", name: "George Michael", city: "London" },
    { time: "18:00", name: "Adele Adkins", city: "Manchester" },
    { time: "19:00", name: "Ed Sheeran", city: "Ipswich" },
    { time: "20:00", name: "Emma Watson", city: "Oxford" },
  ]
};


const Carousel = () => {
  const todayIndex = 5
  const breakpoint = useBreakpoint()
  
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    initialSlide: breakpoint === "mobile" ? todayIndex : (todayIndex > 0 ? todayIndex - 1 : 0), 
    
  };

  const sliderRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(todayIndex);


  return (
    <div className="flex items-center justify-center flex-col bg-transparent">
      <div className="slider-container gap-5 w-[240px]  tablet:w-[500px] desktop:w-[610px] py-12  hidden tablet:block desktop:block">
        <Slider ref={sliderRef} {...settings}>


          {initialCalendarData.map((item, i) => {
            const isToday = i === activeIndex;
            return (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{ width: isToday ? 160 : 115 }} // Dynamic width for animation
            className={`transition-[width] duration-300 ease-in-out transform ${
              isToday ? 'scale-100 opacity-100' : 'scale-90 opacity-90'
            } cursor-pointer `}
          >
            {(() => {
              const isActive = isToday;

              const containerClass = isActive
                ? "relative h-[210px] w-[140px] right-0 transform transition-transform duration-600 ease-in-out scale-100 mb-5"
                : "relative h-[140px] w-[103px] top-[37px] transform transition-transform duration-600 ease-in-out scale-95";

              const topImageSrc = isActive ? "/active-date-top.png" : "/date-top.png";
              const bottomImageProps = isActive
                ? { src: "/active-date-bottom.png", className: "scale-[1.4] bottom-[-13px] relative" }
                : { src: "/date-bottom.png", className: "relative top-[-6px] left-0]" };

              const monthClass = isActive
                ? "absolute w-[138px] justify-center z-10 top-4 flex items-center"
                : null;

              const monthTextClass = isActive
                ? "font-[900] text-white"
                : null;

              const dateClass = isActive
                ? "absolute w-[138px] justify-center z-10 top-1/3 flex items-center"
                : "absolute w-[90px] justify-center z-10 top-1/3 flex items-center";

              const dateTextClass = isActive
                ? "font-semibold text-[#3C3E41] text-[48px]"
                : "font-normal text-[#3C3E41] text-[32px]";

              const dayClass = isActive
                ? "absolute w-[138px] justify-center z-10 bottom-[33px] flex items-center"
                : "absolute w-[90px] justify-center z-10 bottom-[18px] flex items-center";

              const dayTextClass = isActive
                ? "font-light text-[#808080] text-[24px]"
                : "font-light text-[#808080] text-[16px]";

              return (
                <div className={containerClass}>
                  <img src={topImageSrc} alt="date-top" />
                  <img src={bottomImageProps.src} alt="date-bottom" className={bottomImageProps.className} />
                  {isActive && (
                    <div className={monthClass}>
                      <h1 className={monthTextClass}>{item.month}</h1>
                    </div>
                  )}
                  <div className={dateClass}>
                    <h1 className={dateTextClass}>{item.date}</h1>
                  </div>
                  <div className={dayClass}>
                    <p className={dayTextClass}>{item.day}</p>
                  </div>
                </div>
              );
            })()}
          </div>
            );
          })}

        </Slider>
      </div>

      <div className="slider-container gap-5 w-[210px]   py-12  block tablet:hidden desktop:hidden">
        <Slider ref={sliderRef} {...settings}>
         {initialCalendarData.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{ width: isActive ? 90 : 65 }}
              >
                {isActive ? (
                  <div className="relative h-[104px] w-[76px] right-0 mb-6  ">
                    <img src="/active-date-top.png" alt="active-top" />
                    <img
                      src="/active-date-bottom.png"
                      alt="active-bottom"
                      className="scale-[1.4] bottom-[-7px] relative"
                    />
                    <div className="absolute w-[76px] justify-center z-10 top-2 flex items-center">
                      <h1 className="font-[700] text-[15px] text-white">{item.month}</h1>
                    </div>
                    <div className="absolute w-[76px] justify-center z-10 top-1/3 flex items-center">
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
                      <div className="absolute w-[52px] justify-center z-10 bottom-[6px] flex items-center">
                        <p className="font-light text-[#808080] text-[14px] leading-6 ">
                          {item.day}
                        </p>
                      </div>
                    </div>

                )}
              </div>
            );
            })}

        </Slider>
      </div>

      <div className="flex-col hidden tablet:flex desktop:flex">
        {(scheduleMap[activeIndex] || []).map((item, index) => (
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
        {(scheduleMap[activeIndex] || []).map((item, index) => (
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
