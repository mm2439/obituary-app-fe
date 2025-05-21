"use client"
import React from "react";
const MemoralPopup = ({setIsMemoralPopupVisible}) => {
  return (
    <div className="fixed z-50 w-full top-0 left-0 bg-[#4D4D4D] h-screen py-[80px]" onClick={() => setIsMemoralPopupVisible(false)}>
      <div className="relative mx-auto max-w-[1280px] flex justify-center mobile:w-[360px] w-full h-full mt-[5px]" onClick={(e) => e.stopPropagation()}>
        <div className="w-[700px] h-[433px] bg-[#E7EEF3] rounded-[16px] p-[6px]">
          <div className="flex justify-end mb-[20px] mobile:mb-[10px]">
            <img src={"./arrow_back_icon.png"} alt="Close" className="w-[70px] h-[70px] cursor-pointer" onClick={() => setIsMemoralPopupVisible(false)} />
          </div>
          <div className="px-[33px] pt-[36px] pb-[50px] mobile:pl-[14px] mobile:pr-[28px] mobile:pt-[40px] mobile:pb-[36px] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] rounded-[2px] border-[1px] border-[#0A85C2] shadow-md shadow-black/40 w-[520px] mobile:w-[334px] mx-auto space-y-[20px]">
            <h1 className="text-[#F3F3F3] text-[24px] mobile:text-[20px] leading-[30px] font-medium">
            Spominske strani se dodajo med tvoje bližnje, ko na njih sodeluješ
            </h1>
            <p className="text-[#F3F3F3] text-[16px] leading-[24px] font-normal">Za podrobnejši ogled spominskih strani bližnjih moraš na njihovi spominski strani sodelovati; to je vpisati svoje ime v Žalno knjigo, izraziti sožalje, itd. Na ta način se ustvari povezava med tvojim uporabniškim računom in tisto spominsko stranjo.  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoralPopup;
