"use client";
import Image from "next/image";
import ipadImage from "@/public/spominska_tab.avif";
import ipadImageTablet from "@/public/spominska_tablica1.avif";
import ipadImageMobile from "@/public/tablica_mobi.avif";
import { useBreakpoint } from "../../hooks/useBreakpoint"

const SlideTwo = () => {
  const breakpoint = useBreakpoint();

  // === Desktop Layout ===
  if (breakpoint === "desktop") {
    return (
     <div className="bg-[#F8EDE3] text-[#22281C] max-w-[1280px] h-[891px]">
        <div className="flex justify-center p-[179px]">
            <div className="text-container w-[560px]">
                <h2 className="text-[40px] leading-[100%] h-[73px]">Spominska stran <span className="text-[#de222e]">s skrbnikom</span></h2>
                <p className="text-[#414141] text-[16px] mt-[16px]">Nadgradnja osnovne žalne strani, kjer pokojnemu bližnji prevzame skrb nad objavljenimi vsebinami vseh ostalih (podobno kot ena oseba, ki skrbi za grob in odloča). Upravljanje je zelo enostavno; vsak je lahko Skrbnik. </p>
                <p className="text-[#414141] text-[16px] mt-[16px]">Skrbnik, ki je pokojnega dobro poznal, s tem omogoči objavo številnih dodatnih vsebin celotni družini, prijateljem in znancem ter na ta način omogoči izdelavo prave spominske strani, na katero se bodo bližnji radi vračali in jo dopolnjevali. </p>
               <div className="inner-div mt-[77px]">
                 <h3 className="text-[#22281C] text-[24px] font-medium">Spomini niso večni</h3>
                <p className="text-[#414141] text-[16px] mt-[8px]">Prehitro nam uidejo, čarobni trenutki se pozabijo, slike zbledijo. Povežimo spomine na naše najdražje v celoto v digitalni obliki in jih ohranimo za vedno. </p>
               </div> 
               <div className="btn-container px-[89px]">

               <button class="px-[25px] py-[12px] w-[155px] rounded-[8px] mt-[47px]" style={{
                  background: "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                  boxShadow: "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                }}
              >
                Več o Skrbniku
              </button>

               </div>
            </div>
            <div className="img-container">
                <img className="mx-[111px]" src="/mobile-cards/slider-mobile.png" alt="iPad Landscape" />
            </div>
        </div>
      </div>
    );
  }

  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
      <div className="bg-[#F8EDE3] h-auto text-[#22281C] p-[64px] flex justify-center">
         <div className="image-container w-[560px]">
                <h2 className="text-center text-[40px] mt-[16px]">Spominska stran <span className="text-[#de222e]">s skrbnikom</span></h2>
                <p className="text-[#414141] text-[16px] mt-[30px]">Nadgradnja osnovne žalne strani, kjer pokojnemu bližnji prevzame skrb nad objavljenimi vsebinami vseh ostalih (podobno kot ena oseba, ki skrbi za grob in odloča). Upravljanje je zelo enostavno; vsak je lahko Skrbnik. </p>
                <p className="text-[#414141] text-[16px] mt-[16px]">Skrbnik, ki je pokojnega dobro poznal, s tem omogoči objavo številnih dodatnih vsebin celotni družini, prijateljem in znancem ter na ta način omogoči izdelavo prave spominske strani, na katero se bodo bližnji radi vračali in jo dopolnjevali. </p>
               <div className="inner-div mt-[80px]">
                 <h3 className="text-[#22281C] text-[24px] font-medium mt-[16px]">Spomini niso večni</h3>
                <p className="mt-[16px]">Prehitro nam uidejo, čarobni trenutki se pozabijo, slike zbledijo. Povežimo spomine na naše najdražje v celoto v digitalni obliki in jih ohranimo za vedno. </p>
               </div> 

              <img className="mt-[33px] mx-auto" src="/mobile-cards/slider-mobile.png" alt="iPad Landscape" />

               <div className="btn-container text-center">

               <button class="px-[25px] py-[12px] mt-[44px]" style={{
                  background: "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                  boxShadow: "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                }}
              >
                Več o Skrbniku
              </button>
               </div>
            </div>
       
      </div>
    );
  }

  // === Mobile Layout ===
  return (
    <div className="bg-[#F8EDE3] h-auto text-[#22281C] py-[64px] flex justify-center text-center">
         <div className="image-container w-[560px]">
                <h2 className="text-center text-[40px] mt-[16px]">Spominska stran <span className="text-[#de222e]">s skrbnikom</span></h2>
                <p className="text-[#414141] text-[16px] mt-[30px]">Nadgradnja osnovne žalne strani, kjer pokojnemu bližnji prevzame skrb nad objavljenimi vsebinami vseh ostalih (podobno kot ena oseba, ki skrbi za grob in odloča). Upravljanje je zelo enostavno; vsak je lahko Skrbnik. </p>
                <p className="text-[#414141] text-[16px] mt-[16px]">Skrbnik, ki je pokojnega dobro poznal, s tem omogoči objavo številnih dodatnih vsebin celotni družini, prijateljem in znancem ter na ta način omogoči izdelavo prave spominske strani, na katero se bodo bližnji radi vračali in jo dopolnjevali. </p>

              <img className="mt-[33px] mx-auto" src="/mobile-cards/slider-mobile.png" alt="iPad Landscape" />

               <div className="btn-container text-center">

               <button class="px-[25px] py-[12px] mt-[44px]" style={{
                  background: "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                  boxShadow: "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                }}
              >
                Več o Skrbniku
              </button>
               </div>

                <div className="inner-div mt-[80px]">
                 <h3 className="text-[#22281C] text-[24px] font-medium mt-[16px]">Spomini niso večni</h3>
                <p className="mt-[16px]">Prehitro nam uidejo, čarobni trenutki se pozabijo, slike zbledijo. Povežimo spomine na naše najdražje v celoto v digitalni obliki in jih ohranimo za vedno. </p>
               </div> 
            </div>
       
      </div>
  );
};

export default SlideTwo;
