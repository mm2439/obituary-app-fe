"use client"

import { FAQHeader2 } from "@/app/components/appcomponents/Header";
import Image from "next/image";
import { FrequentlyAskedQuestionView2, FrequentlyAskedQuestionView3 } from "../components/appcomponents/FrequentlyAskedQuestionView";
import { FooterForFaq } from "../components/appcomponents/Footer";
import Link from "next/link";

export default function Faq1() {
 const faqData = [
    {
      question: "Registracija",
      answer: `Registrirajte podjetje <a href="/podjetja" style="color: #0A85C2; text-decoration: underline;">tukaj</a>. 
      Vaš uporabniški račun bo ustvarjen in lahko se sprehodite po gumbih. Nekaj je statistike, obrazec za brezplačna darila 
      in seveda pomočnik za izdelavo vaše strani. Za aktivacijo preostalih stvari, si boste <strong>najprej ustvarili svojo spletno stran.
      </strong><br></br> Ko bo vaša stran podjetja objavljena, postanete naš partner. Vaše podjetje bo prikazano v imenikih in prostorih za oglaševanje, 
      omogočeni bodo brezplačni vnos osmrtnic in pogrebov,  morda tudi Skrbnik ali drugi digitalni produkti.         `,
    },
    {
      question: "Izdelava spletne strani  ",
      answer: "Zelo enostavno je in avtomatizirano. Za vnos slik in vsebine boste rabili <strong>približno pol ure.</strong><br></br>V kolikor slik nimate pripravljenih, lahko začasno uporabite naše začasne, ki so priložene in svoje dodate kasneje. Vaši vnosi se vmes avtomatsko shranjujejo, tako da lahko nadaljujete kasneje in ko končate, pritisnete gumb Objavi. <br></br>Vašo vsebino bomo pregledali, stran pripravili in jo najkasneje v 48 urah tudi objavili.  ",
    },
    {
      question: "Objava osmrtnice ",
      answer: `Z objavo osmrtnic lahko začnete takoj, ko je objavljena vaša spletna stran.  
                <br><br>Za vnos osmrtnice je <strong>potrebna manj kot minuta,</strong> ki pa lahko prihrani veliko časa zaposlenim, zato je podjetju v interesu objavljati osmrtnice karseda ažurno. Pogrebnim podjetjem ni potrebno prilagati Potrdila o smrti, ker možnosti za napake skorajda ni. 
               <br><br> Zaželjeno je vnašanje osmrtnic<strong> s sliko in časom pogreba </strong>(zato že objavljene osmrtnice kasneje dopolnite, ko bo znan čas pogreba ali ko bo bližnji dostavil sliko). 
`
,
    },
    {
      question: "Darila vašim strankam ",
      answer: "Poleg brezplačnega vpisa osmrtnic, lahko (če želite) žalujočim ponudite še nekatere brezplačne ugodnosti; katere bi to lahko bile, se bomo dogovarjali kasneje. Večina ostaja rezerviranih za cvetličarne, bo pa nekaj več teh možnosti v nadaljevanju po predvideni nadgradnji sodelovanja. ",
    },
    {
      question: "Imamo svojo cvetličarno",
      answer: "Odlično! Izdelali si boste obe spletni strani, tista za pogrebno dejavnost je brezplačna, pri tisti za cvetličarno pa vam bomo obračunali 50% popust in enako vsa leta kasneje, če boste pristopili tekom otvoritvene akcije do konca junija (v primeru kasnejšega pristopa bo popust 25% in enako vsa leta kasneje). Zaradi sistema in lažjega vodenja si boste registrirali oba uporabniška računa. ",
    },
    {
      question: "Imamo že svojo spletno stran. Ne rabimo še vaše.",
      answer: "Naša stran ni nadomestilo ali konkurenca, temveč podpora vaši spletni strani, ki bo pomagala graditi vašo prepoznavnost v širšem okolju, predvsem pa vam bila v pomoč in prihranila vaš čas. <br />Zagotovljena je brezplačna promocija - tudi vaše obstoječe spletne strani, omogoča poglabljanje stikov z vašimi klienti in bo podlaga za naše še tesnejše sodelovanje, ki je v načrtu v prihodnosti. Naš cilj je vključitev vseh pogrebnih podjetij v državi.  ",
    },
  ];
    return (
      <div className="bg-[#ECF0F3]  min-h-[100vh]">
        <FAQHeader2 />
        <div className="w-full hidden mobile:flex gap-[16px] absolute top-[80px] left-0 right-0 justify-center items-center">
          <Link href={"/p-priloznost"} className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#FFFFFF]" 
            style={{background: "linear-gradient(180deg, #0D94E8 4.81%, #1860A3 100%)", border: "2px solid #6D778E"}}>
            PRILOŽNOST
          </Link>
          <Link href={"/p-info"} className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#6D778E]" 
          style={{border: "2px solid #6D778E"}}>
          CENIK
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center pt-[200px] w-[700px] mx-auto mobile:w-[350px] min-h-[calc(100vh-55px)]">
          <Image src={"/faq_page_icon.png"} alt="FAQ" className="mobile:w-[78px] mobile:h-[78px]" width={94} height={94} />
          <h1 className="text-[40px] mobile:text-[28px] font-[300] leading-[48px] text-[#3C3E41] text-center mt-[16px]">Kaj zdaj, kako naj začnem?</h1>
          <h3 className="text-[22px] mobile:text-[20px] font-[600] leading-[48px] text-[#3C3E41] text-center mt-[8px] mobile:mt-[2px]">Cvetličarne - Preprosti napotki</h3>
          <div className="flex flex-col items-center justify-center mt-[50px] w-full mobile:mb-[100px]">
            <FrequentlyAskedQuestionView3 data={{faqs: faqData}} />
          </div>
          <Link  href={"/podjetja"} className="flex justify-end w-full mt-[50px] pb-[60px] mobile:hidden">
            <button
            >
              <Image src={"/pridruzi-se-button.svg"} alt="Arrow Right" width={250} height={60} />
            </button>
          </Link>
        </div>
        <FooterForFaq />
      </div>
    )
}