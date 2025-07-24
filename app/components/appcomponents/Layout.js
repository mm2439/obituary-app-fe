"use client";
import Header from "./Header";
import ObituaryHeader from "./ObituaryHeader";
import CommonHeader from "./CommonHeader";

import TopBar from "./TopBar";
import Header7 from "./Header7";

import Footer from "./Footer";
import CompanyFooter from "./CompanyFooter";

import DrawerDialoge from "./DrawerDialoge";
import { useState, useEffect } from "react";
import PopUp from "@/app/components/appcomponents/popup";
import MessagePopUp from "@/app/components/appcomponents/MessagePopup";
import {
  LocalQuickReview,
  LocalQuickReviewModal,
} from "@/app/components/appcomponents/LocalQuickReview";
import MemoryHeader from "./MemoryHeader";

const Layout = ({
  children,
  from,
  forFooter,
  isMegaMenuVisible,
  megaMenu,
  data = {},
  onChangeMemory = () => { },
  currentPage = ""

}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMessageModalVisible, setIsMessageModalVisible] = useState(false);
  const [isLocalQuickModalVisible, setIsLocalQuickModalVisible] = useState(false);
  const [isLocalQuickReviewModalVisible, setIsLocalQuickReviewModalVisible] = useState(false); // Fixed prop name

  const OnDrawerButtonClicked = (item) => {
    console.log(item.name);
  };

  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      setUser(JSON.parse(currUser));
    }
  }, []);

  return (
    <div>
      {/* Headers */}
      {from == "1" || from == "2" ? (
        <div className="fixed top-0 z-50 flex w-full justify-center">
          <TopBar
            setIsModalVisible={setIsModalVisible}
            setIsMessageModalVisible={setIsMessageModalVisible}
            setIsLocalQuickModalVisible={setIsLocalQuickModalVisible}
            setIsLocalQuickReviewModalVisible={setIsLocalQuickReviewModalVisible} // Fixed prop name
          />
        </div>
      ) : null}

      {from == "1" ? (
        <Header
          isMegaMenuVisible={isMegaMenuVisible}
          onMenuCLick={megaMenu}
          from={from}
        />
      ) : from == "5" ? (
        <Header7
          data={data}
          from={5}
          handleCloseModal={isModalLayout ? handleCloseModal : undefined}
        />
      ) : from == "7" ? (
        <Header7
          data={data}
          from={7}
          handleCloseModal={isModalLayout ? handleCloseModal : undefined}
        />
      ) : from == "3" ? (
        <MemoryHeader onChange={onChangeMemory} />
      ) : from == "18" ? (

        // CommonHeader now handles its own modals
        <CommonHeader currentPage={currentPage} />

      ) : (
        <>
          {from == "2" ? <div className="flex h-[45px]" /> : null}
          <ObituaryHeader from={from} />
        </>
      )}

      {/* Modals for non-CommonHeader pages */}
      {from !== "18" && (
        <>
          {isModalVisible && (
            <div className="flex">
              <PopUp setIsModalVisible={setIsModalVisible} />
            </div>
          )}

          {isMessageModalVisible && (
            <div className="flex">
              <MessagePopUp setIsMessageModalVisible={setIsMessageModalVisible} />
            </div>
          )}

          {isLocalQuickModalVisible && user === null && (
            <div className="flex">
              <LocalQuickReview
                setIsLocalQuickModalVisible={setIsLocalQuickModalVisible}
              />
            </div>
          )}

          {isLocalQuickReviewModalVisible && user !== null && ( // Fixed prop name
            <div className="flex">
              <LocalQuickReviewModal
                setIsLocalQuickReviewModalVisible={setIsLocalQuickReviewModalVisible}
              />
            </div>
          )}
        </>
      )}

      <main className="flex bg-[#F5F7F9]">{children}</main>

      {/* Footer */}
      {forFooter == "company" ? (
        <CompanyFooter data={data || {}} key={`${data?.id}-company-footer`} />
      ) : forFooter == "memorypage" ? null : (
        <Footer />
      )}

      <DrawerDialoge
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        OnDrawerButtonClicked={OnDrawerButtonClicked}
      />
    </div>
  );
};

export default Layout;
