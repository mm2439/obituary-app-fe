import React from 'react';
import Link from 'next/link';

const OfficialOpening = () => {
    return (
        <div className='w-full bg-[#BCD7F4] mobile:bg-[#FFFFFF]'>
            <div className='max-w-[1920px] w-full flex mobile:hidden overflow-hidden h-[284px] mx-auto'>
                <div className='w-1/3 tablet:w-[22%] h-full'>
                    <img src='/roza_cvet.avif' alt='flower' className='w-full h-full object-cover' />
                </div>
                <div className='bg-[#BCD7F48C] tablet:w-[78%]  w-2/3 h-full'
                style={{
                    background: 'linear-gradient(0deg, rgba(188, 215, 244, 0.55), rgba(188, 215, 244, 0.55)), linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(0, 0, 0, 0) 100%)',
                    backgroundSize: '100% 100%, 100% 100%',
                    backgroundPosition: 'center, center',
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundAttachment: 'fixed, fixed',
                    backgroundBlendMode: 'normal, normal',
                    backgroundOpacity: '1, 1',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                }}
                >
                    <div className='h-full w-full  flex flex-col justify-center items-center'>
                        <div className=' h-[174px] flex flex-col items-center tablet:items-end'>
                            <h1 className='text-[40px] text-center leading-[48px] font-variation-customOpt40 font-normal text-[#3C3E41]'>
                                Uradna otvoritev je 30.junija
                            </h1>

                            <p className='text-[24px] leading-[48px] font-variation-customOpt24 font-bold text-[#3C3E41]'>
                                Izdelajte svojo spletno stran še pravočasno
                            </p>

                            <div className="w-[122px] h-[48px] mt-[24px] bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] desktop:mx-auto flex justify-center items-center rounded-lg">
                            <Link
                                href={"/companyregistrationpage"}
                                className="w-[250px] h-[53px] shrink-0 rounded-full text-white flex justify-center items-center self-center shadow-custom-light-dark bg-gradient-to-b from-[#0D94E8] to-[#1860A3] text-[18px]"
                                style={{
                                boxShadow: '0px 4px 5px 0px #00000038, 0px 2px 3px 0px #00000073',
                                }}
                            >
                                Sodelujmo
                            </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden mobile:flex w-full h-[218px] justify-center items-center'>
                <div className='w-[292px] h-[128px] flex flex-col'>
                    <h1 className='text-[#3C3E41] mx-auto text-[28px] leading-[48px] font-variation-customOpt28'>
                        Sodelujmo!
                    </h1>

                    <div className="w-[292px] h-[48px] mt-[32px] bg-[#BCD7F4] mx-auto flex justify-center items-center rounded-lg">
                        <Link href="#" className="font-variation-customOpt16 leading-[24px] text-[16px] text-[#1E2125] text-center">
                            Registracija
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OfficialOpening;