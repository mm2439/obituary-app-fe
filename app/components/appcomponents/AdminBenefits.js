"use client"

import Image from "next/image";
import { useState } from "react";

export default function AdminBenefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-[#F9EBD466]">
      <div className="relative max-w-[1029px] tablet:max-w-[640px] py-[125px] tablet:py-[95px] px-[10px] w-full mx-auto">
        <h1 className="text-center text-[40px] font-[400] text-[#3C3E41] leading-[32px] mobile:text-[28px] mobile:leading-[40px]">Prednosti Skrbnika</h1>
        <div className="space-y-[125px] mobile:hidden tablet:space-y-[60px] mobile:space-y-[60px] mt-[100px] tablet:mt-[55px] mobile:mt-[55px]">
          <div className="flex gap-[100px] items-center">
            <Image src="/admin_benifits_1.png" alt="admin-benefit-1" className="w-[281px] shrink-0 tablet:hidden mobile:hidden" width={281} height={221} />
            <div className="space-y-[10px]">
              <h3 className="text-[24px] font-[700] text-[#3C3E41] leading-[48px]">1. Omogoči številne dodatne možnosti VSEM bližnjim</h3>
              <p className="text-[18px] font-[400] text-[#3C3E41] leading-[27px]">
              Skrbnik prevzame skrb za objavljenimi vsebinami vseh in s tem omogoči družini in vsem bližnjim dodajanje številnih vsebin osebne narave. <br />
              Brez njega ne bi bilo mogoče dodajanje slik, deljenje zgodb, ki ne smejo nikoli v pozabo, čarobnih trenutkov, poezije, posvetil, niti zadnjega pozdrava, biografije. <br />
              Stran postane s skrbnikom toplejša, barvita, pristna, polna življenja in spominov.
              </p>
            </div>
          </div>
          <div className="flex mobile:flex-col mobile:px-[25px] tablet:px-[25px] tablet:flex-col gap-[120px] tablet:gap-[60px] mobile:gap-[60px] items-center">
            <div className="space-y-[10px]">
              <h3 className="text-[24px] font-[700] text-[#3C3E41] leading-[48px]">2. Zbližuje ljudi, povezuje generacije</h3>
              <p className="text-[18px] font-[400] text-[#3C3E41] leading-[27px]">
              Spominsko stran lahko tako skupaj soustvarjajo vsi, ki so pokojnega imeli radi – družina, prijatelji in znanci. Mlajši, ki so navajeni digitalnih vsebin, lahko na ta način lažje vzpostavijo povezavo s predniki, oddaljeni sorodniki pa lahko sodelujejo ne glede na geografsko oddaljenost. <br/>
              Skrbnik lahko dodeli status skrbnika še nekomu in tako skupaj soustvarjata spominsko stran in se medsebojno povezujeta (npr. dedek - vnuk). 
              </p>
            </div>
            <div className="desktop:min-w-[250px] shrink-0 mobile:hidden tablet:flex tablet:gap-[44px]">
              <Image src="/admin_benifits_2.png" alt="admin-benefit-1" className="w-[181px] tablet:w-[130px]" width={181} height={237} />
              <Image src="/admin_benifits_3.png" alt="admin-benefit-1" className="w-[85px] hidden tablet:block shrink-0 mx-auto" width={85} height={170} />
            </div>
          </div>
          <div className="flex gap-[100px] mobile:px-[25px] tablet:px-[25px] items-center">
            <div className="min-w-[270px] shrink-0 mobile:hidden tablet:hidden">
              <Image src="/admin_benifits_3.png" alt="admin-benefit-1" className="w-[123px] shrink-0 mx-auto" width={123} height={244} />
            </div>

            <div className="space-y-[10px]">
              <h3 className="text-[24px] font-[700] text-[#3C3E41] leading-[48px]">3. Večni zapisi. Lahko tudi samo za najbližje</h3>
              <p className="text-[18px] font-[400] text-[#3C3E41] leading-[27px]">
              Zapisi na digitalnem mediju so večni, zgodbe živijo in slike ne zbledijo, drugače kot velja za tiste v predalu ali albumu. Tiste redko odpremo, medtem ko se na živo stran, ki se neprestano dopolnjuje, radi vračamo. Bližnji bodo hvaležni. <br />
              Skrbnik lahko spominsko stran najdražje(ga) tudi skrije za javnost oz jo narediti zasebno, ki bo dostopna samo najbližjim, ki jim bo sam zaupal geslo.   
              </p>
            </div>
          </div>
          <div className="flex gap-[100px] items-center">
            <div className="space-y-[10px]">
              <h3 className="text-[24px] font-[700] text-[#3C3E41] leading-[48px]">4. Cvetličarne podarijo status skrbnika za en mesec</h3>
              <p className="text-[18px] font-[400] text-[#3C3E41] leading-[27px]">
              Žalujoči lahko v tem času neomejeno dopolnjujejo spominsko stran (Skrbnik mora potrditi objavo) in vse vsebine, ki se dodajo, bodo ostale tudi, ko status poteče. <br />
              Po enem mesecu se obstoječi Skrbnik odloči, ali bo status podaljšal za eno leto ali več ali pa bo status skrbnika ukinjen in dodajanje novih vsebin ne bo več mogoče. 
              </p>
            </div>
            <div className="min-w-[270px] shrink-0 mobile:hidden tablet:hidden">
              <Image src="/admin_benifits_4.jpg" alt="admin-benefit-1" className="w-[270px] mx-auto" width={270} height={168} />
            </div>
          </div>
          <h2 className="text-[#3C3E41] text-[24px] font-bold leading-[27px] text-center">Brez rizika. Brez obveznosti. Brezplačno za cel mesec.</h2>
        </div>
        <div className="hidden mobile:block space-y-[50px] mt-[35px] max-w-[335px] mx-auto text-center">
          {activeIndex === 0 && <div className="space-y-[16px]">
            <h3 className="text-[20px] font-[600] text-[#3C3E41] leading-[28px]">
            1. <br />
            Omogoči dodatne možnosti <br />
            sodelovanja VSEM bližnjim
            </h3>
            <p className="text-[15px] font-[400] text-[#3C3E41] leading-[22px]">
            Skrbnik prevzame skrb za objavljenimi vsebinami vseh in s tem omogoči družini in vsem bližnjim dodajanje vsebin osebne narave. <br />
            Brez skrbnika ne bi bilo mogoče dodajanje slik, deljenje zgodb, ki ne smejo nikoli v pozabo, čarobnih trenutkov, poezije, posvetil, niti zadnjega pozdrava, biografije. <br />
            Stran postane s skrbnikom toplejša, barvita, pristna, polna življenja in spominov.
            </p>
          </div>}
          {activeIndex === 1 && <div className="space-y-[16px]">
            <h3 className="text-[20px] font-[600] text-[#3C3E41] leading-[28px]">
            2. <br />
            Zbližuje ljudi, povezuje generacije
            </h3>
            <p className="text-[15px] font-[400] text-[#3C3E41] leading-[22px]">
            Spominsko stran lahko tako skupaj soustvarjajo vsi, ki so pokojnega imeli radi – družina, prijatelji in znanci. Mlajši, ki so navajeni digitalnih vsebin, lahko na ta način laže vzpostavijo povezavo s predniki, oddaljeni sorodniki pa lahko sodelujejo ne glede na geografsko oddaljenost. <br />
            </p>
          </div>}
          {activeIndex === 2 && <div className="space-y-[16px]">
            <h3 className="text-[20px] font-[600] text-[#3C3E41] leading-[28px]">
            3. <br />
            Večni zapisi. Lahko tudi samo za najbližje
            </h3>
            <p className="text-[15px] font-[400] text-[#3C3E41] leading-[22px]">
            Zapisi na digitalnem mediju so večni, zgodbe živijo in slike ne zbledijo, drugače kot velja za tiste v predalu ali albumu. Tiste redko odpremo, medtem ko se na živo stran, ki se neprestano dopolnjuje, radi vračamo. Bližnji bodo hvaležni. <br />
            Skrbnik lahko spominsko stran najdražje(ga) tudi skrije za javnost oz jo narediti zasebno, ki bo dostopna samo najbližjim, ki jim bo sam zaupal geslo.
            </p>
          </div>}
          {activeIndex === 3 && <div className="space-y-[16px]">
            <h3 className="text-[20px] font-[600] text-[#3C3E41] leading-[28px]">
            4. <br />
            Cvetličarne podarijo status skrbnika za en mesec
            </h3>
            <p className="text-[15px] font-[400] text-[#3C3E41] leading-[22px]">
            Žalujoči lahko v tem času neomejeno dopolnjujejo spominsko stran (Skrbnik mora potrditi objavo) in vse vsebine, ki se dodajo, bodo ostale tudi, ko status poteče. <br />
            </p>
          </div>}
          <div className="flex gap-[45px] justify-between items-center">
            <Image src="/keeper_left_arrow.png" alt="admin-benefit-1" className="w-[23px] shrink-0 mx-auto" width={23} height={40} onClick={() => (activeIndex > 0) && setActiveIndex(activeIndex - 1)} />
            <div className="flex gap-[8px] items-center">
              <div className={`w-[16px] h-[16px] rounded-full cursor-pointer ${activeIndex === 0 ? 'bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]' : 'bg-gradient-to-br from-[#C3C6C8] to-[#E3E5E5]'}`} onClick={() => setActiveIndex(0)}
                style={{
                  boxShadow: activeIndex === 0 ? '5px 5px 10px 0px #C2C2C280, -5px -5px 10px 0px #FFFFFF' : 'none'
                }}></div>
              <div className={`w-[16px] h-[16px] rounded-full cursor-pointer ${activeIndex === 1 ? 'bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]' : 'bg-gradient-to-br from-[#C3C6C8] to-[#E3E5E5]'}`} onClick={() => setActiveIndex(1)}
                style={{
                  boxShadow: activeIndex === 1 ? '5px 5px 10px 0px #C2C2C280, -5px -5px 10px 0px #FFFFFF' : 'none'
                }}></div>
              <div className={`w-[16px] h-[16px] rounded-full cursor-pointer ${activeIndex === 2 ? 'bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]' : 'bg-gradient-to-br from-[#C3C6C8] to-[#E3E5E5]'}`} onClick={() => setActiveIndex(2)}
                style={{
                  boxShadow: activeIndex === 2 ? '5px 5px 10px 0px #C2C2C280, -5px -5px 10px 0px #FFFFFF' : 'none'
                }}></div>
              <div className={`w-[16px] h-[16px] rounded-full cursor-pointer ${activeIndex === 3 ? 'bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]' : 'bg-gradient-to-br from-[#C3C6C8] to-[#E3E5E5]'}`} onClick={() => setActiveIndex(3)}
                style={{
                  boxShadow: activeIndex === 3 ? '5px 5px 10px 0px #C2C2C280, -5px -5px 10px 0px #FFFFFF' : 'none'
                }}></div>
            </div>
            <Image src="/keeper_right_arrow.png" alt="admin-benefit-1" className="w-[23px] shrink-0 mx-auto" width={23} height={40} onClick={() => (activeIndex < 3) && setActiveIndex(activeIndex + 1)} />
          </div>
        </div>
      </div>
    </div>
  );
}