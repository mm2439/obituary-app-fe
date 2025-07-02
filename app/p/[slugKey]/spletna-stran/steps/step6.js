"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import ImageSelector from "../components/ImageSelector";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import companyService from "@/services/company-service";
import Link from "next/link";

export default function Step6({ data, onChange, handleStepChange }) {
  const [openBlock, setOpenBlock] = useState(1);
  const [companyId, setCompanyId] = useState(null);
  const [user, setUser] = useState(null);
  const [workingHours, setWorkingHours] = useState(null);
  const [emergencyPhone, setEmergencyPhone] = useState(null);
  const [workingHourHighlightText, setWorkingHourHighlightText] =
    useState(null);
  const [sliderBlocks, setSliderBlocks] = useState([
    {
      id: 1,
      title: "Slike vaše ponudbe",
      isDefaultOpen: true,
    },
  ]);

  console.log(openBlock);

  const addSliderBlock = () => {
    setSliderBlocks([...sliderBlocks, { id: sliderBlocks.length + 1 }]);
  };

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
      setWorkingHours(data.workingHours);
      setWorkingHourHighlightText(data.working_hour_highlight_text);
      setEmergencyPhone(data.emergencyPhone);
    }
  }, [data]);
  const validateFields = () => {
    console.log(
      workingHours,
      workingHourHighlightText,
      emergencyPhone,
      companyId
    );
    if (
      !workingHours ||
      !workingHourHighlightText ||
      !emergencyPhone ||
      !companyId
    ) {
      toast.error("All fields are mandatory.");
      return false;
    }

    return true;
  };
  const handleSubmit = async () => {
    // if (!validateFields()) return;

    try {
      const formData = new FormData();

      if (workingHours != null) {
        formData.append("workingHours", workingHours);
      }

      if (emergencyPhone != null) {
        formData.append("emergencyPhone", emergencyPhone);
      }

      if (workingHourHighlightText != null) {
        formData.append(
          "working_hour_highlight_text",
          workingHourHighlightText
        );
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

  const handlePublish = async () => {
    try {
      if (data && data.status === "DRAFT") {
        toast.error("Company is already sent for approval");
        return false;
      }
      const formData = new FormData();
      formData.append("status", "DRAFT");

      const response = await companyService.updateCompany(formData, companyId);
      onChange(response.company);
      toast.success("Company Sent For Approval Successfully");
      router.push(`/funeralcompany/${companyId}`);

      return true;
      console.log(response);
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
        <div className="space-y-[44px]">
          <div className="flex justify-between items-center">
            <div className="inline-flex gap-[17px] items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D4DCF0] border border-[#0A85C2] flex items-center justify-center text-[20px] leading-[100%] text-[#0A85C2]">
                6
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">
                  KORAK 6
                </div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">
                  Noga
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
            <OpenableBlock
              isDefaultOpen={true}
              title={"Informacije za obiskovalce"}
              index={1}
            >
              <div className="space-y-[16px]">
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Delovni čas
                  </div>
                  <input
                    type="text"
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="Pon-pet 7:00 - 15:00"
                    value={workingHours}
                    onChange={(e) => setWorkingHours(e.target.value)}
                  />
                </div>
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Drobni tisk pod tem{" "}
                    <span className="text-[#ACAAAA] text-[14px]">
                      (lahko pustite prazno ali vnesete karkoli)
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="Pon-pet 7:00 - 15:00"
                    value={workingHourHighlightText}
                    onChange={(e) =>
                      setWorkingHourHighlightText(e.target.value)
                    }
                  />
                </div>
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    24-urna dežurna služba:
                  </div>
                  <input
                    type="text"
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="041-599-742 "
                    value={emergencyPhone}
                    onChange={(e) => setEmergencyPhone(e.target.value)}
                  />
                </div>
              </div>
            </OpenableBlock>
          </div>
        </div>
        <div className="space-y-[35px]">
          <p className="text-[14px] text-[#6D778E] font-normal leading-[20px]">
            Ko vnesete vse pritisnite gumb OBJAVI in vašo stran bomo izdelali in
            objavili najkasneje v 48 urah.{" "}
          </p>

          <div className="flex items-center gap-[8px] justify-between w-full">
            <div className="flex items-center gap-[8px]">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]"
              >
                Shrani
              </button>
              <button
                className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={() => {
                  if (openBlock === 1) {
                    handleStepChange(5);
                  } else {
                    setOpenBlock(1);
                  }
                }}
              >
                Nazaj
              </button>
            </div>
            <button
              className="bg-gradient-to-b from-[#F916D6] to-[#9D208A] text-[#FFFFFF] font-semibold leading-[24px] text-[20px] py-[12px] px-[66px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
              onClick={async () => {
                if (openBlock === 1) {
                  const success = await handleSubmit();
                  if (success) {
                    setOpenBlock(2);
                  }
                } else {
                  handlePublish();
                  handleStepChange(6);
                }
              }}
            >
              Objavi
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/funeral/7.png"
          alt="Spletna stran"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}
