"use client";

import OpenableBlock from "../components/OpenAbleBlock";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import faqService from "@/services/faq-service";
import { toast } from "react-hot-toast";
import FuneralCompanyPreview from "../components/funeral-company-preview";
import RichTexEditor from "@/app/components/form/rich-editor";

const defaultFaqs = [
  {
    index: 1,
    question: "",
    answer: "",
  },
  {
    index: 2,
    question: "",
    answer: "",
  },
  {
    index: 3,
    question: "",
    answer: "",
  },
  {
    index: 4,
    question: "",
    answer: "",
  },
];

export default function Step5({ data, onChange, handleStepChange }) {
  const [faqs, setFaqs] = useState(() => {
    return data?.faqs?.length > 0 ? data?.faqs : defaultFaqs;
  });

  const [companyId, setCompanyId] = useState(data?.id);
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (!currUser) {
      return;
    }
    setUser(JSON.parse(currUser));
  }, []);

  const handleFaqChange = (index, updatedFaq) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index] = {
      ...updatedFaq,
      updated: true,
    };
    setFaqs(updatedFaqs);
  };

  const handleQuestionChange = useCallback((index, value) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = [...prevFaqs];
      updatedFaqs[index] = {
        ...updatedFaqs[index],
        question: value,
        updated: true,
      };
      return updatedFaqs;
    });
  }, []);

  const handleAnswerChange = useCallback((index, value) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = [...prevFaqs];
      updatedFaqs[index] = {
        ...updatedFaqs[index],
        answer: value,
        updated: true,
      };
      return updatedFaqs;
    });
  }, []);

  const validateFields = () => {
    const hasEmpty = faqs.some(
      (faq) => faq.question.trim() === "" || faq.answer.trim() === ""
    );

    if (hasEmpty) {
      toast.error("Please fill in all FAQ questions and answers.");
      return false;
    }

    return true;
  };
  const handleSubmit = async () => {
    try {
      if (!validateFields()) return;

      const faqsToSend = faqs
        .filter((faq) => faq.question.trim() !== "" && faq.answer.trim() !== "")
        .filter((faq) => !faq.id || (faq.id && faq.updated));

      const payload = {
        companyId,
        faqs: faqsToSend,
      };
      const response = await faqService.createFaq(payload);
      const updatedCompany = { ...data, faqs: response.faqs };
      onChange(updatedCompany);

      toast.success("Faq's Updated Successfully");
      return true;
    } catch (error) {
      console.log("Error while submitting form:", error);
      return false;
    }
  };

  const [sliderBlocks, setSliderBlocks] = useState([
    {
      index: 1,
      question: "",
      answer: "",
    },
  ]);

  const addSliderBlock = () => {
    setFaqs([
      ...faqs,
      {
        index: faqs.length + 1,
        question: "",
        answer: "",
      },
    ]);
  };

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
                  Pogosta vprašanja
                </div>
              </div>
            </div>
            {companyId && <FuneralCompanyPreview company={data} />}
          </div>
          <div className="space-y-[8px]">
            {faqs.map((block, index) => (
              <SliderBlock
                key={`faq-${block.id || index + 1}`}
                index={block.index || index + 1}
                title={`Vprašanje ${block.index || index + 1}`}
                faq={block}
                handleAnswerChange={handleAnswerChange}
                handleQuestionChange={handleQuestionChange}
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
                  DODAJ ŠE ENO VPRAŠANJE
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
          src="/funeral/6.png"
          alt="Spletna stran"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}

const SliderBlock = React.memo(function SliderBlock({
  index,
  title,
  faq,
  handleAnswerChange,
  handleQuestionChange,
}) {
  const [isDefaultOpen, setIsDefaultOpen] = useState(index === 1);

  return (
    <OpenableBlock isDefaultOpen={isDefaultOpen} title={title} index={index}>
      <div className="space-y-[16px]">
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Vprašanje
          </label>
          <input
            type="text"
            name="question"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Kaj storiti, ko se zgodi"
            value={faq.question || ""}
            onChange={(e) => {
              handleQuestionChange(index - 1, e.target.value);
            }}
          />
        </div>
        <div className="space-y-[8px]">
          <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Odgovor
          </label>
          <div>
            <RichTexEditor
              key={index}
              value={faq.answer || ""}
              handleChange={(val) => {
                handleAnswerChange(index - 1, val);
              }}
            />
          </div>
        </div>
      </div>
    </OpenableBlock>
  );
});
