'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SideMenuAdmin from '../components/appcomponents/SideMenuAdmin';
import RevenueComp from '../components/appcomponents/RevenueComp';
import Dropdown from '../components/appcomponents/Dropdown';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const AdminFinancialsMemory = () => {
  const tableData = [
    {
      memoryBook: 'Mario Danilo Primo',
      keeper: 'M',
      keeperAmount: 'FREE',
      invoiceImg: '',
      invoice: '21.05.24',
      whosKeeper: '01002SIA \n their@email.com',
      candles: '',
      candlesAmount: '',
      expires: '',
      expiresImg: '',
      premiumTributeImg: '',
      premiumTribute: '',
      premiumMobileImg: '',
      premiumMobile: '',
      highlightedObituaryImg: '',
      highlightedObituary: '',
      video: '',
      paid: '',
      paidImg: '/img_red_dot.png',
      amount: '',
      awardCode: '/img_award_code.png',
      open: '>',
    },
    {
      memoryBook: 'Mario Danilo Primo',
      keeper: '',
      keeperAmount: '',
      invoiceImg: '',
      invoice: '',
      whosKeeper: '01002SIA \n their@email.com',
      candles: 'Y',
      candlesAmount: '10 €',
      expiresImg: '/ico_eye.png',
      expires: '21.05.25',
      premiumTributeImg: '',
      premiumTribute: '',
      premiumMobileImg: '',
      premiumMobile: '',
      highlightedObituaryImg: '',
      highlightedObituary: '',
      video: '',
      paid: '15.06.24',
      paidImg: '',
      amount: '20 €',
      awardCode: '/img_award_code.png',
      open: '>',
    },
    {
      memoryBook: 'Albert Einstein',
      keeper: 'Y',
      keeperAmount: '10 €',
      invoiceImg: '/ico_eye.png',
      invoice: '01.04.25',
      whosKeeper: '01002SIA \n their@email.com',
      candles: '',
      candlesAmount: '',
      expires: '',
      expiresImg: '',
      premiumTributeImg: '',
      premiumTribute: '',
      premiumMobileImg: '',
      premiumMobile: '',
      highlightedObituaryImg: '',
      highlightedObituary: '',
      video: '',
      paid: '15.06.24',
      paidImg: '',
      amount: '10 €',
      awardCode: '/img_award_code.png',
      open: '>',
    },
    {
      memoryBook: 'Albertina Einstein',
      keeper: '',
      keeperAmount: '',
      invoiceImg: '',
      invoice: '',
      whosKeeper: '',
      candles: '',
      candlesAmount: '',
      expires: '',
      expiresImg: '',
      premiumTributeImg: '/ico_eye.png',
      premiumTribute: '10 €',
      premiumMobileImg: '/ico_eye.png',
      premiumMobile: '10 €',
      highlightedObituaryImg: '',
      highlightedObituary: '',
      video: '',
      paid: '',
      paidImg: '',
      amount: 'Pending',
      awardCode: '/img_award_code.png',
      open: '>',
    },
    {
      memoryBook: 'Jackie Chan',
      keeper: 'F',
      keeperAmount: '20 €',
      invoiceImg: '/ico_eye.png',
      invoice: 'Never',
      whosKeeper: '01002SIA \n their@email.com',
      candles: '',
      candlesAmount: '',
      expires: '',
      expiresImg: '',
      premiumTributeImg: '/ico_eye.png',
      premiumTribute: '10 €',
      premiumMobileImg: '/ico_eye.png',
      premiumMobile: '10 €',
      highlightedObituaryImg: '',
      highlightedObituary: '',
      video: '',
      paid: '',
      paidImg: '',
      amount: '',
      awardCode: '/img_award_code.png',
      open: '>',
    },
    {
      memoryBook: 'Julius Cesar',
      keeper: '',
      keeperAmount: '',
      invoiceImg: '',
      invoice: '',
      whosKeeper: '01002SIA \n their@email.com',
      candles: '',
      candlesAmount: '',
      expires: '',
      expiresImg: '',
      premiumTributeImg: '',
      premiumTribute: '',
      premiumMobileImg: '',
      premiumMobile: '',
      highlightedObituaryImg: '/ico_eye.png',
      highlightedObituary: '10 €',
      video: '',
      paid: '',
      paidImg: '',
      amount: '',
      awardCode: '/img_award_code.png',
      open: '>',
    },
  ];
  return (
    <div className='w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col'>
      <div className='w-full h-[114px] py-[2px] flex flex-row justify-between'>
        <RevenueComp
          amount={'290€'}
          total={'1170'}
          revenue={'Keepers'}
          previous={'210'}
          change={' +23%'}
          isWhiteBg={'1'}
        />
        <RevenueComp
          amount={'90€'}
          total={'670'}
          revenue={'Premium Candles'}
          previous={'130'}
          change={' +36%'}
          isWhiteBg={'1'}
        />
        <RevenueComp
          amount={'120€'}
          total={'770'}
          revenue={'Tributes'}
          previous={'80'}
          change={' +50%'}
          isWhiteBg={'1'}
        />
        <RevenueComp
          amount={'80€'}
          total={'980'}
          revenue={'Mobile Premium'}
          previous={'160'}
          change={' +50%'}
          isWhiteBg={'1'}
        />
        <RevenueComp
          amount={'30€'}
          total={'90'}
          revenue={'Highlighted Obituary'}
          previous={'0'}
          change={'+33%'}
          isWhiteBg={'-1'}
        />
      </div>

      <div className='w-full h-[114px] py-[2px] flex mt-[37px]  flex-row justify-end'>
        <div className='flex flex-row gap-x-[15px]'>
          <RevenueComp
            amount={'530€'}
            total={'3280'}
            revenue={'Revenue: Memory page'}
            previous={'430'}
            change={' +23%'}
          />
        </div>
      </div>

      <div className='mt-[80px] '>
        <div
          className='flex flex-row
           items-center justify-start space-x-[16px]'
        >
          <div className='flex flex-row space-x-[16px] '>
            <div className='flex h-[48px]'>
              <input
                type='text'
                placeholder='Name / Last Name'
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  width: '227px',
                  height: '100%',
                  fontWeight: 400,
                  borderWidth: '1px',
                  borderColor: '#7C7C7C',
                  borderRadius: '8px',
                  paddingLeft: '15.8px',
                  paddingRight: '15.8px',
                  color: '#7C7C7C',
                  backgroundColor: 'white',
                  fontVariationSettings: "'opsz' 16",
                }}
              />
            </div>
            <Dropdown
              label={'Premium tributes only'}
              isFromNotification={false}
              isFromFlower={false}
              isFrom={''}
              isFromFlowerGreenBgTablet={false}
              onSelect={() => console.log('')}
            />
            <div className='flex h-[16px] w-[360px] tablet:hidden desktop:hidden' />
            <Dropdown
              label={'Pending Only'}
              isFromNotification={false}
              isFromFlower={false}
              isFrom={''}
              isFromFlowerGreenBgTablet={false}
              onSelect={() => console.log('')}
            />
          </div>
          <div className='hidden desktop:flex justify-center  w-12 items-center h-full desktop:aspect-square rounded-lg bg-[#414141]'>
            <MagnifyingGlassIcon className='w-5 h-5 text-white hidden desktop:block' />
          </div>
        </div>
      </div>
      {/* Table Starts from here */}
      <div className='mt-[50px] w-full '>
        <table className='min-w-full border-b-[0.5px] border-[#A1B1D4] '>
          <thead className='  '>
            <tr>
              {/* Memory Book */}
              <th className='pl-[16px] w-[220px] mt-[8px] flex flex-row items-center py-4 text-center border-r'>
                <div className=' text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  MEMORY BOOK
                </div>
                <Image
                  src={'/ico_down_arrow_memory.png'}
                  alt=''
                  width={24}
                  height={24}
                />
              </th>
              {/* Keeper */}
              <th className='w-[102px] py-2 text-center border-r'>
                <div className='flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  KEEPER <br />
                  <div className='flex flex-row items-center pl-[25px]'>
                    <span>
                      <span className='text-[#3C3E41]'>
                        M <span className='text-[#D4D4D4]'>|</span>
                      </span>
                      <span className='text-[#1FBE11]'>
                        {' '}
                        Y <span className='text-[#D4D4D4]'>|</span>
                      </span>
                      <span className='text-[#EB1D1D]'> F </span>
                    </span>

                    <Image
                      src={'/ico_down_arrow_memory.png'}
                      alt=''
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </th>
              {/* Expires */}
              <th className='w-[141px] py-2 text-center border-r'>
                <div className='flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  <div
                    className='text-[24px] leading-[16px] font-variation-customOpt24 font-semibold
               text-[#6D778E]'
                  >
                    KEEPERS
                  </div>

                  <span className='text-[#D4D4D4] mt-[8px]'>INVOICE</span>
                  <span className='flex flex-row pl-[42px] items-center'>
                    <div className=''>EXPIRES</div>
                    <Image
                      src={'/ico_down_arrow_memory.png'}
                      alt=''
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </th>
              {/* Who's Keeper */}
              <th className='w-[154px] py-2 text-center border-r'>
                <div className='flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  {"WHO'S KEEPER"}
                </div>
              </th>
              {/* PREMIUM UPGRADES */}
              <th
                colSpan={6}
                className='w-[672px] bg-[#F7F9FA70] px-[30px] text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41] pb-2 text-center border-r'
              >
                <div className='flex flex-col '>
                  <div
                    className='text-[24px] self-center leading-[16px] font-variation-customOpt24 font-semibold
               text-[#5EAE91]'
                  >
                    PREMIUM UPGRADES
                  </div>
                  <div className='flex flex-row mt-[10px] justify-between text-[12px] text-center leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                    <span className='w-[113px] text-[#5EAE91]'>
                      CANDLES <br />
                      <div className='flex pl-[50px] flex-row items-center'>
                        <span className=' mr-[10px]'>
                          <span className='text-[#5EAE91]'>
                            Y <span className='text-[#D4D4D4]'> | </span>
                          </span>
                          <span className='text-[#EB1D1D]'> F</span>
                        </span>
                        <Image
                          src={'/ico_down_arrow_memory.png'}
                          alt=''
                          width={24}
                          height={24}
                        />
                      </div>
                    </span>
                    <span className='w-[113px] text-[#5EAE91] flex flex-row justify-end items-center'>
                      <span>EXPIRES</span>{' '}
                      <Image
                        src={'/ico_down_arrow_memory.png'}
                        alt=''
                        width={24}
                        height={24}
                        className=''
                      />{' '}
                    </span>
                    <span className='w-[113px] text-[#5EAE91]'>
                      PREMIUM <br /> TRIBUTE
                    </span>
                    <span className='w-[113px] text-[#5EAE91]'>
                      PREMIUM <br /> MOBILE
                    </span>
                    <span className='w-[113px] text-[#5EAE91]'>
                      HIGHLIGHTED <br /> OBITUARY
                    </span>
                    <span className='w-[113px] text-[#5EAE91]'>VIDEO</span>
                  </div>
                </div>
              </th>
              {/* Paid */}
              <th className='w-[90px] py-2 text-center border-r'>
                <div className='flex flex-row justify-center items-center text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#EB1D1D]'>
                  <div>PAID</div>
                  <Image
                    src={'/ico_down_arrow_memory.png'}
                    alt=''
                    width={24}
                    height={24}
                    className=''
                  />{' '}
                </div>
              </th>
              {/* Amount */}
              <th className='w-[102px] py-2 text-center border-r'>
                <div className='flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#EB1D1D]'>
                  AMOUNT
                </div>
              </th>
              {/* Award Code */}
              <th className='w-[103px] py-2 text-center border-r'>
                <div className='flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  AWARD <br /> CODE
                </div>
              </th>
              {/* Open */}
              <th className='w-[83px] py-2 text-center'>
                <div className='flex flex-col text-[12px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  OPEN
                </div>
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className={`border-[0.5px] border-[#A1B1D4] ${
                  index === 0 ? 'bg-[#F7F9FA70]' : ''
                }`}
              >
                <td className='pl-[18px] pr-[2px] h-[64px]  text-left w-[220px] text-[13px] text-[#3C3E41]'>
                  {data.memoryBook}
                </td>
                <td className='w-[102px] h-[64px] flex flex-row gap-x-[4px] justify-center items-center text-center text-[13px] text-black '>
                  <div
                    className={`${
                      data.keeper === 'M'
                        ? 'text-[#3C3E41] '
                        : data.keeper === 'Y'
                        ? 'text-[#1FBE11]'
                        : 'text-[#EB1D1D]'
                    } text-[20px] leading-[23px] font-variation-customOpt20`}
                  >
                    {data.keeper}{' '}
                  </div>
                  <div
                    className={`${
                      data.keeper === '' ? 'hidden' : 'block h-[12px] w-[2px]'
                    }`}
                  >
                    <Image
                      src={'/ico_separator_memory.png'}
                      alt=''
                      width={2}
                      height={12}
                      className='w-[2px] h-[12px]'
                    />
                  </div>

                  <div
                    style={{
                      fontSize: '13px',
                      color: 'transparent',
                      background:
                        'linear-gradient(300deg, #aaa, #D4D4D4, #aaa, #D4D4D4)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      textShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                      fontVariationSettings:
                        "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 13",
                    }}
                  >
                    {data.keeperAmount}
                  </div>
                </td>
                <td className='w-[141px] h-[64px] text-center text-[13px]  text-[#3C3E41] py-3  '>
                  <div className='flex flex-col items-center gap-y-[4px]'>
                    <Image
                      src={data.invoiceImg}
                      alt=''
                      width={18}
                      height={18}
                      className={`${
                        data.invoiceImg === '' ? 'hidden' : 'block '
                      }`}
                    />
                    <div>{data.invoice}</div>
                  </div>
                </td>
                <td className='w-[124px] h-[64px] text-center text-[13px]  text-[#3C3E41]  '>
                  {data.whosKeeper}
                </td>

                <td className='w-[123px] h-[64px] flex flex-row gap-x-[4px] justify-end items-center text-center'>
                  <div
                    className={`${
                      data.candles === 'M'
                        ? 'text-[#3C3E41] '
                        : data.candles === 'Y'
                        ? 'text-[#1FBE11]'
                        : 'text-[#EB1D1D]'
                    } text-[20px] leading-[23px] font-variation-customOpt20`}
                  >
                    {data.candles}{' '}
                  </div>
                  <div
                    className={`${
                      data.candles === '' ? 'hidden' : 'block h-[12px] w-[2px]'
                    }`}
                  >
                    <Image
                      src={'/ico_separator_memory.png'}
                      alt=''
                      width={2}
                      height={12}
                      className='w-[2px] h-[12px]'
                    />
                  </div>

                  {/* <div className="text-[13px] leading-[15px] font-variation-customOpt13 text-[#D4D4D4]"> */}

                  <div
                    style={{
                      fontSize: '13px',
                      color: 'transparent',
                      background:
                        'linear-gradient(300deg, #aaa, #D4D4D4, #aaa, #D4D4D4)',
                      lineHeight: '15px',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      textShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                      fontVariationSettings:
                        "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 13",
                    }}
                  >
                    {data.candlesAmount}
                  </div>

                  {/* </div> */}
                </td>
                <td className='w-[122px] h-[64px] text-center text-[13px] text-[#3C3E41]  '>
                  <div className='flex flex-col items-center gap-y-[4px]'>
                    <Image
                      src={data.expiresImg}
                      alt=''
                      width={18}
                      height={18}
                      className={`${
                        data.expiresImg === '' ? 'hidden' : 'block'
                      }`}
                    />
                    <div>{data.expires}</div>
                  </div>
                </td>
                <td className='w-[122px] h-[64px] pl-[28px] text-center text-[13px]  text-[#3C3E41] '>
                  <div className='flex flex-col items-start gap-y-[4px]'>
                    <Image
                      src={data.premiumTributeImg}
                      alt=''
                      width={18}
                      height={18}
                      className={`${
                        data.premiumTributeImg === '' ? 'hidden' : 'block'
                      }`}
                    />
                    <div
                      style={{
                        fontSize: '13px',
                        color: 'transparent',
                        background:
                          'linear-gradient(300deg, #aaa, #D4D4D4, #aaa, #D4D4D4)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        textShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                        fontVariationSettings:
                          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 13",
                      }}
                    >
                      {data.premiumTribute}
                    </div>
                  </div>
                </td>
                <td className='w-[122px]  pl-[28px] h-[64px] text-center text-[13px] text-[#3C3E41] px-2 '>
                  <div className='flex flex-col items-start gap-y-[4px]'>
                    <Image
                      src={data.premiumMobileImg}
                      alt=''
                      width={18}
                      height={18}
                      className={`${
                        data.premiumMobileImg === '' ? 'hidden' : 'block'
                      }`}
                    />
                    <div
                      style={{
                        fontSize: '13px',
                        color: 'transparent',
                        background:
                          'linear-gradient(300deg, #aaa, #D4D4D4, #aaa, #D4D4D4)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        textShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                        fontVariationSettings:
                          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 13",
                      }}
                    >
                      {data.premiumMobile}
                    </div>
                  </div>
                </td>
                <td className='w-[112px] h-[64px] text-left pl-[18px] text-[13px]  text-[#3C3E41] px-2 '>
                  <div className='flex flex-col items-start gap-y-[4px]'>
                    <Image
                      src={data.highlightedObituaryImg}
                      alt=''
                      width={18}
                      height={18}
                      className={`${
                        data.highlightedObituaryImg === '' ? 'hidden' : 'block'
                      }`}
                    />
                    <div
                      style={{
                        fontSize: '13px',
                        color: 'transparent',
                        background:
                          'linear-gradient(300deg, #aaa, #D4D4D4, #aaa, #D4D4D4)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        textShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                        fontVariationSettings:
                          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 13",
                      }}
                    >
                      {data.highlightedObituary}
                    </div>
                  </div>
                </td>
                <td className='w-[112px] h-[64px] text-left pl-[18px] text-[13px]  text-[#3C3E41]  '>
                  {data.video}
                </td>
                <td className='w-[90px] h-[64px] text-center text-[13px] text-[#3C3E41]  '>
                  <div className='flex flex-row justify-center items-center'>
                    <Image
                      src={data.paidImg}
                      alt=''
                      width={14}
                      height={14}
                      className={`${data.paidImg === '' ? 'hidden' : 'block '}`}
                    />
                  </div>
                  {data.paid}
                </td>
                <td className='w-[102px] h-[64px] text-center text-[#6D778E]'>
                  <div
                    style={{
                      fontSize: data.amount === 'Pending' ? '13px' : '20px',
                      fontWeight: data.amount === 'Pending' ? '400' : '700',
                      color: 'transparent',
                      lineHeight: data.amount === 'Pending' ? '16px' : '23px',
                      background:
                        'linear-gradient(180deg, #aaa, #6D778E, #6D778E)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      textShadow: 'inset 1px 1px 1px rgba(0, 0, 0, 0.25)',
                      fontVariationSettings:
                        data.amount === 'Pending'
                          ? "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 20"
                          : "'slnt' 0,'wdth' 100,'wght' 700,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 20",
                    }}
                  >
                    {data.amount}
                  </div>
                </td>

                <td className='w-[103px] pl-[40px] h-[64px] text-[13px] '>
                  <Image
                    src={data.awardCode}
                    alt=''
                    width={24}
                    height={24}
                    className='mr-0'
                  />
                </td>
                <td className='w-[90px] h-[64px] text-center text-[13px]  text-[#6D778E]'>
                  {data.open}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFinancialsMemory;
