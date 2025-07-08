'use client';
import React from 'react';
import Image from 'next/image';
import SideMenuAdmin from '../components/appcomponents/SideMenuAdmin';
import Dropdown from '../components/appcomponents/Dropdown';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Icon } from '@iconify/react';

const AdminAdvertisers = () => {
  const tableData = [
    {
      advertiser: 'Best Candles',
      city: 'San Diego',
      what: 'Other',
      where: { text: 'Main Page', subText: '' },
      duration: 'Week',
      notesIcon: <Icon icon='mingcute:edit-line' height={'22'} color='grey' />,
      invoice: {
        amount: '30 €',
        icon: <Icon icon='solar:eye-outline' height={'22'} color='black' />,
      },
      when: '21.06.2025',
      expireDate: '21.06.2025',
      paid: '14.05.2024',
      amount: '30€',
      gift: false,
      awardCodeImg: (
        <Icon icon='mingcute:edit-line' height={'22'} color='grey' />
      ),
    },
    {
      advertiser: 'Gamma florist',
      city: '',
      what: 'Florists',
      where: { text: 'fun.Company Listing', subText: 'Bottom listing' },
      duration: 'Week',
      notesIcon: (
        <Icon icon='mingcute:edit-line' height={'22'} color='#123597' />
      ),
      invoice: {
        amount: '10 €',
        icon: <Icon icon='solar:eye-outline' height={'22'} color='black' />,
      },
      when: '21.06.2025',
      expireDate: '21.06.2025',
      paid: '14.05.2024',
      amount: '10€',
      gift: false,
      awardCodeImg: (
        <Icon icon='mingcute:edit-line' height={'22'} color='grey' />
      ),
    },
    {
      advertiser: 'Zeta Florists',
      city: '',
      what: 'Florists',
      where: { text: 'Florists Listing Page', subText: '' },
      duration: 'Month',
      notesIcon: (
        <Icon icon='mingcute:edit-line' height={'22'} color='#123597' />
      ),
      invoice: {
        amount: '30 €',
        icon: <Icon icon='solar:eye-outline' height={'22'} color='black' />,
      },
      when: '21.06.2025',
      expireDate: '21.06.2025',
      paid: '',
      amount: 'Pending',
      gift: false,
      awardCodeImg: (
        <Icon icon='mingcute:edit-line' height={'22'} color='grey' />
      ),
    },
    {
      advertiser: 'Headstones',
      city: '',
      what: 'Other',
      where: { text: 'Main Page', subText: '' },
      duration: 'Week',
      notesIcon: (
        <Icon icon='mingcute:edit-line' height={'22'} color='#123597' />
      ),
      invoice: {
        amount: '',
        icon: '',
      },
      when: '21.06.2025',
      expireDate: '21.06.2025',
      paid: '',
      amount: '',
      gift: true,
      awardCodeImg: (
        <Icon icon='mingcute:edit-line' height={'22'} color='grey' />
      ),
    },
    {
      advertiser: 'Ceremony Events',
      city: '',
      what: 'Other',
      where: { text: 'Side Box FunC Listing', subText: '' },
      duration: 'Month',
      notesIcon: <Icon icon='mingcute:edit-line' height={'22'} color='grey' />,
      invoice: {
        amount: '30 €',
        icon: <Icon icon='solar:eye-outline' height={'22'} color='black' />,
      },
      when: '21.06.2025',
      expireDate: '21.06.2025',
      paid: '14.05.2024',
      amount: '30€',
      gift: false,
      awardCodeImg: (
        <Icon icon='mingcute:edit-line' height={'22'} color='grey' />
      ),
    },
  ];

  return (
    <div className='w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col'>
      <div className='w-full h-[110px] py-[2px] flex flex-row justify-start gap-x-[15px]'>
        <div
          className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] bg-[#fafbfc] flex flex-col justify-between `}
        >
          <div className='flex justify-between items-start'>
            <div>
              <div className='text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E] text-center'>
                {'44 '}
                <span className='text-[32px] font-light text-[#D4D4D4]'>|</span>
                <span className='text-[32px] font-bold  text-[#CCCCCC]'>
                  {' 21'}
                </span>
              </div>
            </div>
            <div className='flex flex-col justify-end'>
              <div className='text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-col items-end gap-x-[4px]'>
                <div className='text-[#6D778E]'>Previous month</div>
                <div className='text-[px] text-[#5EAE91] font-bold text-[16px] leading-[19px] font-variation-customOpt16'>
                  {'40 '}
                  <span className='text-[px] font-normal text-[#acaaaa]'>
                    |
                  </span>
                  <span className='text-[12px]'>{' 16'}</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>

          <div className='flex flex-row justify-between'>
            <div className='flex flex-col justify-between'>
              <div className='text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]'>
                {'Total Advertisers '}
                <span className='text-[px] font-light text-[#D4D4D4]'>|</span>
                <span className='text-[#CCCCCC]'>{' Florists '}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[310px] border-[2px] rounded-[8px] px-[16px] py-[14px]
                "bg-[#fafbfc] border-[#0A85C2] h-[110px] bg-[#e8f4fc] flex flex-col justify-between `}
        >
          <div className='flex justify-between items-start'>
            <div>
              <div className='text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E] text-center'>
                {'440€ '}
                <span className='text-[32px] font-light text-[#D4D4D4]'>|</span>
                <span className='text-[32px] font-bold  text-[#CCCCCC]'>
                  {' 210€'}
                </span>
              </div>
            </div>
            <div className='flex flex-col justify-end'>
              <div className='text-[12px] leading-[14px] font-variation-customOpt12 text-[#1E2125] flex flex-col items-end gap-x-[4px]'>
                <div className='text-[#6D778E]'>Previous month</div>
                <div className='text-[px] text-[#5EAE91] font-bold text-[16px] leading-[19px] font-variation-customOpt16'>
                  {'340 '}
                  <span className='text-[px] font-normal text-[#acaaaa]'>
                    |
                  </span>
                  <span className='text-[12px]'>{' 190'}</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>

          <div className='flex flex-row justify-between'>
            <div className='flex flex-col justify-between'>
              <div className='text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]'>
                {'Revenue: Advertisers '}
                <span className='text-[px] font-normal text-[#acaaaa]'>|</span>
                <span className='text-[#CCCCCC]'>{' Florists only'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[80px] '>
        <div
          className='flex flex-row
           items-center justify-end space-x-[16px]'
        >
          <div className='flex flex-row space-x-[16px] '>
            <div className='flex h-[48px]'>
              <Dropdown
                label={'Month'}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={''}
                isFromFlowerGreenBgTablet={false}
                onSelect={() => console.log('')}
              />
            </div>
            <Dropdown
              label={'Year'}
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
              <th className='pl-[16px] w-[210px] mt-[8px] flex flex-row items-center py-2 text-center border-r pb-4'>
                <div className=' text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  ADVERTISER
                </div>
                <Image
                  src={'/ico_down_arrow_memory.png'}
                  alt=''
                  width={24}
                  height={24}
                />
              </th>
              <th className='w-[195px] py-2 text-center border-r '>
                <div className='flex justify-start items-center'>
                  <div className=' text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                    CITY
                  </div>
                </div>
              </th>
              <th className='w-[102px] py-2 text-center border-r '>
                <div className='flex justify-start items-center'>
                  <div className=' text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                    WHAT
                  </div>
                </div>
              </th>
              <th className='w-[240px] py-2 text-center border-r '>
                <div className='flex justify-start items-center'>
                  <div className=' text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                    WHERE
                  </div>
                  <Image
                    src={'/ico_down_arrow_memory.png'}
                    alt=''
                    width={24}
                    height={24}
                  />
                </div>
              </th>
              <th className='w-[102px] py-2 text-center border-r '>
                <div className='flex justify-start items-center'>
                  <div className=' text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                    DURATION
                  </div>
                </div>
              </th>
              <th className='w-[102px] py-2 text-center border-r '>
                <div className='flex justify-start items-center'>
                  <div className=' text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                    WHEN
                  </div>
                  <Image
                    src={'/ico_down_arrow_memory.png'}
                    alt=''
                    width={24}
                    height={24}
                  />
                </div>
              </th>
              <th className='w-[102px] py-2 text-center border-r '>
                <div className='flex justify-start items-center'>
                  <div className=' text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                    EXPIRE
                  </div>
                  <Image
                    src={'/ico_down_arrow_memory.png'}
                    alt=''
                    width={24}
                    height={24}
                  />
                </div>
              </th>
              <th className='w-[154px] py-2 text-center border-r'>
                <div className='flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  INVOICE
                </div>
              </th>
              <th className='w-[102px] py-2 text-start border-r '>
                <div className='flex justify-start items-center flex-start'>
                  <div className=' text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[red]'>
                    PAID
                  </div>
                  <Image
                    src={'/ico_down_arrow_memory.png'}
                    alt=''
                    width={24}
                    height={24}
                  />
                </div>
              </th>
              <th className='w-[125px] pl-[10px] py-2 text-center border-r flex'>
                <div className='flex flex-col flex-start text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[red]'>
                  AMOUNT
                </div>
              </th>
              <th className='w-[120px] py-2 text-start'>
                <div className='flex flex-col flex-start text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  GIFT
                </div>
              </th>
              <th className='w-[120px] py-2 text-start border-r'>
                <div className='flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  NOTES
                </div>
              </th>
              <th className='w-[103px] py-2 text-center border-r'>
                <div className='flex flex-col text-[13px] leading-[16px] font-variation-customOpt12 font-semibold text-[#3C3E41]'>
                  AWARD <br /> CODE
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
                <td className='pl-[18px] h-[64px]  text-left w-[210px] text-[13px] text-[#3C3E41]'>
                  {data.advertiser}
                </td>
                <td className='pl-[px] h-[64px]  text-left w-[135px] text-[13px] text-[#3C3E41]'>
                  {data.city}
                </td>
                <td className='pl-[px] h-[64px]  text-left w-[135px] text-[13px] text-[#3C3E41]'>
                  {data.what}
                </td>
                <td className='pl-[px] h-[64px]  text-left w-[240px] text-[13px] text-[#3C3E41]'>
                  {data.where.text} <br />
                  {data.where.subText}
                </td>
                <td className='pl-[px] h-[64px]  text-left w-[135px] text-[13px] text-[#3C3E41]'>
                  {data.duration}
                </td>
                <td className='w-[124px] h-[64px] text-start text-[13px]  text-[#3C3E41]  '>
                  {data.when}
                </td>
                <td className='w-[124px] h-[64px] text-start text-[13px]  text-[#3C3E41]  '>
                  <span>{data.expireDate}</span>
                </td>
                <td className='w-[120px] h-[64px] text-center text-[13px]  text-[#3C3E41] py-3'>
                  <div className='flex flex-col items-center'>
                    {data.invoice.icon}
                    <div className='flex flex-row gap-1 items-center text-[grey]'>
                      {data.invoice.amount}
                    </div>
                  </div>
                </td>
                <td className='w-[124px] h-[64px] text-start text-[13px]  text-[#3C3E41]  '>
                  {data.paid}
                </td>
                <td className='w-[124px] pl-[20px] h-[64px] text-start text-[13px]  text-[#3C3E41]  '>
                  {data.amount}
                </td>
                <td className='w-[124px] h-[64px] text-start text-[13px]  text-[#3C3E41]  '>
                  {data.gift && (
                    <Icon
                      icon='material-symbols:circle'
                      color='#EB1D1D'
                      height={14}
                    />
                  )}
                </td>
                <td className='w-[120px] h-[64px] pl-[10px] text-center text-[13px]  text-[#3C3E41] py-3  '>
                  <div className='flex flex-col items-start gap-y-[4px]'>
                    {data.notesIcon}
                  </div>
                </td>
                <td className='w-[103px] pl-[30px] h-[64px] text-[13px] '>
                  {data.awardCodeImg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAdvertisers;
