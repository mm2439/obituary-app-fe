import Image from 'next/image'
import React from 'react'

const FuneralPromoHeader = () => {
  return (
          <header className="header-container py-[23.34px] px-[42px] bg-[#fff] flex justify-between">
            <Image src="/funeralpromo/Navigation.png" width={265} height={44} />
            <ul className='flex gap-[36px] text-[#1E2125] text-[20px] leading-[24px] font-normal'>
                <li><a href='/' className='no-underline p-0 m-0'>CENIK</a></li>
                <li><a href='/' className='no-underline'>KAKO ZAČETI</a></li>
                <li><a href='/' className='no-underline'>PRIJAVI SE</a></li>
            </ul>

        </header>
  )
}

export default FuneralPromoHeader