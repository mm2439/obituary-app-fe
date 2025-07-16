"use client";

import React, { Suspense } from "react";
import Layout from "../components/appcomponents/Layout";
import MemorialPageView from "../components/appcomponents/MemorialPageView";
import ObituaryListBanner from "../components/appcomponents/ObituaryListBanner";
import NextFunerals from "../components/appcomponents/NextFunerals";
import PogrebiListComponent from "../components/appcomponents/PogrebiListComponent";
import SponsorComponent from "../components/appcomponents/SponsorComponent";
import FloristsComp from "../components/appcomponents/FloristsComp";
import { useSearchParams } from "next/navigation";
import MainOptions from "../components/appcomponents/MainOptions";
import Carousel from "../components/slidercomponents/Carousel"
import PogrebiLocalFloristComp from "../components/PogrebiLocalFloristComp"
import CommonFooter from "../components/appcomponents/CommonFooter"

const ObituaryListContent = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city");

  return (
    <>
      <ObituaryListBanner image={"/pogrebi_ozadje.png"} label={"Pogrebi"}  />
      <PogrebiListComponent city={city} />
      <Carousel />
      
      <hr className="mt-[41px] tablet:mt-[63px] desktop:mt-[115px] mb-[51px] tablet:mb-[83px] desktop:mb-[93px] mobile:h-[2px]  h-2 bg-zinc-300 border-2" />

      <MainOptions />
      <PogrebiLocalFloristComp />
      <SponsorComponent text="To stran so omogočili"/>
      <CommonFooter currentPage="/pogrebi"/>


    </>
  );
};

const ObituaryList = () => {
  return (
    <Layout megaMenu={""} isMegaMenuVisible={false} from={"18"} forFooter={'memorypage'} currentPage="pogrebi">
      <div className="flex flex-col mx-auto bg-[#F5F7F9] w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <ObituaryListContent />
        </Suspense>
      </div>
      
    </Layout>
  );
};

export default ObituaryList;
