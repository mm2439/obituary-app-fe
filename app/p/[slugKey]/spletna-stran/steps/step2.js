"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import ImageSelector from "../components/ImageSelector";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import companyService from "@/services/company-service";
import Link from "next/link";

export default function Step2({ data, onChange, handleStepChange }) {
  const [openedBlock, setOpenedBlock] = useState(1);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [background, setBackground] = useState(null);
  const [companyId, setCompanyId] = useState(null);

  const validateFields = () => {
    console.log(title, description, image, background, companyId);
    if (!title || !description || !image || !background || !companyId) {
      toast.error("All fields are mandatory.");
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (data) {
      if (data.title) setTitle(data.title);
      if (data.description) setDescription(data.description);
      if (data.funeral_section_one_image_one)
        setImage(data.funeral_section_one_image_one);
      if (data.funeral_section_one_image_two)
        setBackground(data.funeral_section_one_image_two);
      if (data.id) setCompanyId(data.id);
    }
  }, [data]);

  const handleSubmit = async () => {
    // if (!validateFields()) return false;

    try {
      const formData = new FormData();

      if (title !== null) formData.append("title", title);
      if (description !== null) formData.append("description", description);

      if (image instanceof File) {
        formData.append("funeral_section_one_image_one", image);
      }
      if (background instanceof File) {
        formData.append("funeral_section_one_image_two", background);
      }

      const response = await companyService.updateCompany(formData, companyId);
      onChange(response.company);
      toast.success("Company Updated Successfully");

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
                2
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">
                  KORAK 1
                </div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">
                  Zgornji blok
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
          <div className="space-y-[21px]">
            <OpenableBlock
              isDefaultOpen={true}
              title="Teskti"
              index={1}
              openBlock={openedBlock === 1}
              handleOpenBlock={() => setOpenedBlock(1)}
            >
              <div className="space-y-[8px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Naslov
                </span>
                <input
                  type="text"
                  className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                  placeholder="Predstavitev"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="space-y-[8px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Tekst
                </span>
                <input
                  type="text"
                  className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                  placeholder="Komunala Trbovlje v okviru pogrebnega zavoda "
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </OpenableBlock>
            <div
              className={`bg-[#f2f5f8] rounded-b-[4px] border border-[#A1B1D4]`}
            >
              <div
                className={`py-[16px] space-y-[8px] max-h-[600px] transition-all duration-300 px-[16px]`}
              >
                <div className="space-y-[8px]">
                  <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Večja slika zadaj
                  </span>
                  <ImageSelector
                    setFile={(file) => setImage(file)}
                    inputId="image-upload"
                  />
                </div>
                <div className="space-y-[8px]">
                  <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Manjša slika spredaj
                  </span>
                  <ImageSelector
                    setFile={(file) => setBackground(file)}
                    inputId="background-upload"
                  />
                </div>
              </div>
            </div>
            <p className="text-[16px] text-[#6D778E] leading-[24px]">
              Velikost slik bo avtomatsko prilagojena. Če slik trenutno nimate
              pri roki, lahko izpolnite preostalo, slike pa dodate kadarkoli
              kasneje.{" "}
            </p>
          </div>
        </div>
        <div className="space-y-[8px]">
          <div className="flex items-center gap-[8px] justify-between w-full">
            <button
              onClick={handleSubmit}
              className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]"
            >
              Shrani
            </button>
            <div className="flex items-center gap-[8px]">
              <button
                className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={() => {
                  handleStepChange(1);
                }}
              >
                Nazaj
              </button>
              <button
                className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={async () => {
                  const success = await handleSubmit();
                  if (success) {
                    console.log(success, "===========================");
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
          src={`/funeral/3.png`}
          alt="Spletna stran"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full text-[16px] text-[#6D778E] leading-[24px] mt-[29px] italic col-span-2">
        Op. Naslednja bloka, Zadnje osmrtnice in Pogrebi, sta avtomatizirana,
        tako da ni potrebno ničesar vstavljati.
      </div>
    </>
  );
}
