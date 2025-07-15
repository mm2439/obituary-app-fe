"use client"
import React from "react";
import ContactFormPage from "../components/appcomponents/ContactFormPage";
import HeaderRegistration from "../components/appcomponents/HeaderRegistration";
import LoginFooter from "../components/appcomponents/LoginFooter";
import Layout from "../components/appcomponents/Layout";

const ContactForm = () => {
    return (
    <Layout from={"18"} forFooter={"memorypage"} currentPage="">
        <div className="flex flex-1 flex-col bg-[#F5F7F9]">
            {/* <HeaderRegistration/> */}
            <ContactFormPage/>
        </div>
    </Layout>
    
    )
}

export default ContactForm;