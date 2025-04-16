
import React from "react";
import Layout from "../components/appcomponents/Layout";
import ObituaryListBanner from "../components/appcomponents/ObituaryListBanner";
import LocalFloristCompo from "../components/appcomponents/LocalFloristCompo";
import SponsorComponent from "../components/appcomponents/SponsorComponent";
import FloristsFlower from "../components/appcomponents/FloristsFlower";
import FloristList from "../components/appcomponents/FloristList";

const FloristsListPage = () => {
  return (
    <Layout from={"2"} forFooter={''} isMegaMenuVisible={false}>
      <div className="flex flex-col mx-auto bg-[#F5F7F9] border-b-[1px] border-[#D4D4D4] w-full">
        <ObituaryListBanner
          image={"/roza_ozadje.avif"}
          label={"Cvetličarne"}
        />
        <FloristList />
        <LocalFloristCompo/>
        
        <FloristsFlower />
        <SponsorComponent />
      </div>
    </Layout>
  );
};

export default FloristsListPage;

