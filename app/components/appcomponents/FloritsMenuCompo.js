import Image from "next/image";
import Link from "next/link";
import React from "react";

const FloritsMenuCompo = ({ setActiveButton }) => {
  return (
    <div className="w-[1200px] p-5 bg-[#ECF0F3] rounded-2xl">
      <div className="flex w-full h-[395px] justify-center rounded-2xl bg-white p-5 gap-x-6 ">
        {/* First container */}
        <div className="flex flex-col gap-y-2">
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
              console.log("1st button is tapped!! 2nd button");
              setActiveButton("Spominska");
            }}
            className="flex bg-gradient-to-l w-[270px] h-[65px] py-[8px] px-[8px] rounded-[10px]"
          >
            {/* main container which is wrapped inside */}
            <div className="flex w-full pl-[2px] flex-row justify-between">
              <div className="flex items-center flex-row">
                {/* image container */}
                <div className="flex items-center justify-center w-[24px] h-[20px]">
                  <Image
                    src={"/img_memorial_vector.png"}
                    width={24}
                    height={20}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353]">
                    Spominska
                  </div>
                  <div className="text-[14px] font-medium text-[#535353]">
                    Spominska s Skrbnikom
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd active button container */}
          <div
            onClick={() => {
              console.log("3rd button is tapped!!");
              setActiveButton("Lokalne cvetličarne");
            }}
            className="flex bg-gradient-to-r w-[270px] h-[65px] py-[8px] px-[8px] from-[#B9DFF2] to-[#DAEBF182] border-[#17528A80] border-2 rounded-[10px]"
          >
            {/* main container which is wrapped inside */}
            <div className="flex w-full flex-row justify-between">
              <div className="flex flex-row">
                {/* image container */}
                <div className="w-[24px] h-[20px]">
                  <Image
                    src={"/img_flower.png"}
                    width={24}
                    height={20}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col ml-[12px] justify-center">
                  <div className="text-[14px] font-medium text-[#F48F53]">
                    Lokalne cvetličarne
                  </div>
                  <div className="text-[14px] font-medium text-[#F48F53]">
                    Pogrebna podjetja
                  </div>
                </div>
              </div>

              {/* image container */}
              <Image
                src={"/img_arrow_orange.png"}
                width={24}
                height={19}
                alt="image arrow blue"
              />
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
        <div className="flex flex-col">
          {/* 1st title container */}
          <div className="flex w-[270px]">
            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
              <div className="flex flex-row items-start ">
                {/* image container */}
                <Image
                  src={"/img_flower.png"}
                  width={24}
                  height={20}
                  alt="image obituary profile"
                />

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353] leading-[22px]">
                    Poišči lokalne cvetličarne
                  </div>
                  <div className="text-[12px] font-noraml text-[#686868]">
                    Izdelano imajo svojo predstavitveno stran, dodani so
                    kontakti; občasno obveščajo tudi o posebnih promocijah, ne
                    samo v okviru žalnega programa.
                  </div>
                  <div className="flex flex-row items-center mt-2">
                    <Link href={"/cvetlicarne"}>
                      <div className="text-[12px] font-normal text-[#F48F53] leading-[22px] mr-[10px]">
                        poišči cvetličarno po kraju
                      </div>
                    </Link>
                    <div className="w-[6px] h-[11px]">
                      <Image
                        src={"/img_left_arrow_orange.png"}
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

          {/* 2nd title container */}
          <div className="flex w-[270px]">
            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
              <div className="flex flex-row items-start ">
                {/* image container */}
                <Image
                  src={"/img_flower.png"}
                  width={24}
                  height={20}
                  alt="image obituary profile"
                />

                {/* text container */}
                <div className="flex flex-col px-3 justify-center">
                  <div className="text-[14px] font-medium text-[#535353] leading-[22px]">
                    Pregled pogrebnih podjetij
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="text-[12px] font-noraml text-[#686868]">
                      Izdelano imajo svojo predstavitveno stran, dodane so vse
                      kontaktne informacije. <br></br> Dodali so tudi koristne
                      informacije in navodila, kaj storiti, ko se zgodi.{" "}
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-2">
                    <div className="text-[12px] font-normal text-[#F48F53] leading-[22px] mr-[10px]">
                      Poišči izvajalce pogrebnih storitev
                    </div>
                    <div className="w-[6px] h-[11px]">
                      <Image
                        src={"/img_left_arrow_orange.png"}
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
        <div className="flex flex-col gap-y-[10px] bg-[#E3E8EC60] rounded-[10px]">
          {/* 1st title container */}
          <div className="flex w-full max-w-[270px]">
            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
              <div className="flex flex-row items-start ">
                {/* text container */}
                <div className="flex flex-col  justify-center  ">
                  <div className="text-[14px] font-medium text-[#535353] leading-[26px]">
                    Kako naročiti v cvetličarnah
                  </div>

                  <div className="text-[12px] font-normal text-[#686868] mt-1 px-1">
                    Omogočili smo način, kot ste ga najbolj vajeni - direktni
                    stik s cvetličarno.
                    <br></br>
                    <br></br>
                    <span>
                      Klikni produkt na strani osmrtnice in oddaj poizvedbo, pri
                      nekaterih morda tudi naročilo. Lahko jih tudi pokličete;
                      vse kontaktne informacije so prikazane.
                    </span>{" "}
                  </div>

                  {/* image container */}
                  <div className="mx-auto my-[5px]">
                    <Image
                      src={"/img_down_arrow_blue.png"}
                      width={24}
                      height={45}
                      alt="image down arrow blue"
                    />
                  </div>

                  <div className="text-[12px] font-normal text-[#686868] mt-2 px-1">
                    Cvetličarna vas bo v kratkem času kontaktirala nazaj; včasih
                    že po nekaj minutah.
                  </div>

                  {/* image container */}
                  <div className="mx-auto my-[5px]">
                    <Image
                      src={"/img_down_arrow_blue.png"}
                      width={24}
                      height={45}
                      alt="image down arrow blue"
                    />
                  </div>

                  <div className="text-[12px] font-normal text-[#686868] mt-1 px-1">
                    Vse se s cvetličarno dogovorite direktno, tako kot ste
                    vajeni.
                    <br></br>
                    <span>Op. kmalu tudi spletno naročanje.</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fourth container */}
        <div className="flex flex-col w-[270px] gap-y-[6px] bg-gradient-to-b from-[#1464E1] to-[#1151B5] shadow-custom-megamenu-shadow-box text-black rounded-[10px]">
          {/* title container */}
          <div className="flex flex-col py-[25px] px-3">
            {/* first title container */}
            <div
              style={{
                fontSize: "18px",
                lineHeight: "26px",
                width: "240px",
                fontWeight: 400,
                color: "#E8FDF1",
                fontVariationSettings: "'opsz' 18",
              }}
            >
              IMATE CVETLIČARNO?
            </div>

            {/* 2nd title container */}
            <div className="text-[12px] font-normal text-[#E8FDF1] mt-[10px]">
              Otvoritvena akcija BREZ RIZIKA pravkar poteka.
            </div>

            {/* 3rd title contianer */}
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

            {/* 4th title container */}
            <div
              style={{
                fontSize: "18px",
                lineHeight: "26px",
                width: "240px",
                marginTop: "20px",
                fontWeight: 400,
                color: "#E8FDF1",
                fontVariationSettings: "'opsz' 18",
              }}
            >
              STE OGLAŠEVALCI?
            </div>

            {/* 5th title container */}
            <div className="text-[12px] font-normal text-[#E8FDF1] mt-[10px]">
              Ponujate produkte ali storitve, ki bi lahko bili zanimivi za
              obiskovalce te spletne strani? Pošljite nam sporočilo, predloge,
              vprašanja.
            </div>

            {/* 6th title contianer */}
            <Link href={"/contactform"}>
              <div className="flex flex-row items-center mt-[14px]">
                <div className="text-[12px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                  Kontaktirajte nas
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

export default FloritsMenuCompo;
