"use client";
import obituaryService from "@/services/obituary-service";
import { user } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const LocalQuickReview = ({ setIsLocalQuickModalVisible }) => {
  return (
    <div
      className="fixed z-50 w-full bg-[#000000B2] h-screen py-[80px]"
      onClick={() => setIsLocalQuickModalVisible(false)}
    >
      <div
        className="relative mx-auto max-w-[1280px] flex justify-center mobile:w-[360px] w-full h-full mt-[5px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[550px] h-[750px] bg-[#E7EEF3] rounded-[16px] p-[6px]">
          <div className="flex justify-end">
            <img
              src={"./circle_cross.png"}
              alt="Close"
              className="w-[70px] h-[70px] cursor-pointer"
              onClick={() => setIsLocalQuickModalVisible(false)}
            />
          </div>
          <h4 className="text-[28px] leading-[32px] tracking-[0%] text-center mx-auto max-w-[350px] text-[#3C3E41]">
            LOKALNO - HITRI PREGLED
          </h4>
          <div className="w-[330px] mx-auto text-end text-[#1860A3] text-[18px] leading-[32px] underline font-bold">
            z enim samim klikom
          </div>

          <div className="mt-[47px] bg-[#FFFFFF] rounded-t-[17px] rounded-b-[24px] w-[338px] mx-auto pb-[28px] border-[1px] border-[#0A85C2]">
            <div className="bg-[#414B5A] py-[14px] px-[27px] text-[#CBE1EC] text-[16px] font-semibold leading-[24px] rounded-t-[16px]">
              <span className="pr-[9px]">Torek,</span>
              <span>23.05.2024</span>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] border-[1px] border-[#0a85c25e] px-[30px] py-[14px] flex justify-between items-center shadow-md scale-[1.02] rounded-[1px]">
              <div className="text-[22px] font-semibold text-[#FFFFFF] leading-[24px]">
                Maribor
              </div>
              <img
                src={"./pencil.png"}
                alt="Edit"
                className="w-[18px] h-[18px] cursor-pointer"
              />
            </div>

            <div className="space-y-[19px] px-[16px] py-[29px]">
              <div
                className="relative p-[1px] rounded-[10px] bg-[#E7EBF0]"
                style={{
                  background: "#e4e8ef",
                  backgroundClip: "padding-box",
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(91.95deg, rgba(255, 255, 255, 0.4) -4.26%, rgba(255, 255, 255, 0) 107.52%)",
                  boxShadow:
                    "5px 5px 10px 0px #A6ABBD, -5px -5px 10px 0px #FAFBFF",
                }}
              >
                <div className="w-full bg-[#E7EBF0] rounded-[10px] flex items-center justify-between py-[15px] px-[8px] min-h-[60px] relative">
                  <Link
                    href={`/obituarylist`}
                    className="flex flex-row justify-between items-center pl-[24px] gap-[17px]"
                  >
                    <h4 className="text-[#0D94E8] text-[32px] font-bold leading-[24px]">
                      7
                    </h4>

                    <div className="flex flex-row gap-[9px] items-end">
                      <div className="text-[20px] leading-[24px] font-bold text-[#3C3E41]">
                        Osmrtnic
                      </div>
                      <span className="text-[14px] leading-[21px] font-light text-[#3C3E41]">
                        od včeraj
                      </span>
                    </div>
                  </Link>
                  <Image
                    src={"/arrow_right_ico.png"}
                    alt="Right_arrow"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                </div>
              </div>
              <div
                className="relative p-[1px] rounded-[10px] bg-[#E7EBF0]"
                style={{
                  background: "#e4e8ef",
                  backgroundClip: "padding-box",
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(91.95deg, rgba(255, 255, 255, 0.4) -4.26%, rgba(255, 255, 255, 0) 107.52%)",
                  boxShadow:
                    "5px 5px 10px 0px #A6ABBD, -5px -5px 10px 0px #FAFBFF",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent shadow-lg shadow-[#A6ABBD]/50 rounded-[10px]" />
                <div className="w-full bg-[#E7EBF0] rounded-[10px] flex items-center justify-between py-[15px] px-[8px] min-h-[60px] relative">
                  <div className="flex flex-row justify-between items-center pl-[24px] gap-[17px]">
                    <h4 className="text-[#0D94E8] text-[32px] font-bold leading-[24px]">
                      5
                    </h4>

                    <div className="flex flex-row gap-[9px] items-end">
                      <span className="text-[20px] leading-[24px] font-bold text-[#3C3E41]">
                        Pogrebov
                      </span>
                      <span className="text-[14px] leading-[21px] font-light text-[#3C3E41]">
                        danes in jutri
                      </span>
                    </div>
                  </div>
                  <Image
                    src={"/arrow_right_ico.png"}
                    alt="Right_arrow"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                </div>
              </div>
            </div>

            <div
              className="border-[1px] border-[#0A85C2] h-[28px] flex justify-between items-center shadow-md shadow-[#00000073] pl-[58px] pr-[30px]"
              style={{
                background:
                  "linear-gradient(180deg, #0D94E8 0.57%, #1860A3 99.25%)",
              }}
            >
              <div className="flex flex-row justify-between items-center gap-[15px]">
                <div className="text-[20px] leading-[24px] font-semibold text-[#FFFFFF]">
                  7
                </div>
                <div className="text-[#FFFFFF] text-[14px] leading-[24px] font-[300]">
                  Novih spominskih strani
                </div>
              </div>

              <img
                src={"/white_right_arrow.png"}
                alt="Edit"
                className="w-[24px] h-[24px] cursor-pointer shrink-0"
              />
            </div>
          </div>

          <div className="text-[#3C3E41] text-[16px] leading-[20px] font-normal w-[340px] mx-auto mt-[40px]">
            Mesto izbereš v svojem uporabniškem računu. Moraš biti prijavljen,
            da zazna tvojo nastavitev. Brez vsakodnevnega iskanja po imenikih.
          </div>

          <div className="flex justify-center mt-[18px]">
            <Link
              href={"/registracija"}
              className="text-[#1860A3] text-center text-[18px] leading-[32px] font-semibold underline"
            >
              Prijavi se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocalQuickReviewModal = ({ setIsLocalQuickReviewModalVisible }) => {
  const [user, setUser] = useState(null);
  const [obituaries, setObituaries] = useState([]);

  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      const parsedUser = JSON.parse(currUser);
      setUser(parsedUser);

      const fetchObituaries = async () => {
        try {
          const today = new Date();
          const formattedDate = today.toISOString().split("T")[0];

          const queryParams = {
            city: parsedUser.city,
            days: 2,
            date: formattedDate,
          };

          const response = await obituaryService.getObituary(queryParams);
          setObituaries(response);
          console.log(response.obituaries);
        } catch (error) {
          console.log(error);
        }
      };

      fetchObituaries();
    }
  }, []);

  const getFormattedDate = () => {
    const days = [
      "Nedelja",
      "Ponedeljek",
      "Torek",
      "Sreda",
      "Četrtek",
      "Petek",
      "Sobota",
    ];
    const today = new Date();
    const dayName = days[today.getDay()];
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${dayName}, ${day}.${month}.${year}`;
  };

  return (
    <div
      className="fixed z-[1000] top-0 left-0 w-full bg-[#000000B2] h-screen py-[80px]"
      onClick={() => setIsLocalQuickReviewModalVisible(false)}
    >
      <div
        className="relative mx-auto max-w-[1280px] flex justify-center mobile:w-[360px] w-full h-full mt-[5px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[550px] h-[550px] bg-[#E7EEF3] rounded-[16px] p-[6px]">
          <div className="flex justify-end">
            <img
              src={"./circle_cross.png"}
              alt="Close"
              className="w-[70px] h-[70px] cursor-pointer"
              onClick={() => setIsLocalQuickReviewModalVisible(false)}
            />
          </div>

          <div className="mt-[30px] bg-[#FFFFFF] rounded-t-[17px] rounded-b-[24px] w-[338px] mx-auto pb-[28px] border-[1px] border-[#0A85C2]">
            <div className="bg-[#414B5A] py-[14px] px-[27px] text-[#CBE1EC] text-[16px] font-semibold leading-[24px] rounded-t-[16px]">
              <span className="pr-[9px]">{getFormattedDate()}</span>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to-[#1860A3] border-[1px] border-[#0a85c25e] px-[30px] py-[14px] flex justify-between items-center shadow-md scale-[1.02] rounded-[1px]">
              <div className="text-[22px] font-semibold text-[#FFFFFF] leading-[24px]">
                {user?.city}
              </div>
              <img
                src={"./pencil.png"}
                alt="Edit"
                className="w-[18px] h-[18px] cursor-pointer"
              />
            </div>

            <div className="space-y-[19px] px-[16px] py-[29px]">
              <div
                className="relative p-[1px] rounded-[10px] bg-[#E7EBF0]"
                style={{
                  background: "#e4e8ef",
                  backgroundClip: "padding-box",
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(91.95deg, rgba(255, 255, 255, 0.4) -4.26%, rgba(255, 255, 255, 0) 107.52%)",
                  boxShadow:
                    "5px 5px 10px 0px #A6ABBD, -5px -5px 10px 0px #FAFBFF",
                }}
              >
                <Link
                  href={`/obituarylist?city=${user?.city}`}
                  className="w-full bg-[#E7EBF0] rounded-[10px] flex items-center justify-between py-[15px] px-[8px] min-h-[60px] relative"
                >
                  <div className="flex flex-row justify-between items-center pl-[24px] gap-[17px]">
                    <h4 className="text-[#0D94E8] text-[32px] font-bold leading-[24px]">
                      {obituaries?.total || 0}
                    </h4>

                    <div className="flex flex-row gap-[9px] items-end">
                      <span className="text-[20px] leading-[24px] font-bold text-[#3C3E41]">
                        Osmrtnic
                      </span>
                      <span className="text-[14px] leading-[21px] font-light text-[#3C3E41]">
                        od včeraj
                      </span>
                    </div>
                  </div>
                  <Image
                    src={"/arrow_right_ico.png"}
                    alt="Right_arrow"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                </Link>
              </div>
              <div
                className="relative p-[1px] rounded-[10px] bg-[#E7EBF0]"
                style={{
                  background: "#e4e8ef",
                  backgroundClip: "padding-box",
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(91.95deg, rgba(255, 255, 255, 0.4) -4.26%, rgba(255, 255, 255, 0) 107.52%)",
                  boxShadow:
                    "5px 5px 10px 0px #A6ABBD, -5px -5px 10px 0px #FAFBFF",
                }}
              >
                <div className="w-full bg-[#E7EBF0] rounded-[10px] flex items-center justify-between py-[15px] px-[8px] min-h-[60px] relative">
                  <div className="flex flex-row justify-between items-center pl-[24px] gap-[17px]">
                    <h4 className="text-[#0D94E8] text-[32px] font-bold leading-[24px]">
                      {obituaries?.funeralCount || 0}
                    </h4>

                    <div className="flex flex-row gap-[9px] items-end">
                      <span className="text-[20px] leading-[24px] font-bold text-[#3C3E41]">
                        Pogrebov
                      </span>
                      <span className="text-[14px] leading-[21px] font-light text-[#3C3E41]">
                        danes in jutri
                      </span>
                    </div>
                  </div>
                  <Image
                    src={"/arrow_right_ico.png"}
                    alt="Right_arrow"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                </div>
              </div>
            </div>

            <div
              className="border-[1px] border-[#0A85C2] h-[28px] flex justify-between items-center shadow-md shadow-[#00000073] pl-[58px] pr-[30px]"
              style={{
                background:
                  "linear-gradient(180deg, #0D94E8 0.57%, #1860A3 99.25%)",
              }}
            >
              <div className="flex flex-row justify-between items-center gap-[15px]">
                <div className="text-[20px] leading-[24px] font-semibold text-[#FFFFFF]">
                  {obituaries?.total || 0}
                </div>
                <div className="text-[#FFFFFF] text-[14px] leading-[24px] font-[300]">
                  Novih spominskih strani
                </div>
              </div>

              <img
                src={"/white_right_arrow.png"}
                alt="Edit"
                className="w-[24px] h-[24px] cursor-pointer shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LocalQuickReview, LocalQuickReviewModal };
