"use client";

import Image from "next/image";
import { FAQHeader } from "@/app/components/appcomponents/Header";
import { FooterForFaq } from "../components/appcomponents/Footer";

export default function Faq1() {
  return (
    <div className="bg-[#F9EBD4] min-h-[100vh] text-[#3C3E41]">
      <FAQHeader />
      <div className="flex flex-col items-center pt-[200px] w-full px-4 max-w-[720px] mx-auto">
        <Image src="/faq_page_icon.png" alt="FAQ" width={94} height={94} />
        <h1 className="text-[40px] font-light mt-4 text-center mobile:text-[26px]">
          Brezplačni vpis in oglaševanje
        </h1>
        <h2 className="text-[22px] mobile:hidden block mt-2 font-bold text-center">
          Za prvih 60 cvetličarn oziroma do konca avgusta
        </h2>

        <h2 className="text-[22px] mobile:block hidden mobile:font-[20px] mt-2 font-bold text-center">
          Dva meseca. Brez obveznosti.
        </h2>

        <section className="mt-10 text-[16px] space-y-6 leading-[1.6] mobile:w-[360px] w-[720px]">
          <div>
            <h3 className="font-medium mb-1">
              Dodatne ugodnosti za prve pridružene cvetličarne?
            </h3>
            <p className="font-light text-[16px]">
              Ne skrivamo, zvestobo nagrajujemo in prve partnerje še bolj. <br />
              <br />
              <span className="font-bold underline">Prvih 60 cvetličarn</span> oz pridružene, ki
              poravnajo prvo letno pogodbo
              <span className="font-bold underline"> do 30. avgusta 2025</span>
            </p>

            <ul className="list-disc list-inside text-[16px] mt-4 space-y-4">
              <li>
                <span className="text-[#0A85C2] font-bold">
                  Podvojena doba Skrbnikov
                </span>{" "}
                do konca novembra 2025
                <p className="text-[#6D778E] mt-1 pl-5">
                  (vsak Skrbnik, ki ga uporabniki pri vas naročijo velja dvojno dobo – z uporabo vaše
                  kode.<br /> Mesečni Skrbnik traja dva meseca. Letni Skrbnik, če se zanj stranka odloči
                  traja 2 leti, torej eno leto je plačljivo, drugo pa jim s svojo kodo brezplačno
                  podarite vi, 6-letni Skrbnik traja 12 let.<br /> Predstavlja konkurenčno prednost v
                  primerjavi s cvetličarnami, ki bi se vključile kasneje in zagotavlja zadovoljstvo
                  vaših strank, ki jim podarite prav to, česar si želijo oz so morda celo že
                  naročili, obenem pa je lahko to darilo učinkovito orodje za vašo lastno promocijo,
                  o vas se govori).
                </p>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Dodatna občina</span> brezplačno do konca
                novembra
                <p className="text-[#6D778E] mt-1 pl-5">
                  (vaša cvetličarna se pojavlja med lokalnimi v drugem kraju)
                </p>
              </li>

              <li>
                prednost pri uvajanju nekaterih novih produktov
              </li>
            </ul>

            <p className="font-light text-[16px] mt-6">
              Cvetličarne, ki pristopijo <span className="font-bold underline">do 10. avgusta</span>{" "}
              prejmejo dodatno še
            </p>

            <ul className="list-disc list-inside text-[16px] mt-4 space-y-4">
              <li>
                <span className="text-[#0A85C2] font-bold">Garantirano enako ceno</span> letne
                naročnine
                <span className="text-[#0A85C2] font-bold"> vse do leta 2030</span>
                <p className="text-[#6D778E] mt-1 pl-5">
                  (kot velja po uradnem ceniku letos poleti. Pomeni, da četudi bi kdaj v naslednjih
                  letih spremenili ceno naročnine, bo vaša cena ostala nespremenjena za isti paket
                  vse do leta 2030)
                </p>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Dodatni mesec</span> brezplačno
                <p className="text-[#6D778E] mt-1 pl-5">(po izteku prvega leta)</p>
              </li>

              <li>
                <span className="text-[#0A85C2] font-bold">Dva tedna oglaševanja</span> na
                notranjih straneh brezplačno
                <p className="text-[#6D778E] mt-1 pl-5">
                  (zaradi optimalnega delovanja bomo mi sami določili kje in kdaj bo to oglaševanje
                  izvršeno; bo pa to zagotovo v vašem lokalnem okolju in do konca leta 2025)
                </p>
              </li>

              <li>
                Možnost vpisovanja brezplačnih osmrtnic že od začetka
                <p className="text-[#6D778E] mt-1 pl-5">
                  (priložnost za še večjo promocijo, ko drugi še niso vključeni in ko je darilo za
                  stranke še bolj nepričakovano / ko o tem še ne vedo)
                </p>
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
      <FooterForFaq />
    </div>
  );
}
