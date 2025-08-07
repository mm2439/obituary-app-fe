"use client";
import React, { useState, useEffect } from "react";

const TextFieldComp = ({
  placeholder,
  value,
  onChange,
  readOnly = false,
  maxLength,
  background = "#F2F8FF66",
  textColor = "#1E2125",
}) => {
  return (
    <div
      className="h-[40px] rounded-[6px] mt-[4px]   shadow-custom-dark-to-white w-full"
      style={{ background: background }}
    >
      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        className="w-full px-[19px] h-full bg-transparent focus:outline-none text-[15px] "
        placeholder={placeholder}
        readOnly={readOnly}
        maxLength={maxLength}
        style={{ color: textColor }}
      />
    </div>
  );
};

export default TextFieldComp;
