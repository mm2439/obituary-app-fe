import React from "react";
import Layout from "../components/appcomponents/Layout";
import AdministratorCompo from "../components/appcomponents/AdministratorCompo";
import AdditionalOptions from "../components/appcomponents/AdditionalOptions";
import MemorialWithAdmin from "../components/appcomponents/MemorialWithAdmin";
import Difference from "../components/appcomponents/Difference";
import FrequentlyAskedQuestionView, { FrequentlyAskedQuestionView2 } from "../components/appcomponents/FrequentlyAskedQuestionView";
import OpeningPromotion from "../components/appcomponents/OpeningPromotion";
import AdminBenefits from "../components/appcomponents/AdminBenefits";
import EverythingIsFree from "../components/appcomponents/EverythingIsFree";
import CommonFooter from "../components/appcomponents/CommonFooter";

const Keeperpromo = () => {
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
    <Layout from={"18"} forFooter={"memorypage"} currentPage="spominska">
      <div className="flex w-full flex-col  bg-gradient-to-br from-[#ECF0F3] to-[#F2F6F9]">
        <div className="h-[72px] tablet:h-[80px] desktop:h-[92.02px] " />
        <MemorialWithAdmin />
        {/* <Difference /> */}
        <AdminBenefits />
        <AdditionalOptions />
        <AdministratorCompo />
        {/* <OpeningPromotion /> */}
        {/* <div className="flex w-full mobile:bg-[#E0E9F3] bg-[#FFFFFF]"> */}
        <FrequentlyAskedQuestionView2 data={faqData} />
        {/* </div> */}
        <EverythingIsFree />
        <CommonFooter currentPage="/spominska"/>

      </div>
    </Layout>
  );
};

export default Keeperpromo;
