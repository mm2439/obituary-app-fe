"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import ImageSelector from "../components/ImageSelector";
import { useState } from "react";

export default function Step6({ handleStepChange }) {
  const [openBlock, setOpenBlock] = useState(1);
  const [sliderBlocks, setSliderBlocks] = useState([
    {
      id: 1,
      title: "Podatki o trgovini",
      isDefaultOpen: false,
    }
  ]);

  const addSliderBlock = () => {
    setSliderBlocks([...sliderBlocks, { id: sliderBlocks.length + 1, title: "Podatki o trgovini", isDefaultOpen: false }]);
  }

  return (
    <>
      <div className="absolute top-[-24px] z-10 right-[30px] text-[14px] leading-[24px] text-[#6D778E]">
        Blue Daisy Florist, London
      </div>
      <div className="min-h-full flex flex-col justify-between gap-[16px]">
        <div className="space-y-[44px]">
          <div className="flex justify-between items-center">
            <div className="inline-flex gap-[17px] items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D4DCF0] border border-[#0A85C2] flex items-center justify-center text-[20px] leading-[100%] text-[#0A85C2]">
                6
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">KORAK 6</div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">Noga</div>
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
            <OpenableBlock isDefaultOpen={true} title={"Vizitka"} index={1} openBlock={openBlock === 1} handleOpenBlock={() => setOpenBlock(1)}>
              <div className="space-y-[16px]">
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Ime cvetličarne
                  </div>
                  <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Cvetličarna Suniflower" /> 
                </div>
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Logo <span className="text-[#ACAAAA]">(max velikost 370x240, razmerje 3:2)</span>
                  </div>
                  <ImageSelector />
                </div>
                <div className="space-y-[8px]">
                  <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Poudarjen tekst <span className="text-[#ACAAAA] text-[14px]">(naj ne bo predolg)</span>
                  </label>
                  <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Obiščite našo spletno stran: www.suniflower.com " />
                </div>
                <div className="space-y-[8px]">
                  <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px] flex items-center gap-[8px]">
                    <img src="/outline_facebook_icon.png" alt="Facebook" className="w-[24px] h-[24px]" />
                    <div>Facebook <span className="text-[#ACAAAA] text-[14px]">(lahko izpustite)</span></div>
                  </label>
                  <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Vaš Facebook" />
                </div>
                <div className="space-y-[8px]">
                <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px] flex items-center gap-[8px]">
                    <img src="/outline_instagram_icon.png" alt="Facebook" className="w-[24px] h-[24px]" />
                    <div>Instagram <span className="text-[#ACAAAA] text-[14px]">(lahko izpustite)</span></div>
                  </label>
                  <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Vaš Instagram" />
                </div>
                
              </div>
            </OpenableBlock>
            {sliderBlocks.map((block, index) => (
              <SliderBlock key={block.id} index={index + 1} title={block.title} openBlock={openBlock} setOpenBlock={setOpenBlock} />
            ))}
            {openBlock === 2 && <div className="flex items-center justify-end pt-[8px] pb-[0px]">
              <div className="inline-flex items-center gap-[8px] cursor-pointer" onClick={addSliderBlock}>
                <img src="/florist_plus.png" alt="Dodaj sliko" className="w-[16px] h-[16px]" />
                <span className="text-[14px] text-[#3C3E41] font-normal leading-[100%]">DODAJ ŠE EN SLAJD</span>
              </div>
            </div>}
          </div>
        </div>
        <div className="space-y-[29px]">
          {openBlock === 2 && <p className="text-[14px] text-[#6D778E] leading-[100%]">
            Ko vnesete vse pritisnite gumb objavi <br/>
              in vašo stran bomo izdelali in objavili najkasneje v 48 urah. 
          </p>}
          {openBlock === 2 ? <div className="flex items-center gap-[8px] justify-between w-full">
            <div className="flex items-center gap-[8px]">
              <button className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]">
              Shrani
              </button>
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => {
                if(openBlock === 1) {
                  handleStepChange(5);
                } else {
                  setOpenBlock(1);
                }
              }}>
                Nazaj
              </button>
            </div>
              <button className="bg-gradient-to-b from-[#F916D6] to-[#9D208A] text-[#FFFFFF] font-semibold leading-[24px] text-[20px] py-[12px] px-[66px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => {
                if(openBlock === 1) {
                  setOpenBlock(2);
                } else {
                  handleStepChange(6);
                }
              }}>
              Objavi
              </button>
          </div>: <div className="space-y-[8px]">
          <div className="flex items-center gap-[8px] justify-between w-full">
            <button className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]">
            Shrani
            </button>
            <div className="flex items-center gap-[8px]">
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => handleStepChange(5)}>
                Nazaj
              </button>
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => {
                if(openBlock === 1) {
                  setOpenBlock(2);
                }
              }}>
                Naslednji korak
              </button>
            </div>
          </div>
        </div>}
        </div>
      </div>
      <div className="w-full">
        {openBlock === 2 ? <img src="/florist/6.png" alt="Spletna stran" className="w-full h-full object-contain" /> : <img src="/florist/6-1.png" alt="Spletna stran" className="w-full h-full object-contain" />}
      </div>
    </>
  )
}

function SliderBlock({ index, title, openBlock, setOpenBlock }) {
  return (
    <OpenableBlock isDefaultOpen={false} title={title + " " + index} index={index} openBlock={openBlock === 2} handleOpenBlock={() => setOpenBlock(2)}>
      <div className="space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          Ime cvetličarne
          </div>
          <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Cvetličarna št.1" /> 
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          Naslov 
          </div>
          <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Zidarska ulica 184, Ljubno ob Savinji" /> 
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          Telefon 
          </div>
          <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="012-994-285" /> 
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          Spletna pošta 
          </div>
          <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="vasnaslov@email.com" /> 
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          Delovni čas 
          </div>
          <input type="text" className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Kopiraj-prilepi delovni čas po dnevih; glej primer" /> 
        </div>
      </div>
    </OpenableBlock>
)
}
