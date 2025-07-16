"use client";
import Layout from "@/app/components/appcomponents/Layout";
import ObituaryCard from "@/app/components/appcomponents/ObituaryCard";
import HomeBackHeader from "@/app/components/appcomponents/HomeBackHeader";
import Dropdown from "@/app/components/appcomponents/Dropdown";
import NotificationView from "@/app/components/appcomponents/NotificationView";
import IphoneView from "@/app/components/appcomponents/IphoneView";
import IpadView from "@/app/components/appcomponents/IpadView";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import PopUp from "@/app/components/appcomponents/popup";
import MessagePopUp from "@/app/components/appcomponents/MessagePopup";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  LocalQuickReview,
  LocalQuickReviewModal,
} from "./components/appcomponents/LocalQuickReview";
import MegaMenu from "./components/appcomponents/MegaMenuMain";
import obituaryService from "@/services/obituary-service";
import { toast } from "react-hot-toast";
import regionsAndCities from "@/utils/regionAndCities";
import MainOptions from "./components/appcomponents/MainOptions";
import HomePageBox from "./components/appcomponents/HomePageBox";
import IpadSlider from "./components/appcomponents/IpadSlider";
import SlideOne from "./components/slidercomponents/SlideOne";
import SlideTwo from "./components/slidercomponents/SlideTwo";
export default function Home() {
  // 17 September 2024
  const arrPlace = [
    { place: "City 1", url: "/cvetlicarne", id: 1 },
    {
      place: "City 2",
      url: "/cvetlicarne",
      id: 2,
    },

    {
      place: "City 3",
      url: "/cvetlicarne",
      id: 3,
    },
    {
      place: "City 4",
      url: "/cvetlicarne",
      id: 4,
    },
  ];

  const [obituaries, setObituaries] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMessageModalVisible, setIsMessageModalVisible] = useState(false);
  const [isLocalQuickModalVisible, setIsLocalQuickModalVisible] =
    useState(false);
  const [isMemoralPopupVisible, setIsMemoralPopupVisible] = useState(false);
  const [isLocalQuickReviewModalVisible, setIsLocalQuickReviewModalVisible] =
    useState(false);
  const allRegionsOption = {
    place: "- Pokaži vse regije - ",
    id: "allRegions",
  };
  const allCitiesOption = { place: " - Pokaži vse občine - ", id: "allCities" };

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [name, setName] = useState(null);

  const regionOptions = [
    allRegionsOption,
    ...Object.keys(regionsAndCities).map((region) => ({
      place: region,
      id: region,
    })),
  ];

  const cityOptions =
    selectedRegion && selectedRegion !== "allRegions"
      ? [
          allCitiesOption,
          ...regionsAndCities[selectedRegion].map((city) => ({
            place: city,
            id: city,
          })),
        ]
      : [
          allCitiesOption,
          ...Object.values(regionsAndCities)
            .flat()
            .map((city) => ({
              place: city,
              id: city,
            }))
            .sort((a, b) => a.place.localeCompare(b.place, "sl")),
        ];

  const handleRegionSelect = (item) => {
    if (item.id === "allRegions") {
      setSelectedRegion(null);
      setSelectedCity(null);
      return;
    }
    setSelectedRegion(item.place);
    setSelectedCity(null);
  };

  const handleCitySelect = (item) => {
    if (item.id === "allCities") {
      setSelectedCity(null);
      return;
    }
    setSelectedCity(item.place);
    setSelectedRegion(null);
    // const region = Object.keys(regionsAndCities).find((region) =>
    //   regionsAndCities[region].includes(item.place)
    // );

    // if (region) {
    //   setSelectedRegion(region);
    // }
  };
  const arrIpadData = [
    {
      heading: "Osmrtnica",
      content:
        "Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo, izrečemo sožalje in prižgemo virtualno svečko.",
      subheading: "Vse navedeno je BREZPLAČNO.",
      buttonTitle: "Več informacij",
      id: 1,
    },
    {
      heading: "Spominska stran s skrbnikom",
      content:
        "Nadgradnja osnovne spominske strani - osmrtnice, kjer skrbnik prevzame kontrolo nad objavljeno vsebino; ponavadi je to nekdo, ki je bil preminulemu bližnji. Upravljanje je enostavno; vsak je lahko skrbnik. \n Ker Skrbnik skrbi za vsebino še preden je objavljena, so tu lahko dodane številne dodatne možnosti za izdelavo prave knjige spominov, na katero se bodo bližnji radi vračali in jo dopolnjevali.  ",
      subheading: "Vse navedeno je BREZPLAČNO.",
      buttonTitle: "Več informacij",
      id: 2,
    },
  ];

  useEffect(() => {
    fetchObituary();
  }, []);
  const fetchObituary = async () => {
    try {
      const queryParams = {};

      if (selectedCity) queryParams.city = selectedCity;

      if (selectedRegion) queryParams.region = selectedRegion;

      if (name) queryParams.name = name;
      const response = await obituaryService.getObituary(queryParams);

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }

      const sortedObituaries = response.obituaries.sort(
        (a, b) =>
          new Date(b.deathDate).getTime() - new Date(a.deathDate).getTime()
      );

      setObituaries(sortedObituaries);
    } catch (err) {
      console.error("Error fetching obituary:", err);
      toast.error(err.message || "Failed to fetch obituary.");
    }
  };
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const funcMegaMenu = () => {
    window.scrollTo({
      top: 0,
    });
    setShowMegaMenu(!showMegaMenu);
  };

  useEffect(() => {
    if (showMegaMenu) {
      // Disable scrolling when the MegaMenu is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the MegaMenu is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scrolling is restored when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMegaMenu]);

  return (
    <Layout
      isMegaMenuVisible={showMegaMenu}
      from={"1"}
      forFooter={""}
      megaMenu={funcMegaMenu}
    >
      <div className="absolute z-40 w-full mx-auto mt-[132px] tablet:mt-[122px] mobile:mt-[112px] overflow-auto">
        {" "}
        {showMegaMenu && <MegaMenu />}
      </div>
      <div className="flex flex-1 mx-auto w-full flex-col bg-[#F5F7F9]">
        <HomeBackHeader />
        {isModalVisible && <PopUp setIsModalVisible={setIsModalVisible} />}
        {isMessageModalVisible && (
          <MessagePopUp setIsMessageModalVisible={setIsMessageModalVisible} />
        )}
        {isLocalQuickModalVisible && (
          <LocalQuickReview
            setIsLocalQuickModalVisible={setIsLocalQuickModalVisible}
          />
        )}
        {/* {isLocalQuickReviewModalVisible && (
          <LocalQuickReviewModal
            setIsLocalQuickReviewModalVisible={setIsLocalQuickReviewModalVisible}
          />
        )}
        {isMemoralPopupVisible && (
          <MemoralPopup
            setIsMemoralPopupVisible={setIsMemoralPopupVisible}
          />
        )} */}

        <div className="flex flex-col items-center desktop:w-[1280px] tablet:w-[680px] mobile:w-[360px] mx-auto">
          <div
            className="flex items-center 
        desktop:mt-[60.73px] tablet:mt-[67.73px] mobile:mt-[22px]
        desktop:h-[47px] tablet:h-[47px] mobile:h-[33px]"
          >
            {/* 20 September 2024 */}
            {/* <h1 className="mobile:font-variation-customOpt28 tablet:font-variation-customOpt40 desktop:font-variation-customOpt40 desktop:text-[40px] tablet:text-[40px] mobile:text-[28px]  text-[#1E2125] leading-[46.88px] ">
            Zadnje osmrtnice
          </h1> */}

            {/* <div  className="mobile:font-variation-customOpt28 tablet:font-variation-customOpt40 desktop:font-variation-customOpt40 desktop:text-[40px] tablet:text-[40px] mobile:text-[28px]  text-[#1E2125] leading-[46.88px] ">
            Zadnje osmrtnice
          </div> */}
            {/* 25 October 2024 */}
            <Link
              href={"/moj-racun"}
              className="mobile:font-variation-customOpt28 tablet:font-variation-customOpt40 desktop:font-variation-customOpt40 desktop:text-[40px] tablet:text-[40px] mobile:text-[28px]  text-[#1E2125] leading-[46.88px] "
            >
              Zadnje osmrtnice
            </Link>
          </div>
          <div
            className="flex flex-col desktop:flex-row 
        desktop:mt-[70px] tablet:mt-[48px] mobile:mt-[29px]
        desktop:w-[777px] tablet:w-[600px] mobile:w-[296]
          items-center justify-center space-x-[16px]"
          >
            <div className="flex flex-col w-full items-center tablet:flex-row desktop:flex-row desktop:space-x-[16px] tablet:justify-between mobile:h-[112px] tablet:h-[48px] desktop:h-[48px]">
              <div className="hidden desktop:flex h-[48px]">
                <input
                  type="text"
                  placeholder="Išči po imenu / priimku"
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    width: "227px",
                    height: "100%",
                    fontWeight: 400,
                    borderWidth: "1px",
                    borderColor: "#7C7C7C",
                    borderRadius: "8px",
                    paddingLeft: "15.8px",
                    paddingRight: "15.8px",
                    color: "#7C7C7C",
                    backgroundColor: "white",
                    fontVariationSettings: "'opsz' 16",
                  }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <Dropdown
                label={"Išči po regiji"}
                isFromNotification={false}
                isFromFlower={false}
                isFrom={"mainPage"}
                isFromFlowerGreenBgTablet={false}
                isFromObituary={false}
                data={regionOptions}
                selectedValue={selectedRegion}
                onSelect={handleRegionSelect}
              />
              <div className="flex h-[16px] w-[360px] tablet:hidden desktop:hidden" />
              <Dropdown
                label={"Išči po kraju"}
                isFromNotification={false}
                isFromObituary={false}
                isFromFlower={false}
                isFrom={"mainPage"}
                data={cityOptions}
                selectedValue={selectedCity}
                isFromFlowerGreenBgTablet={false}
                onSelect={handleCitySelect}
              />
            </div>
            <div
              onClick={() => fetchObituary()}
              className="hidden desktop:flex justify-center  w-12 items-center h-full desktop:aspect-square rounded-lg bg-[#414141]"
            >
              <MagnifyingGlassIcon className="w-5 h-5 text-white hidden desktop:block" />
            </div>
          </div>

          <div className="flex desktop:hidden h-[48px] mt-4 w-[296px] tablet:w-[292px] bg-[#414141] rounded-[8px] justify-center items-center ">
            <div
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                color: "#F6F6F6",
                fontVariationSettings: "'opsz' 16",
              }}
            >
              Prikaži
            </div>
          </div>

          <div className="mx-auto hidden tablet:hidden desktop:grid desktop:grid-cols-2 grid-cols-1 tablet:gap-6 desktop:gap-6 mt-[43px] tablet:mt-[64px] desktop:mt-[47.93px] justify-between">
            {obituaries.map((obituary, index) => (
              <ObituaryCard
                data={obituary}
                index={index}
                key={index}
                mob={false}
              />
            ))}
          </div>
          <div className="mx-auto hidden tablet:grid grid-cols-1 desktop:hidden desktop:grid-cols-2 tablet:gap-6 desktop:gap-6 mt-[43px] tablet:mt-[64px] desktop:mt-[47.93px] justify-between">
            {obituaries.map((obituary, index) => (
              <ObituaryCard
                data={obituary}
                index={index}
                key={index}
                mob={false}
              />
            ))}
          </div>
          <div className="mx-auto grid grid-cols-1 tablet:hidden desktop:hidden gap-[22px] tablet:gap-6 mt-[43px] tablet:mt-[64px]">
            {obituaries.map((obituary, index) => (
              <ObituaryCard
                data={obituary}
                index={index}
                key={index}
                mob={true}
              />
            ))}
          </div>

          <div
            className="flex w- justify-center 
        mobile:pt-[22.09px] mobile:pb-[49px]
        tablet:pt-[43px] tablet:pb-[46px]
        desktop:pt-[45px] desktop:pb-[62px]  "
          >
            <Link
              href={"/osmrtnice"}
              className="flex items-center rounded-lg justify-center shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]
          mobile:h-[43px] mobile:w-[103px]
          tablet:h-[43px] tablet:w-[97px]
          desktop:h-12 desktop:w-[125px]"
            >
              <div className="flex font-variation-customOpt16 text-[16px] text-[#1E2125] text-center">
                Naprej
              </div>
            </Link>
          </div>
        </div>

        <IpadSlider />
        <HomePageBox />
        <IphoneView />

        <div className="w-full bg-black mx-auto">
          <div className="relative flex max-w-[1280px] mx-auto justify-center overflow-visible dekstop:h-[284px] tablet:h-[284px] mobile:h-[235px]">
            <img
              src="/viola_ozadje.avif"
              alt="viola_ozadje"
              className="h-[284px] w-[1280px] object-cover object-center mobile:h-[235px]"
            />
            <div className="absolute flex flex-col items-center self-center desktop:h-[143px] desktop:w-[476px] desktop:right-[140px] tablet:h-[127px] tablet:w-[302px] tablet:left-1/2 mobile:left-1/2 mobile:transform mobile:-translate-x-1/2 mobile:h-[113px] mobile:w-[299px]">
              <div className="tablet:mb-[32px] desktop:mb-[48px] mobile:mb-[32px]">
                <div
                  className="
              mobile:text-[28px]
              text-[40px]  leading-[46.88px] 
              font-normal text-[#FFFFFF]  
                mobile:leading-[32.81px] whitespace-nowrap"
                >
                  Lokalne cvetličarne
                </div>
              </div>
              <Dropdown
                label={"Mesto"}
                isFromFlower={true}
                isFromNotification={false}
                isFrom={"mainPage"}
                isFromFlowerGreenBgTablet={false}
                isFromObituary={false}
                data={cityOptions}
                onSelect={() => handleCitySelect()}
              />
            </div>
          </div>
        </div>
        <NotificationView />

       
      </div>
    </Layout>
  );
}
