import Image from "next/image";
import React, { useEffect } from "react";
import iconFb from "@/public/icon_facebook.png";
import iconEmail from "@/public/ico_message.png";

import iconWeb from "@/public/icon_web.png";
import API_BASE_URL from "@/config/apiConfig";
import Link from "next/link";
import classNames from "classnames";
const getBackgroundImage = (data) => {
  if (!data) return "/pok_gabrsko4.avif";
  if (data.background && data.background.includes("companyUploads")) {
    return `${API_BASE_URL}/${data.background}`;
  }
  return data.background || "/pok_gabrsko4.avif";
};

const getLogoImage = (data) => {
  if (!data) return "/logo_funeral_company.png";
  if (data.logo && data.logo.includes("companyUploads")) {
    return `${API_BASE_URL}/${data.logo}`;
  }
  return data.logo || "/logo_funeral_company.png";
};

const IconLinkComponent = ({ link, icon, alt, className }) => {
  const formattedLink = link
    ? link.startsWith("http://") || link.startsWith("https://")
      ? link
      : `https://${link}`
    : "#";

  return (
    <div
      className={classNames(
        " w-12 h-12 flex justify-center items-center rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white",
        className
      )}
    >
      <Link href={formattedLink} target="_blank" rel="noopener noreferrer">
        <Image
          key={`${link}-icon`}
          src={icon}
          className=" h-[22px] w-[22px]"
          alt={alt}
          width={1000}
          height={1000}
        />
      </Link>
    </div>
  );
};

