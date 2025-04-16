"use client";
import Layout from "../components/appcomponents/Layout";
import OrbetoryFormComp from "../components/appcomponents/OrbetoryFormComp";
import LoginFooter from "../components/appcomponents/LoginFooter";
import Newobituary from "../components/appcomponents/Newobituary"
import Header from "../components/appcomponents/HeaderLogin";
import UserAccountHeader from "../components/appcomponents/UserAccountHeader";
import React, {useState, useRef} from "react";



const FloristsGifts = () => {
  const [showBelowForms ,setShowBelowForms] = useState(false)
  const funcShowForms = (shouldShow) => {
    
      setShowBelowForms(shouldShow)
}
const focusRef = useRef(null);

  const focusInput = () => {
   
    focusRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="flex flex-1 flex-col bg-[#F5F7F9]">
      <UserAccountHeader />
    <OrbetoryFormComp showForms={funcShowForms} focusInput={focusInput}/>
      {showBelowForms && <Newobituary focusRef={focusRef} />}
    </div>
  );
};

export default FloristsGifts;
