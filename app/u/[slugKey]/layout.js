import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";
import UserLayout from "./UserLayout";

export default async function ULayout({ children, params }) {
  const role = cookies().get("role")?.value;
  
  if(role !== "User"){
    return notFound();
  }

  return <UserLayout slugKey={params.slugKey}>{children}</UserLayout>;
}