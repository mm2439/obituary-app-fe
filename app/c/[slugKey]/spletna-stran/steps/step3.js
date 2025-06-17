"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import { BackgroundSelectorStep2 } from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import { useState, useEffect } from "react";
import axios from "axios";
import packageService from "@/services/pacakge-service";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Step3({ data, onChange, handleStepChange }) {
  const [packages, setPackages] = useState([
    {
      index: 1,
      title: "",
      price: "",
      image: null,
    },
    {
      index: 2,
      title: "",
      price: "",
      image: null,
    },
    {
      index: 3,
      title: "",
      price: "",
      image: null,
    },
    {
      index: 4,
      title: "",
      price: "",
      image: null,
    },
  ]);
  const [companyId, setCompanyId] = useState(null);

  useEffect(() => {
    if (data && data !== null) {
      setCompanyId(data.id);

      if (data.packages && data.packages.length > 0) {
        const updatedPackages = data.packages.map((item, index) => ({
          ...item,
          index: index + 1,
        }));
        const paddedPackages = [...updatedPackages];

        while (paddedPackages.length < 4) {
          paddedPackages.push({
            index: paddedPackages.length + 1,
            title: "",
            price: "",
            image: null,
          });
        }

        setPackages(paddedPackages);
      }
    }
  }, [data]);
  const addSliderBlock = () => {
    setPackages([
      ...packages,
      {
        index: packages.length + 1,
        title: "",
        price: "",
        image: null,
      },
    ]);
  };
  const handlePackageChange = (index, updatedPackage) => {
    const updatedPackages = [...packages];
    updatedPackages[index] = updatedPackage;
    setPackages(updatedPackages);
  };

  const handleSubmit = async () => {
    try {
      // const incompletePackage = packages.find(
      //   (currPackage) =>
      //     !currPackage.price.trim() ||
      //     !currPackage.title.trim() ||
      //     !currPackage.image
      // );

      // if (incompletePackage) {
      //   toast.error("Each package must have an image,price and description");
      //   return;
      // }
      const formData = new FormData();
      formData.append("companyId", companyId);

      const nonEmptyPackages = packages.filter(
        (currPackage) =>
          currPackage.title.trim() !== "" &&
          currPackage.price.trim() !== "" &&
          currPackage.image !== null
      );

      nonEmptyPackages.forEach((currentPackage, index) => {
        const originalPackage = data.packages?.find(
          (c) => c.id === currentPackage.id
        );

        // Append default fields
        formData.append(`packages[${index}][title]`, currentPackage.title);
        formData.append(`packages[${index}][price]`, currentPackage.price);

        if (currentPackage.image) {
          formData.append(`packages[${index}][image]`, currentPackage.image);
        }

        if (currentPackage.id) {
          const titleChanged =
            originalPackage && currentPackage.title !== originalPackage.title;
          const priceChanged =
            originalPackage && currentPackage.price !== originalPackage.price;
          const imageChanged = currentPackage.image instanceof File;

          if (titleChanged || priceChanged || imageChanged) {
            formData.append(`packages[${index}][updated]`, true);
          }
          formData.append(`packages[${index}][id]`, currentPackage.id);
        }
      });

      for (let pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }
      if (nonEmptyPackages.length > 0) {
        const response = await packageService.createPackage(formData);
        const updatedCompany = {
          ...data,
          packages: response.packages,
        };

        onChange(updatedCompany);
        toast.success("Packages Updated Successfully");
      }

      return true;
    } catch (error) {
      console.log(error);
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
                3
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">
                  KORAK 3
                </div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">
                  Predstavitev trgovine
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
                Naslov
                <span className="text-[#ACAAAA] text-[14px]">
                  (v primeru smo se omejili na žalni program; ni pa to nujno)
                </span>
              </label>
              <input
                type="text"
                className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                placeholder="Žalni program"
              />
            </div>
            {packages.map((block, i) => (
              <SliderBlock
                title={`Okvirček ${block.index}`}
                key={block.index}
                index={block.index}
                currentPackage={block}
                onChange={handlePackageChange}
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
                  DODAJ ŠE DODATNE (največ 8)
                </span>
              </div>
            </div>
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
                onClick={() => handleStepChange(2)}
              >
                Nazaj
              </button>
              <button
                className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={async () => {
                  const success = await handleSubmit();
                  if (success) {
                    handleStepChange(4);
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
          src="/florist/3.png"
          alt="Spletna stran"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}

function SliderBlock({ index, title, currentPackage, onChange }) {
  const [isDefaultOpen, setIsDefaultOpen] = useState(index === 1);
  const handleChange = (e) => {
    onChange(index - 1, { ...currentPackage, [e.target.name]: e.target.value });
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
              const updated = { ...currentPackage, image: file };
              onChange(index - 1, updated);
            }}
            inputId={`package-${index}-upload`}
          />
        </div>
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Naslov
          </label>
          <input
            type="text"
            value={currentPackage.title}
            name="title"
            onChange={handleChange}
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Čudoviti aranžma št. 1"
          />
        </div>
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Cena
            <span className="text-[#ACAAAA] text-[14px]">
              (v kolikor jo želite dodati; lahko pustite prazno)
            </span>
          </label>
          <input
            type="text"
            value={currentPackage.price}
            name="price"
            onChange={handleChange}
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
          />
        </div>
      </div>
    </OpenableBlock>
  );
}
