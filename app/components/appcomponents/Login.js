"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { toast } from "react-hot-toast";
import authService from "@/services/auth-service";

const Login = () => {
  const router = useRouter();

  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValueGeslo, setInputValueGeslo] = useState("");

  const [enabledRememberMe, setEnabledRememberMe] = useState(true);

  const handleEmailInput = (event) => {
    setInputValueEmail(event.target.value);
  };

  const handleGesloInput = (event) => {
    setInputValueGeslo(event.target.value);
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

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      localStorage.setItem("user", JSON.stringify(response.user));

      toast.success(response.message || "Login successful!");
      router.push("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      className="relative max-w-[1920px] h-[736px] desktop:bg-[url('/login_ozadje.avif')] bg-[url('/ozadje_klop_tablica.avif')] 
    tablet: bg-cover bg-center w-full mx-auto desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[79px] flex justify-center items-center"
    >
      <div
        className="w-[550px] h-[586px] mobile:max-w-[340px] mobile:w-full mobile:mx-2 absolute flex flex-col
         bg-white/60 backdrop-blur rounded-2xl border-[2px] border-[#FFFFFF] shadow-lg"
      >
        {/* Content goes here */}
        <div
          className="text-[32px] font-variation-customOpt32 mt-[17px] mx-auto text-[#1E2125] font-semibold mobile:text-[28px] 
        mobile:font-variation-customOpt28 mobile:font-[600px]"
        >
          Prijava
        </div>
        <div className="text-[16px] leading-[24px] font-[400px] mx-auto text-[#414141] mt-[3px] mobile:text-[14px]">
          v uporabniški račun
        </div>

        {/* Container for text inputs and forgot password and checkbox */}
        <div className="w-[429px] h-[152px] mobile:w-[297px] mobile:h-auto mt-[5px] mx-auto flex flex-col ">
          {/* Container for email field */}
          <div>
            <input
              type="email"
              value={inputValueEmail}
              onChange={handleEmailInput}
              className="w-full h-[48px] bg-transparent focus:outline-none text-[#848484]"
              placeholder="Email"
            />
            <div className="w-full h-[1px] bg-gradient-to-r from-gray-400 to-gray-300"></div>
          </div>
          {/* Container for geslo field */}
          <div>
            <input
              type="text"
              value={inputValueGeslo}
              onChange={handleGesloInput}
              className="w-full h-[48px] mt-[16px] bg-transparent focus:outline-none text-[#848484]"
              placeholder="Geslo"
            />
            <div className="w-full h-[1px] bg-gradient-to-r from-gray-400 to-gray-300"></div>
          </div>

          <div className=" flex justify-between items-center mt-[16px]">
            {/* Checkbox */}
            <label className="flex flex-1 justify-start mt-[3px] ml-[2px] font-custom400 text-[12px] text-[#848484]">
              <Checkbox
                checked={enabledRememberMe}
                onChange={setEnabledRememberMe}
                className="mr-[12px] justify-center items-center group w-[18px] h-[18px] rounded-[2px] border-[2px] border-[#111111] bg-white/10 ring-white/15 ring-inset data-[checked]:bg-[#111111]"
              >
                <CheckIcon className="hidden ml-[-1px] size-4 rotate-6 fill-white group-data-[checked]:block" />
              </Checkbox>
              Remember me
            </label>
            {/*  */}
            <Link
              href="#"
              className="flex font-custom400 mt-[3px] text-[12px] leading-[20px] font-variation-customOpt12 text-[#848484] justify-end "
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Button container for Prijavi se */}
        <div className="w-[429px] mobile:w-[297px] h-[48px] mt-[40px] mx-auto">
          <button
            onClick={handleLogin}
            className="flex w-full h-full bg-white items-center justify-center text-[16px] leading-[24px] font-variation-customOpt16 text-[#FFFFFF] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-lg"
          >
            Prijavi se
          </button>
        </div>

        {/* Buttons and text content main Container */}
        <div className="mx-[61.5px] mobile:mx-[20px] h-[116px] mt-[40px] flex flex-col">
          {/* Container for text ali hitra prijava preko  */}
          <div className="w-full h-[48px] flex flex-col items-center justify-end">
            <div className="text-[#414141] text-[14px] leading-[24px] font-[400px]">
              ali hitra prijava preko
            </div>
          </div>

          {/* Container for fb and google buttons */}
          <div className="w-full mt-[16px] h-[52px] flex flex-row justify-between items-center">
            {/* Fb button container */}
            <Link
              href={"#"}
              className="w-[200px] mobile:w-[130px] h-[52px] bg-[#F3F9FA] border-[#D4D4D4] rounded-[12px] border-[1px] flex items-center justify-center"
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
            {/* Google button container */}
            <Link
              href={"#"}
              className="w-[200px] mobile:w-[130px] h-[52px] bg-[#F3F9FA] border-[#D4D4D4] border-[1px] rounded-[12px] flex items-center justify-center"
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
        {/* Last text container */}
        <div className="mx-auto text-[14px] font-[400px] mt-[40px] text-[#3C3E41]">
          Nov uporabnik?{" "}
          <Link href={"/registrationpage"}>Registriraj se tukaj.</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
