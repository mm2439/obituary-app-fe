"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import { IconSelectorStep4 } from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import { useState } from "react";
import Switch from "../components/Switch";

export default function Step4({ handleStepChange }) {
  const [sliderBlocks, setSliderBlocks] = useState([
    {
      id: 1,
      title: "Slike vaše ponudbe",
      isDefaultOpen: true,
    },
    {
      id: 2,
      title: "Slike vaše ponudbe",
      isDefaultOpen: false,
    },
    {
      id: 3,
      title: "Slike vaše ponudbe",
      isDefaultOpen: false,
    },
    
  ]);

  const addSliderBlock = () => {
    setSliderBlocks([...sliderBlocks, { id: sliderBlocks.length + 1 }]);
  }

  return (
    <>
      <div className="absolute top-[-24px] z-10 right-[30px] text-[14px] leading-[24px] text-[#6D778E]">
        Blue Daisy Florist, London
      </div>
      <div className="min-h-full flex flex-col justify-between gap-[16px]">
        <div className="space-y-[43px]">
          <div className="flex justify-between items-center">
            <div className="inline-flex gap-[17px] items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D4DCF0] border border-[#0A85C2] flex items-center justify-center text-[20px] leading-[100%] text-[#0A85C2]">
                4
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">KORAK 4</div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">Promocijski blok</div>
              </div>
            </div>
            <div className="inline-flex gap-[8px]">
              <span className="text-[14px] text-[#3C3E41] leading-[24px]">
                Predogled strani
              </span>
              <Image src="/external_open.png" alt="Predogled strani" width={20} height={20} className="shrink-0 w-[20px] h-[20px]" />
            </div>
          </div>
          <div className="space-y-[8px]">
            <OpenableBlock isDefaultOpen={true} title={"Dodaj vsebino"} index={1}>
              <div className="space-y-[16px]">
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Naslov
                  </div>
                  <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Naš ponos" />
                </div>
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Tekst
                  </div>
                  <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Projekt prenove trboveljskega pokopališča je bil leta" />
                </div>
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Slika
                  </div>
                  <ImageSelector />
                </div>
              </div>
            </OpenableBlock>
          </div>
          <p className="text-[14px] text-[#6D778E] font-normal leading-[20px]">
            Uporaben blok, ker lahko napišete karkoli želite; lahko je nekaj na kar ste ponosni, morda nekaj zgodovine, lahko je promocijski, kjer oglašujete, morda dodate informacije o vaših drugih dejavnostih, morda o obletnicah, prireditvah, načrtih.
          </p>
        </div>
        <div className="space-y-[8px]">
          <div className="flex items-center gap-[8px] justify-between w-full">
            <button className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]">
            Shrani
            </button>
            <div className="flex items-center gap-[8px]">
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => handleStepChange(3)}>
                Nazaj
              </button>
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => handleStepChange(5)}>
                Naslednji korak
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src="/funeral/5.png" alt="Spletna stran" className="w-full h-full object-contain" />
      </div>
    </>
  )
}
