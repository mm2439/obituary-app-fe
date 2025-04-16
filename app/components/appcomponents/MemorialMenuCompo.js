import Image from "next/image";
import Link from "next/link";
import React from "react";

const MemorialMenuCompo = ({ setActiveButton }) => {
  return (
    <div className="w-[1200px] p-5 bg-[#ECF0F3] rounded-2xl">
      <div className="flex w-full h-[395px] justify-center rounded-2xl bg-white p-5 gap-x-6 ">
        {/* First container */}
        <div className="flex w-[270px] flex-col gap-y-2">
          {/* 1st active button container */}
          <div
            onClick={() => {
              console.log("1st button is tapped!! 2nd button");
              setActiveButton("Osmrtnice");
            }}
            className="flex bg-gradient-to-l w-[270px] h-[65px] py-[8px] px-[8px] rounded-[10px]"
          >
            {/* main container which is wrapped inside */}
            <div className="flex w-full pl-[2px] flex-row justify-between">
              <div className="flex items-center flex-row">
                {/* image container */}
                <div className="flex items-center justify-center w-[24px] h-[20px]">
                  <Image
                    src={"/img_profile_obituary.png"}
                    width={24}
                    height={20}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353]">
                    Osmrtnice
                  </div>
                  <div className="text-[14px] font-medium text-[#535353]">
                    Pogrebi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd active button container */}
          <div
            onClick={() => {
              console.log("1st button is tapped!!");
              setActiveButton("Spominska");
            }}
            className="flex bg-gradient-to-r w-[270px] h-[65px] py-[8px] px-[8px] from-[#B9DFF2] to-[#DAEBF182] border-[#17528A80] border-2 rounded-[10px]"
          >
            {/* main container which is wrapped inside */}
            <div className="flex w-full flex-row justify-between">
              <div className="flex items-center flex-row">
                {/* image container */}
                <div className="w-[24px] flex items-center justify-center h-[20px]">
                  <Image
                    src={"/img_memorial_vector.png"}
                    width={24}
                    height={20}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col ml-[12px] justify-center">
                  <div className="text-[14px] font-medium text-[#5EAE91]">
                    Spominska
                  </div>
                  <div className="text-[14px] font-medium text-[#5EAE91]">
                    Spominska s Skrbnikom
                  </div>
                </div>
              </div>

              {/* image container */}
              <Image
                src={"/img_left_arrow_green.png"}
                width={24}
                height={19}
                alt="image arrow blue"
              />
            </div>
          </div>

          {/* 3rd active button container */}
          <div
            onClick={() => {
              console.log("1st button is tapped!! 2nd button");
              setActiveButton("Lokalne cvetličarne");
            }}
            className="flex bg-gradient-to-l w-[270px] h-[65px] py-[8px] px-[8px] rounded-[10px]"
          >
            {/* main container which is wrapped inside */}
            <div className="flex w-full pl-[2px] flex-row justify-between">
              <div className="flex items-center flex-row">
                {/* image container */}
                <div className="flex items-center justify-center w-[24px] h-[20px]">
                  <Image
                    src={"/img_flower.png"}
                    width={24}
                    height={20}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353]">
                    Lokalne cvetličarne
                  </div>
                  <div className="text-[14px] font-medium text-[#535353]">
                    Pogrebna podjetja
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4th active button container */}
          <div
            onClick={() => {
              console.log("4th button is tapped!!");
              setActiveButton("Vse strani");
            }}
            className="flex bg-gradient-to-l w-[270px] h-[65px] py-[8px] px-[8px] rounded-[10px]"
          >
            {/* main container which is wrapped inside */}
            <div className="flex w-full pl-[2px] flex-row justify-between">
              <div className="flex items-center flex-row">
                {/* image container */}
                <div className="flex items-center justify-center w-[24px] h-[20px]">
                  <Image
                    src={"/img_four_dots.png"}
                    width={24}
                    height={20}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353]">
                    Vse strani
                  </div>
                  <div className="text-[14px] font-medium text-[#535353]">
                    Kontaktne informacije
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second container */}
        <div className="flex w-[270px] flex-col">
          {/* 1st title container */}
          <div className="flex max-w-[270px] w-full">
            {/* main container which is wrapped inside */}
            <div className="flex flex-row justify-between py-[10px] px-[10px] ">
              <div className="flex flex-row items-start ">
                {/* image container */}
                <Image
                  src={"/img_memorial_vector.png"}
                  width={24}
                  height={20}
                  alt="image obituary profile"
                />

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <Link href={"/memorypromo"}>
                    <div className="text-[14px] font-medium text-[#535353] leading-[22px]">
                      Spominska stran
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="text-[12px] font-normal text-[#5EAE91] leading-[22px] mr-[10px]">
                        Podrobno
                      </div>
                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_green_left_arrow.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd title container */}
          <div className="flex max-w-[270px] w-full">
            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
              <div className="flex flex-row items-start ">
                {/* image container */}
                <Image
                  src={"/img_memorial_vector.png"}
                  width={24}
                  height={20}
                  alt="image obituary profile"
                />

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353] leading-[22px]">
                    BREZPLAČNIH 9
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="text-[12px] font-noraml text-[#686868]">
                      Med drugim tudi: vpis v Žalno knjigo, prižig svečke v
                      spomin, izrekanje sožalja, že pripravljena obvestila za
                      pošiljanje preko MOBI in e-pošte, opomniki za obletnice in
                      osmrtnice v domačem kraju.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd title container */}
          <div className="flex max-w-[270px] w-full">
            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
              <div className="flex flex-row items-start ">
                {/* image container */}
                <Image
                  src={"/img_memorial_vector.png"}
                  width={24}
                  height={20}
                  alt="image obituary profile"
                />

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353] leading-[22px] truncate">
                    Primerjava BREZ in S Skrbnikom
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="text-[12px] font-normal text-[#5EAE91] leading-[22px] mr-[10px]">
                      Podrobno
                    </div>
                    <div className="w-[6px] h-[11px]">
                      <Image
                        src={"/img_green_left_arrow.png"}
                        width={6}
                        height={11}
                        className="h-[11px] w-[6px]"
                        alt="image obituary profile"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third container */}
        <div className="flex w-[270px] flex-col">
          {/* 1st title container */}
          <div className="flex w-full max-w-[270px]">
            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
              <div className="flex flex-row items-start ">
                {/* image container */}
                <Image
                  src={"/img_memorial_vector.png"}
                  width={24}
                  height={20}
                  alt="image obituary profile"
                />

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <Link href={"/keeperpromo"}>
                    <div className="text-[14px] font-medium text-[#535353] leading-[22px]">
                      Spominska stran s Skrbnikom
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="text-[12px] font-normal text-[#5EAE91] leading-[22px] mr-[10px]">
                        Podrobno
                      </div>
                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_green_left_arrow.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd title container */}
          <div className="flex max-w-[270px] w-full">
            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
              <div className="flex flex-row items-start ">
                {/* image container */}
                <Image
                  src={"/img_memorial_vector.png"}
                  width={24}
                  height={20}
                  alt="image obituary profile"
                />

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353] leading-[22px]">
                    BREZPLAČNIH 25+
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="text-[12px] font-noraml text-[#686868]">
                      Poleg ostalega še več brezplačnih ugodnosti za vse
                      obiskovalce. Opcija zasebnosti = stran dostopna samo
                      družini (preko gesla). Deljenje daljših zgodb do 10.000
                      znakov ali Zadnji klic.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd title container */}
          <div className="flexmax-w-[270px] w-full">
            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
              <div className="flex flex-row items-start ">
                {/* image container */}
                <Image
                  src={"/img_memorial_vector.png"}
                  width={24}
                  height={20}
                  alt="image obituary profile"
                />

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353] leading-[22px] truncate">
                    Postani Skrbnik
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="text-[12px] font-normal text-[#5EAE91] leading-[22px] mr-[10px]">
                      Podrobno
                    </div>
                    <div className="w-[6px] h-[11px]">
                      <Image
                        src={"/img_green_left_arrow.png"}
                        width={6}
                        height={11}
                        className="h-[11px] w-[6px]"
                        alt="image obituary profile"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fourth container */}
        <div className="flex relative flex-col w-[270px] gap-y-[6px] shadow-custom-dark-bottom text-black rounded-[10px]">
          <Image
            src={"/img_bg_promocija.avif"}
            alt=""
            layout="fill"
            objectPosition="cover"
            className="rounded-[10px]"
          />

          {/* title container */}
          <div className="flex flex-col py-[10px] px-3">
            {/* first title container */}
            <div
              style={{
                fontSize: "12px",
                lineHeight: "26px",
                width: "227px",
                fontWeight: 500,
                color: "#00B4D8",
                fontVariationSettings: "'opsz' 12",
              }}
            >
              PROMOCIJA
            </div>

            {/* Second title container */}
            <div
              style={{
                fontSize: "24px",
                lineHeight: "26px",
                height: "38px",
                fontWeight: 500,
                color: "#686868",
                fontVariationSettings: "'opsz' 24",
              }}
            >
              VSE BREZPLAČNO
            </div>

            {/* Third title container */}
            <div className="text-[12px] font-normal text-[#686868] mt-[10px]">
              BREZPLAČNI Skrbnik. Brezplačnih tudi 25+ opcij, ki jih prinaša
              Skrbnik.
            </div>

            {/* fourth title container */}
            <div className="text-[12px] font-normal text-[#686868] mt-[10px]">
              BREZPLAČNE predloge za obveščanje prilagojene mobilnemu telefonu.
            </div>

            {/* Fifth title container */}
            <div className="text-[12px] font-normal text-[#686868] mt-[10px]">
              BREZPLAČNI poudarjen okvir s svečko za deljenje zgodb in čarobnih
              trenutkov. Da bo spominska stran najdražjih sevala še več topline,
              bila še bolj osebna.
            </div>

            {/* fourth title container */}
            <div className="text-[12px] font-normal text-[#686868] mt-[10px]">
              Vse navedeno vam izdelajo in podarijo v vaši lokalni cvetličarni.
              Povprašajte jih.
            </div>

            {/* 6th title contianer */}
            <Link href={"/floristspromo"}>
              <div className="flex flex-row items-center mt-[14px]">
                <div className="text-[12px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                  Več o promociji
                </div>

                <div className="w-[6px] h-[11px]">
                  <Image
                    src={"/img_blue_left_arrow.png"}
                    width={6}
                    height={11}
                    className="h-[11px] w-[6px]"
                    alt="image obituary profile"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorialMenuCompo;
