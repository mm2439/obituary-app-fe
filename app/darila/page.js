"use client";
import Layout from "../components/appcomponents/Layout";
import OrbetoryFormComp from "../components/appcomponents/OrbetoryFormComp";
import LoginFooter from "../components/appcomponents/LoginFooter";
import Newobituary from "../components/appcomponents/Newobituary";
import Header from "../components/appcomponents/HeaderLogin";
import UserAccountHeader from "../components/appcomponents/UserAccountHeader";
import React, { useState, useRef, useEffect } from "react";
import AddFuneralModal from "../components/appcomponents/AddFuneralModal";
import keeperService from "@/services/keeper-service";
import toast from "react-hot-toast";

const FloristsGifts = () => {
  const [showBelowForms, setShowBelowForms] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState(null);
  const [relation, setRelation] = useState(null);
  const [KeeperExpiry, setKeeperExpiry] = useState(null);
  const [selectedObituary, setSelectedObituary] = useState(null);
  const [email, setEmail] = useState("");

  const funcShowForms = (shouldShow) => {
    setShowBelowForms(shouldShow);
  };
  const focusRef = useRef(null);

  const focusInput = () => {
    focusRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleModalVisibility = () => {
    setIsModalVisible(true);
  };
  const handleAssignKeeper = async () => {
    try {
      const formData = new FormData();

      formData.append("obituaryId", String(selectedObituary));
      formData.append("time", String(KeeperExpiry));
      formData.append("email", email);
      if (relation && name) {
        formData.append("relation", relation);
        formData.append("name", name);
      }

      if (selectedFile) {
        formData.append("deathReport", selectedFile);
      }
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      console.log(formData);

      const response = await keeperService.assignKeeper(formData);
      toast.success("Keeper Assigned Successfully");
      console.log(response);
    } catch (error) {
      toast.error("Some Error Occured");
    }
  };

  return (
    <Layout megaMenu={""} isMegaMenuVisible={false} from={"18"}  currentPage="" forFooter={'memorypage'}>
    <div className="flex flex-1 flex-col bg-[#F5F7F9]">

   
      
      <OrbetoryFormComp
        setModalVisible={handleModalVisibility}
        showForms={funcShowForms}
        focusInput={focusInput}
        setParentEmail={(email) => setEmail(email)}
        setObituaryId={(id) => setSelectedObituary(id)}
        setExpiry={(expiry) => setKeeperExpiry(expiry)}
      />
      {showBelowForms && (
        <Newobituary
          setFile={(file) => setSelectedFile(file)}
          setName={(name) => setName(name)}
          setRelation={(relation) => setRelation(relation)}
          onSubmit={handleAssignKeeper}
          focusRef={focusRef}
        />
      )}
      {isModalVisible && (
        <AddFuneralModal setModalVisible={setIsModalVisible} />
      )}
    </div>
       </Layout>
  );
};

export default FloristsGifts;
