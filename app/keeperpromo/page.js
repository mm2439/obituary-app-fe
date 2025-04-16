import React from "react";
import Layout from "../components/appcomponents/Layout";
import AdministratorCompo from "../components/appcomponents/AdministratorCompo";
import AdditionalOptions from "../components/appcomponents/AdditionalOptions";
import MemorialWithAdmin from "../components/appcomponents/MemorialWithAdmin";
import Difference from "../components/appcomponents/Difference";
import FrequentlyAskedQuestionView from "../components/appcomponents/FrequentlyAskedQuestionView";
import OpeningPromotion from "../components/appcomponents/OpeningPromotion";

const Keeperpromo = () => {
  return (
    <Layout from={"11"} forFooter={""}>
      <div className="flex w-full flex-col  bg-gradient-to-br from-[#ECF0F3] to-[#F2F6F9]">
        <div className="h-[72px] tablet:h-[80px] desktop:h-[92.02px] " />
        <MemorialWithAdmin />
        <Difference />
        <AdditionalOptions />
        <AdministratorCompo />
        <OpeningPromotion />
        {/* <div className="flex w-full mobile:bg-[#E0E9F3] bg-[#FFFFFF]"> */}
        <FrequentlyAskedQuestionView from={"8"} />
        {/* </div> */}
      </div>
    </Layout>
  );
};

export default Keeperpromo;
