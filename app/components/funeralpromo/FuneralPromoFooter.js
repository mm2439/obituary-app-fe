import React from 'react'

const FuneralPromoFooter = () => {
  return (
    <div className="bg-[#083545]">
      <footer className='bg-[#083545] px-4 md:px-8 lg:px-[301px]'>
        <div className="first-container flex flex-col md:flex-row gap-6 md:gap-[50px] lg:gap-[185.93px] py-6 md:py-[29px]">
          <img 
            src="/funeralpromo/logo-footer.png" 
            className='w-[159.57px] h-[20px] mx-auto md:mx-0' 
            alt="Footer logo" 
          />

          <ul className='flex flex-wrap justify-center md:justify-start text-sm md:text-[14px] leading-[24px] font-normal gap-3 md:gap-5 text-[#DAEBF1]'>
            <li>Začetna</li>
            <li className='hidden md:list-disc marker:text-[#DAEBF1]'>Stran za pogrebna podjetja</li>
            <li className='hidden md:list-disc marker:text-[#DAEBF1]'>Cvetličarne</li>
            <li className='md:hidden'>• Stran za pogrebna podjetja</li>
            <li className='md:hidden'>• Cvetličarne</li>
          </ul>
        </div>
      </footer>

      <div className='w-full flex justify-center bg-[#083545] px-4'>
        <hr className="border-t border-[#6D778E] w-full max-w-[1080px] mx-auto" />
      </div>
 
      <footer className='bg-[#083545] px-4 md:px-8 lg:px-[301px]'>
        <div className="second-container flex flex-col md:flex-row gap-4 md:gap-[50px] lg:gap-[185.93px] py-4 md:py-[8.53px] items-center justify-between">
          <p className='text-xs md:text-[12px] leading-[24px] font-normal text-[#C7C7C7] text-center md:text-left'>
            © 2025 Vse pravice zadržane.
          </p>

          <ul className='flex text-sm md:text-[14px] leading-[24px] font-normal gap-4 md:gap-[30.5px] text-[#DAEBF1] items-center'>
            <li className='hidden md:block'>Pišite nam</li>
            <li>
              <img 
                src="/funeralpromo/facebook.png" 
                className='w-[18px] h-[18px]' 
                alt="Facebook" 
              />
            </li>
            <li>
              <img 
                src="/funeralpromo/insta.png" 
                className='w-[18px] h-[18px]' 
                alt="Instagram" 
              />
            </li>
            <li className='md:hidden'>Pišite nam</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default FuneralPromoFooter