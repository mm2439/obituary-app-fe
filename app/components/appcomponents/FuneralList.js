"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Dropdown from "@/app/components/appcomponents/Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import regionsAndCities from "@/utils/regionAndCities";
import companyService from "@/services/company-service";
import obituaryService from "@/services/obituary-service";
import API_BASE_URL from "@/config/apiConfig";

const FuneralList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get initial values from URL params, default to "Zasavska"
  const [selectedRegion, setSelectedRegion] = useState(searchParams.get('region') || "Zasavska");
  const [companies, setCompanies] = useState([]);
  const [obituariesCount, setObituariesCount] = useState({}); // New state for obituary counts

  // Extract all regions
  const regionOptions = Object.keys(regionsAndCities).map((region) => ({
    place: region,
    id: region,
  }));

  // Update URL parameters
  const updateUrlParams = (region) => {
    const params = new URLSearchParams();

    if (region && region.trim() !== "") {
      params.set('region ', region);
    }

    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    router.push(newUrl, { scroll: false });
  };

  const handleRegionSelect = (item) => {
    const newRegion = item.place;
    setSelectedRegion(newRegion);
    updateUrlParams(newRegion);
  };

  // Fetch companies based on URL parameters
  const fetchFuneralCompany = async () => {
    try {
      // Get current URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const regionParam = urlParams.get('region') || "Zasavska"; // Default to Zasavska

      let params = {
        type: "FUNERAL",
      };

      // Add region if exists
      if (regionParam && regionParam.trim() !== "") {
        params.region = regionParam;
      }

      console.log("API Params:", params);
      const response = await companyService.getCompanies(params);
      console.log("API Response:", response);
      setCompanies(response.companies || []);

      // Fetch obituary counts for each company
      if (response.companies && response.companies.length > 0) {
        await fetchObituariesCount(response.companies, regionParam);
      }
    } catch (error) {
      console.error("Error fetching companies:", error);
      setCompanies([]);
    }
  };

  // Updated function to fetch obituary counts for each company
  const fetchObituariesCount = async (companiesData) => {
    try {
      const counts = {};

      // Fetch all obituaries (no region filter - just get all obituaries)
      const obituaryResponse = await obituaryService.getObituary({});
      const allObituaries = obituaryResponse.obituaries || [];

      console.log("All obituaries:", allObituaries); // Debug log

      // Count obituaries for each company by matching userId
      companiesData.forEach(company => {
        // Count total obituaries for this company/user
        const companyObituaries = allObituaries.filter(obituary =>
          obituary.userId === company.id
        );

        counts[company.id] = companyObituaries.length;

        console.log(`Company ${company.id} (${company.name}): ${companyObituaries.length} obituaries`); // Debug log
      });

      console.log("Obituary counts per company:", counts);
      setObituariesCount(counts);
    } catch (error) {
      console.error("Error fetching obituaries count:", error);
      setObituariesCount({});
    }
  };

  const clearFilters = () => {
    setSelectedRegion("Zasavska"); // Reset to default instead of empty
    updateUrlParams("Zasavska"); // Update URL with default region
  };

  // Set default region on initial load if no region in URL
  useEffect(() => {
    if (!searchParams.get('region')) {
      updateUrlParams("Zasavska");
    }
  }, []);

  // Fetch data when component mounts or URL changes
  useEffect(() => {
    fetchFuneralCompany();
  }, [searchParams]);

  // Update state when URL params change
  useEffect(() => {
    const regionParam = searchParams.get('region') || "Zasavska";
    setSelectedRegion(regionParam);
  }, [searchParams]);

  return (
    <div className="max-w-[1920px] w-full pb-[81px] tablet:pb-[55px] desktop:pb-[121px] tablet:w-full mobile:w-full mx-auto flex flex-col items-center desktop:bg-[#F5F7F9] mobile:bg-white tablet:bg-white">
      <div className="flex flex-col items-center w-full tablet:w-full mobile:w-full">
        <div className="w-full tablet:w-full mobile:w-full flex flex-col items-center">
          {/* Filter Section */}
          <div className="flex flex-col tablet:flex-row desktop:flex-row gap-4 mt-[63px] mb-[63px] mobile:w-[311px] tablet:w-[612px] desktop:w-[1088px] tablet:mt-[63px] tablet:mb-[60px] desktop:mt-[80px] desktop:mb-10 tablet:justify-end desktop:justify-end">

            {/* Mobile: Dropdown + Search Icon in same row */}
            <div className="flex tablet:hidden gap-4 w-full">
              {/* Region Dropdown - Mobile */}
              <div className="flex-1">
                <Dropdown
                  label={"Izberi regijo"}
                  isFromNotification={false}
                  isFromFlower={false}
                  isFrom={"florist"}
                  data={regionOptions}
                  selectedValue={selectedRegion}
                  onSelect={handleRegionSelect}
                  placeholder="Vse regije"
                />
              </div>

              {/* Search Icon - Mobile */}
              <div className="flex justify-center items-center w-12 h-[48px] rounded-lg bg-[#414141] md:hidden">
                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Tablet & Desktop: Region Dropdown */}
            <div className="hidden tablet:block tablet:w-full desktop:w-dull">
              <Dropdown
                label={"Izberi regijo"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={"florist"}
                data={regionOptions}
                selectedValue={selectedRegion}
                onSelect={handleRegionSelect}
                placeholder="Vse regije"
              />
            </div>

            {/* Show Button */}
            <button
              onClick={fetchFuneralCompany}
              className="hidden md:flex px-3 h-[48px] text-[16px] text-[#F6F6F6] rounded-lg bg-[#414141] justify-center items-center cursor-pointer hover:bg-[#555555] transition-colors font-medium"
            >
              Prikaži
            </button>




          </div>
        </div>
      </div>



      {/* Results Section */}
      <div className="flex justify-center  w-[310px] tablet:w-[612px] desktop:w-[1088px] desktop:justify-between">
        <div className="w-full">
          {companies?.length > 0 ? (
            companies.map((item, index) => (
              <FuneralBlock
                item={item}
                index={index}
                key={`company-${index}`}
                obituaryCount={obituariesCount[item.id] || 0} // Pass count to FuneralBlock
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-32 text-gray-500">
              <p>Ni najdenih podjetij za izbrane kriterije.</p>
              {selectedRegion && (
                <button
                  onClick={clearFilters}
                  className="mt-2 px-4 py-2 text-sm text-blue-500 hover:text-blue-700 underline"
                >
                  Počisti filtre
                </button>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden desktop:flex w-[290px] items-end flex-col">
          <div className="flex items-center justify-center w-[286px] h-[200px] border-[1px] rounded-lg border-[#D4D4D4]">
            <p className="text-[#414141] text-[24px] font-variation-customOpt24wght100 font-thin">
              Kmalu
            </p>
          </div>
          <div className="flex items-center justify-center w-[286px] mt-8 h-[429px] border-[1px] rounded-lg border-[#D4D4D4]">
            <p className="text-[#414141] text-[24px] font-variation-customOpt24wght100 font-thin">
              Kmalu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Update FuneralBlock component to accept obituaryCount
const FuneralBlock = ({ item, index, obituaryCount }) => {
  const handleClick = () => {
    window.location.href = "/funeralpromo";
  };

  return (
    <div className={`${index === 0 ? "flex mt-0 w-full" : "flex mt-6 tablet:mt-6 desktop:mt-8 w-full"}`}>
      <button
        onClick={handleClick}
        className="flex flex-col tablet:flex-row desktop:flex-row w-[276px] h-[259px] pl-[11px] pr-[11px] py-[11px] tablet:w-[600px] tablet:h-[170px] tablet:pl-[28px] tablet:py-[21px] desktop:w-[762px] desktop:h-[200px] desktop:pl-[28px] desktop:pr-[27px] desktop:py-[26px] border-2 border-white shadow-custom-light-dark-box bg-[#EBF0F4] rounded-lg hover:bg-[#E1E6EA] transition-colors cursor-pointer"
      >
        <div className="rounded-xl mr-[0px] tablet:mr-[40px] desktop:mr-[36px] shadow-custom-light-dark-box-image bg-gradient-to-br p-1 from-[#E3E8EC] to-[#FFFFFF]">
          {item?.CompanyPage?.logo || item?.logo ? (
            <img
              src={
                (item?.CompanyPage?.logo || item?.logo)?.includes("companyUploads")
                  ? `${API_BASE_URL}/${item.CompanyPage?.logo || item.logo}`
                  : item?.CompanyPage?.logo || item?.logo
              }
              alt={`${item?.CompanyPage?.name || item?.name || "Company"} logo`}
              className="
                object-cover
                h-[99px] w-[245px]
                tablet:h-[113px] tablet:w-[180px] 
                desktop:h-[140px] desktop:w-[230px]
                bg-cover rounded-lg"
              onError={(e) => {
                e.target.style.display = "none";
                const fallback = e.target.parentNode.querySelector(".fallback-logo");
                if (fallback) fallback.style.display = "flex";
              }}
            />
          ) : null}

          <div
            className="fallback-logo flex items-center justify-center h-[99px] w-[245px] tablet:h-[113px] tablet:w-[180px] desktop:h-[140px] desktop:w-[230px] bg-gray-200 rounded-lg text-gray-500 text-sm"
            style={{ display: (item?.CompanyPage?.logo || item?.logo) ? 'none' : 'flex' }}
          >
            {item?.CompanyPage?.name || item?.name || 'Company'}
          </div>
        </div>

        <div className="flex items-start flex-col mt-5 tablet:mt-0 desktop:mt-1 w-[245px] ml-[2.5px] tablet:ml-0 desktop:ml-0 tablet:w-[310px] desktop:w-[433px] tablet:pr-[10px]">
          <div className="flex flex-1 flex-col w-full">
            <div className="flex justify-between h-[19px] mobile:items-center tablet:h-7 desktop:h-7 w-full desktop:pr-[10px]">
              <div className="flex items-center h-full">
                <div className="font-variation-customOpt16 desktop:font-variation-customOpt24 tablet:font-variation-customOpt24 font-semibold tablet:font-normal desktop:font-normal text-left desktop:text-[24px] tablet:text-[24px] text-[16px] text-[#1E2125] leading-[28.13px]">
                  {item?.CompanyPage?.name || item?.name}
                </div>
              </div>
            </div>

            <div className="flex items-center h-[16px] tablet:h-6 desktop:h-6 mt-[10px] tablet:mt-4 desktop:mt-4">
              <p className="flex font-variation-customOpt12 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 font-normal text-left desktop:text-[16px] tablet:text-[16px] text-[12px] text-[#414141] leading-[24px]">
                {item?.CompanyPage?.address || `${item?.city || ""}, ${item?.region || ""}`}
              </p>
            </div>

            <div className="flex items-center h-[16px] tablet:h-6 desktop:h-6 mt-1 desktop:mt-2">
              <p className="font-variation-customOpt12 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 font-normal text-left desktop:text-[16px] tablet:text-[16px] text-[12px] text-[#414141] leading-[24px]">
                {item?.CompanyPage?.website || item?.CompanyPage?.highlightText || item?.email || ""}
              </p>
            </div>

            <div className="flex w-full h-[30px] tablet:h-6 justify-between mt-[10px] tablet:mt-[2px] desktop:mt-2 tablet:pr-2">
              <div className="flex items-center h-[16px] tablet:h-6 desktop:h-6 tablet:mt-1 desktop:mt-2">
                <p className="font-variation-customOpt14 tablet:font-variation-customOpt16 desktop:font-variation-customOpt20 font-normal text-left desktop:text-[20px] tablet:text-[16px] text-[14px] text-[#414141] leading-[24px]">
                  {obituaryCount} osmrtnic
                </p>
              </div>
              <div className="flex mt-[16px] tablet:mt-0 h-[14px] tablet:h-6 desktop:h-6 desktop:w-[92px] justify-end items-center desktop:mt-4">
                <div className="text-[#1E2125] font-normal text-[12px] tablet:text-[14px] desktop:text-[14px]">
                  Odpri
                </div>
                <img
                  src="/icon_arrowright.png"
                  alt="Arrow icon to view company details"
                  className="h-4 w-4 tablet:h-6 desktop:h-6 tablet:w-6 desktop:w-6 ml-1"
                />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

// Loading component for Suspense fallback
const FuneralListLoading = () => (
  <div className="max-w-[1920px] w-full pb-[81px] tablet:pb-[55px] desktop:pb-[121px] tablet:w-full mobile:w-full mx-auto flex flex-col items-center desktop:bg-[#F5F7F9] mobile:bg-white tablet:bg-white">
    <div className="flex justify-center items-center h-32">
      <p className="text-gray-500">Nalaganje pogrebnih podjetij...</p>
    </div>
  </div>
);

// Wrapper component with Suspense boundary
const FuneralListWrapper = () => {
  return (
    <Suspense fallback={<FuneralListLoading />}>
      <FuneralList />
    </Suspense>
  );
};

export default FuneralListWrapper;
