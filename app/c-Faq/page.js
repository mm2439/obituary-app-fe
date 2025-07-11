"use client"

import { FAQHeader } from "@/app/components/appcomponents/Header";
import Image from "next/image";
import { FrequentlyAskedQuestionView2, FrequentlyAskedQuestionView3 } from "../components/appcomponents/FrequentlyAskedQuestionView";
import { FooterForFaq } from "../components/appcomponents/Footer";

export default function Faq2() {
  const faqData = [
    {
      question: "Registracija",
      answer: `Registrirajte podjetje <u style="color: #0A85C2;><span style="color: #0A85C2;">tukaj</span></u>. 
      Vaš uporabniški račun bo ustvarjen in lahko se sprehodite po gumbih. Nekaj je statistike, obrazec za brezplačna darila 
      in seveda pomočnik za izdelavo vaše strani. Za aktivacijo preostalih stvari, si boste <strong>najprej ustvarili svojo spletno stran.
      </strong><br></br> Ko bo vaša stran podjetja objavljena, postanete naš partner. Vaše podjetje bo prikazano v imenikih in prostorih za 
      oglaševanje, omogočeni bodo brezplačni vnos osmrtnic in pogrebov, brezplačne digitalne kartice vabil, sožalij, zahval, mesečni Skrbnik.`,
    },
    {
      question: "Izdelava spletne strani  ",
      answer: "Zelo enostavno je in avtomatizirano. Za vnos slik in vsebine boste rabili <strong>približno pol ure.</strong><br></br>V kolikor slik nimate pripravljenih, lahko začasno uporabite naše začasne, ki so priložene in svoje dodate kasneje. Vaši vnosi se vmes avtomatsko shranjujejo, tako da lahko nadaljujete kasneje in ko končate, pritisnete gumb Objavi. <br></br>Vašo vsebino bomo pregledali, stran pripravili in jo najkasneje v 48 urah tudi objavili.  ",
    },
    {
      question: "Objava osmrtnice ",
      answer: `Objava osmrtnic je praviloma v domeni pogrebnih podjetij, bomo pa občasno ta privilegij ponudili tudi izbranim cvetličarnam sploh v okoljih, kjer pogrebna podjetja še niso pristopila k sodelovanju. <br></br>Osmrtnice se vnašajo na željo najbližjih svojcev. Praviloma morajo priložiti uradni dokument&nbsp;&nbsp;  - Potrdilo o smrti, da se prepreči spam in objavljanje lažnih osmrtnic. Za vnos osmrtnice je sicer <strong>potrebna manj kot minuta.</strong><br></br>Objava osmrtnic, poleg možnosti poglabljanja stikov s strankami, prinaša še dodatne koristi&nbsp;&nbsp; – navedbo cvetličarne s kontaktnimi podatki v spodnjem delu spominske strani in se jo hkrati poudarjeno izpostavi kot prvo v bloku Cvetličarne, kar zagotavlja večjo vidnost. `
,
    },
    {
      question: "Darila vašim strankam  ",
      answer: "Darila za stranke = dobrodošla priložnost za brezplačno promocijo vašega podjetja.<br></br>Uporaba je enostavna – vzame vam le pol minute časa, ki jo bodo stranke cenile in pomnile, še posebej, ker te produkte potrebujejo prav zdaj. Ker gre za popolno novost, bodo o tem govorili v svojem krogu in vas tako promovirali - ker pri vas se to dobi, v sosednji cvetličarni, ki morda (še) ni naš partner, pa pač ne. Razen tega bo večina, ki pride po darilo v vašo trgovino, največkrat tudi kaj kupila. Zdaj, ko še niso vse cvetličarne vključene, je najboljši čas za to promocijo.<br></br>Povežite se s strankami in povečajte njihovo zvestobo – omenite jim brezplačna darila!",
    },
    {
      question: "Imamo že svojo spletno stran. Ne rabimo še vaše.",
      answer: "Naša stran ni nadomestilo ali konkurenca, temveč podpora vaši spletni strani, ki bo   pomagala graditi vašo prepoznavnost; kot če bi poleg Facebooka uporabljali še Instagram ali poleg telefonskega imenika še poslovni imenik. Pojavljanje na več platformah pomeni večjo vidnost, širši doseg in več priložnosti za pritegnitev novih strank, ki vas še ne poznajo.",
    },
    {
      question: "Imamo več cvetličarn. Dostavljamo v več mest.",
      answer: "Odlično, potem je prav ta rešitev prava za vaše podjetje! Na svoji spletni strani in imenikih boste lahko oglaševali vse. Cena za matično cvetličarno se obračuna kot običajno, cena za vsako naslednjo cvetličarno pa znaša samo 50% siceršnje cene. <br></br>Ste mobilni ter opravljate dostavo in prodajo po več mestih? Da bi se cvetličarna izpisovala v več mestih = kot lokalna, boste morali ta mesta dodati. Matična cvetličarna se obračuna kot običajno, cena za vsako naslednjo občino pa znaša 50% siceršnje cene (in tam se bo vaša cvetličarna izpisovala kot lokalna cvetličarna).  ",
    },
  ];
    return (
      <div className="bg-[#F9EBD4] tablet:bg-[#F9EBD4] mobile:bg-[#F9EBD4] min-h-[100vh]">
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
        <div className="flex flex-col items-center justify-center pt-[200px] w-[700px] mx-auto mobile:w-[350px] min-h-[calc(100vh-55px)]">
          <Image src={"/faq_page_icon.png"} alt="FAQ" className="mobile:w-[78px] mobile:h-[78px]" width={94} height={94} />
          <h1 className="text-[40px] mobile:text-[28px] font-[300] leading-[48px] text-[#3C3E41] text-center mt-[16px]">Kaj zdaj, kako naj začnem?</h1>
          <h3 className="text-[22px] mobile:text-[20px] font-[600] leading-[48px] text-[#3C3E41] text-center mt-[8px] mobile:mt-[2px]">Cvetličarne - Preprosti napotki</h3>
          <div className="flex flex-col items-center justify-center mt-[50px] w-full mobile:mb-[100px]">
            <FrequentlyAskedQuestionView3 data={{faqs: faqData}} />
          </div>
          <div className="flex justify-end w-full mt-[50px] pb-[60px] mobile:hidden">
            <button
            >
              <Image src={"/pridruzi-se-button.svg"} alt="Arrow Right" width={250} height={60} />
            </button>
          </div>
        </div>
        <FooterForFaq />
      </div>
    )
}