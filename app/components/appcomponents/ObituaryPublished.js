import React from 'react';
import Image from 'next/image';
import imgFlag from '@/public/img_Flag.png';
import { format } from 'date-fns';

const ObituaryPublished = ({ set_Id, setModal, data }) => {
  return (
    <div className=' mobile:h-[263px] mx-auto border-t-[1px] border-b-[1px] border-[#DCE4E4] tablet:h-[311px] h-[418px] w-full flex items-center overflow-hidden bg-[#FFFAF826]'>
      {/* Main Container */}
      <div className='max-w-[1042] w-full h-[303px] flex flex-col justify-center items-center'>
        {/* Container for first details */}
        {/* <div className="desktop:w-[993px] h-[128px] flex flex-row mobile:w-full mobile:mr-[32px] mobile:ml-[32px] mobile:flex-col mobile:h-[202px] bg-blue-500 tablet:w-[534px] tablet:mx-auto justify-between"> */}
        <div
          className='desktop:w-[993px] h-[128px] flex flex-row tablet:w-[534px] tablet:mx-auto justify-between 
        mobile:w-full mobile:px-[32px] mobile:flex-col mobile:h-[202px]'
        >
          {/* First row details */}
          <div className='desktop:w-[496px] tablet:w-[496px] h-full flex flex-col items-start'>
            <div className='block tablet:hidden mobile:hidden text-[16px] text-[#1E2125] leading-[18.75px] font-variation-customOpt16 ml-[2px]'>
              This obituary was published on{' '}
              {data && data.createdTimestamp
                ? format(new Date(data.createdTimestamp), 'dd.MM.yyyy')
                : 'N/A'}{' '}
              by{' '}
            </div>
            <div className='hidden tablet:block mobile:block text-[14px] text-[#1E2125] leading-[18.75px] font-variation-customOpt16 mt-[5px]'>
              To osmrtnico je dne{' '}
              {data && data.createdTimestamp
                ? format(new Date(data.createdTimestamp), 'dd.MM.yyyy')
                : 'N/A'}{' '}
              objavil:
            </div>

            <div className='font-variation-customOpt16 text-[16px] text-[#1E2125] leading-[18.75px] desktop:mt-[13px] tablet:mt-[17px] mobile:mt-[20px] desktop:ml-[2px]'>
              {data && data.User
                ? data.User.role === 'User'
                  ? data.User.name || ''
                  : data.User.company || ''
                : ''}
            </div>
            <div className='block tablet:hidden mobile:hidden leading-[16.41px] text-[14px] text-[#414141] mt-[4px] ml-[2px]'>
              {data && data.User && data.User.region ? data.User.region : ''}
              {data && data.User && data.User.city ? `, ${data.User.city}` : ''}
            </div>
            <div className='block tablet:hidden mobile:hidden leading-[16.41px] text-[14px] text-[#414141] mt-[10px] ml-[2px]'>
              {data && data.User && data.User.phone
                ? `Tel. ${data.User.phone}`
                : ''}
            </div>
            <div className='block tablet:hidden mobile:hidden leading-[16.41px] text-[14px] text-[#414141] mt-[9px] ml-[2px]'>
              {(data && data.User && data.User.pageLink) || ''}
            </div>
            <div className='desktop:hidden tablet:block mobile:block text-[12px] font-variation-customOpt12 text-[#414141]'>
              {(data && data.User && data.User.pageLink) || ''}
            </div>
          </div>

          {/* Second row details */}
          <div className='desktop:w-[496px] tablet:w-[496px] h-full flex flex-col items-end'>
            <div className='desktop:mr-[18px] tablet::mr-[18px] mobile:mt-[-7px] text-[12px] text-[#414141] leading-[14.06px] flex tablet:hidden flex-row'>
              <div className='mr-[8px] ml-[6px]'>
                <Image
                  src={imgFlag}
                  alt='imgPrevious'
                  className=' w-[16px] h-[16px] mr-[-4px]'
                />
              </div>
              <div
                onClick={() => {
                  set_Id('error_report'), setModal(true);
                }}
                className='mt-[1px] '
              >
                Sporoči napake
              </div>
            </div>
            <div className='leading-[16.41px] text-[14px] text-[#414141] desktop:mt-[24px] mobile:mt-[16px] tablet:mt-[8px] desktop:mr-[4px] tablet:mr-[4px]'>
              Last changes:
            </div>
            {/* <div className='leading-[14.06px] text-[12px] desktop:mr-[3px] tablet:mr-[3px] mt-[4px] font-variation-customOpt12 text-[#414141]'>
              <div>Grief Book sign: Alfred G. 21.12.2023</div>
            </div>
            <div className='leading-[14.06px] text-[12px] mr-[3px] mt-[2px] mobile:mt-[3px] mobile:mr-[0px] font-variation-customOpt12 text-[#414141]'>
              <div>Tribute: Ahmed Omar G. 17.12.2023</div>
            </div>
            <div className='leading-[14.06px] text-[12px] mr-[3px] mobile:mt-[3px] mobile:mr-[0px] mt-[4px] font-variation-customOpt12 text-[#414141]'>
              <div>Sympathy Message: G.K., 15.12.2023 </div>
            </div> */}

            <div
              onClick={() => {
                set_Id('error_report'), setModal(true);
              }}
              className='mr-[3px] mt-[15px] text-[12px] text-[#414141] leading-[14.06px] hidden tablet:flex flex-row'
            >
              <div className='mr-[8px] ml-[6px]'>
                <Image
                  src={imgFlag}
                  alt='img_Flag'
                  className=' w-[16px] h-[16px] mr-[-4px]'
                />
              </div>
              <div className='mt-[1px] '>Sporoči napake</div>
            </div>
          </div>
        </div>

        <div className='max-w-[1041px] w-full desktop:mt-[94px] tablet:mt-[31.33px] mobile:mt-10 flex flex-col items-center'>
          <div className='text-[#1E2125] text-[20px] mobile:text-[18px] mobile:font-variation-customOpt14 mobile:w-[300px] leading-[23.44px] font-variation-customOpt40 text-center'>
            Želite biti obveščeni o spremembah na tej spominski strani?
          </div>

          <div className='text-center hidden desktop:flex w-[620px] text-[12px] mt-[16px] text-[#414141] leading-[14.06px] font-variation-customOpt12'>
            Vpišite se v Žalno knjigo, izrazite sožalje in vse spremembe bodo
            redno beležene v vašem uporabniškem računu, hkrati pa boste po
            spletni pošti še pravočasno obveščeni tudi o prihajajočih obletnicah
            pokojne(ga).
          </div>

          <div className='text-center flex desktop:hidden w-[620px] mobile:w-full mobile:mt-6 mobile:px-[50px] text-[12px] mobile:text-[14px] mt-[16px] text-[#414141] leading-[14.06px] font-variation-customOpt12'>
            Vpišite se v Žalno knjigo, izrazite sožalje in vse spremembe bodo
            redno beležene v vašem uporabniškem računu.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObituaryPublished;
