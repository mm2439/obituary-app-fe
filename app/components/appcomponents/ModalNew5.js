"use client"

import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import cancle_icon from "@/public/cancle_icon.png";
import imgUp from "@/public/ico_up.png";
import Image from "next/image";
import Modals from "./Modals";



export default function ModalNew5({
  isShowModal,
  setIsShowModal,
  select_id,
  set_Id,
  selectedImage,
  data,
  updateObituary,
}) {
  const [scrollBehavior, setScrollBehavior] = React.useState("outside");

  return (
    <Modal
      isOpen={isShowModal}
      onOpenChange={(open) => setIsShowModal(open)}
      scrollBehavior={scrollBehavior}
      classNames={{
        backdrop: "bg-[#344054B2] bg-opacity-70", 
      }}
    >
      <ModalContent className="flex items-center justify-center w-full mt-32">
        <div className="flex flex-col w-full items-center justify-center desktop:w-[600px]">
          <div className="flex  " />
          {/* {/ <div className="flex flex-col tablet:w-[600px] desktop:w-[600px] w-full mobile:w-[95%] bg-[#E8F0F6]  rounded-2xl  p-4  "> /} */}
          <div className="flex flex-col bg-[#E8F0F6]  rounded-2xl ">
            <div
              onClick={() => {
                setIsShowModal(false);
              }}
              className="self-end "
            >
              <Image
                src={cancle_icon}
                alt="imgCall"
                className="w-[46px] h-[46px] mobile:w-[33px] mobile:h-[33px] cursor-pointer relative top-4 right-4"
              />
            </div>
            <div className="flex w-[600px] mobile:w-[344px] z-50 mobile:px-[2px] px-7 mobile:pb-[80px] pb-[100px] mobile:mt-11 mt-12  items-center justify-center">
                <div className="mobile:w-[314px] w-[511px] bg-[#E1E6EC]  rounded-2xl border-[#6D778E] border pt-12 mobile:px-6 px-8 pb-12 flex flex-col">
                  <h1 className="text-[#1E2125] text-2xl mobile:text-xl font-medium mb-8">
                    Pozabljeno geslo
                  </h1>

                  <p className="text-[#3C3E41] mobile:hidden text-[14px] mb-2">
                   Vnesi naslov spletne pošte, ki si ga uporabil pri registraciji. 
                  </p>

                  <p className="text-[#3C3E41] desktop:hidden tablet:hidden tracking-[-0.06em] text-[14px]  mb-2">
                    Vnesi naslov spletne pošte, ki si ga uporabil pri registraciji.                    
                  </p>
                  
                  <div className=" text-[#6D778E] text-[16px] leading-[20px] font-[400px] w-full h-[40px] flex flex-col justify-start items-start ">
                    <div className="px-[10px] mobile:pl-4 pl-6 h-[40px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                      <input
                        type="text"
                        placeholder="E-naslov"
                        className="w-full h-full bg-transparent  focus:outline-none text-[#ACAAAA]"
                      />

                    </div>
                  </div>


                  <button
                  style={{ boxShadow: '5px 5px 10px #A6ABBD, -5px -5px 10px #FAFBFF' }}
                  className="my-8 bg-gradient-to-b  from-[#0D94E8] to-[#0A85C2] w-full h-[50px] rounded-[10px] text-white flex items-center justify-center gap-x-[5px]">
                        POŠLJI NOVO GESLO
                      <img src="/modal_arrow.png" className="object-contain"/>
                  </button>

                  <p className="text-[#6D778E] text-[14px] text-start mt-2.5 leading-6 ">
                    Če imaš težave pri obnovitvi računa, lahko pošlješ sporočilo 
                    na <span className="text-[#0D94E8]">Pomoč uporabnikom.</span> Običajno odgovorimo še isti dan. 
                  </p>

                </div>
            </div>
          </div>
          <div className="flex h-[20px]"></div>
        </div>
      </ModalContent>
    </Modal>
  );
}
