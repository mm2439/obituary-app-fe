"use client";

import Image from "next/image";
import { FAQHeader } from "@/app/components/appcomponents/Header";
import { FooterForFaq2 } from "../components/appcomponents/Footer";
import { useBreakpoint } from "../hooks/useBreakpoint";

export default function Faq1() {
   const breakpoint = useBreakpoint();

    if (breakpoint === "desktop" || breakpoint === "tablet") {
      return (
    <div className="bg-[#F9EBD4] min-h-[100vh] text-[#3C3E41] relative">
      <FAQHeader />
      <div className="tablet:w-[700px] desktop:w-[1200px] absolute top-[108px] left-1/2 -translate-x-1/2 flex items-end justify-end">
        <h1 className="text-[#0A85C2] text-[18px] desktop:text-[20px] mobile:hidden">
          CVETLIČARNE
        </h1>
      </div>

      <div className="flex flex-col items-center pt-[200px] w-full px-4 max-w-[720px] mx-auto">
        <Image src="/faq_page_icon.png" alt="FAQ" width={94} height={94} />
        <h1 className="text-[40px] font-light mt-4 text-center mobile:text-[26px]">
         Priložnost za prve cvetličarne
        </h1>
        <h2 className="text-[22px] mobile:hidden block mt-2 font-bold text-center">
          Dodatne ugodnosti
        </h2>

        <p className="font-light text-[16px] mt-[50px]">
            Poleg mesečnih Skrbnikov, digitalnih kartic sožalja, zahval in vabil ter nekaterih novosti v nadaljevanju, pripada prvim cvetličarnam še nekaj dodatnih ugodnosti.
        </p>
        <h2 className="text-[22px] mobile:block hidden mobile:font-[20px] mt-2 font-bold text-center">
          Dva meseca. Brez obveznosti.
        </h2>

        <section className="mt-10 text-[16px] space-y-6 leading-[1.6] mobile:w-[360px] w-[720px]">
          <div className="w-full bg-[#083545] relative h-12 flex items-center text-[#D4D4D4] text-[18px] pl-6">
            <h3 className="font-medium mb-1">
              Dodatne ugodnosti za prve pridružene cvetličarne?
            </h3>
            <img 
              src="/icon_cancel_white.png"
              className="absolute right-2 top-4"
            />
          </div>
          <div>
      
            <p className="font-light text-[16px]">
              Ne skrivamo, zvestobo nagrajujemo in prve partnerje še bolj. <br />
              <br />
              <span className="font-bold underline">Prvih 60 cvetličarn</span> oz pridružene, ki
              poravnajo prvo letno pogodbo
              <span className="font-bold underline"> do 30. avgusta 2025</span>
            </p>

            <ul className="list-disc list-inside text-[16px] mt-4 space-y-0">
              <li>
                <span className="text-[#0A85C2] font-bold">
                  Podvojena doba Skrbnikov
                </span>{" "}
                do konca novembra 2025
                <div className="text-[#6D778E] mt-1 pl-5">
                  (vsak Skrbnik, ki ga uporabniki pri vas naročijo velja dvojno dobo – z uporabo vaše
                  kode. Mesečni Skrbnik traja dva meseca. Letni Skrbnik, če se zanj stranka odloči
                  traja 2 leti, torej eno leto je plačljivo, drugo pa jim s svojo kodo brezplačno
                  podarite vi, 6-letni Skrbnik traja 12 let. Predstavlja konkurenčno prednost v
                  primerjavi s cvetličarnami, ki bi se vključile kasneje in zagotavlja zadovoljstvo
                  vaših strank, ki jim podarite prav to, česar si želijo oz so morda celo že
                  naročili, obenem pa je lahko to darilo učinkovito orodje za vašo lastno promocijo,
                  o vas se govori).
                </div>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Dodatna občina</span> brezplačno do konca
                novembra <span className="text-[#6D778E] mt-1 ">(vaša cvetličarna se pojavlja med lokalnimi <br /><span className="pl-5"></span>v  drugem kraju)
                </span>
              </li>

              <li>
                prednost pri uvajanju nekaterih novih produktov
              </li>
            </ul>

            <p className="font-light text-[16px] mt-12">
              Cvetličarne, ki pristopijo <span className="font-bold underline">do 10. avgusta</span>{" "}
              prejmejo dodatno še
            </p>

            <ul className="list-disc list-inside text-[16px] mt-4 space-y-0">
              <li>
                <span className="text-[#0A85C2] font-bold">Garantirano enako ceno</span>  letne
                naročnine
                <span className="text-[#0A85C2] font-bold"> vse do leta 2030</span>
                <div className="text-[#6D778E] mt-1 pl-5">
                  (kot velja po uradnem ceniku letos poleti. Pomeni, da četudi bi kdaj v naslednjih
                  letih spremenili ceno naročnine, bo vaša cena ostala nespremenjena za isti paket
                  vse do leta 2030)
                </div>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Dodatni mesec</span> brezplačno
                <span className="text-[#6D778E] mt-1 "> (po izteku prvega leta)</span>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Dva tedna oglaševanja</span> na
                notranjih straneh brezplačno 
                <span className="text-[#6D778E] mt-1 pl-1">
                   (zaradi optimalnega delovanja <br /><span className="pl-5"></span> bomo mi sami določili kje in kdaj bo to oglaševanje
                  izvršeno; bo pa to zagotovo v vašem lokalnem <br /><span className="pl-5"></span>okolju in do konca leta 2025)
                </span>
              </li>

              <li>
                Možnost vpisovanja brezplačnih osmrtnic že od začetka
                <span className="text-[#6D778E] mt-1 pl-1">
                  (priložnost za še večjo promocijo,<br /><span className="pl-5"></span> ko drugi še niso vključeni in ko je darilo za
                  stranke še bolj nepričakovano / ko o tem še ne vedo)
                </span>
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
    <div className="bg-[#F9EBD4] min-h-[100vh] text-[#3C3E41]">
      <FAQHeader />

      <div className="w-full hidden mobile:flex gap-[16px] absolute top-[80px] left-0 right-0 justify-center items-center">
        <div className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#FFFFFF]" 
        style={{background: "linear-gradient(180deg, #0D94E8 4.81%, #1860A3 100%)", border: "2px solid #6D778E"}}>
        PRILOŽNOST
        </div>
        <div className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#6D778E]" 
        style={{border: "2px solid #6D778E"}}>
        CENIK
        </div>
      </div>

      <div className="flex flex-col items-center pt-[200px] w-full px-4 max-w-[720px] mx-auto">
        <Image src="/faq_page_icon.png" alt="FAQ" width={79} height={79} />
        <h1 className="text-[40px] font-light mt-4 text-center mobile:text-[26px]">
         Priložnost 
        </h1>
        <h2 className="text-[22px] mobile:hidden block mt-2 font-bold text-center">
          Dodatne ugodnosti
        </h2>
      
        <h2 className="text-[22px] mobile:block hidden mobile:font-[20px] mt-2 font-bold text-center">
          za prve cvetličarne
        </h2>

        <section className="mt-10 text-[16px] space-y-6 leading-[1.6] mobile:w-[354px] w-[720px]">
          <div className="w-full bg-[#083545] relative h-12 flex items-center text-[#D4D4D4] text-[18px] pl-2">
            <h3 className="font-medium mb-1">
             Dodatne ugodnosti za prve naročnike 
            </h3>
            
          </div>
          
          <div>
           
            <p className="font-light text-[16px]">
              Ne skrivamo, zvestobo nagrajujemo in prve partnerje še bolj. <br />
              <br />
              <span className="font-bold underline">Prvih 60 cvetličarn</span> oz pridružene, ki
              poravnajo prvo letno pogodbo
              <span className="font-bold underline"> do 30. avgusta 2025</span>
            </p>

            <ul className="list-disc list-inside text-[16px] mt-4 space-y-0">
              <li>
                <span className="text-[#0A85C2] font-bold">
                  Podvojena doba Skrbnikov
                </span>{" "}
                do konca <br /><span className="pl-5"></span> novembra 2025
                <div className="text-[#6D778E] mt-1 pl-5">
                  (vsak Skrbnik, ki ga uporabniki pri vas naročijo velja dvojno dobo – z uporabo vaše
                  kode. Mesečni Skrbnik traja dva meseca. Letni Skrbnik, če se zanj stranka odloči
                  traja 2 leti, torej eno leto je plačljivo, drugo pa jim s svojo kodo brezplačno
                  podarite vi, 6-letni Skrbnik traja 12 let.<br /> Predstavlja konkurenčno prednost v
                  primerjavi s cvetličarnami, ki bi se vključile kasneje in zagotavlja zadovoljstvo
                  vaših strank, ki jim podarite prav to, česar si želijo oz so morda celo že
                  naročili, obenem pa je lahko to darilo učinkovito orodje za vašo lastno promocijo,
                  o vas se govori).
                </div>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Dodatna občina</span> brezplačno do konca
                <br /><span className="pl-5"></span>novembra <span className="text-[#6D778E] mt-1 ">(vaša cvetličarna se pojavlja med <br /><span className="pl-5"></span>lokalnimi v  drugem kraju)
                </span>
              </li>

              <li>
                prednost pri uvajanju nekaterih novih <br /><span className="pl-5"></span> produktov
              </li>
            </ul>

            <p className="font-light text-[16px] mt-12">
              Cvetličarne, ki pristopijo <span className="font-bold underline">do 10. avgusta</span>{" "}
              prejmejo dodatno še
            </p>

            <ul className="list-disc list-inside text-[16px] mt-4 space-y-0">
              <li>
                <span className="text-[#0A85C2] font-bold">Garantirano enako ceno</span>  letne
                naročnine
                 vse <br /><span className="pl-5"></span>do leta 2030
                <div className="text-[#6D778E] mt-1 pl-5">
                  (kot velja po uradnem ceniku letos <br />poleti. Pomeni, da četudi bi kdaj v naslednjih
                  letih spremenili ceno naročnine, bo vaša cena ostala nespremenjena za isti paket
                  vse do leta 2030)
                </div>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Dodatni mesec</span> brezplačno
                <span className="text-[#6D778E] mt-1 "> (po izteku prvega <br /><span className="pl-5"></span>leta)</span>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Dva tedna oglaševanja</span> na
                notranjih straneh <br /><span className="pl-5"></span> brezplačno 
                <span className="text-[#6D778E] mt-1 pl-1">
                   (zaradi optimalnega delovanja <br /><span className="pl-5"></span>bomo mi sami določili kje in kdaj bo to <br /><span className="pl-5"></span> oglaševanje
                 izvršeno; bo pa to zagotovo<br /><span className="pl-5"></span> v vašem lokalnem okolju in do konca leta 2025)
                </span>
              </li>

              <li>
                Možnost vpisovanja brezplačnih osmrtnic že<br /><span className="pl-5"></span> od začetka
                <span className="text-[#6D778E] mt-1 pl-1">
                  (priložnost za še večjo promocijo,<br /><span className="pl-5"></span> ko  drugi še niso vključeni in ko je darilo za
                  <br /><span className="pl-5"></span>stranke še  bolj nepričakovano / ko o tem še ne <br /><span className="pl-5"></span>vedo)
                </span>
              </li>
            </ul>

            <p className="mt-6 mb-10">Splača se biti med prvimi.</p>
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
