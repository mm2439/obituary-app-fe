"use client";

import { useEffect, useState } from "react";

export default function Switch({ onChange, currentValue }) {
  const [isOn, setIsOn] = useState(currentValue);
  const handleChange = (condition) => {
    setIsOn(condition);
    onChange(condition);
  };

  return (
    <div
      className="flex items-center gap-[8px] border border-[#C0CBE2] w-[56px] h-[32px] rounded-[16px] px-[4px] cursor-pointer"
      onClick={() => handleChange(!isOn)}
    >
      <div
        className={`w-[24px] h-[24px] rounded-[12px] bg-[#D9D9D9] ${
          isOn ? "translate-x-full" : ""
        } transition-all duration-300`}
      ></div>
    </div>
  );
}
