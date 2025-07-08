"use client";
import React, { useState, useEffect } from "react";
import MegaMenuCompo from "../components/appcomponents/MegaMenuCompo";
import MemorialMenuCompo from "../components/appcomponents/MemorialMenuCompo";
import FloritsMenuCompo from "../components/appcomponents/FloritsMenuCompo";
import ContactMenuCompo from "../components/appcomponents/ContactMenuCompo";
import Image from "next/image";

const MegaMenu = () => {
  const [activeButton, setActiveButton] = useState("Osmrtnice"); // Default to 'Osmrtnice'
  const [isFor, setIsFor] = useState("desktop"); // Default to 'mob'
  const [activeDiv, setActiveDiv] = useState(1);

  const showDiv = (divId) => {
    setActiveDiv(divId);
  };

  // static data for acitve button for tablet
  const headingFirstList = [{ title: "Pogrebi" }];

  const subHeadingFirstList = [{ title: "Oddaja osmrtnice" }];

  const headingSecondList = [{ title: "Spominska s Skrbnikom" }];

  const subHeadingSecondList = [{ title: "Postani Skrbnik Spominske strani" }];

  const headingThirdList = [{ title: "Pogrebna podjetja" }];

  const subHeadingThirdList = [{ title: "Za oglaševalce" }];

  const headingFourList = [{ title: "Preostale strani" }];

  const subHeadingFourList = [{ title: "Kontaktne informacije" }];

  const headingFifthList = [{ title: "Moj račun (prijava / registracija)" }];

  // useEffect to detect screen size and update 'isFor' state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 680) {
        console.log("is in mobile ----->>>>>");
        setIsFor("mob"); // Mobile view
      } else if (window.innerWidth <= 1199) {
        console.log("is in tablet ----->>>>>");
        setIsFor("tab"); // Tablet view
      } else {
        console.log("is in desktop ----->>>>>");
        setIsFor("desktop"); // Desktop view
      }
    };

    // Run on component mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure this runs once when the component mounts

  // Conditionally render components based on activeButton state
  const renderActiveComponent = () => {
    switch (activeButton) {
      case "Osmrtnice":
        return <MegaMenuCompo setActiveButton={setActiveButton} />;
      case "Spominska":
        return <MemorialMenuCompo setActiveButton={setActiveButton} />;
      case "Lokalne cvetličarne":
        return <FloritsMenuCompo setActiveButton={setActiveButton} />;
      default:
        return <ContactMenuCompo setActiveButton={setActiveButton} />;
    }
  };

  return (
    <div className="flex flex-col gap-y-8 min-h-screen w-full overflow-hidden mx-auto bg-[#ECF0F3] px-[50px] mobile:px-5 py-[20px]">
      {/* Render the active component */}
      {/* {renderActiveComponent()} */}

      {/* Conditionally render based on screen size */}
      {isFor === "desktop" ? (
        <div>{renderActiveComponent()}</div>
      ) : isFor === "tab" ? (
        <div className="flex w-full h-full overflow-hidden bg-[#FFFFFF]">
          {/* main container */}
          <div className="flex flex-col w-full h-full">
            {/* main container of two boxes */}
            <div className="flex mx-auto flex-row justify-center p-2 ">
              {/* acitve button container */}
              <div className="flex flex-col space-y-3 mt-8">
                {/* first button container (Osmrtnice) */}
                <div className="flex flex-row ">
                  {/* image container */}
                  <div className="w-6 h-6 mt-1">
                    <Image
                      src={"/img_profile_vector.png"}
                      width={24}
                      height={24}
                      alt="image obituary profile"
                    />
                  </div>

                  {/* text container */}
                  <div className="flex flex-col px-2 justify-center">
                    {/* <div className='text-[16px] font-medium text-[#0A85C2]'>Osmrtnice</div> */}

                    <div className="py-1 flex flex-row space-x-3 items-center">
                      <div className="text-[16px] font-medium text-[#0A85C2]">
                        Osmrtnice
                      </div>

                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_blue_left_arrow.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>

                    {/* this is heading container for pogrebilist*/}
                    {headingFirstList.map((item, index) => (
                      <div key={index} className="py-1 flex flex-row space-x-3 items-center">
                        <div
                          key={index}
                          className="text-[16px] font-medium text-[#0A85C2]"
                        >
                          {item.title}
                        </div>

                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_blue_left_arrow.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    ))}

                    {/* this is heading container for pogrebilist*/}
                    {subHeadingFirstList.map((item, index) => (
                      <div key={index} className="px-5 py-1 flex flex-row space-x-3 items-center">
                        <div
                          onClick={() => showDiv(1)}
                          key={index}
                          className="text-[14px] font-medium text-[#0A85C2]"
                        >
                          {item.title}
                        </div>

                        <div className="w-[11px] h-[6px]">
                          <Image
                            src={"/img_blue_down_arrow.png"}
                            width={11}
                            height={6}
                            className="h-[6px] w-[11px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Second button container (Spominska stran) */}
                <div className="flex flex-row ">
                  {/* image container */}
                  <div className="w-6 h-6 mt-1">
                    <Image
                      src={"/img_memorial_vector.png"}
                      width={24}
                      height={24}
                      alt="image obituary profile"
                    />
                  </div>

                  {/* text container */}
                  <div className="flex flex-col px-2 justify-center">
                    <div className="py-1 flex flex-row space-x-3 items-center">
                      <div className="text-[16px] font-medium text-[#5EAE91]">
                        Spominska stran
                      </div>

                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_green_left_arrow.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>

                    {/* this is heading container for pogrebilist*/}
                    {headingSecondList.map((item, index) => (
                      <div key={index} className="py-1 flex flex-row space-x-3 items-center">
                        <div
                          key={index}
                          className="text-[16px] font-medium text-[#5EAE91]"
                        >
                          {item.title}
                        </div>

                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_green_left_arrow.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    ))}

                    {/* this is heading container for pogrebilist*/}
                    {subHeadingSecondList.map((item, index) => (
                      <div key={index} className="px-5 py-1 flex flex-row space-x-3 items-center">
                        <div
                          onClick={() => showDiv(1)}
                          key={index}
                          className="text-[14px] font-medium text-[#5EAE91]"
                        >
                          {item.title}
                        </div>

                        <div className="w-[11px] h-[6px]">
                          <Image
                            src={"/img_green_down_arrow.png"}
                            width={11}
                            height={6}
                            className="h-[6px] w-[11px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Third button container (Spominska stran) */}
                <div className="flex flex-row ">
                  {/* image container */}
                  <div className="w-6 h-6 mt-1 items-center flex">
                    <Image
                      src={"/img_flower.png"}
                      width={24}
                      height={24}
                      alt="image obituary profile"
                    />
                  </div>

                  {/* text container */}
                  <div className="flex flex-col px-2 justify-center">
                    <div className="py-1 flex flex-row space-x-3 items-center">
                      <div className="text-[16px] font-medium text-[#F48F53]">
                        Lokalne cvetličarne
                      </div>

                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_left_arrow_orange.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>

                    {/* this is heading container for pogrebilist*/}
                    {headingThirdList.map((item, index) => (
                      <div key={index} className="py-1 flex flex-row space-x-3 items-center">
                        <div
                          key={index}
                          className="text-[16px] font-medium text-[#F48F53]"
                        >
                          {item.title}
                        </div>

                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_left_arrow_orange.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    ))}

                    {/* this is heading container for pogrebilist*/}
                    {subHeadingThirdList.map((item, index) => (
                      <div key={index} className="px-5 py-1 flex flex-row space-x-3 items-center">
                        <div
                          onClick={() => showDiv(2)}
                          key={index}
                          className="text-[14px] font-medium text-[#F48F53]"
                        >
                          {item.title}
                        </div>

                        <div className="w-[11px] h-[6px]">
                          <Image
                            src={"/img_orange_down_arrow.png"}
                            width={11}
                            height={6}
                            className="h-[6px] w-[11px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* fourth button container (Spominska stran) */}
                <div className="flex flex-row ">
                  {/* image container */}
                  <div className="w-6 h-6 mt-1 items-center flex">
                    <Image
                      src={"/img_four_dots.png"}
                      width={24}
                      height={24}
                      alt="image obituary profile"
                    />
                  </div>

                  {/* text container */}
                  <div className="flex flex-col px-2 justify-center">
                    {headingFourList.map((item, index) => (
                      <div
                        key={index}
                        className="py-1 flex flex-row space-x-3 items-center"
                      >
                        <div className="text-[16px] font-medium text-[#9A4497]">
                          {item.title}
                        </div>

                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_left_arrow_purple_one.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    ))}

                    {/* this is heading container for pogrebilist*/}
                    {subHeadingFourList.map((item, index) => (
                      <div key={index} className="py-1 flex flex-row space-x-3 items-center">
                        <div
                          onClick={() => showDiv(3)}
                          key={index}
                          className="text-[14px] font-medium text-[#9A4497]"
                        >
                          {item.title}
                        </div>

                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_left_arrow_purple_one.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* fith button container (Spominska stran) */}
                <div className="flex flex-row ">
                  {/* image container */}
                  <div className="w-[21px] h-[21px] mt-1 items-center flex">
                    <Image
                      src={"/img_profile_black.png"}
                      width={21}
                      height={21}
                      alt="image obituary profile"
                    />
                  </div>

                  {/* text container */}
                  <div className="flex flex-col px-2 justify-center">
                    {headingFifthList.map((item, index) => (
                      <div
                        key={index}
                        className="py-1 flex flex-row space-x-3 items-center"
                      >
                        <div className="text-[16px] font-medium text-[#1E2125]">
                          {item.title}
                        </div>

                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_left_arrow_black.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* cancel button container */}
              <div className="flex relative flex-row px-[20px] py-[30px] justify-center items-center">
                <div className="flex w-[56px] h-[56px] absolute top-0 right-0">
                  <Image src={"/img_cancel.png"} width={56} height={56} />
                </div>

                {/* popup button conatiner for button one & two */}
                {activeDiv === 1 && (
                  <div className="flex flex-col w-[270px] gap-y-[6px] bg-gradient-to-b from-[#B6ECEC40] to-[#BEF4F400] shadow-custom-megamenu-shadow-box text-black rounded-[10px]">
                    {/* <div className="flex w-[56px] h-[56px] bg-yellow-300 "></div> */}
                    {/* title container */}
                    <div className="flex h-full flex-col py-[10px] px-3 bg-gradient-to-b from-[#87C3FE00] to-[#B6ECEC20]">
                      {/* first title container */}
                      <div
                        style={{
                          fontSize: "12px",
                          lineHeight: "26px",
                          width: "227px",
                          fontWeight: 500,
                          color: "#00B4D8",
                          fontVariationSettings: "'opsz' 12",
                        }}
                      >
                        PROMOCIJA
                      </div>

                      {/* Second title container */}
                      <div
                        style={{
                          fontSize: "24px",
                          lineHeight: "26px",
                          height: "38px",
                          fontWeight: 500,
                          color: "#686868",
                          fontVariationSettings: "'opsz' 24",
                        }}
                      >
                        VSE BREZPLAČNO
                      </div>

                      {/* Third title container */}
                      <div className="text-[14px] font-normal text-[#686868] mt-[10px]">
                        BREZPLAČNI Skrbnik. Brezplačnih tudi 25+ opcij, ki jih
                        prinaša Skrbnik.
                      </div>
                      <div className="text-[14px] font-normal text-[#686868] mt-[10px]">
                        BREZPLAČNE predloge za obveščanje prilagojene mobilnemu
                        telefonu.
                      </div>
                      <div className="text-[14px] font-normal text-[#686868] mt-[10px]">
                        BREZPLAČNI poudarjen okvir s svečko za deljenje zgodb in
                        čarobnih trenutkov. Da bo spominska stran najdražjih
                        sevala še več topline, bila še bolj osebna.
                      </div>
                      <div className="text-[14px] font-normal text-[#686868] mt-[10px]">
                        Vse navedeno vam izdelajo in podarijo v vaši lokalni
                        cvetličarni. Povprašajte jih.
                      </div>

                      {/* 6th title contianer */}
                      <div className="flex flex-row items-center mt-6">
                        <div className="text-[16px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                          Več o promociji
                        </div>
                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_blue_left_arrow.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* popup button container for third button */}
                {activeDiv === 2 && (
                  <div className="flex flex-col w-full max-w-[297px] gap-y-[6px] bg-gradient-to-b from-[#1464E1] to-[#1151B5] shadow-custom-megamenu-shadow-box text-black rounded-[10px]">
                    {/* title container */}
                    <div className="flex flex-col py-[28px] px-3 ">
                      {/* first title container */}
                      <div
                        style={{
                          fontSize: "18px",
                          lineHeight: "26px",
                          width: "240px",
                          fontWeight: 400,
                          color: "#E8FDF1",
                          fontVariationSettings: "'opsz' 18",
                        }}
                      >
                        IMATE CVETLIČARNO?
                      </div>

                      {/* 2nd title container */}
                      <div className="text-[14px] font-normal text-[#E8FDF1] mt-[14px]">
                        Otvoritvena akcija BREZ RIZIKA pravkar poteka.
                        Preverite!
                      </div>

                      {/* 3rd title contianer */}
                      <div className="flex flex-row items-center mt-[22px]">
                        <div className="text-[16px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                          Več o promociji
                        </div>
                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_blue_left_arrow.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>

                      {/* 4th title container */}
                      <div
                        style={{
                          fontSize: "18px",
                          lineHeight: "26px",
                          width: "240px",
                          marginTop: "22px",
                          fontWeight: 500,
                          color: "#E8FDF1",
                          fontVariationSettings: "'opsz' 18",
                        }}
                      >
                        STE OGLAŠEVALCI?
                      </div>

                      {/* 5th title container */}
                      <div className="text-[14px] font-normal text-[#E8FDF1] mt-[12px]">
                        Ponujate produkte ali storitve, ki bi lahko bili
                        zanimivi za obiskovalce te spletne strani? Pošljite nam
                        sporočilo, predloge, vprašanja.
                      </div>

                      {/* 6th title contianer */}
                      <div className="flex flex-row items-center mt-4 mb-12">
                        <div className="text-[16px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                          Kontaktirajte nas
                        </div>
                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_blue_left_arrow.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* popup button container for four button */}
                {activeDiv === 3 && (
                  <div className="flex flex-col w-[270px] gap-y-[6px] bg-gradient-to-b from-[#B6ECEC40] to-[#BEF4F400] shadow-custom-megamenu-shadow-box text-black rounded-[10px]">
                    {/* title container */}
                    <div className="flex flex-col py-[10px] px-3 bg-gradient-to-b from-[#87C3FE00] to-[#B6ECEC20]">
                      {/* first title container */}
                      <div
                        style={{
                          fontSize: "12px",
                          lineHeight: "26px",
                          width: "227px",
                          fontWeight: 500,
                          marginTop: 8,
                          color: "#00B4D8",
                          fontVariationSettings: "'opsz' 12",
                        }}
                      >
                        KORISTNO
                      </div>

                      {/* Second title container */}
                      <div
                        style={{
                          fontSize: "18px",
                          lineHeight: "26px",
                          height: "38px",
                          fontWeight: 500,
                          marginTop: 5,
                          color: "#686868",
                          fontVariationSettings: "'opsz' 18",
                        }}
                      >
                        OPOMNIK ZA OBLETNICE
                      </div>

                      {/* Third title container */}
                      <p className="text-[12px] font-normal text-[#686868] mt-[25px]">
                        Spominske strani, kjer sodelujete (oddate sožalje, se
                        vpišete v Žalno knjigo, itd.), se vam shranijo v vaš
                        uporabniški račun. Tam so prikazani tudi bolj podrobni
                        podatki o strani, hkrati pa vas avtomatsko obveščajo o
                        prihajajočih obletnicah - in obvestila o le-teh boste
                        prejemali pravočasno tudi na email. Nikoli več ne boste
                        zamudili obletnice. Tudi to je seveda brezplačno.
                      </p>

                      {/* 6th title contianer */}
                      <div className="flex flex-row items-center mt-[68px]">
                        <div className="text-[12px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                          Več o promociji
                        </div>
                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_blue_left_arrow.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* footer container */}
            <div className="flex w-full h-[71px]"></div>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full bg-[#FFFFFF] overflow-hidden ">
          {/* main container */}
          <div className="flex relative flex-col w-full pt-8 pb-8 h-full">
             {/* cancel button container */}
                <div className="flex absolute flex-row px-[20px] py-[30px] top-5 right-10 justify-center items-center">
                <div className="flex w-12 h-12 absolute top-0 right-0">
                  <Image src={"/img_cancel.png"} width={48} height={48} />
                </div>
                </div>
              
            {/* acitve button container */}
            <div className="flex flex-col space-y-4 mx-auto">
              
              {/* this is container for wraping */}
              
                   {/* first button container (Osmrtnice) */}
              <div className="flex flex-row ">
                {/* image container */}
                <div className="w-6 h-6 mt-1">
                  <Image
                    src={"/img_profile_vector.png"}
                    width={24}
                    height={24}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col px-2 justify-center">
                  {/* <div className='text-[16px] font-medium text-[#0A85C2]'>Osmrtnice</div> */}

                  <div className="py-1 flex flex-row space-x-3 items-center">
                    <div className="text-[16px] font-medium text-[#0A85C2]">
                      Osmrtnice
                    </div>

                    <div className="w-[6px] h-[11px]">
                      <Image
                        src={"/img_blue_left_arrow.png"}
                        width={6}
                        height={11}
                        className="h-[11px] w-[6px]"
                        alt="image obituary profile"
                      />
                    </div>
                    
                  </div>

                  {/* this is heading container for pogrebilist*/}
                  {headingFirstList.map((item, index) => (
                    <div key={index} className="py-1 flex flex-row space-x-3 items-center">
                      <div
                        key={index}
                        className="text-[16px] font-medium text-[#0A85C2]"
                      >
                        {item.title}
                      </div>

                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_blue_left_arrow.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  ))}

                  {/* this is heading container for pogrebilist*/}
                  {subHeadingFirstList.map((item, index) => (
                    <div key={index} className="px-5 py-1 flex flex-row space-x-3 items-center">
                      <div
                        onClick={() => showDiv(1)}
                        key={index}
                        className="text-[14px] font-medium text-[#0A85C2]"
                      >
                        {item.title}
                      </div>

                      <div className="w-[11px] h-[6px]">
                        <Image
                          src={"/img_blue_down_arrow.png"}
                          width={11}
                          height={6}
                          className="h-[6px] w-[11px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  ))}

                  {activeDiv === 1 && (
                       <div className="flex flex-col gap-y-[10px] bg-[#E3E8EC60] rounded-[10px]">
                       {/* 1st title container */}
                       <div className="flex  w-full max-w-[270px]">
                         {/* main container which is wrapped inside */}
                         <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
                           <div className="flex flex-row items-start ">
                             {/* text container */}
                             <div className="flex flex-col  justify-center  ">
                               <div className="text-[14px] font-medium text-[#535353] leading-[26px]">
                                 Preko pogrebnega podjetja
                               </div>
   
                               <div className="text-[12px] font-normal text-[#686868] mt-2">
                                 Osmrtnico vam bo BREZPLAČNO vneslo pogrebno
                                 podjetje. Kontaktirajte jih.
                               </div>
   
                               <div className="flex flex-row items-center mt-1 justify-between ">
                                 <div className="text-[12px] font-normal text-[#0A85C2] leading-[22px] mr-[2px]">
                                   Poišči pogrebno podjetje
                                 </div>
                                 <div className="w-[6px] h-[11px]">
                                   <Image
                                     src={"/img_blue_left_arrow.png"}
                                     width={6}
                                     height={11}
                                     className="h-[11px] w-[6px]"
                                     alt="image obituary profile"
                                   />
                                 </div>
                               </div>
   
                               <div className="text-[14px] font-medium text-[#535353] leading-[26px] mt-5">
                                 Oddaja osmrtnice preko naše strani
                               </div>
   
                               <div className="text-[12px] font-normal text-[#686868] mt-1">
                                 ...je enako brezplačna, vendar je pogojena s
                                 hkratnim naročilom Spominske strani, ki stane
                                 20€+DDV (in postanete Skrbnik).
                               </div>
   
                               <div className="flex flex-row items-center mt-1 justify-between ">
                                 <div className="text-[12px] font-normal text-[#0A85C2] leading-[22px] mr-[2px]">
                                   Oddaj osmrtnico in postani Skrbnik strani
                                 </div>
                                 <div className="w-[6px] h-[11px]">
                                   <Image
                                     src={"/img_blue_left_arrow.png"}
                                     width={6}
                                     height={11}
                                     className="h-[11px] w-[6px]"
                                     alt="image obituary profile"
                                   />
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                  )}
                  {/* first visible popup */}
                 
                </div>
              </div>

              {/* Second button container (Spominska stran) */}
              <div className="flex flex-row ">
                {/* image container */}
                <div className="w-6 h-6 mt-1">
                  <Image
                    src={"/img_memorial_vector.png"}
                    width={24}
                    height={24}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col px-2 justify-center">
                  <div className="py-1 flex flex-row space-x-3 items-center">
                    <div className="text-[16px] font-medium text-[#5EAE91]">
                      Spominska stran
                    </div>

                    <div className="w-[6px] h-[11px]">
                      <Image
                        src={"/img_green_left_arrow.png"}
                        width={6}
                        height={11}
                        className="h-[11px] w-[6px]"
                        alt="image obituary profile"
                      />
                    </div>
                  </div>

                  {/* this is heading container for pogrebilist*/}
                  {headingSecondList.map((item, index) => (
                    <div key={index} className="py-1 flex flex-row space-x-3 items-center">
                      <div
                        key={index}
                        className="text-[16px] font-medium text-[#5EAE91]"
                      >
                        {item.title}
                      </div>

                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_green_left_arrow.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  ))}

                  {/* this is heading container for pogrebilist*/}
                  {subHeadingSecondList.map((item, index) => (
                    <div key={index} className="px-5 py-1 flex flex-row space-x-3 items-center">
                      <div
                        onClick={() => showDiv(2)}
                        key={index}
                        className="text-[14px] font-medium text-[#5EAE91]"
                      >
                        {item.title}
                      </div>

                      <div className="w-[11px] h-[6px]">
                        <Image
                          src={"/img_green_down_arrow.png"}
                          width={11}
                          height={6}
                          className="h-[6px] w-[11px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  ))}

                     {/* popup button container for third button */}
                     {activeDiv === 2 && (
                       <div className="flex flex-col gap-y-[10px] bg-[#E3E8EC60] rounded-[10px]">
                       {/* 1st title container */}
                       <div className="flex  w-full max-w-[270px]">
                         {/* main container which is wrapped inside */}
                         <div className="flex flex-1 flex-row justify-between py-[10px] px-[10px] ">
                           <div className="flex flex-row items-start ">
                             {/* text container */}
                             <div className="flex flex-col  justify-center  ">
                               <div className="text-[14px] font-medium text-[#535353] leading-[26px]">
                                 Preko pogrebnega podjetja
                               </div>
   
                               <div className="text-[12px] font-normal text-[#686868] mt-2">
                                 Osmrtnico vam bo BREZPLAČNO vneslo pogrebno
                                 podjetje. Kontaktirajte jih.
                               </div>
   
                               <div className="flex flex-row items-center mt-1 justify-between ">
                                 <div className="text-[12px] font-normal text-[#0A85C2] leading-[22px] mr-[2px]">
                                   Poišči pogrebno podjetje
                                 </div>
                                 <div className="w-[6px] h-[11px]">
                                   <Image
                                     src={"/img_blue_left_arrow.png"}
                                     width={6}
                                     height={11}
                                     className="h-[11px] w-[6px]"
                                     alt="image obituary profile"
                                   />
                                 </div>
                               </div>
   
                               <div className="text-[14px] font-medium text-[#535353] leading-[26px] mt-5">
                                 Oddaja osmrtnice preko naše strani
                               </div>
   
                               <div className="text-[12px] font-normal text-[#686868] mt-1">
                                 ...je enako brezplačna, vendar je pogojena s
                                 hkratnim naročilom Spominske strani, ki stane
                                 20€+DDV (in postanete Skrbnik).
                               </div>
   
                               <div className="flex flex-row items-center mt-1 justify-between ">
                                 <div className="text-[12px] font-normal text-[#0A85C2] leading-[22px] mr-[2px]">
                                   Oddaj osmrtnico in postani Skrbnik strani
                                 </div>
                                 <div className="w-[6px] h-[11px]">
                                   <Image
                                     src={"/img_blue_left_arrow.png"}
                                     width={6}
                                     height={11}
                                     className="h-[11px] w-[6px]"
                                     alt="image obituary profile"
                                   />
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                  )}
                </div>
              </div>

              {/* Third button container (Spominska stran) */}
              <div className="flex flex-row ">
                {/* image container */}
                <div className="w-6 h-6 mt-1 items-center flex">
                  <Image
                    src={"/img_flower.png"}
                    width={24}
                    height={24}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col px-2 justify-center">
                  <div className="py-1 flex flex-row space-x-3 items-center">
                    <div className="text-[16px] font-medium text-[#F48F53]">
                      Lokalne cvetličarne
                    </div>

                    <div className="w-[6px] h-[11px]">
                      <Image
                        src={"/img_left_arrow_orange.png"}
                        width={6}
                        height={11}
                        className="h-[11px] w-[6px]"
                        alt="image obituary profile"
                      />
                    </div>
                  </div>

                  {/* this is heading container for pogrebilist*/}
                  {headingThirdList.map((item, index) => (
                    <div key={index} className="py-1 flex flex-row space-x-3 items-center">
                      <div
                        key={index}
                        className="text-[16px] font-medium text-[#F48F53]"
                      >
                        {item.title}
                      </div>

                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_left_arrow_orange.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  ))}

                  {/* this is heading container for pogrebilist*/}
                  {subHeadingThirdList.map((item, index) => (
                    <div key={index} className="px-5 py-1 flex flex-row space-x-3 items-center">
                      <div
                        onClick={() => showDiv(3)}
                        key={index}
                        className="text-[14px] font-medium text-[#F48F53]"
                      >
                        {item.title}
                      </div>

                      <div className="w-[11px] h-[6px]">
                        <Image
                          src={"/img_orange_down_arrow.png"}
                          width={11}
                          height={6}
                          className="h-[6px] w-[11px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  ))}

                   {/* popup button container for third button */}
                {activeDiv === 3 && (
                  <div className="flex flex-col w-full max-w-[252px] gap-y-1 bg-gradient-to-b from-[#1464E1] to-[#1151B5] shadow-custom-megamenu-shadow-box text-black rounded-[10px]">
                    {/* title container */}
                    <div className="flex flex-col py-5 px-3 ">
                      {/* first title container */}
                      <div
                        style={{
                          fontSize: "18px",
                          lineHeight: "26px",
                          width: "240px",
                          fontWeight: 400,
                          color: "#E8FDF1",
                          fontVariationSettings: "'opsz' 18",
                        }}
                      >
                        IMATE CVETLIČARNO?
                      </div>

                      {/* 2nd title container */}
                      <div className="text-[12px] font-normal text-[#E8FDF1] mt-[10px]">
                        Otvoritvena akcija BREZ RIZIKA pravkar poteka.
                        Preverite!
                      </div>

                      {/* 3rd title contianer */}
                      <div className="flex flex-row items-center mt-4">
                        <div className="text-[14px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                          Več o promociji
                        </div>
                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_blue_left_arrow.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>

                      {/* 4th title container */}
                      <div
                        style={{
                          fontSize: "18px",
                          lineHeight: "26px",
                          width: "240px",
                          marginTop: "16px",
                          fontWeight: 500,
                          color: "#E8FDF1",
                          fontVariationSettings: "'opsz' 18",
                        }}
                      >
                        STE OGLAŠEVALCI?
                      </div>

                      {/* 5th title container */}
                      <div className="text-[12px] font-normal text-[#E8FDF1] mt-[12px]">
                        Ponujate produkte ali storitve, ki bi lahko bili
                        zanimivi za obiskovalce te spletne strani? Pošljite nam
                        sporočilo, predloge, vprašanja.
                      </div>

                      {/* 6th title contianer */}
                      <div className="flex flex-row items-center mt-2">
                        <div className="text-[14px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                          Kontaktirajte nas
                        </div>
                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_blue_left_arrow.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                </div>
              </div>

              {/* fourth button container (Spominska stran) */}
              <div className="flex flex-row ">
                {/* image container */}
                <div className="w-6 h-6 mt-1 items-center flex">
                  <Image
                    src={"/img_four_dots.png"}
                    width={24}
                    height={24}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col px-2 justify-center">
                  {headingFourList.map((item, index) => (
                    <div
                      key={index}
                      className="py-1 flex flex-row space-x-3 items-center"
                    >
                      <div className="text-[16px] font-medium text-[#9A4497]">
                        {item.title}
                      </div>

                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_left_arrow_purple_one.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  ))}

                  {/* this is heading container for pogrebilist*/}
                  {subHeadingFourList.map((item, index) => (
                    <div key={index} className="py-1 flex flex-row space-x-3 items-center">
                      <div
                        onClick={() => showDiv(4)}
                        key={index}
                        className="text-[14px] font-medium text-[#9A4497]"
                      >
                        {item.title}
                      </div>

                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_left_arrow_purple_one.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  ))}

                  {/* popup button container for four button */}
                {activeDiv === 4 && (
                  <div className="flex flex-col w-[252px] gap-y-[6px] bg-gradient-to-b from-[#B6ECEC40] to-[#BEF4F400] shadow-custom-megamenu-shadow-box text-black rounded-[10px]">
                    {/* title container */}
                    <div className="flex flex-col py-[10px] px-3 bg-gradient-to-b from-[#87C3FE00] to-[#B6ECEC20]">
                      {/* first title container */}
                      <div
                        style={{
                          fontSize: "12px",
                          lineHeight: "26px",
                          width: "227px",
                          fontWeight: 500,
                          marginTop: 8,
                          color: "#00B4D8",
                          fontVariationSettings: "'opsz' 12",
                        }}
                      >
                        KORISTNO
                      </div>

                      {/* Second title container */}
                      <div
                        style={{
                          fontSize: "18px",
                          lineHeight: "26px",
                          height: "38px",
                          fontWeight: 500,
                          marginTop: 5,
                          color: "#686868",
                          fontVariationSettings: "'opsz' 18",
                        }}
                      >
                        OPOMNIK ZA OBLETNICE
                      </div>

                      {/* Third title container */}
                      <p className="text-[12px] font-normal text-[#686868] mt-3">
                        Spominske strani, kjer sodelujete (oddate sožalje, se
                        vpišete v Žalno knjigo, itd.), se vam shranijo v vaš
                        uporabniški račun. Tam so prikazani tudi bolj podrobni
                        podatki o strani, hkrati pa vas avtomatsko obveščajo o
                        prihajajočih obletnicah - in obvestila o le-teh boste
                        prejemali pravočasno tudi na email. Nikoli več ne boste
                        zamudili obletnice. Tudi to je seveda brezplačno.
                      </p>

                      {/* 6th title contianer */}
                      <div className="flex flex-row items-center mt-10">
                        <div className="text-[12px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                          Več o promociji
                        </div>
                        <div className="w-[6px] h-[11px]">
                          <Image
                            src={"/img_blue_left_arrow.png"}
                            width={6}
                            height={11}
                            className="h-[11px] w-[6px]"
                            alt="image obituary profile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                </div>
              </div>

              {/* fith button container (Spominska stran) */}
              <div className="flex flex-row ">
                {/* image container */}
                <div className="w-[21px] h-[21px] mt-1 items-center flex">
                  <Image
                    src={"/img_profile_black.png"}
                    width={21}
                    height={21}
                    alt="image obituary profile"
                  />
                </div>

                {/* text container */}
                <div className="flex flex-col px-2 justify-center">
                  {headingFifthList.map((item, index) => (
                    <div
                      key={index}
                      className="py-1 flex flex-row space-x-3 items-center"
                    >
                      <div className="text-[16px] font-medium text-[#1E2125]">
                        {item.title}
                      </div>

                      <div className="w-[6px] h-[11px]">
                        <Image
                          src={"/img_left_arrow_black.png"}
                          width={6}
                          height={11}
                          className="h-[11px] w-[6px]"
                          alt="image obituary profile"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* 6th button container */}
              <div className="flex  w-full max-w-[300px] mx-auto flex-col mt-10 ">
              <div onClick={() => showDiv(5)} className="flex py-3 w-full rounded-tr-lg rounded-tl-lg border-[2px] border-[#0A85C2] bg-gradient-to-b to-[#1151B5] from-[#1464E1] text-[16px] text-[#ffffff] justify-center items-center ">
                <div className="flex flex-row items-center gap-3">
                  <div className="text-[16px] text-[#ffffff]">
                    PROMOCIJA Vse brezplačno
                  </div>
                  <Image
                    src={"/img_white_arrow_down.png"}
                    height={12}
                    width={12}
                    alt="white arrow down img"
                  />
                </div>
              </div>

              {activeDiv === 5 && (
                       <div className="flex flex-col gap-y-[10px] shadow-custom-light-dark-mega-menu mb-[10px] rounded-bl-[10px] rounded-br-[10px] bg-gradient-to-b from-[#B6ECEC19] to-[#BEF4F419] border-b-[1px] border-l-[1px] border-r-[1px] border-[#1151B5]">
                       {/* 1st title container */}
                       <div className="flex w-full ">
                         {/* main container which is wrapped inside */}
                         <div className="flex w-full flex-row justify-between py-5 px-[10px]">
                           <div className="flex flex-row items-start ">
                             {/* text container */}
                             <div className="flex flex-col  justify-center ">
                               <div className="text-[14px] font-normal text-[#686868]">
                               BREZPLAČNI Skrbnik. Brezplačnih tudi 25+ opcij, ki jih prinaša Skrbnik.                                      </div>
   
                               <div className="text-[14px] font-normal text-[#686868] mt-3">
                               BREZPLAČNE predloge za obveščanje prilagojene mobilnemu telefonu.                               </div>
   
                             
                               <div className="text-[14px] font-normal text-[#686868] mt-3">
                               BREZPLAČNI poudarjen okvir s svečko za deljenje zgodb in čarobnih trenutkov. Da bo spominska stran najdražjih sevala še več topline, bila še bolj osebna.
                               </div>

                               <div className="text-[14px] font-normal text-[#686868] mt-3">
                               Vse navedeno vam izdelajo in podarijo v vaši lokalni cvetličarni. Povprašajte jih.  
                               </div>      
   
                               <div className="flex flex-row items-center mt-3">
                                <div className="text-[16px] font-normal text-[#41C0FF] leading-[22px] mr-[10px]">
                                Več o promociji
                                </div>
                                <div className="w-[6px] h-[11px]">
                                  <Image
                                    src={"/img_blue_left_arrow.png"}
                                    width={6}
                                    height={11}
                                    className="h-[11px] w-[6px]"
                                    alt="image obituary profile"
                                  />
                                </div>
                              </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                  )}
              </div>  
              </div>
             

             
              
            </div>
          </div>
      )}
    </div>
  );
};

export default MegaMenu;
