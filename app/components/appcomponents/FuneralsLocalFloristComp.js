'use client';
import React from 'react';
import Dropdown from '@/app/components/appcomponents/Dropdown';
import { useState } from 'react';
import regionsAndCities from '@/utils/regionAndCities';
const FuneralsLocalFloristComp = () => {

 
 
  const [selectedCity, setSelectedCity] = useState(null);
  
  
 

const cityOptions =  [
  
    ...Object.values(regionsAndCities)
      .flat()
      .map((city) => ({
        place: city,
        id: city,
      }))
      .sort((a, b) => a.place.localeCompare(b.place, "sl")),
  ];

  

  const handleCitySelect = (item) => {
    if(item.id==='allCities'){
      setSelectedCity(null);
      return
    }
    setSelectedCity(item.place);
    setSelectedRegion(null);
   
  };
  return (
    <div className=' mx-auto w-full mobile:hidden tablet:block desktop:block'>
      <div className='relative flex justify-center flex-row w-full mx-auto dekstop:h-[284px] tablet:h-[284px] mobile:h-[235px]'>
        <img
          src='/roza_vrtnica.avif'
          alt='roza_vrtnica'
          className='h-[284px] w-full object-cover hidden desktop:block'
        />
        <img
          src='/zeleno_ozadje.avif'
          alt='zeleno_ozadje'
          className='h-[284px] w-full hidden tablet:block object-fit'
        />

        <div className='absolute h-full flex mobile:hidden justify-end tablet:justify-center items-center max-w-[1054px] w-full'>
          <div
            className=' flex flex-col desktop:items-end tablet:items-start self-center 
    desktop:h-[124px] desktop:w-[476px] desktop:right-[113px] tablet:h-[124px] 
    tablet:w-[476px]'
          >
            <div className='tablet:mb-[32px] desktop:mb-[20px] mobile:mb-[32px]'>
              <div className='text-[40px] customOpt40 leading-[46.88px] font-[400px] desktop:text-[#3C3E41] hidden desktop:block mobile:text-[28px] mobile:leading-[32.81px] whitespace-nowrap'>
                Lokalne cvetličarne
              </div>
              <div className='text-[40px] customOpt40 leading-[46.88px] font-[400px] tablet:text-white hidden tablet:block mobile:text-[28px] mobile:leading-[32.81px] whitespace-nowrap'>
                Poišči lokalne cvetličarne
              </div>
            </div>
            <div className='flex h-[48px] w-full' />
            <Dropdown
              label={'Izberi kraj'}
              isFromNotification={false}
              isFromFlower={false}
              isFromFlowerGreenBgTablet={true}
              data={cityOptions}
              selectedValue={selectedCity}
              onSelect={()=>handleCitySelect()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralsLocalFloristComp;
