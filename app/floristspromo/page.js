import React from "react";
import Layout from "../components/appcomponents/Layout";
import MultipleStores from "../components/appcomponents/MultipleStores";
import FreeCharge from "../components/appcomponents/FreeCharge";
import FreeTrial from "../components/appcomponents/FreeTrial";
import RegisterComp from "../components/appcomponents/RegisterComp";
import NotJustObituaries from "../components/appcomponents/NotJustObituaries";
import DirectoryEntry from "../components/appcomponents/DirectoryEntry";
import FrequentlyAskedQuestionView from "../components/appcomponents/FrequentlyAskedQuestionView";
import OfficialOpening from "../components/appcomponents/OfficialOpening";
import KickStart from "../components/appcomponents/KickStart";

const Floristspromo = () => {
    return (
        <Layout from={"8"} forFooter={''}>
            <div className="flex flex-1 flex-col mx-auto bg-gradient-to-br from-[#ECF0F3] to-[#F2F6F9]">
                <div className="flex h-[72px] tablet:h-[80px] desktop:h-[92.02px]" />
                <MultipleStores />
                <FreeCharge />
                <FreeTrial />
                <RegisterComp />
                <NotJustObituaries />
                <DirectoryEntry />
                {/* <div className="flex w-full mobile:bg-[#E0E9F3] bg-[#FFFFFF]">
                    <FrequentlyAskedQuestionView from={"8"} />
                </div> */}
                <OfficialOpening />
                <KickStart />

            </div>
        </Layout>
    );
};

export default Floristspromo;