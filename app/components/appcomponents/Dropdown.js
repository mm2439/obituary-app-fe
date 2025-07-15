// components/Dropdown.js
import { useState } from "react";
import iconDropDown from "@/public/icon_dropDown.png";
import Image from "next/image";

const Dropdown = ({
  label,
  isFromNotification,
  isFromFlower,
  isFrom,
  isFromFlowerGreenBgTablet,
  isFromObituary,
  data = [],
  selectedValue = "",
  onSelect,
  isDisabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    if (isDisabled) return;
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div
      className={
        isFrom == "florist"
          ? "dropdown w-full h-full"
          : isFrom == "companyregistration"
          ? "dropdown w-full h-full "
          : isFrom == "pogrebi"
          ? "dropdown w-full h-12"
          : isFromObituary == "obituaryform"
          ? "dropdown w-full h-full mobile:h-[20px]"
          
          : isFromNotification
          ? label == "Mesto"
            ? "dropdown w-[306px] mobile:w-[240px] h-[48.48px]"
            : "dropdown w-[306px] h-[48.48px] "
          : isFromFlower
          ? "dropdown w-[476px] h-[48px] tablet:w-[302px] mobile:w-full"
          : isFromFlowerGreenBgTablet
          ? "dropdown w-[292px] desktop:w-[476px] h-[48px] tablet:w-[476px]"
          : "dropdown w-[292px] desktop:w-[227px] h-[48px]  "
      }
    >
      <div
        tabIndex={0}
        role="button"
        onClick={() => !isDisabled && setIsOpen(!isOpen)}
        className={
          isFrom == "companyregistration"
            ? "relative flex flex-1 items-center justify-between h-full px-[15px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white hover:ring-2 w-full"
            : isFrom == "userAccount"
            ? "relative flex flex-1 items-center justify-between h-full px-[15px] rounded-[6px] bg-transparent    w-full"
            : isFrom
            ? "relative flex flex-1 items-center justify-between h-full px-[15px] rounded-[6px] bg-white hover:ring-2 border-[#7C7C7C] border shadow-sm w-full"
            : isFromFlower
            ? "relative bg-white hover:ring-2 border-[#7C7C7C] border rounded-lg shadow-sm flex flex-1 items-center justify-between h-full pl-[23.8px] pr-[23.5px] cursor-pointer tablet:h-[48px] mobile:h-[48px]"
            : isFromObituary === "obituaryform"
            ? "relative flex flex-1 items-center justify-between h-full px-[15px] mobile:h-5 mobile:bg-transparent mobile:border-b-2 mobile:boder-[#D4D4D4] border-[1px] border-[#d4d4d4] bg-[#F1FFFE] hover:ring-2 w-full"
            : isFromFlowerGreenBgTablet
            ? "relative bg-white hover:ring-2 border-[#7C7C7C] border rounded-lg shadow-sm flex flex-1 items-center justify-between h-full pl-[23.8px] desktop:h-[48px] pr-[23.5px] cursor-pointer tablet:h-[48px] tablet:w-full mobile:h-[48px]"
            : "relative bg-white hover:ring-2 border-[#7C7C7C] border rounded-lg shadow-sm flex flex-1  items-center justify-between h-full pl-[15.8px] pr-[10.5px] desktop:pr-[15.5px] cursor-pointer"
        }
      >
        {selectedValue && (
          <span
            style={{
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: 400,
              color: "#105CCF",
              fontVariationSettings: "'opsz' 16",
            }}
          >
            {selectedValue}
          </span>
        )}
        {!selectedValue && (
          <span
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
              color: "#808080",

              fontVariationSettings: "'opsz' 16",
            }}
          >
            {label}
          </span>
        )}
        <Image
          src={iconDropDown}
          className={`w-8 h-8 ${isDisabled ? "opacity-50" : ""}`}
        />
      </div>

      {isOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content  z-[1] shadow-box-shadow   rounded-box w-full max-h-60 overflow-y-auto"
          style={{ backgroundColor: "#f1fffe" }}
        >
          {data.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-[#6D778E] hover:text-white text-[#7d7d7d] pl-4 p-2 rounded-md"
              onClick={() => handleSelect(item)}
            >
              {item.place}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
