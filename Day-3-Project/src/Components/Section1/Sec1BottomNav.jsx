import React from 'react'

const Sec1BottomNav = () => {
  return (
    <div className='grid grid-cols-4 gap-6 bg-white p-8 rounded-lg shadow-md'>
      <div>
        <h4 className='text-gray-500 text-sm font-medium mb-2'>From</h4>
        <h2 className='text-black text-2xl font-bold'>London</h2>
      </div>

      <div>
        <h4 className='text-gray-500 text-sm font-medium mb-2'>To</h4>
        <h2 className='text-black text-2xl font-bold'>Paris</h2>
      </div>

      <div>
        <h4 className='text-gray-500 text-sm font-medium mb-2'>Departure Date</h4>
        <h2 className='text-black text-2xl font-bold'>01 April 2026</h2>
      </div>

      <div>
        <h4 className='text-gray-500 text-sm font-medium mb-2'>Return Date</h4>
        <h2 className='text-black text-2xl font-bold'>11 Nov 2026</h2>
      </div>

      <button className='col-span-4 bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors'>Search Flights</button>
      <h3 className='col-span-4 text-center text-2xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse'>Created By Parth Chittalwar</h3>
    </div>
  )
}

export default Sec1BottomNav
