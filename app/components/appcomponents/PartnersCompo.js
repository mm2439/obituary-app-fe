import Link from "next/link";
import React from "react";

const PartnersCompo = () => {
  return (
    <div className="w-full bg-[#DAEBF1]">
      <div className="relative max-w-[1920px] w-full h-[574px] tablet:h-[819px] mobile:h-[1182px] overflow-hidden mx-auto justify-center flex ">
        {/*Main Container*/}
        <div
          className="flex h-full flex-col items-center 
       w-[1068px] 
       tablet:w-[608px] tablet:h-[600px] 
       mobile:w-[340px] "
        >
          {/*Header text*/}
          <div className="flex text-[40px] text-[#083545] font-variation-customOpt40 mobile:text-[28px] mobile:font-variation-customOpt28 mobile:mt-[43px] mt-[65px] tablet:mt-[51px]">
            Postani partner!
          </div>

          {/*Main content contianer*/}
          <div className="flex w-full h-[288px] tablet:h-[600px] mobile:h-[912px] mt-[23px] tablet:mt-[30px] mobile:mt-[47px] tablet:flex-col mobile:flex-col ">
            {/*First container for tablet device*/}
            <div className="flex tablet:w-full tablet:h-[300px] mobile:h-[600px] mobile:flex-col mobile:mx-6">
              {/*First container*/}
              <div className="flex w-[340px] h-full tablet:w-[292px] tablet:h-[288px] mobile:w-[292px] mobile:h-[288px] rounded-2xl shadow-custom-light-dark border-[2px] border-[#ffffff] bg-gradient-to-r from-[#ffffff] to-[#ffffff30] items-center justify-center">
                <div className="flex w-[240.91px] h-[191px] tablet:h-[207px] tablet:w-[206.9px] mobile:w-[206.9px] mobile:h-[207px] flex-col ">
                  <img
                    src="/house.png"
                    alt="house img"
                    className="w-[54.86px] h-[64px]"
                  />
                  <div className="text-[20px] text-[#22281C] mt-[13px] mobile:mt-[14px]">
                    Pogrebna podjetja
                  </div>
                  <p className="flex w-[248px] tablet:w-[220px] mobile:w-[200px] h-[80px] text-[14px] text-[#414141] font-variation-customOpt14 mt-1 mobile:mt-[7px] leading-[16.5px]">
                    Celovita predstavitev podjetja in številne druge možnosti za
                    sodelovanje kasneje.
                  </p>
                  <p className="flex w-[248px] tablet:w-[220px] mobile:w-[210px] h-[80px] text-[14px] text-[#414141] font-variation-customOpt14 mt-[13px] leading-[16.5px]">
                    Olajšamo vam delo in prihranimo vaš čas.
                  </p>
                </div>
              </div>

              {/*Second container*/}
              <div className="flex w-[340px] h-full tablet:w-[292px] tablet:h-[288px] mobile:w-[292px] mobile:h-[288px] mobile:mt-6 rounded-2xl shadow-custom-light-dark border-[2px] border-[#ffffff] bg-gradient-to-r from-[#ffffff] to-[#ffffff30] items-center justify-center ml-[21px] tablet:ml-6 mobile:ml-0">
                <div className="flex w-[240.91px] tablet:w-[206.9px] tablet:h-[207px] h-[191px] mobile:w-[206.9px] mobile:h-[207px] flex-col">
                  <img
                    src="/sunflower.png"
                    alt="house img"
                    className="w-[64px] h-[64px]"
                  />
                  <div className="text-[20px] text-[#22281C] mt-[13px] tablet:mt-[11px]">
                    Cvetličarne
                  </div>
                  <p className="flex w-[220px] h-[80px] text-[14px] text-[#414141] font-variation-customOpt14 mt-[3px] tablet:mt-1 mobile:mt-[6px] leading-[16.5px]">
                    Naj bo vaša spletna predstavitev samo začetek našega širšega
                    sodelovanja.{" "}
                  </p>
                  <p className="flex w-[248px] tablet:w-[228px] mobile:w-[210px] h-[80px] text-[14px] text-[#414141] font-variation-customOpt14 mt-[16px] leading-[16.5px]">
                    Bodite na pravem mestu, ko vas rabijo.
                  </p>
                </div>
              </div>
            </div>

            {/*Second container for tablet device*/}
            <div className="flex tablet:w-full tablet:h-[300px] mobile:h-[447px] mobile:mt-6 mobile:flex-col mobile:mx-6">
              {/*Third container*/}
              <div className="flex w-[340px] h-full tablet:w-[292px] tablet:h-[288px] mobile:w-[292px] mobile:h-[288px] rounded-2xl shadow-custom-light-dark border-[2px] border-[#ffffff] bg-gradient-to-r from-[#ffffff] to-[#ffffff30] items-center justify-center ml-[27px] tablet:ml-0 tablet:mt-[10px] mobile:ml-0">
                <div className="flex w-[240.91px] h-[183px] tablet:w-[206.9px] tablet:h-[191px] mobile:w-[206.9px] mobile:h-[191px] flex-col pt-[3px] pl-[3px] tablet:pt-0 tablet:pl-0 mobile:pt-0 mobile:pl-0">
                  <img
                    src="/megaphone.png"
                    alt="house img"
                    className="w-[56px] h-[56px] tablet:h-[64px] mobile:h-[64px]"
                  />
                  <div className="text-[20px] text-[#22281C] mt-[15px] tablet:mt-[14px]">
                    Oglaševalci in drugi
                  </div>
                  <p className="flex w-[219px] h-[80px] tablet:w-[209px] mobile:w-[200px] text-[14px] text-[#414141] font-variation-customOpt14 mt-[3px] leading-[16.5px]">
                    Ponujate produkte ali storitve, ki so lahko zanimive
                    obiskovalcem naših strani?
                  </p>
                  <p className="flex w-[248px] h-[80px] mobile:w-[210px] text-[14px] text-[#414141] font-variation-customOpt14 mt-[16px] leading-[16.5px]">
                    Stopite v stik z nami!
                  </p>
                </div>
              </div>

              <div className="tablet:flex hidden tablet:w-[293px] tablet:h-[288px] ml-[23px] tablet:mt-[12px]">
                <Link
                  href={"./podjetja"}
                  className="flex w-[211px] h-[73px] bg-[#083545] justify-center items-center text-[16px] text-[#F6F6F6] rounded-2xl "
                >
                  Stopimo skupaj
                </Link>
              </div>
            </div>
          </div>

          {/*Bottom button*/}
          <Link
            href={"/kontakt"}
            className="flex w-[164px] h-[48px] mt-[40px] mobile:mt-[42px] tablet:hidden bg-white
         mobile:bg-[#3C3E41] items-center justify-center text-[16px] text-[#1E2125] mobile:text-[#F6F6F6] 
         desktop:bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] rounded-lg font-variation-customOpt16 self-center"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnersCompo;
