"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import { IconSelectorStep4 } from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import { useEffect, useState } from "react";
import Switch from "../components/Switch";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import companyService from "@/services/company-service";
import Link from "next/link";

export default function Step4({ data, onChange, handleStepChange }) {
  const [companyId, setCompanyId] = useState(null);
  const [user, setUser] = useState(null);
  const [secondaryTitle, setSecondaryTitle] = useState(null);
  const [secondaryDescription, setSecondaryDescription] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (!currUser) {
      return;
    }
    setUser(JSON.parse(currUser));
  }, [router]);
  useEffect(() => {
    if (data && data !== null) {
      setCompanyId(data.id);
      setSecondaryTitle(data?.secondary_title);
      setSecondaryDescription(data?.secondary_description);
    }
  }, [data]);
  const validateFields = () => {
    if (
      !secondaryDescription ||
      !secondaryTitle ||
      !secondaryImage ||
      !companyId
    ) {
      toast.error("All fields are mandatory.");
      return false;
    }

    return true;
  };
  const handleSubmit = async () => {
    // if (!validateFields()) return false;

    try {
      const formData = new FormData();

      if (secondaryTitle != null) {
        formData.append("secondary_title", secondaryTitle);
      }

      if (secondaryDescription != null) {
        formData.append("secondary_description", secondaryDescription);
      }

      if (secondaryImage instanceof File) {
        formData.append("secondary_image", secondaryImage);
      }

      const response = await companyService.updateCompany(formData, companyId);
      onChange(response.company);
      toast.success("Company Updated Successfully");
      console.log(response);
      return true;
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error?.response?.data?.error ||
          "Failed to update company. Please try again."
      );
      return false;
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
                4
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">
                  KORAK 4
                </div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">
                  Promocijski blok
                </div>
              </div>
            </div>
            {companyId && (
              <Link href={`/funeralcompany/${companyId}`} target="blank">
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
            <div className="space-y-[16px]">
              <div className="space-y-[8px]">
                <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Naslov
                </div>
                <input
                  type="text"
                  className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                  placeholder="Naš ponos"
                  value={secondaryDescription}
                  onChange={(e) => setSecondaryDescription(e.target.value)}
                />
              </div>
              <div className="space-y-[8px]">
                <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Tekst
                </div>
                <input
                  type="text"
                  className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                  placeholder="Projekt prenove trboveljskega pokopališča je bil leta"
                  value={secondaryTitle}
                  onChange={(e) => setSecondaryTitle(e.target.value)}
                />
              </div>
              <div className="space-y-[8px]">
                <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Slika
                </div>
                <ImageSelector
                  setFile={(file) => setSecondaryImage(file)}
                  inputId="secondary-image"
                />
              </div>
            </div>
          </div>
          <p className="text-[14px] text-[#6D778E] font-normal leading-[20px]">
            Uporaben blok, ker lahko napišete karkoli želite; lahko je nekaj na
            kar ste ponosni, morda nekaj zgodovine, lahko je promocijski, kjer
            oglašujete, morda dodate informacije o vaših drugih dejavnostih,
            morda o obletnicah, prireditvah, načrtih.
          </p>
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
                onClick={() => handleStepChange(3)}
              >
                Nazaj
              </button>
              <button
                className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={async () => {
                  const success = await handleSubmit();
                  if (success) {
                    handleStepChange(5);
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
          src="/funeral/5.png"
          alt="Spletna stran"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}
