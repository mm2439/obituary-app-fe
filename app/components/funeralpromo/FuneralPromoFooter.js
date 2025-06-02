import React from 'react'

const FuneralPromoFooter = () => {
  return (
    <footer className='bg-[#083545] px-[301px]'>
      <div className="first-container flex gap-[185.93px] py-[29px]">
        <img src="/funeralpromo/logo-footer.png" className='w-[159.57px] h-[20px]' alt="" />

        <ul className='flex text-[14px] leading-[24px] font-normal gap-5 text-[#DAEBF1]'>
          <li>Začetna</li>
          <li className='list-disc marker:#DAEBF1'>Stran za pogrebna podjetja</li>
          <li className='list-disc marker:#DAEBF1'>Cvetličarne</li>
        </ul>
        
      </div>

      <div className="border-b" style={{ borderColor: "#6D778E" }}>
        {/* content */}
      </div>

    </footer>
  )
}

export default FuneralPromoFooter