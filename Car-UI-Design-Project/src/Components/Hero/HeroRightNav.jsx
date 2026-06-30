import React from 'react'

const HeroRightNav = () => {
  return (
    <nav className="bg-white text-black border-b border-black flex justify-between items-center p-4">
      <div>
        <h1 className="m-0 text-xl font-bold">CARCAPITOL</h1>
      </div>

      <div className="flex items-center">
        <h2 className="text-gray-500 mx-3 cursor-pointer text-sm">Home</h2>
        <h2 className="text-gray-500 mx-3 cursor-pointer text-sm">Catalog</h2>
        <h2 className="text-gray-500 mx-3 cursor-pointer text-sm">Services</h2>
        <h2 className="text-gray-500 mx-3 cursor-pointer text-sm">How It Works</h2>
      </div>

      <div>
        <button className="bg-black text-white px-4 py-2 rounded">Log in</button>
      </div>
    </nav>
  )
}

export default HeroRightNav
