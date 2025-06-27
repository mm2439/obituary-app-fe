import React from 'react'

const FuneralCompanies = () => {
  return (
    <div className='relative max-w-[1920px] bg-[#E0E9F3] h-[570px] tablet:h-[597px] mobile:h-[545px] w-full overflow-hidden flex mx-auto justify-center items-center'>
        
        {/*Main Container for desktop*/}
        <div className='w-[1088px] h-[302px] hidden desktop:flex'>

            {/*header container*/}
            <div className='flex w-[611px] flex-col'>
                <h1 className='text-[40px] text-[#3C3E41] font-variation-customOpt40 mt-[56px] w-[707px]'>Celovite rešitve za pogrebna podjetja</h1>
                <div className='text-[24px] text-[#3C3E41] font-variation-customOpt24 font-bold mt-4'>Vaša nova spletna stran</div>
                <button className='w-[140px] h-[48px] flex items-center justify-center text-[16px] leading-[24px] font-normal text-[#000000] bg-[#BCD7F4] mt-[75px] rounded-[8px]'
                style={{
                  boxShadow: '5px 5px 10px 0px #C2C2C280',
                }}
                >Primer strani</button>  
            </div>
            
            {/*image container*/}
            <img src='/pog_laptop.png' className='flex w-[519px]'></img>
        </div>

        {/*Main container for tablet & mobile*/}
        <div className='w-[600px] h-[457px] mobile:w-[341px] mobile:h-[402px] flex flex-col desktop:hidden'>

             {/*header container*/}
             <div className='flex w-[600px] h-[91px] mobile:w-[296px] mobile:h-[96px] mobile:mx-auto flex-col'>
                <div className='text-[40px] text-[#3C3E41] mobile:text-[28px] mobile:font-variation-customOpt28 mobile:text-center font-variation-customOpt40 mt-[-8px] mobile:mt-[-11px] mobile:leading-[48px]'>Celovite rešitve za pogrebna podjetja</div>
                <div className='text-[24px] text-[#3C3E41] font-variation-customOpt24 font-bold mt-[9px] self-center hidden tablet:flex'>Vaša nova spletna stran</div>
            </div>

               {/*image for mobile */} 
              <img src='/pog_mobile.png' className='w-[391px] self-center mt-8 hidden mobile:flex'></img>

              {/*image for tablet*/}
              <img src='/pog_laptop.png' className='w-[519px] mobile:w-[391px] self-center mt-[64px] mobile:mt-[44.9px] hidden tablet:flex'></img>

              {/*Bottom text*/}
              <div className='text-[20px] text-[#3C3E41] font-variation-customOpt20wght400 font-bold mt-[41px] self-center hidden mobile:flex'>Vaša nova spletna stran</div>
        </div>

        
    </div>
  )
}

export default FuneralCompanies;