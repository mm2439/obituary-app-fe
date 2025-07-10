"use client";

import React from "react";

import Card1 from "../mobile-cards/card1";
import Card2 from "../mobile-cards/card2";
import Card3 from "../mobile-cards/card3";
import Card4 from "../mobile-cards/card4";
import Card5 from "../mobile-cards/card5";

const MobileCards = ({ data, cardRefs }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <Card1 cardRefs={cardRefs} data={data} isAssigned={true} index={0} />
      <Card2 cardRefs={cardRefs} data={data} isAssigned={true} index={1} />
      <Card3 cardRefs={cardRefs} data={data} isAssigned={true} index={2} />
      <Card4 cardRefs={cardRefs} data={data} isAssigned={true} index={3} />
      <Card5 cardRefs={cardRefs} data={data} isAssigned={true} index={4} />
    </div>
  );
};

export default MobileCards;
