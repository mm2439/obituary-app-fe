"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageSelector() {
  const [image, setImage] = useState(null);
  return (
    <div className="flex items-center gap-[4px] rounded-[8px] border border-[#6D778E] bg-[#FFFFFF]">
      <div className="inline-flex items-center gap-[8px] px-[16px] py-[12px] w-full">
        <Image src="/image_placeholder.png" width={20} height={20} alt="Spletna stran" />
        <span className="text-[16px] leading-[24px] text-[#ACAAAA] truncate max-w-[200px]">{image ? image.name : "Izberi sliko"}</span>
      </div>
      <input type="file" id="image" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
      <label htmlFor="image" className="border border-[#6D778E] bg-[#6D778E] py-[7px] px-[42px] flex items-center justify-center gap-[4px] rounded-[4px] mx-[4px] cursor-pointer">
        <Image src="/upload_icon.png" width={20} height={20} alt="Spletna stran" />
        <span className="text-[16px] leading-[24px] font-normal text-[#FFFFFF]">Dodaj</span>
      </label>
    </div>
  )
}
