"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function OpenableBlock({ isDefaultOpen = false, children, title, index, hasDeleteButton = false, helpText = "", openBlock, handleOpenBlock }) {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  useEffect(() => {
    if (openBlock !== undefined) {
      setIsOpen(openBlock);
    }
  }, [openBlock]);

  useEffect(() => {
    if (isOpen && handleOpenBlock) {
      handleOpenBlock();
    }
  }, [isOpen]);

  return (
    <div className={`${isOpen ? "pb-[8px]" : ""}`}>
      <div className={`${isOpen ? "bg-[#f2f5f8]" : "bg-[#e7ebf5]"} rounded-[4px] border border-[#A1B1D4]`}>
        <div className={`flex items-center justify-between ${isOpen ? 'border-b border-[#A1B1D4]' : 'border-b-0'} py-[16px] px-[16px]`}>
          <div className="flex items-center gap-[16px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#E9EDF7] border border-[#3C3E41] flex items-center justify-center text-[14px] leading-[100%] text-[#3C3E41]">
              {index}
            </div>
            <div className="text-[16px] text-[#3C3E41] leading-[24px] font-normal">
              {title} {isOpen && helpText && <span className="text-[#ACAAAA] text-[14px] leading-[24px] ml-[8px]">{helpText}</span>}
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[16px]">
              {isOpen && hasDeleteButton && (
                <Image src="/florist_delete.png" alt="Spletna stran" width={20} height={20} />
              )}
              <Image src="/eye_ico.png" alt="Spletna stran" width={20} height={20} />
              <Image src="/icon_reset.png" alt="Spletna stran" width={20} height={20} />
            </div>
            <Image src="/right_small_icon.png" alt="Spletna stran" className={`${isOpen ? '' : 'rotate-90'} transition-transform duration-300 cursor-pointer`} width={24} height={24} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <div className={`${isOpen ? 'py-[16px] space-y-[8px] max-h-[600px]' : 'py-[0] space-y-[8px] max-h-[0px] overflow-hidden'} transition-all duration-300 px-[16px]`}>
          {children}
        </div>
      </div>
    </div>
  )
}