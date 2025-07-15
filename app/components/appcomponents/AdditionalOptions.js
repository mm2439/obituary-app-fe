"use client"

import React, { useState } from "react";


const AdditionalOptions = () => {
  const [expand, setExpand] = useState(false);
  const list = [
    {
      image: "/image_c1.png",
      title: "Poljubna sožalja ",
      subtitle: "za vse",
      description:
        "Vsi obiskovalci lahko izražajo poljubne komentarje, namesto že vnaprej določenih. Objavo potrdi Skrbnik.",
    },
    {
      image: "/image_c2.png",
      title: "Dodajanje slik ",
      subtitle: "za vse",
      description:
        "Vsi obiskovalci lahko dodajajo slike. Njihovo objavo potrdi Skrbnik.",
    },
    {
      image: "/image_c3.png",
      title: "Nastavitve zasebnosti",
      description:
        "Skrbnik lahko sam določi med tremi opcijami, kdo lahko vidi spominsko stran: samo on, samo povabljeni z geslom ali vsi.",
    },
    {
      image: "/image_c4.png",
      title: "Religiozni simboli",
      description:
        "Skrbnik lahko dodaja religiozne simbole na spominsko stran ob sliki in hkrati tudi k sami osmrtnici na listi osmrtnic.",
    },
    {
      image: "/image_c5.png",
      title: "Dodajanje dogodkov",
      description:
        "Skrbnik lahko dodaja dogodke, običajno ob obletnicah; npr spominska maša itd.",
    },
    {
      image: "/image_c6.png",
      title: "Virtualna svečka",
      description:
        "Ob osmrtnici zagori letna ali večna virtualna svečka. Letna svečka gori eno leto, večna nikoli ne ugasne.",
    },
    {
      image: "/image_c7.png",
      title: "Spreminjanje Osmrtnice",
      description:
        "Skrbnik lahko poljubno spremeni osmrtnico in jo preoblikuje v bolj toplo, življenjsko. Dolga je lahko do tisoč vrstic.",
    },
    {
      image: "/image_c8.png",
      title: "Spreminjanje ozadja",
      description: "Skrbnik lahko doda bolj živahno ozadje na spominsko stran",
    },
    {
      image: "/image_c9.png",
      title: " Biografija, Zadnji pozdrav",
      description:
        "Skrbnik lahko doda zadnji pozdrav, biografijo ali deli zgodbe polne čarobnih trenutkov, ki ne smejo utoniti v pozabo.",
    },
    {
      image: "/image_c10.png",
      title: "Dodajanje glasbe",
      description: "Skrbnik lahko doda glasbo na spominsko stran.",
    },
    {
      image: "/image_c11.png",
      title: "Zahvala",
      description: "Skrbnik lahko napiše zahvalo na spominsko stran.",
    },
    {
      image: "/image_c12.png",
      title: "Predloge za mobi",
      description:
        "Izpopolnjena verzija zahvale IN obvestila o pogrebu prilagojena meram mobilnega telefona za pošiljanje naprej.",
    },
    {
      image: "/image_c13.png",
      title: "Dodatni skrbnik",
      description:
        "Skrbnik lahko povabi še enega uporabnika = dodatnega skrbnika, ki mu pomaga urejati spominsko stran.  S sodelovanjem dveh bo stran še lepša.",
    },
    {
      image: "/image_c14.png",
      title: " Dodajanje verza, misli",
      description:
        "Skrbnik lahko doda enovrstični verz, dobro misel pod sliko.",
    },
    {
      image: "/image_c15.png",
      title: "Podrobni vpogled",
      description:
        "Skrbnik pridobi podroben vpogled v vse, kar se dogaja na spominski strani. Glede obiska, zgodovino vseh sprememb, sožalij, vpisov v Žalno knjigo, prihajajočih obletnicah,...",
    },
    {
      image: "/image_c16.png",
      title: "Kontrola nad vsebino",
      description:
        "Skrbnik ima kontrolo nad tem, kaj je prikazano in kaj ne. Sam odobri ali zavrne objave drugih.",
    },
    {
      image: "/image_c17.png",
      title: "Kmalu še več",
      description:
        "V pripravi je še nekaj ugodnosti za Skrbnika (in tudi za vse obiskovalce strani).",
    },
  ];

  return (
    <div className="bg-white w-full">
      <div className="relative max-w-[1920px] w-full overflow-hidden mx-auto justify-center items-center  flex ">
        {/*Main container*/}
        <div className="flex flex-col items-center mobile:mt-10 pt-[114px] pb-[86px]">
          {/*Header container*/}
          <div className="flex w-[617.64px] h-[170px] tablet:h-[136px] mobile:h-[127px] mobile:w-[360px] flex-col items-center">
            <h className="w-full flex justify-center h-12 text-[40px] mobile:text-[28px] text-[#1E2125] font-variation-customOpt40 mobile:font-variation-customOpt28 mobile:text-center ">
              Dodatne možnosti
            </h>
            <div className="w-full h-[27px] text-[24px] mobile:text-[20px] mobile:font-variation-customOpt20wght400 text-[#3C3E41] font-bold font-variation-customOpt24 flex justify-center mt-2 mobile:mt-[2px]">
              na spominski strani{" "}
              <span className="text-[#0A85C2] ml-1"> s Skrbnikom</span>
            </div>
          </div>

          {/*grid container*/}
          <div className="grid grid-cols-3 gap-x-[40px] tablet:gap-x-0 gap-y-6 tablet:grid-cols-2 mobile:grid-cols-1">
            {/*grid column container*/}
            {list.slice(0, expand ? list.length : 6).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center mobile:mx-auto"
              >
                <img
                  src={item.image}
                  alt="pencil sidemenu image"
                  className="w-[64px] h-[64px] mt-4"
                ></img>

                <div className="text-[20px] text-[#1E2125] font-variation-customOpt24 font-semibold mt-[11px]">
                  {item.title}
                  <span className="text-[#0A85C2]">{item.subtitle}</span>
                </div>

                <div className="w-[295.42px] h-[72px] tablet:px-1 text-[14px] text-[#3C3E41] font-variation-customOpt14 text-center mt-[14px] leading-6">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {!expand && <button 
              className="py-[12px] px-[25px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] text-[16px] leading-[24px] font-normal rounded-[8px] mt-[56px] text-[#3C3E41]" 
              style={{
                boxShadow: '5px 5px 10px 0px #C2C2C280, -5px -5px 10px 0px #FFFFFF'
              }}
              onClick={() => setExpand(!expand)}
            >Odpri več</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalOptions;
