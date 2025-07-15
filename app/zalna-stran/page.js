import React from "react";
import Layout from "../components/appcomponents/Layout";
import ColdObituary from "../components/appcomponents/ColdObituary";
import AnniversaryReminder from "../components/appcomponents/AnniversaryReminder";
import WayToPost from "../components/appcomponents/WayToPost";
import MemorialPage from "../components/appcomponents/MemorialPage";
import SimpleComp from "../components/appcomponents/SimpleComp";
import FrequentlyAskedQuestionView, { FrequentlyAskedQuestionView2 } from "../components/appcomponents/FrequentlyAskedQuestionView";
import imgUp from "@/public/ico_up.png";
import Image from "next/image";
import CommonFooter from "../components/appcomponents/CommonFooter";



const MemoryPromo = () => {
  const faqData = {
    faqs: [
      {
        question: "Kako oddati osmrtnico",
        answer: "Stran lahko naredite v pol ure. Vpisali bomo vse podatke, ki jih imate, in vam pošljemo povezavo na e-mail. Stran lahko kasneje dopolnite, posodobite. Enostavno je.",
      },
      {
        question: "Kako postanem Skrbnik brezplačno",
        answer: "Stran lahko naredite v pol ure. Vpisali bomo vse podatke, ki jih imate, in vam pošljemo povezavo na e-mail. Stran lahko kasneje dopolnite, posodobite. Enostavno je.",
      },
      {
        question: "Kako dobim digitalne mobi kartice?",
        answer: "Stran lahko naredite v pol ure. Vpisali bomo vse podatke, ki jih imate, in vam pošljemo povezavo na e-mail. Stran lahko kasneje dopolnite, posodobite. Enostavno je.",
      },
      {
        question: "Še več vprašanj",
        answer: "Stran lahko naredite v pol ure. Vpisali bomo vse podatke, ki jih imate, in vam pošljemo povezavo na e-mail. Stran lahko kasneje dopolnite, posodobite. Enostavno je.",
      },
    ],
  };
  return (
    <Layout from={"18"} forFooter={"memorypage"} currentPage="zalna-stran">
      <div className="flex flex-1 flex-col mx-auto bg-gradient-to-br from-[#ECF0F3] to-[#F2F6F9]">
        <div className="h-[72px] tablet:h-[80px] desktop:h-[92.02px] " />
        <WayToPost />
        <ColdObituary />
        <SimpleComp />
        <AnniversaryReminder />
        <div className="mobile:hidden flex w-full">
        <MemorialPage />
        </div>
        <div className="flex w-full">
          <FrequentlyAskedQuestionView2 data={faqData} />
        </div>
        <div className="hidden mobile:flex w-full">
        <MemorialPage />
        </div>

        <div
          className="bottom-10 right-10 fixed w-[48px] h-[48px] mt-[26px] 
                shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]
                flex justify-center items-center rounded-lg"
        >
          <Image src={imgUp} alt="imgPrevious" className=" w-[24px] h-[24px]" />
        </div>
        <CommonFooter currentPage="/zalna-stran"/>
        
      </div>
    </Layout>
  );
};

export default MemoryPromo;
