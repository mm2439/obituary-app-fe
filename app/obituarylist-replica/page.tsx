"use client";

import React from "react";
import Layout from "../components/appcomponents/Layout";
import MemorialPageView from "../components/appcomponents/MemorialPageView";
import ObituaryListBanner from "../components/appcomponents/ObituaryListBanner";
import NextFunerals from "../components/appcomponents/NextFunerals";
import ObituaryListComponentReplica from "../components/appcomponents/ObituaryListComponentReplica";
import SponsorComponent from "../components/appcomponents/SponsorComponent";
import FloristsComp from "../components/appcomponents/FloristsComp";

const ObituaryListReplica = () => {
  return (
    <Layout megaMenu={""} isMegaMenuVisible={false} from={"2"} forFooter={""}>
      <div className="flex flex-col mx-auto bg-[#F5F7F9] w-full">
        <ObituaryListBanner image={"/cvetje.avif"} label={"Osmrtnice Replica"} />
        <ObituaryListComponentReplica />
        <NextFunerals />
        <MemorialPageView />
        <SponsorComponent />
        <FloristsComp />
      </div>
    </Layout>
  );
};

export default ObituaryListReplica;
