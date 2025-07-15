import React from 'react'
import FuneralPromoHeader from "./FuneralPromoHeader"
import FuneralPromoFooter from "./FuneralPromoFooter";
import { useState } from 'react';
import Image from 'next/image';

const FuneralPromo3 = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div className='w-full lg:w-[1280px] bg-[#F8EDE3] max-h-[1200px] shadow-[5px_5px_16px_0px_#6262624D]'>
      <FuneralPromoHeader show={true}/>
      <div className="main-container h-auto">
        <div className="inner-container my-[40px] md:my-[89.76px] w-full px-4 md:px-0 md:w-[90%] lg:w-[700px] mx-auto text-[#3C3E41]">
          <img 
            src="/funeralpromo/check-circle.png" 
            className='w-[60px] h-[60px] md:w-[91.42px] md:h-[91.42px] mx-auto' 
            alt="Check mark" 
          />

          <div className="text-container w-auto h-auto md:h-[103px] mx-auto text-center mt-[12.5px]">
            <h2 className='text-3xl md:text-[40px] leading-[1.2] md:leading-[48px] font-light'>Kaj zdaj, kako naj začnem?</h2>
            <p className='text-xl md:text-[22px] leading-[1.2] md:leading-[48px] font-semibold'>Cvetličarne - Preprosti napotki</p>
          </div>

          <div className="faq-accordion mt-[30px] md:mt-[50px] mb-[40px] md:mb-[65px]">
            {/* First */}
            <div className="w-full lg:w-[700px] border-y border-[#D4D4D4]">
              <button
                onClick={() => toggleAccordion(0)}
                className={`w-full h-[48px] flex items-center justify-between 
                  px-4 md:px-[22.93px] pt-[11px] pb-[11px] text-[16px] 
                  ${openAccordionIndex === 0 ? 'bg-[#083545] text-[#fff]' : 'bg-transparent text-[#1E2125]'}`}
              >
                <span className="font-semibold leading-[1.5] md:leading-[27px] text-base md:text-[18px]">Registracija</span>
                <Image
                  src={openAccordionIndex === 0 ? "/funeralpromo/minus.png" : "/funeralpromo/plus.png"}
                  width={24}
                  height={24}
                  alt="toggle-icon"
                  className={`${openAccordionIndex === 0 ? 'filter brightness-0 invert' : ''}`}
                />
              </button>

              {openAccordionIndex === 0 && (
                <div className="px-4 md:px-[22.93px] pb-[20px] pt-1 text-[14px]">
                  <p className="font-light leading-[1.5] md:leading-[24px] text-sm md:text-[16px] text-[#3C3E41]">
                      {/* Accordion content goes here */}
                  </p>                    
                </div>
              )}
            </div>

            {/* Second */}
            <div className="w-full lg:w-[700px] border-y border-[#D4D4D4]">
              <button
                onClick={() => toggleAccordion(1)}
                className={`w-full h-[48px] flex items-center justify-between 
                  px-4 md:px-[22.93px] pt-[11px] pb-[11px] text-[16px] 
                  ${openAccordionIndex === 1 ? 'bg-[#083545] text-[#fff]' : 'bg-transparent text-[#1E2125]'}`}
              >
                <span className="font-semibold leading-[1.5] md:leading-[27px] text-base md:text-[18px]">Izdelava spletne strani</span>
                <Image
                  src={openAccordionIndex === 1 ? "/funeralpromo/minus.png" : "/funeralpromo/plus.png"}
                  width={24}
                  height={24}
                  alt="toggle-icon"
                  className={`${openAccordionIndex === 1 ? 'filter brightness-0 invert' : ''}`}
                />
              </button>

              {openAccordionIndex === 1 && (
                <div className="px-4 md:px-[22.93px] pb-[20px] pt-1 text-[14px]">
                  <p className="font-light leading-[1.5] md:leading-[24px] text-sm md:text-[16px] text-[#3C3E41]">
                      {/* Accordion content goes here */}
                  </p>                    
                </div>
              )}
            </div>

            {/* Third */}
            <div className="w-full lg:w-[700px] border-y border-[#D4D4D4]">
              <button
                onClick={() => toggleAccordion(2)}
                className={`w-full h-[48px] flex items-center justify-between 
                  px-4 md:px-[22.93px] pt-[11px] pb-[11px] text-[16px] 
                  ${openAccordionIndex === 2 ? 'bg-[#083545] text-[#fff]' : 'bg-transparent text-[#1E2125]'}`}
              >
                <span className="font-semibold leading-[1.5] md:leading-[27px] text-base md:text-[18px]">Objava osmrtnice</span>
                <Image
                  src={openAccordionIndex === 2 ? "/funeralpromo/minus.png" : "/funeralpromo/plus.png"}
                  width={24}
                  height={24}
                  alt="toggle-icon"
                  className={`${openAccordionIndex === 2 ? 'filter brightness-0 invert' : ''}`}
                />
              </button>

              {openAccordionIndex === 2 && (
                <div className="px-4 md:px-[22.93px] pb-[20px] pt-1 text-[14px]">
                  <p className="font-light leading-[1.5] md:leading-[24px] text-sm md:text-[16px] text-[#3C3E41]">
                      {/* Accordion content goes here */}
                  </p>                    
                </div>
              )}
            </div>

            {/* Fourth */}
            <div className="w-full lg:w-[700px] border-y border-[#D4D4D4]">
              <button
                onClick={() => toggleAccordion(3)}
                className={`w-full h-[48px] flex items-center justify-between 
                  px-4 md:px-[22.93px] pt-[11px] pb-[11px] text-[16px] 
                  ${openAccordionIndex === 3 ? 'bg-[#083545] text-[#fff]' : 'bg-transparent text-[#1E2125]'}`}
              >
                <span className="font-semibold leading-[1.5] md:leading-[27px] text-base md:text-[18px]">Darila vašim strankam</span>
                <Image
                  src={openAccordionIndex === 3 ? "/funeralpromo/minus.png" : "/funeralpromo/plus.png"}
                  width={24}
                  height={24}
                  alt="toggle-icon"
                  className={`${openAccordionIndex === 3 ? 'filter brightness-0 invert' : ''}`}
                />
              </button>

              {openAccordionIndex === 3 && (
                <div className="px-4 md:px-[22.93px] pb-[20px] pt-1 text-[14px]">
                  <p className="font-light leading-[1.5] md:leading-[24px] text-sm md:text-[16px] text-[#3C3E41]">
                      {/* Accordion content goes here */}
                  </p>                    
                </div>
              )}
            </div>

            {/* Fifth */}
            <div className="w-full lg:w-[700px] border-y border-[#D4D4D4]">
              <button
                onClick={() => toggleAccordion(4)}
                className={`w-full h-[48px] flex items-center justify-between 
                  px-4 md:px-[22.93px] pt-[11px] pb-[11px] text-[16px] 
                  ${openAccordionIndex === 4 ? 'bg-[#083545] text-[#fff]' : 'bg-transparent text-[#1E2125]'}`}
              >
                <span className="font-semibold leading-[1.5] md:leading-[27px] text-base md:text-[18px]">
                  Imamo že svojo spletno stran. Ne rabimo še vaše.
                </span>
                <Image
                  src={openAccordionIndex === 4 ? "/funeralpromo/minus.png" : "/funeralpromo/plus.png"}
                  width={24}
                  height={24}
                  alt="toggle-icon"
                  className={`${openAccordionIndex === 4 ? 'filter brightness-0 invert' : ''}`}
                />
              </button>

              {openAccordionIndex === 4 && (
                <div className="px-4 md:px-[22.93px] pb-[20px] pt-1 text-[14px]">
                  <p className="font-light leading-[1.5] md:leading-[24px] text-sm md:text-[16px] text-[#3C3E41]">
                      {/* Accordion content goes here */}
                  </p>                    
                </div>
              )}
            </div>

            {/* Sixth */}
            <div className="w-full lg:w-[700px] border-y border-[#D4D4D4]">
              <button
                onClick={() => toggleAccordion(5)}
                className={`w-full h-[48px] flex items-center justify-between 
                  px-4 md:px-[22.93px] pt-[11px] pb-[11px] text-[16px] 
                  ${openAccordionIndex === 5 ? 'bg-[#083545] text-[#fff]' : 'bg-transparent text-[#1E2125]'}`}
              >
                <span className="font-semibold leading-[1.5] md:leading-[27px] text-base md:text-[18px]">
                  Imamo več cvetličarn. Dostavljamo v več mest.
                </span>
                <Image
                  src={openAccordionIndex === 5 ? "/funeralpromo/minus.png" : "/funeralpromo/plus.png"}
                  width={24}
                  height={24}
                  alt="toggle-icon"
                  className={`${openAccordionIndex === 5 ? 'filter brightness-0 invert' : ''}`}
                />
              </button>

              {openAccordionIndex === 5 && (
                <div className="px-4 md:px-[22.93px] pb-[20px] pt-1 text-[14px]">
                  <p className="font-light leading-[1.5] md:leading-[24px] text-sm md:text-[16px] text-[#3C3E41]">
                    Odlično, potem je prav ta rešitev prava za vaše podjetje! Na svoji spletni strani in imenikih 
                    boste lahko oglaševali vse. Cena za matično cvetličarno se obračuna kot običajno, cena za vsako 
                    naslednjo cvetličarno pa znaša samo 50% siceršnje cene.
                  </p>
                  <br />
                  <p className="font-light leading-[1.5] md:leading-[24px] text-sm md:text-[16px] text-[#3C3E41]">
                    Ste mobilni ter opravljate dostavo in prodajo po več mestih? Da bi se cvetličarna izpisovala v več mestih = kot lokalna, 
                    boste morali ta mesta dodati. Matična cvetličarna se obračuna kot običajno, 
                    cena za vsako naslednjo občino pa znaša 50% siceršnje cene (in tam se bo 
                    vaša cvetličarna izpisovala kot lokalna cvetličarna).
                  </p>
                </div>
              )}
            </div>

            <div className="most-outer-container flex justify-end">
              <div
                className="p-[2px] mt-8 md:mt-[49px] w-full sm:w-[250px] rounded-[50px] shadow-[5px_5px_10px_0px_#A6ABBD,_-5px_-5px_10px_0px_#FAFBFF]"
                style={{
                  background: 'linear-gradient(180deg, rgba(10,133,194,0.7), rgba(18,53,151,0.7))',
                  borderRadius: '1000px',
                  display: 'inline-block',
                }}
              >
                <button
                  className="w-full px-[9px] py-3 md:py-[15px] rounded-[50px] text-[#414B5A] font-semibold"
                  style={{
                    backgroundColor: 'white',
                  }}
                >
                  Prijavi se
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FuneralPromoFooter />
    </div>
  )
}

export default FuneralPromo3