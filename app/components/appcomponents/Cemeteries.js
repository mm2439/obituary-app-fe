import React, { useEffect, useState } from "react";
import Image from "next/image";
import API_BASE_URL from "@/config/apiConfig";
const defaultCemeteries = [
  {
    image: "/pok_gabrsko2.jpg",
    name: "Pokopališče",
    address: "Gabrskem",
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
    name: "Pokopališče",
    address: "Sveti",
    city: "Planini",
  },
];
const Cemeteries = ({ data }) => {
  const [cemeteries, setCemeteries] = useState([]);
  const [companyId, setCompanyId] = useState(null);
  useEffect(() => {
    setCompanyId(data.id);
    const customCemeteries = data?.cemeteries || [];

    if (customCemeteries.length > 3) {
      setCemeteries(customCemeteries);
    } else if (customCemeteries.length > 0) {
      const updatedList = [...defaultCemeteries];
      for (let i = 0; i < customCemeteries.length; i++) {
        updatedList[i] = customCemeteries[i];
      }
      setCemeteries(updatedList);
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
        className="flex  pt-1 mobile:pt-0 desktop:pt-0 tablet:flex-col mobile:flex-col
                        w-[1024px] h-[452px]
                        tablet:w-[600px] tablet:h-[785px] 
                        mobile:w-[300px] mobile:h-[410.75px]"
      >
        {/*Big Image Container*/}
        {cemeteries && cemeteries.length > 0 ? (
          <div className="hidden w-[600px] h-[452px] flex-col desktop:flex">
            {/*Main Image*/}

            <Image
              className="flex w-full h-[344.71px] rounded-lg border-[5px] border-[#ffffff]"
              src={
                cemeteries[0].image.includes("cemetryUploads")
                  ? `${API_BASE_URL}/${cemeteries[0].image}`
                  : cemeteries[0].image
              }
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "344.71px",
                objectFit: "cover",
              }}
            />

            {/*Four images container*/}

            <div className="flex justify-center gap-2 h-[90px] mt-[24.29px] relative">
              {cemeteries.slice(1, 4).map((cemetery, index, arr) => {
                const total = cemeteries.length;
                const extraCount = total - 4;

                const isLastWithExtra = index === 3 && extraCount > 0;

                return (
                  <div
                    key={index}
                    className="relative w-[138.58px] h-[78px] rounded-[5px] overflow-hidden"
                  >
                    <Image
                      src={
                        cemetery.image.includes("cemetryUploads")
                          ? `${API_BASE_URL}/${cemetery.image}`
                          : cemetery.image
                      }
                      className="w-full h-full object-cover bg-black"
                      width={140}
                      height={78}
                      alt={`Cemetery image ${index + 1}`}
                    />
                    {isLastWithExtra && (
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-bold rounded-[5px]">
                        +{extraCount}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {/*Text Container*/}
        <div className="flex w-[384.84px] h-[183px] mobile:w-[294px] mobile:h-[169px] ml-[40.64px] mt-[73.5px] tablet:ml-0 tablet:mt-[31px] mobile:ml-[6px] mobile:mt-0 flex-col">
          <div className="text-[40px] text-[#1E2125] font-variation-customOpt40 mobile:text-[28px] mobile:font-variation-customOpt28 ">
            Naša pokopališča
          </div>
          <div className="text-[16px] text-[#414141] font-variation-customOpt16 mt-2">
            Upravljamo z naslednjimi pokopališči:
          </div>

          <ol className="list-decimal ms-4 flex w-[324px] h-[72px] mt-6 flex-col mobile:w-[294px]">
            {cemeteries &&
              cemeteries?.map((cemetery, index) => (
                <li
                  key={index}
                  className="text-[16px] text-[#414141] font-variation-customOpt16 pl-[6px]"
                >
                  {cemetery.name} v {cemetery.address}, {cemetery.city}
                </li>
              ))}
          </ol>
        </div>

        {/*This contianer is for tablet for image */}
        {cemeteries && cemeteries.length > 0 ? (
          <div className="flex w-[600px] h-[452px] mobile:w-[299px] mobile:h-[221px] flex-col desktop:hidden tablet:mt-[52px] mobile:mt-5">
            {/*Main Image*/}
            <Image
              className="hidden w-full h-[344.71px] tablet:flex mobile:h-[168.67px] rounded-lg border-[5px] mobile:border-[2.5px] border-[#ffffff]"
              src={
                cemeteries[0].image.includes("cemetryUploads")
                  ? `${API_BASE_URL}/${cemeteries[0].image}`
                  : cemeteries[0].image
              }
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "344.71px",
                objectFit: "cover",
              }}
            />

            {/*main image for mobile*/}
            <Image
              className="hidden mobile:h-[168.67px] mobile:flex rounded-lg mobile:border-[2.5px] border-[#ffffff]"
              src={
                cemeteries[0].image.includes("cemetryUploads")
                  ? `${API_BASE_URL}/${cemeteries[0].image}`
                  : cemeteries[0].image
              }
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "168.67px",
                objectFit: "cover",
              }}
            />

            {/*Four images container*/}
            <div className="flex justify-center h-[90px] mt-[24.29px] mobile:mt-2 mobile:w-[299px] mobile:h-[44.95px] gap-[7.99px]">
              {cemeteries.slice(0, 3).map((cemetery, index) => {
                const total = cemeteries.length;
                const extraCount = total - 3;

                const isLastWithExtra = index === 2 && extraCount > 0;

                return (
                  <div
                    key={index}
                    className="relative w-[138.58px] h-[78px] mobile:w-[68.93px] mobile:h-[44.95px] rounded-[5px] overflow-hidden"
                  >
                    <Image
                      src={
                        cemetery.image.includes("cemetryUploads")
                          ? `${API_BASE_URL}/${cemetery.image}`
                          : cemetery.image
                      }
                      className="w-full h-full object-cover bg-black"
                      width={140}
                      height={78}
                      alt={`Cemetery image ${index + 1}`}
                    />
                    {isLastWithExtra && (
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-[12px] font-bold rounded-[5px]">
                        +{extraCount}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cemeteries;
