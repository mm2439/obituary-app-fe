"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import DropdownWithCustomDesign from "./DropdownWithSearch";
import obituaryService from "@/services/obituary-service";
import Select from "react-select";
import cardService from "@/services/card-service";
import toast from "react-hot-toast";
import keeperService from "@/services/keeper-service";
import { useRouter } from "next/navigation";

const OrbetoryFormComp = ({
  setModalVisible,
  showForms,
  focusInput,
  setParentEmail,
  setExpiry,
  setObituaryId,
}) => {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [obituaries, setObituaries] = useState([]);
  const [search, setSearch] = useState(null);
  const [showSelect, setShowSelect] = useState(false);
  const [selectedObituary, setSelectedObituary] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [cardSelected, setCardSelected] = useState(null);
  const [KeeperExpiry, setKeeperExpiry] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [debouncedValue, setDebouncedValue] = useState("");

  const getObituaries = async (query) => {
    try {
      let queryParams = {};
      queryParams.name = query;
      const today = new Date().toISOString();
      queryParams.date = today;
      queryParams.city = user?.city;
      console.log(queryParams, "here------------");

      const response = await obituaryService.getObituary(queryParams);
      setObituaries(response.obituaries);
    } catch (error) {
      console.log(error);
    }
  };
  const data = obituaries?.map((item) => ({
    value: item.id,
    label: `${item.name} ${item.sirName}`,
  }));
  const handleChange = (selectedOption) => {
    setSelectedObituary(selectedOption);
    setObituaryId(selectedOption.value);
    console.log("Selected Obituary:", selectedOption);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);
  useEffect(() => {
    if (debouncedValue.trim() !== "") {
      getObituaries(debouncedValue);
    }
  }, [debouncedValue]);
  const handleInputChange = (input) => {
    setInputValue(input);
  };

  const handleCardChange = (selectedOption) => {
    setCardSelected(selectedOption);
  };
  const handleKeeperExpiry = (selectedOption) => {
    setKeeperExpiry(selectedOption);
    setExpiry(selectedOption.value);
  };

  const submitMobileCard = async () => {
    try {
      if (!validateData()) return;

      const response = await cardService.assignCard({
        obituaryId: selectedObituary.value,
        cardId: cardSelected.value,
        email,
      });
      toast.success("Card is sent to user");
    } catch (error) {
      if (error?.response?.status === 404) {
        toast.error("No Such User Found");
      } else if (error?.response?.status === 409) {
        toast.error("User already has this card");
      } else {
        toast.error("Some Error Occured");
      }
    }
  };
  const cards = [
    {
      value: 1,
      label: `1. Info o pogrebu. Temna, s sliko`,
    },
    {
      value: 2,
      label: `2. Info o pogrebu. Bela, s križem`,
    },
    ,
    {
      value: 3,
      label: `3. Info o pogrebu. Modra, brez slike`,
    },
    ,
    {
      value: 4,
      label: `4. Sožalje`,
    },
    ,
    {
      value: 5,
      label: `5. Zahvala`,
    },
  ];
  const KeeperData = [
    {
      value: 1,
      label: `1. Skrbnik – tedenski`,
      isDisabled: true,
    },
    {
      value: 2,
      label: `2. Skrbnik – mesečni`,
    },
    ,
    {
      value: 3,
      label: `3. Skrbnik – letni`,
      isDisabled: true,
    },
    ,
    {
      value: 4,
      label: `4. Skrbnik – 6-letni`,
      isDisabled: true,
    },
    ,
  ];
  const getUpdatedCards = () => {
    const selected = obituaries.find(
      (option) => option.id === selectedObituary
    );

    const shouldDisableFirstThree = !selected?.funeralTimestamp;

    return cards.map((card, index) => ({
      ...card,
      isDisabled: shouldDisableFirstThree && index <= 3,
    }));
  };
  const validateData = () => {
    if (!selectedObituary) {
      toast.error("Please select an obituary.");
      return false;
    }
    if (!cardSelected) {
      toast.error("Please select a card.");
      return false;
    }
    if (!email || !email.trim()) {
      toast.error("Please enter an email.");
      return false;
    }
    return true;
  };

  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      setUser(JSON.parse(currUser));
      console.log(JSON.parse(currUser));
    }
  }, [router]);

  return (
    <div
      className="relative max-w-[1920px] min-h-[852px] max-h-[100vh] mobile:h-[731px] desktop:bg-[url('/login_ozadje.avif')] bg-[url('/ozadje_klop_tablica.avif')] 
    tablet: bg-cover bg-center w-full mx-auto desktop:mt-[80.02px] mobile:mt-[60px] tablet:mt-[79px] flex justify-center items-center
    "
    >
      <div
        className="mb-[30px] pt-[50px] mobile:pt-[20px] tablet:pt-[40px] pr-[91px] pl-[91px] w-[650px] h-[620px] max-h-[100%] mobile:mx-2 absolute flex flex-col
         bg-gray-300/30 backdrop-blur rounded-2xl border-[2px] border-[#FFFFFF] shadow-lg
         
         tablet:w-[550px] tablet:pr-[60px] tablet:pl-[60px]
         mobile:w-[336px] mobile:pr-[18px] mobile:pl-[18px] 
         "
      >
        <div
          className="text-[32px] font-variation-customOpt32  mx-auto text-[#1E2125] font-semibold mobile:text-[28px] 
        mobile:font-variation-customOpt28 mobile:font-[600px]"
        >
          Podarite
        </div>

        <div className="flex justify-between items-center w-full mt-[28px]">
          {selectedBtn === 1 ? (
            <button
              type="button"
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#DFF6FB_0%,_#82D9EB_100%)] border-[2px] border-[solid] border-[#0A85C2] font-sourcesans text-[16px] font-semibold leading-[24px] text-[rgba(22,_72,_120,_0.8)]
              tablet:w-[133px] tablet:font-normal
              mobile:w-[95px] mobile:font-normal
              "
            >
              Skrbnik
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSelectedBtn(1);
                showForms(true);
              }}
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)] border-[2px] border-[solid] border-[#FFFFFF] font-sourcesans text-[16px] font-normal leading-[24px] text-[#ffffff]
               tablet:w-[133px] tablet:font-normal
               mobile:w-[95px] mobile:font-normal
               "
            >
              Skrbnik
            </button>
          )}

          {selectedBtn === 2 ? (
            <button
              type="button"
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#DFF6FB_0%,_#82D9EB_100%)] border-[2px] border-[solid] border-[#0A85C2] font-sourcesans text-[16px] font-semibold leading-[24px] text-[rgba(22,_72,_120,_0.8)]
               tablet:w-[133px] tablet:font-normal
               mobile:w-[95px] mobile:font-normal
               mobile:pr-[25px] mobile:pl-[25px] mobile:leading-[16px] mobile:text-end  
               "
            >
              Mobi kartice
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSelectedBtn(2);
                showForms(false);
              }}
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)] border-[2px] border-[solid] border-[#FFFFFF] font-sourcesans text-[16px] font-normal leading-[24px] text-[#ffffff]
               tablet:w-[133px] tablet:font-normal
               mobile:w-[95px] mobile:font-normal
               mobile:pr-[25px] mobile:pl-[25px] mobile:leading-[16px] mobile:text-end
               "
            >
              Mobi kartice
            </button>
          )}

          {selectedBtn === 3 ? (
            <button
              type="button"
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#DFF6FB_0%,_#82D9EB_100%)] border-[2px] border-[solid] border-[#0A85C2] font-sourcesans text-[16px] font-semibold leading-[24px] text-[rgba(22,_72,_120,_0.8)]
               tablet:w-[133px] tablet:font-normal
               mobile:w-[95px] mobile:font-normal
               "
            >
              Posvetilo
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setSelectedBtn(3);
                showForms(false);
              }}
              className="w-[144px] h-[47px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)] border-[2px] border-[solid] border-[#FFFFFF] font-sourcesans text-[16px] font-normal leading-[24px] text-[#ffffff]
              tablet:w-[133px] tablet:font-normal
              mobile:w-[95px] mobile:font-normal
              "
            >
              Posvetilo
            </button>
          )}
        </div>

        {selectedBtn === 0 ? (
          <div className="w-full flex justify-center items-center mt-[50px]">
            <p
              className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#848484] m-[0]
             mobile:text-[14px]"
            >
              Izberi eno možnost
            </p>
          </div>
        ) : (
          ""
        )}

        {selectedBtn === 1 ? (
          <div className="mt-[50px]">
            <div>
              <div className="w-full mx-auto">
                <Select
                  options={data} // Use flattened options without grouping
                  onChange={handleChange}
                  onInputChange={handleInputChange}
                  value={
                    selectedObituary
                      ? obituaries.find(
                          (option) => option.id === selectedObituary
                        )
                      : null
                  }
                  inputValue={inputValue}
                  placeholder={"Pokojni/ca"}
                  isSearchable
                  filterOption={(option, inputValue) =>
                    option.label
                      .toLowerCase()
                      .startsWith(inputValue.toLowerCase())
                  }
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: `none`,
                      border: "1px solid #d4d4d4", // Light gray border
                      boxShadow: "none", // Remove default shadow
                      borderRadius: "4px",
                      "&:hover": { borderColor: "#105ccf" }, // Change border on hover
                      minHeight: "36px", // Match the dropdown height in the image
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
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div className="w-full mx-auto my-5">
              <Select
                options={KeeperData}
                onChange={handleKeeperExpiry}
                value={KeeperExpiry}
                placeholder=" Izberi Skrbnika"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: `none`,
                    border: "1px solid #d4d4d4", // Light gray border
                    boxShadow: "none", // Remove default shadow
                    borderRadius: "4px",
                    "&:hover": { borderColor: "#105ccf" }, // Change border on hover
                    minHeight: "36px", // Match the dropdown height in the image
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
                  option: (base, { isFocused, isDisabled }) => ({
                    ...base,
                    backgroundColor: isDisabled
                      ? "#f5f5f5" // Light gray bg for disabled options
                      : isFocused
                      ? "#e8f5f4" // Hover highlight for enabled options
                      : "#fff",
                    color: isDisabled ? "#999" : "#333", // Dimmed text for disabled
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    fontStyle: "normal",
                    opacity: isDisabled ? 0.7 : 1,
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "#105CCF",
                    fontSize: "18px",
                  }),
                }}
              />
            </div>

            <div className="mt-[15px]">
              <input
                placeholder="Vpiši e-pošto uporabnika"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#123597] font-medium text-[18px] leading-[24px] m-[0]
                mobile:placeholder:text-[14px] mobile:text-[14px]"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setParentEmail(e.target.value);
                }}
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div className="mt-[18px]">
              <p
                className="font-sourcesans text-[14px] font-normal leading-[16px] text-[#848484] m-[0]
              tablet:text-[14px]
              mobile:text-[12px]"
              >
                Op. če še ni registriran, naj se doma registrira s tem emailom,
                ki ga bo podal tukaj in v uporabniškem računu ga bo že čakal
                Skrbnik.{" "}
              </p>
            </div>

            <button
              onClick={() => {
                focusInput();
              }}
              type="button"
              className="mt-[53px] w-full h-[48px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)]   font-sourcesans text-[16px] font-medium leading-[24px] text-[#ffffff] m-[0]
               tablet:font-normal
               mobile:font-normal
               "
            >
              NAPREJ
            </button>

            <div className="flex justify-center items-center mt-[14px]">
              <p
                className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#3C3E41] m-[0]
              tablet:text-[14px]
              mobile:text-[14px]
              "
              >
                Skrbnik bo aktiviran takoj
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {selectedBtn === 2 ? (
          <div className="mt-[50px]">
            <div>
              <div className="w-full mx-auto">
                <Select
                  options={data}
                  onChange={handleChange}
                  onInputChange={handleInputChange}
                  value={
                    selectedObituary
                      ? obituaries.find(
                          (option) => option.id === selectedObituary
                        )
                      : null
                  }
                  inputValue={inputValue}
                  placeholder={"Pokojni/ca"}
                  isSearchable
                  filterOption={(option, inputValue) =>
                    option.label
                      .toLowerCase()
                      .startsWith(inputValue.toLowerCase())
                  }
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: `none`,
                      border: "1px solid #d4d4d4", // Light gray border
                      boxShadow: "none", // Remove default shadow
                      borderRadius: "4px",
                      "&:hover": { borderColor: "#105ccf" }, // Change border on hover
                      minHeight: "36px", // Match the dropdown height in the image
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
                      borderRadius: "4px",
                      marginTop: "2px",
                      zIndex: 10,
                    }),
                    option: (base, { isFocused }) => ({
                      ...base,
                      backgroundColor: isFocused ? "#e8f5f4" : "#fff",
                      color: "#333",
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

            <div className="w-full mx-auto my-5">
              <Select
                options={getUpdatedCards()}
                onChange={handleCardChange}
                value={cardSelected}
                placeholder="Izberi predlogo"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: `none`,
                    border: "1px solid #d4d4d4", // Light gray border
                    boxShadow: "none", // Remove default shadow
                    borderRadius: "4px",
                    "&:hover": { borderColor: "#105ccf" }, // Change border on hover
                    minHeight: "36px", // Match the dropdown height in the image
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
                  option: (base, { isFocused, isDisabled }) => ({
                    ...base,
                    backgroundColor: isDisabled
                      ? "#f5f5f5" // Light gray bg for disabled options
                      : isFocused
                      ? "#e8f5f4" // Hover highlight for enabled options
                      : "#fff",
                    color: isDisabled ? "#999" : "#333", // Dimmed text for disabled
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    fontStyle: "normal",
                    opacity: isDisabled ? 0.7 : 1,
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "#105CCF",
                    fontSize: "18px",
                  }),
                }}
              />
            </div>

            <div className="mt-[15px]">
              <input
                placeholder="Vpiši e-pošto uporabnika"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#105CCF] font-medium text-[18px] leading-[24px] m-[0]
                mobile:placeholder:text-[14px] mobile:text-[14px] px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div className="mt-[18px]">
              <p
                className="font-sourcesans text-[14px] font-normal leading-[16px] text-[#848484] m-[0]
              tablet:text-[14px]
              mobile:text-[12px]
              "
              >
                Op. če še ni registriran, naj se doma registrira s tem emailom,
                ki ga bo podal tukaj in v uporabniškem računu ga bo že čakala
                Mobi kartica.
              </p>
            </div>
            <button
              type="button"
              className="mt-[53px]  me-2 w-[25%] h-[48px] rounded-[8px] border-[2px] border-[#0A85C2] bg-[linear-gradient(180deg,_#DFF6FB_0%,_#82D9EB_100%)]   font-sourcesans text-[16px]  font-medium leading-[24px]  text-[rgba(22,_72,_120,_0.8)] m-[0]
             tablet:w-[133px] tablet:font-normal
              mobile:w-[95px] mobile:font-normal
               "
              onClick={() => {
                setModalVisible();
              }}
            >
              Vpiši pogreb
            </button>

            <button
              type="button"
              className="mt-[53px]   mobile:mb-10 mobile:mt[0] w-[70%] h-[48px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)]   font-sourcesans text-[16px] font-medium leading-[24px] text-[#ffffff] m-[0]
               tablet:w-[133px] tablet:font-normal
              mobile:w-[185px] mobile:font-normal



               "
              onClick={submitMobileCard}
            >
              POŠLJI
            </button>

            <div className="flex justify-center items-center mt-[14px]">
              <p
                className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#3C3E41] m-[0]
              tablet:text-[14px]
              mobile:text-[13px]
              "
              >
                Mobi kartica je že pripravljena za pošiljanje naprej
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {selectedBtn === 3 ? (
          <div className="mt-[69px] tablet:mt-[81px] mobile:mt-[69px]">
            <div>
              <input
                placeholder="Vpiši ime pokojnika / ce"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#123597] font-medium text-[18px] leading-[24px] m-[0]
                mobile:placeholder:text-[14px] mobile:text-[14px]"
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div className="mt-[15px]">
              <input
                placeholder="Vpiši email uporabnika"
                className="w-full h-[48px] bg-transparent focus:outline-none placeholder:font-sourcesans placeholder:text-[16px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#848484] text-[#123597] font-medium text-[18px] leading-[24px] m-[0]
                mobile:placeholder:text-[14px] mobile:text-[14px]"
              />
              <div className="w-full h-[1px] bg-[rgba(212,_212,_212,_1)]"></div>
            </div>

            <div className="mt-[33px]">
              <p
                className="font-sourcesans text-[14px] font-normal leading-[16px] text-[#848484] m-[0]
              tablet:text-[14px]
              mobile:text-[12px]
              "
              >
                Op. če še ni registriran, naj se doma registrira s tem emailom,
                ki ga bo podal tukaj in v uporabniškem računu ga bo že čakalo
                Posvetilo (ali Zadnji klic, Zahvala, lahko deli daljše zgodbe
                ali poezijo ali...)
              </p>
            </div>

            <button
              type="button"
              className="mt-[53px] w-full h-[48px] rounded-[8px] bg-[linear-gradient(180deg,_#0D94E8_0%,_#1860A3_100%)]   font-sourcesans text-[16px] font-medium leading-[24px] text-[#ffffff] m-[0]
               tablet:font-normal
               mobile:font-normal
               "
            >
              POŠLJI
            </button>

            <div className="flex justify-center items-center mt-[14px]">
              <p
                className="font-sourcesans text-[16px] font-normal leading-[24px] text-[#3C3E41] m-[0]
               tablet:text-[14px]
               mobile:text-[14px]
               "
              >
                S pisanjem posvetila lahko začne takoj
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default OrbetoryFormComp;
