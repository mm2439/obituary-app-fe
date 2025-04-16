import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
function HeaderAdmin({
  setWhichScreen,
  headerCheck,
  isSelectedLabel,
  selectedTab,
}) {
  const [isSelected, setIsSelected] = useState("Overview");

  useEffect(() => {
    if (isSelectedLabel == "stats") {
      setIsSelected("page_earnings");
    } else if (isSelectedLabel == "keepers") {
      setIsSelected("Delayed_Payments");
    }
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
      <div className="w-full flex h-[75px] flex-row items-center relative">
        <div className="w-[800px] flex flex-row items-center bg-[#FFFFFF80">
          <div className="h-[75px] overflow-hidden">
            <Image
              src={"/img_logo_admin.png"}
              alt=""
              width={248}
              height={50}
              className="shadow-custom-dark-bottom-admin mr-[37px]"
            />
          </div>

          <div
            style={{
              fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 32",
            }}
            className="text-[32px] text-[#0A85C2] font-semibold "
          >
            {selectedTab}
          </div>
        </div>

        {headerCheck === 2 ? (
          <div
            style={{
              fontVariationSettings: "'opsz' 20",
              fontVariationSettings: "'wdth' 50",
            }}
            className={`text-[20px] my-auto transform translate-y-[20%] flex flex-row ${
              isSelected === "Overview"
                ? "text-[#0A85C2] font-semibold "
                : "text-[#6D778E] font-normal"
            } gap-x-[12px] leading-[23px]`}
          >
            <div
              onClick={() => {
                setIsSelected("Overview");
                setWhichScreen(1);
              }}
              className="flex flex-col items-center mb-[9px]"
            >
              <div className=" mb-[9px]">Overview</div>
              <div
                className={`w-[100px] ${
                  isSelected === "Overview"
                    ? "bg-[#0A85C2] font-semibold"
                    : "bg-[#D4D4D4]"
                }  h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("page_earnings");
                setWhichScreen(2);
              }}
              className={`flex flex-col ${
                isSelected === "page_earnings"
                  ? "text-[#0A85C2] font-semibold font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Companies - Statistics</div>
              <div
                className={`w-[215px] ${
                  isSelected === "page_earnings"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Florists_Subscriptions");
                setWhichScreen(3);
              }}
              className={`flex flex-col ${
                isSelected === "Florists_Subscriptions"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Financials</div>
              <div
                className={`w-[115px] ${
                  isSelected === "Florists_Subscriptions"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Delayed_Payments");
                setWhichScreen(5);
              }}
              className={`flex flex-col ${
                isSelected === "Delayed_Payments"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Cities - Overview</div>
              <div
                className={`w-[165px] ${
                  isSelected === "Delayed_Payments"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>
          </div>
        ) : headerCheck === 3 ? (
          <div
            style={{
              fontVariationSettings: "'opsz' 20",
              fontVariationSettings: "'wdth' 50",
            }}
            className={`text-[20px] my-auto transform translate-y-[20%] flex flex-row ${
              isSelected === "Overview"
                ? "text-[#0A85C2] font-semibold"
                : "text-[#6D778E] font-normal"
            } gap-x-[12px] leading-[23px]`}
          >
            <div
              onClick={() => {
                setIsSelected("Overview");
                setWhichScreen(1);
              }}
              className="flex flex-col items-center mb-[9px]"
            >
              <div className=" mb-[9px]">Obituaries</div>
              <div
                className={`w-[100px] ${
                  isSelected === "Overview" ? "bg-[#0A85C2]" : "bg-[#D4D4D4]"
                }  h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("page_earnings");
                setWhichScreen(2);
              }}
              className={`flex flex-col ${
                isSelected === "page_earnings"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Memory Books</div>
              <div
                className={`w-[155px] ${
                  isSelected === "page_earnings"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Florists_Subscriptions");
                setWhichScreen(3);
              }}
              className={`flex flex-col ${
                isSelected === "Florists_Subscriptions"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Keepers</div>
              <div
                className={`w-[95px] ${
                  isSelected === "Florists_Subscriptions"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Advertisers");
                setWhichScreen(4);
              }}
              className={`flex flex-col ${
                isSelected === "Advertisers"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">User’s Contributions</div>
              <div
                className={`w-[195px] ${
                  isSelected === "Advertisers" ? "bg-[#0A85C2]" : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Delayed_Payments");
                setWhichScreen(5);
              }}
              className={`flex flex-col ${
                isSelected === "Delayed_Payments"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Stats</div>
              <div
                className={`w-[75px] ${
                  isSelected === "Delayed_Payments"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>
          </div>
        ) : headerCheck === 4 ? (
          <div
            style={{
              fontVariationSettings: "'opsz' 20",
              fontVariationSettings: "'wdth' 50",
            }}
            className={`text-[20px] my-auto transform translate-y-[20%] flex flex-row ${
              isSelected === "Overview"
                ? "text-[#0A85C2] font-semibold"
                : "text-[#6D778E] font-normal"
            } gap-x-[12px] leading-[23px]`}
          >
            <div
              onClick={() => {
                setIsSelected("Overview");
                setWhichScreen(1);
              }}
              className="flex flex-col items-center mb-[9px]"
            >
              <div className=" mb-[9px]">User’s Contributions</div>
              <div
                className={`w-[200px] ${
                  isSelected === "Overview" ? "bg-[#0A85C2]" : "bg-[#D4D4D4]"
                }  h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("page_earnings");
                setWhichScreen(2);
              }}
              className={`flex flex-col ${
                isSelected === "page_earnings"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Stats</div>
              <div
                className={`w-[65px] ${
                  isSelected === "page_earnings"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Florists_Subscriptions");
                setWhichScreen(3);
              }}
              className={`flex flex-col ${
                isSelected === "Florists_Subscriptions"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">History</div>
              <div
                className={`w-[85px] ${
                  isSelected === "Florists_Subscriptions"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Advertisers");
                setWhichScreen(4);
              }}
              className={`flex flex-col ${
                isSelected === "Advertisers"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Obituaries</div>
              <div
                className={`w-[110px] ${
                  isSelected === "Advertisers" ? "bg-[#0A85C2]" : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Delayed_Payments");
                setWhichScreen(5);
              }}
              className={`flex flex-col ${
                isSelected === "Delayed_Payments"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Keepers</div>
              <div
                className={`w-[95px] ${
                  isSelected === "Delayed_Payments"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              fontVariationSettings: "'opsz' 20",
              fontVariationSettings: "'wdth' 50",
            }}
            className={`text-[20px] my-auto transform translate-y-[20%] flex flex-row ${
              isSelected === "Overview"
                ? "text-[#0A85C2] font-semibold"
                : "text-[#6D778E] font-normal"
            } gap-x-[12px] leading-[23px]`}
          >
            <div
              onClick={() => {
                setIsSelected("Overview");
                setWhichScreen(1);
              }}
              className="flex flex-col items-center mb-[9px]"
            >
              <div className=" mb-[9px]">Overview</div>
              <div
                className={`w-[100px] ${
                  isSelected === "Overview" ? "bg-[#0A85C2]" : "bg-[#D4D4D4]"
                }  h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("page_earnings");
                setWhichScreen(2);
              }}
              className={`flex flex-col ${
                isSelected === "page_earnings"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Memory Page Earnings</div>
              <div
                className={`w-[215px] ${
                  isSelected === "page_earnings"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Florists_Subscriptions");
                setWhichScreen(3);
              }}
              className={`flex flex-col ${
                isSelected === "Florists_Subscriptions"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Florist’s Subscriptions</div>
              <div
                className={`w-[215px] ${
                  isSelected === "Florists_Subscriptions"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Advertisers");
                setWhichScreen(4);
              }}
              className={`flex flex-col ${
                isSelected === "Advertisers"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Advertisers</div>
              <div
                className={`w-[115px] ${
                  isSelected === "Advertisers" ? "bg-[#0A85C2]" : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("Delayed_Payments");
                setWhichScreen(5);
              }}
              className={`flex flex-col ${
                isSelected === "Delayed_Payments"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Delayed Payments</div>
              <div
                className={`w-[185px] ${
                  isSelected === "Delayed_Payments"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>
          </div>
        )}

        <div className="w-[44px] h-[48px] mr-[37px] absolute right-0">
          <Image src={"/back_icon.png"} alt="" width={44} height={48} />
        </div>
      </div>
    </header>
  );
}

export default HeaderAdmin;
