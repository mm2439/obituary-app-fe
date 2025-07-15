"use client";
import React, { useEffect, useRef, useState } from "react";

const ChangePaswordModal = ({ setModalVisible }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div
      className="fixed z-[1000] top-0 left-0 w-full  bg-[#000000B2] h-screen  flex items-center justify-center"
      onClick={() => setModalVisible(false)}
    >
      <div
        className="relative mx-auto max-w-[1280px] flex justify-center mobile:w-[360px] w-full h-full "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[595px] h-[700px] bg-[#E7EEF3] rounded-[16px] p-[6px]">
          <div className="flex justify-end h-[50px]">
            <img
              src={"./circle_cross.png"}
              alt="Close"
              className="w-[70px] h-[70px] cursor-pointer"
              onClick={() => setModalVisible(false)}
            />
          </div>

          <div className="w-[450px] h-[549px] bg-[#E1E6EC] rounded-[16px] border-[1px] border-[#6D778E] mx-auto p-10">
            <div
              className="ms-24 mb-2 text-[#1E2125] text-[28px] text-normal"
              style={{ fontFamily: "Roboto Flex" }}
            >
              Dodaj pogreb
            </div>
            <div className="mb-4 flex flex-col ">
              <label
                className="font-normal text-base text-[#414B5A]"
                style={{ fontFamily: "Roboto Flex" }}
              >
                Pogreb - občina
              </label>

              <div className="w-full mx-auto">
                <input
                  type="text"
                  className="w-full px-[6px] h-full bg-[#F1FFFE] mobile:bg-transparent focus:outline-none text-[#105CCF] text-[18px] font-medium desktop:border desktop:border-[#6D778E38] tablet:border tablet:border-[#6D778E38]"
                />
              </div>
            </div>

            <div className="my-10 flex flex-col">
              <button
                className={`flex flex-1 px-[90px] py-3 mobile:px-10 text-center justify-center items-center rounded-lg shadow-custom-dual text-[16px] cursor-pointer ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed" // Disabled styles
                    : "bg-gradient-to-b from-[#0d94e8] to-[#1860a3] text-[#ffffff]" // Enabled styles
                }`}
                type="button"
                onClick={() => {}}
              >
                Objavi pogreb
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePaswordModal;
