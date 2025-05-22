import Image from "next/image";
import React, { useEffect, useState } from "react";

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
            <a href="https://dev111.osmrtnica.com" className="flex flex-row items-center">
              <Image
                src={"/img_logo_admin.png"}
                alt=""
                width={248}
                height={50}
                className="shadow-custom-dark-bottom-admin mr-[37px]"
              />
            </a>
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

        {headerCheck === 1 ? (
          <div
            style={{
              fontVariationSettings: "'opsz' 20",
              fontVariationSettings: "'wdth' 50",
            }}
            className={`text-[20px] my-auto transform translate-y-[20%] flex flex-row ${
              isSelected === "basic_info"
                ? "text-[#0A85C2] font-semibold "
                : "text-[#6D778E] font-normal"
            } gap-x-[12px] leading-[23px]`}
          >
            <div
              onClick={() => {
                setIsSelected("basic_info");
                setWhichScreen(1);
              }}
              className="flex flex-col items-center mb-[9px]"
            >
              <div className="mb-[9px]">Basic Info</div>
              <div
                className={`w-[100px] ${
                  isSelected === "basic_info"
                    ? "bg-[#0A85C2] font-semibold"
                    : "bg-[#D4D4D4]"
                }  h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("gifts");
                setWhichScreen(2);
              }}
              className={`flex flex-col ${
                isSelected === "gifts"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Gifts</div>
              <div
                className={`w-[62px] ${
                  isSelected === "gifts"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("user_monthly_stats");
                setWhichScreen(3);
              }}
              className={`flex flex-col ${
                isSelected === "user_monthly_stats"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className=" mb-[9px]">Users - Monthly Stats</div>
              <div
                className={`w-[188px] ${
                  isSelected === "user_monthly_stats"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("user_traffic");
                setWhichScreen(4);
              }}
              className={`flex flex-col ${
                isSelected === "user_traffic"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className="mb-[9px]">Users - Traffic</div>
              <div
                className={`w-[106px] ${
                  isSelected === "user_traffic"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("contributions_by_users");
                setWhichScreen(5);
              }}
              className={`flex flex-col ${
                isSelected === "contributions_by_users"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className="mb-[9px]">Contributions - by Users</div>
              <div
                className={`w-[209px] ${
                  isSelected === "contributions_by_users"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>

            <div
              onClick={() => {
                setIsSelected("totals_numbers");
                setWhichScreen(6);
              }}
              className={`flex flex-col ${
                isSelected === "totals_numbers"
                  ? "text-[#0A85C2] font-semibold"
                  : "text-[#6D778E] font-normal"
              } items-center`}
            >
              <div className="mb-[9px]">Totals - Numbers</div>
              <div
                className={`w-[156px] ${
                  isSelected === "totals_numbers"
                    ? "bg-[#0A85C2]"
                    : "bg-[#D4D4D4]"
                } h-[2px] rounded`}
              />
            </div>
          </div>
        ):(headerCheck === 2 ? (
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
                  ? "text-[#0A85C2] font-semibold"
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
        ))}

        <div className="w-[44px] h-[48px] mr-[37px] absolute right-0" onClick={() => {
          // go back to the previous page
          window.history.back();
        }}>
          <Image src={"/back_icon.png"} alt="" width={44} height={48} />
        </div>
      </div>
    </header>
  );
}


export default HeaderAdmin; 
