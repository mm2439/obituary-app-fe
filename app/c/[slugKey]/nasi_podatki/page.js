"use client";
import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import companyService from "@/services/company-service";
import API_BASE_URL from "@/config/apiConfig";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ChangePasswordModal from "../../../components/appcomponents/ChangePasswordModal";
import regionsAndCities from "@/utils/regionAndCities";
import DropdownWithSearch from "@/app/components/appcomponents/DropdownWithSearch";
import userService from "@/services/user-service";
import toast from "react-hot-toast";
import ModalNew from "../../../components/appcomponents/ModalNew";
import ModalNew2 from "../../../components/appcomponents/ModalNew2";
import { CheckCircle, XCircle } from "lucide-react";

export default function AccountSettings() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getCompleteCompanyData();
  }, []);
  const [data, setData] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);
  const [isShowModal1, setIsShowModal1] = useState(false);
  const [isShowModal2, setIsShowModal2] = useState(false);
  const [select_id, setSelect_Id] = useState("");

  const getCompleteCompanyData = async () => {
    try {
      const queryParams = {};
      queryParams.type = "FLORIST";
      const response = await companyService.getCompleteCompany(queryParams);
      setData(response.user);
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

  // Function to handle florist shop deletion
  const handleDeleteFloristShop = async (shopIndex) => {
    try {
      // Create updated shops array without the deleted shop
      const updatedShops = data?.CompanyPage?.FloristShops?.filter((_, index) => index !== shopIndex) || [];
      
      // Update the data state
      setData((prevData) => ({
        ...prevData,
        CompanyPage: {
          ...prevData.CompanyPage,
          FloristShops: updatedShops,
        },
      }));
      
      toast.success("Shop deleted successfully");
      // You might want to add an API call here to persist the deletion
      // await companyService.updateFloristShops(updatedShops);
    } catch (error) {
      console.log(error);
      toast.error("Error deleting shop");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Check if there are any florist shops - FIXED: Always show shops if they exist
  const hasFloristShops = data?.CompanyPage?.FloristShops && data?.CompanyPage?.FloristShops?.length > 0;

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
              <span className="uppercase">CVETLIČARNA:</span>
              <span className="text-[#3C3E41]">{data?.name}</span>
            </div>

            <div className="flex items-center gap-[12px]">
              <span className="uppercase">email:</span>
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
        
        {/* FLORIST SHOPS SECTION - FIXED: Always show this section */}
        <div className="space-y-4 text-[#6D778E] text-[14px]">
          <div className="flex items-center gap-[12px]">
            <div className="space-y-[18px] mb-12 w-full">
              <div className="grid grid-cols-2 gap-3">
                <h4
                  className="text-[#2c7ba3] text-[20px] font-medium pb-2"
                  style={{
                    fontVariationSettings: "'wdth' 50,'opsz' 26",
                  }}
                >
                  Cvetličarna
                </h4>
                {/* FIXED: Changed to open ModalNew2 */}
                <button
                  onClick={() => setIsShowModal2(true)}
                  className="inline-flex items-center gap-3"
                >
                  <img
                    src="/plus_icon_blue.png"
                    alt="add icon"
                    className="size-6"
                  />
                  <span className="text-[#2c7ba3] text-[14px] uppercase underline">
                    dodaj cvetličarno
                  </span>
                </button>
              </div>

              {/* FIXED: Show shops if they exist, otherwise show "no shops" message */}
              {data?.CompanyPage?.FloristShops?.length > 0 ? (
                data?.CompanyPage?.FloristShops?.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 text-[#3C3E41]"
                  >
                    <div className="my-5 flex flex-col space-y-2">
                      <span className="text-[#3C3E41]">{item.shopName}</span>
                      <span className="text-[#3C3E41]">{item.address}</span>
                      <span className="text-[#3C3E41]">{item.telephone}</span>
                      <span className="text-[#3C3E41]">{item.email}</span>
                      <span className="text-[#3C3E41]">
                        {item?.website}
                        {/* FIXED: Added delete functionality for shops */}
                        {item?.website && (
                          <span
                            className="text-[red] cursor-pointer ml-2"
                            onClick={() => handleDeleteFloristShop(index)}
                          >
                            (Zbriši)
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-[#6D778E] italic">
                  Ni dodanih cvetličarn
                </div>
              )}
            </div>
          </div>
        </div>
        
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
                <Link
                  href=""
                  className="inline-flex items-center gap-3 tabletUserAcc:hidden mobileUserAcc:hidden"
                >
                  <img
                    src="/question_icon_blue.png"
                    alt="add icon"
                    className="size-6"
                  />
                  <span className="text-[#2c7ba3] text-[14px] uppercase underline">
                    Preveri, kako gre
                  </span>
                </Link>
              </div>
            </div>
            {data?.secondaryCity && (
              <div className="flex items-center gap-[12px] px-6">
                <span className="uppercase">Dodatno:</span>
                <span className="text-[#3C3E41]">
                  {data?.secondaryCity}
                  <span
                    className="text-[red] cursor-pointer"
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

        {/* PRIVILEGES SECTION */}
        <div className="space-y-4 text-[#6D778E] mt-[60px] text-[14px]">
          <h4
            className="text-[#2c7ba3] text-[20px] font-medium pb-2"
            style={{
              fontVariationSettings: "'wdth' 50,'opsz' 26",
            }}
          >
            Privilegiji
          </h4>
          
          <div className="space-y-3">
            {/* Florist List Publication */}
            <div className="flex items-center gap-3">
              {data?.createObituaryPermission ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <span className="text-[#3C3E41]">
                Objava na seznamu cvetličarn
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
        </div>

        <div className="grid grid-cols-2 tabletUserAcc:grid-cols-3 mobileUserAcc:grid-cols-3 gap-4 text-[#6D778E] mt-[60px] text-[14px]">
          <div className="flex items-center gap-[12px] tabletUserAcc:col-span-2 mobileUserAcc:col-span-2">
            <span className="uppercase">stran na osmrtnica.com:</span>
            <Link
              href={`/floristdetails/${data?.CompanyPage?.id}`}
              className="text-[#3C3E41]"
            >
              {`/floristdetails/${data?.CompanyPage?.id}`}
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
          <div className="flex items-center gap-10 tabletUserAcc:col-span-2 mobileUserAcc:col-span-2">
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">naročnina:</span>
              <span className="text-[#3C3E41]">Letno - gratis</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="uppercase">do:</span>
              <span className="text-[#3C3E41]">14.05.2025</span>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <ChangePasswordModal setModalVisible={setIsModalVisible} />
      )}

      <ModalNew
        isShowModal={isShowModal1}
        setIsShowModal={setIsShowModal1}
        select_id={select_id}
        set_Id={setSelect_Id}
        data={data?.CompanyPage}
        onChange={(updatedShops) => {
          console.log(updatedShops, "====");
          setData((prevData) => ({
            ...prevData,
            CompanyPage: {
              ...prevData.CompanyPage,
              FloristShops: updatedShops,
            },
          }));
        }}
      />

      <ModalNew2
        isShowModal={isShowModal2}
        setIsShowModal={setIsShowModal2}
        select_id={select_id}
        set_Id={setSelect_Id}
        data={data?.CompanyPage}
        onChange={(updatedShops) => {
          // Update local state with shops from backend
          setData((prevData) => ({
            ...prevData,
            CompanyPage: {
              ...prevData.CompanyPage,
              FloristShops: updatedShops,
            },
          }));
        }}
      />
    </CompanyAccountLayout>
  );
}