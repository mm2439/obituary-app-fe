"use client";
import React from "react";
import Image from "next/image";
import flower1 from "@/public/flower1.jpeg";
import flower2 from "@/public/flower2.jpeg";
import flower3 from "@/public/flower3.jpeg";
import imgPrevious from "@/public/icon_left.png";
import imgNext from "@/public/icon_right.png";
import { useRef } from "react";

const LocalFloristCompo = () => {
  const scrollContainerRef = useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -50 : 50;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full border-t-[1px] border-[#D4D4D4] mobile:border-t-0 flex desktop:bg-[#F5F2E8] bg-white">
      <div className="relative max-w-[1920px] overflow-hidden mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center justify-between w-[1115px] h-[968px] tablet:w-[692px] tablet:h-[740px] mobile:w-screen  mobile:h-[687px] desktop:py-[90px] mobile:pb-[60px]   tablet:py-[80px]">
          {/*Heading text container*/}
          <div
            className="flex flex-col
            w-full items-center"
          >
            <div className="text-[40px] mobile:text-[28px] leading-[48px] mobile:leading-[33px] text-[#000000] font-normal">
              Prednosti lokalnih cvetličarn
            </div>
            <div className="text-[24px] mobile:text-[20px] leading-[28px] mobile:leading-[23px] font-semibold mobile:font-normal text-[#1E2125]">
              (napram cvetju iz velikih trgovin)
            </div>
          </div>

          {/*Flower list container*/}
          <div className=" flex mobile:hidden w-full h-[588px] tablet:h-[383px]  py-[10px] px-[10px] my-[48px] justify-between ">
            {/*Flower1 container*/}
            <div className="relative flex w-[337px] tablet:w-[216px] h-full rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
              <Image
                src={flower1}
                alt="sponser4 of the image"
                className="flex w-full h-full bg-center  rounded-lg"
              />
              <div className=" w-[329px] tablet:w-[210px] h-[560px] tablet:h-[357px]  absolute px-[13px]">
                <div className="h-[129px] tablet:h-[100px] w-[171px] tablet:ml-[-13px] tablet:mt-[9px] tablet:w-[132px] mt-[38px]  flex justify-center">
                  <p
                    className="tablet:hidden flex "
                    style={{
                      textShadow: "0px 4px 4px #006598",
                      color: "#EDF1F3",
                      fontWeight: 200,
                      fontSize: "128px",
                      lineHeight: "129px",
                      fontVariationSettings: "'opsz' 128",
                      fontVariationSettings: "'wdth' 105",
                    }}
                  >
                    01
                  </p>
                  <p
                    className="desktop:hidden flex "
                    style={{
                      textShadow: "0px 4px 4px #006598",
                      color: "#EDF1F3",
                      fontWeight: 200,
                      fontSize: "80px",
                      lineHeight: "100px",
                      fontVariationSettings: "'opsz' 80",
                      fontVariationSettings: "'wdth' 105",
                    }}
                  >
                    01
                  </p>
                </div>
                <div className="w-full px-[13px] tablet:px-[7px] desktop:py-4 desktop:mt-4">
                  <div className="text-[16px] leading-[19px] tablet:leading-[24px] text-[#1E2125] font-medium tablet:font-normal">
                    Znanja in dolgoletne izkušnje
                  </div>
                  <div
                    className="tablet:hidden flex"
                    style={{
                      marginTop: "24px",
                      color: "#414141",
                      fontSize: "14px",
                      fontWeight: 200,
                      fontVariationSettings: "'opsz' 14",
                      fontVariationSettings: "'wdth' 44",
                    }}
                  >
                    Pogosto premalo izpostavljena prednost lokalnih
                    cvetličarjev. So eksperti na svojem področju, ki radi delijo
                    svoje znanje in postrežejo nam z najboljšimi nasveti, kar v
                    veliki trgovini ni možno.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[337px] tablet:w-[218px] mobile:w-[263.15px] h-full rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
              <Image
                src={flower2}
                alt="sponser4 of the image"
                className="flex w-full h-full bg-center  rounded-lg"
              />
              <div className=" w-[329px] tablet:w-[210px] h-[560px] tablet:h-[357px]  absolute px-[13px] pb-[17px] flex flex-col justify-between tablet:justify-end">
                <div className=" tablet:bg-[#FFFFFF50] desktop:h-full desktop:flex flex-col justify-between">
                  <div className="h-[129px] tablet:h-[100px] w-[171px] tablet:ml-[-13px] tablet:w-[132px] desktop:mt-[38px] flex justify-center">
                    <p
                      className="tablet:hidden flex "
                      style={{
                        textShadow: "0px 4px 4px #006598",
                        color: "#EDF1F3",
                        fontWeight: 200,
                        fontSize: "128px",
                        lineHeight: "129px",
                        fontVariationSettings: "'opsz' 128",
                        fontVariationSettings: "'wdth' 105",
                      }}
                    >
                      02
                    </p>
                    <p
                      className="desktop:hidden flex "
                      style={{
                        textShadow: "0px 4px 4px #006598",
                        color: "#EDF1F3",
                        fontWeight: 200,
                        fontSize: "80px",
                        lineHeight: "100px",
                        fontVariationSettings: "'opsz' 80",
                        fontVariationSettings: "'wdth' 105",
                      }}
                    >
                      02
                    </p>
                  </div>
                  <div className="w-full px-[13px]  desktop:py-4 desktop:bg-[#FFFFFF50]  desktop:mt-4">
                    <div className="text-[16px] leading-[19px] tablet:leading-[24px] text-[#1E2125] font-medium tablet:font-normal">
                      Obstojnost cvetja je praviloma večja{" "}
                    </div>
                    <div
                      className="tablet:hidden flex"
                      style={{
                        marginTop: "24px",
                        color: "#414141",
                        fontSize: "14px",
                        fontWeight: 200,
                        fontVariationSettings: "'opsz' 14",
                        fontVariationSettings: "'wdth' 44",
                      }}
                    >
                      Cvetličarji namenjajo cvetju vso potrebno nego, da to
                      ostane sveže in zdravo, ustrezno je prezračevanje,
                      osvetljenost, vlažnost v prostoru. Njihove rože izžarevajo
                      drugače in to se zazna.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[337px] tablet:w-[218px] mobile:w-[263.15px] h-full rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
              <Image
                src={flower3}
                alt="sponser4 of the image"
                className="flex w-full h-full bg-center  rounded-lg"
              />
              <div className=" w-[329px] tablet:w-[210px] h-[560px] tablet:h-[357px]  absolute px-[13px]">
                <div className="h-[129px] tablet:h-[100px] w-[171px] tablet:ml-[-13px] tablet:mt-[9px] tablet:w-[132px] mt-[38px] flex justify-center">
                  <p
                    className="tablet:hidden flex "
                    style={{
                      textShadow: "0px 4px 4px #006598",
                      color: "#EDF1F3",
                      fontWeight: 200,
                      fontSize: "128px",
                      lineHeight: "129px",
                      fontVariationSettings: "'opsz' 128",
                      fontVariationSettings: "'wdth' 105",
                    }}
                  >
                    03
                  </p>
                  <p
                    className="desktop:hidden flex "
                    style={{
                      textShadow: "0px 4px 4px #006598",
                      color: "#EDF1F3",
                      fontWeight: 200,
                      fontSize: "80px",
                      lineHeight: "100px",
                      fontVariationSettings: "'opsz' 80",
                      fontVariationSettings: "'wdth' 105",
                    }}
                  >
                    03
                  </p>
                </div>
                <div className="w-full px-[13px] desktop:py-4 desktop:mt-4">
                  <div className="text-[16px] leading-[19px] tablet:leading-[24px] text-[#1E2125] font-medium tablet:font-normal">
                    Cvetje prilagojeno vsaki priložnosti
                  </div>
                  <div
                    className="tablet:hidden flex"
                    style={{
                      marginTop: "24px",
                      color: "#414141",
                      fontSize: "14px",
                      fontWeight: 200,
                      fontVariationSettings: "'opsz' 14",
                      fontVariationSettings: "'wdth' 44",
                    }}
                  >
                    Dolgoletne izkušnje se kažejo v vsaki njihovi kreaciji,
                    včasih tudi umetniškem pridihu, pogosto znajo cvetje
                    povezati v čudovite zgodbe. Nasvet: primerjajte vonj cvetja
                    v cvetličarni in trgovini.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="hidden mobile:flex w-full h-[440.29px] py-[10px] px-[30px] mt-[48px] mb-[23px] justify-between overflow-x-auto container-snap"
          >
            <ul className="flex w-full space-x-5">
              <li className="relative flex flex-shrink-0 w-[261.15px] h-full rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
                <Image
                  src={flower1}
                  alt="sponser4 of the image"
                  className="flex w-full h-full bg-center  rounded-lg"
                />
                <div className=" w-[255.15px] h-full absolute px-[10.08px]">
                  <div className="h-[100.04px] w-[132.61px] mt-[29px] flex justify-center">
                    <p
                      style={{
                        textShadow: "0px 4px 4px #006598",
                        color: "#EDF1F3",
                        fontWeight: 200,
                        fontSize: "100px",
                        lineHeight: "100.04px",
                        fontVariationSettings: "'opsz' 100",
                        fontVariationSettings: "'wdth' 105",
                      }}
                    >
                      01
                    </p>
                  </div>
                  <div className="w-full px-[10.08px] mt-6">
                    <div className="text-[16px] leading-[24px]  text-[#1E2125] font-normal">
                      Znanja in dolgoletne izkušnje
                    </div>
                    <div
                      className="tablet:hidden flex"
                      style={{
                        marginTop: "18px",
                        color: "#414141",
                        fontSize: "14px",
                        fontWeight: 400,
                        fontVariationSettings: "'opsz' 14",
                      }}
                    >
                      Pogosto premalo izpostavljena prednost lokalnih
                      cvetličarjev. So eksperti na svojem področju, ki radi
                      delijo svoje znanje in postrežejo nam z najboljšimi
                      nasveti, kar v veliki trgovini ni možno.
                    </div>
                  </div>
                </div>
              </li>

              <li className="relative flex flex-shrink-0 w-[261.15px] h-full rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
                <Image
                  src={flower2}
                  alt="sponser4 of the image"
                  className="flex w-full h-full bg-center  rounded-lg"
                />
                <div className=" w-[255.15px] h-full flex justify-between flex-col absolute px-[10.08px] ">
                  <div className="h-[100.04px] w-[132.61px] mt-[29px] flex justify-center">
                    <p
                      style={{
                        textShadow: "0px 4px 4px #006598",
                        color: "#EDF1F3",
                        fontWeight: 200,
                        fontSize: "100px",
                        lineHeight: "100.04px",
                        fontVariationSettings: "'opsz' 100",
                        fontVariationSettings: "'wdth' 105",
                      }}
                    >
                      02
                    </p>
                  </div>
                  <div className="w-full px-[10.08px] mt-6 mb-5 pb-1 pt-3 bg-[#ffffff50]">
                    <div className="text-[16px] leading-[24px]  text-[#1E2125] font-normal">
                      Obstojnost cvetja je praviloma večja{" "}
                    </div>
                    <div
                      className="tablet:hidden flex"
                      style={{
                        marginTop: "18px",
                        color: "#414141",
                        fontSize: "14px",
                        fontWeight: 400,
                        fontVariationSettings: "'opsz' 14",
                      }}
                    >
                      Cvetličarji namenjajo cvetju vso potrebno nego, da to
                      ostane sveže in zdravo, ustrezno je prezračevanje,
                      osvetljenost, vlažnost v prostoru. Njihove rože izžarevajo
                      drugače in to se zazna.
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative flex flex-shrink-0 w-[261.15px] h-full rounded-xl shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
                <Image
                  src={flower3}
                  alt="sponser4 of the image"
                  className="flex w-full h-full bg-center  rounded-lg"
                />
                <div className=" w-[255.15px] h-full absolute px-[10.08px]">
                  <div className="h-[100.04px] w-[132.61px] mt-[29px] flex justify-center">
                    <p
                      style={{
                        textShadow: "0px 4px 4px #006598",
                        color: "#EDF1F3",
                        fontWeight: 200,
                        fontSize: "100px",
                        lineHeight: "100.04px",
                        fontVariationSettings: "'opsz' 100",
                        fontVariationSettings: "'wdth' 105",
                      }}
                    >
                      03
                    </p>
                  </div>
                  <div className="w-full px-[10.08px] mt-6">
                    <div className="text-[16px] leading-[24px]  text-[#1E2125] font-normal">
                      Cvetje prilagojeno vsaki priložnosti{" "}
                    </div>
                    <div
                      className="tablet:hidden flex"
                      style={{
                        marginTop: "18px",
                        color: "#414141",
                        fontSize: "14px",
                        fontWeight: 400,
                        fontVariationSettings: "'opsz' 14",
                      }}
                    >
                      Dolgoletne izkušnje se kažejo v vsaki njihovi kreaciji,
                      včasih tudi umetniškem pridihu, pogosto znajo cvetje
                      povezati v čudovite zgodbe. Nasvet: primerjajte vonj
                      cvetja v cvetličarni in trgovini.
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/*Bottom text container */}
          <div className=" flex">
            <div className="text-[40px] tablet:text-[32px] mobile:text-[20px] mobile:leading-[36px] leading-[48px] font-normal text-[#000000]">
              Podprimo lokalno!
            </div>
            <button
              onClick={() => scroll("left")}
              className="hidden mobile:flex ml-12 w-[36px] h-[36px] rounded-lg text-black justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
            >
              <Image
                src={imgPrevious}
                alt="imgPrevious"
                className=" w-[8.43px] h-[13.79px]"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className=" hidden mobile:flex ml-3 w-[36px] h-[36px] rounded-lg text-black justify-center items-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]"
            >
              <Image
                src={imgNext}
                alt="imgNext"
                className=" w-[8.43px] h-[13.79px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalFloristCompo;
