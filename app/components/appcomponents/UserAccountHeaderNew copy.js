import Image from "next/image";
import React from "react";
import omr from "@/public/omr.png";
import back_icon from "@/public/back_icon.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ButtonWhiteBG from "./buttonwhitebg";
import ButtonLightGreen from "./buttonLightGreen";

function UserAccountHeaderNew({
  onMenuClick,
  setIsMobilSideBarOpen,
  isMobilSideBarOpen,
  isTabButtonSelected,
  setIsTabButtonSelected,
}) {
  const router = useRouter();

  // 23 October 2024
  const handleGoBack = () => {
    console.log("back");
    router.push("/"); // This will navigate to the previous page
  };
  return (
    <React.Fragment>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 ">
        <div className=" flex w-full justify-center">
          {/* 17 October 2024 */}
          <div
            className=" flex 
                        w-full px-[15.6px] desktopUserAcc:h-[75px] tabletUserAcc:h-[70px] mobileUserAcc:h-[58px]
                        tabletUserAcc:max-w-[764px] tabletUserAcc:w-full 
                        desktopUserAcc:w-[1260px] mobileUserAcc:max-w-[360px] desktopUserAcc:px-[18px] justify-between items-center
                        "
          >
            <div className="hidden mobileUserAcc:flex">
              <div className="flex items-center ">
                <Image src={back_icon} width={30} height={32} />
                <div
                  className="text-[14px]  text-[#3C3E41] font-variation-customOpt12 font-bold ml-2 mt-[2px] "
                  onClick={() => {
                    setIsMobilSideBarOpen(false);
                    // 23 October 2024
                    handleGoBack();
                  }}
                >
                  NAZAJ
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-between w-full mobileUserAcc:w-auto">
              <Link href={"/"} className="flex items-center ">
                <Image
                  src={omr}
                  alt="App Logo"
                  className="box-border h-[21px] w-[166.76px] mobileUserAcc:h-[18px] mobileUserAcc:w-[150px]  "
                />
              </Link>

              <div
                className=" flex flex-col mobileUserAcc:hidden items-center cursor-pointer "
                onClick={onMenuClick}
              >
                <Image
                  src={"/icon_menu_black.png"}
                  width={32}
                  height={25}
                  className="w-[32px] h-[25px] mobileUserAcc:w-[30px] mobileUserAcc:h-[22px]"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex desktopUserAcc:hidden ">
        {isMobilSideBarOpen && (
          // 17 October 2024 - tabletUserAcc:min-h-[1010px]
          // <div className="absolute inset-0 z-10 flex-1 pt-[100px] tabletUserAcc:min-h-[1350px] bg-[#F1F5F8] mobileUserAcc:pt-[27px]">
          <div className="fixed inset-0 z-10 flex-1  bg-[#F1F5F8] mobileUserAcc:pt-[27px] ">
            <div className="h-full w-full relative">
              <div className="flex w-full ">
                <Image
                  src={"/reg_user_tablica.avif"}
                  layout="fill"
                  objectFit="cover"
                  className="w-full !h-[100%] object-cover "
                />
              </div>
              <div className="absolute h-full overflow-auto  z-20 mobileUserAcc:bg-[#F1F5F8] flex flex-row justify-center gap-x-[30px] left-[0px] right-[0px]  ">
                <div className="flex flex-col tabletUserAcc:mt-[100px] h-full">
                  <div
                    className="text-[#0A85C2] text-[26px] leading-[38px] font-[500px] mobileUserAcc:mt-[56px]"
                    style={{
                      fontVariationSettings: "'wdth' 50,'wght' 500,'opsz' 26",
                    }}
                  >
                    Uporabniški kotiček
                  </div>
                  <div className="mt-[27px]">
                    <ButtonWhiteBG
                      placeholderImg={"/ico_two.png"}
                      placeholderText={"OBVESTILA"}
                      isOpen={0}
                    />
                  </div>
                  <div
                    onClick={() => {
                      setIsTabButtonSelected("2");
                    }}
                    className="mt-[10px]"
                  >
                    <ButtonWhiteBG
                      placeholderImg={"/ico_setting.png"}
                      placeholderText={"MOJI PODATKI"}
                      isOpen={isTabButtonSelected === "2" ? 1 : 0}
                    />
                  </div>
                  <div className="text-[#2198D3] mt-[50px] text-[14px] leading-[24px] font-variation-customOpt14 font-semibold">
                    MOJI BLIŽNJI
                  </div>
                  <Link href="/pregled">
                    <div
                      onClick={() => {
                        setIsTabButtonSelected("3");

                        setIsMobilSideBarOpen(false);
                      }}
                      className="mt-[10px]"
                    >
                      <ButtonWhiteBG
                        placeholderImg={"/ico_pregled.png"}
                        placeholderText={"PREGLED"}
                        isOpen={isTabButtonSelected === "3" ? 1 : 0}
                      />
                    </div>
                  </Link>

                  <Link href="/obletnice">
                    <div
                      onClick={() => {
                        setIsTabButtonSelected("4");

                        setIsMobilSideBarOpen(false);
                      }}
                      className="mt-[10px]"
                    >
                      <ButtonWhiteBG
                        placeholderImg={"/ico_obletnice.png"}
                        placeholderText={"OBLETNICE"}
                        isOpen={isTabButtonSelected === "4" ? 1 : 0}
                      />
                    </div>
                  </Link>

                  <div className="w-[322px] mt-[50px] rounded-[10px]">
                    <h1 className="uppercase text-[#2198D3] pb-[3px] text-[14px] leading-[24px] font-variation-customOpt14 font-semibold">
                      POSTANI SKRBNIK
                    </h1>

                    <div className="h-[62px] bg-gradient-to-b from-[#0D94E8] to-[#1860A3] border-2 custom-border-gradient flex flex-row items-center rounded-[8px]">
                      <div className="ml-[15px]">
                        <Image
                          src={"/ico_plus_round_white.png"}
                          alt=""
                          width={24}
                          height={24}
                          className="w-8 h-6"
                        />
                      </div>

                      <div
                        className="w-full ml-[20px] h-full my-[2px] text-[16px] text-[#FFFFFF]
          font-variation-customOpt16 font-normal leading-[24px] flex items-center "
                      >
                        POSTANI SKRBNIK
                      </div>

                      <div className="flex-1 flex justify-end">
                        <Image
                          src={"/ico_right_white.png"}
                          alt=""
                          width={32}
                          height={32}
                          className="mr-[20px] w-6 h-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden mobileUserAcc:flex flex-col mt-[70px]">
                    <div>
                      <ButtonWhiteBG
                        placeholderImg={"/ico_obletnice.png"}
                        placeholderText={"POGOSTA VPRAŠANJA"}
                        isOpen={0}
                      />
                    </div>
                    <Link href={"/"}>
                      <ButtonWhiteBG
                        placeholderImg={"/ico_obletnice.png"}
                        placeholderText={"NAZAJ NA SPLETNO STRAN"}
                        isOpen={2}
                      />
                    </Link>
                  </div>
                  <div className="mt-[70px] mobileUserAcc:mt-[15px] w-[184px] border-2 border-[#1860A335] rounded-[10px] ">
                    <div className=" rounded-lg w-[180px] h-[55px] flex justify-center items-center bg-gradient-to-b from-[#FFFFFF40] via-[rgba(12,104,244,0.15)] to-[#FFFFFF40]">
                      <div className="text-[16px] leading-[24px] font-variation-customOpt16 text-[#6D778E] ">
                        ODJAVA IZ RAČUNA
                      </div>
                    </div>
                  </div>
                  <button className="mt-[70px] mobileUserAcc:mt-[15px]">
                    {". "}
                  </button>
                </div>

                {/* 21 October 2024 */}
                <div className="flex flex-col  mt-[165px] mobileUserAcc:hidden ">
                  <div>
                    <ButtonWhiteBG
                      placeholderImg={"/ico_obletnice.png"}
                      placeholderText={"NAZAJ NA SPLETNO STRAN"}
                      isOpen={2}
                    />
                  </div>
                  <div className="mt-[10px]">
                    <ButtonWhiteBG
                      placeholderImg={"/ico_obletnice.png"}
                      placeholderText={"POGOSTA VPRAŠANJA"}
                      isOpen={0}
                    />
                  </div>

                  {/* {/ 21/10 changeeeee /} */}
                  <div className="cursor-pointer text-[#2198D3] mt-[50px] text-[14px] leading-[24px] font-variation-customOpt14 font-semibold">
                    MOJI SKRBNIKI
                  </div>

                  <>
                    <div className="mt-[10px]">
                      <ButtonWhiteBG
                        placeholderImg={"/ico_pregled_black.png"}
                        placeholderText={"PREGLED"}
                        isOpen={0}
                      />
                    </div>

                    <Link href={"/potrditev-objave"}>
                      <div className="mt-[10px]">
                        <ButtonWhiteBG
                          placeholderImg={"/ico_two.png"}
                          placeholderText={"POTRDITEV OBJAVE"}
                          isOpen={0}
                        />
                      </div>
                    </Link>

                    <Link href={"/memorypage"} className="uppercase mt-[10px]">
                      <ButtonLightGreen placeholderText={"Alena bIS MARCK"} />
                    </Link>

                    <div className="mt-[10px]">
                      <ButtonLightGreen placeholderText={"OTTO VON bISMARCK"} />
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default UserAccountHeaderNew;
