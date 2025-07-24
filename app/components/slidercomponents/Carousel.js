'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useBreakpoint } from '@/app/hooks/useBreakpoint';
import obituaryService from '@/services/obituary-service';

// Helper functions
const formatDateForDisplay = (dateObj) => {
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `${day}.${month}.${year}`;
};

const formatDateForAPI = (dateObj) => {
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  return `${year}-${month}-${day}`;
};

const getDayName = (dateObj) => {
  const days = ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'];
  return days[dateObj.getDay()];
};

const Carousel = () => {
  const searchParams = useSearchParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [obituaries, setObituaries] = useState([]);
  const breakpoint = useBreakpoint();

  // Get city and region from URL parameters
  const selectedCity = searchParams.get('city');
  const selectedRegion = searchParams.get('region');

  // Fetch funerals when currentDate, city, or region changes
  useEffect(() => {
    const fetchFunerals = async () => {
      try {
        const formattedDate = formatDateForAPI(currentDate);

        // Build query parameters object for getFunerals
        const queryParams = {
          startDate: formattedDate,
          endDate: formattedDate  // Same date for single day funerals
        };

        // Add city and region if they exist in URL params
        if (selectedCity) {
          queryParams.city = selectedCity;
        }
        if (selectedRegion) {
          queryParams.region = selectedRegion;
        }

        console.log('Sending params for funerals:', queryParams);

        const result = await obituaryService.getFunerals(queryParams);
        setObituaries(result.obituaries || []);
      } catch (error) {
        console.error('Error fetching funerals:', error);
        setObituaries([]);
      }
    };
    fetchFunerals();
  }, [currentDate, selectedCity, selectedRegion]);

  const goToPrevious = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const goToNext = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  // Check if current date is today (for next button limitation if needed)
  const isToday = () => {
    const today = new Date();
    return currentDate.toDateString() === today.toDateString();
  };

  return (
    <div className="max-w-[1920px] w-full tablet:w-full px-8 mobile:w-full mx-auto flex items-center justify-center flex-col bg-transparent">
      {/* Simple Date Navigation */}
      <div className="flex items-center justify-between py-12 w-full max-w-[900px]">
        <div className="text-left">
          <h2 className="text-[#0A85C2] font-normal text-[40px] leading-tight">
            {getDayName(currentDate)}, {formatDateForDisplay(currentDate)}
            {/* Show selected filters */}
            {(selectedCity || selectedRegion) && (
              <span className="text-sm text-gray-600 block">
                {selectedCity && `City: ${selectedCity}`}
                {selectedCity && selectedRegion && ' | '}
                {selectedRegion && `Region: ${selectedRegion}`}
              </span>
            )}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={goToPrevious}
            className="p-3 hover:scale-110 transition-transform cursor-pointer"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="p-3 hover:scale-110 transition-transform cursor-pointer"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dynamic Funeral Table */}
      <div className="flex flex-col max-w-[900px] w-full tablet:w-full mobile:w-full justify-center mx-auto border-t border-b border-[#D4D4D4]">
        {obituaries.length === 0 ? (
          <div className="text-center py-6 text-[#3C3E41]">
            Ni pogrebov za ta datum
            {selectedCity && ` v ${selectedCity}`}
            {selectedRegion && ` (${selectedRegion})`}.
          </div>
        ) : (
          obituaries.map((item, index) => (
            <div
              key={item.id || index}
              className="flex flex-row items-center border-b border-[#D4D4D4] w-full h-[64px] last:border-b-0"
            >
              <h1 className="text-[#0A85C2] font-normal text-sm mobile:text-lg tablet:text-lg desktop:text-xl w-[50px] mobile:w-[60px] tablet:w-[75px] desktop:w-[97px] text-center flex-shrink-0">
                {item.funeralTimestamp ? new Date(item.funeralTimestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
              </h1>
              <h3 className="text-[#3C3E41] font-semibold text-[12px] mobile:text-[14px] tablet:text-[16px] desktop:text-[18px] flex-1 min-w-0 pl-[8px] mobile:pl-[12px] tablet:pl-[16px] desktop:pl-[22px] truncate">
                {item.name} {item.sirName}
              </h3>
              <h4 className="text-[#3C3E41] font-normal text-[10px] mobile:text-[12px] tablet:text-[14px] desktop:text-[16px] flex-1 min-w-0 pl-[4px] mobile:pl-[6px] tablet:pl-[8px] desktop:pl-[9px] truncate">
                {item.location || item.city || ''}
              </h4>
              <button className="flex-shrink-0 p-1 mobile:p-2">
                <img src="/arrow-next.png" className="w-3 h-3 mobile:w-4 mobile:h-4 tablet:w-5 tablet:h-5 desktop:w-6 desktop:h-6" />
              </button>
            </div>
          ))
        )}
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