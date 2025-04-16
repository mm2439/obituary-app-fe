import Link from "next/link";
import React from "react";

const TopBar = ({
  setIsModalVisible,
  setIsMessageModalVisible,
  setIsLocalQuickModalVisible,
}) => {
  const popuButtonRef = React.useRef();
  return (
    <div className="flex w-full h-[45px] flex-col items-center justify-between bg-[#414141] ">
      <div className=" w-full desktop:w-[1200px] mobile:px-[24px] my-auto flex flex-row justify-between">
        <div className=" w-full z-0  flex  flex-row items-center mobile:justify-between ">
          <div className="flex desktop:pl-[23px] tablet:pl-[23px] flex-row items-center">
            {/* 24 October 2024 /keeperpromo */}
            <Link href={"/registrationpage"}>
              <img
                src="ico_user_top.png"
                alt="user"
                className="w-[24px] h-[24px] "
              />
            </Link>
            <button
              className="ml-[50px]  tablet:ml-[95px] desktop:ml-[80px]"
              onClick={() => {
                setIsMessageModalVisible(true);
                setIsModalVisible(false);
                setIsLocalQuickModalVisible(false);
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
              }}
            >
              <img
                src="ico_bell_top.png"
                alt="user"
                className="w-[28px] h-[28px]"
              />
            </button>
          </div>
          <div
            className="flex -z-10  tablet:w-[100%] tablet:justify-center  tablet:absolute 
                    desktop:absolute desktop:w-[1200px] desktop:justify-center items-center "
          >
            <button
              onClick={() => {
                setIsModalVisible(false);
                setIsMessageModalVisible(false);
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
        </div>
      </div>
      <div className="w-full h-[3px] bg-[#0A85C260] "/>
    </div>
  );
};

export default TopBar;
