"use client";

import React, { useEffect, useState } from "react";
import FrequentlyAskedQuestionView from "../../components/appcomponents/FrequentlyAskedQuestionView";
import FuneralsCompanyBanner from "../../components/appcomponents/FuneralsCompanyBanner";
import Pride from "../../components/appcomponents/Pride";
import Cemeteries from "../../components/appcomponents/Cemeteries";
import LastObituariesList from "../../components/appcomponents/LastObituariesList";
import FuneralInFewDays from "../../components/appcomponents/FuneralInFewDays";
import Layout from "../../components/appcomponents/Layout";
import companyService from "@/services/company-service";

const FuneralCompany = ({ params }) => {
  const { id } = params;
  const [company, setCompany] = useState({
    phone: "1231391093",
    address: "Cvetličarna Suniflower",
    city: "Milano",
    name: "Pogrebni zavod",
    secondary_title: "Naš ponos",
    secondary_description:
      " Projekt prenove trboveljskega pokopališča je bil leta 2020 izbran kot primer dobre prakse trajnostnega urbanega razvoja v okviru razpisa Mesta mestom.",
  });

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = async () => {
    try {
      const response = await companyService.getFuneralCompany({ id });
      console.log(response);
      setCompany(response.company);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout from={"5"} data={company} forFooter={"company"}>
      <div className="w-full items-center flex-col flex">
        <div className="flex flex-col mx-auto w-full desktop:bg-[#F5F7F9] bg-white">
          <FuneralsCompanyBanner data={company} />
          <LastObituariesList />
          <FuneralInFewDays data={company} />
          <Cemeteries data={company} />
          <Pride data={company} />
          <FrequentlyAskedQuestionView data={company} from={"2"} />
        </div>
        {company === null && (
          <>
            <div className="flex z-[50] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end mobile:mt-[49px] tablet:mt-[43px] desktop:mt-[93px]">
              <div className="flex shadow-custom-dark-dark-box-image-wall bg-[#FFFFFF] self-end  px-[18px] py-[17px] rounded-[17px] w-[171px] tablet:w-[171px] desktop:w-[171px]">
                <p className="flex tablet:hidden desktop:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight ">
                  Op. Oglejte si to isto stran na računalniku ali vsaj na
                  tablici, kjer je več prostora za komentarje.
                </p>
                <p className="mobile:hidden flex text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                  V zgornji vrstici menija je vaše ime, vključno s priročnim
                  gumbom za direktno klicanje s telefona, brez odtipkavanja
                  številke.
                </p>
              </div>
            </div>
            <div
              className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[675px] tablet:mt-[514px] desktop:mt-[520px]
              "
            >
              <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
                <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                  Vaši kontaktni podatki in osnovna predstavitev.
                </p>
              </div>
            </div>
            <div
              className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[2280px] tablet:mt-[875px] desktop:mt-[1000px]
              "
            >
              <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
                <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                  Vse osmrtnice iz vašega kraja so avtomatsko osveževane. Enako
                  pogrebi spodaj.
                </p>
              </div>
            </div>
          </>
        )}
        {/* <div
          className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[1770px] tablet:mt-[3150px] desktop:mt-[3030px] mobile:hidden
              "
        >
          <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
            <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Vnesete vsa pokopališča s katerimi upravljate, vključno s tistimi,
              kjer se že dolga leta ne opravljajo več pokopi.
            </p>
          </div>
        </div> */}
        {/* <div
          className="flex z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[3220px] tablet:mt-[2650px] desktop:mt-[3510px] tablet:hidden
              "
        >
          <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[171px]">
            <p className="flex mobile:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Še nekaj dodatnega prostora za predstavitev, kak poudarek,
              zanimivost, morda kaj na kar ste posebej ponosni.
            </p>
            <p className="hidden mobile:flex text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Vnesete vsa pokopališča s katerimi upravljate, vključno s tistimi,
              kjer se že dolga leta ne opravljajo več pokopi.
            </p>
          </div>
        </div> */}
        {/* <div
          className="hidden z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[4050px] tablet:mt-[3700px] desktop:mt-[3910px] desktop:flex
              "
        >
          <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[171px] ">
            <p className="flex mobile:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Koristne informacije za uporabnike. Sami napišete najbolj pogosta
              vprašanja in nanje odgovorite. <br />
              <br />
              Enako tudi gumb ‘’Kaj storiti, ko se zgodi’’
            </p>
          </div>
        </div> */}
        {/* <div
          className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[5005px] tablet:mt-[4860px] desktop:mt-[4370px]
              "
        >
          <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[228px] ">
            <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Vstavljanje svojih slik in tekstov je zelo enostavno in vsak lahko
              izdela stran prej kot v pol ure. <br />
              <br />
              Stran lahko kasneje kadarkoli dopolnjujete, posodabljate.
              Enostavno je.
              <br />
              <br />
              Te pol ure za izdelavo strani, vam bo prihranilo dolge ure vsak
              mesec, ko odgovarjate na vedno ista vprašanja. Stran bo v pomoč
              uporabnikom in vam.
            </p>
          </div>
        </div> */}
      </div>

      {/* <div className="flex flex-col mx-auto w-full desktop:bg-[#F5F7F9] bg-white">
        <FuneralsCompanyBanner />
        <LastObituariesList/>
        <FuneralInFewDays/>
        <Cemeteries/>
        <Pride/>
        <FrequentlyAskedQuestionView from={"2"} />
      </div>
      <div className="flex z-[50] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end mobile:mt-[49px] tablet:mt-[43px] desktop:mt-[93px] bg-red-500">
            <div className="flex shadow-custom-dark-dark-box-image-wall bg-[#FFFFFF] self-end  px-[18px] py-[17px] rounded-[17px] w-[171px] tablet:w-[171px] desktop:w-[171px]">
              <p className="flex tablet:hidden desktop:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight ">
              Op. Oglejte si to isto stran na računalniku ali vsaj na tablici, kjer je več prostora za komentarje.  
              </p>
              <p className="mobile:hidden flex text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              V zgornji vrstici menija je vaše ime, vključno s priročnim gumbom za direktno klicanje s telefona, brez odtipkavanja številke. 
              </p>
            </div>
      </div>
      <div className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[675px] tablet:mt-[514px] desktop:mt-[520px]
             ">
            <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
              <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Vaši kontaktni podatki in osnovna predstavitev. 
              </p>
            </div>
      </div>
      <div className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[2280px] tablet:mt-[875px] desktop:mt-[1000px]
             ">
            <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
              <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Vse osmrtnice iz vašega kraja so avtomatsko osveževane. Enako pogrebi spodaj.    
              </p>
            </div>
      </div>
      <div className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[1770px] tablet:mt-[3150px] desktop:mt-[3030px] mobile:hidden
             ">
            <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
              <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Vnesete vsa pokopališča s katerimi upravljate, vključno s tistimi, kjer se že dolga leta ne opravljajo več pokopi. 
              </p>
              
            </div>
      </div>
      <div className="flex z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[3220px] tablet:mt-[2650px] desktop:mt-[3510px] tablet:hidden
             ">
            <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[171px]">
              <p className="flex mobile:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Še nekaj dodatnega prostora za predstavitev, kak poudarek, zanimivost, morda kaj na kar ste posebej ponosni.
              </p>
              <p className="hidden mobile:flex text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Vnesete vsa pokopališča s katerimi upravljate, vključno s tistimi, kjer se že dolga leta ne opravljajo več pokopi.
              </p>
            </div>
      </div>
       <div className="hidden z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[4050px] tablet:mt-[3700px] desktop:mt-[3910px] desktop:flex
             ">
            <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[171px] ">
              <p className="flex mobile:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Koristne informacije za uporabnike. Sami napišete najbolj pogosta vprašanja in nanje odgovorite. <br /><br />Enako tudi gumb ‘’Kaj storiti, ko se zgodi’’</p>
            </div> 
      </div>
      <div className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[5005px] tablet:mt-[4860px] desktop:mt-[4370px]
             ">
            <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[228px] ">
              <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
              Vstavljanje svojih slik in tekstov je zelo enostavno in vsak lahko izdela stran prej kot v pol ure. <br  /><br  />Stran lahko kasneje kadarkoli dopolnjujete, posodabljate. Enostavno je.<br  /><br  />Te pol ure za izdelavo strani, vam bo prihranilo dolge ure vsak mesec, ko odgovarjate na vedno ista vprašanja. Stran bo v pomoč uporabnikom in vam.  
              </p>
            </div>
      </div> */}
    </Layout>
  );
};

export default FuneralCompany;
