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
      <div className="bg-[#F0F4F7] w-[1280px] h-auto">
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

            <button class="shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] text-[#414141] rounded-[8px] px-[25px] py-[12px] mt-[24px] w-[113px]">
              Prijavi se
            </button>
          </div>
        </div>
      </div>
    );
  }

  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
      <div className="bg-[#ffffff] text-[#f1f5f7] h-auto w-full">
        <div className="py-[80px] flex flex-col items-center">
          <div className="text-container w-fit">
            <span className="text-[#3090D5] text-[24px]">Priročno</span>
            <h2 className="text-[#414141] text-[40px] mt-[8px] leading-[100%]">
              1 klik do lokalnih informacij
            </h2>
            <p className="text-[#414141] text-[16px] mt-[16px]">
              Vsak dan. Vzame samo nekaj sekund. Nenehno osveževano. <br /> Brez
              vsakodnevnega iskanja po imenikih.{" "}
            </p>
            <p className="text-[#3C3E41] text-[16px] mt-[32px]">
              Op. Moraš biti prijavljen, da zazna, kateri kraj si izbral.{" "}
            </p>
          </div>
          <div className="image-container mt-[38px]">
            <img src="/mobile-cards/mobile-export.png" alt="iPad Landscape" />
          </div>

          <p className="text-[#414141] flex items-center gap-2 mt-[20px]">
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
        </div>
      </div>
    );
  }

  // === Mobile Layout ===
  if (breakpoint === "mobile") {
    return (
      <div className="bg-[#ffffd] text-[#f1f5f7] h-auto">
        <div className="py-[54px] flex flex-col">
          <div className="text-container flex justify-center flex-col w-[350px] mx-auto">
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
