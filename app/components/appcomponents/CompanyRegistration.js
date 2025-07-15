"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import strings from "../../strings";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { toast } from "react-hot-toast";
import userService from "@/services/user-service";

import regionsAndCities from "../../../utils/regionAndCities";

const CompanyRegistration = ({ set_Id, setModal }) => {
  const router = useRouter();

  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueFlowerShop, setInputValueFlowerShop] = useState("");
  const [inputValueCompany, setInputValueCompany] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");
  const [inputValueConfirmPassword, setInputValueConfirmPassword] =
    useState("");

  const [activeDivtype, setActiveDivType] = useState("Cvetličarne");

  const allRegionsOption = {
    place: "- Pokaži vse regije - ",
    id: "allRegions",
  };
  const allCitiesOption = { place: " - Pokaži vse občine - ", id: "allCities" };
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regionOptions = [
    allRegionsOption,
    ...Object.keys(regionsAndCities).map((region) => ({
      place: region,
      id: region,
    })),
  ];

  const cityOptions =
    selectedRegion && selectedRegion !== "allRegions"
      ? [
          allCitiesOption,
          ...regionsAndCities[selectedRegion].map((city) => ({
            place: city,
            id: city,
          })),
        ]
      : [
          allCitiesOption,
          ...Object.values(regionsAndCities)
            .flat()
            .map((city) => ({
              place: city,
              id: city,
            }))
            .sort((a, b) => a.place.localeCompare(b.place, "sl")),
        ];

  const handleRegionSelect = (item) => {
    if (item.id === "allRegions") {
      setSelectedRegion(null);
      setSelectedCity(null);
      return;
    }
    setSelectedRegion(item.place);
    setSelectedCity(null);
  };

  const handleCitySelect = (item) => {
    if (item.id === "allCities") {
      setSelectedCity(null);
      return;
    }
    setSelectedCity(item.place);

    const region = Object.keys(regionsAndCities).find((region) =>
      regionsAndCities[region].includes(item.place)
    );

    if (region) {
      setSelectedRegion(region);
    }
  };

  const handleEmailInput = (event) => {
    setInputValueEmail(event.target.value);
  };

  const handleFlowerShopInput = (event) => {
    setInputValueFlowerShop(event.target.value);
  };

  const handleValueCompanyInput = (event) => {
    setInputValueCompany(event.target.value);
  };

  const handleValuePasswordInput = (event) => {
    setInputValuePassword(event.target.value);
  };

  const handleValueConfirmPasswordInput = (event) => {
    setInputValueConfirmPassword(event.target.value);
  };

  const handleRegister = async () => {
    if (
      !inputValueEmail ||
      !inputValuePassword ||
      !inputValueConfirmPassword ||
      !selectedRegion ||
      !selectedCity ||
      !inputValueCompany ||
      !inputValueFlowerShop
    ) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValueEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&/()@?=*])[A-Za-z\d@!"#$%&/()?=*]{8,}$/;

    if (!passwordRegex.test(inputValuePassword)) {
      toast.error(
        "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }

    if (inputValuePassword !== inputValueConfirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const payload = {
        name: inputValueFlowerShop,
        email: inputValueEmail,
        password: inputValuePassword,
        company: inputValueCompany,
        region: selectedRegion,
        city: selectedCity,
        role: activeDivtype === "Cvetličarne" ? "Florist" : "Funeral",
      };

      const response = await userService.registerUser(payload);

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      toast.success(
        response.message || "Registration successful! You can now log in."
      );

      router.push("/registracija");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    // Main Container for all the content and background
    <div
      className={`w-full min-h-screen pt-[98px] pb-[123px] ${
        activeDivtype === "PogrebnaPodjetja"
          ? "bg-[url('/reg_pog.avif')]"
          : "bg-[url('/reg_cvetlicarne.avif')]"
      } mx-auto max-w-[1920px] bg-center bg-cover flex flex-col`}
    >
      {/* Container for top texts */}
      <div className=" mx-auto desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[79px] h-auto">
        <div className="font-sourceSerif text-[32px] text-center leading-[44px] font-variation-customOpt32 text-[#1E2125]">
          {strings.RegistracijaZaPodjetja}
        </div>
        <div className="text-[16px] text-center leading-[24px] mt-[10px] text-[#3C3E41] font-variation-customOpt16">
          {strings.PoOpravljeniRegistraciji}
        </div>
      </div>

      {/* Container for top two buttons */}
      <div className="mx-auto mt-[44px] flex flex-row gap-[24px]">
        <div
          className={`${
            activeDivtype === "Cvetličarne"
              ? "shadow-custom-light-dark-box-image rounded-[8px] border-[#0A85C2] border-[2px] bg-gradient-to-b from-[#FFFFFF] to-[#DADADA] text-[16px] leading-[24px] font-variation-customOpt16 text-[#1E2125]"
              : "text-[16px] text-[#6D778E] bg-white/50 rounded-[8px] shadow-custom-dark-to-white leading-[24px] font-variation-customOpt16 border-[1px] border-[#FFFFFF]"
          }`}
        >
          <button
            onClick={() => setActiveDivType("Cvetličarne")}
            className="px-[25px] py-[12px] h-full w-full "
          >
            {strings.Cvetličarne}
          </button>
        </div>

        <div
          className={`${
            activeDivtype === "PogrebnaPodjetja"
              ? "shadow-custom-light-dark-box-image rounded-[8px] border-[#0A85C2] border-[2px] bg-gradient-to-b from-[#FFFFFF] to-[#DADADA] text-[16px] leading-[24px] font-variation-customOpt16 text-[#1E2125]"
              : "text-[16px] text-[#6D778E] bg-white/50 rounded-[8px] shadow-custom-dark-to-white leading-[24px] font-variation-customOpt16 border-[1px] border-[#FFFFFF]"
          }`}
        >
          <button
            onClick={() => setActiveDivType("PogrebnaPodjetja")}
            className="px-[25px] py-[12px] h-full w-full "
          >
            {strings.PogrebnaPodjetja}
          </button>
        </div>
      </div>

      {/*Main Container for details */}
      <div
        className="px-[113px] mx-auto pt-[43px] pb-[51px] mt-[51px] flex flex-col
     bg-gradient-to-r from-[#FFFFFF95] via-[#FFFFFF60] to-[#FFFFFF20] backdrop-blur rounded-2xl border-[4px] border-[#FFFFFF] shadow-lg
     mobile:px-[15px] mobile:mt-[39px] mobile:pb-[23px]
    "
      >
        {/* Container for text fields */}
        <div className="flex flex-col items-start justify-start w-[427px] mobile:max-w-[310px] mobile:w-full">
          {/* First text field and title */}
          <div className="text-[#3C3E41] text-[15px] leading-[20px] font-variation-customOpt16">
            {strings.Podjetje}
          </div>
          <div className="h-[38px] rounded-[6px] mt-[4px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <input
              type="text"
              value={inputValueCompany}
              onChange={handleValueCompanyInput}
              className="w-full px-[6px] h-full  bg-transparent focus:outline-none text-[#848484]"
            />
          </div>

          {/* Second text field and title */}
          {activeDivtype === "Cvetličarne" && (
            <div className="text-[#3C3E41] text-[15px] mt-[20px] leading-[20px] font-variation-customOpt16">
              {strings.ImeCvetličarne}
            </div>
          )}
          {activeDivtype === "PogrebnaPodjetja" && (
            <div className="text-[#3C3E41] text-[15px] mt-[20px] leading-[20px] font-variation-customOpt16">
              {strings.ImeEnote}{" "}
              <span className="text-[12px] leading-[24px] text-[#6D778E] font-variation-customOpt12">
                (ki se ukvarja s pogrebno dejavnostjo; npr. Pogrebni Zavod)
              </span>
            </div>
          )}
          <div className="h-[38px] mt-[4px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <input
              type="text"
              value={inputValueFlowerShop}
              onChange={handleFlowerShopInput}
              className="w-full px-[6px] h-full bg-transparent focus:outline-none text-[#848484]"
            />
          </div>

          {/* Region Dropdown */}
          {/* <div className="text-[#3C3E41] text-[15px] mt-[20px] leading-[20px] font-variation-customOpt16">
            {strings.Regiji}
          </div>
          <div className="h-[38px] mt-[4px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <Dropdown
              label="Select a Region"
              isFrom={"companyregistration"}
              data={regionOptions}
              selectedValue={selectedRegion}
              onSelect={handleRegionSelect}
            />
          </div> */}

          {/* Third Dropdown and title */}
          <div className="text-[#3C3E41] text-[15px] mt-[20px] leading-[20px] font-variation-customOpt16">
            {strings.Mesto}
          </div>
          <div className="h-[38px] mt-[4px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <Dropdown
              label="Občina"
              isFrom={"companyregistration"}
              data={cityOptions}
              selectedValue={selectedCity}
              onSelect={handleCitySelect}
            />
          </div>

          {/* Fourth text field and title */}
          <div className="text-[#3C3E41] text-[15px] mt-[20px] leading-[20px] font-variation-customOpt16">
            {strings.Epošta}
          </div>
          <div className="h-[38px] mt-[4px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <input
              type="email"
              value={inputValueEmail}
              onChange={handleEmailInput}
              className="w-full px-[6px] h-full bg-transparent focus:outline-none text-[#848484]"
            />
          </div>

          {/* Fifth text field and title */}
          <div className="text-[#3C3E41] text-[15px] mt-[52px] leading-[20px] font-variation-customOpt16">
            {strings.IzberiGeslo}
          </div>
          <div className="h-[38px] mt-[4px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <input
              type="password"
              value={inputValuePassword}
              onChange={handleValuePasswordInput}
              className="w-full px-[6px] h-full bg-transparent focus:outline-none text-[#848484]"
            />
          </div>

          {/* Sixth text field and title */}
          <div className="text-[#3C3E41] text-[15px] mt-[20px] leading-[20px] font-variation-customOpt16">
            {strings.PonoviGeslo}
          </div>
          <div className="h-[38px] mt-[4px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
            <input
              type="password"
              value={inputValueConfirmPassword}
              onChange={handleValueConfirmPasswordInput}
              className="w-full px-[6px] h-full bg-transparent focus:outline-none text-[#848484]"
            />
          </div>
          <div className="text-[13px] leading-[24px] font-variation-customOpt12 text-[#3C3E41]">
            {strings.Min8Znakov}
          </div>

          <div
            onClick={handleRegister}
            className="h-[48px] mt-[35px] px-[78.85px] py-[13px] mx-auto bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-lg shadow-custom-light-dark-with-white cursor-pointer"
          >
            <button className="flex items-center justify-center text-[16px] leading-[24px] font-variation-customOpt16 text-[#FFFFFF] ">
              {strings.Registriraj}
            </button>
          </div>
        </div>
      </div>
      {/* Last two buttons */}
      <div className="w-[653px] mobile:w-full mt-[60px] mx-auto px-[29px] h-[43px] flex flex-row justify-between items-center mobile:flex-col mobile:gap-[20px] mobile:h-auto">
        <Link
          href={"./registracija"}
          className="text-[16px] px-[25px] mobile:py-[8px] text-[#414B5A] h-full flex items-center bg-white/50 rounded-[8px] 
        shadow-custom-dark-to-white leading-[24px] font-variation-customOpt18 border-[1px] border-[#FFFFFF]"
        >
          {strings.RegistracijaUporabnikov}
        </Link>

        <div
          onClick={() => {
            set_Id("error_report"), setModal(true);
          }}
          className="text-[16px] cursor-pointer px-[25px] mobile:py-[8px] text-[#414B5A] h-full flex items-center bg-white/50 rounded-[8px] 
        shadow-custom-dark-to-white leading-[24px] font-variation-customOpt18 border-[1px] border-[#FFFFFF]"
        >
          {strings.PišiteNam}
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;
