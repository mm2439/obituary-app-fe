"use client";
import Image from "next/image";
import ipadImage from "@/public/spominska_tab.avif";
import ipadImageTablet from "@/public/spominska_tablica1.avif";
import ipadImageMobile from "@/public/tablica_mobi.avif";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const HomePageBox = () => {
  const breakpoint = useBreakpoint();

  // === Desktop Layout ===
  if (breakpoint === "desktop") {
    return (
      <div className="bg-[#F0F4F7] min-w-[1281px] h-auto">
        <div className="flex justify-center">
          <div className="image-container my-[125px] mr-[69px]">
            <img src="/mobile-cards/mobile-export.png" alt="iPad Landscape" />
          </div>
          <div className="text-container my-[125px] w-[495px]">
            <span className="text-[#3090D5] text-[24px]">Priročno</span>
            <h2 className="text-[#414141] text-[40px]">
              1 klik do lokalnih informacij
            </h2>
            <p className="text-[#414141] leading-6 text-[16px] mt-[16px]">
              Vsak dan. Vzame samo nekaj sekund. Nenehno osveževano. <br /> Brez
              vsakodnevnega iskanja po imenikih.{" "}
            </p>
            <p className="text-[#414141] leading-6 text-[16px] mt-[16px]">
              Op. Moraš biti prijavljen, da zazna, kateri kraj si izbral.{" "}
            </p>
            <p className="text-[#414141] leading-6 text-[16px] mt-[16px] mb-[45px] flex items-center gap-2">
              Poišči lokacijsko ikonico
              <span>
                <img
                  src="/mobile-cards/loc-icon.png"
                  alt=""
                  className="w-[24px] h-[24px] inline-block"
                />
              </span>
              na vrhu strani.
            </p>

            <button className="shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] text-[#414141] rounded-[8px] px-[25px] py-[12px] mt-[24px] w-[113px]">
              Prijavi se
            </button>
          </div>
        </div>
      </div>
    );
  }

  // === Laptop Layout ===
  if (breakpoint === "laptop") {
    return (
      <div
        className="relative w-full h-[838px] bg-[#F2F9FF] border-t border-b border-solid"
        style={{ borderColor: "rgba(54, 85, 108, 0.2)" }}
      >
        <div
          className="absolute"
          style={{
            width: "387px",
            height: "387px",
            left: "calc(50% - 387px/2 - 0.5px)",
            top: "327px",
            backgroundImage: "url(/mobile-cards/mobile-export.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <span
          className="absolute font-['Roboto_Flex'] font-normal text-[24px] leading-[28px] text-[#3090D5]"
          style={{
            width: "425px",
            height: "33px",
            left: "calc(50% - 425px/2 - 0.5px)",
            top: "79px",
          }}
        >
          Priročno
        </span>
        <div
          className="absolute flex flex-col items-start gap-[24px] p-0"
          style={{
            width: "425px",
            height: "177px",
            left: "calc(50% - 425px/2 - 0.5px)",
            top: "112px",
          }}
        >
          <div className="flex flex-col items-start gap-[16px] w-[425px] h-[177px]">
            <h2 className="w-[423px] h-[55px] font-['Roboto_Flex'] font-normal text-[40px] leading-[47px] text-[#1E2125]">
              1 klik do lokalnih informacij
            </h2>
            <p className="w-[425px] h-[96px] font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141]">
              Vsak dan. Vzame samo nekaj sekund. Nenehno osveževano. <br /> Brez
              vsakodnevnega iskanja po imenikih.
            </p>
            <p className="w-[425px] h-[96px] font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141]">
              Op. Moraš biti prijavljen, da zazna, kateri kraj si izbral.
            </p>
          </div>
        </div>
        <p
          className="absolute font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141] flex items-center"
          style={{
            width: "309px",
            height: "24px",
            left: "calc(50% - 309px/2 - 0.5px)",
            top: "734px",
          }}
        >
          Poišči lokacijsko ikonico
          <span>
            <img
              src="/mobile-cards/loc-icon.png"
              alt=""
              className="inline-block"
              style={{ width: "24px", height: "24px", marginLeft: "8px" }}
            />
          </span>
          na vrhu strani.
        </p>
      </div>
    );
  }

  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
      <div
        className="relative w-full h-[729px] bg-[#F2F9FF] border-t border-b border-solid"
        style={{ borderColor: "rgba(54, 85, 108, 0.2)" }}
      >
        <span
          className="absolute font-['Roboto_Flex'] font-normal text-[20px] leading-[23px] text-[#3090D5]"
          style={{
            width: "73px",
            height: "23px",
            left: "calc(50% - 73px/2 - 126.5px)",
            top: "54px",
          }}
        >
          Priročno
        </span>
        <h2
          className="absolute font-['Roboto_Flex'] font-normal text-[28px] leading-[33px] text-[#1E2125]"
          style={{
            width: "315px",
            height: "33px",
            left: "calc(50% - 315px/2 - 5.5px)",
            top: "77px",
          }}
        >
          1 klik do lokalnih informacij
        </h2>
        <p
          className="absolute font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141]"
          style={{
            width: "313px",
            height: "72px",
            left: "calc(50% - 313px/2 - 4.5px)",
            top: "139px",
          }}
        >
          Vsak dan. Vzame samo nekaj sekund. Nenehno osveževano. <br /> Brez
          vsakodnevnega iskanja po imenikih.
        </p>
        <div
          className="absolute"
          style={{
            width: "350px",
            height: "350px",
            left: "calc(50% - 350px/2)",
            top: "243px",
            backgroundImage: "url(/mobile-cards/mobile-export.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <p
          className="absolute font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141] flex items-center"
          style={{
            width: "309px",
            height: "24px",
            left: "calc(50% - 309px/2 - 4.5px)",
            top: "604px",
          }}
        >
          Poišči lokacijsko ikonico
          <span>
            <img
              src="/mobile-cards/loc-icon.png"
              alt=""
              className="inline-block"
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "8px",
                objectFit: "contain",
              }}
            />
          </span>
          na vrhu strani.
        </p>
        <p
          className="absolute font-['Roboto_Flex'] font-normal text-[14px] leading-[24px] text-[#414141]"
          style={{
            width: "360px",
            height: "24px",
            left: "calc(50% - 330px/2 - 5px)",
            top: "636px",
          }}
        >
          Op. Moraš biti prijavljen, da zazna, kateri kraj si izbral.
        </p>
      </div>
    );
  }

  // === Mobile Layout ===
  if (breakpoint === "mobile") {
    return (
      <div className="bg-[#ffffd] text-[#f1f5f7] h-auto">
        <div className="py-[54px] flex flex-col">
          <div className="text-container flex justify-center flex-col w-[350px] mx-auto mx-auto">
            <span className="text-[#3090D5] text-[20px]">Priročno</span>
            <h2 className="text-[#414141] text-[28px] mt-[8px] leading-[100%]">
              1 klik do lokalnih informacij
            </h2>
            <p className="text-[#3C3E41] text-[16px] mt-[29px]">
              Vsak dan. Vzame samo nekaj sekund. Nenehno osveževano. <br /> Brez
              vsakodnevnega iskanja po imenikih.{" "}
            </p>
          </div>
          <div className="image-container mt-[32px] mx-auto">
            <img
              className="w-[350px] h-[350px]"
              src="/mobile-cards/mobile-export.png"
              alt="iPad Landscape"
            />
          </div>

          <p className="text-[#414141] flex items-center gap-2 mt-[11px] text-[16px] w-[313px] mx-auto">
            Poišči lokacijsko ikonico
            <span>
              <img
                src="/mobile-cards/loc-icon.png"
                alt=""
                className="w-4 h-4 inline-block"
              />
            </span>
            na vrhu strani.
          </p>

          <p className="text-[#414141] text-[14px] mt-[8px] w-[350px] mx-auto">
            Op. Moraš biti prijavljen, da zazna, kateri kraj si izbral.{" "}
          </p>
        </div>
      </div>
    );
  }
};

export default HomePageBox;
