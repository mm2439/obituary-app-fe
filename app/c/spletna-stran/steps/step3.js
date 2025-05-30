"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import { BackgroundSelectorStep2 } from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import { useState } from "react";
import axios from 'axios';

export default function Step3({ handleStepChange }) {


  const handleSubmit = async () => {
    const submission = new FormData();
    submission.append("title", formData.title);
    formData.sliders.forEach((slider, index) => {
      submission.append(`sliders[${index}][title]`, slider.title);
      submission.append(`sliders[${index}][price]`, slider.price);
      if (slider.image) {
        submission.append(`sliders[${index}][image]`, slider.image);
      }
    });

    try {
      const response = await axios.post('http://localhost:4000/api/package', submission, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert("Podatki uspešno poslani!");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error(err);
      alert("Napaka pri pošiljanju obrazca.");
    }
  };


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

  const [formData, setFormData] = useState({
  title: "",
  sliders: [
    { image: null, title: "", price: "" },
    { image: null, title: "", price: "" },
    { image: null, title: "", price: "" },
  ],
});

const handleSliderChange = (index, key, value) => {
  const updatedSliders = [...formData.sliders];
  updatedSliders[index][key] = value;
  setFormData({ ...formData, sliders: updatedSliders });
};

const addSliderBlock = () => {
  setSliderBlocks([...sliderBlocks, { id: sliderBlocks.length + 1 }]);
  setFormData((prev) => ({
    ...prev,
    sliders: [...prev.sliders, { image: null, title: "", price: "" }],
  }));
};


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
                3
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">KORAK 3</div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">Predstavitev trgovine</div>
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
            <div className="space-y-[8px] pb-[28px]">
              <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                Naslov <span className="text-[#ACAAAA] text-[14px]"> (v primeru smo se omejili na žalni program; ni pa to nujno)</span>
              </label>
              <input type="text"
  value={formData.title}
  onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Žalni program" />
            </div>
            {sliderBlocks.map((block, i) => (
  <SliderBlock
    key={block.id}
    index={i}
    title={`Okvirček ${block.id}`}
    data={formData.sliders[i]}
    onChange={(key, value) => handleSliderChange(i, key, value)}
  />
))}

            <div className="flex items-center justify-end pt-[8px] pb-[16px]">
              <div className="inline-flex items-center gap-[8px] cursor-pointer" onClick={addSliderBlock}>
                <img src="/florist_plus.png" alt="Dodaj sliko" className="w-[16px] h-[16px]" />
                <span className="text-[14px] text-[#3C3E41] font-normal leading-[100%]">DODAJ ŠE DODATNE (največ 8)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-[8px]">
          <div className="flex items-center gap-[8px] justify-between w-full">
          <button onClick={handleSubmit} className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]">
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
        <img src="/florist/3.png" alt="Spletna stran" className="w-full h-full object-contain" />
      </div>
    </>
  )
}

function SliderBlock({ index, title, data, onChange }) {
  const [isDefaultOpen, setIsDefaultOpen] = useState(index === 1);
  return (
    <OpenableBlock isDefaultOpen={isDefaultOpen} title={title} index={index}>
      <div className="space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          Slika
          </div>
          <ImageSelector onImageSelect={(file) => onChange("image", file)} />
        </div>
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Naslov
          </label>
          <input type="text"  value={data.title}
  onChange={(e) => onChange("title", e.target.value)} className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" placeholder="Čudoviti aranžma št. 1" />
        </div>
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Cena <span className="text-[#ACAAAA] text-[14px]">(v kolikor jo želite dodati; lahko pustite prazno)</span>
          </label>
          <input type="text" value={data.price}
  onChange={(e) => onChange("price", e.target.value)} className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"/>
        </div>
      </div>
    </OpenableBlock>
  )
}
