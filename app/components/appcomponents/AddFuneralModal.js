"use client";
import React, { useEffect, useRef, useState } from "react";

import obituaryService from "@/services/obituary-service";
import Select from "react-select";

import ModalDropBox from "./ModalDropBox";
import regionsAndCities from "@/utils/regionAndCities";
import cemetryService from "@/services/cemetry-service";

import { sl } from "date-fns/locale";

import DatePicker from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import toast from "react-hot-toast";

const AddFuneralModal = ({ setModalVisible }) => {
  const [obituaries, setObituaries] = useState([]);
  const [cemeteries, setCemeteries] = useState([]);

  const [obituaryInputValue, setObituaryInputValue] = useState("");
  const [cityInputValue, setCityInputValue] = useState("");
  const [cemeteryInputValue, setCemeteryInputValue] = useState("");
  const [debouncedObituaryValue, setDebouncedObituaryValue] = useState("");
  const [debouncedCemeteryValue, setDebouncedCemeteryValue] = useState("");
  const [selectedObituary, setSelectedObituary] = useState(null);
  const [selectedCemetery, setSelectedCemetery] = useState(null);
  const [funeralDate, setFuneralDate] = useState(null);
  const [openPicker, setOpenPicker] = useState(null);
  const [selectedFuneralHour, setSelecteFuneralHour] = useState(null);
  const [selectedFuneralMinute, setSelectedFuneralMinute] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [showFuneralHoursDropdown, setShowFuneralHoursDropdown] =
    useState(false);
  const [showFuneralMinutesDropdown, setShowFuneralMinutesDropdown] =
    useState(false);
  const hours = Array.from({ length: 24 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 4 }, (_, i) => i * 15);
  const togglePicker = (type) => {
    setOpenPicker(openPicker === type ? null : type);
  };
  const funeralDropdownRef = useRef(null);

  const getObituaries = async (query) => {
    try {
      let queryParams = {};
      queryParams.name = query;
      const response = await obituaryService.getObituary(queryParams);
      setObituaries(response.obituaries);
    } catch (error) {
      console.log(error);
    }
  };

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
  const obituaryData = obituaries?.map((item) => ({
    value: item.id,
    label: `${item.name} ${item.sirName}`,
  }));
  const cemeteryData = [
    ...(cemeteries?.map((item) => ({
      value: item.id,
      label: `${item.name}`,
    })) || []),
    {
      value: "pokopalisce",
      label: "Pokopališče",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedObituaryValue(obituaryInputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [obituaryInputValue]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCemeteryValue(selectedCity);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCity]);
  useEffect(() => {
    if (debouncedCemeteryValue.trim() !== "") {
      getCemeteries(debouncedCemeteryValue);
    }
  }, [debouncedCemeteryValue]);

  useEffect(() => {
    if (debouncedObituaryValue.trim() !== "") {
      getObituaries(debouncedObituaryValue);
    }
  }, [debouncedObituaryValue]);
  const handleObituaryChange = (selectedOption) => {
    setSelectedObituary(selectedOption.value);
  };
  const handleCemeteryChange = (selectedOption) => {
    setSelectedCemetery(selectedOption.value);
  };

  const handleObituaryInputChange = (input) => {
    setObituaryInputValue(input);
  };
  const handleCemeteryInputChange = (input) => {
    setCemeteryInputValue(input);
  };

  const handleCityInputChange = (input) => {
    setCityInputValue(input);
  };
  const flattenedOptions = Object.keys(regionsAndCities)
    .flatMap((region) =>
      regionsAndCities[region].map((city) => ({
        label: city,
        value: city,
        region,
      }))
    )
    .sort((a, b) => a.label.localeCompare(b.label, "sl"));

  const validateFields = () => {
    if (
      selectedObituary === null ||
      selectedCemetery === null ||
      selectedCity === null ||
      funeralDate === null ||
      selectedFuneralHour === null ||
      selectedFuneralMinute === null
    ) {
      toast.error("Please fill complete data");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!validateFields()) return;

      const formData = new FormData();
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

      formData.append("funeralLocation", selectedCity);
      if (isRealCemetery(selectedCemetery)) {
        formData.append("funeralCemetery", selectedCemetery);
      }

      formData.append("funeralTimestamp", formattedFuneralTimestamp);
      let response;

      response = await obituaryService.updateObituary(
        selectedObituary,
        formData
      );
      toast.success("Obituary updated successfully!");

      if (response?.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }
    } catch (error) {
      if (error?.response?.status === 404) {
        toast.error("You cannot update other company's obituary");
      } else {
        console.error("Error creating obituary:", error);
        toast.error(
          error?.response?.data?.error ||
            "Failed to create obituary. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };
  const isRealCemetery = (id) => {
    const isReal = cemeteries.some((cemetery) => cemetery.id === id);
    return isReal;
  };

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
          <div
            className="ms-24 mb-2 text-[#1E2125] text-[28px] text-normal"
            style={{ fontFamily: "Roboto Flex" }}
          >
            Dodaj pogreb
          </div>
          <div className="w-[450px] h-[549px] bg-[#E1E6EC] rounded-[16px] border-[1px] border-[#6D778E] mx-auto p-10">
            <div className="mb-4 flex flex-col ">
              <label
                className="font-normal text-base text-[#414B5A]"
                style={{ fontFamily: "Roboto Flex" }}
              >
                Poišči osmrtnico
              </label>

              <div className="w-full mx-auto">
                <Select
                  options={obituaryData}
                  onChange={handleObituaryChange}
                  onInputChange={handleObituaryInputChange}
                  value={
                    selectedObituary
                      ? obituaryData.find(
                          (option) => option.id === selectedObituary
                        )
                      : null
                  }
                  inputValue={obituaryInputValue}
                  placeholder={""}
                  isSearchable
                  filterOption={(option, obituaryInputValue) =>
                    option.label
                      .toLowerCase()
                      .startsWith(obituaryInputValue.toLowerCase())
                  }
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: "#F2F8FF66",
                      border: "1px solid #d4d4d4",
                      borderRadius: "6px",
                      boxShadow:
                        "inset 3px 3px 5px rgba(166, 171, 189, 1), inset -3px -3px 3px rgba(250, 251, 255, 0.46)",
                      "&:hover": { borderColor: "#105ccf" },
                      minHeight: "36px",
                    }),

                    dropdownIndicator: (base) => ({
                      ...base,
                      color: "#7d7d7d", // Arrow color
                      "&:hover": { color: "#808080" }, // Arrow hover color
                    }),
                    indicatorSeparator: () => ({
                      display: "none", // Remove the separator line
                    }),
                    menu: (base) => ({
                      ...base,
                      borderRadius: "4px", // Rounded menu
                      marginTop: "2px", // Minimal gap
                      zIndex: 10,
                    }),
                    option: (base, { isFocused }) => ({
                      ...base,
                      backgroundColor: isFocused ? "#e8f5f4" : "#fff", // Highlight on hover
                      color: "#333", // Text color
                      cursor: "pointer",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "#105CCF",
                      fontSize: "18px",
                    }),
                  }}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col ">
              <label
                className="font-normal text-base text-[#414B5A]"
                style={{ fontFamily: "Roboto Flex" }}
              >
                Pogreb - občina
              </label>

              <div className="w-full mx-auto">
                <Select
                  options={flattenedOptions}
                  value={
                    selectedCity
                      ? flattenedOptions.find(
                          (option) => option.value === selectedCity
                        )
                      : null
                  }
                  onInputChange={handleCityInputChange}
                  onChange={(selectedOption) =>
                    setSelectedCity(selectedOption?.value)
                  }
                  inputValue={cityInputValue}
                  isSearchable
                  placeholder={""}
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: "#F2F8FF66",
                      border: "1px solid #d4d4d4",
                      borderRadius: "6px",
                      boxShadow:
                        "inset 3px 3px 5px rgba(166, 171, 189, 1), inset -3px -3px 3px rgba(250, 251, 255, 0.46)",
                      "&:hover": { borderColor: "#105ccf" },
                      minHeight: "36px",
                    }),

                    dropdownIndicator: (base) => ({
                      ...base,
                      color: "#7d7d7d", // Arrow color
                      "&:hover": { color: "#808080" }, // Arrow hover color
                    }),
                    indicatorSeparator: () => ({
                      display: "none", // Remove the separator line
                    }),
                    menu: (base) => ({
                      ...base,
                      borderRadius: "4px", // Rounded menu
                      marginTop: "2px", // Minimal gap
                      zIndex: 10,
                    }),
                    option: (base, { isFocused }) => ({
                      ...base,
                      backgroundColor: isFocused ? "#e8f5f4" : "#fff", // Highlight on hover
                      color: "#333", // Text color
                      cursor: "pointer",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "#105CCF",
                      fontSize: "18px",
                    }),
                  }}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col ">
              <label
                className="font-normal text-base text-[#414B5A]"
                style={{ fontFamily: "Roboto Flex" }}
              >
                Pokopališče
              </label>

              <div className="w-full mx-auto">
                <Select
                  options={cemeteryData} // Use flattened options without grouping
                  onChange={handleCemeteryChange}
                  onInputChange={handleCemeteryInputChange}
                  value={
                    selectedCemetery
                      ? cemeteryData.find(
                          (option) => option.id === selectedCemetery
                        )
                      : null
                  }
                  inputValue={cemeteryInputValue}
                  placeholder={""}
                  isSearchable
                  filterOption={(option, cemeteryInputValue) =>
                    option.label
                      .toLowerCase()
                      .startsWith(cemeteryInputValue.toLowerCase())
                  }
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: "#F2F8FF66",
                      border: "1px solid #d4d4d4",
                      borderRadius: "6px",
                      boxShadow:
                        "inset 3px 3px 5px rgba(166, 171, 189, 1), inset -3px -3px 3px rgba(250, 251, 255, 0.46)",
                      "&:hover": { borderColor: "#105ccf" },
                      minHeight: "36px",
                    }),

                    dropdownIndicator: (base) => ({
                      ...base,
                      color: "#7d7d7d", // Arrow color
                      "&:hover": { color: "#808080" }, // Arrow hover color
                    }),
                    indicatorSeparator: () => ({
                      display: "none", // Remove the separator line
                    }),
                    menu: (base) => ({
                      ...base,
                      borderRadius: "4px", // Rounded menu
                      marginTop: "2px", // Minimal gap
                      zIndex: 10,
                    }),
                    option: (base, { isFocused }) => ({
                      ...base,
                      backgroundColor: isFocused ? "#e8f5f4" : "#fff", // Highlight on hover
                      color: "#333", // Text color
                      cursor: "pointer",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "#105CCF",
                      fontSize: "18px",
                    }),
                  }}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col ">
              <label
                className="font-normal text-base text-[#414B5A]"
                style={{ fontFamily: "Roboto Flex" }}
              >
                DAN POGREBA
              </label>

              <div className="flex relative gap-x-[32px]">
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
                        setFuneralDate(date);
                        setOpenPicker(null);
                      }}
                      dateFormat="d"
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

                <div className="flex relative">
                  <ModalDropBox
                    placeholder={`Mesec`}
                    onClick={() => {
                      togglePicker("funeralMonth");
                    }}
                    isSelectText={funeralDate ? getMonth(funeralDate) + 1 : ""}
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
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <label
                className="font-normal text-base text-[#414B5A]"
                style={{ fontFamily: "Roboto Flex" }}
              >
                ČAS POGREBA
              </label>

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
                        ? `${selectedFuneralMinute.toString().padStart(2, "0")}`
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
            <div className="my-10 flex flex-col">
              <button
                className={`flex flex-1 px-[90px] py-3 mobile:px-10 text-center justify-center items-center rounded-lg shadow-custom-dual text-[16px] cursor-pointer ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed" // Disabled styles
                    : "bg-gradient-to-b from-[#0d94e8] to-[#1860a3] text-[#ffffff]" // Enabled styles
                }`}
                type="button"
                onClick={handleSubmit}
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

export default AddFuneralModal;
