import Image from 'next/image'
import React from 'react'

const FuneralPromoHeader = (props) => {
  return (
         <header className="header-container shadow-[5px_5px_16px_0px_rgba(98,98,98,0.3)] py-[23.34px] px-[42px] bg-[#fff] flex items-center justify-between">
          <Image src="/funeralpromo/Navigation.png" width={265} height={44} alt="Navigation Logo" />
          <ul className="flex gap-[36px] text-[#1E2125] text-[20px] font-normal leading-none items-center">
           
          {!props.show && (

          <>
            <li><a href="/" className="no-underline">CENIK</a></li>
            <li><a href="/" className="no-underline">KAKO ZAČETI</a></li>
            <li><a href="/" className="no-underline">PRIJAVI SE</a></li>
          </>
          )}
           
           
       {props.show && (
        <>
          <li><a href="/" className="no-underline">CENIK</a></li>
          <li><a href="/" className="no-underline">KAKO ZAČNEM</a></li>
          <li><a href="/" className="no-underline"><img src="/funeralpromo/frame-btn.png" alt="" /></a></li>
        </>
      )}

          </ul>
        </header>
  )
}

export default FuneralPromoHeader