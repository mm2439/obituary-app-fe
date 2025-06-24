"use client";

import React from "react";
import Layout from "../components/appcomponents/Layout";
import MemorialPageView from "../components/appcomponents/MemorialPageView";
import ObituaryListBanner from "../components/appcomponents/ObituaryListBanner";
import NextFunerals from "../components/appcomponents/NextFunerals";
import SponsorComponent from "../components/appcomponents/SponsorComponent";
import FloristsComp from "../components/appcomponents/FloristsComp";
import CarouselCalendar from "../components/appcomponents/ObituaryListComponentReplica";
import MainOptions from "../components/appcomponents/MainOptions";

const ObituaryListNew = () => {
  return (
    <Layout megaMenu={""} isMegaMenuVisible={false} from={"2"} forFooter={""}>
      <div className="flex flex-col mx-auto bg-[#F5F7F9] w-full">
        <ObituaryListBanner image={"/funeral33.png"} label={"Pogrebi"} />
        <CarouselCalendar />
        <MainOptions />
        <FloristsComp />
        <SponsorComponent />
      </div>
    </Layout>
  );
};

export default ObituaryListNew;
