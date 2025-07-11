"use client";

import Image from "next/image";
import { FAQHeader } from "@/app/components/appcomponents/Header";
import { FooterForFaq2 } from "../components/appcomponents/Footer";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default function Faq1() {
   const breakpoint = useBreakpoint();

    if (breakpoint === "desktop" || breakpoint === "tablet") {
      return (
    <div className="bg-[#ECF0F3] min-h-[100vh] text-[#3C3E41] relative">
      <FAQHeader />
      <div className="tablet:w-[700px] desktop:w-[1200px] absolute top-[108px] left-1/2 -translate-x-1/2 flex items-end justify-end">
        <h1 className="text-[#0A85C2] text-[18px] desktop:text-[20px] mobile:hidden">
          POGREBNA PODJETJA
        </h1>
      </div>

      <div className="flex flex-col items-center pt-[200px] w-full px-4 max-w-[720px] mx-auto">
        <Image src="/faq_page_icon.png" alt="FAQ" width={94} height={94} />
        <h1 className="text-[40px] font-light mt-4 text-center mobile:text-[26px]">
         Priložnost za prve
        </h1>
        <h2 className="text-[22px] mobile:hidden block mt-2 font-bold text-center">
          Dodatne ugodnosti
        </h2>

        <section className="mt-10 text-[16px] space-y-6 leading-[1.6] mobile:w-[360px] w-[720px]">
          <div className="w-full bg-[#083545] relative h-12 flex items-center text-[#D4D4D4] text-[18px] pl-6">
            <h3 className="font-medium mb-1">
              Dodatne ugodnosti za prva pridružena pogrebna podjetja? 
            </h3>
            <img 
              src="/icon_cancel_white.png"
              className="absolute right-2 top-4"
            />
          </div>
          <div>
      
            <p className="font-light text-[16px]">
              Ne skrivamo, zvestobo nagrajujemo in prve partnerje še bolj.  <br />
              <br />
              Vsa pridružena pogrebna podjetja <span className="font-bold underline"> do 20. avgusta 2025 </span>prejmejo           
            </p>

            <ul className="list-disc list-inside text-[16px] mt-4 space-y-0">
              <li>
                <span className="text-[#0A85C2] font-bold">
                  10 mesečnih Skrbnikov
                </span>{" "}
                vsak mesec do konca leta
                <div className="text-[#6D778E] mt-1 pl-5">
                 (to je izjemoma; mesečni Skrbniki so sicer namenjeni cvetličarnam).
                </div>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Podvojena doba Skrbnikov</span> do konca novembra 2025 
               <div className="text-[#6D778E] mt-1 pl-5">
                 (Vsak Skrbnik, ki ga uporabniki dobijo pri vas velja dvojno dobo - z uporabo vaše kode. Mesečni Skrbnik traja 2 meseca. Letni Skrbnik traja 2 leti, torej eno leto je plačljivo, drugo pa strankam s svojo kodo brezplačno podarite vi, 6-letni Skrbnik traja 12 let). 
                </div>
              </li>

              <li>
                če ima pogrebno podjetje lastno cvetličarno je deležno <span className="text-[#0A85C2] font-bold"> 50% popusta in enako vsa leta <br /> 
                <span className="pl-5"></span> kasneje</span>  
                (namesto 25% popusta v primeru pridružitve po tem datumu). 
              </li>

               <li>
                  prednost pri uvajanju novih produktov
              </li>

              <li>
                  možnost vpisovanja brezplačnih osmrtnic že od začetka 
              </li>

              <li>
                  in lepo število prihranjenih ur že od začetka
              </li>
            </ul>

            <p className="mt-6">Splača se biti med prvimi.</p>
          </div>
        </section>

        <div className="flex justify-end w-full mt-[50px] pb-[60px] mobile:hidden">
          <button>
            <Image
              src="/pridruzi-se-button.svg"
              alt="Arrow Right"
              width={250}
              height={60}
            />
          </button>
        </div>
      </div>
      <FooterForFaq2 />
    </div>
  );
    }

    if (breakpoint === "mobile" ) {
      return (
    <div className="bg-[#ECF0F3] min-h-[100vh] text-[#3C3E41]">
      <FAQHeader />

      <div className="w-full hidden mobile:flex gap-[16px] absolute top-[80px] left-0 right-0 justify-center items-center">
        <div className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#6D778E]" 
        style={{border: "2px solid #6D778E"}}>
        CENIK
        </div>
        <div className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#6D778E]" 
        style={{border: "2px solid #6D778E"}}>
           KAKO ZAČNEM
        </div>
      </div>

     

       <div className="flex flex-col items-center pt-[200px] w-full px-4 max-w-[720px] mx-auto">
        <Image src="/faq_page_icon.png" alt="FAQ" width={94} height={94} />
        <h1 className="text-[40px] font-light mt-4 text-center mobile:text-[26px]">
         Priložnost 
        </h1>
        <h2 className="text-[22px] block mt-2 font-bold text-center">
          za prve partnerje
        </h2>

        <section className="mt-10 text-[16px] space-y-6 leading-[1.6] mobile:w-[354px] w-[720px]">
          <div className="w-full bg-[#083545] relative h-12 flex items-center text-[#D4D4D4] text-[18px] pl-6">
            <h3 className="font-medium mb-1">
              Dodatne ugodnosti za prve partnerje  
            </h3>
            <img 
              src="/icon_cancel_white.png"
              className="absolute right-2 top-4"
            />
          </div>
          <div>
      
            <p className="font-light text-[16px]">
              Ne skrivamo, zvestobo nagrajujemo in prve partnerje še bolj.  <br />
              <br />
              Vsa pridružena pogrebna podjetja <span className="font-bold underline"> do 20. avgusta 2025 </span>prejmejo           
            </p>

            <ul className="list-disc list-inside text-[16px] mt-4 space-y-0">
              <li>
                <span className="text-[#0A85C2] font-bold">
                  10 mesečnih Skrbnikov
                </span>{" "}
                vsak mesec leto do<br /> 
                <span className="pl-5"></span> konca leta, ki jih lahko nato podarijo naprej  
                <div className="text-[#6D778E] mt-1 pl-5">
                 (to je izjemoma; mesečni Skrbniki so sicer namenjeni cvetličarnam).
                </div>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Podvojena doba Skrbnikov</span> do konca <br /> 
                <span className="pl-5"></span>novembra 2025 
               <div className="text-[#6D778E] mt-1 pl-5">
                 (Vsak Skrbnik, ki ga uporabniki dobijo pri vas velja dvojno dobo - z uporabo vaše kode. Mesečni Skrbnik traja 2 meseca. Letni Skrbnik traja 2 leti, torej eno leto je plačljivo, drugo pa strankam s svojo kodo brezplačno podarite vi, 6-letni Skrbnik traja 12 let). 
                </div>
              </li>

              <li>
                če ima pogrebno podjetje lastno cvetličarno<br /> 
                <span className="pl-5"></span> je deležno <span className="text-[#0A85C2] font-bold"> 50% popusta in enako vsa leta <br /> 
                <span className="pl-5"></span> kasneje</span>  
                (namesto 25% popusta v primeru<br /> 
                <span className="pl-5"></span> pridružitve po tem datumu). 
              </li>

               <li>
                  prednost pri uvajanju novih produktov
              </li>

              <li>
                  možnost vpisovanja brezplačnih osmrtnic že<br /> 
                <span className="pl-5"></span> od začetka 
              </li>

              <li>
                  in lepo število prihranjenih ur že od začetka
              </li>
            </ul>

            <p className="mt-6">Splača se biti med prvimi.</p>
          </div>
        </section>

        <div className="flex justify-end w-full mt-[50px] pb-[60px] mobile:hidden">
          <button>
            <Image
              src="/pridruzi-se-button.svg"
              alt="Arrow Right"
              width={250}
              height={60}
            />
          </button>
        </div>
      </div>

      <div className="w-full hidden mobile:flex pr-7 mb-10 mt-3   justify-end items-center">
        <div className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#FFFFFF]" 
        style={{background: "linear-gradient(180deg, #0D94E8 4.81%, #1860A3 100%)", border: "2px solid #6D778E"}}>
        PRIDRUŽI SE
        </div>
       
      </div>
      <FooterForFaq2 />
    </div>
  );
    }
}
