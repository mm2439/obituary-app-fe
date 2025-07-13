"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import BackgroundSelector, {
  BackgroundSelectorStep2,
} from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import companyService from "@/services/company-service";
import Link from "next/link";

export default function Step2({ data, onChange, handleStepChange }) {
  const [offers, setOffers] = useState([
    {
      index: 0,
      isDefaultOpen: true,
      image: null,
      title: "",
    },
    {
      index: 1,
      isDefaultOpen: true,
      image: null,
      title: "",
    },
    {
      index: 2,
      isDefaultOpen: true,
      image: null,
      title: "",
    },
  ]);
  const [subtitle, setSubtitle] = useState("");
  const [companyId, setCompanyId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addSliderBlock = () => {
    setOffers([
      ...offers,
      {
        index: offers.length + 1,
        isDefaultOpen: true,
        image: null,
        title: "",
      },
    ]);
  };

  useEffect(() => {
    if (data && data !== null) {
      setCompanyId(data.id);

      if (data.offer_subtitle) {
        setSubtitle(data.offer_subtitle);
      }

      const loadedOffers = [];

      for (let i = 1; i <= 3; i++) {
        const title = data[`offer_${getNumberWord(i)}_title`];
        const image = data[`offer_${getNumberWord(i)}_image`];

        loadedOffers.push({
          index: i,
          isDefaultOpen: false,
          title: title || "",
          image: image || null,
        });
      }

      setOffers(loadedOffers);
    }
  }, [data]);

  const handleOfferChange = (index, updatedOffer) => {
    const updatedOffers = [...offers];
    updatedOffers[index] = updatedOffer;
    setOffers(updatedOffers);
  };

  const handleSubmit = async () => {
    try {
      // const incompleteOffer = offers.find(
      //   (offer) => !offer.image || !offer.title.trim() || !subtitle.trim()
      // );

      // if (incompleteOffer) {
      //   if (!subtitle.trim()) {
      //     toast.error("Enter Offer Subtitle");
      //     return;
      //   }
      //   toast.error("Each offer must have an image and description"); // "Each offer must have an image and description"
      //   return;
      // }
      if (!offers.length) {
        toast.error("Dodajte vsaj eno ponudbo");
        return;
      }
      const formData = new FormData();
      formData.append("offer_subtitle", subtitle);
      offers.forEach((offer, i) => {
        const offerNumber = i + 1;

        formData.append(
          `offer_${getNumberWord(offerNumber)}_title`,
          offer.title
        );
        if (offer.image !== null) {
          formData.append(
            `offer_${getNumberWord(offerNumber)}_image`,
            offer.image
          );
        }
      });
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      const response = await companyService.updateCompany(formData, companyId);
      onChange(response.company);
      toast.success("Podatki so shranjeni");
      console.log(response);
      return true;
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error?.response?.data?.error ||
          "Podatki niso shranjeni. Poskusite znova."
      );
      return false;
    }
  };

  const getNumberWord = (num) => {
    const words = ["one", "two", "three"];
    return words[num - 1] || "";
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
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">
                  KORAK 2
                </div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">
                  Naša ponudba
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
            <div className="space-y-[8px] pb-[28px]">
              <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                Podnaslov{" "}
                <span className="text-[#ACAAAA]">(pod Naša ponudba)</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                placeholder="Lahko ga pa tudi izpustite"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
            {offers.map((block) => (
              <SliderBlock
                key={block.index}
                index={block.index}
                offer={block}
                onChange={handleOfferChange}
                title={`Slike vaše ponudbe ${block.index}`}
              />
            ))}
          </div>
        </div>
        <div className="space-y-[8px]">
          <div className="flex items-center gap-[8px] justify-between w-full">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] disabled:opacity-50"
            >
              Shrani
            </button>
            <div className="flex items-center gap-[8px]">
              <button
                className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={() => handleStepChange(1)}
              >
                Nazaj
              </button>
              <button
                className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={async () => {
                  const success = await handleSubmit();
                  if (success) {
                    handleStepChange(3);
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
          src="/florist/2.png"
          alt="Spletna stran"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}

function SliderBlock({ index, title, offer, onChange }) {
  const [isDefaultOpen, setIsDefaultOpen] = useState(index === 1);
  const handleChange = (e) => {
    onChange(index - 1, { ...offer, [e.target.name]: e.target.value });
  };

  return (
    <OpenableBlock isDefaultOpen={isDefaultOpen} title={title} index={index}>
      <div className="space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="text-[14px] text-[#3C3E41] font-normal leading-[24px]">
            Za prvo silo smo nekaj slik že dodali. Svoje prilepi čimprej.
          </div>

          <BackgroundSelectorStep2
            setFile={(file) => {
              const updated = { ...offer, image: file.image };
              console.log(file.image, "============================");
              onChange(index - 1, updated);
            }}
          />
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Dodaj prvo sliko
          </div>

          <ImageSelector
            setFile={(file) => {
              const updated = { ...offer, image: file };
              onChange(index - 1, updated);
            }}
            inputId={`offer-${index}-upload`}
          />
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Vpiši za kaj gre pod prvo sliko
          </div>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Lahko ga pa tudi izpustite"
            value={offer.title}
            name="title"
            onChange={handleChange}
          />
        </div>
      </div>
    </OpenableBlock>
  );
}
