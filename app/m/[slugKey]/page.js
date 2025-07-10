"use client";
import { useEffect } from "react";
import { useState } from "react";
import Layout from "../../components/appcomponents/Layout";
import ObituaryPublished from "../../components/appcomponents/ObituaryPublished";
import FlowerShops from "../../components/appcomponents/FlowerShops";
import ShippingNotifications from "../../components/appcomponents/ShippingNotifications";
import MemorialPageTopComp from "../../components/appcomponents/MemorialPageTopComp";
import ModalLibrary from "../../components/appcomponents/ModalLibrary";
import ImageFullView from "../../components/appcomponents/ImageFullView";
import imgUp from "@/public/ico_up.png";
import Image from "next/image";
import obituaryService from "@/services/obituary-service";
import { toast } from "react-hot-toast";
import AnnouncementBlock from "../../components/appcomponents/AnnouncementBlock";
import { FlowerShops2 } from "../../components/appcomponents/FlowerShops";
import { useRouter } from "next/navigation";
import { getTemplateCardImages } from "@/utils/commonUtils";

const MemoryPage = ({ params }) => {
  const { slugKey, user } = params;
  const router = useRouter();
  const [isShowModal, setIsShowModal] = useState(false);
  const [select_id, setSelect_Id] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [showShops, setShowShops] = useState(false);
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
      const response = await obituaryService.getMemory({ slugKey: slugKey });

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      setObituary(response.obituary);

      if (response?.obituary) {
        const visitRespone = await obituaryService.updateObituaryVisits({
          obituaryId: response?.obituary?.id,
          userId: currentUser?.id || null,
        });

        console.log(visitRespone, "visit =========");

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

      console.log(queryParams);
      const response = await obituaryService.getMemoryId(queryParams);

      const data = response;

      router.push(`/m/${data.slugKey}`);
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
    <>
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

          {obituary?.Keepers?.length === 0 && <AnnouncementBlock />}

          <ShippingNotifications
            set_Id={setSelect_Id}
            setModal={setIsShowModal}
            images={getTemplateCardImages(obituary?.cardImages)}
            blurredImages={Boolean(obituary?.cardImages?.length)}
          />

          <FlowerShops
            setIsOpen={(value) => {
              setShowShops(value);
            }}
            data={obituary}
            showShop={showShops}
          />

          <FlowerShops2
            setIsOpen={(value) => {
              setShowShops(value);
            }}
            showShop={showShops}
          />

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
            <Image
              src={imgUp}
              alt="imgPrevious"
              className=" w-[24px] h-[24px]"
            />
          </a>
        </div>
      </Layout>
    </>
  );
};

export default MemoryPage;
