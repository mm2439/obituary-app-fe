"use client"

import React, { useEffect, useState } from "react";
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
import toast from "react-hot-toast";
import shopService from "@/services/shop-service";

export default function ModalNew2({
  isShowModal,
  setIsShowModal,
  select_id,
  set_Id,
  selectedImage,
  data,
  updateObituary,
  onChange,
}) {
  const [scrollBehavior, setScrollBehavior] = React.useState("outside");
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      // Validate required fields
      if (!shopName.trim() || !address.trim() || !telephone.trim() || !email.trim()) {
        toast.error("Please fill in all required fields");
        return;
      }

      // Create shop data object for backend
      const shopData = {
        shops: [{
          shopName: shopName.trim(),
          address: address.trim(),
          telephone: telephone.trim(),
          email: email.trim(),
          website: website.trim() || null,
          hours: "", // Default empty hours
          secondaryHours: "",
          tertiaryHours: "",
          quaternaryHours: "",
        }]
      };

      // Call backend API to create the shop
      const response = await shopService.createShop(shopData);

      // Call onChange callback with updated shops from backend
      if (onChange && response.shops) {
        onChange(response.shops);
      }

      // Clear form
      setShopName("");
      setAddress("");
      setTelephone("");
      setEmail("");
      setWebsite("");

      // Close modal
      setIsShowModal(false);
      
      toast.success("Florist shop added successfully!");
    } catch (error) {
      console.error("Error adding florist shop:", error);
      toast.error("Error adding florist shop. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear form when modal opens/closes
  useEffect(() => {
    if (!isShowModal) {
      setShopName("");
      setAddress("");
      setTelephone("");
      setEmail("");
      setWebsite("");
    }
  }, [isShowModal]);

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
            <div className="flex w-[600px] mobile:w-[344px] z-50 mobile:px-[2px] px-7 pb-11 mobile:mt-11 mt-12  items-center justify-center">
                <div className="mobile:w-[314px] w-[511px] bg-[#E1E6EC]  rounded-2xl border-[#6D778E] border pt-12 mobile:px-6 px-8 pb-7 flex flex-col">
                  <h1 className="text-[#1E2125] text-2xl mobile:text-xl font-medium mb-2.5">
                    Dodaj še druge cvetličarne
                  </h1>

                  <p className="text-[#3C3E41] mobile:hidden text-md h-[49px] mb-2.5">
                    Na seznamu lokalnih cvetličarn bo vpisana vsaka posebej.  
                  </p>

                  <p className="text-[#3C3E41] desktop:hidden tablet:hidden tracking-tight  text-[16px] h-[58px] mb-2.5">
                    Na seznamu lokalnih cvetličarn bo vpisana vsaka posebej.                     
                  </p>
                  
                  <div className=" text-[#6D778E] leading-[20px] font-[400px] w-full mt-[10px] h-[82px] flex flex-col justify-start items-start mb-2.5">
                    <div className="mb-2.5 text-[#414141]">CVETLIČARNA</div>
                    <div className="px-[10px] mobile:pl-4 pl-6 mt-[4px] h-[48px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                      <input
                        type="text"
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                        placeholder="vpisujete vsako posebej (glavna je že vnešena)"
                        className="w-full h-full bg-transparent mobile:hidden focus:outline-none text-[#ACAAAA]"
                      />

                      <input
                        type="text"
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                        placeholder="vpisujete vsako posebej "
                        className="w-full h-full bg-transparent tablet:hidden desktop:hidden focus:outline-none text-[#ACAAAA]"
                      />
                    </div>
                  </div>

                   <div className=" text-[#6D778E] leading-[20px] font-[400px] w-full mt-[10px] h-[82px] flex flex-col justify-start items-start mb-2.5">
                    <div className="mb-2.5 text-[#414141]">NASLOV </div>
                    <div className="px-[10px] mobile:pl-4 pl-6 mt-[4px] h-[48px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="te cvetličarne"
                        className="w-full h-full bg-transparent focus:outline-none text-[#ACAAAA]"
                      />
                    </div>
                  </div>

                   <div className=" text-[#6D778E] leading-[20px] font-[400px] w-full mt-[10px] h-[82px] flex flex-col justify-start items-start mb-2.5">
                    <div className="mb-2.5 text-[#414141]">TEL. ŠTEVILKA</div>
                    <div className="px-[10px] pl-6 m mobile:pl-4t-[4px] h-[48px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                      <input
                        type="text"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        placeholder="te cvetličarne "
                        className="w-full h-full bg-transparent focus:outline-none text-[#ACAAAA]"
                      />
                    </div>
                  </div>

                   <div className=" text-[#6D778E] leading-[20px] font-[400px] w-full mt-[10px] h-[82px] flex flex-col justify-start items-start mb-2.5">
                    <div className="mb-2.5 text-[#414141]">E-NASLOV</div>
                    <div className="px-[10px] pl-6 mobile:pl-4 mt-[4px] h-[48px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ki naj bo izpisan ob tej cvetličarni"
                        className="w-full h-full bg-transparent focus:outline-none text-[#ACAAAA]"
                      />
                    </div>
                  </div>

                   <div className=" text-[#6D778E] leading-[20px] font-[400px] w-full mt-[10px] h-[82px] flex flex-col justify-start items-start mb-[30px]">
                    <div className="mb-2.5 text-[#414141]">SPLETNA STRAN</div>
                    <div className="px-[10px] pl-6 mobile:pl-4 mt-[4px] h-[48px] rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full">
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="če je nimate, pustite prazno"
                        className="w-full h-full bg-transparent focus:outline-none text-[#ACAAAA]"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{ boxShadow: '5px 5px 10px #A6ABBD, -5px -5px 10px #FAFBFF' }}
                    className={`w-full h-[60px] rounded-[10px] text-white font-semibold text-xl ${
                      isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#09C1A3]'
                    }`}>
                    {isSubmitting ? 'Dodajanje...' : 'Dodaj cvetličarno'}
                  </button>

                </div>
            </div>
          </div>
          <div className="flex h-[20px]"></div>
        </div>
      </ModalContent>
    </Modal>
  );
}
