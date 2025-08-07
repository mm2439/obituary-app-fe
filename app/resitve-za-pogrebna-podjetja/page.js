import React from "react";
import Layout from "../components/appcomponents/Layout";
import WorkTogether from "../components/appcomponents/WorkTogether";
import FreePrice from "../components/appcomponents/FreePrice";
import LastFewPages from "../components/appcomponents/LastFewPages";
import Ownwebsite from "../components/appcomponents/Ownwebsite";
import FuneralCompany from "../components/appcomponents/FuneralCompany";
import FrequentlyAskedQuestionView from "../components/appcomponents/FrequentlyAskedQuestionView";
import Indispensable from "../components/appcomponents/Indispensable";
import OpeningDate from "../components/appcomponents/OpeningDate";
import KickStart from "../components/appcomponents/KickStart";
import CommonFooter from "../components/appcomponents/CommonFooter";

const Funeralpromo = () => {
    return (
        <Layout megaMenu={""} isMegaMenuVisible={false} from={"18"} currentPage="resitve-za-pogrebna-podjetja" forFooter={'memorypage'}>
            <div className="flex w-full flex-col  bg-gradient-to-br from-[#ECF0F3] to-[#F2F6F9]">
                <div className="h-[72px] tablet:h-[80px] desktop:h-[92.02px] " />
                <FuneralCompany />
                <Ownwebsite />
                <Indispensable />
                <FreePrice />
                <OpeningDate />
                <KickStart cUrl="/p-faq" />
                {/* <div className="flex w-full bg-[#F8F7F4] mobile:bg-gradient-to-b mobile:from-[#E6EBFA] mobile:to-[#E2EEFC]" >
                <FrequentlyAskedQuestionView from={"7"} />
                </div> */}
                {/* <LastFewPages /> */}
                {/* <WorkTogether />                                                            */}
                <CommonFooter currentPage="/resitve-za-pogrebna-podjetja" />

            </div>
        </Layout>
    );
};

export default Funeralpromo;