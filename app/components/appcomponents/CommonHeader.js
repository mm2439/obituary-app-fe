"use client"

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/app_logo.png";
import iconMenu from "@/public/icon_menu_black.png";
import backIcon from "@/public/memory_header_left.png";
import { useRouter } from 'next/navigation';
import omr from "@/public/omr.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopBar from "./TopBar";


const headerLinkSets = {
  "/osmrtnice": [
    { label: "Osmrtnice", path: "/osmrtnice", active: false },
    { label: "Pogrebi", path: "/pogrebi", active: false },
  ],
  "/pogrebi": [
    { label: "Osmrtnice", path: "/osmrtnice", active: false },
    { label: "Pogrebi", path: "/pogrebi", active: false },
  ],

  "/pogrebna-p": [
    { label: "Cvetličarne", path: "/cvetlicarne", active: false },
    { label: "Pogrebna podjetja", path: "/pogrebna-p", active: false },
  ],
  "/cvetlicarne": [
    { label: "Cvetličarne", path: "/cvetlicarne", active: false },
    { label: "Pogrebna podjetja", path: "/pogrebna-p", active: false },
  ],
  "/zalna-stran": [
    { label: "Žalna stran", path: "/zalna-stran", active: false },
    { label: " Spominska", path: "/spominska", active: false },
  ],
  "/spominska": [
    { label: "Žalna stran", path: "/zalna-stran", active: false },
    { label: " Spominska", path: "/spominska", active: false },
  ],
  "/resitve-za-cvetlicarne": [
    { label: "Cvetličarne", path: "/resitve-za-cvetlicarne", active: false },
    { label: " PRILOŽNOST", path: "/c-priloznost", active: true },
    { label: "Pogrebna podjetja", path: "/resitve-za-pogrebna-podjetja", active: false },
  ],
  "/resitve-za-pogrebna-podjetja": [
    { label: "Cvetličarne", path: "/resitve-za-cvetlicarne", active: false },
    { label: "Pogrebna podjetja", path: "/resitve-za-pogrebna-podjetja", active: false },
    { label: " PRILOŽNOST", path: "/p-priloznost", active: true },
  ],
};


function CommonHeader({
  currentPage,
  setIsModalVisible,
  setIsMessageModalVisible,
  setIsLocalQuickModalVisible,
  setIsLocalQuickReviewModalVisible,
}) {
  const pathname = usePathname();
  const linksToRender = headerLinkSets[`/${currentPage}`] || []; // Default to empty if not found
  const router = useRouter();

  const linksToRender = headerLinkSets[`/${currentPage}`] || [];

  // Modal states
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMessageModalVisible, setIsMessageModalVisible] = useState(false);
  const [isLocalQuickModalVisible, setIsLocalQuickModalVisible] = useState(false);
  const [isLocalQuickReviewModalVisible, setIsLocalQuickReviewModalVisible] = useState(false);

  // User state
  const [user, setUser] = useState(null);
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  // Check user authentication on component mount
  useEffect(() => {
    const checkUser = () => {
      try {
        const currUser = localStorage.getItem("user");
        if (currUser) {
          const parsedUser = JSON.parse(currUser);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Error parsing user from localStorages:", error);
        setUser(null);
      } finally {
        setIsUserLoaded(true);
      }
    };

    checkUser();
  }, []);

  // Handle local quick review click
  const handleLocalQuickReviewClick = () => {
    if (!isUserLoaded) return; // Wait for user check to complete

    if (user) {
      setIsLocalQuickReviewModalVisible(true);
    } else {
      setIsLocalQuickModalVisible(true);
    }
  };

  // Close all modals
  const closeAllModals = () => {
    setIsModalVisible(false);
    setIsMessageModalVisible(false);
    setIsLocalQuickModalVisible(false);
    setIsLocalQuickReviewModalVisible(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    const isAnyModalOpen = isModalVisible || isMessageModalVisible ||
      isLocalQuickModalVisible || isLocalQuickReviewModalVisible;

    if (isAnyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalVisible, isMessageModalVisible, isLocalQuickModalVisible, isLocalQuickReviewModalVisible]);


  return (
    // <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50`}
    >
      {(currentPage === "pogrebi" || currentPage =="osmrtnice") && <TopBar
        setIsModalVisible={setIsModalVisible}
        setIsMessageModalVisible={setIsMessageModalVisible}
        setIsLocalQuickModalVisible={setIsLocalQuickModalVisible}
        setIsLocalQuickModalReviewVisible={setIsLocalQuickReviewModalVisible}
      />}
      <div className=" flex w-full justify-center">
        <div
          className=" flex 
                    w-full h-[68px] 
                    tablet:w-[744px] mobile:w-[360px] mx-auto tablet:h-[80px] px-4 tablet:px-6
                    desktop:w-[1200px] desktop:h-[92.02px] desktop:px-[18px]  
                    "
        >
          <div
            className="
                    flex justify-between items-center
                    w-full h-full
                     "
          >
           
           
            <Link href={"/"} className="flex">
              <Image
                src={omr}
                alt="App Logo"
                width={500}
                height={500}
                className="box-border relative bottom-[2px] h-[22px] w-[182.76px] desktop:w-[255.31px] desktop:h-[32px] "
              />
            </Link>
            <div className="flex">
              <div className="hidden tablet:flex desktop:flex tablet:mr-[30px] desktop:mr-[38px]">
                 <ul className="flex items-center gap-[32px] tablet:gap-[16px]">
                  {linksToRender.map((link, index) => (
                    <li
                      key={index}
                      className="flex mobile:h-[16px] tablet:h-[24px] desktop:h-[24px] items-center"
                    >
                      <Link
                        href={link.path}
                        className={`font-normal hover:text-blue-500 transition duration-200 tablet:text-[18px] desktop:text-[20px] ${
                          link.active ? "!text-[#0A85C2] " : "text-[#1E2125]"
                        }`}
                      >
                        {link.active && <span className="text-[#EB1D1D]">{">>"}</span>}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Image
                onClick={() => router.back()}
                src={
                  backIcon
                }
                className="h-8 w-8 mobile:h-7 mobile:w-7  cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CommonHeader;
