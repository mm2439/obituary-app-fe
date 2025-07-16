"use client";
import React, { useState } from "react";
import CompanyRegistration from "../components/appcomponents/CompanyRegistration";
import HeaderRegistration from "../components/appcomponents/HeaderRegistration";
import LoginFooter from "../components/appcomponents/LoginFooter";
import ModalLibrary from "../components/appcomponents/ModalLibrary";
import Layout from "../components/appcomponents/Layout";

const CompanyRegistrationPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [select_id, setSelect_Id] = useState("");
  return (
    <Layout megaMenu={""} isMegaMenuVisible={false} from={"18"}  currentPage="" forFooter={'memorypage'}>
      <div className="flex flex-1 flex-col bg-[#F5F7F9]">
        <ModalLibrary
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          select_id={select_id}
          set_Id={setSelect_Id}
        />
        {/* <HeaderRegistration /> */}
        <CompanyRegistration set_Id={setSelect_Id} setModal={setIsShowModal} />
        {/* <LoginFooter/> */}
      </div>
    </Layout>
  );
};

export default CompanyRegistrationPage;
