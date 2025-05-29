import API_BASE_URL from "@/config/apiConfig";
import React, { useRef } from "react";
import { Image } from "@nextui-org/react";
import { toJpeg } from "html-to-image";
const Card1 = ({ data, canDownload }) => {
  const formatDate = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";

    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();

    return `${day}.${month}.${year}`;
  };
  const formatYear = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";

    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();

    return `${year}`;
  };
  const formatDayAndTimeSlovenian = (timestamp) => {
    const date = new Date(timestamp);

    const dayName = date.toLocaleDateString("sl-SI", {
      weekday: "long", // e.g. ponedeljek
    });

    const time = date.toLocaleTimeString("sl-SI", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { dayName, time };
  };
  const { dayName, time } = formatDayAndTimeSlovenian(data?.funeralTimestamp);
  const cardRef = useRef();
  const downloadCard = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toJpeg(cardRef.current, {
        quality: 0.95,
      });
      const link = document.createElement("a");
      link.download = "memorial-card.jpeg";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to download image", err);
    }
  };
  return (
    <>
      <div
        ref={cardRef}
        className="w-[360px] bg-[#3b3b3b] h-[720px] rounded-xl shadow-md overflow-hidden text-white"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        <div className="flex justify-between items-center px-4 py-4 text-sm font-semibold">
          <span className="ml-3">9:41</span>
          <div className="flex space-x-1 text-xs">
            <img src="/mobile-cards/mini.png" alt="Status Icons" />
          </div>
        </div>

        <div className="inner-container ml-[35px] py-1">
          <div className="img-container py-5">
            <Image
              src={`${API_BASE_URL}/${data?.image}`}
              width={100}
              height={100}
              alt="Mario"
            />
            <br />
           <h2  className="text-[#fff] font-greatVibes text-[36px] font-normal leading-[30px] tracking-[0px]">V spomin</h2>
          </div>

          <div className="name-year-container">
            <h1 className="text-[42px] text-[#D89B1C] font-medium">
              {data?.firstName}
              <br /> {data?.sirName}
            </h1>
            <p className="text-[24px]">
              {formatYear(data?.birthDate)} - {formatYear(data?.deathDate)}
            </p>
          </div>

          <div className="name-year-container mt-[87px]">
            <h1 className="text-[#D89B1C] text-[24px] font-semibold">
              {dayName} ob {""}
              {time}
            </h1>
            <p className="mt-3">{formatDate(data?.funeralTimestamp)}</p>
            {data?.funeralLocation && data?.funeralCemetery && (
              <p>
                {data?.funeralCemetery} v {data?.funeralLocation}
              </p>
            )}
          </div>
        </div>

        <div className="">
          <img src="/mobile-cards/tool-bar.png" alt="" className="" />
        </div>
      </div>
      {canDownload && (
        <button
          onClick={downloadCard}
          className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Download as Image
        </button>
      )}
    </>
  );
};

export default Card1;
