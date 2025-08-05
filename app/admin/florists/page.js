"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SideMenuAdmin from "../../components/appcomponents/SideMenuAdmin";
import Dropdown from "../../components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import RevenueComp from "../../components/appcomponents/RevenueComp";
import adminService from "../../../services/admin-service";
import { toast } from "react-hot-toast";
import NotesModal from "../../components/NotesModal";

const FloristFirst = () => {
  const [whichScreen, setWhichScreen] = useState(1);
  const [whichTab, setWhichTab] = useState("");
  const [companies, setCompanies] = useState([]);

  // Helper function to format consecutive number for Florists
  const formatConsecutiveNumber = (index) => {
    return `C${(index + 1).toString().padStart(4, '0')}`;
  };

  // Helper function to format date safely
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "N/A";
      return date.toLocaleDateString('en-GB');
    } catch (error) {
      return "N/A";
    }
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notesModal, setNotesModal] = useState({
    isOpen: false,
    companyId: null,
    currentNotes: "",
    companyName: ""
  });

  const [financialData, setFinancialData] = useState([]);
  const [financialLoading, setFinancialLoading] = useState(false);
  // Remove local state since we'll use database data

  useEffect(() => {
    if (whichScreen == 3) {
      setWhichTab("Financials - Florist Subscriptions");
      fetchFinancialData();
    } else {
      setWhichTab("Florists");
    }
  }, [whichScreen]);

  // Fetch financial data for florist subscriptions
  const fetchFinancialData = async () => {
    try {
      setFinancialLoading(true);
      const response = await adminService.getFloristFinancials();
      if (response.success) {
        setFinancialData(response.data);
      } else {
        setError("Failed to fetch financial data");
      }
    } catch (error) {
      console.error("Error fetching financial data:", error);
      setError("Failed to fetch financial data");
      toast.error("Failed to load financial data");
    } finally {
      setFinancialLoading(false);
    }
  };

  // Fetch florist companies data
  useEffect(() => {
    const fetchFloristCompanies = async () => {
      try {
        setLoading(true);
        const response = await adminService.getFloristCompanies();
        if (response.success) {
          setCompanies(response.companies);
        } else {
          setError("Failed to fetch florist companies");
        }
      } catch (error) {
        console.error("Error fetching florist companies:", error);
        setError("Failed to fetch florist companies");
        toast.error("Failed to load florist companies data");
      } finally {
        setLoading(false);
      }
    };

    fetchFloristCompanies();
  }, []);

  // Handle permission toggle
  const handlePermissionToggle = async (companyId, permissionType, currentValue) => {
    try {
      const permissions = {
        createObituaryPermission: permissionType === 'createObituary' ? !currentValue : undefined,
        assignKeeperPermission: permissionType === 'assignKeeper' ? !currentValue : undefined,
        sendGiftsPermission: permissionType === 'sendGifts' ? !currentValue : undefined,
        sendMobilePermission: permissionType === 'sendMobile' ? !currentValue : undefined,
      };

      // Remove undefined values
      Object.keys(permissions).forEach(key => {
        if (permissions[key] === undefined) {
          delete permissions[key];
        }
      });

      const response = await adminService.updateUserPermissions(companyId, permissions);
      if (response.success) {
        // Update local state
        setCompanies(prevCompanies => 
          prevCompanies.map(company => 
            company.id === companyId 
              ? { ...company, permissions: { ...company.permissions, [permissionType]: !currentValue } }
              : company
          )
        );
        toast.success("Permissions updated successfully");
      }
    } catch (error) {
      console.error("Error updating permissions:", error);
      toast.error("Failed to update permissions");
    }
  };

  // Handle block user toggle
  const handleBlockUserToggle = async (companyId, currentBlockedStatus) => {
    try {
      const response = await adminService.blockUser(companyId, !currentBlockedStatus);
      if (response.success) {
        // Update local state
        setCompanies(prevCompanies => 
          prevCompanies.map(company => 
            company.id === companyId 
              ? { ...company, isBlocked: !currentBlockedStatus }
              : company
          )
        );
        toast.success(response.message);
      }
    } catch (error) {
      console.error("Error blocking/unblocking user:", error);
      toast.error("Failed to block/unblock user");
    }
  };

  // Handle notes update
  const handleNotesUpdate = async (companyId, notes) => {
    try {
      const response = await adminService.updateUserNotes(companyId, notes);
      if (response.success) {
        // Update local state
        setCompanies(prevCompanies => 
          prevCompanies.map(company => 
            company.id === companyId 
              ? { ...company, notes }
              : company
          )
        );
        toast.success("Notes updated successfully");
      }
    } catch (error) {
      console.error("Error updating notes:", error);
      toast.error("Failed to update notes");
    }
  };

  // Open notes modal
  const openNotesModal = (companyId, currentNotes, companyName) => {
    setNotesModal({
      isOpen: true,
      companyId,
      currentNotes: currentNotes || "",
      companyName
    });
  };

  // Close notes modal
  const closeNotesModal = () => {
    setNotesModal({
      isOpen: false,
      companyId: null,
      currentNotes: "",
      companyName: ""
    });
  };

  // Save notes from modal
  const saveNotes = async (notes) => {
    if (notesModal.companyId) {
      await handleNotesUpdate(notesModal.companyId, notes);
    }
  };

  // Handle admin rating update
  const handleRatingUpdate = async (companyId, rating) => {
    try {
      const response = await adminService.updateAdminFields(companyId, { adminRating: rating });
      if (response.success) {
        // Update local state
        setCompanies(prevCompanies => 
          prevCompanies.map(company => 
            company.id === companyId 
              ? { ...company, adminRating: rating }
              : company
          )
        );
        toast.success("Rating updated successfully");
      }
    } catch (error) {
      console.error("Error updating rating:", error);
      toast.error("Failed to update rating");
    }
  };

  // Handle florist company toggle
  const handleFloristCompanyToggle = async (companyId) => {
    try {
      const currentCompany = companies.find(c => c.id === companyId);
      const newHasFlorist = !(currentCompany?.hasFlorist || false);
      
      const response = await adminService.updateAdminFields(companyId, { hasFlorist: newHasFlorist });
      if (response.success) {
        // Update local state
        setCompanies(prevCompanies => 
          prevCompanies.map(company => 
            company.id === companyId 
              ? { ...company, hasFlorist: newHasFlorist }
              : company
          )
        );
        toast.success("Florist status updated successfully");
      }
    } catch (error) {
      console.error("Error updating florist status:", error);
      toast.error("Failed to update florist status");
    }
  };

  // Handle paid toggle
  const handlePaidToggle = async (companyId) => {
    try {
      const currentCompany = companies.find(c => c.id === companyId);
      const newIsPaid = !(currentCompany?.isPaid || false);
      
      const response = await adminService.updateAdminFields(companyId, { isPaid: newIsPaid });
      if (response.success) {
        // Update local state
        setCompanies(prevCompanies => 
          prevCompanies.map(company => 
            company.id === companyId 
              ? { ...company, isPaid: newIsPaid }
              : company
          )
        );
        toast.success("Payment status updated successfully");
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
      toast.error("Failed to update payment status");
    }
  };

  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin
          setWhichScreen={setWhichScreen}
          headerCheck={2}
          whichtab={whichTab}
        />
      </div>

      {whichScreen === 3 ? (
        <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
          <div className="flex justify-between mb-[80px]">
            <div className="flex ">
              <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      234
                    </p>
                  </div>

                  <div>
                    <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                      Previous m:{" "}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                        210
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      Total Florists
                    </p>
                  </div>
                  <div>
                    <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#1E2125] m-[0] ">
                      change: {""}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0] ">
                        + 67%
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="ml-[20px]  flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      214
                    </p>
                  </div>

                  <div>
                    <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                      Free florists :{" "}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                        20
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      Paying florists
                    </p>
                  </div>
                  <div>
                    <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#1E2125] m-[0] ">
                      New: {""}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0] ">
                        + 4
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="ml-[20px]  flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      114
                    </p>
                    <p className="font-sourcesans text-[33px] font-thin leading-[46.88px] text-[#CCCCCC] mx-[8px] mt-[-5px] mb-[0] ">
                      |
                    </p>

                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      67
                    </p>
                    <p className="font-sourcesans text-[33px] font-thin leading-[46.88px] text-[#CCCCCC] mx-[8px] mt-[-5px] mb-[0] ">
                      |
                    </p>
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      53
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex w-[42%] space-x-[4px]">
                    <p className="mt-[10px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      Cities S
                    </p>
                    <p className="font-sourcesans text-[23px] font-thin leading-[46.88px] text-[#CCCCCC]  mt-[-5px] mb-[0]">
                      |
                    </p>
                    <p className="mt-[10px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      M
                    </p>
                    <p className="font-sourcesans text-[23px] font-thin leading-[46.88px] text-[#CCCCCC] mt-[-5px] mb-[0]">
                      |
                    </p>
                    <p className="mt-[10px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                      L
                    </p>
                  </div>

                  <div className="flex w-[58%] justify-end items-center ">
                    <p className="font-sourcesans text-[12px] font-normal leading-[16.41px] text-[#1E2125] m-[0]">
                      Change:{" "}
                    </p>
                    <span className="inline-flex items-center space-x-[4px] ml-1.5">
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0]">
                        {" "}
                        +28
                      </span>
                      <span className="font-sourcesans text-[23px] font-thin leading-[46.88px] text-[#CCCCCC]">
                        |
                      </span>
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0]">
                        +6
                      </span>
                      <span className="font-sourcesans text-[23px] font-thin leading-[46.88px] text-[#CCCCCC]">
                        |
                      </span>
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0]">
                        +15
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-[20px]">
                <RevenueComp
                  amount={"260 €"}
                  total={"1253"}
                  revenue={"Revenue: Florist Advert"}
                  previous={"220"}
                  change={" +18%"}
                />
              </div>
              <div className="ml-[20px]">
                <RevenueComp
                  amount={"780 €"}
                  total={"6253"}
                  revenue={"Revenue: Florist subsc"}
                  previous={"820"}
                  change={" +28%"}
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-row
     items-center justify-end space-x-[16px] mb-[0px]"
          >
            <div className="flex flex-row space-x-[16px] ">
              <Dropdown
                label={"Florist"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
              <Dropdown
                label={"City"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
              <div className="flex h-[16px] w-[360px] tablet:hidden desktop:hidden" />
              <Dropdown
                label={"Region"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
              <Dropdown
                label={"Subscriptions only"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
            </div>
            <div className="hidden desktop:flex justify-center  w-12 items-center h-full desktop:aspect-square rounded-lg bg-[#414141]">
              <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
            </div>
          </div>

          {/* {/ Table Starts from here /} */}
          <table className="min-w-full table-auto relative">
            <thead>
              <tr className="h-[90px]">
                <th className="w-[180px] pl-[10px] pt-[55px]">
                  <div className="flex items-center">
                    <p className="uppercase font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      Florist
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[180px] pt-[40px] mt-[12px]">
                  <div className="flex  items-center">
                    <p className="text-left font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                      City
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="mt-[12px] w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[110px] text-left pt-[55px]">
                  <div className="flex items-center">
                    <p className="uppercase font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      Region
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] text-left pt-[55px]">
                  <div className="flex  items-center">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      What
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] text-left pt-[55px]">
                  <div className="flex  items-center">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      Invoice
                    </p>
                  </div>
                </th>

                <th className="uppercase w-[90px] text-center pt-[40px]">
                  <div className="flex  items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                      When
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] text-center pt-[40px]">
                  <div className="flex items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                      Expires
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] text-center pt-[40px]">
                  <div className="flex items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                      Gift
                    </p>
                  </div>
                </th>

                <th className="uppercase w-[90px] pl-[10px] pt-[40px]">
                  <div className="flex  items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#EB1D1D]">
                      Paid
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[90px] pl-[10px] pt-[40px]">
                  <div className="flex  items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#EB1D1D]">
                      Amount
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    />
                  </div>
                </th>

                <th className="uppercase w-[60px] text-center pt-[40px]"></th>

                <th className="uppercase w-[60px] text-center pt-[40px]"></th>

                <th className="uppercase w-[60px] text-right pt-[40px] pr-4">
                  <div className="flex justify-end items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41] text-nowrap">
                      Award code
                    </p>
                  </div>
                </th>
                <th className="uppercase w-[60px] text-right pt-[40px] pr-4">
                  <div className="flex justify-end items-center mt-[12px]">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                      Open
                    </p>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {financialLoading ? (
                <tr>
                  <td colSpan="12" className="text-center py-8">
                    <p className="font-sourcesans text-[16px] text-[#6D778E]">Loading financial data...</p>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="12" className="text-center py-8">
                    <p className="font-sourcesans text-[16px] text-[#EB1D1D]">Error loading data: {error}</p>
                  </td>
                </tr>
              ) : financialData.length === 0 ? (
                <tr>
                  <td colSpan="12" className="text-center py-8">
                    <p className="font-sourcesans text-[16px] text-[#6D778E]">No financial data found</p>
                  </td>
                </tr>
              ) : (
                financialData.map((data, index) => (
                <tr
                  key={index}
                  className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66]"
                >
                  <td className="w-[90px] pl-[10px]">
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                      {data.florist}
                    </p>
                  </td>

                  <td className="w-[100px]">
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                      {data.city}
                    </p>
                  </td>

                  <td className="w-[80px]">
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                      {data.region}
                    </p>
                  </td>

                  <td className="w-[60px]  text-left flex mt-[25px] m-1">
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                      {data.whatP} {""}
                    </p>
                    <p className="mr-[5px] ml-[5px] font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#CCCCCC]">
                      |
                    </p>
                    <p
                      className={`font-sourcesans text-[20px] font-normal leading-[15.23px] ${
                        index == 1 || index == 3
                          ? "text-[#EB1D1D]"
                          : "text-[#3C3E41]"
                      }`}
                    >
                      {" "}
                      {data.whatS}
                    </p>
                  </td>

                  <td className="w-[60px] ">
                    <Image
                      src={"/eye.png"}
                      width={24}
                      height={24}
                      className=""
                    ></Image>
                    <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#D4D4D4] mt-[5px]">
                      10 €
                    </p>
                  </td>

                  <td className="w-[60px] ">
                    <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#3C3E41]">
                      {data.when}
                    </p>
                  </td>
                  <td className="w-[60px] ">
                    <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#3C3E41]">
                      {data.expires}
                    </p>
                  </td>

                  <td className="w-[60px] pl-[10px]">
                    {data?.isredDot ? (
                      <div className="w-[12px] h-[12px] rounded-[50%] bg-[#EB1D1D] "></div>
                    ) : (
                      ""
                    )}
                  </td>

                  <td className="w-[60px] pl-[10px] ">
                    <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#3C3E41]">
                      {data.paid}
                    </p>
                  </td>

                  <td className="w-[60px] pl-[20px] ">
                    <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#3C3E41]">
                      {data.amount}
                    </p>
                  </td>

                  <td className="w-[60px] text-right "></td>

                  <td className="w-[60px] text-right "></td>

                  <td className="w-[80px]">
                    <Image
                      src={"/exportgrey.png"}
                      width={24}
                      height={24}
                      className="ml-[45px]"
                    />
                  </td>
                  <td className="w-[90px]">
                    <Image
                      src={"/icon_arrowright.png"}
                      width={24}
                      height={24}
                      className="ml-[55px]"
                    />
                  </td>
                </tr>
              ))
            )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
          <div className="flex justify-between mb-[80px]">
          <div className="flex gap-[20px]">
              <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      114
                    </p>
                    <p className="font-sourcesans text-[33px] font-thin leading-[46.88px] text-[#CCCCCC] mx-[8px] mt-[-5px] mb-[0] ">
                      |
                    </p>

                    <p className="font-sourcesans text-[20px] font-normal leading-[16px] text-[#ACAAAA] mt-[revert]">
                      146
                    </p>
                  </div>

                  <div>
                    <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                      Last month:{" "}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                        78
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="mt-[12px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                    Florist companies
                    <span className="font-sourcesans text-[12px] font-light leading-[18.75px] text-[#6D778E] m-[0]">
                      | Florist shops
                    </span>
                  </p>
                </div>
              </div>

              <div className=" flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                      17
                    </p>
                    <p className="font-sourcesans text-[33px] font-thin leading-[46.88px] text-[#CCCCCC] mx-[8px] mt-[-5px] mb-[0] ">
                      |
                    </p>

                    <p className="font-sourcesans text-[20px] font-normal leading-[16px] text-[#ACAAAA] mt-[revert]">
                      67
                    </p>
                  </div>

                  <div>
                    <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                      previous m:{" "}
                      <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                        72
                      </span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="mt-[12px] font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                    Obit publishing florist{" "}
                    <span className="font-sourcesans text-[12px] font-light leading-[18.75px] text-[#6D778E] m-[0]">
                      | Total obits last m.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-[16px] w-[310px] h-[110px] bg-[#ffffff] border-[2px] border-[solid] border-[#0A85C2] rounded-[8px]">
              <div className="flex justify-between">
                <div className="flex">
                  <p className="font-sourcesans text-[40px] font-bold leading-[46.88px] text-[#6D778E]  ">
                    145
                  </p>
                  <p className="font-sourcesans text-[20px] font-thin leading-[16px] text-[#CCCCCC] mx-[8px] mt-[revert] ">
                    |
                  </p>

                  <p className="font-sourcesans text-[20px] font-normal leading-[16px] text-[#ACAAAA] mt-[revert] ">
                    212
                  </p>
                </div>

                <div>
                  <p className="font-sourcesans text-[12px] font-normal leading-[14.06px] text-[#6D778E] my-auto ">
                    Last m:{" "}
                    <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#5EAE91] my-auto ">
                      122
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-sourcesans text-[16px] font-medium leading-[18.75px] text-[#1E2125] m-[0]">
                    Cities covered
                  </p>
                </div>

                <div>
                  <p className="font-sourcesans text-[14px] font-normal leading-[16.41px] text-[#0A85C2] m-[0] underline">
                    By florists:{" "}
                    <span className="font-sourcesans text-[16px] font-bold leading-[18.75px] text-[#EB1D1D] m-[0] no-underline">
                      17
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* dropdown input */}
          <div
            className="flex flex-row
   items-center justify-end space-x-[16px] mb-[50px]"
          >
            <div className="flex flex-row space-x-[16px] ">
              <div className="flex h-[48px]">
                <input
                  type="text"
                  placeholder="Funeral company"
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    width: "227px",
                    height: "100%",
                    fontWeight: 400,
                    borderWidth: "1px",
                    borderColor: "#7C7C7C",
                    borderRadius: "8px",
                    paddingLeft: "15.8px",
                    paddingRight: "15.8px",
                    color: "#7C7C7C",
                    backgroundColor: "white",
                    fontVariationSettings: "'opsz' 16",
                  }}
                />
              </div>
              <Dropdown
                label={"City"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
              <div className="flex h-[16px] w-[360px] tablet:hidden desktop:hidden" />
              <Dropdown
                label={"Region"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={""}
                isFromFlowerGreenBgTablet={false}
              />
            </div>
            <div className="hidden desktop:flex justify-center  w-12 items-center h-full desktop:aspect-square rounded-lg bg-[#414141]">
              <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
            </div>
          </div>

          {/* Table Starts from here */}
          <table className="min-w-full table-auto relative">
          <div className="absolute top-[22px] left-[870px]"> {/*28 oct*/}
              <p className="font-sourcesans text-[24px] font-bold leading-[24px] text-[#2B5D80] underline ">
                ALLOW
              </p>
            </div>
            <thead>
              <tr className="h-[70px]">
                <th className="uppercase w-[78px] text-center pt-[55px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    #ID
                  </p>
                </th>

                <th className="uppercase w-[148px] pt-[40px]">
                  <p className="text-left  font-sourcesans text-[13px] font-semibold leading-[16px] text-[#3C3E41]">
                    Funeral Company
                  </p>
                  <p className="text-left font-sourcesans text-[13px] font-semibold leading-[16px] text-[#ACAAAA]">
                    Unit
                  </p>
                </th>

                <th className="uppercase w-[131px] text-left pt-[55px]">
                  <div className="flex">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      City{" "}
                    </p>

                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="uppercase w-[103px] text-left pt-[55px]">
                  <div className="flex">
                    <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                      Region
                    </p>
                    <Image
                      src={"/greyarrow.png"}
                      width={5}
                      height={5}
                      className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="uppercase w-[74px] text-left pt-[55px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Joined
                  </p>
                </th>

                <th className="uppercase w-[131px] text-center pt-[60px]">
                  {/* {/ arraydownward /} */}
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Shops{" "}
                    <span className="font-sourcesans text-[13px] font-light leading-[16px] text-[#D4D4D4]">
                      |
                    </span>{" "}
                    Cities
                  </p>
                  <div className="w-full flex justify-center mt-[3px]">
                    <Image
                      src={"/arraydownward.png"}
                      width={8}
                      height={12}
                      //   className="w-[24px] h-[30px] m-[0]"
                    ></Image>
                  </div>
                </th>

                <th className="uppercase w-[55px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Obits
                  </p>
                </th>
                <th className="uppercase w-[64px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Keepers
                  </p>
                </th>
                <th className="uppercase w-[66px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Mobiles
                  </p>
                </th>
                <th className="uppercase w-[90px] text-center pt-[55px] h-[106px] bg-[#ffffff]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Tributes
                  </p>
                </th>
                <th className="uppercase w-[20px] text-center pt-[40px]">
                
                </th>
                <th className="uppercase w-[40px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Block User
                  </p>
                </th>
                <th className="uppercase w-[40px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Block <br/> Their Page
                  </p>
                </th>
                <th className="uppercase w-[40px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Our Notes
                  </p>
                </th>
                {/* <th className="uppercase w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Show Emails
                  </p>
                </th> */}
                <th className="uppercase w-[40px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Grant Codes
                  </p>
                </th>
                <th className="uppercase w-[20px] text-center pt-[40px]">
               
                </th>
                <th className="uppercase w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Our Rating
                  </p>
                </th>
                <th className="uppercase w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    Funeral company
                  </p>
                </th>
                <th className="uppercase w-[60px] text-center">
                  <p className="mt-[20px] font-sourcesans text-[13px] font-semibold leading-[24px] text-[#3C3E41]">
                    Paid
                  </p>
                </th>
                <th className="uppercase w-[60px] text-center pt-[40px]">
                  <p className="font-sourcesans text-[13px] font-semibold leading-[18px] text-[#3C3E41]">
                    User Account
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="19" className="text-center py-8">
                    <p className="font-sourcesans text-[16px] text-[#6D778E]">Loading florist companies...</p>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="19" className="text-center py-8">
                    <p className="font-sourcesans text-[16px] text-[#EB1D1D]">Error loading data: {error}</p>
                  </td>
                </tr>
              ) : companies.length === 0 ? (
                <tr>
                  <td colSpan="19" className="text-center py-8">
                    <p className="font-sourcesans text-[16px] text-[#6D778E]">No florist companies found</p>
                  </td>
                </tr>
              ) : (
                companies.map((company, index) => (
                  <tr key={company.id} className={`h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] ${index % 2 === 0 ? 'bg-[#FFFFFF66]' : 'bg-white'}`}>
                    <td className="w-[78px] text-center">
                      <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                        {formatConsecutiveNumber(index)}
                      </p>
                    </td>

                    <td className="w-[148px]">
                      <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                        {company.name}
                      </p>
                      <p className="text-left font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#ACAAAA]">
                        {company.company}
                      </p>
                    </td>

                    <td className="w-[120px] text-left">
                      <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                        {company.city}
                      </p>
                    </td>

                    <td className="w-[120px] text-left">
                      <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                        {company.region}
                      </p>
                    </td>

                    <td className="w-[74px] text-left">
                      <p className="font-sourcesans text-[13px] font-normal leading-[15.23px] text-[#3C3E41]">
                        {formatDate(company.createdTimestamp)}
                      </p>
                    </td>

                    <td className="w-[131px] text-center">
                      <p className="font-sourcesans text-[13px] font-normal leading-[24px] text-[#6D778E]">
                        1{" "}
                        <span className="mx-[5px] font-sourcesans text-[12px] font-light leading-[16px] text-[#D4D4D4]">
                          |
                        </span>{" "}
                        1
                      </p>
                    </td>

                    {/* OBITS Permission Toggle */}
                    <td className="w-[55px] h-[64px] flex justify-center items-center">
                      <button
                        onClick={() => handlePermissionToggle(company.id, 'createObituary', company.permissions.createObituary)}
                        className="cursor-pointer"
                        title="Toggle Obituary Creation Permission"
                      >
                        <Image 
                          src={company.permissions.createObituary ? "/varify.png" : "/reject.png"} 
                          width={24} 
                          height={24}
                          alt={company.permissions.createObituary ? "Obituary creation allowed" : "Obituary creation blocked"}
                        />
                      </button>
                    </td>

                    {/* KEEPERS Permission Toggle */}
                    <td className="w-[64px]">
                      <button
                        onClick={() => handlePermissionToggle(company.id, 'assignKeeper', company.permissions.assignKeeper)}
                        className="cursor-pointer m-auto block"
                        title="Toggle Keeper Assignment Permission"
                      >
                        <Image
                          src={company.permissions.assignKeeper ? "/varify.png" : "/reject.png"}
                          width={24}
                          height={24}
                          className="m-auto"
                          alt={company.permissions.assignKeeper ? "Keeper assignment allowed" : "Keeper assignment blocked"}
                        />
                      </button>
                    </td>

                    {/* MOBILES Permission Toggle */}
                    <td className="w-[66px]">
                      <button
                        onClick={() => handlePermissionToggle(company.id, 'sendMobile', company.permissions.sendMobile)}
                        className="cursor-pointer m-auto block"
                        title="Toggle Mobile Permission"
                      >
                        <Image
                          src={company.permissions.sendMobile ? "/varify.png" : "/reject.png"}
                          width={24}
                          height={24}
                          className="m-auto"
                          alt={company.permissions.sendMobile ? "Mobile allowed" : "Mobile blocked"}
                        />
                      </button>
                    </td>

                    {/* TRIBUTES Permission Toggle */}
                    <td className="w-[90px]">
                      <button
                        onClick={() => handlePermissionToggle(company.id, 'sendGifts', company.permissions.sendGifts)}
                        className="cursor-pointer m-auto block"
                        title="Toggle Gifts/Tributes Permission"
                      >
                        <Image
                          src={company.permissions.sendGifts ? "/varify.png" : "/reject.png"}
                          width={24}
                          height={24}
                          className="m-auto"
                          alt={company.permissions.sendGifts ? "Gifts/Tributes allowed" : "Gifts/Tributes blocked"}
                        />
                      </button>
                    </td>

                    <td className="w-[20px]"></td>

                    {/* Block User Toggle */}
                    <td className="w-[50px]">
                      <button
                        onClick={() => handleBlockUserToggle(company.id, company.isBlocked)}
                        className="cursor-pointer m-auto block"
                        title={company.isBlocked ? "Unblock User" : "Block User"}
                      >
                        <Image
                          src={company.isBlocked ? "/reject.png" : "/verify.png"}
                          width={18}
                          height={18}
                          className="m-auto"
                          alt={company.isBlocked ? "User is blocked" : "User is active"}
                        />
                      </button>
                    </td>
                    <td className="w-[70px]">
                      <Image
                        src={"/red_cross.png"}
                        width={18}
                        height={18}
                        className="m-auto"
                      />
                    </td>

                    {/* Our Notes */}
                    <td className="w-[50px]">
                      <button
                        onClick={() => openNotesModal(company.id, company.notes, company.name)}
                        className="cursor-pointer m-auto block"
                        title="Edit Notes"
                      >
                        <Image
                          src={company.notes ? "/file.png" : "/disableNote.png"}
                          width={18.9}
                          height={18.9}
                          className="m-auto"
                          alt={company.notes ? "Notes available" : "No notes"}
                        />
                      </button>
                    </td>

                    <td className="w-[50px]">
                      <Image
                        src={"/disbleGift.png"}
                        width={22}
                        height={18}
                        className="m-auto"
                      />
                    </td>
                    <td className="w-[20px] text-center"></td>
                    {/* Our Rating - Single character input */}
                    <td className="w-[60px] text-center">
                      <input
                        type="text"
                        maxLength={1}
                        value={company.adminRating || ""}
                        onChange={(e) => handleRatingUpdate(company.id, e.target.value)}
                        className="w-8 h-8 text-center font-sourcesans text-[20px] bg-white font-bold leading-[23.3px] text-[#EB1D1D] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#0A85C2]"
                        placeholder="?"
                        title="Enter rating (1-9)"
                      />
                    </td>
                    {/* Have FLOURST - Toggle button */}
                    <td className="w-[60px]">
                      <button
                        onClick={() => handleFloristCompanyToggle(company.id)}
                        className="cursor-pointer m-auto block"
                        title={company.hasFlorist ? "Has Florist Company" : "No Florist Company"}
                      >
                        <Image
                          src={company.hasFlorist ? "/yellowright.png" : "/reject.png"}
                          width={18}
                          height={18}
                          className="m-auto"
                          alt={company.hasFlorist ? "Has Florist" : "No Florist"}
                        />
                      </button>


                    </td>
                    {/* PAID - Toggle button */}
                    <td className="w-[60px]">
                      <button
                        onClick={() => handlePaidToggle(company.id)}
                        className="cursor-pointer m-auto block"
                        title={company.isPaid ? "Paid" : "Not Paid"}
                      >
                        <Image
                          src={company.isPaid ? "/paid.png" : "/reject.png"}
                          width={18}
                          height={18}
                          className="m-auto"
                          alt={company.isPaid ? "Paid" : "Not Paid"}
                        />
                      </button>
                    </td>

                    <td className="w-[60px]">
                      <Image
                        src={"/icon_arrowright.png"}
                        width={24}
                        height={24}
                        className="m-auto"
                      />
                    </td>
                  </tr>
                ))
              )}


            </tbody>
          </table>
        </div>
      )}

      {/* Notes Modal */}
      <NotesModal
        isOpen={notesModal.isOpen}
        onClose={closeNotesModal}
        onSave={saveNotes}
        currentNotes={notesModal.currentNotes}
        companyName={notesModal.companyName}
      />
    </div>
  );
};

export default FloristFirst;
