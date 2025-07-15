"use client"
import React from "react";
import ContactFormPage from "../components/appcomponents/ContactFormPage";
import HeaderRegistration from "../components/appcomponents/HeaderRegistration";
import LoginFooter from "../components/appcomponents/LoginFooter";

const ContactForm = () => {
    return (
        <div className="flex flex-1 flex-col bg-[#F5F7F9]">
            <HeaderRegistration/>
            <ContactFormPage/>
        </div>
    )
}

export default ContactForm;