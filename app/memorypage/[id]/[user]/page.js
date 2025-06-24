"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../../components/appcomponents/Layout";
import ObituaryPublished from "../../../components/appcomponents/ObituaryPublished";
import FlowerShops from "../../../components/appcomponents/FlowerShops";
import ShippingNotifications from "../../../components/appcomponents/ShippingNotifications";
import MemorialPageTopComp from "../../../components/appcomponents/MemorialPageTopComp";
import Condolences from "../../../components/appcomponents/Condolences";
import ImageWall from "../../../components/appcomponents/ImageWall";
import SanctifiedComp from "../../../components/appcomponents/SanctifiedComp";
import ModalLibrary from "../../../components/appcomponents/ModalLibrary";
import ImageFullView from "../../../components/appcomponents/ImageFullView";
import imgUp from "@/public/ico_up.png";
import Image from "next/image";
import obituaryService from "@/services/obituary-service";
import { toast } from "react-hot-toast";
import AnnouncementBlock from "../../../components/appcomponents/AnnouncementBlock";
import { FlowerShops2 } from "../../../components/appcomponents/FlowerShops";
import { useRouter } from "next/navigation";
import Card1 from "@/app/components/mobile-cards/card1";

const MemoryPage = ({ params }) => {
  const { id, user } = params;
  const router = useRouter();
  const [isShowModal, setIsShowModal] = useState(false);
  const [select_id, setSelect_Id] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const [showImageView, setShowImageView] = useState(false);
  const [imageId, setImageId] = useState("0");

  const [obituary, setObituary] = useState({});

  useEffect(() => {
    fetchMemory();
  }, []);

  useEffect(() => {
    console.log("set is modal:", isShowModal);
  }, [isShowModal]);

  const fetchMemory = async () => {
    try {
      const response = await obituaryService.getMemory({ id });

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }
      console.log("MemoryPage obituary data:", response.obituary);

      setObituary(response.obituary);

      if (id) {
        const visitRespone = await obituaryService.updateObituaryVisits({
          obituaryId: id,
          userId: currentUser?.id || null,
        });

        if (visitRespone.error) {
          toast.error(
            visitRespone.error || "Something went wrong. Please try again!"
          );
          return;
        }

        setObituary(visitRespone);
        if (visitRespone.Condolences.length === 0) {
          const persons = [
            {
              name: "osmrtnica.com",
              createdTimestamp: new Date(),
              relation: "",
              message: "Počivaj v miru",
            },
          ];
          updateObituary({ ["Condolences"]: persons });
        }
      }
    } catch (err) {
      console.error("Error fetching obituary:", err);
      toast.error(err.message || "Failed to fetch obituary.");
    }
  };

  const updateObituary = (updatedData) => {
    setObituary((prevObituary) => ({
      ...prevObituary,
      ...updatedData,
    }));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleMemoryChange = async (type) => {
    try {
      const queryParams = {
        city: obituary.city,
        date: obituary.createdTimestamp,
        type: type,
      };
      const response = await obituaryService.getMemoryId(queryParams);

      const data = response;
      const funeralDate = new Date(data.deathDate); // ensure data.funeralDate exists
      const funeralDateFormatted = `${funeralDate
        .getDate()
        .toString()
        .padStart(2, "0")}${(funeralDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}${funeralDate.getFullYear().toString().slice(2)}`; // Format: DDMMYY

      router.push(
        `/memorypage/${data.id}/${data.name}_${data.sirName}_${funeralDateFormatted}`
      );
    } catch (error) {
      console.error("Error fetching memory:", error);
      if (error?.response?.status === 404) {
        toast.error(`No ${type} memory exists`);
      } else {
        toast.error("Something went wrong.");
      }
    }
  };
  return (
    <Layout
      from={"3"}
      onChangeMemory={handleMemoryChange}
      forFooter={"memorypage"}
    >
      <div className="flex flex-1 flex-col mx-auto bg-[#ecf0f3] pt-[20px] max-w-[100vw] overflow-x-hidden">
        <ModalLibrary
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          select_id={select_id}
          set_Id={setSelect_Id}
          selectedImage={selectedImage}
          data={obituary}
          updateObituary={updateObituary}
        />
        <ImageFullView
          showImageView={showImageView}
          imageId={imageId}
          setShowImageView={setShowImageView}
          data={obituary?.Photos}
        />
        <MemorialPageTopComp
          set_Id={setSelect_Id}
          setModal={setIsShowModal}
          data={obituary}
          updateObituary={updateObituary}
        />

        {obituary?.Keepers?.length === 1 && <AnnouncementBlock />}

        <ShippingNotifications
          set_Id={setSelect_Id}
          setModal={setIsShowModal}
        />
        <FlowerShops
          data={obituary}
          set_Id={setSelect_Id}
          setModal={setIsShowModal}
        />

        {/* <FlowerShops2 set_Id={setSelect_Id} setModal={setIsShowModal} /> */}

        <ObituaryPublished
          set_Id={setSelect_Id}
          setModal={setIsShowModal}
          data={obituary}
        />
        <a
          className="z-50 bottom-10 right-10 fixed w-[48px] h-[48px] mt-[26px] 
                shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]
                flex justify-center items-center rounded-lg"
          href="#memoryPageTop"
        >
          <Image src={imgUp} alt="imgPrevious" className=" w-[24px] h-[24px]" />
        </a>
      </div>
    </Layout>
  );
};

export default MemoryPage;
