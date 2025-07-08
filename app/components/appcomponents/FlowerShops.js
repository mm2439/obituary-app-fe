import Image from "next/image";
import React, { useEffect, useState } from "react";
import API_BASE_URL from "@/config/apiConfig";
import packageService from "@/services/pacakge-service";
// const FlowerShops = ({ set_Id, setModal }) => {
//   return (
//     <div className="desktop:h-[426px] mx-auto tablet:h-[450px] mobile:h-[430px] w-full flex flex-col mobile:justify-center desktop:justify-center items-center  bg-[#F8EDE3]"
//     style={{
//       boxShadow: '2.5px 2.5px 5px 0px #A6ABBD inset, -1.5px -1.5px 5px 0px #A6ABBDBF inset'
//     }}>
//       <div className="mx-auto h-[230px] mobile:flex-col mobile:items-center desktop:w-[800px] tablet:mt-[110px] tablet:w-[600px] mobile:max-w-[560.17px] mobile:w-full mobile:h-[286px] ">
//         <div
//           onClick={() => {
//             set_Id("16");
//             setModal(true);
//           }}
//           className="leading-[46.88px] cursor-pointer text-[28px] desktop:text-[40px] mobile:flex mobile:justify-center font-variation-customOpt40 text-[#1E2125]"
//         >
//           Cvetličarne
//         </div>

//         <div className="w-[600px] mt-[16px] mobile:max-w-[560.17px] mobile:w-full mobile:px-[30px]  text-[#414141] text-[16px] leading-[24px] font-variation-customOpt16">
//           <div>
//           Pregled lokalnih cvetličarn in dela njihove ponudbe. Pri njih lahko prevzamete brezplačna digitalna obvestila o pogrebu, sožalja, zahvale, enomesečnega Skrbnika.
//           </div>
//         </div>

//         <div
//           className="w-[97px] h-[47px] mt-[48px] mobile:mt-[32px] mobile:mx-auto mobile:w-[180px] text-[20px] rounded-lg text-[#1E2125] flex justify-center items-center
//                  shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] font-variation-customOpt20 leading-[23.44px]"
//         >
//           Odpri
//         </div>
//       </div>
//     </div>
//   );
// };

const FlowerShops = ({ setIsOpen, data, showShop }) => {
  useEffect(() => {
    if (data?.floristShops?.length > 0) {
      const firstShop = data.floristShops[0];
      setSelectedFloristShop(firstShop);
      getPackages(firstShop.companyId);
    }
  }, [data]);

  const [packages, setPackages] = useState([]);
  const [company, setCompany] = useState(null);
  const [selectedFloristShop, setSelectedFloristShop] = useState(null);

  const getPackages = async (companyId) => {
    try {
      const response = await packageService.getPackages(companyId);
      setPackages(response.packages);
      setCompany(response.company);
    } catch (error) {
      console.log(error);
    }
  };

  const changeSelectedFlorist = (shop) => {
    setSelectedFloristShop(shop);
    getPackages(shop.companyId);
  };

  return showShop ? (
    <div
      className="h-[550px] mobile:h-[800px] w-full flex flex-col mobile:justify-center desktop:justify-center items-center  bg-[#F8EDE3] relative"
      style={{
        boxShadow:
          "2.5px 2.5px 5px 0px #A6ABBD inset, -1.5px -1.5px 5px 0px #A6ABBDBF inset",
      }}
    >
      <div className="mx-auto mobile:flex-col mobile:items-center desktop:w-[800px] tablet:mt-[110px] tablet:w-[600px] mobile:max-w-[560.17px] mobile:px-[30px] mobile:w-full ">
        <div className="flex justify-between mobile:flex-col-reverse mobile:items-end mobile:gap-[12px]">
          <div className="leading-[46.88px] cursor-pointer text-[28px] desktop:text-[40px] mobile:flex mobile:justify-center font-variation-customOpt40 text-[#1E2125] mobile:w-full">
            Cvetličarne
          </div>
          <img
            src="/memory_page_cross.png"
            alt="trbovlje"
            className="w-[50px] h-[50px]"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="text-[#0A85C2] text-[32px] leading-[24px] font-variation-customOpt16 mt-[18px] mobile:w-full mobile:text-center">
          {data?.city}
        </div>
      </div>

      <div className="relative mt-[100px] tablet:mt-[32px] mb-[76px] tablet:mb-[34px] tablet:w-[629px] mobile:mt-[40px]">
        <div className="w-[1076px] mobile:w-full mobile:grid-cols-2 mobile:gap-[22px] mobile:px-[19px] mx-auto grid grid-cols-6 items-end relative z-10">
          {data?.floristShops?.length > 0 &&
            data?.floristShops?.map((item, index) =>
              item.own ? (
                <div
                  key={index}
                  className="bg-[#36556C] mobile:shadow-lg h-[229px] mobile:h-[129px] mobile:w-[150px] w-full rounded-[4px] overflow-hidden relative"
                  style={{
                    boxShadow:
                      "33px 33px 44px 0px #FF984E1A, -33px -33px 44px 0px #FF984E1A",
                  }}
                >
                  <div className="text-[#FF984E] text-[24px] mobile:text-[16px] leading-[130%] font-semibold text-center mt-[50px] mobile:mt-[30px] ">
                    Cvetličarna <br /> {item.shopName}
                  </div>
                  <div className="text-[#F9F9F9] text-[14px] mobile:text-[12px] leading-[150%] font-normal text-center mt-[24px] mobile:mt-[25px]">
                    {item.city}
                  </div>
                  <div className="bg-[#FF984E] absolute top-[calc(100%-15px)] mobile:top-[calc(100%-8px)] left-[119px] mobile:left-[113px] w-[36px] mobile:w-[19px] h-[30px] mobile:h-[16px] rounded-full"></div>
                  <div className="bg-gradient-to-r from-[#FF984E] to-[#36556C] absolute top-0 left-0 w-full h-[3px]"></div>
                  <div className="bg-gradient-to-b from-[#FF984E] to-[#36556C] absolute top-0 left-0 w-[3px] h-full"></div>
                </div>
              ) : (
                <div
                  key={index}
                  className="bg-[#FFFFFF] mobile:shadow-lg mobile:!border-[1px] mobile:!border-[#36556C99] h-[160px] mobile:h-[129px] w-full overflow-hidden relative flex mobile:flex-col items-center justify-center"
                  style={{
                    border: "1px solid #36556C1A",
                  }}
                  onClick={() => {
                    changeSelectedFlorist(item);
                  }}
                >
                  <Image
                    src={`${API_BASE_URL}/${item.logo}`}
                    alt={item.shopName}
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] mobile:w-[97px] mobile:h-[97px]"
                  />
                  <div className="bg-[#36556C] text-white text-[12px] hidden mobile:flex w-full h-[30px] items-center justify-center leading-[130%] font-normal text-center">
                    {item.city}
                  </div>
                </div>
              )
            )}
        </div>

        {/* <div className="bg-[#000000] blur-lg absolute top-[100%] left-1/2 w-[90%] rounded-full -translate-x-1/2 h-[12px] mobile:hidden"></div> */}
      </div>
      <div className="tablet:w-[629px] hidden tablet:flex items-center justify-end mb-[34px]">
        <Image src="/page_scroller_memory_page.png" width={64} height={64} />
      </div>
      <div className="w-[320px] h-[125px] hidden mobile:block bg-[#36556C] relative mb-[40px] overflow-hidden">
        <p className="font-semibold text-[20px] text-[#E9EAF5] text-center mt-[14px]">
          Cvetličarna Kalimero
        </p>
        <div className="flex items-center justify-between w-full px-[38px] mt-[12px]">
          <Image src="/memory_demo/phone.png" width={55} height={55} />
          <Image src="/memory_demo/info.png" width={55} height={55} />
        </div>
        <div className="bg-[#FF984E] absolute bottom-[calc(100%-8px)] left-[282px] w-[19px] h-[16px] rounded-full z-10"></div>
        <div className="bg-gradient-to-r from-[#FF984E] to-[#36556C] absolute top-0 left-0 w-full h-[3px]"></div>
        <div className="bg-gradient-to-b from-[#FF984E] to-[#36556C] absolute top-0 left-0 w-[3px] h-full"></div>
      </div>
      {/* <div className="w-full overflow-y-auto h-[400px] pt-[12px]">
        <div className="tablet:w-[629px] mobile:w-[320px] mx-auto">
          <div className="w-[1076px] mx-auto grid grid-cols-4 mobile:grid-cols-[185px_185px_185px] gap-[20px]">
            <div className="pr-[20px] relative mobile:hidden">
              {company && (
                <div
                  className="bg-[#36556C] h-[340px] w-full rounded-[8px] overflow-hidden relative z-10"
                  style={{
                    boxShadow:
                      "33px 33px 44px 0px #FF984E1A, -33px -33px 44px 0px #FF984E1A",
                  }}
                >
                  <div className="text-[#FC9A53] mt-[45px] px-[16px]">
                    SPONZOR
                  </div>
                  <div className="text-[#E9EAF5] text-[28px] px-[16px] leading-[36px] font-semibold mt-[10px]">
                    {company?.name}
                  </div>
                  <div
                    className="text-[#FFFFFF] text-[14px] px-[16px] leading-[26px] font-normal mt-[55px]"
                    style={{
                      fontVariationSettings:
                        "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'Slant' 0, 'Width' 100",
                    }}
                  >
                    {selectedFloristShop?.address}, Medvode Tel.{" "}
                    {company?.phone}
                  </div>
                  <button
                    className=" bg-[#FF984E] text-[#3C3E41] text-[16px] mx-auto w-[158px] h-[34px] flex items-center justify-center rounded-full leading-[26px] font-normal mt-[20px]"
                    style={{
                      boxShadow:
                        "1px 1px 2px 0px #00000040, 0px 4px 4px 0px #00000040 inset",
                    }}
                  >
                    Spletna stran
                  </button>
                  <div className="bg-[#FF984E] absolute bottom-[calc(100%-15px)] left-[170px] w-[36px] h-[30px] rounded-full"></div>
                </div>
              )}
              <div className="bg-[#000000] blur-lg absolute top-[98%] left-1/2 w-[70%] rounded-full -translate-x-1/2 h-[12px]"></div>
            </div>
            {packages?.length > 0 &&
              packages.map((item, index) => (
                <div className="relative" key={index}>
                  <div
                    className="h-[340px] mobile:h-[250px] overflow-hidden relative bg-white rounded-[8px] py-[26px] mobile:py-[19px] mobile:px-[18px] px-[25px] z-10"
                    style={{
                      boxShadow:
                        "33px 33px 44px 0px #FF984E1A, -33px -33px 44px 0px #FF984E1A",
                    }}
                  >
                    <Image
                      src={`${API_BASE_URL}/${item.image}`}
                      alt="cvetlica"
                      width={200}
                      height={250}
                      className="w-[200px] h-[250px] mobile:w-[147px] mobile:h-[185px] rounded-[8px]"
                    />
                    <div className="text-[20px] mobile:text-[14px] font-semibold leading-[28px] text-[#6D778E] text-center mt-[15px] mobile:mt-[8px]">
                      {item.title}
                    </div>
                  </div>
                  <div className="bg-[#000000] blur-lg absolute top-[98%] left-1/2 w-[70%] rounded-full -translate-x-1/2 h-[12px]"></div>
                </div>
              ))}
          </div>
        </div>
      </div> */}
    </div>
  ) : null;
};

export const FlowerShops2 = ({ setIsOpen, showShop }) => {
  return !showShop ? (
    <div
      className="h-[393px] mobile:h-[407px] w-full flex flex-col mobile:justify-center desktop:justify-center items-center  bg-[#F8EDE3] relative"
      style={{
        boxShadow:
          "2.5px 2.5px 5px 0px #A6ABBD inset, -1.5px -1.5px 5px 0px #A6ABBDBF inset",
      }}
    >
      <div className="mx-auto mobile:flex-col mobile:items-center desktop:w-[800px] tablet:mt-[110px] tablet:w-[600px] mobile:max-w-[560.17px] mobile:px-[30px] mobile:w-full">
        <div className="flex justify-between mobile:flex-col-reverse mobile:items-end mobile:gap-[12px]">
          <div className="leading-[46.88px] cursor-pointer text-[28px] desktop:text-[40px] mobile:flex mobile:justify-center font-variation-customOpt40 text-[#1E2125] mobile:w-full">
            Cvetličarne
          </div>
        </div>

        <div className="text-[#3C3E41] text-[16px] leading-[24px] mt-[16px] mobile:w-full mobile:text-center">
          Pregled lokalnih cvetličarn in dela njihove ponudbe. Pri njih lahko
          prevzamete brezplačna digitalna obvestila o pogrebu, sožalja, zahvale,
          enomesečnega Skrbnika.
        </div>

        <button
          className="text-[#1E2125] text-[20px] leading-[100%] font-[400] mt-[48px] py-[12px] px-[25px] rounded-[8px]"
          style={{
            background: "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
            boxShadow: "-3px -3px 7px 0px #FFFFFFB2, 3px 3px 3px 0px #C2C2C299",
          }}
          onClick={() => setIsOpen(true)}
        >
          Odpri
        </button>
      </div>
    </div>
  ) : null;
};

export default FlowerShops;
