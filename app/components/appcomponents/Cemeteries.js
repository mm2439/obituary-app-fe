import React from "react";

const Cemeteries = () => {
  return (
    <div className="relative w-full h-[639px] tablet:h-[785px] mobile:h-[510px] overflow-hidden mx-auto flex justify-center items-center bg-[#E0E9F3]">
      <div
        className="flex  z-[45] absolute desktop:w-[1200px] tablet:w-[680px] mobile:w-[360px] justify-end
                mobile:mt-[5%] tablet:mt-[-35%] desktop:mt-[-35%] mobile:hidden
              "
      >
        <div className="flex bg-[#FFFFFF] self-end  shadow-custom-dark-dark-box-image-wall  px-[18px] py-[17px] rounded-[17px] w-[171px]">
          <p className="flex  text-[#1E2125] text-[12px] leading-[18px] font-extralight">
            Vnesete vsa pokopališča s katerimi upravljate, vključno s tistimi,
            kjer se že dolga leta ne opravljajo več pokopi.
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
            Vnesete vsa pokopališča s katerimi upravljate, vključno s tistimi,
            kjer se že dolga leta ne opravljajo več pokopi.
          </p>
        </div>
      </div>
      {/*Main container*/}
      <div
        className="flex  pt-1 mobile:pt-0 desktop:pt-0 tablet:flex-col mobile:flex-col
                        w-[1024px] h-[452px]
                        tablet:w-[600px] tablet:h-[785px] 
                        mobile:w-[300px] mobile:h-[410.75px]"
      >
        {/*Big Image Container*/}
        <div className="hidden w-[600px] h-[452px] flex-col desktop:flex">
          {/*Main Image*/}
          <img
            className="flex w-full h-[344.71px] rounded-lg border-[5px] border-[#ffffff]"
            src="/pok_gabrsko2.jpg"
          ></img>

          {/*Four images container*/}
          <div className="flex h-[90px] mt-[24.29px]">
            <img
              src="/place2.png"
              className="flex w-[138.58px] h-[78px] bg-black rounded-[5px]"
            ></img>
            <img
              src="/pok.avif"
              className="flex w-[138.58px] h-[78px] bg-black rounded-[5px] ml-4"
            ></img>
            <img
              src="/pok3.avif"
              className="flex w-[138.58px] h-[78px] bg-black rounded-[5px] ml-4"
            ></img>
            <img
              src="/place5.png"
              className="flex w-[138.58px] h-[78px] bg-black rounded-[5px] ml-4"
            ></img>
          </div>
        </div>

        {/*Text Container*/}
        <div className="flex w-[384.84px] h-[183px] mobile:w-[294px] mobile:h-[169px] ml-[40.64px] mt-[73.5px] tablet:ml-0 tablet:mt-[31px] mobile:ml-[6px] mobile:mt-0 flex-col">
          <div className="text-[40px] text-[#1E2125] font-variation-customOpt40 mobile:text-[28px] mobile:font-variation-customOpt28 ">
            Naša pokopališča
          </div>
          <div className="text-[16px] text-[#414141] font-variation-customOpt16 mt-2">
            Upravljamo z naslednjimi pokopališči:
          </div>

          <div className="flex w-[324px] h-[72px] mt-6 flex-col mobile:w-[294px]">
            <div className="text-[16px] text-[#414141] font-variation-customOpt16 pl-[6px]">
              1. Pokopališče v Gabrskem, Trbovlje
            </div>
            <div className="text-[16px] text-[#414141] font-variation-customOpt16 pl-[6px]">
              2. Pokopališče na Dobovcu
            </div>
            <div className="text-[16px] text-[#414141] font-variation-customOpt16 pl-[6px]">
              3. Pokopališče na Sveti Planini
            </div>
          </div>
        </div>

        {/*This contianer is for tablet for image */}
        <div className="flex w-[600px] h-[452px] mobile:w-[299px] mobile:h-[221px] flex-col desktop:hidden tablet:mt-[52px] mobile:mt-5">
          {/*Main Image*/}
          <img
            className="hidden w-full h-[344.71px] tablet:flex mobile:h-[168.67px] rounded-lg border-[5px] mobile:border-[2.5px] border-[#ffffff]"
            src="/pok_gabrsko2.jpg"
          ></img>

          {/*main image for mobile*/}
          <img
            className="hidden mobile:h-[168.67px] mobile:flex rounded-lg mobile:border-[2.5px] border-[#ffffff]"
            src="/pok_gabrsko3.avif"
          ></img>

          {/*Four images container*/}
          <div className="flex h-[90px] mt-[24.29px] mobile:mt-2 mobile:w-[299px] mobile:h-[44.95px]">
            <img
              src="/place2.png"
              className="flex w-[138.58px] h-[78px] mobile:w-[68.93px] mobile:h-[44.95px] bg-black rounded-[5px]"
            ></img>
            <img
              src="/pok.avif"
              className="flex w-[138.58px] h-[78px] mobile:w-[68.93px] mobile:h-[44.95px] bg-black rounded-[5px] ml-4 mobile:ml-[7.99px]"
            ></img>
            <img
              src="/pok3.avif"
              className="flex w-[138.58px] h-[78px] mobile:w-[68.93px] mobile:h-[44.95px] bg-black rounded-[5px] ml-4 mobile:ml-[7.99px]"
            ></img>
            <img
              src="/place5.png"
              className="hidden w-[138.58px] h-[78px] mobile:w-[68.93px] mobile:h-[44.95px] bg-black rounded-[5px] ml-4 mobile:ml-[7.99px] tablet:flex "
            ></img>

            {/* +3 image for mobile */}
            <img
              src="/place5_mobile.png"
              className="hidden mobile:w-[68.93px] mobile:h-[44.95px] rounded-[5px] mobile:ml-[7.99px] mobile:flex"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cemeteries;
