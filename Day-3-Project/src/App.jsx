import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'

const cardData = [
  {
    id: 1,
    location: 'Maldives',
    price: '$1,200',
    bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    location: 'Santorini',
    price: '$980',
    bg: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    location: 'Bali',
    price: '$760',
    bg: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    location: 'Paris',
    price: '$1,450',
    bg: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFyaXN8ZW58MHx8MHx8fDA%3D',
  },
]

const App = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Section1 />
      <Section2 cards={cardData} />
      <Section3 />
    </div>
  )
}

export default App
