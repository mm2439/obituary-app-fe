import React from "react";

const Qualityflowers = () => {
  return (
    <div className=" w-full relative h-[278px] tablet:bg-[#FFFFFF] mobile:bg-[#FFFFFF] tablet:h-[337px] mobile:h-[537px] overflow-hidden mx-auto flex flex-col items-center">
      <img
        src="/plava_desktop.avif"
        alt="plava_desktop"
        className="w-full desktop:block mobile:hidden tablet:hidden h-full object-cover"
      />
      <img
        src="/plava_tablica.jpg"
        alt="plava_tablica"
        className="w-full h-[244px] hidden tablet:block object-cover"
      />
      <img
        src="/plava_roza.avif.png"
        alt="plava_roza"
        className="w-full mobile:h-[474px] hidden mobile:block object-cover"
      />

      {/* Container for the data */}
      <div className="w-full absolute flex flex-col items-center">
        {/* Main Container for data */}
        <div
          className="w-[697px] tablet:w-[533.17px] tablet:h-[136.63px] 
                h-[174px] flex gap-[67px] mobile:gap-[38px] mobile:w-[360px] mobile:h-[474px] mobile:mt-[46.9px] mobile:flex-col mt-[52px] tablet:mt-[54px] flex-row desktop:justify-center"
        >
          {/* First image Container*/}
          <div
            className="w-[315px] h-[174px] mobile:mx-auto tablet:w-[242.59px] tablet:h-[136.63px] bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30]
                                     backdrop-blur border-[2px] border-[#FFFFFF] rounded-[16px] flex flex-col items-center"
          >
            <img
              src="/truck.png"
              alt="vehicle"
              className="w-[70px] h-[52.5px] tablet:h-[55.17px] tablet:mt-[19.72px] mt-[40.75px] mx-auto"
            />

            <div
              className="mt-[23.75px] tablet:mt-[16px] tablet:font-variation-customOpt16 text-[20px] 
                        tablet:text-[16px] flex justify-center tablet:leading-[18.75px] leading-[23.44px] text-[#22281C] font-variation-customOpt20"
            >
              Dostava isti dan
            </div>
          </div>

          {/* Second image Container*/}
          <div
            className="w-[315px] h-[174px] mobile:mx-auto tablet:w-[242.59px] tablet:h-[136.63px] bl bg-gradient-to-br from-[#FFFFFF] to-[#FFFFFF30]
                     backdrop-blur border-[2px] border-[#FFFFFF] rounded-[16px]"
          >
            <img
              src="/thumb.png"
              alt="vehicle"
              className="w-[60px] h-[60px] tablet:w-[66.18px] 
                                                                        tablet:h-[65px] tablet:mt-[15.84px] mt-[32px] mx-auto"
            />

            <div
              className="mt-[25px] tablet:mt-[16px] flex justify-center tablet:text-[16px] 
                        tablet:font-variation-customOpt16 text-[20px] tablet:leading-[18.75px] 
                        leading-[23.44px] text-[#22281C] tablet:font-variation-customOpt16 font-variation-customOpt20"
            >
              <div className="px-[4px]">Vedno sveže in kvalitetno cvetje</div>
            </div>
          </div>
        </div>

        {/* Bottom paragraph container */}
        <div
          className="mt-[10px] max-w-[1064px] mobile:mt-[-45px] tablet:mt-[60.37px] tablet:w-[596px] 
                tablet:h-[86px] w-full h-[42px] flex flex-wrap tablet:flex tablet:justify-center tablet:text-center
                mobile:flex mobile:justify-center mobile:h-[63px] mobile:text-center
                text-[#939393] leading-[21px] text-[14px]"
        >
          {/* <div className="flex mobile:hidden ">
            Nizek blok, kjer naj bi bilo nekaj kar želite poudariti; nekaj
            ikonic za popestritev bloka je že dodanih, lahko pa ta blok izdelate
            tudi sami in ga prilepite na predvideno mesto. Te steklene okvirčke
            lahko seveda izbrišete in dodate karkoli, lahko je zgolj slika ali
            poudarjen tekst z vašo telefonsko številko, ipd. Lahko pa tudi
            povsem izpustite ta blok.
          </div> */}
          {/* <div className="hidden mobile:flex mobile:w-[296px]">
            Nizek blok, kjer naj bi bilo nekaj kar želite poudariti; nekaj
            ikonic za popestritev bloka je že dodanih, blok pa jasno lahko
            izdelate tudi sami.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Qualityflowers;
