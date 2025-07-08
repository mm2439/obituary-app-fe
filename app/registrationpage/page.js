"use client";

import Registration from "@/app/components/appcomponents/Registration";
import HeaderRegistration from "@/app/components/appcomponents/HeaderRegistration";

const RegistrationPage = () => {
  return (
    <div className="flex flex-1 flex-col bg-[#F5F7F9]">
      <HeaderRegistration />
      <Registration />
    </div>
  );
};

export default RegistrationPage;
