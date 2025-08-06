"use client";
import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import companyService from "@/services/company-service";
import shopService from "@/services/shop-service";
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
import { CheckCircle, XCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function AccountSettings() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPrivilegesOpen, setIsPrivilegesOpen] = useState(false);
  const [data, setData] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);
  const [isShowModal1, setIsShowModal1] = useState(false);
  const [isShowModal2, setIsShowModal2] = useState(false);
  const [select_id, setSelect_Id] = useState("");
  const [shops, setShops] = useState([]);

  // Helper function to get shops from data - centralized logic
  const getShopsFromData = (companyPageData) => {
    if (!companyPageData) return [];
     
    // Check all possible property names for shops
    return companyPageData.FloristShops || 
           companyPageData.FloristShop || 
           companyPageData.shops || 
           companyPageData.shop || 
           [];
  };

  useEffect(() => {
    getCompleteCompanyData();
    fetchShops();
  }, []);

  // Function to fetch shops using shop-service
  const fetchShops = async () => {
    try {
      const response = await shopService.getFloristShops();
      console.log("Shops fetched from shop-service:", response);
      if (response.shops) {
        setShops(response.shops);
      }
    } catch (error) {
      console.log("Error fetching shops:", error);
    }
  };
  
  const getCompleteCompanyData = async () => {
    try {
      const queryParams = {};
      queryParams.type = "FLORIST";
      const response = await companyService.getCompleteCompany(queryParams);
      console.log("API Response:", response);
      console.log("User data:", response.user);
      console.log("CompanyPage data:", response.user?.CompanyPage);
      console.log("All CompanyPage properties:", Object.keys(response.user?.CompanyPage || {}));
      console.log("Full CompanyPage object:", JSON.stringify(response.user?.CompanyPage, null, 2));
       
      // Get shops using centralized logic
      const shopsFromCompany = getShopsFromData(response.user?.CompanyPage);
      console.log("Processed shops from company:", shopsFromCompany);
       
      // Set the complete data as received from API, but ensure shops are properly structured
      const userData = response.user || {};
      if (userData.CompanyPage && shopsFromCompany.length > 0) {
        // Ensure shops are available under the expected property name
        userData.CompanyPage.FloristShops = shopsFromCompany;
      }
       
      setData(userData);
       
      // Initialize selectedCity with existing secondary city data
      if (response.user?.secondaryCity) {
        setSelectedCity(response.user.secondaryCity);
      }
    } catch (error) {
      console.log("Error fetching company data:", error);
      toast.error("Error loading company data");
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
      const updatedShops = shops.filter((_, index) => index !== shopIndex);
      
      // Update the shops state
      setShops(updatedShops);
      
      // Also update the data state for consistency
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
    console.log("Current data state:", data);
    console.log("Current shops from shop-service:", shops);
  }, [data, shops]);

  // Use shops from shop-service for rendering
  const hasFloristShops = shops && shops.length > 0;
  const hasMainShop = hasFloristShops; // For now, any shop is considered main shop

  return (
    <CompanyAccountLayout>
      {/* Main container with improved spacing and max-width */}
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-[1000px] mx-auto">
          {/* Basic Information Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#6D778E] mt-[60px] text-[14px]">
            <div className="space-y-[18px]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px]">
                <span className="uppercase font-medium min-w-[120px]">Podjetje:</span>
                <span className="text-[#3C3E41]">{data?.company}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px]">
                <span className="uppercase font-medium min-w-[120px]">CVETLIČARNA:</span>
                <span className="text-[#3C3E41]">{data?.name}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px]">
                <span className="uppercase font-medium min-w-[120px]">email:</span>
                <span className="text-[#3C3E41] break-all">{data?.email}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px]">
                <span className="uppercase font-medium min-w-[120px]">spletna stran:</span>
                <span className="text-[#3C3E41] break-all">
                  {data?.CompanyPage?.website}
                </span>
              </div>
              
              {/* CONDITIONAL: Show "ADD MAIN FLORIST SHOP" link only if no shops exist */}
              {!hasMainShop && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px] pt-4">
                  <button
                    onClick={() => setIsShowModal1(true)}
                    className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="/plus_icon_blue.png"
                      alt="add icon"
                      className="size-6 flex-shrink-0"
                    />
                    <span className="text-[#2c7ba3] text-[14px] uppercase underline">
                      dodaj glavno cvetličarno
                    </span>
                  </button>
                </div>
              )}
            </div>
            
            <div className="space-y-[18px]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px]">
                <span className="uppercase font-medium min-w-[80px]">geslo:</span>
                <span className="text-[#3C3E41]">**************</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px] pt-4">
                <button
                  onClick={handleModalVisibility}
                  className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/plus_icon_blue.png"
                    alt="add icon"
                    className="size-6 flex-shrink-0"
                  />
                  <span className="text-[#2c7ba3] text-[14px] uppercase underline">
                    izberi novo geslo:
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          <hr className="my-[40px] border-gray-200" />
          
          {/* CONDITIONAL: Show "FLORISTS" section only if they have a main shop */}
          {hasMainShop && (
            <div className="space-y-6 text-[#6D778E] text-[14px] mb-[40px]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h4
                  className="text-[#2c7ba3] text-[20px] font-medium"
                  style={{
                    fontVariationSettings: "'wdth' 50,'opsz' 26",
                  }}
                >
                  Cvetličarne
                </h4>
                <button
                  onClick={() => setIsShowModal2(true)}
                  className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity self-start sm:self-auto"
                >
                  <img
                    src="/plus_icon_blue.png"
                    alt="add icon"
                    className="size-6 flex-shrink-0"
                  />
                  <span className="text-[#2c7ba3] text-[14px] uppercase underline">
                    dodaj več cvetličarn
                  </span>
                </button>
              </div>

              {/* Show all shops */}
              <div className="space-y-4">
                {hasFloristShops ? (
                  shops.map((item, index) => {
                    console.log("Rendering shop:", item);
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-3 text-[#3C3E41] p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#3C3E41] font-medium text-[16px]">{item.shopName}</span>
                          <button
                            className="text-red-500 cursor-pointer hover:text-red-700 text-sm px-3 py-1 hover:bg-red-50 rounded transition-colors"
                            onClick={() => handleDeleteFloristShop(index)}
                          >
                            Zbriši
                          </button>
                        </div>
                        <div className="space-y-2 text-[14px]">
                          <div className="text-[#3C3E41]">{item.address}</div>
                          <div className="text-[#3C3E41]">{item.telephone}</div>
                          <div className="text-[#3C3E41] break-all">{item.email}</div>
                          {item?.website && (
                            <div className="text-[#3C3E41] break-all">{item.website}</div>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-[#6D778E] italic py-8 px-6 border border-gray-200 rounded-lg bg-gray-50 text-center">
                    Ni dodanih cvetličarn. Kliknite "dodaj več cvetličarn" za dodajanje novih cvetličarn.
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Municipality Section */}
          <div className="space-y-6 text-[#6D778E] text-[14px] mb-[40px]">
            <div className="space-y-4">
              <span className="uppercase font-medium text-[16px]">OBČINA:</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px]">
                  <span className="uppercase font-medium min-w-[100px]">Primarno:</span>
                  <span className="text-[#3C3E41]">{data?.city}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <DropdownWithSearch
                      onSelectCity={handleCitySelect}
                      selectedCity={selectedCity}
                      placeholder={"Dodaj še drugo mesto"}
                    />
                  </div>
                </div>
              </div>
              {data?.secondaryCity && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px] pl-6">
                  <span className="uppercase font-medium min-w-[100px]">Dodatno:</span>
                  <span className="text-[#3C3E41]">
                    {data?.secondaryCity}
                    <button
                      className="text-red-500 cursor-pointer hover:text-red-700 ml-2 px-2 py-1 hover:bg-red-50 rounded transition-colors"
                      onClick={() => handleCitySelect(null)}
                    >
                      (Zbriši)
                    </button>
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <hr className="my-[40px] border-gray-200" />

          {/* PRIVILEGES SECTION - COLLAPSIBLE */}
          <div className="space-y-6 text-[#6D778E] text-[14px] mb-[40px]">
            <button
              onClick={() => setIsPrivilegesOpen(!isPrivilegesOpen)}
              className="flex items-center gap-3 w-full text-left p-0 border-none bg-transparent transition-all duration-300 ease-in-out hover:gap-4"
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
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isPrivilegesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {isPrivilegesOpen && (
                <div className="space-y-4 pt-4 pl-4">
                  {/* Florist List Publication */}
                  <div className="flex items-center gap-4">
                    {data?.createObituaryPermission ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-[#3C3E41]">Objava na seznamu cvetličarn</span>
                      <span className="text-[#6D778E] text-[12px]">
                        (po objavi svoje spletne strani)
                      </span>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-4">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-[#3C3E41]">Spletna stran</span>
                      <span className="text-[#6D778E] text-[12px]">(kmalu)</span>
                    </div>
                  </div>

                  {/* Obituary Publication */}
                  <div className="flex items-center gap-4">
                    {data?.createObituaryPermission ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-[#3C3E41]">Objava osmrtnic</span>
                      <span className="text-[#6D778E] text-[12px]">
                        (po objavi svoje spletne strani)
                      </span>
                    </div>
                  </div>

                  {/* Monthly Administrators */}
                  <div className="flex items-center gap-4">
                    {data?.assignKeeperPermission ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-[#3C3E41]">Mesečni skrbniki</span>
                      <span className="text-[#6D778E] text-[12px]">
                        (po objavi svoje spletne strani)
                      </span>
                    </div>
                  </div>

                  {/* Digital Mobile Cards */}
                  <div className="flex items-center gap-4">
                    {data?.sendMobilePermission ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-[#3C3E41]">Digitalne mobi kartice</span>
                      <span className="text-[#6D778E] text-[12px]">(kmalu)</span>
                    </div>
                  </div>

                  {/* Additional Municipality */}
                  <div className="flex items-center gap-4">
                    {!!data?.secondaryCity ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-[#3C3E41]">Dodatna občina</span>
                      <span className="text-[#6D778E] text-[12px]">
                        (po objavi svoje spletne strani)
                      </span>
                    </div>
                  </div>

                  {/* Memorial Page Participation */}
                  <div className="flex items-center gap-4">
                    {data?.sendGiftsPermission ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                    <span className="text-[#3C3E41]">Sodelovanje na spominskih straneh</span>
                  </div>

                  {/* Risk-Free Promotion */}
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-[#3C3E41]">Promocija BREZ RIZIKA</span>
                      <span className="text-[#6D778E] text-[12px]">(odpri)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-[#6D778E] text-[14px] pb-[60px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px]">
              <span className="uppercase font-medium min-w-[200px]">stran na osmrtnica.com:</span>
              <Link
                href={`/c/c15-florist-shop/nasi_podatki`}
                className="text-[#3C3E41] break-all hover:text-[#2c7ba3] transition-colors"
              >
                /c/c15-florist-shop/nasi_podatki
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[12px]">
              <span className="uppercase font-medium min-w-[100px]">izdelana:</span>
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
      
      {/* Modals */}
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
          console.log("ModalNew onChange:", updatedShops);
          setShops(updatedShops);
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
          console.log("ModalNew2 onChange:", updatedShops);
          // Update shops state with new shops from backend
          setShops(updatedShops);
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