"use client";

import React from "react";

import Card1 from "../mobile-cards/card1";
import Card2 from "../mobile-cards/card2";
import Card3 from "../mobile-cards/card3";
import Card4 from "../mobile-cards/card4";
import Card5 from "../mobile-cards/card5";
const MobileCards = ({ data }) => {
  return (
    <div className="flex  items-center justify-center">
      <Card1 data={data} canDownload={true} />
      <Card2 />
      <Card3 data={data} />
      <Card4 />
      <Card5 />
    </div>
  );
};

export default MobileCards;
