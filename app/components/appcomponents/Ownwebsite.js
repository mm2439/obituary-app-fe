import React from 'react'
import Link from 'next/link';

const ownWebsite = () => {
  return (
    <div className='relative max-w-[1920px]  h-[748px] tablet:h-[1027px] mobile:h-[1341px] w-full overflow-hidden flex mx-auto justify-center items-center'>

        {/*Main contianer*/}
        <div className='flex w-[1088px] h-[540px] tablet:w-[626px] tablet:h-[783px] mobile:h-[1192px] mobile:w-[297px] flex-col'>

            {/*Header contianer*/}
            <div className='flex w-[669px] h-[172px] tablet:h-[247px] tablet:w-[600px] mobile:w-[297px] mobile:h-[271px] mx-auto flex-col'>

                <div className='flex h-[102px] tablet:h-[150px] mobile:h-[147px] flex-col'>
                    <div className='text-[40px] text-[#3C3E41] font-variation-customOpt40 mobile:text-[28px] mobile:font-variation-customOpt28 mobile:text-center mt-[-6px] tablet:mt-[2px] mobile:mt-0 tablet:text-center leading-[48px]'>Spletno stran si sami izdelate v 30 minutah</div>
                    <div className='text-[24px] text-[#3C3E41] mobile:text-[20px] mobile:font-variation-customOpt20wght400 text-center font-variation-customOpt24 font-bold mt-2 mobile:mt-[11px]'>Bolj enostavno ne gre</div>
                </div>

                <div className='text-[18px] tablet:w-[568px] tablet:h-[81px] tablet:self-center text-[#3C3E41] font-variation-customOpt18 text-center mt-4'>Korak za korakom v naši predlogi zamenjate tekste s svojimi in vstavite svoje slike.</div>
            </div>

            {/*Main contianer*/}
            <div className='flex w-[1014.25px] tablet:w-[626px] mobile:w-[295px] mx-auto mt-12 mobile:mt-[56px] mobile:flex-col'>

                {/*Main contianer for tablet*/}
                <div className='w-[626px] h-[488px] flex-col hidden tablet:flex'>
                    {/*1st coloum container*/}
                    <div className='flex h-[313px]'>
                         <div className='flex w-[295.42px] h-[224px] flex-col items-center'>
                            <img src='/image_check.png' className='w-[88px] h-[88px]'></img>
                            <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-3'>Enostavna izdelava</div>
                            <div className='text-[18px] text-[#3C3E41] font-variation-customOpt18 text-center mt-[13px]'>Vse je avtomatizirano. Skopirajte vsebino iz svoje obstoječe spletne strani in zamenjajte slike s svojimi.</div>
                        </div>

                         <div className='flex w-[295.42px] h-[224px] flex-col items-center ml-[32px]'>
                            <img src='/image_no_picture.png' className='w-[88px] h-[88px]'></img>
                            <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-3'>Še nimate slik? Ni problema!</div>
                            <div className='text-[18px] text-[#3C3E41] font-variation-customOpt18 text-center mt-[13px]'>Če primernih slik trenutno še nimate,  lahko uporabite naše, ki so  priložene in svoje prilepite kasneje.</div>
                        </div>
                    </div>

                    {/*2nd coloum container*/}
                    <div className='flex h-[313px] mt-10'>
                         <div className='flex w-[295.42px] h-[224px] flex-col items-center '>
                            <img src='/image_devices.png' className='w-[88px] h-[88px]'></img>
                            <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-3'>Prilagojeno vsem napravam</div>
                            <div className='text-[18px] text-[#3C3E41] font-variation-customOpt18 text-center mt-[13px]'>Vaša spletna stran bo profesionalnega videza na računalniku, tablici in telefonu.</div>
                        </div>

                        <div className='flex w-[295.42px] h-[224px] bg-[#0A85C2] flex-col items-center ml-[32px]'>
                            <img src='/image_registration.png' className='w-[72px] h-[72px] mt-4'></img>
                            <div className='text-[20px] text-[#FFFFFF] font-variation-customOpt20wght400 font-semibold mt-[13px]'>Registracija</div>
                            <button className="w-[81px] h-[48px] rounded-lg text-[#3C3E41] justify-center items-center self-center mt-[17px] shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] hidden tablet:flex">Vpis</button>
                        </div>
                    </div>
                </div>

                {/*C1 container for desktop*/}
                <div className='w-[295.42px] h-[224px] flex-col items-center flex tablet:hidden'>
                    <img src='/image_check.png' className='w-[88px] h-[88px]'></img>
                    <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-3'>Enostavna izdelava</div>
                    <div className='text-[18px] text-[#3C3E41] font-variation-customOpt18 text-center mt-[13px]'>Vse je avtomatizirano. Skopirajte vsebino iz svoje obstoječe spletne strani in zamenjajte slike s svojimi.</div>
                </div>

                {/*C2 container for desktop*/}
                <div className='w-[295.42px] h-[224px] flex-col items-center desktop:ml-[64px] mobile:mt-12 flex tablet:hidden'>
                    <img src='/image_no_picture.png' className='w-[88px] h-[88px]'></img>
                    <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-3'>Še nimate slik? Ni problema!</div>
                    <div className='text-[18px] text-[#3C3E41] font-variation-customOpt18 text-center mt-[13px]'>Če primernih slik trenutno še nimate,  lahko uporabite naše, ki so  priložene in svoje prilepite kasneje.</div>
                </div>

                {/*C3 container for desktop*/}
                <div className='w-[295.42px] h-[224px] flex-col items-center desktop:ml-[64px] mobile:mt-12 flex tablet:hidden'>
                    <img src='/image_devices.png' className='w-[88px] h-[88px]'></img>
                    <div className='text-[20px] text-[#1E2125] font-variation-customOpt20wght400 font-semibold mt-3'>Prilagojeno vsem napravam</div>
                    <div className='text-[18px] text-[#3C3E41] font-variation-customOpt18 text-center mt-[13px]'>Vaša spletna stran bo profesionalnega videza na računalniku, tablici in telefonu.</div>
                </div>

                {/*Bottom contianer for mobile*/}
                <Link href={"/podjetja"} className="w-full h-[48px] rounded-lg text-black justify-center items-center self-center mt-12 shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] hidden mobile:flex">Začni</Link>
            </div>

            {/*Bottom contianer*/}
            <Link href={"/podjetja"} className="w-[89px] h-[48px] rounded-lg text-black justify-center items-center self-center mt-12 shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] hidden desktop:flex">Začni</Link>
        </div>
    </div>
  )
}

export default ownWebsite;