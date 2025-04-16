import React from "react";
import Image from "next/image";
import iphoneImage from "@/public/pogreb_mobi_kartica.avif";
import Link from "next/link";

const IphoneView = () => {
  return (
    <div className="bg-[url('../public/gradient_ozadje.avif')] bg-cover flex justify-center ">
      <div
        className="
      desktop:w-[1200px] desktop:h-[739px] 
      tablet:w-[680px] tablet:h-[1017px] 
      mobile:w-[360px] mobile:h-[1100px]
      flex justify-center "
      >
        <div
          className="
        desktop:w-[936px] desktop:h-[500px] desktop:mt-[98px]
        tablet:w-[495.45px] tablet:mt-[53.19px] tablet:ml-[.19px] tablet:mr-[.36px]
        mobile:w-[303px] mobile:my-[80px]
        flex flex-col desktop:flex-row desktop:justify-between
        "
        >
          <div
            className="
          flex flex-col tablet:items-center mobile:items-center
          desktop:w-[495.45px] desktop:mt-[90.5px]
          "
          >
            <div
              className="text-[#1E2125] 
            mobile:text-[28px] tablet:text-[40px] desktop:text-[40px] 
            mobile:leading-[32.81px] mobile:mt-[-3px] leading-[46.88px] 
            font-variation-customOpt40 mobile:font-variation-customOpt28"
            >
              Obveščanje o pogrebu
            </div>
            <p className="font-variation-customOpt16 mt-4 mb-4 text-[#414141] text-[16px] text-center desktop:text-left leading-[24]px] ">
              V težkih trenutkih je včasih lažje poslati ali deliti po socialnih
              omrežjih, kot obveščati vsakega posebej.
            </p>
            <p className="font-variation-customOpt16 mb-6 mobile:mt-[8px] text-[#414141] text-[16px] text-center desktop:text-left leading-[24px]  ">
              Na spominski strani pokojnika/ce si prenesete obvestilo o pogrebu,
              ki ga lahko potem pošiljate naprej sorodnikom in znancem.
              Obvestilo je prilagojeno meram mobilnega telefona.
            </p>
            <p className="mobile:whitespace-nowrap mobile:mt-[12px] text-[20px] leading-[23.44px] font-[500px] text-[#414141] font-variation-customOpt20wght500 mb-[24px]">
              Obvestilo o pogrebu je BREZPLAČNO.
            </p>
            {/* 17 September 2024 */}
            {/* /funerals removed from link href */}
            <Link
              href={"/obituarylist"}
              className="flex mobile:hidden items-center rounded-lg h-[47px] w-[194px] justify-center  shadow-custom-light-dark-with-white bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
            >
              <div className="text-[16px] desktop:text-[20px] leading-[23px] font-normal text-[#1E2125] text-center font-variation-customOpt16 desktop:font-variation-customOpt20">
                Poišči osmrtnico
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center tablet:mt-16 mobile:mt-[21px]">
            <Image
              src={iphoneImage}
              alt="Slika"
              width={1000}
              height={1000}
              className="w-[250px] h-[500px]"
            />

            {/* 17 September 2024 */}
            {/* /funerals removed from link href */}
            <Link
              href={"/obituarylist"}
              className="mobile:flex hidden mt-9 mobile:mt-[42px]  items-center  rounded-lg h-[47px] w-[194px] justify-center  shadow-custom-light-dark-with-white bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
            >
              <div className="text-[16px] leading-[23px] font-normal text-[#1E2125] text-center font-variation-customOpt16">
                Poišči osmrtnico
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IphoneView;
