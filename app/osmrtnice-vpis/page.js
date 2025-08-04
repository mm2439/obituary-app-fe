"use client";
import React, { useState, useEffect } from "react";
import AddObituary from "../components/appcomponents/AddObituary";
import HeaderRegistration from "../components/appcomponents/HeaderRegistration";
import LoginFooter from "../components/appcomponents/LoginFooter";
import ModalLibrary from "../components/appcomponents/ModalLibrary";
import Layout from "../components/appcomponents/Layout";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Obituaryform = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [select_id, setSelect_Id] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.error("You must be logged in to access this page.");
      router.push("/registracija");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    // Check if user has permission to create obituaries
    if (!parsedUser.createObituaryPermission) {
      toast.error("You don't have permission to create obituaries.");
      router.push("/");
      return;
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <Layout
        megaMenu={""}
        isMegaMenuVisible={false}
        from={"18"}
        currentPage=""
        forFooter={"memorypage"}
      >
        <div className="flex flex-1 flex-col bg-[#F5F7F9] items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A85C2] mx-auto mb-4"></div>
            <p className="text-[#6D778E] text-lg">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!user?.createObituaryPermission) {
    return (
      <Layout
        megaMenu={""}
        isMegaMenuVisible={false}
        from={"18"}
        currentPage=""
        forFooter={"memorypage"}
      >
        <div className="flex flex-1 flex-col bg-[#F5F7F9] items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <h2 className="text-xl font-bold mb-2">Access Denied</h2>
              <p>You don't have permission to create obituaries.</p>
              <p className="text-sm mt-2">Please contact your administrator.</p>
            </div>
            <button
              onClick={() => router.push("/")}
              className="bg-[#0A85C2] text-white px-6 py-2 rounded hover:bg-[#1860A3]"
            >
              Go Back
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      megaMenu={""}
      isMegaMenuVisible={false}
      from={"18"}
      currentPage=""
      forFooter={"memorypage"}
    >
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
