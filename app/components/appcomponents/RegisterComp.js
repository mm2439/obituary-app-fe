import Link from 'next/link'
import React from 'react'


const RegisterComp = () => {
  return (
    <div className='relative max-w-[1920px] bg-[#eef2f5] py-[65px] desktop:py-[105px] tablet:py-[75px] w-full overflow-hidden flex mx-auto justify-center items-center'>

        {/*Main contianer*/}
        <div className='flex w-[1088px] h-[312px]  tablet:w-[619px] tablet:h-[521px] mobile:h-[747px] mobile:w-[297px] flex-col'>
    
            {/*Main contianer*/}
            <div className='flex w-[1014.25px] tablet:w-[619px] mobile:w-[295px] mx-auto mobile:flex-col tablet:flex-col'>

                {/*Main contianer for tablet*/}
                <div className='w-[619px] h-[424px] flex-col hidden tablet:flex'>
                    {/*1st coloum container*/}
                    <div className='flex h-[200px]'>
                        <div className='w-[295.42px] h-[200px] flex-col items-center '>
                            <img src='/image_registration_desktop.png' className='w-[64px] h-[64px] mx-auto'></img>
                            <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 text-center font-semibold mt-3'>Registrirajte se</div>
                            <div className='text-[16px] text-[#3C3E41] font-variation-customOpt16 text-center mt-[13px] leading-[27px]'>Poslali vam bomo dodatna pojasnila in z vnašanjem svojih testov in slik lahko pričnete takoj.</div>
                        </div>

                        <div className='w-[295.42px] h-[200px] flex-col items-center ml-6'>
                            <img src='/image_posting.png' className='w-[64px] h-[64px] mx-auto'></img>
                            <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 text-center font-semibold mt-3'>Objava v 48 urah</div>
                            <div className='text-[16px] text-[#3C3E41] font-variation-customOpt16 text-center mt-[13px] leading-[27px]'>Ko potrdite vnos vseh podatkov, bomo vašo stran pripravili in najkasneje v dveh dneh tudi objavili.</div>
                        </div>

                 </div>

                    {/*2nd coloum container*/}
                    <div className='flex h-[200px] mt-6'>
                    <div className='w-[295.42px] h-[200px] flex-col items-center '>
                            <img src='/image_tablet_flexibility.png' className='w-[64px] h-[64px] mx-auto'></img>
                            <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 text-center font-semibold mt-3'>Fleksibilnost</div>
                            <div className='text-[16px] text-[#3C3E41] font-variation-customOpt16 text-center mt-[13px] leading-[27px]'>Vsebino lahko kadarkoli spreminjate glede na potrebe, praznike, posebne promocije. Naj vaša stran živi!</div>
                        </div>

                        <div className='flex w-[295.42px] h-[200px] flex-col items-center ml-6'>
                            <img src='/image_all_devices.png' className='w-[64px] h-[64px]'></img>
                            <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 text-center font-semibold mt-3'>Prilagojeno vsem napravam</div>
                            <div className='text-[18px] text-[#3C3E41] font-variation-customOpt18 text-center mt-[13px] leading-[27px] '>Vaša spletna stran bo profesionalnega videza na računalniku, tablici in telefonu.</div>
                        </div>
                    </div>
                </div>

                {/*C1 container for desktop*/}
                <div className='w-[295.42px] h-[200px] flex-col items-center flex tablet:hidden'>
                    <img src='/image_registration_desktop.png' className='w-[64px] h-[64px]'></img>
                    <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-[13px]'>Registrirajte se</div>
                    <div className='text-[16px] text-[#3C3E41] font-variation-customOpt16 text-center mt-[13px] leading-[27px]'>Poslali vam bomo dodatna pojasnila in z vnašanjem svojih testov in slik lahko pričnete takoj.</div>
                </div>

                {/*C2 container for desktop*/}
                <div className='w-[295.42px] h-[200px] flex-col items-center flex desktop:ml-16 tablet:hidden mobile:mt-6'>
                    <img src='/image_posting.png' className='w-[64px] h-[64px]'></img>
                    <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-[13px]'>Objava v 48 urah</div>
                    <div className='text-[16px] text-[#3C3E41] font-variation-customOpt16 text-center mt-[13px] leading-[27px]'>Ko potrdite vnos vseh podatkov, bomo vašo stran pripravili in najkasneje v dveh dneh tudi objavili.</div>
                </div>

                
                {/*C3 container for desktop*/}
                <div className='w-[295.42px] h-[200px] flex-col items-center flex desktop:ml-16 tablet:hidden mobile:mt-6'>
                    <img src='/image_ flexibility.png' className='w-[64px] h-[64px] hidden desktop:flex'></img>
                    <img src='/image_tablet_flexibility.png' className='w-[64px] h-[64px] mx-auto hidden mobile:flex'></img>
                    <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-[13px]'>Fleksibilnost</div>
                    <div className='text-[16px] text-[#3C3E41] font-variation-customOpt16 text-center mt-[13px] leading-[27px]'>Vsebino lahko kadarkoli spreminjate glede na potrebe, praznike, posebne promocije. Naj vaša stran živi!</div>
                </div>

                {/*Bottom contianer for mobile*/}
                <Link href={"/companyregistrationpage"} className='self-center hidden mobile:flex w-full mt-[51px]'>
                    <div className="w-full h-12 rounded-lg text-black flex justify-center items-center shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF]">
                        Registriraj se
                    </div>
                </Link>

                {/*Bottom contianer for tablet*/}
                <Link href={"/companyregistrationpage"} className='self-center hidden tablet:flex'>
                    <div className="w-full tablet:w-[295px] h-[48px] rounded-lg text-black justify-center items-center self-center mt-[51px] shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] hidden tablet:flex">Začni</div>
                </Link>

            </div>

            {/*Bottom contianer for desktop*/}
            <Link href={"/companyregistrationpage"} className='self-center hidden desktop:flex'>
                <div className="w-[141px] h-[48px] rounded-lg text-[#1E2125] justify-center items-center hidden desktop:flex mt-16 shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF]  text-[16px] font-variation-customOpt16">Registriraj se</div>
            </Link>

        </div>
    </div>
  )
}

export default RegisterComp