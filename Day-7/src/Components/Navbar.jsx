import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-300 to-pink-300 shadow-lg border-b-4 border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">Parth Studio</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link className="text-white hover:text-purple-100 font-medium transition duration-200" to="/">Home</Link>
            <Link className="text-white hover:text-purple-100 font-medium transition duration-200" to="/about">About</Link>
            <Link className="text-white hover:text-purple-100 font-medium transition duration-200" to="/contact">Contact</Link>
            <Link className="text-white hover:text-purple-100 font-medium transition duration-200" to="/product">Product</Link>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button placeholder */}
            <button aria-label="Open menu" className="text-white hover:text-purple-100 focus:outline-none">≡</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
