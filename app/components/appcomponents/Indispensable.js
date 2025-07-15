import Image from "next/image";
import React from "react";

const Indispensable = () => {
  const containerArray = [
    {
      id: 1,
      title: "Avtomatizacija",
      discription:
        "Neprestano avtomatsko osveževanje osmrtnic in pogrebov v vašem kraju. Še več, poslali vam bomo kodo, ki jo lahko vaši programerji vstavijo v vašo obstoječo spletno stran in tudi tam bo osveževanje avtomatsko. En vnos osmrtnice za vse.",
    },
    {
      id: 2,
      title: "Prihranek časa",
      discription:
        "Vnos nove osmrtnice s pogrebom vzame 2 minuti časa in prihrani v povprečju skoraj pol ure časa. Preračunajte koliko časa boste prihranili tedensko zaradi popolne informacije, ki je v pomoč uporabnikom.",
    },
    {
      id: 3,
      title: "Žalujoči vam bodo hvaležni ",
      discription:
        "Vse koristne informacije bodo imeli na enem mestu, vključno z vašimi podatki in kontakti. Manj bo potrebe po klicanju, naknadnem preverjanju, po drobnih, a za njih pomembnih  vprašanjih.",
    },
    {
      id: 4,
      title: "Nič dela kasneje s spletno stranjo",
      discription:
        "Ne, kasneje vam ne bo treba skrbeti za vašo spletno stran! Potrebnih je zgolj teh 20 minut, da vstavite potrebne podatke in slike in to je vse. Seveda, v kolikor boste želeli, lahko stran kadarkoli dopolnite in dodajate nove informacije, ne bo pa to potrebno. Za osveževanje vaše strani z najbolj relevantnimi podatki za uporabnike, je dovolj zgolj ažurno dodajanje osmrtnic in časa pogrebov, kar pa je v vašem interesu, ker vam prihrani čas. ",

      // Za osveževanje vaše strani z najbolj relevantnimi podatki za uporabnike, je dovolj zgolj ažurno dodajanje osmrtnic in časa pogrebov, kar pa je v vašem interesu, ker vam prihrani čas`
    },
  ];
  // bg-[url('/indispensable_bg_img.png')]

  return (
    <div className="relative w-full h-auto flex justify-center items-center">
      <div
        className="flex relative  max-w-[1920px] w-full  bg-no-repeat
             h-auto justify-center items-center tablet:items-start mobile:items-start mx-auto"
      >
        <img
          src="/indispensable_bg_img.jpg"
          alt="Slika"
          className="relative hidden desktop:block h-[860px] tablet:h-[1139px] mobile:h-[1267px] w-full object-cover"
        />

        <img
          src="/levo_spodaj_mob.jpg"
          alt="Slika"
          className="relative h-[860px] hidden mobile:block tablet:block tablet:h-[1139px] mobile:h-[1267px] w-full object-cover"
        />

        <div className="absolute max-w-[1548px] tablet:mt-[43px] mobile:mt-[29px] tablet:max-w-[622px] mobile:max-w-[322px] tablet:h-[831px] h-[860px] tablet:mb-[263px] mobile:h-[1215px] w-full flex justify-end items-center">
          <div
            className="h-full w-auto desktop:bg-white tablet:backdrop-blur mobile:backdrop-blur mobile:bg-gradient-to-r mobile:from-[#FFFFFF] mobile:to-[#FFFFFF30] mobile:border mobile:rounded-lg flex justify-center items-center
                    tablet:bg-gradient-to-r tablet:from-[#FFFFFF] tablet:to-[#FFFFFF30] tablet:border tablet:rounded-lg"
          >
            <div className="flex flex-col w-[778px] tablet:w-[622px] mobile:w-[322px] mobile:px-[12px] tablet:pl-[22px] pl-[87px] desktop:pr-[95px]  ">
              <div className="flex flex-col">
                <div className="flex h-[33.05px] mobile:justify-center mobile:items-center tablet:items-center mt-[-56px] mobile:mt-[-70px] tablet:mt-[-67px]">
                  <div className="text-[#3090D5] text-[26px] font-normal mobile:text-[20px] mobile:font-variation-customOpt20">
                    Nepogrešljiva
                  </div>
                </div>
                <div className="flex h-[45px] mobile:justify-center items-center  ">
                  <p className="text-[#2D3D48] text-[40px] mobile:text-[28px] mobile:font-variation-customOpt28 mobile:leading-[112px] font-normal ">
                    Pomoč pri vašem delu
                  </p>
                </div>
              </div>
              <div className="h-[1px] bg-[#9DC6E4] w-[528px] mobile:w-full my-8 tablet:mt-[29px] mobile:mt-[20px] mobile:mb-[37px] " />
              <div className="flex flex-col ">
                {containerArray?.map((item, index) => (
                  <ContainerView item={item} index={index} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContainerView = ({ item, index, key }) => {
  return (
    <div className={`flex flex-row ${index == 0 ? "mt-0" : "mt-4"}`}>
      <Image
        key={key}
        src={"/check_circle_icon.png"}
        width={100}
        height={100}
        className="w-6 h-6 mt-[3px]"
      />
      <div className="flex flex-col ml-4 ">
        <div className="text-[#3C3E41] text-[20px] font-variation-customOpt20 font-bold ">
          {item?.title}
        </div>
        <p className="text-[#3C3E41] text-[16px] font-variation-customOpt16 font-normal ">
          {item?.discription}
        </p>
      </div>
    </div>
  );
};

export default Indispensable;
