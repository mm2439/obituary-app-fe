"use client";

import React, { useEffect } from "react";
import Layout from "../components/appcomponents/Layout";
import MemorialPageView from "../components/appcomponents/MemorialPageView";
import ObituaryListBanner from "../components/appcomponents/ObituaryListBanner";
import NextFunerals from "../components/appcomponents/NextFunerals";
import ObituaryListComponent from "../components/appcomponents/ObituaryListComponent";
import SponsorComponent from "../components/appcomponents/SponsorComponent";
import FloristsComp from "../components/appcomponents/FloristsComp";

import { useSearchParams } from "next/navigation";

const ObituaryList = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");

  return (
    <Layout megaMenu={""} isMegaMenuVisible={false} from={"2"} forFooter={""}>
      <div className="flex flex-col mx-auto bg-[#F5F7F9] w-full">
        <ObituaryListBanner image={"/cvetje.avif"} label={"Osmrtnice"} />
        <ObituaryListComponent city={city} />
        <NextFunerals />
        <MemorialPageView />
        <SponsorComponent />
        <FloristsComp />
      </div>
    </Layout>
  );
};

export default ObituaryList;
