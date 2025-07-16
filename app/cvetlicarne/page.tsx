import React from "react";
import Layout from "../components/appcomponents/Layout";
import ObituaryListBanner from "../components/appcomponents/ObituaryListBanner";
import LocalFloristCompo from "../components/appcomponents/LocalFloristCompo";
import SponsorComponent from "../components/appcomponents/SponsorComponent";
import FloristsFlower from "../components/appcomponents/FloristsFlower";
import FloristList from "../components/appcomponents/FloristList";
import CommonFooter from "../components/appcomponents/CommonFooter";

const FloristsListPage = () => {
  return (
    <Layout from={"18"} megaMenu={""} forFooter={"memorypage"} currentPage="cvetlicarne" isMegaMenuVisible={false}>
      <div className="flex flex-col mx-auto bg-[#F5F7F9] border-b-[1px] border-[#D4D4D4] w-full">
        <ObituaryListBanner image={"/roza_ozadje.avif"} label={"Cvetličarne"} />
        <FloristList />
        <LocalFloristCompo />

        <FloristsFlower />
        <SponsorComponent text=" S podporo naših najtesnejših partnerjev"/>
        <CommonFooter currentPage="/cvetlicarne"/>
      </div>
    </Layout>
  );
};

export default FloristsListPage;
