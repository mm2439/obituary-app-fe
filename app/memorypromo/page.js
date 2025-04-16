import React from "react";
import Layout from "../components/appcomponents/Layout";
import ColdObituary from "../components/appcomponents/ColdObituary";
import AnniversaryReminder from "../components/appcomponents/AnniversaryReminder";
import WayToPost from "../components/appcomponents/WayToPost";
import MemorialPage from "../components/appcomponents/MemorialPage";
import SimpleComp from "../components/appcomponents/SimpleComp";
import FrequentlyAskedQuestionView from "../components/appcomponents/FrequentlyAskedQuestionView";
import imgUp from "@/public/ico_up.png";
import Image from "next/image";



const MemoryPromo = () => {
  return (
    <Layout from={"10"} forFooter={"memorypromo"}>
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
          <FrequentlyAskedQuestionView from={"8"} />
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
      </div>
    </Layout>
  );
};

export default MemoryPromo;
