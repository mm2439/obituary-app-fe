import React, { useEffect, useState } from "react";
import Image from "next/image";
import API_BASE_URL from "@/config/apiConfig";
import ImageCarousel from "./CemeteriesSliderComponent/CemeteriesSlider";
const defaultCemeteries = [
  {
    image: "/bg4.jpg",
    name: "Zadnja slika",
    address: "Pokopališče na Sveti Gorici na Kozjanskem",
    city: "Trbovlje",
  },
  {
    image: "/place2.png",
    name: "Pokopališče",
    address: "Dobovcu",
    city: "Trbovlje",
  },
  {
    image: "/pok.avif",
    name: "Tretja",
    address: "Tukaj smo mi",
    city: "Planini",
  },
];
const Cemeteries = ({ data }) => {
  const [cemeteries, setCemeteries] = useState([]);
  const [companyId, setCompanyId] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    setCompanyId(data.id);
    const customCemeteries = data?.cemeteries || [];

    if (customCemeteries.length > 0) {
      setCemeteries(customCemeteries);
    } else {
      setCemeteries(defaultCemeteries);
    }
  }, [data]);

  return (
    <div className="relative w-full h-[639px] tablet:h-[785px] mobile:h-[510px] overflow-hidden mx-auto flex justify-center items-center bg-[#E0E9F3]">
      {companyId === null && (
        <>
          <div
            className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[5%] tablet:mt-[-35%] desktop:mt-[-35%] mobile:hidden
              "
          >
            <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
              <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                Vnesete vsa pokopališča s katerimi upravljate, vključno s
                tistimi, kjer se že dolga leta ne opravljajo več pokopi.
              </p>
            </div>
          </div>

          <div
            className="flex z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[35%] tablet:mt-[35%] desktop:mt-[35%] tablet:hidden
              "
          >
            <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall px-[18px] py-[17px] rounded-[17px] w-[171px]">
              <p className="flex mobile:hidden text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                Še nekaj dodatnega prostora za predstavitev, kak poudarek,
                zanimivost, morda kaj na kar ste posebej ponosni.
              </p>
              <p className="hidden mobile:flex text-[#1E2125] text-[12px] leading-[18px] font-extralight">
                Vnesete vsa pokopališča s katerimi upravljate, vključno s
                tistimi, kjer se že dolga leta ne opravljajo več pokopi.
              </p>
            </div>
          </div>
        </>
      )}
      {/*Main container*/}
      <div
        className="flex mt-[73.5px] pt-1 mobile:pt-0 desktop:justify-around desktop:pt-0 tablet:items-center tablet:flex-col mobile:flex-col
                        w-[1024px] h-[452px]
                        tablet:w-[600px] tablet:h-[815px] 
                        mobile:w-[300px] mobile:h-[410.75px]"
      >
        {/*Image Carousel*/}
        <div className="hidden desktop:flex">
          <ImageCarousel images={cemeteries} />
        </div>

        {/*Text Container*/}
        <div className="flex w-[384.84px] h-auto mobile:w-[294px] mobile:h-[169px] ml-[40.64px] tablet:ml-0 tablet:mt-[31px] mobile:ml-[6px] mobile:mt-0 flex-col">
          <div className="text-[40px] text-[#1E2125] font-variation-customOpt40 mobile:text-[28px] mobile:font-variation-customOpt28 ">
            Naša pokopališča
          </div>

          <div className="text-[16px] text-[#414141] font-variation-customOpt16 mt-2">
            Upravljamo z naslednjimi pokopališči:
          </div>

          <div className="overflow-auto scrollbar-hide mt-6 pl-[17px] h-[214px]">
            <ol className="list-decimal flex w-[324px] flex-col mobile:w-[294px]">
              {cemeteries &&
                cemeteries?.map((cemetery, index) => (
                  <li
                    key={`${cemetery.id}-cemetery-${index}-${cemetery.companyId}`}
                    className="text-[16px] text-[#414141] font-variation-customOpt16 pl-[6px]"
                  >
                    {cemetery.name} v {cemetery.address}
                  </li>
                ))}
            </ol>
          </div>
        </div>

        {/*This contianer is for tablet for image */}
        <div className="hidden tablet:flex mt-5">
          <ImageCarousel images={cemeteries} />
        </div>
      </div>
    </div>
  );
};

export default Cemeteries;
