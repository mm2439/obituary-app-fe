'use client';
import React from 'react';
import Dropdown from '@/app/components/appcomponents/Dropdown';
import { useState } from 'react';
import regionsAndCities from '@/utils/regionAndCities';
const PogrebiLocalFloristComp = () => {

 
 
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
    <div className=' mx-auto w-full '>
        

      <div className='relative flex tablet:justify-start  desktop:justify-center items-center flex-row w-full mx-auto dekstop:h-[300px] tablet:h-[284px] mobile:h-[235px]'>
        <img
          src='/pogrebi-flowers.jpg'
          alt='pogrebi-flowers'
          className='h-[300px] w-full object-cover'
        />
       


        <div className='absolute flex justify-start tablet:justify-center items-center w-[330px] h-[141px]
            tablet:w-[391px] desktop:w-[1054px] tablet:h-[167px] desktop:h-full ml-11 pl-5 tablet:pl-8 desktop:pl-8 rounded-2xl  
            bg-gradient-to-r  desktop:bg-transparent from-white/100 via-white/50 desktop:from-white/0 desktop:via-white/0 desktop:to-white/0 to-white/5 desktop: backdrop-blur-xl desktop:backdrop-blur-none border 
            border-white/30 desktop:border-none shadow-2xl desktop:shadow-none'>
          <div
            className=' flex flex-col desktop:items-start tablet:items-start self-center 
            desktop:h-[124px] desktop:w-[476px] desktop:right-[113px] h-[112px] tablet:h-[124px] 
            tablet:w-[476px]'
          >
            <div className='tablet:mb-[32px] desktop:mb-[20px] mb-[22px]'>
              <div className='text-[24px] tablet:text-[32px] desktop:text-[40px] customOpt40 leading-[46.88px] font-[400px] text-[#3C3E41]  desktop:text-[#ffff]  mobile:text-[28px] mobile:leading-[32.81px] whitespace-nowrap'>
                Lokalne cvetličarne
              </div>
              
            </div>
            <div className='flex h-[48px] w-[277px] tablet:w-[333px] desktop:w-[476px]'>
                <Dropdown
                label={'Izberi občino'}
                isFromNotification={false}
                isFromFlower={false}
                isFromFlowerGreenBgTablet={false}
                isFrom={'florist'}
                data={cityOptions}
                selectedValue={selectedCity}
                onSelect={()=>handleCitySelect()}
                />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PogrebiLocalFloristComp;
