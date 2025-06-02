"use client";
import API_BASE_URL from "@/config/apiConfig";
import React, { useRef } from "react";
import { Image } from "@nextui-org/react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

const Card1 = ({ data, isAssigned }) => {
  const cardRef = useRef(null);

  const formatDate = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";
    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formatYear = (timestamp) => {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "";
    return `${date.getFullYear()}`;
  };

  const formatDayAndTimeSlovenian = (timestamp) => {
    const date = new Date(timestamp);
    const dayName = date.toLocaleDateString("sl-SI", { weekday: "long" });
    const time = date.toLocaleTimeString("sl-SI", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { dayName, time };
  };

  const { dayName, time } = formatDayAndTimeSlovenian(data?.funeralTimestamp);

  const handleDownloadPDF = async () => {
    if (!isAssigned) return;
    const element = cardRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Card1.pdf");
  };

  return (
    <>
      <div
        ref={cardRef}
        className="w-[360px] bg-[#3b3b3b] h-[720px] shadow-md overflow-hidden text-white"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        <div className="flex justify-between items-center px-4 py-4 text-sm font-semibold">
          <span className="ml-3">9:41</span>
          <div className="flex space-x-1 text-xs">
            <img
              src="/mobile-cards/mini.png"
              alt="Status Icons"
            />
          </div>
        </div>

        <div className="ml-[35px] py-1">
          <div className="py-5 h-[188px]">
            <img
              src={`${API_BASE_URL}/${data?.image}`}
              className="w-auto max-h-[188px]"
            />
          </div>

            <br />
            <h2 className="text-[#fff] font-greatVibes text-[36px] font-normal leading-[30px] tracking-[0px]">
              V spomin
            </h2>

          <div>
            <h1 className="text-[42px] text-[#D89B1C] font-medium h-[96px]">
              {data?.firstName}
              <br /> {data?.sirName}
            </h1>
            <p className="text-[24px] h-[28px]">
              {formatYear(data?.birthDate)} - {formatYear(data?.deathDate)}
            </p>
          </div>

          <div className="mt-[163px]">
            <h1 className="text-[#D89B1C] text-[24px] font-semibold">
              {dayName} ob {time}
            </h1>
            <p className="mt-3">{formatDate(data?.funeralTimestamp)}</p>
            {data?.funeralLocation && data?.funeralCemetery && (
              <p>
                {data?.funeralCemetery} v {data?.funeralLocation}
              </p>
            )}
          </div>
        </div>

        <div className="mt-[47px]">
          <img
            src="/mobile-cards/tool-bar.png"
            alt="Toolbar"
            className="w-auto"
          />
        </div>
      </div>

      {isAssigned && (
        <button
          onClick={handleDownloadPDF}
          className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Download as PDF
        </button>
      )}
    </>
  );
};

export default Card1;
