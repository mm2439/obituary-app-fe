"use client";
import React, { useEffect, useRef, useState } from "react";
import obituaryService from "@/services/obituary-service";
import UserAccountHeaderNew from "../../../components/appcomponents/UserAccountHeaderNew";
import { useRouter } from "next/navigation";

const UserAccountDashboard = () => {
  const [isMobilSideBarOpen, setIsMobilSideBarOpen] = useState(true);
  const [isKeeper, setIsKeeper] = useState(false);
  const router = useRouter();
  const gotoTopRef = useRef(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 768) {
        const currUser = localStorage.getItem("user");
        if (currUser) {
          const parsedUser = JSON.parse(currUser);
          setUser(parsedUser);
          router.push(`u/${parsedUser.slugKey}/moj-racun`);
        }
      } else {
        fetchPendingPosts();
        getKeeperMemory();
      }
    }
  }, []);

  const [pendingPosts, setPendingPosts] = useState([]);

  const fetchPendingPosts = async () => {
    try {
      const response = await obituaryService.fetchPendingPosts();

      if (response.error) {
        return;
      }
      console.log(response);
      setPendingPosts(response.pending);

      setIsKeeper(response.isKeeper);
    } catch (err) {
      console.error("Error Fetching Pending Posts:", err);
    }
  };

  const [memories, setMemories] = useState([]);

  const getKeeperMemory = async () => {
    try {
      const response = await obituaryService.getKeeperMemories();

      setMemories(response.obituaries);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoToTop = () => {
    gotoTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <UserAccountHeaderNew
      setIsMobilSideBarOpen={setIsMobilSideBarOpen}
      isMobilSideBarOpen={isMobilSideBarOpen}
      pendingConfirmations={pendingPosts.length}
      isKeeper={isKeeper}
      memories={memories}
    />
  );
};

export default UserAccountDashboard;
