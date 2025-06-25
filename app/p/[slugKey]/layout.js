import React from "react";
import FuneralLayout from "./FuneralLayout";

export default async function PLayout({ children, params }) {
  const role = cookies().get("role")?.value;
  
  if(role !== "Funeral"){
    return notFound();
  }

  return <FuneralLayout slugKey={params.slugKey}>{children}</FuneralLayout>;
}