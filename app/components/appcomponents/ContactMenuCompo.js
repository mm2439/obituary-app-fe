import Image from "next/image";
import Link from "next/link";
import React from "react";
// 24 October 2024
import { useRouter } from "next/navigation";

const ContactMenuCompo = ({ setActiveButton }) => {
  const router = useRouter()
  const contactListFirstData = [
    { title: "Vprašanja in odgovori" },
    { title: "Login in Registracija" },
    { title: "Oglaševanje" },
    { title: "Sodelujmo! Postani partner" },
    { title: "Poišči cvetličarne po kraju" },
    { title: "Poišči cvetličarne po kraju" },
    { title: "Poišči cvetličarne po kraju" },
  ];

  const contactListSecondtData = [
    { title: "Splošni pogoji" },
    { title: "Piškotki" },
    { title: "Izjava ta in ta" },
    { title: "Kontakt" },
    { title: "Poišči cvetličarne po kraju" },
    { title: "Poišči cvetličarne po kraju" },
    { title: "Poišči cvetličarne po kraju" },
  ];

  return (
    <div className="w-[1200px] p-5 bg-[#ECF0F3] rounded-2xl">
      <div className="flex w-full rounded-2xl justify-start h-[395px] bg-white p-5 gap-x-12 ">
        {/* First container */}
        <div className="flex flex-col gap-y-2 ">
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
              console.log("1st button is tapped!!");
              setActiveButton("Osmrtnice");
            }}
            className="flex bg-gradient-to-r w-[270px] h-[65px] py-[8px] px-[8px] from-[#B9DFF2] to-[#DAEBF182] border-[#17528A80] border-2 rounded-[10px]"
          >
            {/* main container which is wrapped inside */}
            <div className="flex w-full flex-row justify-between">
              <div className="flex flex-row">
                {/* image container */}
                <div className="w-[24px] h-[20px]">
                  <Image
                    src={"/img_four_dots.png"}
                    width={24}
                    height={20}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col ml-[12px] justify-center">
                  <div className="text-[14px] font-medium text-[#9A4497]">
                    Vse strani
                  </div>
                  <div className="text-[14px] font-medium text-[#9A4497]">
                    Kontaktne informacije
                  </div>
                </div>
              </div>

              {/* image container */}
              <Image
                src={"/img_left_arrow_purple.png"}
                width={24}
                height={19}
                alt="image arrow blue"
              />
            </div>
          </div>
        </div>

        {/* Second container */}
        <div className="flex flex-col w-[270px] gap-y-[10px]">
          {/* 1st title container */}
          <div className="flex w-full max-w-[270px]">
            {/* image container */}
            <div className="mt-1 mx-[10px]">
              <Image
                src={"/img_four_dots.png"}
                width={24}
                height={45}
                alt="image obituary profile"
              />
            </div>

            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px]">
              <div className="flex flex-row items-start">
                {/* text container */}
                <div className="flex flex-col  justify-center gap-y-2">
                  <div className="text-[14px] font-medium text-[#535353] leading-[22px] ">
                    Preostale strani
                  </div>

                  {/* text blue container */}
                  {contactListFirstData.map((item, key) => (
                    <div key={key} className="flex flex-row cursor-pointer items-center ">
                      <div onClick={() => {
                        // 24 October 2024
                        if (item.title === "Login in Registracija") {

                          router.push("/registrationpage")

                        } else {

                        }
                      }} className="text-[12px] font-normal text-[#9A4497] leading-[22px] mr-[10px]">
                        {item.title}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third container */}
        <div className="flex flex-col w-[270px] gap-y-[10px]">
          {/* 1st title container */}
          <div className="flex w-full max-w-[270px]">
            {/* image container */}
            <div className="mt-1 mx-[10px]">
              <Image
                src={"/img_four_dots.png"}
                width={24}
                height={45}
                alt="image obituary profile"
              />
            </div>

            {/* main container which is wrapped inside */}
            <div className="flex flex-1 flex-row justify-between py-[10px]">
              <div className="flex flex-row items-start">
                {/* text container */}
                <div className="flex flex-col  justify-center gap-y-2">
                  <div className="text-[14px] font-medium text-[#535353] leading-[22px] ">
                    Preostale strani
                  </div>

                  {/* text blue container */}
                  {contactListSecondtData.map((item, key) => (
                    <div key={key} className="flex flex-row items-center ">
                      <div className="text-[12px] font-normal text-[#9A4497] leading-[22px] mr-[10px]">
                        {item.title}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fourth container */}
        <div className="flex flex-col w-[270px] gap-y-[6px] bg-gradient-to-b from-[#B6ECEC40] to-[#BEF4F400] shadow-custom-megamenu-shadow-box text-black rounded-[10px]">
          {/* title container */}
          <div className="flex flex-col py-[10px] px-3 bg-gradient-to-b from-[#87C3FE00] to-[#B6ECEC20]">
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
              KORISTNO
            </div>

            {/* Second title container */}
            <div
              style={{
                fontSize: "18px",
                lineHeight: "26px",
                height: "38px",
                fontWeight: 500,
                color: "#686868",
                fontVariationSettings: "'opsz' 18",
              }}
            >
              OPOMNIK ZA OBLETNICE
            </div>

            {/* Third title container */}
            <p className="text-[12px] font-normal text-[#686868] mt-[10px]">
              Spominske strani, kjer sodelujete (oddate sožalje, se vpišete v
              Žalno knjigo, itd.), se vam shranijo v vaš uporabniški račun. Tam
              so prikazani tudi bolj podrobni podatki o strani, hkrati pa vas
              avtomatsko obveščajo o prihajajočih obletnicah - in obvestila o
              le-teh boste prejemali pravočasno tudi na email. Nikoli več ne
              boste zamudili obletnice. Tudi to je seveda brezplačno.
            </p>

            {/* 6th title contianer */}
            <Link href={"/floristspromo"}>
              <div className="flex flex-row items-center mt-12">
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

export default ContactMenuCompo;
