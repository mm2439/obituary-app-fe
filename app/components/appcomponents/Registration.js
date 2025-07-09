"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { toast } from "react-hot-toast";
import userService from "@/services/user-service";
import authService from "@/services/auth-service";

const Registration = () => {
  const router = useRouter();

  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueGeslo, setInputValueGeslo] = useState("");
  const [inputValueConfirmGeslo, setInputValueConfirmGeslo] = useState("");
  const [inputValueChooseUsername, setInputValueChooseUsername] = useState("");
  const [enableReceiveEmails, setEnableReceiveEmails] = useState(true);
  const [enableTermsOfUse, setEnableTermsOfUse] = useState(false);
  const [enabledRememberMe, setEnabledRememberMe] = useState(true);

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      setIsDesktop(true);
    }
  }, []);
  const [activeDiv, setActiveDiv] = useState("login");

  const handleEmailInput = (event) => {
    setInputValueEmail(event.target.value);
  };

  const handleGesloInput = (event) => {
    setInputValueGeslo(event.target.value);
  };

  const handleConfirmGesloInput = (event) => {
    setInputValueConfirmGeslo(event.target.value);
  };

  const handleRegister = async () => {
    if (!inputValueEmail || !inputValueGeslo || !inputValueConfirmGeslo) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValueEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }
    const passwordRegex = /^.{6,}$/;
    if (!passwordRegex.test(inputValueGeslo)) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (inputValueGeslo !== inputValueConfirmGeslo) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const payload = {
        email: inputValueEmail,
        password: inputValueGeslo,
        role: "User",
      };

      const response = await userService.registerUser(payload);
      if (response.status === 409) {
        toast.error("Email Already Exists");
        return;
      }
      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      toast.success(
        response.message || "Registration successful! You can now log in."
      );

      setActiveDiv("login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  const handleLogin = async () => {
    if (!inputValueEmail || !inputValueGeslo) {
      toast.error("Email and password are required!");
      return;
    }

    try {
      const payload = {
        email: inputValueEmail,
        password: inputValueGeslo,
      };

      const response = await authService.login(payload);
      console.log(response);
      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      localStorage.setItem("user", JSON.stringify(response.user));

      toast.success(response.message || "Login successful!");

      if (response?.user) {
        const role = response.user.role;
        const slugKey = response.user.slugKey;

        if (role === "User" && !isDesktop) {
          router.push(`/u/${slugKey}/menu`);
        } else if (role === "User" && isDesktop) {
          router.push(`/u/${slugKey}/moj-racun`);
        } else if (role === "Florist") {
          router.push(`/c/${slugKey}/menu`);
        } else if (role === "Funeral") {
          router.push(`/p/${slugKey}/menu`);
        }
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <form className="relative max-w-[1920px] min-h-screen mobile:pb-[41px] mobile:pt-[71px]  w-full desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[79px] flex flex-col justify-center items-center mx-auto">
      <img
        src="/user/main_background.png"
        alt="funeral banner"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div
        className="w-[550px] tablet:pt-[79px] tablet:pb-[54px] desktop:pt-[79px] desktop:pb-[54px] mobile:max-w-[340px] mobile:w-full mobile:mx-2 flex flex-col
     tablet:bg-gray-300/30 desktop:bg-gray-300/30 desktop:backdrop-blur tablet:backdrop-blur rounded-2xl border-[2px] border-[#FFFFFF] desktop:shadow-lg tablet:shadow-lg mobile:border-[0px]"
      >
        {/* register and Login buttons */}
        <div className="flex flex-col mx-auto items-center w-[401px] h-auto mobile:w-full">
          <div className="flex flex-row justify-between mx-auto">
            {/* Login Div */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeDiv === "login"
                  ? "w-[234px] h-[56px] mobile:w-[180px] mobile:h-[48px] shadow-custom-dark-to-white bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] rounded-[8px] border-[1px] border-[#FFFFFF] text-[#1E2125] text-[24px] mobile:text-[24px] leading-[24px] font-variation-customOpt24"
                  : "w-[143px] h-[36px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] shadow-custom-light-dark-with-white rounded-[8px] text-[#6D778E] text-[16px] leading-[24px] font-variation-customOpt16"
              }  flex justify-center items-center`}
            >
              <button
                type="button"
                onClick={() => setActiveDiv("login")}
                className=" w-full  mx-2 h-full my-[2px]"
              >
                PRIJAVA
              </button>
            </div>

            {/* Register Div */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeDiv === "register"
                  ? "w-[234px] h-[56px] mobile:w-[180px] mobile:h-[48px] shadow-custom-dark-to-white bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] rounded-[8px] border-[1px] border-[#FFFFFF] text-[#1E2125] text-[24px] mobile:text-[24px] leading-[24px] font-variation-customOpt24"
                  : "w-[143px] h-[36px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] shadow-custom-light-dark-with-white rounded-[8px] text-[#6D778E] text-[16px] leading-[24px] font-variation-customOpt16"
              } flex justify-center items-center ml-4`}
            >
              <button
                type="button"
                onClick={() => setActiveDiv("register")}
                className="w-full  mx-2 h-full my-[2px]"
              >
                REGISTRACIJA
              </button>
            </div>
          </div>
          <Image
            src={"/img_down_arrow.png"}
            width={20}
            height={12}
            alt="Down Arrow"
            className="mt-[14px]"
          />
        </div>

        {/* Container for text inputs and forgot password and checkbox */}
        <div className="w-[429px] h-auto mobile:w-[297px] mobile:h-auto mt-[10px] mx-auto flex flex-col ">
          {/* <div className=" text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full h-[62px] flex flex-col justify-start items-start">
              <div>Ime</div>
              <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                <input
                  type="email"
                  value={inputValueName}
                  onChange={handleNameInput}
                  className="w-full h-full bg-transparent focus:outline-none text-[#848484]"
                />
              </div>
            </div> */}

          {/* Container for email field */}
          <div className=" text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
            <div>E-pošta</div>
            <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
              <input
                type="email"
                value={inputValueEmail}
                autoComplete="email"
                onChange={handleEmailInput}
                className="w-full h-full bg-transparent focus:outline-none text-[#848484]"
              />
            </div>
          </div>
          {/* Container for geslo field */}
          <div className="text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
            <div>Geslo</div>

            <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
              <input
                type="password"
                value={inputValueGeslo}
                autoComplete="current-password"
                onChange={handleGesloInput}
                className="h-[38px] w-full bg-transparent focus:outline-none text-[#848484]"
              />
            </div>
          </div>

          {/* Container for confirm password field */}
          {activeDiv === "register" && (
            <div className="text-[#6D778E] text-[14px] leading-[20px] font-[400px] w-full mt-[10px] h-[62px] flex flex-col justify-start items-start">
              Ponovi geslo
              <div className="px-[10px] mt-[4px] h-[38px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                <input
                  type="password"
                  value={inputValueConfirmGeslo}
                  onChange={handleConfirmGesloInput}
                  className="w-full h-[38px] bg-transparent focus:outline-none text-[#848484]"
                />
              </div>
            </div>
          )}

          {/* Container for checkboxes */}
          <div className=" flex flex-col items-center mt-[25px]">
            {/* Container for forgot password and remember me */}
            {activeDiv === "login" && (
              <div className=" flex w-full justify-between items-center mt-[-9px]">
                {/* Checkbox */}
                <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-custom400 text-[12px] text-[#6D778E]">
                  <Checkbox
                    checked={enabledRememberMe}
                    onChange={setEnabledRememberMe}
                    className="mr-[12px] justify-center items-center group w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] bg-white/10 ring-white/15 ring-inset data-[checked]:bg-[#6D778E]"
                  >
                    <CheckIcon className="hidden ml-[-1px] size-4 rotate-6 fill-white group-data-[checked]:block" />
                  </Checkbox>
                  Zapomni si
                </label>
                {/*  */}
                <Link
                  href="#"
                  className="flex font-custom400 mt-[3px] text-[12px] leading-[20px] font-variation-customOpt12 text-[#6D778E] justify-end "
                >
                  Pozabljeno geslo
                </Link>
              </div>
            )}
            {/* Checkbox for receive emails*/}
            {activeDiv === "register" && (
              <label className="flex flex-1 justify-start mobile:w-[] mt-[3px] ml-[2px] font-variation-customOpt12 leading-[14px] font-custom400 text-[12px] text-[#6D778E]">
                <Checkbox
                  checked={enableReceiveEmails}
                  onChange={setEnableReceiveEmails}
                  className="mr-[12px] justify-center items-center group min-w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] bg-white/10 ring-white/15 ring-inset data-[checked]:bg-[#6D778E]"
                >
                  <CheckIcon className="hidden ml-[-1px] size-4 rotate-6 fill-white group-data-[checked]:block" />
                </Checkbox>
                <div className="">
                  Dajem privolitev, da me Firma s.p. preko elektronske pošte, do
                  preklica obvešča o posodobitvah, nadgradnjah, novostih in
                  ugodnostih.
                </div>
              </label>
            )}

            {/* Checkbox for terms of use and privacy policy*/}
            {activeDiv === "register" && (
              <div className=" flex w-full items-center mt-[7px]">
                {/* Checkbox */}
                <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-custom400 text-[12px] text-[#6D778E]">
                  <Checkbox
                    checked={enabledRememberMe}
                    onChange={setEnabledRememberMe}
                    className="mr-[12px] justify-center items-center group w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#6D778E] bg-white/10 ring-white/15 ring-inset data-[checked]:bg-[#6D778E]"
                  >
                    <CheckIcon className="hidden ml-[-1px] size-4 rotate-6 fill-white group-data-[checked]:block" />
                  </Checkbox>
                  Strinjam se s{" "}
                  <Link href={"#"} className="underline">
                    {" "}
                    splošnimi pogoji in pravili{" "}
                  </Link>
                </label>
                {/*  */}
              </div>
            )}
          </div>
        </div>

        {activeDiv === "register" && (
          <div className=" w-[429px] mobile:w-[297px] h-[48px] mt-[20px] mx-auto shadow-custom-light-dark-with-white">
            <button
              type="button"
              onClick={handleRegister}
              className="flex w-full h-full items-center justify-center text-[16px] leading-[24px] font-variation-customOpt16 text-[#FFFFFF] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-lg"
            >
              Registriraj se
            </button>
          </div>
        )}

        {activeDiv === "login" && (
          <div className="w-[429px] mobile:w-[297px] h-[48px] mt-[20px] mx-auto shadow-custom-light-dark-with-white">
            <button
              type="button"
              onClick={handleLogin}
              className="flex w-full h-full bg-white items-center justify-center text-[16px] leading-[24px] font-variation-customOpt16 text-[#FFFFFF] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-lg"
            >
              Prijavi se
            </button>
          </div>
        )}

        <div className="h-[48px] mx-auto flex justify-center items-end">
          <div className="text-[14px] font-[400px] text-[#414141]">
            Ali hitra prijava preko
          </div>
        </div>
        <div className="w-[429px] mobile:w-[297px] mx-auto mt-[16px] h-[52px] mobile:h-auto mobile:gap-[13px] flex flex-row mobile:flex-col justify-between items-center">
          <Link
            href={"#"}
            className="w-[200px] mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] rounded-[10px] border-[0.5px] flex items-center justify-center"
          >
            <Image
              src={"/ico_fb.png"}
              width={28}
              height={28}
              alt="Facebook Icon"
            />
            <div className="ml-[8px] text-[16px] leading-[100%] font-variation-customOpt16 text-[#414141]">
              Facebook
            </div>
          </Link>

          <Link
            href={"#"}
            className="w-[200px] mobile:w-full h-[52px] mobile:py-[12px] shadow-custom-dark-to-white bg-[#E7EBF0] border-[#FFFFFF40] border-[0.5px] rounded-[10px] flex items-center justify-center"
          >
            <Image
              src={"/ico_google.png"}
              width={28}
              height={28}
              alt="Google Icon"
            />
            <div className="ml-[8px] text-[16px] leading-[100%] font-variation-customOpt16 text-[#414141]">
              Google
            </div>
          </Link>
        </div>
      </div>

      {activeDiv == "register" && (
        <div
          onClick={() => router.push("/companyregistrationpage")}
          style={{ cursor: "pointer" }}
          className="w-[550px] mobile:w-max-[340px] flex justify-end mobile:justify-start items-center mt-[30px] mobile:w-[310px] h-[43px]"
        >
          <div
            link
            className="border-[1px] border-[#FFFFFF] rounded-[8px] tablet:shadow-custom-light-dark desktop:shadow-custom-light-dark bg-transparent mobile:border-[0px]"
          >
            <div className="px-[25px] mobile:px-[10px] py-[12px] text-[16px] text-[#FFFFFF] mobile:text-[#414141] leading-[19px] font-variation-customOpt16">
              Registracija za podjetja
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Registration;
