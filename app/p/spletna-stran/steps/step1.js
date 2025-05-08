"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import ImageSelector from "../components/ImageSelector";
import { useState } from "react";

export default function Step1({ handleStepChange }) {
  const [openedBlock, setOpenedBlock] = useState(1);
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
                1
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">KORAK 1</div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">Zgornji blok</div>
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
            <OpenableBlock isDefaultOpen={true} title="Zgornji del" index={1} openBlock={openedBlock === 1} handleOpenBlock={() => setOpenedBlock(1)}>
              <div className="space-y-[8px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">Logo podjetja <span className="text-[#ACAAAA]">(velikost do 200x80)</span></span>
                <ImageSelector />
              </div>
              <div className="space-y-[8px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Ime podjetja
                </span>
                <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Pogrebni zavod Trbovlje" />
              </div>
              <div className="space-y-[8px]">
                <div className="flex items-center gap-[8px]">
                  <Image src="/funeral/facebook.png" alt="Spletna stran" width={24} height={24} />
                  <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Facebook <span className="text-[#ACAAAA]">(lahko izpustiš)</span>
                  </span>
                </div>
                <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="055-083-916" />
              </div>
              <div className="space-y-[8px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">Dodaj veliko zgornjo sliko <span className="text-[#ACAAAA]">(max velikost 1280x300)</span></span>
                <ImageSelector />
              </div>
            </OpenableBlock>
            <OpenableBlock isDefaultOpen={false} title="Spodnja vrstica" index={2} openBlock={openedBlock === 2} handleOpenBlock={() => setOpenedBlock(2)}>
              <div className="space-y-[8px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                Naslov
                </span>
                <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Savinjska cesta 11a, Trbovlje" />
              </div>
              <div className="space-y-[8px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                Spletna pošta
                </span>
                <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="javno.podjetje@komunala-trbovlje.si" />
              </div>
              <div className="space-y-[8px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                Telefon
                </span>
                <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="(03) 56 53 126" />
              </div>
              <div className="space-y-[8px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                Spletna stran
                </span>
                <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="www.komunala-trbovlje.si" />
              </div>
            </OpenableBlock>
          </div>
        </div>
        <div className="space-y-[8px]">
          {openedBlock === 1 && <div className="space-y-[8px] mb-[27px]">
            <p className="text-[14px] text-[#6D778E] leading-[20px]">Tako enostavno je!</p>
            <p className="text-[14px] text-[#6D778E] leading-[20px]">Nadaljujete postopek po korakih in vmes občasno tudi shranjujte in na zadnjem koraku pritisnite gumb OBJAVI.</p>
            <p className="text-[14px] text-[#6D778E] leading-[20px]">Vašo stran bomo izdelali in objavili najkasneje v 48 urah.</p>
          </div>}
          <div className="flex items-center gap-[8px] justify-between w-full">
            <button className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]">
            Shrani
            </button>
            <div className="flex items-center gap-[8px]">
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => {
                handleStepChange(1)
                setOpenedBlock(1)
              }}>
                Nazaj
              </button>
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => {
                if (openedBlock === 1) {
                  setOpenedBlock(2)
                } else {
                  handleStepChange(2)
                }
              }}>
                Naslednji korak
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={`/funeral/${openedBlock}.png`} alt="Spletna stran" className="w-full h-full object-contain" />
      </div>
    </>
  )
}
