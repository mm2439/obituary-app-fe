"use client";
import React, { useEffect, useState } from "react"; 

const CarouselCalendar = () => {

  // --- 5-Day Carousel Calendar ---
  // Responsive card sizes
  const [screen, setScreen] = useState('desktop');
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setScreen('mobile');
      else if (window.innerWidth < 1024) setScreen('tablet');
      else setScreen('desktop');
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardSizes = {
    mobile: { selected: { w: 90, h: 120 }, normal: { w: 60, h: 85 }, gap: 'gap-[0px]', maxH: 120 },
    tablet: { selected: { w: 110, h: 160 }, normal: { w: 75, h: 110 }, gap: 'gap-[0px]', maxH: 160 },
    desktop: { selected: { w: 138, h: 208 }, normal: { w: 91, h: 138 }, gap: 'gap-[0px]', maxH: 208 }
  };
  
  // Get window of days based on screen size
  // Desktop: 5 cards, Tablet: 4 cards, Mobile: 3 cards
  const getResponsiveDayWindow = (centerDate) => {
    const days = [];
    let rangeStart = 0;
    let rangeEnd = 0;
    
    if (screen === 'mobile') {
      // Mobile: 3 cards (selected + 2)
      rangeStart = 0;
      rangeEnd = 2;
    } else if (screen === 'tablet') {
      // Tablet: 4 cards (selected + 3)
      rangeStart = -1;
      rangeEnd = 2;
    } else {
      // Desktop: 5 cards (2 before + selected + 2 after)
      rangeStart = -1;
      rangeEnd = 3;
    }
    
    for (let i = rangeStart; i <= rangeEnd; i++) {
      const d = new Date(centerDate);
      d.setDate(centerDate.getDate() + i);
      days.push(d);
    }
    return days;
  };
  
  // Legacy function for backward compatibility
  const getFiveDayWindow = getResponsiveDayWindow;
  const today = new Date();
  const [carouselCenter, setCarouselCenter] = useState(today);
  // Always select the first card (leftmost) in the carousel
  const [selectedDay, setSelectedDay] = useState(carouselCenter);
  // First card in carousel is selected by default

  const carouselDays = getFiveDayWindow(carouselCenter);
  const isSelected = (day) => day.toDateString() === selectedDay.toDateString();
  const isToday = (day) => day.toDateString() === new Date().toDateString();
  
  const handlePrevDay = () => {
    // For mobile view, change the selected date but keep position fixed at left
    if (screen === 'mobile') {
      // Create new date one day before
      const newSelectedDay = new Date(selectedDay);
      newSelectedDay.setDate(selectedDay.getDate() - 1);
      // Update selectedDay
      setSelectedDay(newSelectedDay);
      // Update carousel center to match
      setCarouselCenter(newSelectedDay);
      return;
    }

    // Normal behavior for tablet/desktop
    // Find index of selectedDay in carouselDays
    const idx = carouselDays.findIndex(day => day.toDateString() === selectedDay.toDateString());
    if (idx > 0) {
      // Select the card to the left
      setSelectedDay(new Date(carouselDays[idx - 1]));
    } else {
      // At left edge, move window left
      const newCenter = new Date(carouselCenter);
      newCenter.setDate(carouselCenter.getDate() - 1);
      setCarouselCenter(newCenter);
      // Always select first card when shifting
      const newWindow = getFiveDayWindow(newCenter);
      setSelectedDay(new Date(newWindow[0]));
    }
  };
  
  const handleNextDay = () => {
    // For mobile view, change the selected date but keep position fixed at left
    if (screen === 'mobile') {
      // Create new date one day after
      const newSelectedDay = new Date(selectedDay);
      newSelectedDay.setDate(selectedDay.getDate() + 1);
      // Update selectedDay
      setSelectedDay(newSelectedDay);
      // Update carousel center to match
      setCarouselCenter(newSelectedDay);
      return;
    }
    
    // Normal behavior for tablet/desktop
    const idx = carouselDays.findIndex(day => day.toDateString() === selectedDay.toDateString());
    if (idx < carouselDays.length - 1) {
      // Select the card to the right
      setSelectedDay(new Date(carouselDays[idx + 1]));
    } else {
      // At right edge, move window right
      const newCenter = new Date(carouselCenter);
      let daysToAdd = screen === 'tablet' ? 4 : 5;
      newCenter.setDate(carouselCenter.getDate() + daysToAdd);
      setCarouselCenter(newCenter);
      // Always select first card when shifting
      const newWindow = getFiveDayWindow(newCenter);
      setSelectedDay(new Date(newWindow[0]));
    }
  };



  const handleSelectDay = (day) => {
    // Update the selected day
    setSelectedDay(new Date(day));
    
    // For mobile, also update carouselCenter to keep selected day on left
    if (screen === 'mobile') {
      setCarouselCenter(new Date(day));
    }
  };

  const getMonthAbbr = (date) =>
    date.toLocaleString('sl-SI', { month: 'short' }).replace(/\.$/, '').toUpperCase();

  const getWeekdayAbbr = (date) => {
    const abbr = date
      .toLocaleString("sl-SI", { weekday: "short" })
      .replace(/\.$/, "");
    return abbr.charAt(0).toUpperCase() + abbr.slice(1);
  };


  return (
    <>
      <div className="w-full flex flex-col items-center bg-white border-b-[1px] border-[#C7C7C7]">
        {/* Calendar 5-Day Carousel */}
        <div className="w-full max-w-fit sm:px-6 py-5 mb-0 flex flex-col items-center ">
          <div className="w-full flex items-center justify-between">
            <button
              aria-label="Previous Day"
              onClick={handlePrevDay}
              className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-[8px] transition mr-2 -mt-8 shrink-0"
            >
              <svg
                width="74"
                height="75"
                viewBox="0 0 74 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3868 37.6613L48.6484 22.3995L44.288 18.0391L24.6656 37.6613L44.288 57.2834L48.6484 52.9229L33.3868 37.6613Z"
                  fill="#D4D4D4"
                />
              </svg>
            </button>
            {/* 5-Day Carousel */}
            <div className={`flex-1 min-w-0 flex justify-center items-end ${cardSizes[screen].gap} px-0 mobile:px-4`}> 
              {carouselDays.map((day, idx) => {
                const selected = isSelected(day);
                // Only highlight 'today' if it is also selected
                const today = isToday(day) && isSelected(day);
                // Card sizes
                const cardW = selected || today ? cardSizes[screen].selected.w : cardSizes[screen].normal.w;
                const cardH = selected || today ? cardSizes[screen].selected.h : cardSizes[screen].normal.h;
                const maxCardH = cardSizes[screen].maxH;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center ${screen === 'mobile' ? 'justify-start' : 'justify-center'} relative h-fit`}
                    style={{ height: maxCardH }}
                  >
                    <button
                      // On mobile, disable click for the last two cards
                      onClick={() => {
                        // On mobile, only allow selection of the first card
                        if (screen === 'mobile' && idx > 0) {
                          return; // Don't select the rightmost two cards on mobile
                        }
                        handleSelectDay(day);
                      }}
                      className={`transition flex flex-col items-center relative focus:outline-none select-none ${selected || today ? "z-10" : "opacity-90"}`}
                      style={{
                        width: cardW,
                        height: cardH,
                        background: 'none',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
                        cursor: screen === 'mobile' && idx > 0 ? 'default' : 'pointer', // Cursor style based on selectability
                      }}
                    >
                      {selected || today ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* SVG background for selected/today card (bigger) */}
                          <svg
                            width="195"
                            height="256"
                            viewBox="0 0 195 256"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ width: cardW, height: cardH }}
                          >
                            <g filter="url(#filter0_d_7022_1466)">
                              <path d="M28.3125 51.4141V185.116C28.3125 198.613 39.2534 209.554 52.75 209.554H142.353C155.85 209.554 166.791 198.613 166.791 185.116V51.4141C146.021 55.3253 122.487 57.5314 97.5517 57.5314C72.6167 57.5314 49.0823 55.3248 28.3125 51.4141Z" fill="url(#paint0_linear_7022_1466)"/>
                            </g>
                            <path d="M142.353 0.914062H52.75C39.2534 0.914062 28.3125 11.8554 28.3125 25.3516V51.4178C49.0823 55.329 72.6167 57.5352 97.5517 57.5352C122.487 57.5352 146.022 55.3286 166.791 51.4178V25.3516C166.791 11.855 155.85 0.914062 142.353 0.914062Z" fill="url(#paint1_linear_7022_1466)"/>
                            <text
                              x="50%"
                              y="35"
                              textAnchor="middle"
                              fontFamily="Roboto Flex, Roboto, sans-serif"
                              fill="#ffff"
                              stroke="#ffff"
                              strokeWidth="1.5"
                              letterSpacing="2"
                              fontWeight="bold"
                              dominantBaseline="middle"
                              style={{
                                fontFamily: "Roboto Flex, Roboto, sans-serif",
                                fontSize: 20,
                                lineHeight: '14px',
                                color: '#ffff',
                                fontWeight: 700,
                                textShadow: '0px 1px 2px rgba(0,0,0,0.10)',
                              }}
                            >
                              {getMonthAbbr(day)}
                            </text>
                            <defs>
                              <filter id="filter0_d_7022_1466" x="0.3125" y="41.4141" width="194.477" height="214.141" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="18"/>
                                <feGaussianBlur stdDeviation="14"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7022_1466"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7022_1466" result="shape"/>
                              </filter>
                              <filter id="filter1_d_7022_1466" x="70.0898" y="86.3125" width="49.8594" height="42.6875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7022_1466"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7022_1466" result="shape"/>
                              </filter>
                              <filter id="filter2_d_7022_1466" x="76.7695" y="152.938" width="43.2148" height="25.3906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="2"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7022_1466"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7022_1466" result="shape"/>
                              </filter>
                              <linearGradient id="paint0_linear_7022_1466" x1="28.3125" y1="130.484" x2="166.791" y2="130.484" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="1" stop-color="#E6E6E6"/>
                              </linearGradient>
                              <linearGradient id="paint1_linear_7022_1466" x1="97.5517" y1="0.914063" x2="97.5517" y2="57.5352" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0D94E8"/>
                                <stop offset="1" stop-color="#10579B"/>
                              </linearGradient>
                            </defs>
                          </svg>
                          {/* Overlayed date and weekday for selected/today card */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span
                              className="font-semibold"
                              style={{
                                fontFamily: "Roboto Flex, Roboto, sans-serif",
                                fontSize: screen === 'mobile' ? 20 : screen === 'tablet' ? 26 : 32,
                                lineHeight: screen === 'mobile' ? '24px' : screen === 'tablet' ? '28px' : '32px',
                                color: '#3C3E41',
                                textShadow: '0px 4px 4px rgba(0,0,0,0.25)',
                                marginTop: 0
                              }}
                            >
                              {day.getDate()}
                            </span>
                            <span
                              style={{
                                fontFamily: "Roboto Flex, Roboto, sans-serif",
                                fontSize: screen === 'mobile' ? 12 : screen === 'tablet' ? 15 : 16,
                                lineHeight: screen === 'mobile' ? '16px' : screen === 'tablet' ? '20px' : '24px',
                                color: '#808080',
                                fontWeight: 300,
                                textShadow: '0px 2px 4px rgba(0,0,0,0.25)',
                                marginTop: 8
                              }}
                            >
                              {getWeekdayAbbr(day)}
                            </span>
                            
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* SVG background for non-selected card */}
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="15 0 100 182"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 left-0 w-full h-full"
                          >
                            <g filter="url(#filter0_d_7017_1465)">
                              <path d="M96.6106 0.65625H38.454C29.3813 0.65625 22 8.03746 22 17.1103V33.3126V34.5195V120.805C22 129.878 29.3813 137.259 38.454 137.259H96.6103C105.683 137.259 113.064 129.877 113.064 120.805V34.5195V33.3126V17.1103C113.065 8.03746 105.683 0.65625 96.6106 0.65625Z" fill="url(#paint0_linear_7017_1465)"/>
                              <path d="M22.5898 34.0234V120.8C22.5898 129.56 29.691 136.661 38.4508 136.661H96.6071C105.367 136.661 112.468 129.56 112.468 120.8V34.0234C98.9876 36.5619 83.7128 37.9938 67.5289 37.9938C51.3451 37.9938 36.0703 36.5616 22.5898 34.0234Z" fill="url(#paint1_linear_7017_1465)"/>
                              <path d="M96.6071 1.25H38.4508C29.691 1.25 22.5898 8.3513 22.5898 17.1107V34.0285C36.0703 36.567 51.3451 37.9989 67.5289 37.9989C83.7128 37.9989 98.9879 36.5667 112.468 34.0285V17.1107C112.468 8.351 105.367 1.25 96.6071 1.25Z" fill="url(#paint2_linear_7017_1465)" fillOpacity="0.7"/>
                            </g>
                            <defs>
                              <filter id="filter0_d_7017_1465" x="0" y="0.65625" width="135.062" height="180.602" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="22" />
                                <feGaussianBlur stdDeviation="11" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7017_1465" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7017_1465" result="shape" />
                              </filter>
                              <linearGradient id="paint0_linear_7017_1465" x1="22" y1="68.9574" x2="113.065" y2="68.9574" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#E6E6E6" />
                                <stop offset="1" stopColor="white" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_7017_1465" x1="22.5898" y1="85.3423" x2="112.468" y2="85.3423" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#E6E6E6" />
                              </linearGradient>
                              <linearGradient id="paint2_linear_7017_1465" x1="67.5289" y1="1.25" x2="67.5289" y2="37.9989" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#63B8F3" />
                                <stop offset="1" stopColor="#1F6BB2" />
                              </linearGradient>
                            </defs>
                          </svg>
                          {/* Overlayed date and weekday */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span
                              className="font-semibold"
                              style={{
                                fontFamily: "Roboto Flex, Roboto, sans-serif",
                                fontSize: selected || today
                                  ? 32
                                  : screen === 'mobile' ? 16 : screen === 'tablet' ? 22 : 24,
                                lineHeight: selected || today
                                  ? '32px'
                                  : screen === 'mobile' ? '18px' : screen === 'tablet' ? '24px' : '28px',
                                color: "#3C3E41",
                                textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                                marginTop: 0 
                              }}
                            >
                              {day.getDate()}
                            </span>
                            <span
                              style={{
                                fontFamily: "Roboto Flex, Roboto, sans-serif",
                                fontSize: selected || today
                                  ? 16
                                  : screen === 'mobile' ? 10 : screen === 'tablet' ? 13 : 14,
                                lineHeight: selected || today
                                  ? '24px'
                                  : screen === 'mobile' ? '14px' : screen === 'tablet' ? '18px' : '20px',
                                color: "#808080",
                                fontWeight: 300,
                                textShadow: "0px 2px 4px rgba(0,0,0,0.25)",
                                marginTop: 8
                              }}
                            >
                              {getWeekdayAbbr(day)}
                            </span>
                          </div>
                        </div>
                      )}
                    </button>
                    
                    {/* Navigation arrows under rightmost two cards for mobile only */}
                    {screen === 'mobile' && idx > 0 && (
                      <div className="absolute bottom-0 w-full flex justify-center">
                        {idx === 1 && (
                          <button 
                            onClick={handlePrevDay}
                            className="w-12 h-12 flex items-center justify-center"
                          >
                            <svg width="36" height="36" viewBox="0 0 74 75" fill="rgba(212, 212, 212, 1)" xmlns="http://www.w3.org/2000/svg">
                              <path d="M33.3868 37.6613L48.6484 22.3995L44.288 18.0391L24.6656 37.6613L44.288 57.2834L48.6484 52.9229L33.3868 37.6613Z" fill="rgba(212, 212, 212, 1)"/>
                            </svg>
                          </button>
                        )}
                        {idx === 2 && (
                          <button 
                            onClick={handleNextDay}
                            className="w-12 h-12 flex items-center justify-center"
                          >
                            <svg width="36" height="36" viewBox="0 0 74 75" fill="rgba(212, 212, 212, 1)" xmlns="http://www.w3.org/2000/svg">
                              <path d="M40.6132 37.6512L25.3516 52.913L29.712 57.2734L49.3344 37.6512L29.712 18.0291L25.3516 22.3896L40.6132 37.6512Z" fill="rgba(212, 212, 212, 1)"/>
                            </svg>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <button
              aria-label="Next Day"
              onClick={handleNextDay}
              className="hidden sm:flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center rounded-[8px] transition ml-2 -mt-8 shrink-0"
            >
              <svg
                width="74"
                height="75"
                viewBox="0 0 74 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.6132 37.6512L25.3516 52.913L29.712 57.2734L49.3344 37.6512L29.712 18.0291L25.3516 22.3896L40.6132 37.6512Z"
                  fill="#D4D4D4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCalendar;
