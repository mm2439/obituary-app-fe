"use client"
import React from "react";
import Layout from "../components/appcomponents/Layout";
import ObituaryListBanner from "../components/appcomponents/ObituaryListBanner";
import LocalFloristCompo from "../components/appcomponents/LocalFloristCompo";
import SponsorComponent from "../components/appcomponents/SponsorComponent";
import FloristsFlower from "../components/appcomponents/FloristsFlower";
import FloristList from "../components/appcomponents/FloristList";
import Dropdown from "../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const FloristsListPage = () => {
  return (
    <Layout from={"9"} megaMenu={""} forFooter={""} isMegaMenuVisible={false}>
      <div className="flex flex-col mx-auto bg-[#F5F7F9] border-b-[1px] border-[#D4D4D4] w-full">
        <ObituaryListBanner image={"/pogrebi_ozadje.png"} label={"Pogrebi"} />

            <div className="flex flex-col items-center desktop:items-end desktop:w-[1280px] tablet:w-[680px] mobile:w-[360px] mx-auto ">
                <div
                    className="flex flex-col desktop:flex-row tablet:mt-[70px] desktop:mt-[70px] 
                    desktop:w-[777px] tablet:w-[600px] mobile:w-[296]
                    items-center mobile:justify-between desktop:justify-end desktop:space-x-[16px] tablet:gap-[16px] desktop:gap-[0px]"
                  >
                    <div className="hidden tablet:flex desktop:flex flex-col tablet:gap-[16px] desktop:gap-[0px] items-center tablet:flex-row desktop:flex-row desktop:space-x-[16px] tablet:justify-between mobile:h-[112px] tablet:h-[48px] desktop:h-[48px]">
                      <div className="hidden desktop:flex h-[48px]">
                        <input
                          type="text"
                          placeholder="Išči po imenu"
                          style={{
                            fontSize: "16px",
                            lineHeight: "24px",
                            width: "227px",
                            height: "100%",
                            fontWeight: 400,
                            borderWidth: "1px",
                            borderColor: "#7C7C7C",
                            borderRadius: "8px",
                            paddingLeft: "15.8px",
                            paddingRight: "15.8px",
                            color: "#7C7C7C",
                            backgroundColor: "white",
                            fontVariationSettings: "'opsz' 16",
                          }}

                        />
                      </div>
        
                
                      <div className="hidden desktop:block">
                        <Dropdown
                          label={"Občina"}
                          isFromNotification={false}
                          isFromFlower={false}
                          isFrom={"mainPage"}
                          isFromFlowerGreenBgTablet={false}
                          isFromObituary={false}
                          onSelect={()=>{}}
                        />
                      </div>

                       <div className="hidden tablet:block desktop:hidden">
                        <Dropdown
                          label={"Mesto"}
                          isFromNotification={false}
                          isFromFlower={false}
                          isFrom={"mainPage"}
                          isFromFlowerGreenBgTablet={false}
                          isFromObituary={false}
                          onSelect={()=>{}}
                        />
                      </div>      

                      <div className="hidden h-[48px] tablet:w-[292px] desktop:w-[227px] tablet:flex  desktop:flex" >
                        <Dropdown
                          label={"Regija"}
                          isFromNotification={false}
                          isFromObituary={false}
                          isFromFlower={false}
                          isFrom={"mainPage"}
                          isFromFlowerGreenBgTablet={false}
                          onSelect={()=>{}}

                        />
                      </div>
                     
                    </div>

                    <div className="flex flex-col tablet:flex-row tablet:gap-[16px] desktop:gap-[0px] items-center justify-between desktop:hidden  tablet:h-[48px] mt-[46px] tablet:mt-0">
                        <input
                          type="text"
                          placeholder="Išči po imenu / priimku"
                          style={{
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: 400,
                            borderWidth: "1px",
                            borderColor: "#7C7C7C",
                            borderRadius: "8px",
                            paddingLeft: "15.8px",
                            paddingRight: "15.8px",
                            color: "#7C7C7C",
                            backgroundColor: "white",
                            fontVariationSettings: "'opsz' 16",
                          }}
                          className="w-[307px] tablet:w-[292px] h-[48px] mb-4 tablet:mb-0 tablet:h-full "
                        />

                      
                      <div className="h-[48px] w-[307px] tablet:hidden">
                          <Dropdown
                            label={"Mesto"}
                            isFromNotification={false}
                            isFromFlower={false}
                            isFrom={"florist"}
                            isFromFlowerGreenBgTablet={false}
                            isFromObituary={false}
                            onSelect={()=>{}}
                          />
                      </div>      

                      <div className=" h-[48px] my-4 w-[307px] tablet:hidden" >
                        <Dropdown
                          label={"Regija"}
                          isFromNotification={false}
                          isFromObituary={false}
                          isFromFlower={false}
                          isFrom={"florist"}
                          isFromFlowerGreenBgTablet={false}
                          onSelect={()=>{}}

                        />
                      </div>

                      <button className=" text-[#F6F6F6] w-[307px] tablet:w-[292px] h-[48px] bg-[#414141] rounded-lg    ">Prikaži</button>

                    </div>


                    <div
                      className="hidden desktop:flex justify-center  w-12 items-center h-full desktop:aspect-square rounded-lg bg-[#414141]"
                    >
                      <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
                    </div>
                  </div>
            </div>

            <FloristList />              

        <SponsorComponent text = "To stran so omogočili"/>
      </div>
    </Layout>
  );
};

export default FloristsListPage;
