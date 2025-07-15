"use client";

import React, { useState } from "react";
import ChangeUrlSlug from "../components/appcomponents/ChangeUrlSlug";

export default function ChangeCompanySlug() {
  const [openChangeUrlSlug, setOpenChangeUrlSlug] = useState(true);
  return (
      <ChangeUrlSlug open={openChangeUrlSlug} setOpen={setOpenChangeUrlSlug} />
  );
}