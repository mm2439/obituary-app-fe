"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import {
  BackgroundSelectorStep2,
  IconSelectorStep4,
} from "../components/BackgroundSelector";
import ImageSelector from "../components/ImageSelector";
import { useState, useEffect } from "react";
import Switch from "../components/Switch";
import { toast } from "react-hot-toast";
import companyService from "@/services/company-service";
import Link from "next/link";

export default function Step4({ data, onChange, handleStepChange }) {
  const [companyId, setCompanyId] = useState(null);
  const [boxes, setBoxes] = useState([
    {
      index: 1,
      isDefaultOpen: true,
      text: "",
      icon: null,
    },
  ]);
  const [image, setImage] = useState(null);
  const [showBackground, setShowBackground] = useState(
    data?.showBoxBackground || false
  );

  const addSliderBlock = () => {
    setBoxes([...boxes, { index: boxes.length + 1 }]);
  };

  const handleBoxChange = (index, updatedBox) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[index] = updatedBox;
    setBoxes(updatedBoxes);
  };
  const handleSubmit = async () => {
    try {
      // const incompleteBoxes = boxes.find(
      //   (box) => !box.icon || !box.text.trim()
      // );

      // if (incompleteBoxes) {
      //   console.log(boxes);
      //   toast.error("Each box must have an image and title");
      //   return;
      // }

      const formData = new FormData();
      if (image !== null) {
        formData.append("boxBackgroundImage", image);
      }
      formData.append("companyId", companyId);
      formData.append("showBoxBackground", showBackground);

      const nonEmptyBoxes = boxes.filter(
        (box) => box.text.trim() !== "" && box.icon !== null
      );

      nonEmptyBoxes.forEach((box, i) => {
        const boxNumber = i + 1;

        formData.append(`box_${getNumberWord(boxNumber)}_text`, box.text);

        formData.append(`box_${getNumberWord(boxNumber)}_icon`, box.icon);
      });
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      if (nonEmptyBoxes.length > 0) {
        const response = await companyService.updateCompany(
          formData,
          companyId
        );
        onChange(response.company);

        toast.success("Company updated Successfully");
      }

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

  // const updateCompany = async () => {
  //   if (image === null) {
  //     return;
  //   }
  //   const formData = new FormData();
  //   if (image !== null) {
  //     formData.append("boxBackgroundImage", image);
  //   }

  //   formData.append("showBoxBackground", showBackground);

  //   const response = await companyService.updateCompany(formData, companyId);
  //   onChange(response.company);
  // };

  const getNumberWord = (num) => {
    const words = ["one", "two", "three"];
    return words[num - 1] || "";
  };

  useEffect(() => {
    if (data && data !== null) {
      setCompanyId(data.id);

      const loadedBoxes = [];

      for (let i = 1; i <= 2; i++) {
        const text = data[`box_${getNumberWord(i)}_text`];
        const icon = data[`box_${getNumberWord(i)}_icon`];

        loadedBoxes.push({
          index: i,
          isDefaultOpen: false,
          text: text || "",
          icon: icon || null,
        });
      }

      setBoxes(loadedBoxes);
    }
  }, [data]);

  useEffect(() => {
    console.log(showBackground, "show background");
    console.log(image, "show image");
  }, [image, showBackground]);
  const handleSwitchChange = (condition) => {
    setShowBackground(condition);
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
                  Naše prednosti
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
            {boxes.map((block) => (
              <SliderBlock
                key={block.index}
                index={block.index}
                title={`Okvir ${block.index}`}
                box={block}
                onChange={handleBoxChange}
              />
            ))}
            {boxes.length < 2 && (
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
                    DODAJ ŠE DODATNE (največ 2)
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="space-y-[28px]">
            <div className="flex items-center justify-center">
              <button className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] text-[#FFFFFF] font-[800] leading-[24px] text-[20px] py-[7px] px-[30px] rounded-[4px]">
                ALI
              </button>
            </div>
            <div className="space-y-[8px]">
              <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                Dodaj svojo sliko{" "}
                <span className="text-[#ACAAAA] text-[14px]">
                  (ki naj zamenja ta ozek blok; idealno 1280 x 420)
                </span>
              </div>
              <ImageSelector
                setFile={(file) => setImage(file)}
                inputId={"boxes-bg-image"}
              />
              <div className="flex items-center justify-center gap-[22px] py-[9px]">
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Prikaži obstoječ dizajn
                </span>
                <Switch
                  onChange={handleSwitchChange}
                  currentValue={showBackground}
                />
                <span className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                  Prikaži svojo sliko
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
          src="/florist/4.png"
          alt="Spletna stran"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}

function SliderBlock({ index, title, box, onChange }) {
  const [isDefaultOpen, setIsDefaultOpen] = useState(index === 1);
  const handleChange = (e) => {
    onChange(index - 1, { ...box, [e.target.name]: e.target.value });
  };
  const handleImageChange = (key, value) => {
    onChange(index - 1, { ...box, [key]: value });
  };
  return (
    <OpenableBlock
      isDefaultOpen={isDefaultOpen}
      title={title}
      index={index}
      hasDeleteButton={true}
      helpText="(največ 2)"
    >
      <div className="space-y-[16px]">
        <div className="space-y-[8px]">
          <div className="text-[14px] text-[#3C3E41] font-normal leading-[24px]">
            Za prvo silo smo nekaj slik že dodali. Svoje prilepi čimprej.
          </div>
          <IconSelectorStep4 setBoxIcon={handleImageChange} />
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Tekst
          </div>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Dostava isti dan"
            name="text"
            value={box.text}
            onChange={handleChange}
          />
        </div>
      </div>
    </OpenableBlock>
  );
}
