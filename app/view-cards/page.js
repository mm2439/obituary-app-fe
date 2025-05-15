"use client"

import React from 'react'
import Card1 from '../components/mobile-cards/card1'
import Card2 from '../components/mobile-cards/card2'

const ViewCards = () => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      <Card1 />
      <Card2 />
    </div>
  )
}

export default ViewCards