"use client";
import FloristsSunFlowerView from "@/app/components/appcomponents/FloristsSunFlowerView";
import Offer from "@/app/components/appcomponents/Offer";
import Qualityflowers from "@/app/components/appcomponents/Qualityflowers";
import SadProgram from "@/app/components/appcomponents/SadProgram";
import SpecialOffer from "@/app/components/appcomponents/SpecialOffer";
import SunflowerFlorist from "@/app/components/appcomponents/SunflowerFlorist";
import BaseModal from "@/app/components/ui/base-modal";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  companyData: any;
};

const CompanyPreview = ({ companyData }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  console.log(companyData);
  console.log("openModal", openModal);

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
          <FloristsSunFlowerView data={companyData} />
          <Offer data={companyData} />
          <SadProgram key={companyData?.id} data={companyData} />
          <Qualityflowers data={companyData} />
          <SpecialOffer key={companyData?.id} data={companyData} />
          <SunflowerFlorist key={companyData?.id} data={companyData} />
        </div>
      </BaseModal>
    </>
  );
};

export default CompanyPreview;
