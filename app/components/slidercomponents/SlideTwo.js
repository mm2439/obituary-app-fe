"use client";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const SlideTwo = () => {
  const breakpoint = useBreakpoint();
  console.log(breakpoint)

  

  // === Desktop Layout ===
  if (breakpoint === "desktop") {
    return (
      <div className="bg-[#F5F0E8] text-[#22281C] w-full h-[891px]">
        <div className="flex justify-center p-[179px]">
          <div className="text-container w-[560px]">
            <h2 className="text-[40px] leading-[100%] h-[73px]">
              Spominska stran{" "}
              <span className="text-[#de222e] font-medium">s skrbnikom</span>
            </h2>
            <p className="text-[#414141] text-[16px] mt-[16px]">
              Nadgradnja osnovne žalne strani, kjer pokojnemu bližnji prevzame
              skrb nad objavljenimi vsebinami vseh ostalih (podobno kot ena
              oseba, ki skrbi za grob in odloča). Upravljanje je zelo enostavno;
              vsak je lahko Skrbnik.{" "}
            </p>
            <p className="text-[#414141] text-[16px] mt-[16px]">
              Skrbnik, ki je pokojnega dobro poznal, s tem omogoči objavo
              številnih dodatnih vsebin celotni družini, prijateljem in znancem
              ter na ta način omogoči izdelavo prave spominske strani, na katero
              se bodo bližnji radi vračali in jo dopolnjevali.{" "}
            </p>
            <div className="inner-div mt-[77px]">
              <h3 className="text-[#22281C] text-[24px] font-medium">
                Spomini niso večni
              </h3>
              <p className="text-[#414141] text-[16px] mt-[8px]">
                Prehitro nam uidejo, čarobni trenutki se pozabijo, slike
                zbledijo. Povežimo spomine na naše najdražje v celoto v
                digitalni obliki in jih ohranimo za vedno.{" "}
              </p>
            </div>
            <div className="btn-container ">
              <button className="px-[25px] py-[12px] w-[155px] rounded-[8px] mt-[47px] shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
                Več o Skrbniku
              </button>
            </div>
          </div>
          <div className="img-container">
            <img
              className="mx-[111px] object-cover h-full"
              src="/mobile-cards/slider-mobile.png"
              alt="iPad Landscape"
            />
          </div>
        </div>
      </div>
    );
  }

  if (breakpoint === "laptop") {
    return (
      <div className="bg-[#F5F0E8] text-[#22281C] w-[1280px]">
        <div className="flex justify-center p-[179px]">
          <div className="text-container w-[560px]">
            <h2 className="text-[40px] leading-[100%] h-[73px]">
              Spominska stran{" "}
              <span className="text-[#de222e] font-medium">s skrbnikom</span>
            </h2>
            <p className="text-[#414141] text-[16px] mt-[16px]">
              Nadgradnja osnovne žalne strani, kjer pokojnemu bližnji prevzame
              skrb nad objavljenimi vsebinami vseh ostalih (podobno kot ena
              oseba, ki skrbi za grob in odloča). Upravljanje je zelo enostavno;
              vsak je lahko Skrbnik.{" "}
            </p>
            <p className="text-[#414141] text-[16px] mt-[16px]">
              Skrbnik, ki je pokojnega dobro poznal, s tem omogoči objavo
              številnih dodatnih vsebin celotni družini, prijateljem in znancem
              ter na ta način omogoči izdelavo prave spominske strani, na katero
              se bodo bližnji radi vračali in jo dopolnjevali.{" "}
            </p>
            <div className="inner-div mt-[77px]">
              <h3 className="text-[#22281C] text-[24px] font-medium">
                Spomini niso večni
              </h3>
              <p className="text-[#414141] text-[16px] mt-[8px]">
                Prehitro nam uidejo, čarobni trenutki se pozabijo, slike
                zbledijo. Povežimo spomine na naše najdražje v celoto v
                digitalni obliki in jih ohranimo za vedno.{" "}
              </p>
            </div>
            <div className="btn-container px-[89px]">
              <button class="px-[25px] py-[12px] w-[155px] rounded-[8px] mt-[47px] shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
                Več o Skrbniku
              </button>
            </div>
          </div>
          <div className="img-container">
            <img
              className="mx-[111px]"
              src="/mobile-cards/slider-mobile.png"
              alt="iPad Landscape"
            />
          </div>
        </div>
      </div>
    );
  }

  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
      <div className="bg-[#F5F0E8] h-full text-[#22281C] p-[64px] flex justify-center">
        <div className="image-container w-[560px]">
          <h2 className="text-center text-[40px] mt-[16px]">
            Spominska stran{" "}
            <span className="text-[#de222e] font-medium">s skrbnikom</span>
          </h2>
          <p className="text-[#414141] text-[16px] mt-[30px]">
            Nadgradnja osnovne žalne strani, kjer pokojnemu bližnji prevzame
            skrb nad objavljenimi vsebinami vseh ostalih (podobno kot ena oseba,
            ki skrbi za grob in odloča). Upravljanje je zelo enostavno; vsak je
            lahko Skrbnik.{" "}
          </p>
          <p className="text-[#414141] text-[16px] mt-[16px]">
            Skrbnik, ki je pokojnega dobro poznal, s tem omogoči objavo
            številnih dodatnih vsebin celotni družini, prijateljem in znancem
            ter na ta način omogoči izdelavo prave spominske strani, na katero
            se bodo bližnji radi vračali in jo dopolnjevali.{" "}
          </p>
          <div className="inner-div mt-[79px]">
            <h3 className="text-[#22281C] text-[24px] font-medium]">
              Spomini niso večni
            </h3>
            <p className="mt-[16px]">
              Prehitro nam uidejo, čarobni trenutki se pozabijo, slike zbledijo.
              Povežimo spomine na naše najdražje v celoto v digitalni obliki in
              jih ohranimo za vedno.{" "}
            </p>
          </div>

          <img
            className="mt-[33px] mx-auto"
            src="/mobile-cards/slider-mobile.png"
            alt="iPad Landscape"
          />

          <div className="btn-container text-center">
            <button class="px-[25px] py-[12px] rounded-[8px] mt-[44px] shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              Več o Skrbniku
            </button>
          </div>
        </div>
      </div>
    );
  }

  // === Mobile Layout ===
  if (breakpoint === "mobile") {
    return (
      <div className="bg-[#F5F0E8] h-auto text-[#22281C] py-[69px] flex justify-center text-center">
        <div className="image-container w-[352px]">
          <h2 className="text-center text-[28px]">
            Spominska stran{" "}
            <br />
            <span className="text-[#de222e] font-medium">s skrbnikom</span>
          </h2>
          <p className="text-[#414141] text-[16px] mt-[16px] leading-6">
            Nadgradnja osnovne žalne strani, kjer pokojnemu bližnji prevzame skrb nad objavljenimi vsebinami vseh ostalih in s tem omogoči izdelavo prave spominske strani, na katero se bodo bližnji radi vračali in jo dopolnjevali tudi kasneje. 
            Upravljanje je enostavno; vsak je lahko Skrbnik. 

          </p>

          <img
            className="mt-[33px] mx-auto w-[150px] h-[300px]"
            src="/mobile-cards/slider-mobile.png"
            alt="iPad Landscape"
          />

          <div className="btn-container text-center mt-[22px]">
            <button class="px-[25px] py-[12px] rounded-[8px] shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              Več o Skrbniku
            </button>
          </div>

          <div className="inner-div mt-[54px] w-[313px]">
            <h3 className="text-[#22281C] text-[24px] font-medium mt-[16px]">
              Spomini niso večni
            </h3>
            <p className="mt-[16px]">
              Prehitro nam uidejo, čarobni trenutki se pozabijo, slike zbledijo.{" "}
              <br /> Povežimo spomine na naše najdražje v celoto v digitalni
              obliki in jih ohranimo za vedno.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default SlideTwo;
