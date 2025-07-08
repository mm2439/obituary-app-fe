"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import UserCompanyHeaderNew from "@/app/components/appcomponents/UserCompanyHeaderNew";
import CompanyFooterMobile from "@/app/components/appcomponents/CompanyFooterMobile";
import { usePathname } from "next/navigation";
import obituaryService from "@/services/obituary-service";
import CompanySidebar from "@/app/components/appcomponents/CompanySidebar";

const CompanyAccountLayout = ({ children }) => {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  const normalPath = pathname.startsWith("/c")
    ? pathname.replace("/c", "")
    : pathname.replace("/p", "");

  const absolutePath = pathname.startsWith("/c") ? "/c" : "/p";

  const gotoTopRef = useRef(null);
  const [isMobilSideBarOpen, setIsMobilSideBarOpen] = useState(false);

  const [showAlternateContent, setShowAlternateContent] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobilSideBarOpen(!isMobilSideBarOpen);
  };

  const [headingOne, setHeadingOne] = useState("");
  const [headingTwo, setHeadingTwo] = useState("");
  const [headingThree, setHeadingThree] = useState("");

  const [hrefLinkOne, setHrefLinkOne] = useState("");
  const [hrefLinkTwo, setHrefLinkTwo] = useState("");

  const [innnerSize, setInnnerSize] = useState(false);
  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      setUser(JSON.parse(currUser));
      console.log(JSON.parse(currUser));
    }
  }, []);
  function handleResize() {
    if (window.innerWidth <= 744) {
      setInnnerSize(true); // Change state value when width is <= 744
    } else {
      setInnnerSize(false); // Reset state value otherwise
    }
  }

  useEffect(() => {
    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    } else {
    }
  }, []);

  useEffect(() => {
    fetchPendingPosts();
    getKeeperMemory();
  }, []);

  useEffect(() => {
    if (!pathname) return;

    const pathParts = pathname.split("/");
    const role = pathParts[1];
    const route = "/" + (pathParts[3] || "");

    const isFuneralCompany = role === "p";
    const isFlorist = role === "c";
    const basePath = `/${role}/${user?.slugKey}`;
    console.log(route, "============route is here");
    switch (route) {
      case "/nasi_podatki":
        setHeadingOne("Račun in nastavitve");
        break;
      case "/nase_osmrtnice":
        setHeadingOne("Vnešene osmrtnice");
        setHeadingTwo("Mesečna statistika");
        setHeadingThree(null);
        break;
      case "/osmrtnice_stat":
        setHeadingOne("Mesečna statistika");
        setHeadingTwo("Dopolni vnešene osmrtnice");
        setHeadingThree(null);
        break;
      case "/nase_spominske":
        setHeadingOne("Podarjene spominske");
        setHeadingTwo("Naša sodelovanja na spominskih");
        setHeadingThree(null);
        break;
      case "/nasi_prispevki":
        setHeadingOne("Naša sodelovanja na spominskih");
        setHeadingTwo("Podarjene spominske");
        setHeadingThree(null);
        break;
      case "/darila_pregled":
        setHeadingOne("Darila - mesečni pregled");
        setHeadingTwo("Podrobno");
        setHeadingThree(null);
        break;
      case "/nasa_darila":
        setHeadingOne("Darila strankam");
        setHeadingTwo("Mesečni pregled");
        setHeadingThree(null);
        break;
      case "/narocila":
        setHeadingOne("Naročila");
        setHeadingTwo("Uporabniški račun");
        setHeadingThree("Promocije");
        break;
      case "/nasa_pokopalisca":
        setHeadingOne("Naša pokopališča");
        setHeadingTwo("Naša spletna stran");
        setHeadingThree(null);
        break;
      case "/promocije":
        setHeadingOne("Promocije");
        setHeadingTwo("Račun in nastavitve");
        setHeadingThree("Naročila");
        break;
      case "/spletna-stran":
        setHeadingOne("Naša spletna stran");
        setHeadingTwo(isFuneralCompany ? "Naša pokopališča" : null);
        setHeadingThree(null);
        break;
      default:
        setHeadingOne("Račun in nastavitve");
        setHeadingTwo(null);
        setHeadingThree(null);
    }

    switch (route) {
      case "/nase_spominske":
        setHrefLinkOne(`${basePath}/nasi_prispevki`);

        break;
      case "/nasa_darila":
        setHrefLinkOne(`${basePath}/darila_pregled`);
        setHrefLinkTwo(`${basePath}/nasa_darila`);
        break;
      case "/nase_osmrtnice":
        setHrefLinkOne(`${basePath}/osmrtnice_stat`);
        break;
      case "/darila_pregled":
        setHrefLinkOne(`${basePath}/nasa_darila`);
        break;
      case "/osmrtnice_stat":
        setHrefLinkOne(`${basePath}/nase_osmrtnice`);
        break;
      case "/nasi_prispevki":
        setHrefLinkOne(`${basePath}/nase_spominske`);
        break;

      default:
        setHrefLinkOne("");
        setHrefLinkTwo("");
    }
    if (route === "/spletna-stran" && isFuneralCompany) {
      setHrefLinkOne(`${basePath}/nasa_pokopalisca`);
    }
  }, [pathname, user]);

  const handleGoToTop = () => {
    gotoTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  //fetching data
  const [pendingPosts, setPendingPosts] = useState([]);
  const [previousPosts, setPreviousPosts] = useState([]);

  const fetchPendingPosts = async () => {
    try {
      const response = await obituaryService.fetchPendingPosts();

      if (response.error) {
        return;
      }
      console.log(response);
      setPendingPosts(response.pending);
      setPreviousPosts(response.others);
      setShowAlternateContent(response.isKeeper);
    } catch (err) {
      console.error("Error Fetching Pending Posts:", err);
    }
  };

  const [memories, setMemories] = useState([]);

  const getKeeperMemory = async () => {
    try {
      const response = await obituaryService.getKeeperMemories();

      setMemories(response.obituaries);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      ref={gotoTopRef}
      className="desktopUserAcc:overflow-x-hidden flex mx-auto bg-[#F1F5F8] tabletUserAcc:bg-[#ECF0F3] desktopUserAcc:bg-[#ECF0F3] w-full"
    >
      {/* HEADER */}
      <UserCompanyHeaderNew
        onMenuClick={toggleMobileSidebar}
        setIsMobilSideBarOpen={setIsMobilSideBarOpen}
        isMobilSideBarOpen={isMobilSideBarOpen}
        pendingConfirmations={pendingPosts.length}
        isKeeper={showAlternateContent}
        memories={memories}
      />

      <div className="flex max-w-[1280px] tabletUserAcc:max-w-[744px] mobileUserAcc:w-[744px] tabletUserAcc:w-full mx-auto  min-h-screen w-full justify-center bg-[#F1F5F8] tabletUserAcc:bg-[#ECF0F3] desktopUserAcc:bg-[#ECF0F3] mobileUserAcc:bg-[#ECF0F3]">
        <div className=" pt-[80px] w-full flex flex-row justify-center">
          {/* SIDEBAR FOR DEKSTOP */}
          <CompanySidebar
            showAlternateContent={showAlternateContent}
            setShowAlternateContent={setShowAlternateContent}
            pendingConfirmations={pendingPosts.length}
          />

          <div className="flex pt-[46px]  desktopUserAcc:max-w-[1049px] w-full ">
            <div className="flex flex-row w-full ">
              <div
                className={`flex w-full  flex-col pl-[42px] mobileUserAcc:pl-[12px] mobileUserAcc:pr-[12px]  tabletUserAcc:px-3  pb-[155px] mobileUserAcc:pb-[100px] tabletUserAcc:pb-[272px] desktopUserAcc:pb-[217px] relative`}
              >
                {/* MAIN SCREEN HEADING */}
                <div className="flex h-[38px]  items-center">
                  <div
                    style={{
                      fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 32",
                    }}
                    className="pt-[10px] flex text-[32px] text-[#0A85C2] font-medium"
                  >
                    {headingOne}{" "}
                    {pathname === "/potrditev-objave" ? (
                      <div
                        style={{
                          fontVariationSettings:
                            "'wdth' 50,'wght' 600,'opsz' 32",
                        }}
                        className="flex ml-[12px] text-[32px] text-[#EB1D1D] font-semibold"
                      >
                        {pendingPosts?.length}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  {headingTwo && (
                    <Link
                      href={hrefLinkOne}
                      className={` mt-[10px]
                    
                    ${
                      pathname == "/potrditev-objave" ||
                      pathname == "/dodaj-vsebine"
                        ? "mobileUserAcc:hidden "
                        : ""
                    }
                    `}
                    >
                      <div
                        className={`ml-[49px] h-[30px] px-3 border-b-2 mt-[2px] border-[#0A85C2] `}
                      >
                        <div
                          style={{
                            fontVariationSettings:
                              "'wdth' 50,'wght' 400,'opsz' 18",
                          }}
                          className="text-[18px] font-normal text-[#0A85C2]"
                        >
                          {headingTwo}
                        </div>
                      </div>
                    </Link>
                  )}

                  {headingThree && (
                    <Link
                      href={hrefLinkTwo}
                      className={` mt-[10px] ${
                        pathname == "/moj-racun" ||
                        pathname == "/moji-prispevki" ||
                        pathname == "/pregled2" ||
                        pathname == "/potrditev-objave" ||
                        pathname == "/dodaj-vsebine"
                          ? "mobileUserAcc:hidden "
                          : ""
                      }
                    
                    ${
                      pathname == "/potrditev-objave"
                        ? "tabletUserAcc:hidden "
                        : ""
                    }
                    `}
                    >
                      <div
                        className={`h-[30px] ml-[25px] px-3 border-b-2 mt-[2px] border-[#0A85C2]`}
                      >
                        <div
                          style={{
                            fontVariationSettings:
                              "'wdth' 50,'wght' 400,'opsz' 18",
                          }}
                          className="text-[18px] text-[#0A85C2] font-normal px-3"
                        >
                          {headingThree}
                        </div>
                      </div>
                    </Link>
                  )}
                </div>

                {/* MAIN SCREENS WHICH WILL CHANGE WHEN ROUTE CHANGES */}
                <main>{children}</main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAccountLayout;
