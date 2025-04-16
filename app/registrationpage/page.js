"use client";
import Registration from "../components/appcomponents/Registration";
import LoginFooter from "../components/appcomponents/LoginFooter";
import Header from "../components/appcomponents/HeaderLogin";
import HeaderRegistration from "../components/appcomponents/HeaderRegistration";

const RegistrationPage = () => {
  return (
    <div className="flex flex-1 flex-col bg-[#F5F7F9]">
      <HeaderRegistration />
      <Registration />
      {/* <LoginFooter /> */}
    </div>
  );
};

export default RegistrationPage;
