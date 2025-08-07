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
import CommonFooter from "../components/appcomponents/CommonFooter";
import Link from "next/link";
import Image from "next/image";

const Floristspromo = () => {
    return (
        <Layout megaMenu={""} isMegaMenuVisible={false} from={"18"} currentPage="resitve-za-cvetlicarne" forFooter={'memorypage'}>
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
                <KickStart showButton={true} />

                <div className="mobile:flex w-full flex-col items-center hidden bg-transparent pt-[85px] pb-[100px]">
                    <div className="flex gap-[25px] flex-col justify-between">
                        <div className="flex flex-col w-full mt-[10px]">
                            <div className="text-[40px] mobile:text-[28px] text-[#3C3E41] font-light text-center leading-[48px]">
                                Uradna otvoritev je<br /> 10. julija
                            </div>
                            <div className="my-6 text-[20px] hidden mobile:block mobile:text-[20px] text-[#3C3E41] font-bold font-variation-customOpt24 text-center leading-[32px]">
                                Izdelajte svojo spletno stran še pravočasno
                            </div>
                        </div>

                        <Link
                            href={"/c-faq"}
                            className={`w-[250px] h-[53px] shrink-0 rounded-full text-white justify-center items-center self-center shadow-custom-light-dark bg-gradient-to-b from-[#0D94E8] to-[#1860A3] flex }`}
                            style={{
                                boxShadow: '0px 4px 5px 0px #00000038, 0px 2px 3px 0px #00000073',
                            }}
                        >
                            Sodelujmo
                        </Link>
                    </div>
                </div>

                <CommonFooter currentPage="/resitve-za-cvetlicarne" />

            </div>
        </Layout>
    );
};

export default Floristspromo;