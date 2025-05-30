"use client";
import Image from "next/image";
import ipadImage from "@/public/spominska_tab.avif";
import ipadImageTablet from "@/public/spominska_tablica1.avif";
import ipadImageMobile from "@/public/tablica_mobi.avif";
import { useBreakpoint } from "../../hooks/useBreakpoint"

const HomePageBox = () => {
  const breakpoint = useBreakpoint();

  // === Desktop Layout ===
  if (breakpoint === "desktop") {
    return (
      <div className="bg-[#F0F4F7] w-[1280px] h-auto">
        <div className="flex justify-center">
            <div className="image-container my-[125px] mr-[69px]">
                <img src="/mobile-cards/mobile-export.png" alt="iPad Landscape" />
            </div>
            <div className="text-container my-[125px] w-[495px]">
                <span className="text-[#3090D5] text-[24px]">Priročno</span>
                <h2 className="text-[#414141] text-[40px]">1 klik do lokalnih informacij</h2>
                <p className="text-[#414141] leading-6 text-[16px] mt-[16px]">Vsak dan. Vzame samo nekaj sekund. Nenehno osveževano. <br /> Brez vsakodnevnega iskanja po imenikih. </p>
                <p className="text-[#414141] leading-6 text-[16px] mt-[16px]">Op. Moraš biti prijavljen, da zazna, kateri kraj si izbral. </p>
               <p className="text-[#414141] leading-6 text-[16px] mt-[16px] mb-[45px] flex items-center gap-2">
                Poišči lokacijsko ikonico
                <span>
                    <img src="/mobile-cards/loc-icon.png" alt="" className="w-[24px] h-[24px] inline-block" />
                </span>
                na vrhu strani.
                </p>

               <button class="text-[#414141] rounded-[8px] px-[25px] py-[12px] mt-[24px] w-[113px]" style={{
                  background: "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                  boxShadow: "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                }}
              >
                Prijavi se
              </button>
            </div>
        </div>
      </div>
  );
};

// === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
     <div className="bg-[#ffffff] text-[#f1f5f7] h-auto">
        <div className="py-[100px] flex flex-col items-center gap-[40px]">
            
            <div className="text-container w-fit">
                <span className="text-[#3090D5] text-[24px]">Priročno</span>
                <h2 className="text-[#414141] text-[40px] mt-[16px]">1 klik do lokalnih informacij</h2>
                <p className="text-[#414141] text-[16px] mt-[16px]">Vsak dan. Vzame samo nekaj sekund. Nenehno osveževano. <br /> Brez vsakodnevnega iskanja po imenikih. </p>
                <p className="text-[#414141] text-[16px] mt-[16px]">Op. Moraš biti prijavljen, da zazna, kateri kraj si izbral. </p>

            </div>
            <div className="image-container">
                <img src="/mobile-cards/mobile-export.png" alt="iPad Landscape" />
            </div>

            <p className="text-[#414141] flex items-center gap-2">
                Poišči lokacijsko ikonico
                <span>
                    <img src="/mobile-cards/loc-icon.png" alt="" className="w-4 h-4 inline-block" />
                </span>
                na vrhu strani.
                </p>
        </div>
      </div>
    );
  }

  // === Mobile Layout ===
  return (
    <div className="bg-[#ffffff] text-[#f1f5f7] h-auto">
        <div className="py-[100px] flex flex-col items-center gap-[20px]">
            
            <div className="text-container w-fit">
                <span className="text-[#3090D5] text-[24px]">Priročno</span>
                <h2 className="text-[#414141] text-[40px] mt-[16px]">1 klik do lokalnih informacij</h2>
                <p className="text-[#414141] text-[16px] mt-[16px]">Vsak dan. Vzame samo nekaj sekund. Nenehno osveževano. <br /> Brez vsakodnevnega iskanja po imenikih. </p>
                
            </div>
            <div className="image-container">
                <img src="/mobile-cards/mobile-export.png" alt="iPad Landscape" />
            </div>

            <p className="text-[#414141] flex items-center gap-2">
                Poišči lokacijsko ikonico
                <span>
                    <img src="/mobile-cards/loc-icon.png" alt="" className="w-4 h-4 inline-block" />
                </span>
                na vrhu strani.
                </p>

            <p className="text-[#414141] text-[16px] px-[10px] text-center ">Op. Moraš biti prijavljen, da zazna, kateri kraj si izbral. </p>

        </div>
      </div>
  );
};

export default HomePageBox;
