import React from 'react'
import FuneralPromoHeader from "./FuneralPromoHeader"
import FuneralPromoFooter from "./FuneralPromoFooter";

const FuneralPromo1 = () => {
  return (
    <div className='w-full lg:w-[1280px] bg-[#E0E9F3] max-h-[1200px] shadow-[5px_5px_16px_0px_#6262624D]'>
        
        <FuneralPromoHeader />
        <div className="main-container h-auto">
            <div className="link-container mt-[27.76px] px-[20px] md:px-[44px] flex justify-end">
                <a href='/' className='no-underline p-0 m-0 text-[#0A85C2] text-sm md:text-base'>POGREBNA PODJETJA</a>
            </div>

            <div className="inner-container my-[40px] md:my-[89.76px] w-full md:w-[90%] lg:w-[700px] mx-auto text-[#3C3E41] px-4 md:px-0">
                <img src="/funeralpromo/check-circle.png" className='w-[60px] h-[60px] md:w-[91.42px] md:h-[91.42px] mx-auto' alt="" />

                <div className="text-container w-auto h-auto md:h-[103px] mx-auto text-center mt-[12.5px]">
                    <h2 className='text-3xl md:text-[40px] leading-[1.2] md:leading-[48px] font-light'>Brezplačno je</h2>
                    <p className='text-xl md:text-[22px] leading-[1.2] md:leading-[48px] font-semibold'>Danes. Jutri. Za vedno! </p>
                </div>

                <div className="faq-section mt-[30px] md:mt-[50px] mb-[40px] md:mb-[65px]">
                    <div className="faq-item h-auto md:h-[102px] mb-6 md:mb-0">
                         <h3 className='text-base md:text-[18px] leading-[1.5] md:leading-[27px] font-medium'>Kaj dobim? </h3>
                         <p className='text-sm md:text-[16px] leading-[1.7] md:leading-[27px] font-light'>Brezplačna izdelava vaše strani. Brezplačni vpis osmrtnic in pogrebov. Prihranek več ur vsak teden. Brezplačne digitalne produkte za vaše kliente. Vidnost. </p>
                    </div>

                    <div className="faq-item h-auto md:h-[128px] mb-6 md:mb-0">
                         <h3 className='text-base md:text-[18px] leading-[1.5] md:leading-[27px] font-medium'>Kakšne digitalne produkte?</h3>
                         <p className='text-sm md:text-[16px] leading-[1.7] md:leading-[27px] font-light'>Poleg brezplačnega vpisa osmrtnic, jim lahko ponudite brezplačno še druge produkte, Morda tudi digitalne kartice za pošiljanje naprej preko telefona, zahvale in kmalu še nekaj drugih. Če to želite; to ni obveza.</p>
                    </div>

                    <div className="faq-item h-auto md:h-[102px] mb-6 md:mb-0">
                         <h3 className='text-base md:text-[18px] leading-[1.5] md:leading-[27px] font-medium'>Pa je res brezplačno?</h3>
                         <p className='text-sm md:text-[16px] leading-[1.7] md:leading-[27px] font-light'>Popolnoma in pri tem bo ostalo. Naše pričakovanje je zgolj, da ažurno dodajate nove dogodke, kar pa je tudi sicer v vašem interesu, ker prav to vam prihrani delo in čas. </p>
                    </div>

                    <div className="faq-item h-auto md:h-[102px] mb-6 md:mb-0">
                         <h3 className='text-base md:text-[18px] leading-[1.5] md:leading-[27px] font-medium'>Prezamudno bi bilo redno vnašati osmrtnice. Nismo vešči računalnika. </h3>
                         <p className='text-sm md:text-[16px] leading-[1.7] md:leading-[27px] font-light'>Sistem je dovršen, zato vnos nove osmrtnice traja manj kot minuto, vnos pogreba pa nekaj sekund. Tudi za izdelavo vaše spletne strani ni potrebno nikakšnje predznanje. Vsak si jo lahko izdela sam. </p>
                    </div>

                    <div className="faq-item h-auto md:h-[102px]">
                         <h3 className='text-base md:text-[18px] leading-[1.5] md:leading-[27px] font-medium'>Kaj naj storim zdaj, kako naj začnem?</h3>
                         <p className='text-sm md:text-[16px] leading-[1.7] md:leading-[27px] font-light'>Registrirajte podjetje tukaj. V uporabniškem računu vas čaka nekaj strani, ki vam bodo v pomoč in pomagala za pošiljanje daril in izdelavo lastne spletne strani. Brez obveznosti in brezplačno za vedno.  </p>
                    </div>
                </div>
            </div>
        </div>

        <FuneralPromoFooter />
    </div>
  )
}

export default FuneralPromo1