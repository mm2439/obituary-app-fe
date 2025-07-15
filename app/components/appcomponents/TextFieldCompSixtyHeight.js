//13 September 2024

"use client";
import React, { useState } from "react";

const TextFieldCompSixtyHeight = ({ placeholder, value, onChange }) => {
  return (
    <div className="h-[60px] rounded-[6px] mt-[4px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        className="w-full px-[19px] h-full  bg-transparent focus:outline-none text-[#1E2125]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextFieldCompSixtyHeight;
