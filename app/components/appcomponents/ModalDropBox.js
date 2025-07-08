'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const ModalDropBox = ({ placeholder, onClick, isSelect, isSelectText }) => {
  return (
    <div
      onClick={onClick}
      className='flex justify-between items-center h-[40px] px-2 w-[120px] rounded-[6px] mt-[4px] bg-[#F2F8FF66] shadow-custom-dark-to-white cursor-pointer '
    >
      <div className='text-[15px] text-[#6D778E] font-normal'>
        {isSelectText ? isSelectText : placeholder}
      </div>
      <Image
        src={'/icon_dropDown.png'}
        alt='cross_img'
        width={24}
        height={24}
      />
    </div>
  );
};

export default ModalDropBox;
