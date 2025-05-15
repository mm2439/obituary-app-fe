"use client"

import React from 'react'
import Card1 from '../components/mobile-cards/card1'
import Card2 from '../components/mobile-cards/card2'
import Card3 from '../components/mobile-cards/card3'
import Card4 from '../components/mobile-cards/card4'
import Card5 from '../components/mobile-cards/card5'

const ViewCards = () => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  )
}

export default ViewCards