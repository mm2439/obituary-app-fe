"use client"

import { FAQHeader } from "@/app/components/appcomponents/Header";
import Image from "next/image";
import { FrequentlyAskedQuestionView2, FrequentlyAskedQuestionView3 } from "../components/appcomponents/FrequentlyAskedQuestionView";
import { FooterForFaq } from "../components/appcomponents/Footer";

export default function Faq1() {
  const faqData = [
    {
      question: "Registracija",
      answer: "Stran lahko naredite v pol ure. Vpisali bomo vse podatke, ki jih imate, in vam pošljemo povezavo na e-mail. Stran lahko kasneje dopolnite, posodobite. Enostavno je.",
    },
    {
      question: "Izdelava spletne strani  ",
      answer: "Stran lahko naredite v pol ure. Vpisali bomo vse podatke, ki jih imate, in vam pošljemo povezavo na e-mail. Stran lahko kasneje dopolnite, posodobite. Enostavno je.",
    },
    {
      question: "Objava osmrtnice ",
      answer: "Stran lahko naredite v pol ure. Vpisali bomo vse podatke, ki jih imate, in vam pošljemo povezavo na e-mail. Stran lahko kasneje dopolnite, posodobite. Enostavno je.",
    },
    {
      question: "Darila vašim strankam  ",
      answer: "Stran lahko naredite v pol ure. Vpisali bomo vse podatke, ki jih imate, in vam pošljemo povezavo na e-mail. Stran lahko kasneje dopolnite, posodobite. Enostavno je.",
    },
    {
      question: "Imamo že svojo spletno stran. Ne rabimo še vaše.",
      answer: "Naša stran ni nadomestilo ali konkurenca, temveč podpora vaši spletni strani, ki bo   pomagala graditi vašo prepoznavnost; kot če bi poleg Facebooka uporabljali še Instagram ali poleg telefonskega imenika še poslovni imenik. Pojavljanje na več platformah pomeni večjo vidnost, širši doseg in več priložnosti za pritegnitev novih strank, ki vas še ne poznajo.",
    },
    {
      question: "Imamo več cvetličarn. Dostavljamo v več mest.",
      answer: "Stran lahko naredite v pol ure. Vpisali bomo vse podatke, ki jih imate, in vam pošljemo povezavo na e-mail. Stran lahko kasneje dopolnite, posodobite. Enostavno je.",
    },
  ];
    return (
      <div className="bg-[#F9EBD4] tablet:bg-[#F8EDE3] mobile:bg-[#E0E9F3] min-h-[100vh]">
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