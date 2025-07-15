import Image from "next/image";
import React from "react";
import iconArrowRight from "@/public/icon_arrowright.png";
import Link from "next/link";
import { format } from "date-fns";
import API_BASE_URL from "@/config/apiConfig";

const calculateAge = (birthDate, deathDate) => {
  const birth = new Date(birthDate);
  const death = new Date(deathDate);

  let age = death.getFullYear() - birth.getFullYear();
  if (
    death.getMonth() < birth.getMonth() ||
    (death.getMonth() === birth.getMonth() && death.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
};

const ObituaryCard = ({ data, key, index, mob }) => {
  const formattedBirthDate = new Date(data.birthDate).getFullYear();
  const formattedDeathDate = format(new Date(data.deathDate), "dd.MM.yyyy");

  const age = calculateAge(data.birthDate, data.deathDate);

  const imageUrl = data.image ? `${API_BASE_URL}/${data.image}` : "/user5.jpeg";

  const funeralDate = new Date(data.deathDate);
  const funeralDateFormatted = `${funeralDate
    .getDate()
    .toString()
    .padStart(2, "0")}${(funeralDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${funeralDate.getFullYear().toString().slice(2)}`;

  const religionImages = {
    1: "/icon_cross.png",
    2: "/img_plus2.png",
    3: "/img_moon_star.png",
    4: "/img_plus3.png",
    5: "/img_star.png",
  };

  return (
    <Link
      href={`/m/${data.slugKey}`}
      className="mobile:w-[298px] tablet:w-[466px] desktop:w-[466px] 
      mobile:h-[126px] tablet:h-[170px] desktop:h-[170px]  border-2
       border-white shadow-custom-light-dark-box
        bg-gradient-to-br from-[#E3EAEF] to-[#F3F6F8] rounded-lg flex justify-center items-center "
    >
      <div className="flex">
        <div className="mobile:w-[263px] tablet:w-[420.33px] desktop:w-[428px] flex">
          <div
            className="rounded-xl mobile:mr-[17.33px] tablet:mr-[26px] desktop:mr-[29px]  
          shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] "
          >
            <Image
              src={imageUrl}
              alt="Slika"
              width={1000}
              height={1000}
              className="mobile:h-[98.53px] tablet:h-[130px]
               desktop:h-[130px] mobile:w-[72px] tablet:w-[95px] desktop:w-[95px] bg-center  rounded-lg"
            />
          </div>

          <div className=" flex-1 flex items-start flex-col  truncate overflow-hidden whitespace-nowrap ">
            <div
              className="flex flex-row w-full items-start mobile:pt-[0px] tablet:pt-[4px]
             desktop:pt-[4px] tablet:pr-[2px] desktop:pr-[2px] "
            >
              <div className="flex flex-1 flex-col">
                <div
                  className="font-variation-customOpt24 text-left desktop:text-[24px]
                   tablet:text-[24px] mobile:text-[16px]  text-[#1E2125] leading-[28.13px]"
                >
                  {data.name} {data.sirName}
                </div>
                <p
                  className="hidden desktop:block font-variation-customOpt14 tablet:font-variation-customOpt16 
                  desktop:font-variation-customOpt16 text-left desktop:mt-[16px] tablet:mt-[16px]  
                  desktop:text-[16px] tablet:text-[16px] mobile:text-[14px]  text-[#414141] leading-[24px]"
                >
                  {formattedBirthDate} – {formattedDeathDate} ({age} let)
                </p>
                <p
                  className="hidden mobile:block tablet:block font-variation-customOpt14 tablet:font-variation-customOpt16 
                  desktop:font-variation-customOpt16 text-left desktop:mt-[16px] tablet:mt-[16px]  
                  desktop:text-[16px] tablet:text-[16px] mobile:text-[14px]  text-[#414141] leading-[24px]"
                >
                  {formattedBirthDate} – {formattedDeathDate}
                </p>
                <div
                  className="flex h-[18px] tablet:h-6 
                 desktop:h-6 items-center tablet:mt-[4px] desktop:mt-[4px]"
                >
                  <p className="font-variation-customOpt14 tablet:font-variation-customOpt16 desktop:font-variation-customOpt16 text-left desktop:text-[16px] tablet:text-[16px] mobile:text-[14px]  text-[#414141] leading-[24px]">
                    {data.location}
                    {key}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`flex mobile:h-[14px] tablet:h-6 desktop:h-6 w-full justify-end items-center
          mobile:mt-[17.58px] tablet:mt-[7.5px] desktop:mt-[7.5px]          
             mobile:pr-[0px] tablet:pr-[2px] desktop:pr-[2px]`}
            >
              <a
                href="#"
                className="mobile:font-variation-customOpt12 tablet:font-variation-customOpt14 desktop:font-variation-customOpt14 text-[#7C7C7C] mobile:text-[12px] tablet:text-[14px] desktop:text-[14px] "
              >
                Osmrtnica
              </a>
              <Image
                src={iconArrowRight}
                alt="Slika"
                width={1000}
                height={1000}
                className="mobile:h-[15.24px] mobile:w-[15.24px] tablet:h-[24px] tablet:w-[24px] desktop:h-[24px] desktop:w-[24px]"
              />
            </div>
          </div>
        </div>
        {data?.symbol && !mob && (
          <div
            className="absolute z-40 flex justify-end 
              mobile:w-[171px] 
             tablet:w-[420.33px] tablet:pt-[3px]
              desktop:w-[428px] desktop:pt-[3px]  desktop:pr-2
              "
          >
            <Image
              src={religionImages[data.symbol]}
              alt="Slika"
              width={1000}
              height={1000}
              className={`w-[51px] ${
                data.symbol === "3" ? "h-[50px]" : "h-[55px]"
              }`}
            />
          </div>
        )}
        {data?.symbol && mob && (
          <div
            className=" absolute z-45 flex justify-end 
              w-[171px]  mobile:mt-[28.26px] pr-[3px]
              mobile:w-[263px] 
              "
          >
            <Image
              src={religionImages[data.symbol]}
              alt="Slika"
              width={500}
              height={500}
              className={` w-[37.66px] tablet:h-[65px] tablet:w-[51px] ${
                data.symbol === "3" ? "h-[40px]" : "h-[48px]"
              }`}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default ObituaryCard;
