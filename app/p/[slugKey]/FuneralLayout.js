"use client";

import { notFound } from "next/navigation";
import { useEffect } from "react";

export default function FuneralLayout({ children, slugKey }) {
  useEffect(() => {
    if(typeof window !== "undefined"){
      const user = JSON.parse(window.localStorage.getItem("user"));
      console.log("user", user.slugKey);

      if(user.slugKey !== slugKey){
        console.log("user.slugKey", user.slugKey);
        console.log("slugKey", slugKey);
        return notFound();
      }else{
        console.log("user.slugKey", user.slugKey);
        console.log("slugKey", slugKey);
      }
    }
  }, []);

  return <>{children}</>;
}