import React from "react";

const AdministratorCompo = () => {
  return (
    <div className="w-full bg-[#E0E9F3]">
      <div className="relative mobile:bg-transparent max-w-[1920px] w-full py-[77px] overflow-hidden mx-auto justify-center items-center flex">
        {/*Main Container*/}
        <div className="flex w-[1088px] h-[487px] tablet:w-[618px] tablet:h-[982px] mobile:h-[993px]  flex-col">
          {/*Header container*/}
          <div className="flex mx-auto h-[90px] flex-col">
            <h className="text-[40px] text-[#1E2125] font-variation-customOpt40 mobile:text-[28px] mobile:font-variation-customOpt28 text-center">
              Cenik za Skrbnika
            </h>
          </div>

          {/*Three container*/}
          <div className="flex desktop:mt-12 mt-10 desktop:flex-row flex-col">
            {/*c1 container*/}
            <div className="flex w-[332px] h-[266px] tablet:w-[333px] mobile:w-[348px] mobile:h-[258px] bg-[#FFFFFF] border-t-8 border-[#EB1D1D] flex-col mx-auto desktop:mx-0">
              <h className="text-[24px] text-[#3C3E41] font-variation-customOpt24 font-semibold text-center mt-[23.5px] tablet:mt-[30px]">
                Mesečna svečka
              </h>
              <div
                style={{
                  textShadow: "0px 3px 4px #00000050",
                  color: "#2D3D48",
                  fontWeight: 400,
                  fontSize: "32px",
                  fontVariationSettings: "'opsz' 32",
                  fontVariationSettings: "'wdth' 100",
                }}
                className=" text-center mt-[6px]"
              >
                BREZPLAČNO
              </div>
              {/* <div className="text-[14px] text-[#3090D5] font-variation-customOpt14 text-center mt-[20px]">
                TEKOM OTVORITVENE AKCIJE
              </div> */}
              <h className="text-[24px] text-[#3090D5] font-variation-customOpt32 text-center mt-[40px]">
                SAMO
              </h>
              <div className="text-[24px] text-[#3090D5] font-variation-customOpt14 text-center mt-[3px]">
              V VAŠI CVETLIČARNI
              </div>
            </div>

            {/*c2 container*/}
            <div className="flex w-[332px] h-[266px] tablet:w-[333px] bg-[#FFFFFF] mobile:w-[348px] mobile:h-[258px] border-t-4 desktop:ml-[43.5px] tablet:mt-[25px] mobile:mt-10 border-[#0A85C2] flex-col mx-auto desktop:mx-0">
              <h className="text-[24px] text-[#3C3E41] font-variation-customOpt24 font-semibold text-center mt-[27.5px] tablet:mt-[35px]">
                Letna svečka
              </h>
              <div
                style={{
                  textShadow: "0px 1px 1px #0A85C2",
                  color: "#282D33",
                  fontWeight: 200,
                  fontSize: "32px",
                  fontVariationSettings: "'opsz' 48",
                  fontVariationSettings: "'wdth' 100",
                }}
                className="text-center mt-[12px] mb-[4px] text-[#6D778E]"
              >( KMALU )
              </div>
              <button className="w-[97px] h-[48px] mt-2 mobile:mt-[33px] tablet:mt-6 text-[16px] font-variation-customOpt16 rounded-lg text-[#1E2125] justify-center items-center shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] mx-auto">
                Naprej
              </button>
              <div className="text-[14px] text-[#3090D5] font-variation-customOpt14 text-center mt-[34px]">
                PREVERI KAJ JE VKLJUČENO V SKRBNIKA
              </div>
            </div>

            {/*c3 container*/}
            <div className="flex w-[332px] h-[266px] tablet:w-[333px] mobile:w-[348px] mobile:h-[258px] bg-[#FFFFFF] border-t-4 desktop:ml-[44.5px] tablet:mt-[25px] mobile:mt-10 border-[#0A85C2] flex-col mx-auto desktop:mx-0 ">
              <h className="text-[24px] font-variation-customOpt24 font-semibold text-center mt-[27.5px] text-[#E6E6E6]">
                <span className="text-[#E6E6E680]">n</span><span>a</span> <span>s</span><span className="text-[#E6E6E680]">v</span><span className="#E6E6E640">e</span>
              </h>
              <div
                style={{
                  textShadow: "0px 1px 1px #0A85C2",
                  color: "#282D33",
                  fontWeight: 200,
                  fontSize: "32px",
                  fontVariationSettings: "'opsz' 48",
                  fontVariationSettings: "'wdth' 100",
                }}
                className="text-center mt-[12px] mb-[4px] text-[#6D778E]"
              >( KMALU )
              </div>
              <button className="w-[97px] h-[48px] mt-2 mobile:mt-[33px] tablet:mt-6 text-[16px] font-variation-customOpt16 rounded-lg text-[#1E2125] justify-center items-center shadow-custom-light-dark bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] mx-auto">
                Naprej
              </button>
              <div className="text-[14px] text-[#3090D5] font-variation-customOpt14 text-center mt-[34px]">
                PREVERI KAJ JE VKLJUČENO V SKRBNIKA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministratorCompo;
