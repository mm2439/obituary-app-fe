import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";
import FloristLayout from "./FloristLayout";

export default async function CLayout({ children, params }) {
  const role = cookies().get("role")?.value;
  
  if(role !== "Florist"){
    return notFound();
  }

  return <FloristLayout slugKey={params.slugKey}>{children}</FloristLayout>;
}