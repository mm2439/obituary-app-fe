import React from "react";
import Layout from "../components/appcomponents/Layout";
import WorkTogetherComp from "../components/appcomponents/WorkTogetherComp";
import ObituaryListBanner from "../components/appcomponents/ObituaryListBanner";
import FuneralsLocalFloristComp from "../components/appcomponents/FuneralsLocalFloristComp";
import FuneralList from "../components/appcomponents/FuneralList";
import SponsorComponent from "../components/appcomponents/SponsorComponent";
import PartnersCompo from "../components/appcomponents/PartnersCompo";
import CommonFooter from "../components/appcomponents/CommonFooter";

const FuneralsList = () => {
  return (
    <Layout from={"18"} currentPage="pogrebna-p"  forFooter={'memorypage'}>
      <div className="flex flex-col mx-auto bg-[#F5F7F9] w-full">
        <ObituaryListBanner
          image={"/belo_ozadje.jpg"}
          label={"Pogrebna podjetja"}
        />
        <FuneralList />
        <WorkTogetherComp />
        <PartnersCompo />
        <SponsorComponent text="S podporo naših partnerjev"/>
        <FuneralsLocalFloristComp />
        <CommonFooter currentPage="/pogrebna-p"/>

      </div>
    </Layout>
  );
};

export default FuneralsList;
