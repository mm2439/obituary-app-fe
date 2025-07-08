"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import UserAccountHeaderNew from "../components/appcomponents/UserAccountHeaderNew";
import SidebarDekstop from "../components/appcomponents/SidebarDekstop";
import FooterMobile from "../components/appcomponents/FooterMobile";
import { usePathname } from "next/navigation";
import obituaryService from "@/services/obituary-service";
const UserAccountLayout = ({ children }) => {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
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

  function handleResize() {
    if (window.innerWidth <= 744) {
      setInnnerSize(true); // Change state value when width is <= 744
    } else {
      setInnnerSize(false); // Reset state value otherwise
    }
  }

  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      setUser(JSON.parse(currUser));
      console.log(JSON.parse(currUser));
    }
  }, []);

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

    const isUser = role === "u";
    const basePath = `/${role}/${user?.slugKey}`;
    console.log(route, "============route is here");

    switch (route) {
      case "/moj-racun":
        setHeadingOne("Moj račun");
        setHeadingTwo("Moja naročila");
        break;

      case "/pregled":
        setHeadingOne("Moji bližnji");
        setHeadingTwo("Obletnice");
        setHeadingThree("Moje vsebine");
        setHrefLinkOne(`${basePath}/obletnice`);
        setHrefLinkTwo(`${basePath}/moji-prispevki`);
        break;

      case "/obletnice":
        setHeadingOne("Obletnice");
        setHeadingTwo("Moji bližnji");
        setHeadingThree("Moje vsebine");
        setHrefLinkOne(`${basePath}/pregled`);
        setHrefLinkTwo(`${basePath}/moji-prispevki`);
        break;

      case "/moji-prispevki":
        setHeadingOne("Moje žalne vsebine");
        setHeadingTwo("Moji bližnji");
        setHeadingThree(!innnerSize ? "Obletnice" : "");
        setHrefLinkOne(`${basePath}/pregled`);
        setHrefLinkTwo(`${basePath}/obletnice`);
        break;

      case "/pregled2":
        setHeadingOne("Moji skrbniki");
        setHeadingTwo("Potrditve objav");
        setHeadingThree(!innnerSize ? "Potek Skrbnikov" : "");
        setHrefLinkOne(`${basePath}/potrditev-objave`);
        setHrefLinkTwo(`${basePath}/dodaj-vsebine`);
        break;

      case "/potrditev-objave":
        setHeadingOne(
          innnerSize
            ? "Potrebna potrditev"
            : "Potrebna potrditev s tvoje strani"
        );
        setHeadingTwo(!innnerSize ? "Moji Skrbniki" : "");
        setHeadingThree(!innnerSize ? "Trajanje statusa Skrbnikov" : "");
        setHrefLinkOne(`${basePath}/pregled2`);
        setHrefLinkTwo(`${basePath}/dodaj-vsebine`);
        break;

      case "/dodaj-vsebine":
        setHeadingOne(
          innnerSize ? "Trajanje Skrbnikov" : "Potek statusa Skrbnika"
        );
        setHeadingTwo(!innnerSize ? "Moji Skrbniki" : "");
        setHeadingThree(!innnerSize ? "Potrditve objav" : "");
        setHrefLinkOne(`${basePath}/pregled2`);
        setHrefLinkTwo(`${basePath}/potrditev-objave`);
        break;

      default:
        setHeadingOne(null);
        setHeadingTwo(null);
        setHeadingThree(null);
        setHrefLinkOne(``);
        setHrefLinkTwo(``);
    }
  }, [pathname, innnerSize]);

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
      <UserAccountHeaderNew
        onMenuClick={toggleMobileSidebar}
        setIsMobilSideBarOpen={setIsMobilSideBarOpen}
        isMobilSideBarOpen={isMobilSideBarOpen}
        pendingConfirmations={pendingPosts.length}
        isKeeper={showAlternateContent}
        memories={memories}
      />

      <div className="flex max-w-[1280px] tabletUserAcc:max-w-[744px] mobileUserAcc:w-[360px] tabletUserAcc:w-full mx-auto  min-h-screen w-full justify-center">
        <div className=" pt-[80px] mobileUserAcc:pt-[58px] w-full flex flex-row justify-center">
          {/* SIDEBAR FOR DEKSTOP */}
          <SidebarDekstop
            showAlternateContent={showAlternateContent}
            setShowAlternateContent={setShowAlternateContent}
            pendingConfirmations={pendingPosts.length}
          />

          <div className="flex pt-[46px] mobileUserAcc:pt-[27px]  desktopUserAcc:max-w-[1049px] w-full ">
            <div className="flex flex-row w-full ">
              <div
                className={`flex w-full  flex-col pl-[20px] mobileUserAcc:pl-[12px] mobileUserAcc:pr-[12px]  tabletUserAcc:px-3  pb-[155px] mobileUserAcc:pb-[100px] tabletUserAcc:pb-[272px] desktopUserAcc:pb-[217px] `}
              >
                {/* MAIN SCREEN HEADING */}
                <div className="flex h-[38px]  items-center">
                  <div
                    style={{
                      fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 32",
                    }}
                    className="pt-[10px] flex text-[32px] text-[#0A85C2] font-medium mobileUserAcc:text-[28px] "
                  >
                    {headingOne}
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
                      className={`ml-[49px] mobileUserAcc:ml-[22px] h-[30px] mobileUserAcc:h-[30px] px-3 mobileUserAcc:px-[0px] border-b-2 mt-[2px] border-[#0A85C2] `}
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
                  {hrefLinkTwo && headingThree && (
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
                        className={`h-[30px] ml-[25px] px-3 mobileUserAcc:px-0 border-b-2 mt-[2px] border-[#0A85C2]`}
                      >
                        <div
                          style={{
                            fontVariationSettings:
                              "'wdth' 50,'wght' 400,'opsz' 18",
                          }}
                          className="text-[18px] text-[#0A85C2] font-normal px-3 mobileUserAcc:px-0"
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

      {/* FOOTER FOR MOBILE */}
      <FooterMobile
        handleGoToTop={handleGoToTop}
        setIsMobilSideBarOpen={setIsMobilSideBarOpen}
      />
    </div>
  );
};

export default UserAccountLayout;
