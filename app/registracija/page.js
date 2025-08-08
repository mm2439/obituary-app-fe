"use client";

import Registration from "@/app/components/appcomponents/Registration";
import HeaderRegistration from "@/app/components/appcomponents/HeaderRegistration";
import Layout from "../components/appcomponents/Layout";

const RegistrationPage = () => {
  return (
    <Layout from={"18"} forFooter={"memorypage"} currentPage="">

      <div className="flex flex-1 flex-col bg-[#F5F7F9]">
        {/* <HeaderRegistration /> */}
        <Registration />
      </div>

    </Layout>
  );
};

export default RegistrationPage;
