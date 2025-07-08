"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import { BackgroundSelectorStep2 } from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import { useEffect, useState } from "react";
import slideService from "@/services/slides-service";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Step5({ data, onChange, handleStepChange }) {
  const [slides, setSlides] = useState([
    {
      index: 1,
      isDefaultOpen: true,
      image: null,
      title: "",
      description: "",
    },
  ]);
  const [companyId, setCompanyId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addSliderBlock = () => {
    setSlides([
      ...slides,
      {
        index: slides.length + 1,
        isDefaultOpen: true,
        image: null,
        title: "",
        description: "",
      },
    ]);
  };

  const handleSlideChange = (index, updatedSlide) => {
    const updatedSlides = [...slides];
    updatedSlides[index] = updatedSlide;
    setSlides(updatedSlides);
  };

  const handleSubmit = async () => {
    try {
      // const incompleteSlide = slides.find(
      //   (slide) =>
      //     !slide.title.trim() || !slide.description.trim() || !slide.image
      // );

      // if (incompleteSlide) {
      //   toast.error("Each Slide must have an image,title and description");
      //   return;
      // }
      const formData = new FormData();
      formData.append("companyId", companyId);

      const nonEmptySlides = slides.filter(
        (slide) =>
          slide.title.trim() !== "" &&
          slide.description.trim() !== "" &&
          slide.image !== null
      );

      nonEmptySlides.forEach((slide, index) => {
        const originalSlide = data.slides?.find((c) => c.id === slide.id);

        // Append default fields
        formData.append(`slides[${index}][title]`, slide.title);
        formData.append(`slides[${index}][description]`, slide.description);

        if (slide.image) {
          formData.append(`slides[${index}][image]`, slide.image);
        }

        if (slide.id) {
          const titleChanged =
            originalSlide && slide.title !== originalSlide.title;
          const descriptionChanged =
            originalSlide && slide.description !== originalSlide.description;
          const imageChanged = slide.image instanceof File;

          if (titleChanged || descriptionChanged || imageChanged) {
            formData.append(`slides[${index}][updated]`, true);
          }
          formData.append(`slides[${index}][id]`, slide.id);
        }
      });

      for (let pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }

      if (nonEmptySlides.length > 0) {
        const response = await slideService.createSlide(formData);
        const updatedCompany = { ...data, slides: response.slides };
        onChange(updatedCompany);
        toast.success("Florist Slides Updated Successfully");
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  useEffect(() => {
    setCompanyId(data.id);

    if (data.slides && data.slides.length > 0) {
      const updatedSlides = data.slides.map((slide, index) => ({
        ...slide,
        index: index + 1,
      }));
      setSlides(updatedSlides);
    }
  }, [data]);
  return (
    <>
      <div className="absolute top-[-24px] z-10 right-[30px] text-[14px] leading-[24px] text-[#6D778E]">
        Blue Daisy Florist, London
      </div>
      <div className="min-h-full flex flex-col justify-between gap-[16px]">
        <div className="space-y-[20px]">
          <div className="flex justify-between items-center">
            <div className="inline-flex gap-[17px] items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D4DCF0] border border-[#0A85C2] flex items-center justify-center text-[20px] leading-[100%] text-[#0A85C2]">
                5
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">
                  KORAK 5
                </div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">
                  Premični blok - slajder
                </div>
              </div>
            </div>
            {companyId && (
              <Link href={`/floristdetails/${companyId}`} target="blank">
                <div className="inline-flex gap-[8px] cursor-pointer">
                  <span className="text-[14px] text-[#3C3E41] leading-[24px]">
                    Predogled strani
                  </span>
                  <Image
                    src="/external_open.png"
                    alt="Predogled strani"
                    width={20}
                    height={20}
                    className="shrink-0 w-[20px] h-[20px]"
                  />
                </div>
              </Link>
            )}
          </div>
          <div className="space-y-[8px]">
            <div className="space-y-[8px] pb-[38px] text-[14px] text-[#6D778E] leading-[20px]">
              Povsem vaš blok, kjer lahko dodate veliko teksta. Slika bo
              avtomatsko optimizirana, zato bo (skoraj) vsaka izgledala lepo.
              Dodate lahko do tri take bloke, ki se samodejno izmenjavajo.
              Vsebino v tem bloku lahko neprestano prilagajate priložnostim ali
              svojim promocijam.
            </div>
            {slides.map((block) => (
              <SliderBlock
                title={`Slajd ${block.index}`}
                key={block.index}
                index={block.index}
                slide={block}
                onChange={handleSlideChange}
              />
            ))}
            <div className="flex items-center justify-end pt-[8px] pb-[16px]">
              <div
                className="inline-flex items-center gap-[8px] cursor-pointer"
                onClick={addSliderBlock}
              >
                <img
                  src="/florist_plus.png"
                  alt="Dodaj sliko"
                  className="w-[16px] h-[16px]"
                />
                <span className="text-[14px] text-[#3C3E41] font-normal leading-[100%]">
                  DODAJ ŠE EN SLAJD
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-[8px]">
          <div className="flex items-center gap-[8px] justify-between w-full">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]"
            >
              Shrani
            </button>
            <div className="flex items-center gap-[8px]">
              <button
                className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={() => handleStepChange(4)}
              >
                Nazaj
              </button>
              <button
                className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={async () => {
                  const success = await handleSubmit();
                  if (success) {
                    handleStepChange(6);
                  }
                }}
              >
                Naslednji korak
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/florist/5.png"
          alt="Spletna stran"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}

function SliderBlock({ index, title, slide, onChange }) {
  const [isDefaultOpen, setIsDefaultOpen] = useState(index === 1);
  const handleChange = (e) => {
    onChange(index - 1, { ...slide, [e.target.name]: e.target.value });
  };

  return (
    <OpenableBlock isDefaultOpen={isDefaultOpen} title={title} index={index}>
      <div className="space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Slika
          </div>
          <ImageSelector
            setFile={(file) => {
              const updated = { ...slide, image: file };
              onChange(index - 1, updated);
            }}
            inputId={`slide-${index}-upload`}
          />
        </div>
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Naslov
          </label>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Posebna ponudba v avgustu"
            value={slide.title}
            name="title"
            maxLength={25}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Tekst
          </label>
          <textarea
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[14px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px] min-h-[108px]"
            placeholder="Visok blok, kjer lahko dodamo karkoli, kar bi lahko pritegnilo vaše stranke ali poudarite posebne promocije ali ponudbo med prazniki, ipd. "
            value={slide.description}
            maxLength={220}
            name="description"
            onChange={handleChange}
          />
        </div>
      </div>
    </OpenableBlock>
  );
}
