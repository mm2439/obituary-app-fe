import React from "react";
import Link from "next/link";

const MemorialPage = () => {
  return (
    <div className="w-full bg-[#D4E6F9]">
      <div className="relative max-w-[1920px] h-[584px] mobile:h-[871px] w-full overflow-hidden flex mx-auto justify-center items-center">
        {/*Main Container*/}
        <div className="flex w-[1039px] h-[584px] tablet:w-[600px] tablet:h-[504px] mobile:w-[296px] mobile:h-[771px] items-center flex-col">
          {/*Header Container*/}
          <div className="flex w-full h-[102px] mobile:h-[163px] desktop:mt-[55px] tablet:mt-1 items-center flex-col">
            <div className="text-[40px] mobile:text-[28px] text-[#3C3E41] font-variation-customOpt40 mobile:font-variation-customOpt28 flex text-center mobile:leading-10">
              Spominska stran s Skrbnikom
            </div>
            <div className="text-[24px] mobile:text-[20px] text-[#3C3E41] font-bold mobile:font-variation-customOpt20wght400 mobile:font-bold mobile:text-center font-variation-customOpt24 mt-[6px] mobile:mt-[3px] mobile:leading-10">
              Nadgradnja v pravo spominsko stran
            </div>
          </div>

          {/*H2 container*/}
          <p className="flex w-[869px] h-[108px] tablet:w-[600px] tablet:h-[127px] mobile:w-[296px] mobile:h-[162px] text-center text-[18px] text-[#3C3E41] font-variation-customOpt18 mt-3 mobile:mt-8 tablet:mt-[18px] justify-center items-center leading-[27px]">
            Da lahko postane spominska stran še bolj osebna, prilagojena
            pokojniku in še toplejša, je nujna pomoč nekoga, ki je pokojnika
            dobro poznal - in tak postane Skrbnik = administrator spominske
            strani svojega bližnjega.
          </p>

          {/*H3 Container*/}
          <div className="flex w-[812px] h-[118px] tablet:w-[600px] mobile:w-[296px] mobile:h-[243px] text-center text-[14px] text-[#3C3E41] font-variation-customOpt14 mt-[9px] tablet:mt-[3px] mobile:mt-8 justify-center leading-[27px] ">
            Skrbnik skrbi za točnost objavljenih vsebin, ker je pokojnika dobro
            poznal, sam določa, kaj bo objavljeno in kaj ne in s tem preprečuje
            nadležno smetenje spominske strani pokojnika (spam) ter omogoča
            dodajanje občutljivih, a pomembnih vsebin (npr. religiozne simbole,
            fotografije, ipd). Zaradi skrbnika, ki skrbi za stran, se odprejo
            dodatne možnosti za vse obiskovalce strani.
          </div>

          {/*Button Container*/}
          <Link
            href={"/keeperpromo"}
            className="w-[155px] flex h-[48px] mobile:w-[295px] mt-2 mobile:mt-[33px] tablet:mt-6 text-[16px] font-variation-customOpt16 rounded-lg text-[#1E2125] justify-center items-center 
        shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF]"
          >
            Več o Skrbniku
          </Link>

          {/*H4 Container*/}
          <div className="flex w-[792px] h-[57px] tablet:w-[600px] tablet:h-[27px] mobile:w-[296px] mobile:h-[27px] text-center text-[18px] text-[#3C3E41] font-variation-customOpt18 mt-[9px] mobile:mt-[31px] tablet:mt-6 items-end justify-center leading-[27px]">
            Primerjava obeh podrobno
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorialPage;
