"use client";
import React, { useState } from "react";
import AddObituary from "../components/appcomponents/AddObituary";
import HeaderRegistration from "../components/appcomponents/HeaderRegistration";
import LoginFooter from "../components/appcomponents/LoginFooter";
import ModalLibrary from "../components/appcomponents/ModalLibrary";
import Layout from "../components/appcomponents/Layout";

const Obituaryform = () => {
  const [isShowModal, setIsShowModal] = useState(true);
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
      {/* <HeaderRegistration isfrom={"ObituaryForm"} /> */}

      <AddObituary set_Id={setSelect_Id} setModal={setIsShowModal} />
    </div>
  </Layout>

  );
};

export default Obituaryform;
