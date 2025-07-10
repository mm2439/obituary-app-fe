"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";
import DropdownWithSearch from "./DropdownWithSearch";
import { sl } from "date-fns/locale";
import Image from "next/image";
import DatePicker from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import { toast } from "react-hot-toast";
import obituaryService from "@/services/obituary-service";
import cemetryService from "@/services/cemetry-service";
import ModalDropBox from "./ModalDropBox";
import MobileCards from "./MobileCards";
import { getCardsImageAndPdfsFiles } from "@/utils/downloadCards";
import BackDropLoader from "../ui/backdrop-loader";

const AddObituary = ({ set_Id, setModal }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueSirName, setInputValueSirName] = useState("");
  const [inputValueEnd, setInputValueEnd] = useState("");
  const [inputValueGender, setInputValueGender] = useState("");
  const [inputValueFuneralEnd, setInputValueFuneralEnd] = useState("");
  const [inputValueFuneralCemetery, setInputValueFuneralCemetery] =
    useState("");
  const [uploadedPicture, setUploadedPicture] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [deathDate, setDeathDate] = useState(null);
  const [funeralDate, setFuneralDate] = useState(null);
  const [openPicker, setOpenPicker] = useState(null);
  const [selectedFuneralHour, setSelecteFuneralHour] = useState(null);
  const [selectedFuneralMinute, setSelectedFuneralMinute] = useState(null);
  const [showFuneralHoursDropdown, setShowFuneralHoursDropdown] =
    useState(false);
  const [showFuneralMinutesDropdown, setShowFuneralMinutesDropdown] =
    useState(false);
  const [openEventTimePicker, setOpenEventTimePicker] = useState(null);
  const [isDeathReportConfirmed, setIsDeathReportConfirmed] = useState(false);
  const [uploadedDeathReport, setUploadedDeathReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataExists, setDataExists] = useState(false);
  const [obituaryResponse, setObituaryResponse] = useState(null);
  const cardRefs = useRef([]);

  const [events, setEvents] = useState([
    {
      eventName: "",
      eventLocation: "",
      eventDate: null,
      eventHour: null,
      eventMinute: null,
    },
  ]);

  const addEvent = () => {
    setEvents([
      ...events,
      {
        eventName: "",
        eventLocation: "",
        eventDate: null,
        eventHour: null,
        eventMinute: null,
      },
    ]);
  };

  const updateEvent = (index, key, value) => {
    const updatedEvents = [...events];
    updatedEvents[index][key] = value;
    setEvents(updatedEvents);
  };

  const [activeDivtype, setActiveDivType] = useState("KORAK 1");

  const hours = Array.from({ length: 24 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 4 }, (_, i) => i * 15);

  const funeralDropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.error("You must be logged in to access this page.");
      router.push("/registrationpage");
    } else {
      const parsedUser = JSON.parse(storedUser);
      console.log(parsedUser, "ParsedUser");
    }
  }, [router]);
  const [cemeteries, setCemeteries] = useState([]);
  useEffect(() => {
    console.log(inputValueFuneralCemetery, "=================");
  }, [inputValueFuneralCemetery]);
  const funeralCemeteryOptions = [
    ...(cemeteries?.map((item) => ({
      value: item.id,
      place: `${item.name}`,
    })) || []),
    {
      value: "pokopalisce",
      place: "Pokopališče",
    },
  ];

  const selectedCemeteryLabel =
    funeralCemeteryOptions.find(
      (cemetery) => cemetery.value === inputValueFuneralCemetery
    )?.place || "";

  useEffect(() => {
    if (selectedCity.trim() !== "") {
      getCemeteries(selectedCity);
    }
  }, [selectedCity]);
  const getCemeteries = async (query) => {
    try {
      let queryParams = {};
      queryParams.city = query;
      const response = await cemetryService.getCemeteries(queryParams);
      setCemeteries(response.cemetries);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        funeralDropdownRef.current &&
        !funeralDropdownRef.current.contains(event.target)
      ) {
        setShowFuneralHoursDropdown(false);
        setShowFuneralMinutesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (obituaryResponse?.id) {
      handleUploadTemplateCards();
    }
  }, [obituaryResponse]);

  const handleRegionSelect = (item) => {
    setSelectedRegion(item);
  };

  const handleCitySelect = (item) => {
    setSelectedCity(item);
  };

  const handleNameInput = (event) => {
    setInputValueName(event.target.value);
  };

  const handleSirNameInput = (event) => {
    setInputValueSirName(event.target.value);
  };

  const handleEndInput = (event) => {
    setInputValueEnd(event.target.value);
  };

  const handleGenderInput = (event) => {
    setInputValueGender(event.target.value);
  };

  const handleFuneralEndSelect = (item) => {
    setInputValueFuneralEnd(item);
  };

  const handleFuneralCemeterySelect = (item) => {
    setInputValueFuneralCemetery(item.value);
  };

  const togglePicker = (type) => {
    setOpenPicker(openPicker === type ? null : type);
  };

  const toggleEventTimePicker = (type) => {
    setOpenEventTimePicker(openEventTimePicker === type ? null : type);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadedPicture(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const toggleCheckbox = () => {
    setIsDeathReportConfirmed(!isDeathReportConfirmed);
  };

  const handleDeathReportUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedDeathReport(file);
    }
  };

  const validateFields = () => {
    const fullNameLength =
      (inputValueName?.length || 0) + (inputValueSirName?.length || 0);
    if (fullNameLength > 25) {
      toast.error("Full name (Name + Surname) must not exceed 25 characters.");

      return false;
    }

    if (
      !inputValueName ||
      !inputValueSirName ||
      !inputValueEnd ||
      !selectedRegion ||
      !selectedCity ||
      !inputValueGender ||
      !birthDate ||
      !deathDate
    ) {
      toast.error("All fields are mandatory.");
      return false;
    }

    if (!isDeathReportConfirmed) {
      toast.error("You must confirm the death report exists.");
      return false;
    }

    if (!uploadedDeathReport && user?.role !== "funeral_company") {
      toast.error("Death report is mandatory for non-funeral company users.");
      return false;
    }

    return true;
  };

  const handleUploadTemplateCards = async () => {
    setLoading(true);

    // Wait for cardRefs to be populated
    let attempts = 0;
    while (!cardRefs.current && attempts < 10) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      attempts++;
    }
    if (!obituaryResponse || !cardRefs.current) return;
    const { images, pdfs } = await getCardsImageAndPdfsFiles(cardRefs.current);
    const formData = new FormData();
    images.forEach((image) => {
      formData.append(`cardImages`, image);
    });
    pdfs.forEach((pdf) => {
      formData.append(`cardPdfs`, pdf);
    });
    const response = await obituaryService.uploadObituaryTemplateCards(
      obituaryResponse.id,
      formData
    );
    if (response.error) {
      toast.error(response.error || "Failed to upload template cards.");
      return;
    }
    toast.success("Template cards uploaded successfully!");
    setLoading(false);
    router.push(`/m/${obituaryResponse.slugKey}`);
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    try {
      setLoading(true);

      const formData = new FormData();

      const formattedBirthDate = birthDate
        ? birthDate.toISOString().split("T")[0]
        : null;
      const formattedDeathDate = deathDate
        ? deathDate.toISOString().split("T")[0]
        : null;

      const fullName = `${inputValueName} ${inputValueSirName}`;
      const obituaryText =
        inputValueGender === "Male"
          ? `Sporočamo žalostno vest, da nas je zapustil naš predragi ${fullName}. Vsi njegovi.`
          : `Sporočamo žalostno vest, da nas je zapustila naša predraga ${fullName}. Vsi njeni.  `;

      let formattedFuneralTimestamp = null;
      if (
        funeralDate &&
        selectedFuneralHour !== null &&
        selectedFuneralMinute !== null
      ) {
        formattedFuneralTimestamp = new Date(
          funeralDate.getFullYear(),
          funeralDate.getMonth(),
          funeralDate.getDate(),
          selectedFuneralHour,
          selectedFuneralMinute
        ).toISOString();
      }

      formData.append("name", inputValueName);
      formData.append("sirName", inputValueSirName);
      formData.append("location", inputValueEnd);
      formData.append("region", selectedRegion);
      formData.append("city", selectedCity);
      formData.append("gender", inputValueGender);

      formData.append("birthDate", formattedBirthDate);
      formData.append("deathDate", formattedDeathDate);
      formData.append("funeralLocation", selectedCity);
      if (inputValueFuneralCemetery !== "pokopalisce") {
        formData.append("funeralCemetery", inputValueFuneralCemetery);
      }

      formattedFuneralTimestamp &&
        formData.append("funeralTimestamp", formattedFuneralTimestamp);
      formData.append("deathReportExists", isDeathReportConfirmed);
      formData.append("events", JSON.stringify(events));
      formData.append("obituary", obituaryText);

      if (uploadedPicture) {
        formData.append("picture", uploadedPicture);
      }
      if (uploadedDeathReport) {
        formData.append("deathReport", uploadedDeathReport);
      }
      let response;
      if (dataExists) {
        // Update existing obituary
        response = await obituaryService.updateObituary(user.id, formData);
        toast.success("Obituary updated successfully!");
      } else {
        // Create new obituary
        response = await obituaryService.createObituary(formData);
        toast.success("Obituary created successfully!");
      }

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      toast.success("Obituary created successfully!");

      const responseDeathDate = new Date(response.deathDate);
      const deathDateFormatted = `${responseDeathDate
        .getDate()
        .toString()
        .padStart(2, "0")}${(responseDeathDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}${responseDeathDate
        .getFullYear()
        .toString()
        .slice(2)}`;

      setObituaryResponse(response);
    } catch (error) {
      console.error("Error creating obituary:", error);
      toast.error(
        error?.response?.data?.error ||
          "Failed to create obituary. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const [startDecade, setStartDecade] = useState(1950);

  const handleDecadeClick = (decadeStart) => {
    const updatedDate = new Date(
      decadeStart,
      birthDate.getMonth(),
      birthDate.getDate()
    );
    setBirthDate(updatedDate); // Update year
    setStartDecade(decadeStart); // Update the selected decade
  };

  const getDecadeRange = (startYear) => {
    const isLastDecade = startYear === 2020;
    return isLastDecade ? "2020 - 2025" : `${startYear} - ${startYear + 9}`;
  };

  return (
    <>
      {obituaryResponse?.id && (
        <MobileCards cardRefs={cardRefs} data={obituaryResponse} />
      )}
      {loading && <BackDropLoader />}
      {/* Main Container for all the content and background */}
      <div
        className={`w-full min-h-screen pt-[98px] pb-[123px] bg-[url('/img_obituary_bg.avif')] mx-auto bg-center bg-cover flex flex-col`}
      >
        {/* Container for top texts */}
        <div className=" mx-auto desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[79px] h-auto">
          <div className="text-[40px] mobile:text-[32px] mobile:font-variation-customOpt32 font-normal font-variation-customOpt40 text-center leading-[44px] text-[#1E2125]">
            Dodaj osmrtnico
          </div>
        </div>

        {/* Container for top three buttons */}
        <div className="mx-auto mt-[44px] flex flex-row gap-[6px] mobile:flex-wrap mobile:justify-center">
          <div
            className={`${
              activeDivtype === "KORAK 1"
                ? "shadow-custom-light-dark-box-image rounded-[10px] border-[#0A85C2] border-[2px] bg-gradient-to-b from-[#FFFFFF] to-[#DADADA] text-[16px] font-semibold leading-[24px] font-variation-customOpt16 text-[#1E2125]"
                : "text-[16px] font-sourcesans text-[#1E2125] bg-gradient-to-b from-[#E3E8EC] to-[#FFFFFF10] rounded-[8px] shadow-custom-dark-to-white leading-[24px] font-variation-customOpt16 border-[1px] border-[#FFFFFF]"
            }`}
          >
            <button
              onClick={() => setActiveDivType("KORAK 1")}
              className="px-[40px] py-[12px] h-full w-[150px]"
            >
              KORAK 1
            </button>
          </div>

          <div
            className={`${
              activeDivtype === "KORAK 2"
                ? "shadow-custom-light-dark-box-image rounded-[10px] border-[#0A85C2] font-semibold border-[2px] bg-gradient-to-b from-[#FFFFFF] to-[#DADADA] text-[16px] leading-[24px] font-variation-customOpt16 text-[#1E2125]"
                : "text-[16px] font-sourcesans text-[#1E2125] bg-gradient-to-b from-[#E3E8EC] to-[#FFFFFF10] rounded-[8px] shadow-custom-dark-to-white leading-[24px] font-variation-customOpt16 border-[1px] border-[#FFFFFF]"
            }`}
          >
            <button
              onClick={() => setActiveDivType("KORAK 2")}
              className="px-[40px] py-[12px] h-full w-[150px] "
            >
              KORAK 2
            </button>
          </div>

          <div
            className={`${
              activeDivtype === "POTRDITEV"
                ? "shadow-custom-light-dark-box-image rounded-[10px] border-[#0A85C2] font-semibold border-[2px] bg-gradient-to-b from-[#FFFFFF] to-[#DADADA] text-[16px] leading-[24px] font-variation-customOpt16 text-[#1E2125]"
                : "text-[16px] font-sourcesans text-[#1E2125] rounded-[8px] bg-gradient-to-b from-[#E3E8EC] to-[#FFFFFF10] shadow-custom-dark-to-white leading-[24px] font-variation-customOpt16 border-[1px] border-[#FFFFFF]"
            }`}
          >
            <button
              onClick={() => setActiveDivType("POTRDITEV")}
              className="w-[150px] py-[12px] h-full"
            >
              POTRDITEV
            </button>
          </div>
        </div>

        {/*Main Container for details */}
        <div
          className={`px-[50px] mx-auto desktop:max-w-[650px]  desktop:w-full tablet:max-w-[650px]  tablet:w-full ${
            activeDivtype === "KOREK 1"
              ? "pt-[61px] pb-[44px]"
              : "pt-[45px] pb-[39px]"
          } mt-[51px] flex flex-col
     bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30] backdrop-blur rounded-2xl border-[4px] border-[#FFFFFF] shadow-lg
     mobile:px-[15px] mobile:min-w-[360px] mobile:mt-[39px] mobile:pb-[23px]
     `}
        >
          {/* Inside main conatiner data of first button */}
          {activeDivtype === "KORAK 1" && (
            <div className="flex flex-col justify-start  mobile:max-w-[310px] mobile:w-full">
              {/* {/ Container for text fields /} */}

              {/* {/ First text field and title /} */}
              <div className="text-[#6D778E] mobile:text-[#414B5A] text-[16px] mobile:text-[14px] font-normal leading-[24px] font-variation-customOpt14">
                IME
              </div>
              <div className="h-[38px] mobile:h-[20px] mt-[4px] bg-[#6D778E] mobile:mt-0 mobile:bg-transparent desktop:shadow-custom-dark-to-white tablet:shadow-custom-dark-to-white mobile:border-b-2 mobile:boder-[#D4D4D4] max-w-[364px] ">
                <input
                  type="text"
                  value={inputValueName}
                  onChange={handleNameInput}
                  className="w-full px-[6px] h-full bg-[#F1FFFE] mobile:bg-transparent focus:outline-none text-[#105CCF] text-[18px] font-medium desktop:border desktop:border-[#6D778E38] tablet:border tablet:border-[#6D778E38]"
                />
              </div>

              {/* {/ Second text field and title /} */}
              <div className="text-[#6D778E] mobile:text-[#414B5A] text-[16px] mobile:text-[14px] mt-4 font-normal leading-[24px] font-variation-customOpt14">
                PRIIMEK
              </div>
              <div className="h-[38px] mobile:h-5 mt-[4px] bg-[#6D778E] mobile:mt-0 mobile:bg-transparent desktop:shadow-custom-dark-to-white tablet:shadow-custom-dark-to-white mobile:border-b-2 mobile:boder-[#D4D4D4] max-w-[364px]">
                <input
                  type="text"
                  value={inputValueSirName}
                  onChange={handleSirNameInput}
                  className="w-full px-[6px] h-full  bg-[#F1FFFE] mobile:bg-transparent focus:outline-none text-[#105CCF] text-[18px] font-medium desktop:border desktop:border-[#6D778E38] tablet:border tablet:border-[#6D778E38]"
                />
              </div>

              {/* {/ Third text field and title /} */}
              <div className="flex mobile:hidden text-[#6D778E] text-[16px] mt-4 font-normal leading-[24px] font-variation-customOpt14">
                KRAJ{" "}
                <span className="text-[#ACAAAA] text-[12px] font-variation-customOpt12 font-normal ml-1">
                  {" "}
                  (to bo prikazano)
                </span>
              </div>

              <div className="hidden mobile:flex text-[#414B5A] text-[14px] mt-4 font-normal leading-[24px] font-variation-customOpt14">
                KRAJ{" "}
                <span className="text-[#ACAAAA] text-[12px] font-variation-customOpt12 hidden mobile:flex font-normal ml-1">
                  {" "}
                  (kar naj bo vpisano)
                </span>
              </div>
              <div className="h-[38px] mobile:h-5 mt-[4px] bg-[#6D778E]  mobile:mt-0 mobile:bg-transparent desktop:shadow-custom-dark-to-white tablet:shadow-custom-dark-to-white mobile:border-b-2 mobile:boder-[#D4D4D4] max-w-[364px]">
                <input
                  type="text"
                  value={inputValueEnd}
                  onChange={handleEndInput}
                  className="w-full px-[6px] h-full  bg-[#F1FFFE] mobile:bg-transparent focus:outline-none text-[#105CCF] text-[18px] font-medium desktop:border desktop:border-[#6D778E38] tablet:border tablet:border-[#6D778E38]"
                />
              </div>

              <div className="text-[#6D778E] flex mobile:hidden font-normal text-[16px] mt-[20px] leading-[24px] font-variation-customOpt14">
                MESTO{" "}
                <span className="text-[#ACAAAA] text-[12px] font-variation-customOpt12 font-normal ml-1">
                  {" "}
                  (da bo uvrščen/a v seznam pravega mesta; to ne bo prikazano)
                </span>
              </div>

              <div className="hidden mobile:flex text-[#414B5A] font-normal text-[14px] mt-[20px] leading-[24px] font-variation-customOpt14">
                MESTO{" "}
                <span className="text-[#ACAAAA] text-[12px] font-variation-customOpt12 font-normal ml-1">
                  {" "}
                  (ne bo prikazano)
                </span>
              </div>

              <div className="max-w-[364px]">
                <DropdownWithSearch
                  onSelectRegion={handleRegionSelect}
                  onSelectCity={handleCitySelect}
                  selectedRegion={selectedRegion}
                  selectedCity={selectedCity}
                />
              </div>

              <div className="flex  mt-8">
                <div className="text-[#6D778E] mobile:text-[#414B5A] text-[16px] mobile:text-[14px] font-normal font-variation-customOpt14">
                  Spol
                </div>

                <div className="items-center flex ml-14">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      className="hidden"
                      onChange={handleGenderInput} // setGender updates the state for gender
                    />
                    <span className="w-5 h-5 flex items-center justify-center border-2 border-[#6D778E] rounded-full">
                      {inputValueGender === "Male" && (
                        <div className="w-3 h-3 bg-[#0A85C2] rounded-full"></div>
                      )}
                    </span>
                    <div className="text-[#6D778E] mobile:text-[#6D778E] font-normal text-[16px] ml-2 leading-[24px] font-variation-customOpt16">
                      Moški
                    </div>
                  </label>
                </div>

                <div className="items-center flex ml-8">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      className="hidden"
                      onChange={handleGenderInput} // setGender updates the state for gender
                    />
                    <span className="w-5 h-5 flex items-center justify-center border-2 border-[#6D778E] rounded-full">
                      {inputValueGender === "Female" && (
                        <div className="w-3 h-3 bg-[#0A85C2] rounded-full"></div>
                      )}
                    </span>
                    <div className="text-[#6D778E] mobile:text-[#6D778E] font-normal text-[16px] ml-2 leading-[24px] font-variation-customOpt16">
                      Ženski
                    </div>
                  </label>
                </div>
              </div>

              <div className="text-[#ACAAAA] text-[13px] font-light leading-[15px] mt-2 ">
                Spol dodajamo izključno zaradi ženske in moške oblike v besedilu
                osmrtnice. Umrl / umrla ipd.
              </div>

              <div className="flex flex-col mt-8">
                <div className="text-[#6D778E] mobile:text-[#414B5A] font-normal text-[14px] leading-[24px] font-variation-customOpt14">
                  DATUM ROJSTVA
                </div>

                <div className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap">
                  <ModalDropBox
                    placeholder={`Dan`}
                    onClick={() => {
                      togglePicker("birthDay");
                    }}
                    isSelectText={birthDate ? birthDate.getDate() : ""}
                  />

                  {openPicker === "birthDay" && (
                    <div className="absolute mt-12 bg-white border rounded shadow-lg z-10 text-red">
                      <DatePicker
                        selected={birthDate}
                        onChange={(date) => {
                          setBirthDate(date); // Update only day
                          setOpenPicker(null); // Close picker after selection
                        }}
                        dateFormat="d" // Show only day
                        inline // Display as dropdown
                        onClickOutside={() => {
                          setOpenPicker(null);
                        }}
                        locale={sl}
                        openToDate={birthDate || new Date(1951, 0, 1)}
                      />
                    </div>
                  )}

                  <div className="flex relative">
                    <ModalDropBox
                      placeholder={`Mesec`}
                      onClick={() => {
                        togglePicker("birthMonth");
                      }}
                      isSelectText={birthDate ? getMonth(birthDate) + 1 : ""}
                    />

                    {openPicker === "birthMonth" && (
                      <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                        <DatePicker
                          selected={birthDate}
                          onChange={(date) => {
                            const currentDate = birthDate || new Date();
                            const updatedDate = new Date(
                              currentDate.getFullYear(),
                              date.getMonth(),
                              currentDate.getDate()
                            );
                            setBirthDate(updatedDate); // Update only month
                            setOpenPicker(null); // Close picker after selection
                          }}
                          dateFormat="MM" // Show only month
                          showMonthYearPicker // Show only month selection
                          inline
                          onClickOutside={() => {
                            setOpenPicker(null);
                          }}
                          locale={sl}
                          openToDate={birthDate || new Date(1951, 0, 1)}
                        />
                      </div>
                    )}
                  </div>

                  <ModalDropBox
                    placeholder={`Leto`}
                    onClick={() => {
                      togglePicker("birthYear");
                    }}
                    isSelectText={birthDate ? getYear(birthDate) : ""}
                  />

                  {openPicker === "birthYear" && (
                    <div className="absolute mt-12 left-[56%] bg-white border rounded shadow-lg z-10">
                      <DatePicker
                        selected={birthDate}
                        onChange={(date) => {
                          const currentDate = birthDate || new Date();
                          const updatedDate = new Date(
                            date.getFullYear(),
                            currentDate.getMonth(),
                            currentDate.getDate()
                          );
                          setBirthDate(updatedDate); // Update only year
                          setOpenPicker(null); // Close picker after selection
                        }}
                        dateFormat="yyyy" // Show only year
                        showYearPicker // Show only year selection
                        inline
                        onClickOutside={() => {
                          setOpenPicker(null);
                        }}
                        locale={sl}
                        yearItemNumber={10}
                        openToDate={birthDate || new Date(1951, 0, 1)}
                        maxDate={new Date(new Date().getFullYear(), 11, 31)}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* {/ 8th title /} */}
              <div className="flex flex-col mt-8">
                <div className="text-[#6D778E] mobile:text-[#414B5A] font-normal text-[14px] leading-[24px] font-variation-customOpt14">
                  DAN SLOVESA
                </div>

                <div className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap">
                  <ModalDropBox
                    placeholder={`Dan`}
                    onClick={() => {
                      togglePicker("deathDay");
                    }}
                    isSelectText={deathDate ? deathDate.getDate() : ""}
                  />

                  {openPicker === "deathDay" && (
                    <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                      <DatePicker
                        selected={deathDate}
                        onChange={(date) => {
                          setDeathDate(date); // Update only day
                          setOpenPicker(null); // Close picker after selection
                        }}
                        dateFormat="d" // Show only day
                        inline // Display as dropdown
                        maxDate={new Date()}
                        onClickOutside={() => {
                          setOpenPicker(null);
                        }}
                        locale={sl}
                        openToDate={deathDate || new Date()}
                      />
                    </div>
                  )}

                  <div className="flex relative">
                    <ModalDropBox
                      placeholder={`Mesec`}
                      onClick={() => {
                        togglePicker("deathMonth");
                      }}
                      isSelectText={deathDate ? getMonth(deathDate) + 1 : ""}
                    />

                    {openPicker === "deathMonth" && (
                      <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                        <DatePicker
                          selected={deathDate}
                          onChange={(date) => {
                            const currentDate = deathDate || new Date();
                            const updatedDate = new Date(
                              currentDate.getFullYear(),
                              date.getMonth(),
                              currentDate.getDate()
                            );
                            setDeathDate(updatedDate); // Update only month
                            setOpenPicker(null); // Close picker after selection
                          }}
                          dateFormat="MM" // Show only month
                          showMonthYearPicker // Show only month selection
                          inline
                          maxDate={new Date()} // Restrict to current year
                          onClickOutside={() => {
                            setOpenPicker(null);
                          }}
                          locale={sl}
                          openToDate={deathDate || new Date()}
                        />
                      </div>
                    )}
                  </div>

                  <ModalDropBox
                    placeholder={`Leto`}
                    onClick={() => {
                      togglePicker("deathYear");
                    }}
                    isSelectText={deathDate ? getYear(deathDate) : ""}
                  />

                  {openPicker === "deathYear" && (
                    <div className="absolute mt-12 left-[56%] bg-white border rounded shadow-lg z-10">
                      <DatePicker
                        selected={deathDate}
                        onChange={(date) => {
                          const currentDate = deathDate || new Date();
                          const updatedDate = new Date(
                            date.getFullYear(),
                            currentDate.getMonth(),
                            currentDate.getDate()
                          );
                          setDeathDate(updatedDate); // Update only year
                          setOpenPicker(null); // Close picker after selection
                        }}
                        dateFormat="yyyy" // Show only year
                        showYearPicker // Show only year selection
                        inline
                        maxDate={new Date()}
                        onClickOutside={() => {
                          setOpenPicker(null);
                        }}
                        locale={sl}
                        openToDate={deathDate || new Date()}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center  mt-[53.6px]">
                <div className=" items-center justify-center">
                  {uploadedImage ? (
                    <Image
                      src={uploadedImage}
                      alt="Uploaded preview"
                      width={95}
                      height={123}
                      className="rounded-lg"
                      layout="intrinsic"
                    />
                  ) : (
                    <Image
                      src={"/img_profile.png"}
                      alt="Default placeholder"
                      width={95}
                      height={123}
                      className="rounded-lg"
                      layout="intrinsic"
                    />
                  )}
                </div>

                <label
                  htmlFor="upload-button"
                  className="cursor-pointer bg-[#ffffff90] text-[16px] text-[#6D778E] py-[10px] px-[30px] border-[#6D778E60] border-[1px] rounded-lg ml-8"
                >
                  Dodaj sliko
                  <input
                    id="upload-button"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              <div
                className="flex py-3 px-16 rounded-lg border-[2px] border-[#0A85C2] bg-gradient-to-b to-[#E3E8EC] from-[#FFFFFF] text-[16px] text-[#1E2125] self-end mobile:justify-center mobile:items-center mobile:w-full mt-8 cursor-pointer"
                onClick={() => setActiveDivType("KORAK 2")}
              >
                Naprej
              </div>
            </div>
          )}

          {activeDivtype === "KORAK 2" && (
            <div className="flex flex-col justify-start  mobile:max-w-[310px] mobile:w-full ">
              <div className="flex flex-col">
                <div
                  className="text-[#6D778E] mobile:text-[14px] mobile:leading-[16px] mobile:font-variation-customOpt14
             font-normal text-[16px] leading-[24px] font-variation-customOpt14"
                >
                  POGREB
                </div>

                <div className="flex w-full gap-9 mobile:gap-5 mobile:flex-col">
                  <div className="flex w-[231px] mobile:w-full py-2 justify-between border-b-[1px] text-[#105CCF] border-[#D4D4D4]">
                    {selectedCity}
                  </div>

                  <div className="flex w-[231px] mobile:w-full py-2 justify-between border-b-[1px] border-[#D4D4D4]">
                    <Dropdown
                      label="Izberi pokopališče"
                      isFromObituary={"obituaryform"}
                      data={funeralCemeteryOptions}
                      selectedValue={selectedCemeteryLabel}
                      onSelect={handleFuneralCemeterySelect}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-8">
                <div className="text-[#6D778E] font-normal mobile:text-[14px] mobile:font-variation-customOpt14 text-[16px] leading-[24px] font-variation-customOpt16">
                  DAN POGREBA
                </div>

                <div className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap">
                  <ModalDropBox
                    placeholder={`Dan`}
                    onClick={() => {
                      togglePicker("funeralDay");
                    }}
                    isSelectText={funeralDate ? funeralDate.getDate() : ""}
                  />

                  {openPicker === "funeralDay" && (
                    <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                      <DatePicker
                        selected={funeralDate}
                        onChange={(date) => {
                          setFuneralDate(date); // Update only day
                          setOpenPicker(null); // Close picker after selection
                        }}
                        dateFormat="d" // Show only day
                        inline // Display as dropdown
                        minDate={new Date()}
                        onClickOutside={() => {
                          setOpenPicker(null);
                        }}
                        locale={sl}
                        openToDate={funeralDate || new Date()}
                      />
                    </div>
                  )}

                  <div className="flex relative">
                    <ModalDropBox
                      placeholder={`Mesec`}
                      onClick={() => {
                        togglePicker("funeralMonth");
                      }}
                      isSelectText={
                        funeralDate ? getMonth(funeralDate) + 1 : ""
                      }
                    />

                    {openPicker === "funeralMonth" && (
                      <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                        <DatePicker
                          selected={funeralDate}
                          onChange={(date) => {
                            const currentDate = funeralDate || new Date();
                            const updatedDate = new Date(
                              currentDate.getFullYear(),
                              date.getMonth(),
                              currentDate.getDate()
                            );
                            setFuneralDate(updatedDate); // Update only month
                            setOpenPicker(null); // Close picker after selection
                          }}
                          dateFormat="MM/yyyy" // Show only month
                          showMonthYearPicker // Show only month selection
                          inline
                          minDate={new Date()}
                          onClickOutside={() => {
                            setOpenPicker(null);
                          }}
                          locale={sl}
                          openToDate={funeralDate || new Date()}
                        />
                      </div>
                    )}
                  </div>

                  <ModalDropBox
                    placeholder={`Leto`}
                    onClick={() => {
                      togglePicker("funeralYear");
                    }}
                    isSelectText={funeralDate ? getYear(funeralDate) : ""}
                  />

                  {openPicker === "funeralYear" && (
                    <div className="absolute mt-12 left-[56%] bg-white border rounded shadow-lg z-10">
                      <DatePicker
                        selected={funeralDate}
                        onChange={(date) => {
                          const currentDate = funeralDate || new Date();
                          const updatedDate = new Date(
                            date.getFullYear(),
                            currentDate.getMonth(),
                            currentDate.getDate()
                          );
                          setFuneralDate(updatedDate); // Update only year
                          setOpenPicker(null); // Close picker after selection
                        }}
                        dateFormat="yyyy" // Show only year
                        showYearPicker // Show only year selection
                        inline
                        minDate={new Date()}
                        onClickOutside={() => {
                          setOpenPicker(null);
                        }}
                        locale={sl}
                        openToDate={funeralDate || new Date()}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col mt-8">
                <div className="text-[#6D778E] font-normal mobile:text-[14px] mobile:font-variation-customOpt14 text-[16px] leading-[24px] font-variation-customOpt16">
                  ČAS POGREBA
                </div>

                <div
                  className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap"
                  ref={funeralDropdownRef}
                >
                  <ModalDropBox
                    placeholder={"Ura"}
                    onClick={() => {
                      setOpenPicker(false);
                      setShowFuneralHoursDropdown(!showFuneralHoursDropdown);
                      setShowFuneralMinutesDropdown(false); // Hide minutes dropdown if open
                    }}
                    isSelectText={
                      selectedFuneralHour
                        ? `${selectedFuneralHour.toString().padStart(2, "0")}`
                        : "Ura:"
                    }
                  />

                  {showFuneralHoursDropdown && (
                    <div className="bg-white border overflow-y-scroll mt-12 h-[210px] absolute border-gray-300 rounded-md m-2 w-32 z-10">
                      <div className="flex p-2 flex-col">
                        {hours
                          .filter((hour) => hour >= 7 && hour <= 19)
                          .map((hour) => (
                            <div
                              key={hour}
                              className="cursor-pointer hover:bg-gray-100 px-2 py-1 text-black"
                              onClick={() => {
                                setShowFuneralHoursDropdown(false);
                                setSelecteFuneralHour(hour);
                              }}
                            >
                              {hour.toString().padStart(2, "0")}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  <div className="flex relative ">
                    <ModalDropBox
                      placeholder={"Min"}
                      onClick={() => {
                        setOpenPicker(false);
                        setShowFuneralMinutesDropdown(
                          !showFuneralMinutesDropdown
                        );
                        setShowFuneralHoursDropdown(false); // Hide hours dropdown if open
                      }}
                      isSelectText={
                        selectedFuneralMinute !== null &&
                        selectedFuneralMinute !== undefined
                          ? `${selectedFuneralMinute
                              .toString()
                              .padStart(2, "0")}`
                          : "Min:"
                      }
                    />

                    {showFuneralMinutesDropdown && (
                      <div className="bg-white border absolute z-10 mt-12 overflow-y-scroll h-[150px] text-black border-gray-300 rounded-md p-2 w-32">
                        {minutes.map((minute) => (
                          <div
                            key={minute}
                            className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                            onClick={() => {
                              console.log(`Selected minute: ${minute}`);
                              setShowFuneralMinutesDropdown(false);
                              setSelectedFuneralMinute(minute);
                            }}
                          >
                            {minute.toString().padStart(2, "0")}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col self-end mt-12">
                <div className="text-[#6D778E] mobile:text-[#414B5A] font-normal text-[14px] leading-[16px] font-variation-customOpt14">
                  DODAJ ŠE DRUG DOGODEK
                </div>

                {events.map((event, index) => (
                  <div
                    key={index}
                    className="flex flex-col border-b border-gray-400 pb-8"
                  >
                    <div className="text-[#6D778E] flex mobile:hidden mobile:text-[#6D778E] text-[14px] font-normal leading-[24px] font-variation-customOpt16 mt-7">
                      Poimenuj dogodek, kot naj bo vpisan
                    </div>

                    <div className=" hidden mobile:flex mobile:text-[#6D778E] text-[16px] font-normal leading-[24px] font-variation-customOpt16 mt-7">
                      Poimenuj dogodek{" "}
                      <span className="text-[#ACAAAA] text-[13px] font-variation-customOpt13 ml-1">
                        (npr. Spominska maša...)
                      </span>
                    </div>

                    <div className="h-[38px] flex mobile:hidden mt-[4px] bg-[#6D778E] border border-rgba(109, 119, 142, 0.22) desktop:shadow-custom-dark-to-white tablet:shadow-custom-dark-to-white w-full">
                      <input
                        type="text"
                        placeholder="(npr. Zadnje slovo, Spominska maša, ipd)"
                        value={event.eventName}
                        onChange={(e) =>
                          updateEvent(index, "eventName", e.target.value)
                        }
                        className="w-full px-[6px] h-full placeholder:text-[13px] placeholder:font-light bg-[#F1FFFE] mobile:bg-transparent focus:outline-none text-[#105CCF] text-[18px] font-medium"
                      />
                    </div>
                    <div className="h-[38px] hidden mobile:flex mobile:h-[20px] mt-[4px] bg-[#6D778E] mobile:mt-0 mobile:bg-transparent desktop:shadow-custom-dark-to-white tablet:shadow-custom-dark-to-white mobile:border-b-2 mobile:border-[#D4D4D4] w-full">
                      <input
                        type="text"
                        value={event.eventName}
                        onChange={(e) =>
                          updateEvent(index, "eventName", e.target.value)
                        }
                        className="w-full px-[6px] h-full placeholder:text-[13px] placeholder:font-light bg-[#F1FFFE] mobile:bg-transparent focus:outline-none text-[#105CCF] text-[18px] font-medium"
                      />
                    </div>

                    <div className="text-[#6D778E] flex mobile:hidden mobile:text-[#6D778E] text-[14px] font-normal leading-[24px] font-variation-customOpt16 mt-7">
                      KJE
                    </div>
                    <div className="text-[#6D778E] hidden mobile:flex text-[16px] font-normal leading-[24px] font-variation-customOpt16 mt-7">
                      Kje{" "}
                      <span className="text-[#ACAAAA] text-[13px] ml-1">
                        (npr. Pokopališče Gabrsko, Trbovlje)
                      </span>
                    </div>
                    <div className="h-[38px] flex mobile:hidden mobile:h-[20px] mt-[4px] bg-[#6D778E] mobile:mt-0 mobile:bg-transparent desktop:shadow-custom-dark-to-white tablet:shadow-custom-dark-to-white mobile:border-b-2 mobile:boder-[#D4D4D4] w-full">
                      <input
                        type="text"
                        placeholder="(npr. Mrliška vežica št x, Pokopališče Gabrsko, Trbovlje)"
                        value={event.eventLocation}
                        onChange={(e) =>
                          updateEvent(index, "eventLocation", e.target.value)
                        }
                        className="w-full px-[6px] h-full placeholder:text-[13px] placeholder:font-light bg-[#F1FFFE] mobile:bg-transparent focus:outline-none text-[#105CCF] text-[18px] font-medium"
                      />
                    </div>
                    <div className="h-[38px] hidden mobile:flex mobile:h-[20px] mt-[4px] bg-[#6D778E] mobile:mt-0 mobile:bg-transparent desktop:shadow-custom-dark-to-white tablet:shadow-custom-dark-to-white mobile:border-b-2 mobile:border-[#D4D4D4] w-full">
                      <input
                        type="text"
                        value={event.eventLocation}
                        onChange={(e) =>
                          updateEvent(index, "eventLocation", e.target.value)
                        }
                        className="w-full px-[6px] h-full placeholder:text-[13px] placeholder:font-light bg-[#F1FFFE] mobile:bg-transparent focus:outline-none text-[#105CCF] text-[18px] font-medium"
                      />
                    </div>

                    <div className="flex flex-col mt-8">
                      <div className="text-[#6D778E] mobile:text-[#414B5A] font-normal text-[14px] leading-[24px] font-variation-customOpt14">
                        DAN DOGODKA
                      </div>

                      <div className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap">
                        <ModalDropBox
                          placeholder={`Dan`}
                          onClick={() => {
                            togglePicker(`eventDay_${index}`);
                          }}
                          isSelectText={
                            event.eventDate ? event.eventDate.getDate() : ""
                          }
                        />

                        {openPicker === `eventDay_${index}` && (
                          <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                            <DatePicker
                              selected={event.eventDate}
                              onChange={(date) => {
                                updateEvent(index, "eventDate", date);
                                setOpenPicker(null);
                              }}
                              dateFormat="d" // Show only day
                              inline // Display as dropdown
                              minDate={new Date()}
                              openToDate={event.eventDate || new Date()}
                              onClickOutside={() => {
                                setOpenPicker(null);
                              }}
                              locale={sl}
                            />
                          </div>
                        )}

                        <div className="flex relative">
                          <ModalDropBox
                            placeholder={`Mesec`}
                            onClick={() => {
                              togglePicker(`eventMonth_${index}`);
                            }}
                            isSelectText={
                              event.eventDate
                                ? getMonth(event.eventDate) + 1
                                : ""
                            }
                          />

                          {openPicker === `eventMonth_${index}` && (
                            <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                              <DatePicker
                                selected={event.eventDate}
                                onChange={(date) => {
                                  const currentDate =
                                    event.eventDate || new Date();
                                  const updatedDate = new Date(
                                    currentDate.getFullYear(),
                                    date.getMonth(),
                                    currentDate.getDate()
                                  );
                                  updateEvent(index, "eventDate", updatedDate);
                                  setOpenPicker(null);
                                }}
                                dateFormat="MM" // Show only month
                                showMonthYearPicker // Show only month selection
                                inline
                                minDate={new Date()} // Restrict to current year
                                onClickOutside={() => {
                                  setOpenPicker(null);
                                }}
                                locale={sl}
                                openToDate={event.eventDate || new Date()}
                              />
                            </div>
                          )}
                        </div>

                        <ModalDropBox
                          placeholder={`Leto`}
                          onClick={() => {
                            togglePicker(`eventYear_${index}`);
                          }}
                          isSelectText={
                            event.eventDate ? getYear(event.eventDate) : ""
                          }
                        />

                        {openPicker === `eventYear_${index}` && (
                          <div className="absolute mt-12 left-[56%] bg-white border rounded shadow-lg z-10">
                            <DatePicker
                              selected={event.eventDate}
                              onChange={(date) => {
                                const currentDate =
                                  event.eventDate || new Date();
                                const updatedDate = new Date(
                                  date.getFullYear(),
                                  currentDate.getMonth(),
                                  currentDate.getDate()
                                );
                                updateEvent(index, "eventDate", updatedDate);
                                setOpenPicker(null);
                              }}
                              dateFormat="yyyy" // Show only year
                              showYearPicker // Show only year selection
                              inline
                              minDate={new Date()}
                              onClickOutside={() => {
                                setOpenPicker(null);
                              }}
                              locale={sl}
                              openToDate={event.eventDate || new Date()}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col mt-8">
                      <div className="text-[#6D778E] font-normal text-[14px] leading-[24px] font-variation-customOpt14">
                        ČAS DOGODKA
                      </div>

                      <div className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap">
                        <ModalDropBox
                          placeholder={"Ura"}
                          onClick={() => {
                            toggleEventTimePicker(`eventHour_${index}`);
                          }}
                          isSelectText={
                            event.eventHour
                              ? `${event.eventHour.toString().padStart(2, "0")}`
                              : "Ura:"
                          }
                        />

                        {openEventTimePicker === `eventHour_${index}` && (
                          <div className="bg-white border overflow-y-scroll mt-12 h-[210px] absolute border-gray-300 rounded-md m-2 w-32 z-10">
                            <div className="flex p-2 flex-col">
                              {hours
                                .filter((hour) => hour >= 7 && hour <= 19)
                                .map((hour) => (
                                  <div
                                    key={hour}
                                    className="cursor-pointer hover:bg-gray-100 px-2 py-1 text-black"
                                    onClick={() => {
                                      console.log("Test");
                                      updateEvent(index, "eventHour", hour);
                                      setOpenEventTimePicker(null);
                                    }}
                                  >
                                    {hour.toString().padStart(2, "0")}
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                        <div className="flex relative ">
                          <ModalDropBox
                            placeholder={"Min"}
                            onClick={() => {
                              toggleEventTimePicker(`eventMinute_${index}`);
                            }}
                            isSelectText={
                              event.eventMinute !== null &&
                              event.eventMinute !== undefined
                                ? `${event.eventMinute
                                    .toString()
                                    .padStart(2, "0")}`
                                : "Min:"
                            }
                          />

                          {openEventTimePicker === `eventMinute_${index}` && (
                            <div className="bg-white border absolute z-10 mt-12 overflow-y-scroll h-[150px] text-black border-gray-300 rounded-md p-2 w-32">
                              {minutes.map((minute) => (
                                <div
                                  key={minute}
                                  className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                                  onClick={() => {
                                    updateEvent(index, "eventMinute", minute);
                                    setOpenEventTimePicker(null);
                                  }}
                                >
                                  {minute.toString().padStart(2, "0")}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="cursor-pointer items-center desktop:justify-center tablet:justify-center mobile:justify-end flex mt-8 "
                onClick={addEvent}
              >
                <button className="w-5 h-5 ">
                  <Image
                    src={"/img_add.png"}
                    width={20}
                    height={20}
                    alt="check image"
                  />
                </button>

                <div className="text-[#1E2125] mobile:text-[#414B5A] font-normal text-[14px] ml-4 mobile:ml-1 leading-[24px] font-variation-customOpt14">
                  DODAJ ŠE EN DOGODEK
                </div>
              </div>

              <div className="flex flex-row w-full justify-end space-x-2 mobile:flex-col">
                <div
                  className="flex py-3 px-3 mobile:py-3 justify-center mobile:px-4 shadow-custom-light-dark rounded-lg border-[2px] border-[#6D778E42] bg-gradient-to-br to-[#FFFFFF] from-[#FFFFFF30] text-[16px] text-[#6D778E] self-end mobile:self-start mt-8 w-[170px] cursor-pointer"
                  onClick={() => setActiveDivType("KORAK 1")}
                >
                  Na prejšnjo stran
                </div>
                <div
                  className="flex py-3 px-3 mobile:w-full tablet:justify-center desktop:justify-center mobile:justify-center mobile:items-center rounded-lg border-[2px] border-[#0A85C2] bg-gradient-to-b to-[#E3E8EC] from-[#FFFFFF] text-[16px] text-[#1E2125] self-end mt-8 mobile:mt-3 w-[170px] transition duration-200 ease-in-out cursor-pointer transform-gpu active:scale-95"
                  onClick={() => setActiveDivType("POTRDITEV")}
                >
                  Naprej
                </div>
              </div>
            </div>
          )}

          {activeDivtype === "POTRDITEV" && (
            <div className="flex flex-col justify-start mobile:max-w-[310px] mobile:w-full gap-8">
              {/* {/ {/ Container for text fields /} /} */}

              <div>
                {/* {/ {/ 1st title /} /} */}
                <div className="flex flex-col">
                  <div className="text-[#6D778E] mobile:text-[#1E2125] text-[16px] mobile:text-[14px]  py-3 border-b-[1px] border-[#D4D4D4] font-normal leading-[16px] font-variation-customOpt14">
                    OSEBNI PODATKI
                  </div>
                </div>

                {/* {/ {/ 2nd title /} /} */}
                <div className="flex items-center py-2 mt-8 mobile:mt-3 gap-10 mobile:gap-6 flex-row mobile:flex-col">
                  <div
                    className="rounded-xl  
          shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] "
                  >
                    {uploadedImage ? (
                      <Image
                        src={uploadedImage}
                        alt="Uploaded preview"
                        width={1000}
                        height={1000}
                        className="h-[130px] w-[95px] bg-center rounded-lg"
                        layout="intrinsic"
                      />
                    ) : (
                      <Image
                        src={"/img_profile.png"}
                        alt="Default placeholder"
                        width={95}
                        height={130}
                        className="h-[130px] w-[95px] bg-center rounded-lg"
                        layout="intrinsic"
                      />
                    )}
                  </div>

                  <div className="flex flex-col space-y-6 mobile:self-start desktop:w-[401px] tablet:w-[401px]">
                    <div className="flex flex-row  mobile:flex-col mobile:space-y-2">
                      <div className="flex flex-col w-[222px]">
                        <div className="text-[14px] text-[#ACAAAA] font-normal">
                          Ime in priimek
                        </div>
                        <div
                          style={{
                            fontSize: 18,
                            color: "#1E2125",
                            fontWeight: 400,
                          }}
                        >
                          {inputValueName
                            ? inputValueName.charAt(0).toUpperCase() +
                              inputValueName.slice(1)
                            : ""}{" "}
                          {inputValueSirName
                            ? inputValueSirName.charAt(0).toUpperCase() +
                              inputValueSirName.slice(1)
                            : ""}
                        </div>
                      </div>

                      <div className="flex flex-col pl-3 w-[221px]">
                        <div className="text-[14px] text-[#ACAAAA] font-normal">
                          Kraj
                        </div>
                        <div
                          style={{
                            fontSize: 18,
                            color: "#1E2125",
                            fontWeight: 400,
                          }}
                        >
                          {inputValueEnd
                            ? inputValueEnd.charAt(0).toUpperCase() +
                              inputValueEnd.slice(1)
                            : ""}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between  mobile:flex-col">
                      <div className="flex space-x-16 mobile:space-x-0 mobile:space-y-3 mobile:flex-col">
                        <div className="flex flex-col">
                          <div className="text-[14px] text-[#ACAAAA] font-normal">
                            Dan rojstva
                          </div>
                          <div
                            style={{
                              fontSize: 18,
                              color: "#1E2125",
                              fontWeight: 400,
                            }}
                          >
                            {birthDate
                              ? birthDate.toLocaleDateString("sl-SI", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                })
                              : ""}
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="text-[14px] text-[#ACAAAA] font-normal">
                            Dan slovesa
                          </div>
                          <div
                            style={{
                              fontSize: 18,
                              color: "#1E2125",
                              fontWeight: 400,
                            }}
                          >
                            {deathDate
                              ? deathDate.toLocaleDateString("sl-SI", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                })
                              : ""}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col mobile:mt-3">
                        <div className="text-[14px] text-[#ACAAAA] font-normal">
                          Spol
                        </div>
                        <div
                          style={{
                            fontSize: 18,
                            color: "#1E2125",
                            fontWeight: 400,
                          }}
                        >
                          {inputValueGender === "Male"
                            ? "M"
                            : inputValueGender === "Female"
                            ? "Ž"
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col">
                  <div className="text-[#6D778E] mobile:text-[#1E2125] text-[16px] mobile:text-[14px] py-3 border-b-[1px] border-[#D4D4D4] font-normal leading-[16px] font-variation-customOpt14 mt-7 mobile:mt-0">
                    DOGODKI
                  </div>
                </div>

                <div className="flex mt-9 flex-col gap-y-8">
                  {/* {/ {/ first container of text /} /} */}
                  {funeralDate && (
                    <div className="flex flex-col">
                      <div className="text-[16px] text-[#1E2125] font-normal leading-6">
                        Pogreb
                      </div>

                      {/* {/ {/ text row container /} /} */}
                      <div className="flex flex-row space-x-6 mobile:space-x-0 mobile:flex-col">
                        <div className="mobile:flex-row flex mobile:mt-1">
                          <div className="text-[18px] font-normal text-[#1E2125] mobile:text-[16px]">
                            {funeralDate
                              ? funeralDate.toLocaleDateString("sl-SI", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                })
                              : ""}
                          </div>

                          <div className="mobile:ml-6 text-[18px] font-normal text-[#1E2125] mobile:text-[16px] ml-3">
                            {selectedFuneralHour !== null &&
                            selectedFuneralHour !== undefined &&
                            selectedFuneralMinute !== null &&
                            selectedFuneralMinute !== undefined
                              ? `${selectedFuneralHour
                                  .toString()
                                  .padStart(2, "0")}:${selectedFuneralMinute
                                  .toString()
                                  .padStart(2, "0")}`
                              : ""}
                          </div>
                        </div>

                        <div className="text-[18px] font-normal text-[#1E2125] mobile:text-[16px] mobile:mt-1">
                          {inputValueFuneralCemetery || "Pokopališče"}
                          {inputValueFuneralEnd
                            ? `, ${inputValueFuneralEnd}`
                            : ""}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col">
                    {events
                      .filter(
                        (event) =>
                          event.eventName &&
                          event.eventLocation &&
                          event.eventDate
                      )
                      .sort((a, b) => {
                        const dateA = new Date(a.eventDate).setHours(
                          a.eventHour || 0,
                          a.eventMinute || 0
                        );
                        const dateB = new Date(b.eventDate).setHours(
                          b.eventHour || 0,
                          b.eventMinute || 0
                        );
                        return dateA - dateB;
                      })
                      .map((event, index) => (
                        <div key={index} className="my-4">
                          {" "}
                          {/* Added key prop */}
                          <div className="text-[16px] text-[#1E2125] font-normal leading-6">
                            {event.eventName}
                          </div>
                          <div
                            index={index}
                            className="flex flex-row space-x-6 mobile:space-x-0 mobile:flex-col"
                          >
                            <div className="mobile:flex-row flex mobile:mt-1 desktop:w-[30%] tablet:w-[30%]">
                              <div className="text-[18px] font-normal text-[#1E2125] mobile:text-[16px]">
                                {event.eventDate
                                  ? event.eventDate.toLocaleDateString(
                                      "sl-SI",
                                      {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                      }
                                    )
                                  : ""}
                              </div>

                              <div className="mobile:ml-6 text-[18px] font-normal text-[#1E2125] mobile:text-[16px] ml-3">
                                {event.eventHour !== null &&
                                event.eventHour !== undefined &&
                                event.eventMinute !== null &&
                                event.eventMinute !== undefined
                                  ? `${event.eventHour
                                      .toString()
                                      .padStart(2, "0")}:${event.eventMinute
                                      .toString()
                                      .padStart(2, "0")}`
                                  : ""}
                              </div>
                            </div>

                            <div className="text-[18px] font-normal text-[#1E2125] mobile:text-[16px] mobile:mt-1">
                              {event.eventLocation || ""}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="flex mobile:hidden mt-16 flex-row  gap-4 ">
                  <div
                    className="relative w-10 h-8 cursor-pointer"
                    onClick={toggleCheckbox}
                  >
                    <div className="absolute inset-0 border-[1px] border-[#6D778E]"></div>
                    {isDeathReportConfirmed && (
                      <div className="absolute inset-[3px] bg-[#0A85C2]"></div>
                    )}
                  </div>

                  <div className="flex flex-col mt-1 space-y-1">
                    <div className="text-[16px] text-[#1E2125] leading-[22px] font-normal">
                      Potrdi, da Poročilo o smrti obstaja{" "}
                    </div>
                    <div className="text-[14px] text-[#ACAAAA] font-normal">
                      (pogrebna podjetja samo potrdijo; drugi ga morajo nujno
                      priložiti, sicer osmrtnica ne bo objavljena)
                    </div>
                  </div>
                </div>

                <div className="hidden mobile:flex mt-12 justiy-center gap-4 flex-col">
                  <div className="flex flex-row  items-center">
                    <div
                      className="relative w-6 h-6 cursor-pointer"
                      onClick={toggleCheckbox}
                    >
                      <div className="absolute inset-0 border-[1px] border-[#6D778E]"></div>
                      {isDeathReportConfirmed && (
                        <div className="absolute inset-[3px] bg-[#0A85C2]"></div>
                      )}
                    </div>

                    <div className="text-[16px] text-[#1E2125] leading-[22px] font-normal">
                      Potrdi, da Poročilo o smrti obstaja{" "}
                    </div>
                  </div>

                  <div className="text-[14px] mt-1 text-[#ACAAAA] font-normal">
                    (pogrebna podjetja samo potrdijo; drugi ga morajo nujno
                    priložiti, sicer osmrtnica ne bo objavljena)
                  </div>
                </div>

                {/* {!uploadedDeathReport && ( */}
                <div className="flex py-3 px-6 mobile:py-3 mt-8 mobile:px-4 w-[250px] mobile:w-full rounded-lg border-[2px] border-[#6D778E42] bg-gradient-to-br to-[#FFFFFF] from-[#FFFFFF30] mobile:items-center mobile:justify-center">
                  <label
                    htmlFor="death-report-upload"
                    className="flex flex-row space-x-2 cursor-pointer"
                  >
                    <Image
                      src="/icon_plus_round.png"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                      alt="add button icon"
                    />
                    <div className="flex text-[16px] text-[#1E2125] self-start mobile:self-start ">
                      Prilepi Poročilo o smrti
                    </div>
                    <input
                      id="death-report-upload"
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      className="hidden"
                      onChange={handleDeathReportUpload}
                    />
                  </label>
                </div>
                {/* )} */}

                {uploadedDeathReport && (
                  <div className="mt-4 text-[#1E2125] text-[14px]">
                    <span className="font-bold">Uploaded File:</span>{" "}
                    {uploadedDeathReport.name}
                  </div>
                )}

                <div className="flex flex-row w-full space-x-8 mobile:space-y-2 mobile:space-x-0 mobile:flex-col  mt-16 mobile:mt-12">
                  <div
                    onClick={() => setActiveDivType("KORAK 2")}
                    className="px-6  py-3 mobile:w-[148px] mobile:px-0 mobile:py-3 text-[#6D778E] text-[16px] items-center justify-center flex shadow-custom-shadow rounded-lg border-[1px] border-[#6D778E42] bg-gradient-to-br to-[#FFFFFF] from-[#FFFFFF30] cursor-pointer"
                  >
                    Na prejšnjo stran
                  </div>
                  <div
                    onClick={!loading ? handleSubmit : null} // Disable onClick when isLoading is true
                    className={`flex flex-1 px-[90px] py-3 mobile:px-10 text-center justify-center items-center rounded-lg shadow-custom-dual text-[16px] cursor-pointer ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed" // Disabled styles
                        : "bg-gradient-to-b from-[#0d94e8] to-[#1860a3] text-[#ffffff]" // Enabled styles
                    }`}
                  >
                    {loading ? "Shranjujem..." : "Objavi novo osmrtnico"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddObituary;
