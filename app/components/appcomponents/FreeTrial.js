import React from 'react'

const FreeTrial = () => {
    return (
        <div className='w-full bg-[#E0E9F3]'>
            <div className='max-w-[1920px] w-full mx-auto overflow-hidden flex 
            justify-center items-center'>
                <div className='max-w-[1086px] w-full py-[65px] desktop:py-[105px] tablet:py-[75px] flex flex-col items-center'>
                    <div className='w-[471px] mobile:w-[288px] mobile:text-center flex flex-col items-center'>
                        <div className='text-[40px] mobile:text-[28px] mobile:leading-[40px]  leading-[48px] mobile:font-variation-customOpt28 font-variation-customOpt40 text-[#3C3E41]'>
                        50 dni brezplačnega testiranja
                        </div>

                        <div className='text-[24px] mobile:text-[20px] mobile:leading-[40px] leading-[48px] mobile:font-variation-customOpt20 font-variation-customOpt24 font-bold text-[#3C3E41]'>
                        Brez vsakega rizika...
                        </div>
                    </div>

                    <div className='w-[650px] mobile:w-full text-[18px] text-[#3C3E41] mt-[16px] px-11 text-center flex justify-center leading-[27px] font-variation-customOpt18'>
                    ...in tudi kasneje brez zavezujoče pogodbe. To je pravo partnerstvo!
                     Tako zelo smo prepričani, da vam bodo naše rešitve koristile. 
                    </div>

                    <div className='text-[18px] text-[#3C3E41] mt-[48px]  px-11 tablet:w-[600px] text-center flex justify-center 
                    mobile:leading-[32px] leading-[48px] font-variation-customOpt18'>
                        <div className='flex mobile:hidden'>
                        Brezplačna izdelava. Brezplačna domena in gostovanje. Brezplačno testiranje 50 dni. Brez pogodbe. 
                        </div>

                        <div className='hidden mobile:flex flex-col mx-auto '>
                            <div>
                            Brezplačna izdelava.
                            </div>

                            <div className='whitespace-nowrap'>
                            Brezplačna domena in gostovanje.
                            </div>

                            <div>
                            Brezplačno testiranje 50 dni.
                            </div>
                            <div>
                            Brez pogodbe. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeTrial