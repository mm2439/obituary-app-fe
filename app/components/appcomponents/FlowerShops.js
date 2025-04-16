import React from "react";

const FlowerShops = ({ set_Id, setModal }) => {
  return (
    <div className="max-w-[1920px] desktop:h-[426px] mx-auto tablet:h-[450px] mobile:h-[430px] w-full flex flex-col mobile:justify-center desktop:justify-center items-center ">
      <div className="mx-auto h-[230px] mobile:flex-col mobile:items-center desktop:w-[1027px] tablet:mt-[110px] tablet:w-[600px] mobile:max-w-[560.17px] mobile:w-full mobile:h-[286px] ">
        <div
          onClick={() => {
            set_Id("16");
            setModal(true);
          }}
          className="leading-[46.88px] cursor-pointer text-[28px] desktop:text-[40px] mobile:flex mobile:justify-center font-variation-customOpt40 text-[#1E2125]"
        >
          Cvetličarne
        </div>

        <div className="w-[600px] mt-[16px] mobile:max-w-[560.17px] mobile:w-full mobile:px-[30px]  text-[#414141] text-[16px] leading-[24px] font-variation-customOpt16">
          <div>
            Pregled lokalnih cvetličarn. Lahko odprete njihovo stran in jih
            pokličete ali pa kliknete njihov produkt in jim pošljete sporočilo,
            morda naročilo in kontaktirali vas bodo nazaj. Možnost spletnega
            nakupa bomo dodali kmalu.
          </div>
        </div>

        <div
          className="w-[97px] h-[47px] mt-[48px] mobile:mt-[32px] mobile:mx-auto mobile:w-[180px] text-[20px] rounded-lg text-[#1E2125] flex justify-center items-center
                 shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] font-variation-customOpt20 leading-[23.44px]"
        >
          Odpri
        </div>
      </div>
    </div>
  );
};

export default FlowerShops;
