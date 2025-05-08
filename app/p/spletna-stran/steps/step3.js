"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import BackgroundSelector from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import { useState } from "react";

export default function Step3({ handleStepChange }) {
  const [sliderBlocks, setSliderBlocks] = useState([
    {
      id: 1,
      title: "Slike vaše ponudbe",
      isDefaultOpen: true,
    }
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
        <div className="space-y-[22px]">
          <div className="flex justify-between items-center">
            <div className="inline-flex gap-[17px] items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D4DCF0] border border-[#0A85C2] flex items-center justify-center text-[20px] leading-[100%] text-[#0A85C2]">
                3
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">KORAK 3</div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">Naša pokopališča</div>
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
            <p className="text-[14px] text-[#6D778E] font-normal leading-[20px] pb-[18px]">
            Če za nekatera manjša pokopališča nimate pri roki najboljših slik, lahko izberete naše univerzalne in dodate svoje naknadno. <br /> (tudi sicer so bolj pomembne informacije o pokopališčih, kot slike). 
            </p>
            {sliderBlocks.map((block) => (
              <SliderBlock key={block.id} index={block.id} title={`Pokopališče ${block.id}`} />
            ))}
            <div className="flex items-center justify-end pt-[8px] pb-[16px]">
              <div className="inline-flex items-center gap-[8px] cursor-pointer" onClick={addSliderBlock}>
                <img src="/florist_plus.png" alt="Dodaj sliko" className="w-[16px] h-[16px]" />
                <span className="text-[14px] text-[#3C3E41] font-normal leading-[100%]">DODAJ ŠE ENO POKOPALIŠČE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-[8px]">
          <p className="text-[14px] text-[#6D778E] font-normal leading-[20px] mb-[18px]">
          Dodajte vsa, tudi tista, kjer se morda danes pokopi ne opravljajo več. Uporabniki bodo vpisovali tudi svoje najdražje, ki so umrli pred 20 leti in torej tudi kje so pokopani, ne samo tekoče osmrtnice.  
          </p>
          <div className="flex items-center gap-[8px] justify-between w-full">
            <button className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]">
            Shrani
            </button>
            <div className="flex items-center gap-[8px]">
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => handleStepChange(2)}>
                Nazaj
              </button>
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => handleStepChange(4)}>
                Naslednji korak
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src="/funeral/4.png" alt="Spletna stran" className="w-full h-full object-contain" />
      </div>
    </>
  )
}

function SliderBlock({ index, title }) {
  const [isDefaultOpen, setIsDefaultOpen] = useState(index === 1);
  return (
    <OpenableBlock isDefaultOpen={isDefaultOpen} title={title} index={index}>
      <div className="space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          Dodaj sliko
          </div>
          <ImageSelector />
        </div>
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          ...ali izberi eno izmed naših nevtralnih
          </label>
          <BackgroundSelector />
        </div>
        <div className="space-y-[8px] pt-[22px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Ime pokopališča 1
          </label>
          <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Pokopališče v Gabrskem"/>
        </div>
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Naslov pokopališča 1
          </label>
          <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Gabrsko 59, Trbovlje"/>
        </div>
      </div>
    </OpenableBlock>
  )
}
