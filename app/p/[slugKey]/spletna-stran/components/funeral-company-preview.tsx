"use client";
import Cemeteries from "@/app/components/appcomponents/Cemeteries";
import CompanyFooter from "@/app/components/appcomponents/CompanyFooter";
import { FrequentlyAskedQuestionView } from "@/app/components/appcomponents/FrequentlyAskedQuestionView";
import FuneralInFewDays from "@/app/components/appcomponents/FuneralInFewDays";
import FuneralsCompanyBanner from "@/app/components/appcomponents/FuneralsCompanyBanner";
import LastObituariesList from "@/app/components/appcomponents/LastObituariesList";
import Pride from "@/app/components/appcomponents/Pride";
import BaseModal from "@/app/components/ui/base-modal";
import Image from "next/image";
import { useState } from "react";

type Props = {
  company: any;
};

const FuneralCompanyPreview = ({ company }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
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
      </button>

      <BaseModal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex flex-col mx-auto w-full bg-[#F5F7F9]">
          <FuneralsCompanyBanner key={`${company?.id}-banner`} data={company} />
          <LastObituariesList key={`${company?.id}-last-obituaries`} />
          <FuneralInFewDays
            key={`${company?.id}-funeral-in-few-days`}
            data={company}
          />
          <Cemeteries key={`${company?.id}-cemeteries`} data={company} />
          <Pride key={`${company?.id}-pride`} data={company} />
          <FrequentlyAskedQuestionView
            key={`${company?.id}-faq`}
            data={company}
            from={"2"}
          />
          <CompanyFooter key={`${company?.id}-footer`} data={company || {}} />
        </div>
      </BaseModal>
    </>
  );
};

export default FuneralCompanyPreview;
