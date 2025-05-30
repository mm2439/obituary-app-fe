"use client";

import { useState } from "react";


export default function Switch() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="flex items-center gap-[8px] border border-[#C0CBE2] w-[56px] h-[32px] rounded-[16px] px-[4px] cursor-pointer" onClick={() => setIsOn(!isOn)}>
      <div className={`w-[24px] h-[24px] rounded-[12px] bg-[#D9D9D9] ${isOn ? 'translate-x-full' : ''} transition-all duration-300`}></div>
    </div>
  )
}
