'use client';

import React, { useEffect } from 'react';
import { useBreakpoint } from '@/app/hooks/useBreakpoint';

const initialCalendarData = [
  { day: 'Ned', date: 20, month: 'APR', fullDate: '20.04.2025' },
  { day: 'Pon', date: 21, month: 'APR', fullDate: '21.04.2025' },
  { day: 'Tor', date: 22, month: 'APR', fullDate: '22.04.2025' },
  { day: 'Sre', date: 23, month: 'APR', fullDate: '23.04.2025' },
  { day: 'Čet', date: 24, month: 'APR', fullDate: '24.04.2025' },
  { day: 'Pet', date: 25, month: 'APR', fullDate: '25.04.2025' },
  { day: 'Sob', date: 26, month: 'APR', fullDate: '26.04.2025' },
  { day: 'Ned', date: 27, month: 'APR', fullDate: '27.04.2025' },
  { day: 'Pon', date: 28, month: 'APR', fullDate: '28.04.2025' },
];

const scheduleMap = {
  0: [
    { time: '9:00', name: 'John Wayne', city: 'Berlin' },
    { time: '10:00', name: 'Lily Ivanova', city: 'Sofia' },
    { time: '11:15', name: 'Ahmed Rami', city: 'Cairo' },
  ],
  1: [
    { time: '11:30', name: 'Johanna Wayne', city: 'Oslo' },
    { time: '13:00', name: 'Ivan Petrov', city: 'Moscow' },
    { time: '14:45', name: 'Maria Lopez', city: 'Madrid' },
  ],
  2: [
    { time: '15:30', name: 'Jean Paul Belmondo', city: 'Paris' },
    { time: '17:00', name: 'Amélie Poulain', city: 'Lyon' },
    { time: '18:10', name: 'Luc Dubois', city: 'Nice' },
    { time: '19:00', name: 'Sophie Marceau', city: 'Toulouse' },
  ],
  3: [
    { time: '16:00', name: 'Paula Schmidt', city: 'Barcelona' },
    { time: '18:30', name: 'Carlos Martinez', city: 'Madrid' },
    { time: '20:00', name: 'Isabella Cruz', city: 'Valencia' },
  ],
  4: [
    { time: '10:30', name: 'Greta Keller', city: 'Vienna' },
    { time: '12:00', name: 'Hans Zimmer', city: 'Hamburg' },
    { time: '13:30', name: 'Erika Mustermann', city: 'Munich' },
    { time: '15:00', name: 'Max Müller', city: 'Berlin' },
  ],
  5: [
    { time: '09:45', name: 'Antonio Banderas', city: 'Seville' },
    { time: '11:00', name: 'Pedro Sanchez', city: 'Toledo' },
  ],
  6: [
    { time: '14:00', name: 'Sven Svensson', city: 'Stockholm' },
    { time: '15:15', name: 'Erik Karlsson', city: 'Uppsala' },
    { time: '16:30', name: 'Anna Lind', city: 'Gothenburg' },
  ],
  7: [
    { time: '08:30', name: 'Fatima Zahra', city: 'Casablanca' },
    { time: '10:00', name: 'Mohammed Ali', city: 'Rabat' },
    { time: '11:30', name: 'Youssef Benali', city: 'Fes' },
  ],
  8: [
    { time: '17:00', name: 'George Michael', city: 'London' },
    { time: '18:00', name: 'Adele Adkins', city: 'Manchester' },
    { time: '19:00', name: 'Ed Sheeran', city: 'Ipswich' },
    { time: '20:00', name: 'Emma Watson', city: 'Oxford' },
  ],
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(5);
  const breakpoint = useBreakpoint();

  // Dynamically set the initial activeIndex based on today's date
  useEffect(() => {
    const today = new Date();
    const todayFormatted = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`; // e.g., "19.7.2025"

    const todayIndex = initialCalendarData.findIndex(
      (item) => item.fullDate === todayFormatted
    );

    if (todayIndex !== -1) {
      setActiveIndex(todayIndex); // Set activeIndex to today's date if found
    } else {
      setActiveIndex(0); // Fallback to first date if today is not in the list
    }
  }, []); // Empty dependency array to run once on mount

  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToNext = () => {
    if (activeIndex < initialCalendarData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const currentDate = initialCalendarData[activeIndex];

  return (
    <div className="max-w-[1920px] w-full tablet:w-full px-8 mobile:w-full mx-auto flex items-center justify-center flex-col bg-transparent">
      {/* Simple Date Navigation */}
      <div className="flex items-center justify-between py-12 w-full max-w-[900px]">
        <div className="text-left">
          <h2 className="text-[#0A85C2] font-normal text-[40px] leading-tight">
            {currentDate.day}, {currentDate.fullDate}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={goToPrevious}
            disabled={activeIndex === 0}
            className={`p-3 ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 transition-transform cursor-pointer'}`}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={activeIndex === initialCalendarData.length - 1}
            className={`p-3 ${activeIndex === initialCalendarData.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 transition-transform cursor-pointer'}`}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Schedule List for All Screen Sizes (was Desktop/Tablet only) */}
      <div className="flex flex-col max-w-[900px] w-full tablet:w-full mobile:w-full justify-center mx-auto border-t border-b border-[#D4D4D4]">
        {(scheduleMap[activeIndex] || []).map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center border-b border-[#D4D4D4] w-full h-[64px] last:border-b-0"
          >
            <h1 className="text-[#0A85C2] font-normal text-sm mobile:text-lg tablet:text-xl desktop:text-2xl w-[50px] mobile:w-[60px] tablet:w-[75px] desktop:w-[97px] text-center flex-shrink-0">
              {item.time}
            </h1>

            <h3 className="text-[#3C3E41] font-semibold text-[12px] mobile:text-[14px] tablet:text-[16px] desktop:text-[18px] flex-1 min-w-0 pl-[8px] mobile:pl-[12px] tablet:pl-[16px] desktop:pl-[22px] truncate">
              {item.name}
            </h3>

            <h4 className="text-[#3C3E41] font-normal text-[10px] mobile:text-[12px] tablet:text-[14px] desktop:text-[16px] flex-1 min-w-0 pl-[4px] mobile:pl-[6px] tablet:pl-[8px] desktop:pl-[9px] truncate">
              {item.city}
            </h4>

            <button className="flex-shrink-0 p-1 mobile:p-2">
              <img src="/arrow-next.png" className="w-3 h-3 mobile:w-4 mobile:h-4 tablet:w-5 tablet:h-5 desktop:w-6 desktop:h-6" />
            </button>
          </div>
        ))}
      </div>

      <div className="w-full mt-[72px] tablet:mt-20 desktop:mt-20 px-4">
        <p className="text-[#3C3E41] hidden tablet:block desktop:block">
          Če pogreb še ni vnešen, je pa termin že znan,
          zaprosite svojo cvetličarno (ali pogrebno podjetje), da ga vnese.
        </p>

        <p className="text-[#3C3E41] tablet:hidden desktop:hidden text-sm">
          Če pogreb še ni vnešen, je pa termin že znan,
          zaprosite svojo cvetličarno (ali pogrebno p.), da ga vnese.
        </p>
      </div>
    </div>
  );
};

export default Carousel;