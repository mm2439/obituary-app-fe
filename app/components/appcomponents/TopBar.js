import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const TopBar = ({
  setIsModalVisible,
  setIsMessageModalVisible,
  setIsLocalQuickModalVisible,
  setIsLocalQuickModalReviewVisible,
}) => {
  const popuButtonRef = React.useRef();
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const isDesktop = () => window.innerWidth >= 758;

  const handleNavigation = () => {
    if (!user) {
      router.push("/registrationpage");
      return;
    }

    const isUser = user.role === "User";
    const isFuneral = user.role === "Funeral";
    const isFlorist = user.role === "Florist";
    const desktop = isDesktop();
    const slugKey = user.slugKey;

    if (isUser && desktop) {
      router.push(`/u/${user.slugKey}/moj-racun`);
    } else if (isUser && !desktop) {
      router.push("/user-accounts-dashboard");
    } else if (isFuneral && desktop) {
      router.push(`/p/${slugKey}/nasi_podatki`);
    } else if (isFuneral && !desktop) {
      router.push(`/p/${slugKey}/menu`);
    } else if (isFlorist && desktop) {
      router.push(`/c/${slugKey}/nasi_podatki`);
    } else if (isFlorist && !desktop) {
      router.push(`/c/${slugKey}/menu`);
    }
  };

  return (
    <div className="flex w-full h-[45px] flex-col items-center justify-between bg-[#414141] ">
      <div className=" w-full desktop:w-[1200px] mobile:px-[24px] my-auto flex flex-row justify-between">
        <div className=" w-full z-0  flex  flex-row items-center mobile:justify-between ">
          <div className="flex desktop:pl-[23px] tablet:pl-[23px] flex-row items-center">
            {/* 24 October 2024 /keeperpromo */}
            <button onClick={handleNavigation}>
              <img
                src="ico_user_top.png"
                alt="user"
                className="w-[24px] h-[24px] "
              />
            </button>
            <button
              className="ml-[50px]  tablet:ml-[95px] desktop:ml-[80px]"
              onClick={() => {
                setIsMessageModalVisible(true);
                setIsModalVisible(false);
                setIsLocalQuickModalVisible(false);
                setIsLocalQuickModalReviewVisible(false);
              }}
            >
              <img
                src="ico_email_top.png"
                alt="mail"
                className="w-[28px] h-[28px]"
              />
            </button>
            <button
              className="ml-[50px] tablet:ml-[95px] desktop:ml-[80px]"
              onClick={() => {
                setIsModalVisible(true);
                setIsMessageModalVisible(false);
                setIsLocalQuickModalVisible(false);
                setIsLocalQuickModalReviewVisible(false);
              }}
            >
              <img
                src="ico_bell_top.png"
                alt="user"
                className="w-[28px] h-[28px]"
              />
            </button>
          </div>
          {user === null && (
            <div
              className="flex -z-10  tablet:w-[100%] tablet:justify-center  tablet:absolute 
                    desktop:absolute desktop:w-[1200px] desktop:justify-center items-center "
            >
              <button
                onClick={() => {
                  setIsModalVisible(false);
                  setIsMessageModalVisible(false);
                  setIsLocalQuickModalReviewVisible(false);
                  setIsLocalQuickModalVisible(true);
                }}
              >
                <img
                  src="ico_location_top.png"
                  alt="location"
                  className="w-[28px] h-[28px]"
                />
              </button>
            </div>
          )}
          {user !== null && (
            <div
              className="flex -z-10  tablet:w-[100%] tablet:justify-center  tablet:absolute 
                    desktop:absolute desktop:w-[1200px] desktop:justify-center items-center "
            >
              <button
                onClick={() => {
                  setIsModalVisible(false);
                  setIsMessageModalVisible(false);
                  setIsLocalQuickModalReviewVisible(true);
                  setIsLocalQuickModalVisible(false);
                }}
              >
                <img
                  src="ico_location_top.png"
                  alt="location"
                  className="w-[28px] h-[28px]"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[3px] bg-[#0A85C260] " />
    </div>
  );
};

export default TopBar;
