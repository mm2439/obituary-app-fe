"use client";
import React, { useEffect } from "react";
import Layout from "../../components/appcomponents/Layout";
import FloristsSunFlowerView from "../../components/appcomponents/FloristsSunFlowerView";
import SadProgram from "../../components/appcomponents/SadProgram";
import Qualityflowers from "../../components/appcomponents/Qualityflowers";
import SpecialOffer from "../../components/appcomponents/SpecialOffer";
import Offer from "../../components/appcomponents/Offer";
import SunflowerFlorist from "../../components/appcomponents/SunflowerFlorist";
import { useState } from "react";
import companyService from "@/services/company-service";

const FloristsDetailsPage = ({ params }) => {
  const { id } = params;
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = async () => {
    try {
      const response = await companyService.getFloristCompany({ id });
      console.log(response);
      setCompany(response.company);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout from={"7"} data={company} forFooter={"memorypage"}>
        <div className="flex flex-col items-center mx-auto w-full">
          <div className="flex flex-col mx-auto w-full bg-[#F5F7F9]">
            <FloristsSunFlowerView data={company} />
            <Offer data={company} />
            <SadProgram key={company?.id} data={company} />
            <Qualityflowers data={company} />
            <SpecialOffer key={company?.id} data={company} />
            <SunflowerFlorist key={company?.id} data={company} />
          </div>
          {company === null && (
            <>
              <div className="flex mobile:hidden z-[50] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end mobile:mt-[49px] tablet:mt-[83px] desktop:mt-[49px]">
                <div className="flex shadow-custom-dark-dark-box-image-wall bg-[#FFFFFF] self-end  px-[18px] py-[17px] rounded-[17px] w-[171px] tablet:w-[171px] desktop:w-[171px]">
                  <p className="flex tablet:hidden desktop:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight ">
                    Zgornjo sliko zamenjate s svojo, stekleni okvirček lahko
                    tudi odstranite.
                  </p>
                  <p className="mobile:hidden flex text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                    Namesto našega menija so tu vaši podatki, vključno s
                    priročnim gumbom za direktno klicanje s telefona, brez
                    odtipkavanja številke.
                  </p>
                </div>
              </div>

              <div
                className="flex z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[412px] tablet:mt-[414px] desktop:mt-[402px]
             "
              >
                <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
                  <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                    Zgornjo sliko zamenjate s svojo, stekleni okvirček lahko
                    tudi odstranite.
                  </p>
                </div>
              </div>
              <div
                className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[725px] tablet:mt-[665px] desktop:mt-[615px]
             "
              >
                <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
                  <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                    Nekaj slik je že priloženih, v kolikor še nimate svojih in
                    lahko uporabite te, svoje pa dodate kdaj kasneje.
                  </p>
                </div>
              </div>
              <div
                className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[1770px] tablet:mt-[1325px] desktop:mt-[1388px]
             "
              >
                <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
                  <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                    Ko uporabnik klikne na nek produkt, se odpre forma, preko
                    katere vas lahko kontaktirajo direktno.
                    <br />
                    <br /> Kmalu bomo dodali možnost direktnega naročanja preko
                    spleta.
                  </p>
                </div>
              </div>
              <div
                className="flex z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[3050px] tablet:mt-[2650px] desktop:mt-[2269px]
             "
              >
                <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[171px]">
                  <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                    Blok, kjer naj bi bilo nekaj kar želite poudariti; nekaj
                    ikonic za popestritev bloka je že dodanih, lahko pa ta blok
                    izdelate tudi sami in ga prilepite na predvideno mesto.
                    <br className="desktop:hidden" />
                    <br className="desktop:hidden" /> Te steklene okvirčke lahko
                    seveda izbrišete in dodate karkoli, lahko je zgolj slika ali
                    poudarjen tekst z vašo telefonsko številko, ipd. Lahko tudi
                    povsem izpustite ta blok.
                  </p>
                </div>
              </div>
              <div
                className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[4050px] tablet:mt-[3700px] desktop:mt-[3090px]
             "
              >
                <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[345px] ">
                  <p className="flex tablet:hidden desktop:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                    Enako kot prejšnji blok, si lahko tudi tega skreirate sami
                    in ga prilepite kot sliko, lahko pa ga tudi izbrišete.
                    <br />
                    <br />
                    In seveda noga vaše spletne strani, brez naše noge, kjer
                    lahko dodate vse potrebne informacije in povezave do vaših
                    socialnih omrežij. V kolikor imate več trgovin, je vsaka z
                    vsemi informacijami na svojem slajdu.
                  </p>
                  <p className="flex mobile:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                    In seveda noga vaše spletne strani, brez naše noge, kjer
                    lahko dodate vse potrebne informacije in povezave do vaših
                    socialnih omrežij. V kolikor imate več trgovin, je vsaka z
                    vsemi informacijami na svojem slajdu.{" "}
                  </p>
                </div>
              </div>
              <div
                className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
              mobile:mt-[4505px] tablet:mt-[4390px] desktop:mt-[3527px]
             "
              >
                <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[272px] desktop:w-[345px] ">
                  <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                    Vstavljanje svojih slik in tekstov je zelo enostavno in vsak
                    si lahko izdela stran prej kot v pol ure. Stran lahko
                    kasneje kadarkoli dopolnjujete, posodabljate, jo prilagodite
                    trenutnim praznikom ali promocijam.
                    <br className="desktop:hidden" />
                    <br className="desktop:hidden" />
                    Enostavno je.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default FloristsDetailsPage;