const FuneralsCompanyBanner = ({ data }) => {
  return (
    <div className="relative bg-gradient-to-b to-[#E8F0F5] from-[#EBEDEF] flex-col w-full overflow-hidden mx-auto desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[80px] flex justify-center items-center">
      <Image
        key={`${data?.id}-background`}
        src={getBackgroundImage(data)}
        alt="pok_gabrsko"
        width={1280}
        height={300}
        className="flex h-[300px] mobile:h-[212px] tablet:h-[220px] max-w-[1280px] w-full object-cover"
      />
      <div className="bg-white rounded-2xl border-2 p-7 mobile:p-4 border-[#EDF1F3]  h-[185px] mobile:h-[405px] tablet:h-[272px] max-w-[1009px] w-full tablet:w-[80%] mobile:w-[296px] absolute top-[195px] mobile:top-[184px] tablet:top-[152px]">
        <div className="w-full flex mobile:flex-col items-center">
          <div className="min-w-200 flex justify-start mobile:min-w-[184px] max-w-[290px] h-[90px] w-full">
            <div>
              <img
                key={`${data?.id}-logo`}
                src={getLogoImage(data)}
                alt="App Logo"
                // width={1000}
                // height={1000}
                className="w-full object-contain mobile:w-[184px] mobile:h-[75px] h-full"
              />
            </div>
          </div>

          <h1 className="w-full text-[#1E2125] text-[24px] font-semibold leading-[28px] mobile:mt-2">
            {data?.heading || data?.User?.company}
          </h1>
          <div className="hidden desktop:flex min-w-[150px] gap-2">
            <IconLinkComponent
              link={data?.email}
              icon={iconEmail}
              alt="Email Icon"
            />
            <IconLinkComponent
              link={data?.website}
              icon={iconWeb}
              alt="Website Icon"
            />
            <IconLinkComponent
              link={data?.facebook}
              icon={iconFb}
              alt="Facebook Icon"
            />
          </div>
        </div>

        <div
          key={`${data?.id}-address`}
          class="hidden  desktop:flex justify-between items-center mt-3"
        >
          <div>
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              NASLOV
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              {data?.address}
            </div>
          </div>
          <div className="h-6 w-[2px] bg-[#D4D4D4]" />

          <div>
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              TELEFON
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              {data?.phone}
            </div>
          </div>
          <div className="h-6 w-[2px] bg-[#D4D4D4]" />

          <div>
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              WEBSITE
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              {data?.website || "www.komunala-trbovlje.si"}
            </div>
          </div>
        </div>

        <div
          key={`${data?.id}-address-tablet`}
          class="hidden  tablet:flex justify-between items-center mt-3"
        >
          <div className="flex flex-1 flex-col">
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              NASLOV
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              {data?.address}
            </div>
          </div>
          <div className="flex flex-1 items-center">
            <div className="h-6 w-[2px] bg-[#D4D4D4] mr-9 ml-1" />
            <div>
              <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
                WEBSITE
              </div>
              <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
                {data?.website || "www.komunala-trbovlje.si"}
              </div>
            </div>
          </div>
        </div>

        <div
          key={`${data?.id}-address-mobile`}
          class="hidden  tablet:flex justify-between items-center mt-4"
        >
          <div className="flex flex-1 flex-col">
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              TELEFON
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              {data?.phone}
            </div>
          </div>
          <div className="hidden tablet:flex min-w-[150px] gap-2">
            <IconLinkComponent
              link={data?.email}
              icon={iconEmail}
              alt="Email Icon"
            />
            <IconLinkComponent
              link={data?.website}
              icon={iconWeb}
              alt="Website Icon"
            />
            <IconLinkComponent
              link={data?.facebook}
              icon={iconFb}
              alt="Facebook Icon"
            />
          </div>
        </div>

        <div
          key={`${data?.id}-address-mobile`}
          class="hidden  mobile:flex flex-col mt-10"
        >
          <div className=" flex flex-col flex-1">
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              NASLOV
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              {data?.address}
            </div>
          </div>

          <div className=" flex flex-col flex-1  mt-[14px]">
            <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
              WEBSITE
            </div>
            <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
              {data?.website || "www.komunala-trbovlje.si"}
            </div>
          </div>

          <div className="flex flex-1 justify-between items-center mt-[14px]">
            <div className=" flex flex-col flex-1 ">
              <div className="w-full text-[#939393] text-[14px] font-normal leading-[16px] whitespace-nowrap">
                TELEFON
              </div>
              <div className="w-full text-[#1E2125] text-[16px] font-normal leading-[24px] whitespace-nowrap ">
                {data?.phone}
              </div>
            </div>
            <div className="hidden mobile:flex w-[120px]">
              <IconLinkComponent
                link={data?.email}
                icon={iconEmail}
                alt="Email Icon"
                className=" w-9 h-9"
              />
              <IconLinkComponent
                link={data?.website}
                icon={iconWeb}
                alt="Website Icon"
                className=" w-9 h-9"
              />
              <IconLinkComponent
                link={data?.facebook}
                icon={iconFb}
                alt="Facebook Icon"
                className=" w-9 h-9"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        key={`${data?.id}-description`}
        className="  h-[565px] mobile:h-[937px] tablet:h-[606pxpx] max-w-[1280px] w-full flex justify-center items-end"
      >
        <div className="max-w-[1009px] w-full tablet:w-[597.23px] mobile:w-[296px] flex mobile:flex-col justify-between desktop:px-6 mb-16 mobile:mb-12">
          <div className=" relative desktop:w-[452px] desktop:h-[295px] tablet:w-[276px] tablet:h-[235.81px] flex flex-col justify-center">
            <div className="text-[#1E2125] mobile:text-[28px] text-[40px] font-normal leading-[47px] mobile:leading-[33px] whitespace-nowrap mobile:text-center">
              {data?.title || "Predstavitev"}
            </div>
            <div className="text-[#414141] text-[16px] font-normal leading-[24px] mt-4 mobile:text-center mobile:mb-10">
              {data?.description ||
                " Komunala Trbovlje v okviru pogrebnega zavoda izvaja pogrebno in pokopališko dejavnost. Delovni čas zavoda je od ponedeljka do petka med 7. in 15. uro v letnem času oziroma med 6. in 14. uro v času med 1. 6. in 31. 8."}
            </div>
          </div>

          <div className=" relative desktop:w-[416px] desktop:h-[295px] w-[302.23px] h-[214.81px] flex justify-end">
            <Image
              width={265}
              height={256}
              src={
                data?.funeral_section_one_image_one
                  ? `${API_BASE_URL}/${data.funeral_section_one_image_one}`
                  : "/pokopalisce_gabrsko1.avif"
              }
              alt="Slika"
              className=" desktop:h-[256px]  desktop:w-[367.21px] w-[266.98px] h-[186.63px] object-cover rounded-lg border-[3px] border-white"
            />
            <Image
              width={162}
              height={156}
              src={
                data?.funeral_section_one_image_two
                  ? `${API_BASE_URL}/${data.funeral_section_one_image_two}`
                  : "/pokopalisce_gabrsko2.avif"
              }
              alt="Slika"
              className="desktop:h-[156px] desktop:w-[222.72px] w-[162.59px] h-[114.38px] object-cover absolute bottom-0 left-0 rounded-lg border-[3px] border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuneralsCompanyBanner;
