"use client";
import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import companyService from "@/services/company-service";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ChangePasswordModal from "@/app/components/appcomponents/ChangePasswordModal";
import regionsAndCities from "@/utils/regionAndCities";
import DropdownWithSearch from "@/app/components/appcomponents/DropdownWithSearch";
import userService from "@/services/user-service";
import toast from "react-hot-toast";
import { CheckCircle, XCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function AccountSettings() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPrivilegesOpen, setIsPrivilegesOpen] = useState(false);

  useEffect(() => {
    getCompleteCompanyData();
  }, []);
  const [data, setData] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);
  const [isShowModal1, setIsShowModal1] = useState(false);
  const [select_id, setSelect_Id] = useState("");

  const getCompleteCompanyData = async () => {
    try {
      const queryParams = {};
      queryParams.type = "FUNERAL";
      const response = await companyService.getCompleteCompany(queryParams);
      console.log(response);
      setData(response.user);
      // Initialize selectedCity with existing secondary city data
      if (response.user?.secondaryCity) {
        setSelectedCity(response.user.secondaryCity);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalVisibility = () => {
    setIsModalVisible(true);
  };

  const cityOptions = [
    ...Object.values(regionsAndCities)
      .flat()
      .map((city) => ({
        place: city,
        id: city,
      }))
      .sort((a, b) => a.place.localeCompare(b.place, "sl")),
  ];

  const handleCitySelect = async (item) => {
    try {
      const response = await userService.updateMyUser({ secondaryCity: item });
      toast.success("City Updated Successfully");
      setSelectedCity(item);
      setData((prevData) => ({
        ...prevData,
        secondaryCity: item,
      }));
    } catch (error) {
      console.log(error);
      toast.error("Error Updating City");
    }
  };

  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[1000px] min-w-[720px]">
        <div className="grid grid-cols-2 tabletUserAcc:grid-cols-1 mobileUserAcc:grid-cols-1 gap-4 text-[#6D778E] mt-[60px] text-[14px]">
          <div className="space-y-[18px]">
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">Podjetje:</span>
              <span className="text-[#3C3E41]">{data?.company}</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">Enote:</span>
              <span className="text-[#3C3E41]">{data?.name}</span>
            </div>

            <div className="flex items-center gap-[12px]">
              <span className="uppercase">Email:</span>
              <span className="text-[#3C3E41]">{data?.email}</span>
            </div>

            <div className="flex items-center gap-[12px]">
              <span className="uppercase">spletna stran:</span>
              <span className="text-[#3C3E41]">
                {data?.CompanyPage?.website}
              </span>
            </div>
          </div>
          <div className="space-y-[18px]">
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">geslo:</span>
              <span className="text-[#3C3E41]">**************</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <button
                onClick={handleModalVisibility}
                className="inline-flex items-center gap-3"
              >
                <img
                  src="/plus_icon_blue.png"
                  alt="add icon"
                  className="size-6"
                />
                <span className="text-[#2c7ba3] text-[14px] uppercase underline">
                  izberi novo geslo:
                </span>
              </button>

              <span className="text-[#3C3E41]"></span>
            </div>
          </div>
        </div>
        <hr className="my-[28px]" />

        <div className="space-y-4 text-[#6D778E] text-[14px]">
          <div className="space-y-1">
            <span className="uppercase">OBČINA:</span>
            <div className="grid grid-cols-2 gap-[12px] px-6 pb-[10px]">
              <div className="flex items-center gap-[12px] ">
                <span className="uppercase">Primarno:</span>
                <span className="text-[#3C3E41]">{data?.city}</span>
              </div>
              <div className="flex items-center gap-[38px]">
                <div>
                  <DropdownWithSearch
                    onSelectCity={handleCitySelect}
                    selectedCity={selectedCity}
                    placeholder={"Dodaj še drugo mesto"}
                  />
                </div>
              </div>
            </div>
            {data?.secondaryCity && (
              <div className="flex items-center gap-[12px] px-6">
                <span className="uppercase">Dodatno:</span>
                <span className="text-[#3C3E41]">
                  {data?.secondaryCity}
                  <span
                    className="text-[red]"
                    onClick={() => handleCitySelect(null)}
                  >
                    (Zbriši)
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
        <hr className="mt-[24px]" />

        {/* PRIVILEGES SECTION - COLLAPSIBLE */}
        <div className="space-y-4 text-[#6D778E] mt-[60px] text-[14px]">
          <button
            onClick={() => setIsPrivilegesOpen(!isPrivilegesOpen)}
            className="flex items-center gap-2 w-full text-left p-0 border-none bg-transparent transition-all duration-300 ease-in-out hover:gap-3"
          >
            <span
              className="text-[#2c7ba3] text-[20px] font-medium"
              style={{
                fontVariationSettings: "'wdth' 50,'opsz' 26",
              }}
            >
              Privilegiji
            </span>
            <div className="transition-transform duration-300 ease-in-out">
              {isPrivilegesOpen ? (
                <ChevronUp className="w-5 h-5 text-[#2c7ba3] flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#2c7ba3] flex-shrink-0" />
              )}
            </div>
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isPrivilegesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            {isPrivilegesOpen && (
              <div className="space-y-3 pt-2">
                {/* Funeral Company List Publication */}
                <div className="flex items-center gap-3">
                  {data?.createObituaryPermission ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-[#3C3E41]">
                    Objava na seznamu pogrebnih podjetij
                  </span>
                  <span className="text-[#6D778E] text-[12px]">
                    (po objavi svoje spletne strani)
                  </span>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span className="text-[#3C3E41]">Spletna stran</span>
                  <span className="text-[#6D778E] text-[12px]">(kmalu)</span>
                </div>

                {/* Obituary Publication */}
                <div className="flex items-center gap-3">
                  {data?.createObituaryPermission ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-[#3C3E41]">Objava osmrtnic</span>
                  <span className="text-[#6D778E] text-[12px]">
                    (po objavi svoje spletne strani)
                  </span>
                </div>

                {/* Monthly Administrators */}
                <div className="flex items-center gap-3">
                  {data?.assignKeeperPermission ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-[#3C3E41]">Mesečni skrbniki</span>
                  <span className="text-[#6D778E] text-[12px]">
                    (po objavi svoje spletne strani)
                  </span>
                </div>

                {/* Digital Mobile Cards */}
                <div className="flex items-center gap-3">
                  {data?.sendMobilePermission ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-[#3C3E41]">Digitalne mobi kartice</span>
                  <span className="text-[#6D778E] text-[12px]">(kmalu)</span>
                </div>

                {/* Additional Municipality */}
                <div className="flex items-center gap-3">
                  {!!data?.secondaryCity ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-[#3C3E41]">Dodatna občina</span>
                  <span className="text-[#6D778E] text-[12px]">
                    (po objavi svoje spletne strani)
                  </span>
                </div>

                {/* Memorial Page Participation */}
                <div className="flex items-center gap-3">
                  {data?.sendGiftsPermission ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-[#3C3E41]">Sodelovanje na spominskih straneh</span>
                </div>

                {/* Risk-Free Promotion */}
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-[#3C3E41]">Promocija BREZ RIZIKA</span>
                  <span className="text-[#6D778E] text-[12px]">(odpri)</span>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 tabletUserAcc:grid-cols-3 mobileUserAcc:grid-cols-3 gap-4 text-[#6D778E] mt-[60px] text-[14px]">
            <div className="flex items-center gap-[12px] tabletUserAcc:col-span-2 mobileUserAcc:col-span-2">
              <span className="uppercase">stran na osmrtnica.com:</span>
              <Link
                href={`/funeralcompany/${data?.CompanyPage?.id}`}
                className="text-[#3C3E41]"
              >
                {`/funeralcompany/${data?.CompanyPage?.id}`}
              </Link>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">izdelana:</span>
              <span className="text-[#3C3E41]">
                {(() => {
                  const date = new Date(data?.CompanyPage?.createdTimestamp);
                  const day = String(date.getDate()).padStart(2, "0");
                  const month = String(date.getMonth() + 1).padStart(2, "0");
                  const year = date.getFullYear();
                  return `${day}.${month}.${year}`;
                })()}
              </span>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <ChangePasswordModal setModalVisible={setIsModalVisible} />
      )}
    </CompanyAccountLayout>
  );
}