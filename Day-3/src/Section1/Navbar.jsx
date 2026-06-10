import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-white text-gray-900 shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-4'>
        <div className='flex items-center gap-10'>
          <h1 className='text-2xl font-bold tracking-tight'>Lando</h1>
          <nav className='hidden md:flex items-center gap-6 text-sm uppercase text-gray-600'>
            <a href='#' className='hover:text-gray-900 transition'>Home</a>
            <a href='#' className='hover:text-gray-900 transition'>Pricing</a>
            <a href='#' className='hover:text-gray-900 transition'>About</a>
            <a href='#' className='hover:text-gray-900 transition'>Contact</a>
          </nav>
        </div>
        <div className='flex items-center gap-3'>
          <button className='px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50 transition'>Login</button>
          <button className='px-4 py-2 rounded-md bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition'>Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
