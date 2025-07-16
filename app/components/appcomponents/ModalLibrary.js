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

export default function ModalLibrary({
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
      onOpenChange={() => {}}
      scrollBehavior={scrollBehavior}
     classNames={{
        backdrop: "bg-[#00000070] min-h-screen flex items-center justify-center py-10",
      }}

    >
      <ModalContent className="flex items-center justify-center w-full ">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex h-5  " />
          {/* {/ <div className="flex flex-col tablet:w-[600px] desktop:w-[600px] w-full mobile:w-[95%] bg-[#E8F0F6]  rounded-2xl  p-4  "> /} */}
          <div className="flex flex-col bg-[#E8F0F6]  rounded-2xl  p-4  ">
            <div
              onClick={() => {
                setIsShowModal(false);
              }}
              className="self-end "
            >
              <Image
                src={cancle_icon}
                alt="imgCall"
                className="w-[46px] h-[46px] mobile:w-[33px] mobile:h-[33px] cursor-pointer "
              />
            </div>
            <div className="flex w-full tablet:w-[560px] desktop:w-[560px] mobile:w-[314px] z-50 mobile:px-[2px] px-8 pb-10 mt-7  ">
              <Modals
                select_id={select_id}
                set_Id={set_Id}
                selectedImage={selectedImage}
                data={data}
                updateObituary={updateObituary}
                setIsShowModal={setIsShowModal}
              />
            </div>
          </div>
          <div className="flex h-[20px]"></div>
        </div>
      </ModalContent>
    </Modal>
  );
}
