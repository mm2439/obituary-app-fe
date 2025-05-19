"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import BackgroundSelector from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import Switch from "../components/Switch";
import { useEffect, useState } from "react";
import companyService, { submitStep1Data } from "@/services/company-service";

export default function Step1({ data, onChange, handleStepChange }) {
  const [openedBlock, setOpenedBlock] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [companyId, setCompanyId] = useState(null);
  const [user, setUser] = useState(null);
  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", companyName);
    formData.append("phone", phone);
    formData.append("title", title);
    formData.append("description", description);

    if (selectedImage) {
      formData.append("picture", selectedImage);
    }

    try {
      const response = await companyService.createCompany(formData, "florist");
      onChange(response.funeralCompany);
    } catch (err) {
      console.error("Failed to create company:", err);
    }
  };

  useEffect(() => {
    if (data && data !== null) {
      setCompanyName(data.name);
      setTitle(data.title);
      setDescription(data.description);
      setPhone(data.phone);
      setSelectedImage(data.background);
      setCompanyId(data.id);
    }
  }, [data]);

  return (
    <>
      <div className="absolute top-[-24px] z-10 right-[30px] text-[14px] leading-[24px] text-[#6D778E]">
        Blue Daisy Florist, London
      </div>
      <form method="POST" enctype="multipart/form-data">
        <div className="min-h-full flex flex-col justify-between gap-[16px] relative">
          <div className="space-y-[43px]">
            <div className="flex justify-between items-center">
              <div className="inline-flex gap-[17px] items-center">
                <div className="w-[48px] h-[48px] rounded-full bg-[#D4DCF0] border border-[#0A85C2] flex items-center justify-center text-[20px] leading-[100%] text-[#0A85C2]">
                  1
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
              <div className="inline-flex gap-[8px]">
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
            </div>
            <div className="space-y-[8px]">
              <OpenableBlock
                isDefaultOpen={openedBlock === 1}
                title="Zgornja vrstica"
                index={1}
                havingSpacing={true}
                openBlock={openedBlock === 1}
                handleOpenBlock={() => setOpenedBlock(1)}
              >
                <div className="space-y-[8px]">
                  <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Ime cvetličarne oz podjetja in kraj
                  </span>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="Cvetličarna Suniflower, Milano"
                  />
                </div>
                <div className="space-y-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <Image
                      src="/phone_icon.png"
                      alt="Spletna stran"
                      width={24}
                      height={24}
                    />
                    <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                      Telefonska številka
                    </span>
                  </div>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="055-083-916"
                  />
                </div>
              </OpenableBlock>
              <OpenableBlock
                isDefaultOpen={openedBlock === 2}
                title="Velika zgornja slika"
                index={2}
                openBlock={openedBlock === 2}
                handleOpenBlock={() => setOpenedBlock(2)}
              >
                <div className="space-y-[8px]">
                  <span className="text-[14px] text-[#3C3E41] font-normal leading-[24px]">
                    Začasno lahko izbereš eno od teh slik in svojo prilepiš
                    naknadno.
                  </span>
                </div>
                <BackgroundSelector />
                <div className="space-y-[8px]">
                  <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Ime cvetličarne oz podjetja in kraj
                  </span>
                  <ImageSelector
                    setFile={(file) => setSelectedImage(file)}
                    inputId="florist-company-picture"
                  />
                </div>
                <div className="text-center text-[14px] leading-[24px] text-[#3C3E41] pt-[5px] pb-[10px]">
                  --------------
                </div>
                <div className="flex items-center gap-[12px]">
                  <span className="text-[16px] leading-[24px] text-[#ACAAAA]">
                    Steklen okvirček
                  </span>
                  <Image
                    src="/question_mark.png"
                    width={24}
                    height={24}
                    alt="Spletna stran"
                  />
                </div>
                <div className="flex items-center justify-between gap-[12px] py-[2px]">
                  <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Prikaži steklen okvir
                  </span>
                  <Switch />
                  <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Izbriši steklen okvir
                  </span>
                </div>
                <div className="space-y-[8px]">
                  <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Naslov v okvirčku
                  </span>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="Cvetličarna z dolgoletno tradicijo"
                  />
                </div>
                <div className="space-y-[8px]">
                  <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Tekst
                  </span>
                  <textarea
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] min-h-[108px] text-[14px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="V Cvetličarni Suniflower, na levem bregu Ljubljanice, že 22 let širimo ljubezen do cvetličarske umetnosti. Nudimo vam rezano cvetje, lončnice, "
                  />
                </div>
              </OpenableBlock>
            </div>
          </div>
          <div className="space-y-[48px]">
            {openedBlock === 1 && (
              <div className="space-y-[8px]">
                <p className="text-[14px] leading-[20px] text-[#6D778E]">
                  Tako enostavno je!
                </p>
                <p className="text-[14px] leading-[20px] text-[#6D778E]">
                  Nadaljujete postopek po korakih in vmes občasno tudi
                  shranjujte in na zadnjem koraku pritisnite gumb OBJAVI.
                </p>
                <p className="text-[14px] leading-[20px] text-[#6D778E]">
                  Vašo stran bomo izdelali in objavili najkasneje v 48 urah.
                </p>
              </div>
            )}
            <div className="flex items-center gap-[8px] justify-between w-full">
              <button
                onClick={handleSave}
                className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]"
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
                  onClick={() => handleStepChange(2)}
                >
                  Naslednji korak
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="w-full">
        <img
          src="/florist/1.png"
          alt="Spletna stran"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}
