"use client";
import Header from "./Header";
import ObituaryHeader from "./ObituaryHeader";
import TopBar from "./TopBar";
import Header7 from "./Header7";

import Footer from "./Footer";
import CompanyFooter from "./CompanyFooter";

import DrawerDialoge from "./DrawerDialoge";
import { useState } from "react";
import PopUp from "@/app/components/appcomponents/popup";
import MessagePopUp from "@/app/components/appcomponents/MessagePopup";
import LocalQuickReview from "@/app/components/appcomponents/LocalQuickReview";

const Layout = ({ children, from, forFooter, isMegaMenuVisible, megaMenu = {} }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const OnDrawerButtonClicked = (item) => {
    console.log(item.name);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMessageModalVisible, setIsMessageModalVisible] = useState(false);
  const [isLocalQuickModalVisible, setIsLocalQuickModalVisible] = useState(false);

  return (
    <div>
      {from == "1" || from == "2" ? (
        <div className="fixed top-0 z-50  flex w-full justify-center">
          <TopBar
            setIsModalVisible={setIsModalVisible}
            setIsMessageModalVisible={setIsMessageModalVisible}
            setIsLocalQuickModalVisible={setIsLocalQuickModalVisible}
          />
        </div>
      ) : null}
      {from == "1" ? (
        <Header isMegaMenuVisible={isMegaMenuVisible} onMenuCLick={megaMenu} from={from} />
 
      ) : from == "5" ? (
        <Header7 from={5} />
      ) : from == "7" ? (<Header7 from={7} />) : (
        <>
          {from == "2" ? <div className="flex  h-[45px]" /> : null}
          <ObituaryHeader from={from} />
        </>
      )}
      {isModalVisible && (
        <div className="flex ">
          <PopUp setIsModalVisible={setIsModalVisible} />
        </div>
      )}

      {isMessageModalVisible && (
        <div className="flex ">
          <MessagePopUp setIsMessageModalVisible={setIsMessageModalVisible} />
        </div>
      )}

      {isLocalQuickModalVisible && (
        <div className="flex ">
          <LocalQuickReview
            setIsLocalQuickModalVisible={setIsLocalQuickModalVisible}
          />
        </div>
      )}

      <main className="flex bg-[#F5F7F9]">{children}</main>
      {forFooter == "company" ? (
        <CompanyFooter />
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
