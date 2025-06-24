"use client";
import React, { useEffect, useState } from "react"; 

const ObituaryListComponentReplica = () => {

  // --- 5-Day Carousel Calendar ---
  // Utility: get a list of days centered on a date
  const getFiveDayWindow = (centerDate) => {
    const days = [];
    for (let i = -2; i <= 2; i++) {
      const d = new Date(centerDate);
      d.setDate(centerDate.getDate() + i);
      days.push(d);
    }
    return days;
  };
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [carouselCenter, setCarouselCenter] = useState(new Date());
  // Keep carousel centered on selected day
  useEffect(() => {
    setCarouselCenter(selectedDay);
  }, [selectedDay]);
  const carouselDays = getFiveDayWindow(carouselCenter);
  const isSelected = (day) => day.toDateString() === selectedDay.toDateString();
  const isToday = (day) => day.toDateString() === new Date().toDateString();
  const handlePrevDay = () => {
    setCarouselCenter((prev) => {
      const d = new Date(prev);
      d.setDate(d.getDate() - 1);
      // Compute new window
      const window = getFiveDayWindow(d);
      // If selectedDay not in window, recenter on selectedDay
      const inWindow = window.some(day => day.toDateString() === selectedDay.toDateString());
      return inWindow ? d : new Date(selectedDay);
    });
  };
  const handleNextDay = () => {
    setCarouselCenter((prev) => {
      const d = new Date(prev);
      d.setDate(d.getDate() + 1);
      // Compute new window
      const window = getFiveDayWindow(d);
      // If selectedDay not in window, recenter on selectedDay
      const inWindow = window.some(day => day.toDateString() === selectedDay.toDateString());
      return inWindow ? d : new Date(selectedDay);
    });
  };

  const handleSelectDay = (day) => {
    setSelectedDay(new Date(day));
    setCarouselCenter(new Date(day)); // Ensure selected card is always visible
  };

  const getWeekdayAbbr = (date) => {
    const abbr = date
      .toLocaleString("sl-SI", { weekday: "short" })
      .replace(/\.$/, "");
    return abbr.charAt(0).toUpperCase() + abbr.slice(1);
  };


  return (
    <>
      <div className="w-full flex flex-col items-center">
        {/* Calendar 5-Day Carousel */}
        <div className="w-full max-w-fit rounded-2xl bg-white shadow-lg px-6 py-5 mb-8 flex flex-col items-center border border-[#E3E8EC]">
          <div className="w-full flex items-center justify-between">
            <button
              aria-label="Previous Day"
              onClick={handlePrevDay}
              className="w-12 h-12 flex items-center justify-center rounded-[8px] transition mr-2 -mt-8"
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
            <div className="flex-1 flex justify-center gap-[0px] items-end">
              {carouselDays.map((day, idx) => {
                const selected = isSelected(day);
                // Only highlight 'today' if it is also selected
                const today = isToday(day) && isSelected(day);
                // Card sizes
                const cardW = selected || today ? 138 : 91;
                const cardH = selected || today ? 208 : 138; 
                const maxCardH = 208;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center"
                    style={{ height: maxCardH }}
                  >
                    <button
                      onClick={() => handleSelectDay(day)}
                      className={`transition flex flex-col items-center relative focus:outline-none select-none ${selected || today ? "z-10" : "opacity-90"}`}
                      style={{
                        width: cardW,
                        height: cardH,
                        background: 'none',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
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
                            <g filter="url(#filter1_d_7022_1466)">
                              <path d="M74.0898 121V116.945L85.9023 103.75C87.0898 102.359 88.0664 101.023 88.832 99.7422C89.6133 98.4609 90.0039 97.1406 90.0039 95.7812C90.0039 94.2344 89.582 93.0547 88.7383 92.2422C87.9102 91.4141 86.793 91 85.3867 91C83.9648 91 82.7852 91.4609 81.8477 92.3828C80.9258 93.2891 80.4648 94.8359 80.4648 97.0234V97.7266H74.0898V96.5312C74.0898 93.4844 75.1445 91.0234 77.2539 89.1484C79.3633 87.2578 82.0977 86.3125 85.457 86.3125C88.9414 86.3125 91.6289 87.1562 93.5195 88.8438C95.4102 90.5312 96.3633 92.7422 96.3789 95.4766C96.3789 97.6172 95.8633 99.5469 94.832 101.266C93.8164 102.969 92.4492 104.781 90.7305 106.703L82.9492 115.867H97.1758V121H74.0898ZM109.598 121V92.6875L100.949 95.7578V90.4141L111.988 86.5234H115.949V121H109.598Z" fill="#3C3E41"/>
                            </g>
                            <g filter="url(#filter2_d_7022_1466)">
                              <path d="M80.7695 172V154.938H85.9961C87.793 154.938 89.1562 155.402 90.0859 156.332C91.0156 157.254 91.4805 158.477 91.4805 160C91.4805 161.523 91.0156 162.754 90.0859 163.691C89.1562 164.629 87.793 165.098 85.9961 165.098H82.4219V172H80.7695ZM82.4219 163.691H85.9844C87.3984 163.691 88.3906 163.34 88.9609 162.637C89.5312 161.934 89.8164 161.055 89.8164 160C89.8164 158.953 89.5312 158.082 88.9609 157.387C88.3906 156.691 87.4023 156.344 85.9961 156.344H82.4219V163.691ZM92.8398 166.188V165.836C92.8398 164.023 93.3438 162.551 94.3516 161.418C95.3594 160.277 96.7109 159.707 98.4062 159.707C100.102 159.707 101.453 160.277 102.461 161.418C103.469 162.551 103.973 164.023 103.973 165.836V166.188C103.973 168.008 103.465 169.488 102.449 170.629C101.441 171.762 100.094 172.328 98.4062 172.328C96.7109 172.328 95.3594 171.762 94.3516 170.629C93.3438 169.488 92.8398 168.008 92.8398 166.188ZM94.4805 165.824V166.211C94.4805 167.562 94.8125 168.691 95.4766 169.598C96.1406 170.504 97.1172 170.957 98.4062 170.957C99.6875 170.957 100.66 170.508 101.324 169.609C101.988 168.703 102.32 167.566 102.32 166.199V165.824C102.32 164.465 101.988 163.336 101.324 162.438C100.668 161.531 99.6953 161.078 98.4062 161.078C97.1172 161.078 96.1406 161.531 95.4766 162.438C94.8125 163.336 94.4805 164.465 94.4805 165.824ZM106.586 172V160.035H108.051L108.109 161.746H108.145C108.59 161.137 109.145 160.66 109.809 160.316C110.48 159.973 111.23 159.801 112.059 159.801C113.262 159.801 114.215 160.137 114.918 160.809C115.629 161.473 115.984 162.586 115.984 164.148V172H114.367V164.148C114.367 163.094 114.125 162.34 113.641 161.887C113.156 161.426 112.465 161.195 111.566 161.195C110.801 161.195 110.129 161.398 109.551 161.805C108.973 162.211 108.52 162.727 108.191 163.352V172H106.586Z" fill="#808080"/>
                            </g>
                            <path d="M76.5898 35.3438L81.8633 21.0859H86.1797L91.5703 35.3438H87.3906L84.0801 25.9785C84.002 25.7507 83.9434 25.5358 83.9043 25.334C83.8652 25.1322 83.8294 24.9401 83.7969 24.7578H83.7285C83.7025 24.9401 83.6667 25.1354 83.6211 25.3438C83.5755 25.5456 83.5169 25.7572 83.4453 25.9785L80.1836 35.3438H76.5898ZM80.0859 32.6973L80.8281 29.9531H86.9609L87.7324 32.6973H80.0859ZM92.459 35.3438V21.125H98.5625C100.249 21.125 101.548 21.5384 102.459 22.3652C103.37 23.1855 103.826 24.39 103.826 25.9785C103.826 27.5605 103.374 28.7682 102.469 29.6016C101.564 30.4349 100.255 30.8516 98.543 30.8516H96.375V35.3438H92.459ZM96.375 28.0781H97.9766C98.7188 28.0781 99.2266 27.9056 99.5 27.5605C99.7799 27.2155 99.9199 26.6947 99.9199 25.998C99.9199 25.3079 99.7799 24.7936 99.5 24.4551C99.2266 24.1165 98.7188 23.9473 97.9766 23.9473H96.375V28.0781ZM105.564 35.3438V21.125H111.346C113.051 21.125 114.393 21.5319 115.369 22.3457C116.352 23.153 116.844 24.3151 116.844 25.832C116.844 27.3685 116.342 28.5566 115.34 29.3965C114.344 30.2363 113.006 30.6562 111.326 30.6562H109.48V35.3438H105.564ZM109.48 27.9316H111.004C111.694 27.9316 112.186 27.7591 112.479 27.4141C112.771 27.069 112.921 26.5677 112.928 25.9102C112.928 25.2591 112.778 24.7676 112.479 24.4355C112.186 24.097 111.694 23.9277 111.004 23.9277H109.48V27.9316ZM113.104 35.3438L110.008 28.8789L114.07 28.6445L117.459 35.3438H113.104Z" fill="white"/>
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
                                fontSize: 32,
                                lineHeight: "32px",
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
                                fontSize: 16,
                                lineHeight: "24px",
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
                  </div>
                );
              })}
            </div>
            <button
              aria-label="Next Day"
              onClick={handleNextDay}
              className="w-12 h-12 flex items-center justify-center rounded-[8px] transition ml-2 -mt-8"
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

export default ObituaryListComponentReplica;
