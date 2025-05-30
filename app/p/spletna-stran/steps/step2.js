"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import { BackgroundSelectorStep2 } from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import companyService from "@/services/company-service";

export default function Step2({ data, handleStepChange }) {
  const [sliderBlocks, setSliderBlocks] = useState([
    {
      id: 1,
      title: "Slike vaše ponudbe",
      isDefaultOpen: true,
      image: null,
      background: null,
      subtitle: "",
    },
    {
      id: 2,
      title: "Slike vaše ponudbe",
      isDefaultOpen: false,
      image: null,
      background: null,
      subtitle: "",
    },
    {
      id: 3,
      title: "Slike vaše ponudbe",
      isDefaultOpen: false,
      image: null,
      background: null,
      subtitle: "",
    },
  ]);
  const [subtitle, setSubtitle] = useState("");
  const [companyId, setCompanyId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with existing data if available
  useEffect(() => {
    if (data) {
      setCompanyId(data.id);
      setSubtitle(data.subtitle || "");
      
      // Initialize slider blocks with existing data if available
      if (data.slider_blocks) {
        setSliderBlocks(data.slider_blocks);
      }
    }
  }, [data]);

  const addSliderBlock = () => {
    setSliderBlocks([
      ...sliderBlocks,
      { 
        id: sliderBlocks.length + 1,
        title: "Slike vaše ponudbe",
        isDefaultOpen: false,
        image: null,
        background: null,
        subtitle: ""
      }
    ]);
  };

  const updateSliderBlock = (id, field, value) => {
    setSliderBlocks(sliderBlocks.map(block => 
      block.id === id ? { ...block, [field]: value } : block
    ));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      
      // Add subtitle
      formData.append("subtitle", subtitle);
      
      // Add slider blocks data
      sliderBlocks.forEach((block, index) => {
        formData.append(`slider_blocks[${index}][title]`, block.title);
        formData.append(`slider_blocks[${index}][subtitle]`, block.subtitle);
        
        if (block.image instanceof File) {
          formData.append(`slider_blocks[${index}][image]`, block.image);
        }
        
        if (block.background instanceof File) {
          formData.append(`slider_blocks[${index}][background]`, block.background);
        }
      });
      
      const response = await companyService.updateCompany(formData, companyId);
      toast.success("Podatki uspešno shranjeni!");
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error?.response?.data?.error ||
        "Napaka pri shranjevanju podatkov. Poskusite znova."
      );
    } finally {
      setIsLoading(false);
    }
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
                2
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">KORAK 2</div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">Naša ponudba</div>
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
                Podnaslov <span className="text-[#ACAAAA]">(pod Naša ponudba)</span>
              </label>
              <input 
                type="text" 
                className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" 
                placeholder="Lahko ga pa tudi izpustite" 
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
            {sliderBlocks.map((block) => (
              <SliderBlock 
                key={block.id} 
                index={block.id} 
                title={block.title}
                isDefaultOpen={block.isDefaultOpen}
                onImageSelect={(file) => updateSliderBlock(block.id, 'image', file)}
                onBackgroundSelect={(file) => updateSliderBlock(block.id, 'background', file)}
                onSubtitleChange={(text) => updateSliderBlock(block.id, 'subtitle', text)}
                subtitle={block.subtitle}
              />
            ))}
            <div className="flex items-center justify-end pt-[8px] pb-[16px]">
              <div className="inline-flex items-center gap-[8px] cursor-pointer" onClick={addSliderBlock}>
                <img src="/florist_plus.png" alt="Dodaj sliko" className="w-[16px] h-[16px]" />
                <span className="text-[14px] text-[#3C3E41] font-normal leading-[100%]">DODAJ ŠE ENO SLIKO</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-[8px]">
          <div className="flex items-center gap-[8px] justify-between w-full">
            <button 
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] disabled:opacity-50"
            >
              {isLoading ? "Shranjevanje..." : "Shrani"}
            </button>
            <div className="flex items-center gap-[8px]">
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => handleStepChange(1)}>
                Nazaj
              </button>
              <button className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]" onClick={() => handleStepChange(3)}>
                Naslednji korak
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src="/florist/2.png" alt="Spletna stran" className="w-full h-full object-contain" />
      </div>
    </>
  )
}

function SliderBlock({ index, title, isDefaultOpen, onImageSelect, onBackgroundSelect, onSubtitleChange, subtitle }) {
  return (
    <OpenableBlock isDefaultOpen={isDefaultOpen} title={title} index={index}>
      <div className="space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="text-[14px] text-[#3C3E41] font-normal leading-[24px]">Za prvo silo smo nekaj slik že dodali. Svoje prilepi čimprej.</div>
          <BackgroundSelectorStep2 onSelect={onBackgroundSelect} />
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Dodaj prvo sliko
          </div>
          <ImageSelector onImageSelect={onImageSelect} />
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
          Vpiši za kaj gre pod prvo sliko
          </div>
          <input 
            type="text" 
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]" 
            placeholder="Lahko ga pa tudi izpustite" 
            value={subtitle}
            onChange={(e) => onSubtitleChange(e.target.value)}
          />
        </div>
      </div>
    </OpenableBlock>
  )
}