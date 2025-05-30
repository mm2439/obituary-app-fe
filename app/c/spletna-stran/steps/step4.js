"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import { BackgroundSelectorStep2, IconSelectorStep4 } from "../components/BackgroundSelector";
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
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">Naše prednosti</div>
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
            {sliderBlocks.map((block) => (
              <SliderBlock key={block.id} index={block.id} title={`Okvir ${block.id}`} />
            ))}
          </div>
          <div className="space-y-[28px]">
            <div className="flex items-center justify-center">
              <button className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] text-[#FFFFFF] font-[800] leading-[24px] text-[20px] py-[7px] px-[30px] rounded-[4px]">
                ALI
              </button>
            </div>
            <div className="space-y-[8px]">
              <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                Dodaj svojo sliko  <span className="text-[#ACAAAA] text-[14px]">(ki naj zamenja ta ozek blok; idealno 1280 x 420)</span>
              </div>
              <ImageSelector />
              <div className="flex items-center justify-center gap-[22px] py-[9px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Dodaj svojo sliko  
                </span>
                <Switch />
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Prikaži svojo sliko
                </span>
              </div>
            </div>
            
          </div>
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
        <img src="/florist/4.png" alt="Spletna stran" className="w-full h-full object-contain" />
      </div>
    </>
  )
}

function SliderBlock({ index, title }) {
  const [isDefaultOpen, setIsDefaultOpen] = useState(index === 1);
  return (
    <OpenableBlock isDefaultOpen={isDefaultOpen} title={title} index={index} hasDeleteButton={true} helpText="(največ 3)">
      <div className="space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="text-[14px] text-[#3C3E41] font-normal leading-[24px]">Za prvo silo smo nekaj slik že dodali. Svoje prilepi čimprej.</div>
          <IconSelectorStep4 />
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          Tekst
          </div>
          <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Dostava isti dan" />
        </div>
      </div>
    </OpenableBlock>
  )
}
