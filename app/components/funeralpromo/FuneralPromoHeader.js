import Image from 'next/image'
import React from 'react'

const FuneralPromoHeader = (props) => {
  return (
    <header className="header-container shadow-[5px_5px_16px_0px_rgba(98,98,98,0.3)] py-[23.34px] px-[20px] md:px-[42px] bg-[#fff] flex items-center justify-between w-full">
      <div className="w-[180px] md:w-[265px] h-auto">
        <Image 
          src="/funeralpromo/Navigation.png" 
          width={265} 
          height={44} 
          alt="Navigation Logo"
          className="w-full h-auto"
          priority
        />
      </div>
      
      <ul className="flex gap-[18px] md:gap-[36px] text-[#1E2125] text-[14px] md:text-[20px] font-normal leading-none items-center">
        {!props.show ? (
          <>
            <li><a href="/" className="no-underline hover:underline">CENIK</a></li>
            <li><a href="/" className="no-underline hover:underline">KAKO ZAČETI</a></li>
            <li><a href="/" className="no-underline hover:underline">PRIJAVI SE</a></li>
          </>
        ) : (
          <>
            <li><a href="/" className="no-underline hover:underline">CENIK</a></li>
            <li><a href="/" className="no-underline hover:underline">KAKO ZAČNEM</a></li>
            <li>
              <a href="/">
                <img 
                  src="/funeralpromo/frame-btn.png" 
                  className='w-[120px] md:min-w-[149px] h-[28px] md:min-h-[35px] object-contain' 
                  alt="Button" 
                />
              </a>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default FuneralPromoHeader;